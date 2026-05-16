/**
 * Scraper Offerte Supermercati - Portogruaro / Concordia Sagittaria
 * Utilizza Puppeteer per leggere i volantini da Promoqui.it
 * 
 * Supermercati:
 *   - Visotto (Portogruaro)       → visotto.it
 *   - Lidl (Portogruaro)          → promoqui.it/volantino/lidl
 *   - Despar (Concordia S.)       → promoqui.it/volantino/despar
 *   - Dpiù (Fossalta)             → promoqui.it/volantino/dpiu
 *   - Conad (Portogruaro)         → promoqui.it/volantino/conad
 * 
 * Uso: node index.js
 * Output: ../offerte.json
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, '../offerte.json');

// Parole chiave da cercare nei volantini (allineate con il catalogo dell'app)
const KEYWORDS = [
    'pasta', 'riso', 'farina', 'pane', 'grissin', 'crackers',
    'latte', 'yogurt', 'burro', 'formaggio', 'mozzarella', 'panna',
    'pollo', 'carne', 'manzo', 'vitello', 'salsiccia', 'prosciutto', 'salame',
    'pesce', 'tonno', 'salmone',
    'olio', 'passata', 'polpa', 'sugo', 'pesto',
    'caffè', 'caffe', 'capsule', 'dolce gusto', 'nespresso',
    'birra', 'vino', 'prosecco', 'gin', 'acqua',
    'patatine', 'cereali', 'biscotti', 'merendine', 'taralli', 'noccioline',
    'carta igienica', 'scottex', 'dentifricio', 'spazzolino', 'detersivo',
    'ammorbidente', 'shampoo', 'bagnoschiuma'
];

// Configurazione supermercati con le URL di Promoqui
const SUPERMARKETS = [
    {
        key: 'lidl',
        name: 'Lidl',
        location: 'Portogruaro',
        url: 'https://www.promoqui.it/volantino/lidl',
        color: '#ffcc00'
    },
    {
        key: 'despar',
        name: 'Despar',
        location: 'Concordia Sagittaria',
        url: 'https://www.promoqui.it/volantino/despar',
        color: '#e10600'
    },
    {
        key: 'dpiu',
        name: 'Dpiù',
        location: 'Fossalta di Portogruaro',
        url: 'https://www.promoqui.it/volantino/dpiu',
        color: '#ff8c00'
    },
    {
        key: 'conad',
        name: 'Conad',
        location: 'Portogruaro',
        url: 'https://www.promoqui.it/volantino/conad',
        color: '#00965a'
    }
];

// Assegna icona emoji al prodotto
function guessIcon(name) {
    const n = name.toLowerCase();
    if (n.includes('pollo') || n.includes('carne') || n.includes('vitello') || n.includes('manzo')) return '🍗';
    if (n.includes('pasta') || n.includes('spaghetti') || n.includes('penne') || n.includes('rigatoni')) return '🍝';
    if (n.includes('latte')) return '🥛';
    if (n.includes('caffè') || n.includes('caffe') || n.includes('capsule') || n.includes('nespresso') || n.includes('dolce gusto')) return '☕';
    if (n.includes('birra')) return '🍺';
    if (n.includes('vino') || n.includes('prosecco') || n.includes('gin')) return '🍷';
    if (n.includes('patatine')) return '🍟';
    if (n.includes('yogurt')) return '🧀';
    if (n.includes('formaggio') || n.includes('mozzarella')) return '🧀';
    if (n.includes('pane') || n.includes('bauletto')) return '🍞';
    if (n.includes('cereali') || n.includes('muesli') || n.includes('corn flakes')) return '🥣';
    if (n.includes('passata') || n.includes('polpa') || n.includes('sugo') || n.includes('pomodoro')) return '🍅';
    if (n.includes('olio')) return '🫒';
    if (n.includes('carta igienica') || n.includes('scottex') || n.includes('rotol')) return '🧻';
    if (n.includes('dentifricio') || n.includes('spazzolino')) return '🪥';
    if (n.includes('detersivo') || n.includes('ammorbidente')) return '🧺';
    if (n.includes('acqua')) return '💧';
    if (n.includes('tarall') || n.includes('grissin') || n.includes('cracker')) return '🥨';
    if (n.includes('prosciutto') || n.includes('salame') || n.includes('mortadella') || n.includes('speck')) return '🥩';
    if (n.includes('tonno') || n.includes('salmone') || n.includes('pesce')) return '🐟';
    if (n.includes('riso')) return '🍚';
    return '🛒';
}

// Calcola il keyword per la personalizzazione
function guessKeyword(name) {
    const n = name.toLowerCase();
    if (n.includes('pasta') || n.includes('spaghetti') || n.includes('penne')) return 'pasta';
    if (n.includes('latte')) return 'latte';
    if (n.includes('yogurt')) return 'yogurt';
    if (n.includes('caffè') || n.includes('caffe') || n.includes('capsule')) return 'caffè';
    if (n.includes('birra')) return 'birra';
    if (n.includes('vino') || n.includes('gin')) return 'gin';
    if (n.includes('patatine')) return 'patatine';
    if (n.includes('cereali')) return 'cereali';
    if (n.includes('pollo')) return 'pollo';
    if (n.includes('carta igienica') || n.includes('scottex')) return 'carta igienica';
    if (n.includes('dentifricio')) return 'dentifricio';
    if (n.includes('spazzolino')) return 'spazzolino';
    if (n.includes('passata') || n.includes('pomodoro')) return 'passata';
    if (n.includes('olio')) return 'olio';
    if (n.includes('prosciutto')) return 'prosciutto';
    if (n.includes('tarall')) return 'taralli';
    return n.split(' ')[0];
}

// Verifica se il prodotto è rilevante per la spesa
function isRelevant(name) {
    const n = name.toLowerCase();
    return KEYWORDS.some(k => n.includes(k));
}

// Scrapa un singolo supermercato su Promoqui
async function scrapeSupermarket(browser, market) {
    console.log(`\n🔍 Scraping ${market.name} (${market.location})...`);
    const page = await browser.newPage();
    const offers = [];

    try {
        await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');
        await page.goto(market.url, { waitUntil: 'networkidle2', timeout: 30000 });

        // Attendi che le offerte vengano caricate
        await page.waitForSelector('.css-6i29zs, [class*="product"], [class*="offer"], [class*="price"]', {
            timeout: 10000
        }).catch(() => console.log(`  ⚠️  Nessun selettore trovato per ${market.name}`));

        // Estrai i testi delle offerte dalla pagina
        const rawOffers = await page.evaluate(() => {
            const results = [];
            // Cerca tutti i link delle offerte su Promoqui
            document.querySelectorAll('a[href*="#p="]').forEach(link => {
                const text = link.textContent.trim();
                // Estrai prezzo dal testo
                const priceMatch = text.match(/(\d+[.,]\d{2})\s*€/);
                if (priceMatch && text.length > 5) {
                    const price = parseFloat(priceMatch[1].replace(',', '.'));
                    // Il nome è il testo senza il prezzo e i tag CSS
                    const name = text.replace(/[\d.,]+€.*/, '').replace(/-\d+%/, '').trim();
                    if (name.length > 3) {
                        results.push({ name, price });
                    }
                }
            });
            return results;
        });

        let id = Date.now();
        rawOffers.forEach(item => {
            if (isRelevant(item.name)) {
                offers.push({
                    id: id++,
                    supermarket: market.name,
                    location: market.location,
                    supermarketKey: market.key,
                    product: item.name,
                    originalPrice: null,
                    price: item.price,
                    discount: null,
                    keyword: guessKeyword(item.name),
                    icon: guessIcon(item.name),
                    isPersonalized: false
                });
            }
        });

        console.log(`  ✅ Trovate ${offers.length} offerte rilevanti per ${market.name}`);
    } catch (err) {
        console.error(`  ❌ Errore per ${market.name}:`, err.message);
    } finally {
        await page.close();
    }

    return offers;
}

