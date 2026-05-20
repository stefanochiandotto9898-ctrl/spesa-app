/**
 * Scraper Volantini Supermercati - Portogruaro / Concordia Sagittaria
 * Utilizza Cheerio per estrarre i volantini dal canale Telegram "anteprimavolantini"
 * 
 * Supermercati monitorati: Lidl, Conad, Despar, Visotto, Dpiù
 * 
 * Uso: node index.js
 * Output: ../volantini.json
 */

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, '../volantini.json');
const TELEGRAM_URL = 'https://t.me/s/anteprimavolantini';

const TARGETS = [
    { name: 'Lidl', keywords: ['lidl'], icon: '🍋' },
    { name: 'Conad', keywords: ['conad'], icon: '🌼' },
    { name: 'Despar', keywords: ['despar', 'eurospar', 'interspar'], icon: '🌲' },
    { name: 'Visotto', keywords: ['visotto', 'ipervisotto'], icon: '🛒' },
    { name: 'Dpiù', keywords: ['dpiù', 'd-più', 'dpiu', 'd-piu'], icon: '➕' }
];

async function scrapeTelegram() {
    console.log(`🚀 Avvio scraper volantini da ${TELEGRAM_URL}...`);
    
    try {
        const response = await axios.get(TELEGRAM_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        const $ = cheerio.load(response.data);
        const flyers = [];

        // Analizza ogni messaggio nel canale
        $('.tgme_widget_message').each((i, el) => {
            const messageText = $(el).find('.tgme_widget_message_text').text().toLowerCase();
            
            // Cerca se il messaggio menziona uno dei nostri supermercati target
            const matchedTarget = TARGETS.find(target => 
                target.keywords.some(kw => messageText.includes(kw))
            );

            if (matchedTarget) {
                let url = '';

                // Cerca un link diretto nel testo del messaggio
                const textLink = $(el).find('.tgme_widget_message_text a').attr('href');
                if (textLink && !textLink.includes('t.me/')) {
                    url = textLink;
                } 
                // Altrimenti cerca un documento allegato (es. PDF)
                else if ($(el).find('.tgme_widget_message_document').length > 0) {
                    url = $(el).find('.tgme_widget_message_document').attr('href') || 
                          $(el).find('.tgme_widget_message_document_wrap').attr('href');
                }
                // Altrimenti cerca un'immagine allegata
                else if ($(el).find('.tgme_widget_message_photo_wrap').length > 0) {
                    const style = $(el).find('.tgme_widget_message_photo_image').attr('style') || '';
                    const urlMatch = style.match(/background-image:url\('([^']+)'\)/);
                    if (urlMatch && urlMatch[1]) {
                        url = urlMatch[1];
                    }
                }

                // Fallback: se è un post nativo di Telegram con foto/documento usa il link del post stesso
                if (!url) {
                    url = 'https://t.me/' + $(el).attr('data-post');
                }

                if (url) {
                    // Controlla se abbiamo già aggiunto questo supermercato (teniamo solo il volantino più recente, assumendo che i messaggi in basso siano più recenti, ma aggiorneremo l'array alla fine)
                    flyers.push({
                        name: `${matchedTarget.name}`,
                        url: url,
                        icon: matchedTarget.icon
                    });
                }
            }
        });

        // Tieni solo il volantino più recente (l'ultimo messaggio nel DOM per quel supermercato)
        const uniqueFlyers = {};
        flyers.forEach(f => {
            uniqueFlyers[f.name] = f;
        });

        const finalFlyers = Object.values(uniqueFlyers);
        
        console.log(`✅ Trovati ${finalFlyers.length} volantini rilevanti.`);

        if (finalFlyers.length > 0) {
            // Unisci con i vecchi volantini se alcuni mancano nel feed recente
            let existingData = { flyers: [] };
            if (fs.existsSync(OUTPUT_FILE)) {
                try {
                    existingData = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
                } catch(e) {}
            }

            const existingFlyersMap = {};
            (existingData.flyers || []).forEach(f => {
                existingFlyersMap[f.name] = f;
            });

            // Aggiorna con i nuovi trovati
            finalFlyers.forEach(f => {
                existingFlyersMap[f.name] = f;
            });

            const mergedFlyers = Object.values(existingFlyersMap);

            const output = {
                updated: new Date().toISOString(),
                flyers: mergedFlyers
            };

            fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 4), 'utf-8');
            console.log(`💾 Salvati ${mergedFlyers.length} volantini in volantini.json`);
        } else {
            console.log('⚠️ Nessun nuovo volantino trovato per i supermercati target.');
        }

    } catch (error) {
        console.error('❌ Errore durante lo scraping:', error.message);
    }
}

scrapeTelegram();
