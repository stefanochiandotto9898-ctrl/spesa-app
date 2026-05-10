#Requires -RunAsAdministrator
<#
.SYNOPSIS
    Setup automazione aggiornamento offerte supermercati - Spesa App
.DESCRIPTION
    Questo script:
    1. Installa Node.js se non presente (tramite winget)
    2. Installa le dipendenze npm dello scraper (Puppeteer)
    3. (Opzionale) Installa Netlify CLI per il deploy automatico
    4. Crea un Task nel Windows Task Scheduler ogni MARTEDI' alle 07:30
.NOTES
    Eseguire come Amministratore!
    Clic destro su setup_automazione.ps1 → "Esegui con PowerShell (Amministratore)"
#>

$ErrorActionPreference = "Stop"
$ScraperDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$AppDir     = Split-Path -Parent $ScraperDir
$BatchFile  = Join-Path $ScraperDir "esegui_martedi.bat"
$TaskName   = "SpesaApp - Aggiorna Offerte Settimanali"
$LogFile    = Join-Path $ScraperDir "log_automazione.txt"

function Write-Step($n, $msg) {
    Write-Host ""
    Write-Host "[$n] $msg" -ForegroundColor Cyan
}
function Write-OK($msg)  { Write-Host "    ✅ $msg" -ForegroundColor Green }
function Write-Warn($msg){ Write-Host "    ⚠️  $msg" -ForegroundColor Yellow }
function Write-Err($msg) { Write-Host "    ❌ $msg" -ForegroundColor Red }

Clear-Host
Write-Host ""
Write-Host "╔══════════════════════════════════════════════════╗" -ForegroundColor Blue
Write-Host "║     Spesa App — Setup Automazione Offerte        ║" -ForegroundColor Blue
Write-Host "║     Scraper automatico ogni martedì alle 07:30   ║" -ForegroundColor Blue
Write-Host "╚══════════════════════════════════════════════════╝" -ForegroundColor Blue
Write-Host ""

# ─────────────────────────────────────────────────────────────
# STEP 1: Verifica / Installa Node.js
# ─────────────────────────────────────────────────────────────
Write-Step 1 "Controllo Node.js..."

$NodePath = $null
$commonPaths = @(
    "C:\Program Files\nodejs\node.exe",
    "C:\Program Files (x86)\nodejs\node.exe",
    "$env:LOCALAPPDATA\Programs\nodejs\node.exe"
)
foreach ($p in $commonPaths) {
    if (Test-Path $p) { $NodePath = $p; break }
}
if (-not $NodePath) {
    try { $NodePath = (Get-Command node -ErrorAction Stop).Source } catch {}
}

if ($NodePath) {
    $nodeVer = & "$NodePath" --version 2>&1
    Write-OK "Node.js già installato: $nodeVer ($NodePath)"
} else {
    Write-Warn "Node.js non trovato. Installazione in corso..."
    
    # Prova con winget
    $winget = Get-Command winget -ErrorAction SilentlyContinue
    if ($winget) {
        Write-Host "    → Installazione via winget..." -ForegroundColor Gray
        winget install OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements
        Start-Sleep -Seconds 5
        
        # Aggiorna PATH per questa sessione
        $env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")
        
        try {
            $NodePath = (Get-Command node -ErrorAction Stop).Source
            Write-OK "Node.js installato: $(& node --version)"
        } catch {
            Write-Err "Installazione winget fallita. Installa manualmente da https://nodejs.org"
            Start-Process "https://nodejs.org/it/download"
            Read-Host "Premi INVIO dopo aver installato Node.js, poi riesegui questo script"
            exit 1
        }
    } else {
        Write-Warn "winget non disponibile. Apertura pagina download Node.js..."
        Start-Process "https://nodejs.org/it/download"
        Write-Err "Installa Node.js da nodejs.org, poi riesegui questo script come Amministratore."
        Read-Host "Premi INVIO per chiudere"
        exit 1
    }
}

# ─────────────────────────────────────────────────────────────
# STEP 2: Installa dipendenze npm (Puppeteer)
# ─────────────────────────────────────────────────────────────
Write-Step 2 "Installazione dipendenze scraper (Puppeteer)..."

$NpmPath = Join-Path (Split-Path $NodePath) "npm.cmd"
if (-not (Test-Path $NpmPath)) { $NpmPath = "npm" }

Push-Location $ScraperDir
try {
    Write-Host "    → npm install (potrebbe richiedere 1-2 minuti per scaricare Chromium)..." -ForegroundColor Gray
    & "$NpmPath" install --quiet 2>&1 | Out-Null
    Write-OK "Dipendenze installate correttamente."
} catch {
    Write-Err "Errore npm install: $_"
} finally {
    Pop-Location
}

