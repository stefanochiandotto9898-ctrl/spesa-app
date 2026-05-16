@echo off
chcp 65001 >nul
title Spesa App - Aggiornamento Offerte Settimanali

echo.
echo ╔══════════════════════════════════════════╗
echo ║   Spesa App - Aggiornamento Offerte      ║
echo ║   %DATE% %TIME:~0,5%                         ║
echo ╚══════════════════════════════════════════╝
echo.

:: Vai nella cartella dello scraper
cd /d "%~dp0"

:: Cerca node.exe nelle posizioni comuni
set NODE_EXE=
for %%P in (
    "C:\Program Files\nodejs\node.exe"
    "C:\Program Files (x86)\nodejs\node.exe"
    "%LOCALAPPDATA%\Programs\nodejs\node.exe"
    "%ProgramFiles%\nodejs\node.exe"
) do (
    if exist %%P set NODE_EXE=%%~P
)

:: Se non trovato, prova nel PATH
if "%NODE_EXE%"=="" (
    where node >nul 2>&1
    if %errorlevel% equ 0 (
        set NODE_EXE=node
    )
)

if "%NODE_EXE%"=="" (
    echo [ERRORE] Node.js non trovato!
    echo Esegui prima setup_automazione.ps1 come amministratore.
    pause
    exit /b 1
)

echo [1/3] Node.js trovato: %NODE_EXE%

:: Installa dipendenze se node_modules non esiste
if not exist "node_modules\" (
    echo [2/3] Installazione dipendenze npm...
    "%NODE_EXE%" "%~dp0..\..\..\..\..\Program Files\nodejs\npm" install 2>nul || npm install
) else (
    echo [2/3] Dipendenze già installate.
)

:: Esegui lo scraper
echo [3/3] Avvio scraper offerte...
"%NODE_EXE%" index.js

if %errorlevel% equ 0 (
    echo.
    echo ✅ Offerte aggiornate con successo!
    
    echo.
    echo 🚀 Le offerte sono pronte per essere pushate su GitHub!
    echo    Usa: git add . ^& git commit -m "Aggiorna offerte" ^& git push
) else (
    echo.
    echo ❌ Errore nello scraper. Controlla la connessione internet.
)

echo.
echo ─────────────────────────────────────────
echo   Log salvato. Prossima esecuzione: martedi prossimo.
echo ─────────────────────────────────────────
timeout /t 10