// Funzione principale
async function main() {
    console.log('🚀 Avvio scraper offerte supermercati...');
    console.log('📅 Data:', new Date().toLocaleDateString('it-IT'));

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    let allOffers = [];
    let offerId = 1;

    for (const market of SUPERMARKETS) {
        const offers = await scrapeSupermarket(browser, market);
        allOffers = allOffers.concat(offers.map(o => ({ ...o, id: offerId++ })));
        // Pausa tra le richieste per evitare ban
        await new Promise(r => setTimeout(r, 2000));
    }

    await browser.close();

    // Calcola date validità (settimana corrente: giovedì → mercoledì)
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0=Dom, 4=Gio
    const daysToThursday = (dayOfWeek >= 4) ? dayOfWeek - 4 : dayOfWeek + 3;
    const validFrom = new Date(today);
    validFrom.setDate(today.getDate() - daysToThursday);
    const validTo = new Date(validFrom);
    validTo.setDate(validFrom.getDate() + 6);

    const output = {
        lastUpdate: today.toISOString().split('T')[0],
        validFrom: validFrom.toISOString().split('T')[0],
        validTo: validTo.toISOString().split('T')[0],
        offers: allOffers
    };

    // Se non ha trovato nulla, mantieni il JSON esistente
    if (allOffers.length === 0) {
        console.log('\n⚠️  Nessuna offerta trovata. Il file offerte.json NON è stato sovrascritto.');
        console.log('   Possibili cause: le pagine usano JavaScript che richiede più tempo o il sito è cambiato.');
        console.log('   Apri manualmente: https://www.promoqui.it/volantino/lidl');
        process.exit(0);
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf-8');
    console.log(`\n✅ Salvate ${allOffers.length} offerte totali in offerte.json`);
    console.log(`   Validità: ${output.validFrom} → ${output.validTo}`);
    console.log('\n📌 Offerte aggiornate correttamente!');
}

main().catch(err => {
    console.error('❌ Errore critico:', err);
    process.exit(1);
});