# ─────────────────────────────────────────────────────────────
# STEP 3: Netlify CLI (opzionale - per deploy automatico)
# ─────────────────────────────────────────────────────────────
Write-Step 3 "Configurazione Netlify CLI (deploy automatico)..."

$hasNetlify = Get-Command netlify -ErrorAction SilentlyContinue
if (-not $hasNetlify) {
    Write-Host "    → Installazione Netlify CLI..." -ForegroundColor Gray
    try {
        & "$NpmPath" install -g netlify-cli --quiet 2>&1 | Out-Null
        Write-OK "Netlify CLI installato."
        Write-Host ""
        Write-Host "    📌 IMPORTANTE: Devi collegare il progetto a Netlify una volta:" -ForegroundColor Yellow
        Write-Host "       1. Apri PowerShell nella cartella: $AppDir" -ForegroundColor White
        Write-Host "       2. Digita: netlify login" -ForegroundColor White
        Write-Host "       3. Poi: netlify link" -ForegroundColor White
        Write-Host "       4. Seleziona il tuo sito Spesa App" -ForegroundColor White
        Write-Host ""
        Read-Host "    Premi INVIO per continuare con il Task Scheduler"
    } catch {
        Write-Warn "Netlify CLI non installato (opzionale). Il sito dovrà essere aggiornato manualmente."
    }
} else {
    Write-OK "Netlify CLI già presente."
}

# ─────────────────────────────────────────────────────────────
# STEP 4: Crea Task su Windows Task Scheduler
# ─────────────────────────────────────────────────────────────
Write-Step 4 "Registrazione task automatico su Windows Task Scheduler..."

# Rimuovi task esistente se presente
Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false -ErrorAction SilentlyContinue

# Configurazione task
$action = New-ScheduledTaskAction `
    -Execute "cmd.exe" `
    -Argument "/c `"$BatchFile`" >> `"$LogFile`" 2>&1" `
    -WorkingDirectory $ScraperDir

# Ogni martedì alle 07:30
$trigger = New-ScheduledTaskTrigger `
    -Weekly `
    -DaysOfWeek Tuesday `
    -At "07:30"

# Impostazioni: esegui anche se in ritardo, riprova se fallisce
$settings = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -RunOnlyIfNetworkAvailable `
    -ExecutionTimeLimit (New-TimeSpan -Hours 1) `
    -RestartCount 2 `
    -RestartInterval (New-TimeSpan -Minutes 30) `
    -WakeToRun $false

# Registra con credenziali utente corrente
$principal = New-ScheduledTaskPrincipal `
    -UserId $env:USERNAME `
    -LogonType S4U `
    -RunLevel Highest

try {
    $task = Register-ScheduledTask `
        -TaskName $TaskName `
        -TaskPath "\SpesaApp\" `
        -Action $action `
        -Trigger $trigger `
        -Settings $settings `
        -Principal $principal `
        -Description "Aggiorna le offerte dei supermercati ogni martedì e rideploya l'app su Netlify."
    
    Write-OK "Task creato con successo!"
    Write-Host ""
    Write-Host "    📅 Esecuzione: Ogni MARTEDI alle 07:30" -ForegroundColor Green
    Write-Host "    📁 Cartella task: \SpesaApp\$TaskName" -ForegroundColor Gray
    Write-Host "    📋 Log: $LogFile" -ForegroundColor Gray
} catch {
    Write-Err "Errore creazione task: $_"
    Write-Warn "Prova a rieseguire lo script come Amministratore."
    exit 1
}

# ─────────────────────────────────────────────────────────────
# RIEPILOGO FINALE
# ─────────────────────────────────────────────────────────────
Write-Host ""
Write-Host "╔══════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║               ✅ SETUP COMPLETATO!               ║" -ForegroundColor Green
Write-Host "╚══════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host " Ogni martedì mattina alle 07:30 il PC aggiornerà" -ForegroundColor White
Write-Host " automaticamente le offerte dei supermercati:" -ForegroundColor White
Write-Host ""
Write-Host "   🔍 Visotto, Lidl, Despar, Dpiù, Conad" -ForegroundColor Yellow
Write-Host ""
Write-Host " Per testare subito senza aspettare martedì:" -ForegroundColor White
Write-Host "   → Apri Task Scheduler → SpesaApp → clic destro → Esegui" -ForegroundColor Cyan
Write-Host "   → Oppure fai doppio clic su: esegui_martedi.bat" -ForegroundColor Cyan
Write-Host ""
Write-Host " ⚠️  Il PC deve essere acceso ogni martedì mattina." -ForegroundColor Yellow
Write-Host "    Per un'alternativa 100%% cloud (anche con PC spento)," -ForegroundColor Yellow  
Write-Host "    usa GitHub Actions (vedi file github_actions_alternativa.md)" -ForegroundColor Yellow
Write-Host ""
Read-Host "Premi INVIO per chiudere"
