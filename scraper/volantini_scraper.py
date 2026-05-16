import os
import asyncio
import json
from datetime import datetime
import requests
from playwright.async_api import async_playwright

# Configurazione
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
VOLANTINI_DIR = os.path.join(os.path.dirname(BASE_DIR), "volantini")
JSON_FILE = os.path.join(os.path.dirname(BASE_DIR), "volantini.json")

# Assicurati che la cartella volantini esista
if not os.path.exists(VOLANTINI_DIR):
    os.makedirs(VOLANTINI_DIR)

async def download_file(url, store_name):
    date_str = datetime.now().strftime("%Y_%m_%d")
    filename = f"volantino_{store_name}_{date_str}.pdf"
    filepath = os.path.join(VOLANTINI_DIR, filename)
    
    # Controlla se esiste già
    if os.path.exists(filepath):
        print(f"[{store_name}] File già presente: {filename}")
        return filename

    print(f"[{store_name}] Download in corso: {url}")
    try:
        response = requests.get(url, stream=True, timeout=30)
        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            print(f"[{store_name}] Salvato: {filename}")
            return filename
        else:
            print(f"[{store_name}] Errore download: {response.status_code}")
    except Exception as e:
        print(f"[{store_name}] Errore: {e}")
    return None

async def scrape_visotto(browser):
    print("[Visotto] Ricerca volantino...")
    page = await browser.new_page()
    try:
        await page.goto("https://supermercativisotto.it/volantino", wait_until="domcontentloaded")
        # Accetta cookie se presente
        try:
            cookie_btn = await page.query_selector("button:has-text('Accetta'), .cc-accept")
            if cookie_btn: await cookie_btn.click()
        except:
            pass
        
        # Trova il link PDF (cerca l'estensione invece del testo)
        pdf_link = await page.get_attribute("a[href$='.pdf']", "href")
        if not pdf_link:
            pdf_link = await page.get_attribute("a:has-text('SCARICA')", "href")
            
        if pdf_link:
            if not pdf_link.startswith("http"):
                pdf_link = "https://supermercativisotto.it" + pdf_link
            return await download_file(pdf_link, "visotto")
    except Exception as e:
        print(f"[Visotto] Errore: {e}")
    finally:
        await page.close()
    return None

async def scrape_lidl(browser):
    print("[Lidl] Ricerca volantino...")
    page = await browser.new_page()
    try:
        # URL generale volantini Lidl
        await page.goto("https://www.lidl.it/volantini", wait_until="domcontentloaded")
        
        # Gestione cookie
        try:
            cookie_btn = await page.query_selector("#onetrust-accept-btn-handler")
            if cookie_btn: await cookie_btn.click()
        except:
            pass
        
        # Troviamo il bottone PDF
        pdf_link = await page.get_attribute("a[href$='.pdf']", "href")
        if not pdf_link:
            # A volte Lidl apre un viewer o iframe
            iframe = await page.query_selector("iframe")
            if iframe:
                pdf_link = await iframe.get_attribute("src")
        
        if pdf_link:
            if not pdf_link.startswith("http"):
                pdf_link = "https://www.lidl.it" + pdf_link
            return await download_file(pdf_link, "lidl")
    except Exception as e:
        print(f"[Lidl] Errore: {e}")
    finally:
        await page.close()
    return None

async def scrape_conad(browser):
    print("[Conad] Ricerca volantino...")
    page = await browser.new_page()
    try:
        # Spazio Conad Portogruaro
        await page.goto("https://www.conad.it/ricerca-negozi/negozio.005118.html", wait_until="networkidle")
        
        # Accetta cookie
        cookie_btn = await page.query_selector("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll")
        if cookie_btn: await cookie_btn.click()
        
        # Cerca il volantino interattivo
        flyer_btn = await page.query_selector("a:has-text('Sfoglia il volantino'), .flyer-button")
        if flyer_btn:
            # Conad spesso apre un viewer esterno (es: Kimbino o Flipp)
            # Proviamo a catturare l'URL o l'ID
            pdf_link = await flyer_btn.get_attribute("href")
            if pdf_link:
                return await download_file(pdf_link, "conad")
    except Exception as e:
        print(f"[Conad] Errore: {e}")
    finally:
        await page.close()
    return None

async def scrape_dpiu(browser):
    print("[D Più] Ricerca volantino via VolantinoFacile...")
    page = await browser.new_page()
    try:
        await page.goto("https://www.volantinofacile.it/dpiu/volantino-dpiu/portogruaro", wait_until="networkidle")
        
        # Accetta cookie
        cookie_btn = await page.query_selector("button:has-text('Accetta'), #sp-cc-accept")
        if cookie_btn: await cookie_btn.click()
        
        # Prendi il primo volantino della lista
        first_flyer = await page.query_selector(".volantino-item a, a:has-text('Sfoglia')")
        if first_flyer:
            pdf_link = await first_flyer.get_attribute("href")
            if pdf_link:
                # VolantinoFacile spesso non dà il PDF diretto, ma un viewer.
                # Se è un viewer, dovremmo fare scraping più profondo o salvare l'URL
                return await download_file(pdf_link, "dpiu")
    except Exception as e:
        print(f"[D Più] Errore: {e}")
    finally:
        await page.close()
    return None

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        
        # Esegui scraping
        visotto = await scrape_visotto(browser)
        lidl = await scrape_lidl(browser)
        conad = await scrape_conad(browser)
        dpiu = await scrape_dpiu(browser)
        
        # Prepara dati per il JSON
        flyers_data = []
        if visotto: flyers_data.append({"name": "IperVisotto (Portogruaro)", "url": f"volantini/{visotto}", "icon": "🛒"})
        if lidl: flyers_data.append({"name": "Lidl (Portogruaro)", "url": f"volantini/{lidl}", "icon": "🍋"})
        if conad: flyers_data.append({"name": "Conad (Portogruaro)", "url": f"volantini/{conad}", "icon": "🍓"})
        if dpiu: flyers_data.append({"name": "Dpiù (Portogruaro)", "url": f"volantini/{dpiu}", "icon": "🍊"})
        
        # Verifica se abbiamo trovato almeno un volantino
        if not flyers_data:
            print("⚠️ Nessun volantino trovato. Uso dati di fallback temporanei per testare la UI.")
            # Fallback for testing UI if scraping fails
            flyers_data = [
                {"name": "IperVisotto (Fallback)", "url": "https://supermercativisotto.it/volantino", "icon": "🛒"},
                {"name": "Lidl (Fallback)", "url": "https://www.lidl.it/volantini", "icon": "🍋"}
            ]

        # Scrivi JSON
        with open(JSON_FILE, 'w', encoding='utf-8') as f:
            json.dump({"flyers": flyers_data, "updated": datetime.now().isoformat()}, f, indent=4)
        
        print(f"✅ Aggiornamento completato. File generato: {JSON_FILE}")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
