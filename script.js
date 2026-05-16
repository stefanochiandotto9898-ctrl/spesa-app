document.addEventListener('DOMContentLoaded', () => {
    // === CONFIGURAZIONE MQTT (Sincronizzazione in tempo reale) ===
    const MQTT_TOPIC = 'spesa-app-ste-room-secret-99'; // Canale univoco per la coppia
    let mqttClient = null;
    let lastUpdated = parseInt(localStorage.getItem('spesa_last_updated')) || 0;
    
    const connectionStatusEl = document.getElementById('connection-status');

    try {
        // Usiamo emqx che spesso è più stabile nei firewall aziendali/mobile
        mqttClient = mqtt.connect('wss://broker.emqx.io:8084/mqtt');
        
        mqttClient.on('connect', () => {
            console.log('Connesso al server di sincronizzazione! 🟢');
            if (connectionStatusEl) {
                connectionStatusEl.style.backgroundColor = '#34c759'; // Verde
                connectionStatusEl.title = 'Sincronizzazione Attiva';
            }
            mqttClient.subscribe(MQTT_TOPIC);
            
            // Aspettiamo un attimo per ricevere lo stato remoto dal server
            // Se abbiamo dati locali, li inviamo solo dopo aver verificato cosa c'è online
            setTimeout(() => {
                if (shoppingList.length > 0) {
                    const payload = JSON.stringify({ ts: lastUpdated, list: shoppingList });
                    mqttClient.publish(MQTT_TOPIC, payload, { retain: true });
                }
            }, 2000);
        });

        mqttClient.on('offline', () => {
            if (connectionStatusEl) connectionStatusEl.style.backgroundColor = '#ff3b30'; // Rosso
        });

        mqttClient.on('message', (topic, message) => {
            if (topic === MQTT_TOPIC) {
                try {
                    const payloadStr = message.toString();
                    let parsed = JSON.parse(payloadStr);
                    let incomingTs = 0;
                    let incomingList = [];
                    
                    if (Array.isArray(parsed)) {
                        incomingList = parsed;
                        // Vecchio formato senza timestamp
                    } else if (parsed && parsed.ts) {
                        incomingList = parsed.list;
                        incomingTs = parsed.ts;
                    }

                    // Se il messaggio in arrivo è più recente del nostro o se abbiamo il formato vecchio
                    if (incomingTs > lastUpdated || (incomingTs === 0 && incomingList.length > shoppingList.length)) {
                        shoppingList = incomingList;
                        lastUpdated = incomingTs > 0 ? incomingTs : Date.now();
                        
                        localStorage.setItem('spesa_list', JSON.stringify(shoppingList));
                        localStorage.setItem('spesa_last_updated', lastUpdated.toString());
                        renderList(); // Ridisegna la lista automaticamente
                    } else if (incomingTs > 0 && incomingTs < lastUpdated) {
                        // Il server ha dati vecchi (forse un retain scaduto), pubblichiamo i nostri
                        const payload = JSON.stringify({ ts: lastUpdated, list: shoppingList });
                        mqttClient.publish(MQTT_TOPIC, payload, { retain: true });
                    }
                } catch(e) {
                    console.error('Errore nel leggere i dati remoti', e);
                }
            }
        });
    } catch (e) {
        console.error('Errore MQTT:', e);
        if (connectionStatusEl) connectionStatusEl.style.backgroundColor = '#ff3b30';
    }

    // Indovina un'icona
    function guessIcon(name) {
        const lowerName = name.toLowerCase();
        if(lowerName.includes('tacch') || lowerName.includes('carne') || lowerName.includes('pollo')) return '🍗';
        if(lowerName.includes('platess') || lowerName.includes('pesce') || lowerName.includes('tonno')) return '🐟';
        if(lowerName.includes('verdura') || lowerName.includes('insalata')) return '🥦';
        if(lowerName.includes('frutta') || lowerName.includes('mele')) return '🍎';
        if(lowerName.includes('banane')) return '🍌';
        if(lowerName.includes('dolce') || lowerName.includes('torta') || lowerName.includes('zucchero') || lowerName.includes('cioccolato')) return '🍫';
        if(lowerName.includes('latte')) return '🥛';
        if(lowerName.includes('pane') || lowerName.includes('pan ') || lowerName.includes('filone') || lowerName.includes('piadin')) return '🍞';
        if(lowerName.includes('uova') || lowerName.includes('luovo')) return '🥚';
        if(lowerName.includes('pasta')) return '🍝';
        if(lowerName.includes('passata') || lowerName.includes('pomodor') || lowerName.includes('datterin')) return '🍅';
        if(lowerName.includes('farina')) return '🌾';
        if(lowerName.includes('burro') || lowerName.includes('formaggio') || lowerName.includes('yogurt') || lowerName.includes('yog.')) return '🧀';
        if(lowerName.includes('patatine') || lowerName.includes('tortillas') || lowerName.includes('nacho') || lowerName.includes('pata ')) return '🍟';
        if(lowerName.includes('birra')) return '🍺';
        if(lowerName.includes('gin') || lowerName.includes('vino') || lowerName.includes('alcol')) return '🍷';
        if(lowerName.includes('caffè') || lowerName.includes('caffe')) return '☕';
        if(lowerName.includes('cereali') || lowerName.includes('biscott')) return '🥣';
        if(lowerName.includes('succo') || lowerName.includes('sanfruit') || lowerName.includes('tonica') || lowerName.includes('drink')) return '🥤';
        if(lowerName.includes('carta igienica')) return '🧻';
        if(lowerName.includes('dentifricio') || lowerName.includes('spazzolino')) return '🪥';
        if(lowerName.includes('tarall') || lowerName.includes('grissin') || lowerName.includes('cracker')) return '🥨';
        if(lowerName.includes('masch') || lowerName.includes('bagn') || lowerName.includes('shampoo') || lowerName.includes('sapone') || lowerName.includes('hydra')) return '🧼';
        return '🛒'; // Icona default
    }

    // Dati estesi simulando un intero supermercato
    const visottoData = [
        {"name": "Latte Intero Alta Digeribilità", "price": 1.29},
        {"name": "Latte Parzialmente Scremato", "price": 1.15},
        {"name": "Latte di Soia", "price": 1.99},
        {"name": "Latte di Riso", "price": 2.10},
        {"name": "Burro 125g", "price": 1.45},
        {"name": "Burro 250g", "price": 2.50},
        {"name": "Yogurt Bianco (2x125g)", "price": 1.10},
        {"name": "Yogurt Greco", "price": 1.29},
        {"name": "Yogurt alla Frutta (2x125g)", "price": 1.20},
        {"name": "Panna da Cucina 200ml", "price": 0.99},
        {"name": "Panna Fresca 250ml", "price": 1.49},
        {"name": "Uova Medie x6", "price": 1.89},
        {"name": "Uova Grandi x10", "price": 2.89},
        {"name": "Mozzarella (3x100g)", "price": 2.99},
        {"name": "Mozzarella di Bufala 250g", "price": 4.50},
        {"name": "Parmigiano Reggiano 200g", "price": 5.90},
        {"name": "Grana Padano 200g", "price": 4.90},
        {"name": "Formaggio Spalmabile 200g", "price": 1.89},
        {"name": "Gorgonzola 200g", "price": 2.70},
        {"name": "Ricotta 250g", "price": 1.30},
        {"name": "Prosciutto Cotto 100g", "price": 2.50},
        {"name": "Prosciutto Crudo 100g", "price": 3.90},
        {"name": "Salame Milano 100g", "price": 2.80},
        {"name": "Mortadella 100g", "price": 1.50},
        {"name": "Pancetta a cubetti 100g", "price": 1.99},
        {"name": "Speck 100g", "price": 2.90},
        {"name": "Petto di Pollo 500g", "price": 4.90},
        {"name": "Carne Macinata di Bovino 500g", "price": 5.50},
        {"name": "Fettine di Vitello 400g", "price": 6.90},
        {"name": "Salsiccia di Suino 400g", "price": 4.50},
        {"name": "Hamburger di Scottona x2", "price": 3.90},
        {"name": "Filetti di Branzino 250g", "price": 6.90},
        {"name": "Salmone Affumicato 100g", "price": 4.99},
        {"name": "Tonno in Scatola (3x80g)", "price": 3.50},
        {"name": "Mele Golden", "price": 1.99},
        {"name": "Banane", "price": 1.39},
        {"name": "Arance", "price": 1.80},
        {"name": "Limoni", "price": 2.10},
        {"name": "Fragole 500g", "price": 3.50},
        {"name": "Uva Bianca", "price": 2.90},
        {"name": "Patate 2kg", "price": 2.50},
        {"name": "Cipolle 1kg", "price": 1.50},
        {"name": "Aglio (3 teste)", "price": 1.20},
        {"name": "Pomodori da Insalata", "price": 2.50},
        {"name": "Pomodorini Ciliegino 500g", "price": 1.99},
        {"name": "Insalata Iceberg", "price": 1.10},
        {"name": "Insalata Mista Busta", "price": 1.50},
        {"name": "Carote 1kg", "price": 1.20},
        {"name": "Zucchine", "price": 2.20},
        {"name": "Melanzane", "price": 2.50},
        {"name": "Peperoni", "price": 2.90},
        {"name": "Broccoli", "price": 1.80},
        {"name": "Pane Bauletto", "price": 1.10},
        {"name": "Pane Fresco", "price": 2.50},
        {"name": "Panini per Hamburger x4", "price": 1.50},
        {"name": "Piadine x3", "price": 1.80},
        {"name": "Crackers", "price": 1.60},
        {"name": "Grissini", "price": 1.90},
        {"name": "Fette Biscottate", "price": 1.50},
        {"name": "Pasta Penne 500g", "price": 0.95},
        {"name": "Pasta Spaghetti 500g", "price": 0.95},
        {"name": "Pasta Fusilli 500g", "price": 0.95},
        {"name": "Tortellini Freschi 250g", "price": 2.90},
        {"name": "Riso Arborio 1kg", "price": 3.50},
        {"name": "Riso Basmati 500g", "price": 2.50},
        {"name": "Farina 00 1kg", "price": 0.90},
        {"name": "Farina Manitoba 1kg", "price": 1.59},
        {"name": "Zucchero Semolato 1kg", "price": 1.20},
        {"name": "Zucchero di Canna 500g", "price": 1.50},
        {"name": "Sale Grosso 1kg", "price": 0.40},
        {"name": "Sale Fino 1kg", "price": 0.40},
        {"name": "Olio Extra Vergine di Oliva 1L", "price": 8.50},
        {"name": "Olio di Semi di Girasole 1L", "price": 2.20},
        {"name": "Aceto di Vino Bianco 1L", "price": 1.10},
        {"name": "Aceto Balsamico 250ml", "price": 2.90},
        {"name": "Passata di Pomodoro 700g", "price": 1.10},
        {"name": "Polpa di Pomodoro (3x400g)", "price": 2.50},
        {"name": "Pesto alla Genovese 190g", "price": 2.20},
        {"name": "Maionese 250ml", "price": 1.80},
        {"name": "Ketchup 250ml", "price": 1.50},
        {"name": "Biscotti Frollini", "price": 2.10},
        {"name": "Biscotti al Cioccolato", "price": 2.50},
        {"name": "Merendine x10", "price": 2.80},
        {"name": "Cornetti x6", "price": 2.50},
        {"name": "Cioccolato Fondente 100g", "price": 1.50},
        {"name": "Cioccolato al Latte 100g", "price": 1.50},
        {"name": "Nutella 400g", "price": 4.50},
        {"name": "Marmellata 350g", "price": 2.20},
        {"name": "Cereali Corn Flakes 375g", "price": 2.10},
        {"name": "Cereali Muesli 375g", "price": 2.90},
        {"name": "Caffè Macinato 250g", "price": 2.90},
        {"name": "Caffè in Capsule x30", "price": 8.50},
        {"name": "The in Filtri x20", "price": 1.80},
        {"name": "Acqua Naturale (6x1.5L)", "price": 2.10},
        {"name": "Acqua Frizzante (6x1.5L)", "price": 2.10},
        {"name": "Coca Cola 1.5L", "price": 1.80},
        {"name": "Succo di Frutta 1L", "price": 1.60},
        {"name": "Birra 66cl", "price": 1.20},
        {"name": "Birra (3x33cl)", "price": 2.50},
        {"name": "Vino Rosso da Tavola 750ml", "price": 3.50},
        {"name": "Vino Bianco 750ml", "price": 3.50},
        {"name": "Prosecco 750ml", "price": 5.90},
        {"name": "Detersivo Piatti 1L", "price": 1.50},
        {"name": "Detersivo Lavatrice", "price": 4.90},
        {"name": "Ammorbidente", "price": 2.50},
        {"name": "Sgrassatore Spray", "price": 2.10},
        {"name": "Detersivo Pavimenti", "price": 1.80},
        {"name": "Carta Igienica x4", "price": 2.50},
        {"name": "Rotoloni da Cucina x2", "price": 2.20},
        {"name": "Tovaglioli di Carta x100", "price": 1.10},
        {"name": "Bagnoschiuma 500ml", "price": 2.20},
        {"name": "Shampoo 250ml", "price": 2.50},
        {"name": "Dentifricio", "price": 1.80},
        {"name": "Spazzolino", "price": 1.50},
        {"name": "Deodorante Spray", "price": 2.50},
        {"name": "Sapone Liquido 500ml", "price": 1.50},
        {"name": "Sacchetti Spazzatura", "price": 1.90},
        {"name": "Alluminio Rotolo", "price": 1.80},
        {"name": "Pellicola Rotolo", "price": 1.50},
        {"name": "Spugne Cucina x3", "price": 1.20},
        {"name": "Latte Zimil Senza Lattosio", "price": 1.59},
        {"name": "Cereali Choco Balls", "price": 2.49},
        {"name": "Caffè Dolce Gusto (Capsule)", "price": 5.49},
        {"name": "Patatine Classiche", "price": 1.20},
        {"name": "Patatine alla Paprika", "price": 1.30},
        {"name": "Patatine Formaggio e Cipolla", "price": 1.40},
        {"name": "Patatine Rustiche", "price": 1.50},
        {"name": "Tortillas al Formaggio (Nachos)", "price": 1.80},
        {"name": "Birra Moretti 66cl", "price": 1.15},
        {"name": "Birra Moretti (3x33cl)", "price": 2.60},
        {"name": "Gin Tanqueray 70cl", "price": 14.90},
        {"name": "Pasta Rummo Mezze Maniche 500g", "price": 1.19},
        {"name": "Pasta Rummo Spaghetti 500g", "price": 1.19},
        {"name": "Pasta Rummo Penne Rigate 500g", "price": 1.19},
        {"name": "Yogurt (vari gusti)", "price": 0.32},
        {"name": "Fettine di Petto di Pollo 400g", "price": 4.50},
        {"name": "Taralli Pugliesi 400g", "price": 2.20},
        {"name": "Carta Igienica Scottex x10", "price": 4.50},
        {"name": "Dentifricio Mentadent", "price": 2.10},
        {"name": "Spazzolino Setole Morbide", "price": 1.80},
        {"name": "TACCH.ARROSTO VASCH.CART.GR.90", "price": 1.99},
        {"name": "FILET.PLATESS.PANAT.FROST.G230", "price": 3.99},
        {"name": "TONICA SCHWEPPES ZERO L.1", "price": 1.19},
        {"name": "FILONE INT.SEMI/NOCI GRIS.G500", "price": 1.85},
        {"name": "MASCH.GARNI.HYDRA BOMB CARBONE", "price": 2.90},
        {"name": "BAGN.ANG.OFF.CURC/MELOGR.ML500", "price": 1.90},
        {"name": "PAT.CONI MAIS NACHO PATA G100", "price": 0.95},
        {"name": "BIRRA MORETTI LA BIANCA CL33X3", "price": 3.20},
        {"name": "GIN TANQUERAY CL70", "price": 14.80},
        {"name": "BIRRA MORETTI BOTT CL.33X3", "price": 2.29},
        {"name": "HUMMUS S/AGLIO PAVLAKIS G.150", "price": 1.40},
        {"name": "PASS.DATTERINO AGROM.BOTT.CL55", "price": 0.99},
        {"name": "SANFRUIT FRUTTI ROSSI ML.330", "price": 0.69},
        {"name": "ENERGY MIX LINEA AZZURRA G70", "price": 0.99},
        {"name": "BANANE BIO", "price": 2.49},
        {"name": "MELE MORGANA 750G.", "price": 1.99},
        {"name": "BISC.LEGGERI PLUS G.260", "price": 2.20},
        {"name": "PIADINA LORIAN.IGP OL.EVO G350", "price": 0.99},
        {"name": "YOG.BRUNIC.INT.VANIGLIA G125", "price": 0.32},
        {"name": "TONICA SCHWEPPES L.1", "price": 1.15},
        {"name": "YOG.GRECO S/L PAVLAKIS 0% G150", "price": 0.79},
        {"name": "YOG.BRUNIC.INT.CAFFE G125", "price": 0.32}
    ];

    const defaultCatalog = visottoData.map(item => ({
        name: item.name,
        price: item.price,
        icon: guessIcon(item.name)
    }));

    // Carica dati da LocalStorage
    let catalog = JSON.parse(localStorage.getItem('spesa_catalog')) || defaultCatalog;
    
    // Se il catalogo locale non ha i dati completi, li uniamo forzatamente
    visottoData.forEach(vItem => {
        const existing = catalog.find(c => c.name.toLowerCase() === vItem.name.toLowerCase());
        if (!existing) {
            catalog.push({ name: vItem.name, price: vItem.price, icon: guessIcon(vItem.name) });
        } else if (existing.price === 0) {
            existing.price = vItem.price; // Aggiorna il prezzo se era 0
        }
    });
    localStorage.setItem('spesa_catalog', JSON.stringify(catalog));

    let shoppingList = JSON.parse(localStorage.getItem('spesa_list')) || [];

    const inputEl = document.getElementById('food-input');
    const suggestionsEl = document.getElementById('suggestions');
    const addBtn = document.getElementById('add-btn');
    const shoppingListEl = document.getElementById('shopping-list');
    const totalAmountEl = document.getElementById('total-amount');

    // Salva in locale e pubblica in tempo reale
    function saveState() {
        lastUpdated = Date.now();
        localStorage.setItem('spesa_last_updated', lastUpdated.toString());
        localStorage.setItem('spesa_catalog', JSON.stringify(catalog));
        
        const listStr = JSON.stringify(shoppingList);
        localStorage.setItem('spesa_list', listStr);
        
        // Invia la modifica all'altro telefono! (retain: true salva l'ultimo messaggio sul server)
        if (mqttClient && mqttClient.connected) {
            const payload = JSON.stringify({ ts: lastUpdated, list: shoppingList });
            mqttClient.publish(MQTT_TOPIC, payload, { retain: true });
        }
    }

    // Trova o crea item nel catalogo
    function getOrCreateCatalogItem(name) {
        const trimmedName = name.trim();
        let item = catalog.find(c => c.name.toLowerCase() === trimmedName.toLowerCase());
        
        if (!item) {
            item = { name: trimmedName, icon: guessIcon(trimmedName), price: 0, frequency: 0 };
            catalog.push(item);
            saveState(); // Aggiorna il catalogo in locale
        }
        return item;
    }

    // Aggiungi alla lista della spesa
    function addToList(name) {
        if (!name.trim()) return;
        
        const catalogItem = getOrCreateCatalogItem(name);
        
        // Evita duplicati nella lista della spesa attiva
        if (!shoppingList.some(i => i.name.toLowerCase() === catalogItem.name.toLowerCase())) {
            // Incrementa la frequenza di utilizzo
            catalogItem.frequency = (catalogItem.frequency || 0) + 1;
            
            shoppingList.push({ ...catalogItem, id: Date.now(), completed: false });
            saveState();
            renderList();
        }
        
        inputEl.value = '';
        hideSuggestions();
        inputEl.focus();
    }
    
    // Aggiorna il totale stimato
    function updateTotal() {
        if (!totalAmountEl) return;
        const total = shoppingList.reduce((sum, item) => {
            return sum + (Number(item.price) || 0);
        }, 0);
        totalAmountEl.textContent = total.toFixed(2) + ' €';
    }

    // Disegna la lista
    function renderList() {
        shoppingListEl.innerHTML = '';
        
        if(shoppingList.length === 0) {
            shoppingListEl.innerHTML = `
                <div style="text-align: center; color: var(--text-secondary); padding: 40px 20px; font-size: 15px;">
                    <div style="font-size: 48px; margin-bottom: 16px;">🛍️</div>
                    La tua lista è vuota.<br>Aggiungi qualcosa qui sopra!
                </div>
            `;
            updateTotal();
            return;
        }

        shoppingList.forEach(item => {
            const li = document.createElement('li');
            li.className = 'list-item';
            
            li.innerHTML = `
                <div class="item-icon">${item.icon}</div>
                <div class="item-name ${item.completed ? 'completed' : ''}">${item.name}</div>
                
                <div class="item-price-wrapper">
                    <input type="number" class="price-input" step="0.10" min="0" placeholder="0.00" value="${item.price > 0 ? item.price : ''}">
                    <span class="price-currency">€</span>
                </div>
                
                <button class="check-btn ${item.completed ? 'checked' : ''}" aria-label="Segna completato"></button>
                <button class="delete-btn" aria-label="Elimina">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H5H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            `;

            // Gestione prezzo
            const priceInput = li.querySelector('.price-input');
            priceInput.addEventListener('change', (e) => {
                const newPrice = parseFloat(e.target.value) || 0;
                item.price = newPrice;
                
                // Aggiorna anche il catalogo (impara il prezzo!)
                const catalogItem = catalog.find(c => c.name.toLowerCase() === item.name.toLowerCase());
                if (catalogItem) {
                    catalogItem.price = newPrice;
                }
                
                saveState();
                updateTotal();
            });

            // Toggle completato (bottone)
            li.querySelector('.check-btn').addEventListener('click', () => {
                item.completed = !item.completed;
                saveState();
                renderList();
            });

            // Toggle completato (testo)
            li.querySelector('.item-name').addEventListener('click', () => {
                item.completed = !item.completed;
                saveState();
                renderList();
            });

            // Elimina
            li.querySelector('.delete-btn').addEventListener('click', () => {
                // Modifica per la sincronizzazione sicura: al posto di rimuovere l'elemento, 
                // in un db reale si marcherebbe "deleted". Per noi va bene toglierlo.
                shoppingList = shoppingList.filter(i => i.id !== item.id);
                
                // Forziamo publish di un nuovo stato pulito
                saveState();
                renderList();
            });

            shoppingListEl.appendChild(li);
        });
        
        updateTotal();
    }

    // Gestione Suggerimenti
    function showSuggestions(query) {
        let matches = [];
        let exactMatch = null;

        if (!query.trim()) {
            // Mostra i più frequenti se non si sta cercando nulla
            matches = catalog.filter(c => (c.frequency || 0) > 0)
                             .sort((a, b) => b.frequency - a.frequency)
                             .slice(0, 5);
            if (matches.length === 0) {
                hideSuggestions();
                return;
            }
        } else {
            const lowerQuery = query.toLowerCase();
            matches = catalog.filter(c => c.name.toLowerCase().includes(lowerQuery));
            
            // Ordina per frequenza (dal più usato al meno usato)
            matches.sort((a, b) => (b.frequency || 0) - (a.frequency || 0));
            
            exactMatch = matches.find(c => c.name.toLowerCase() === lowerQuery);
        }
        
        suggestionsEl.innerHTML = '';
        
        if (matches.length > 0) {
            matches.forEach(match => {
                const li = document.createElement('li');
                li.className = 'suggestion-item';
                
                const priceHint = match.price > 0 ? `<span style="margin-left: auto; color: var(--text-secondary); font-size: 14px;">${match.price.toFixed(2)}€</span>` : '';
                const freqHint = (!query.trim() && (match.frequency || 0) > 0) ? `<span style="margin-left: 5px; font-size: 12px; color: var(--accent-color); font-weight: 600;" title="Aggiunto spesso">★</span>` : '';
                
                li.innerHTML = `<span class="suggestion-icon">${match.icon}</span> <span class="suggestion-text">${match.name} ${freqHint}</span> ${priceHint}`;
                li.addEventListener('click', () => {
                    addToList(match.name);
                });
                suggestionsEl.appendChild(li);
            });
        }
        
        if (query.trim() && !exactMatch) {
            const newIcon = guessIcon(query);
            const li = document.createElement('li');
            li.className = 'suggestion-item';
            li.style.color = 'var(--accent-color)';
            li.innerHTML = `<span class="suggestion-icon">${newIcon}</span> <span class="suggestion-text">Aggiungi "${query}"</span>`;
            li.addEventListener('click', () => {
                addToList(query);
            });
            suggestionsEl.appendChild(li);
        }

        suggestionsEl.classList.remove('hidden');
    }

    function hideSuggestions() {
        suggestionsEl.classList.add('hidden');
    }

    // Event Listeners
    inputEl.addEventListener('focus', (e) => {
        showSuggestions(e.target.value);
    });

    inputEl.addEventListener('input', (e) => {
        showSuggestions(e.target.value);
    });

    inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addToList(inputEl.value);
        }
    });

    addBtn.addEventListener('click', () => {
        addToList(inputEl.value);
    });

    // Nascondi suggerimenti se clicchi fuori
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.input-section')) {
            hideSuggestions();
        }
    });
    // === Toast Notification ===
    function showToast(msg) {
        let toast = document.getElementById('app-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'app-toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.classList.add('show');
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(() => toast.classList.remove('show'), 2500);
    }

    // === Toggles & Volantini ===
    const viewListBtn = document.getElementById('view-list-btn');
    const listView = document.getElementById('list-view');

    const viewFlyersBtn = document.getElementById('view-flyers-btn');
    const volantiniView = document.getElementById('volantini-view');
    const flyersList = document.getElementById('flyers-list');
    const flyersRefreshBtn = document.getElementById('flyers-refresh-btn');

    if (viewListBtn && viewFlyersBtn) {
        viewListBtn.addEventListener('click', () => {
            viewListBtn.classList.add('active');
            viewFlyersBtn.classList.remove('active');
            listView.classList.remove('hidden');
            volantiniView.classList.add('hidden');
        });

        viewFlyersBtn.addEventListener('click', () => {
            viewFlyersBtn.classList.add('active');
            viewListBtn.classList.remove('active');
            volantiniView.classList.remove('hidden');
            listView.classList.add('hidden');
            renderFlyers();
        });
    }

    // Pulsante aggiorna volantini
    flyersRefreshBtn?.addEventListener('click', async () => {
        if (!flyersList) return;
        flyersList.innerHTML = `
            <div class="offers-empty-state">
                <div class="empty-icon">⏳</div>
                <p>Avvio dell'aggiornamento...<br><small>Richiederà circa 1-2 minuti.</small></p>
            </div>`;
        showToast('Inizio aggiornamento volantini...');

        try {
            const res = await fetch('/.netlify/functions/trigger-update', { method: 'POST' });
            if (res.ok) {
                showToast('Aggiornamento avviato! Torna tra poco.');
            } else {
                showToast('Errore avvio aggiornamento.');
                renderFlyers(); // ripristina
            }
        } catch (e) {
            console.error(e);
            showToast('Errore di connessione.');
            renderFlyers();
        }
    });



    async function renderFlyers() {
        if (!flyersList) return;
        
        flyersList.innerHTML = `
            <div class="offers-empty-state">
                <div class="empty-icon">⏳</div>
                <p>Caricamento volantini...</p>
            </div>`;
            
        try {
            const res = await fetch('volantini.json?t=' + new Date().getTime());
            if (!res.ok) throw new Error("File non trovato");
            const data = await res.json();
            const flyers = data.flyers || [];
            
            flyersList.innerHTML = '';
            if (flyers.length === 0) {
                flyersList.innerHTML = `<div class="offers-empty-state"><p>Nessun volantino disponibile.</p></div>`;
                return;
            }

            flyers.forEach(f => {
                const li = document.createElement('li');
                li.className = 'offer-item';
                li.innerHTML = `
                    <div class="offer-icon-wrap">${f.icon || '📄'}</div>
                    <div class="offer-info">
                        <div class="offer-product">${f.name}</div>
                        <div class="offer-location">Volantino della settimana</div>
                    </div>
                    <button class="flyer-btn" onclick="openPdfModal('${f.url}', '${f.name.replace(/'/g, "\\'")}')">Sfoglia</button>
                `;
                flyersList.appendChild(li);
            });
        } catch (e) {
            console.log('Error loading flyers:', e);
            // Fallback o messaggio di errore
            flyersList.innerHTML = `
                <div class="offers-empty-state">
                    <div class="empty-icon">⚠️</div>
                    <p>I volantini vengono aggiornati ogni martedì.<br>Controlla più tardi!</p>
                </div>`;
        }
    }



    // Inizializza UI
    renderList();

    // Gestione PDF Modal
    const pdfModal = document.getElementById('pdf-modal');
    const pdfIframe = document.getElementById('pdf-iframe');
    const pdfTitle = document.getElementById('pdf-modal-title');
    const closePdfBtn = document.getElementById('close-pdf-modal');

    window.openPdfModal = function(url, title) {
        if (pdfTitle) pdfTitle.textContent = title;
        if (pdfIframe) pdfIframe.src = url;
        if (pdfModal) pdfModal.classList.remove('hidden');
    };

    if (closePdfBtn) {
        closePdfBtn.addEventListener('click', () => {
            if (pdfModal) pdfModal.classList.add('hidden');
            if (pdfIframe) pdfIframe.src = ''; // Ferma il caricamento
        });
    }

    // === PWA & iOS Logic ===
    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
    };

    const isStandalone = () => {
        return ('standalone' in window.navigator) && (window.navigator.standalone);
    };

    const installBtn = document.getElementById('pwa-install-btn');
    const notifyBtn = document.getElementById('pwa-notify-btn');
    const iosModal = document.getElementById('ios-install-modal');
    const closeModalBtn = document.getElementById('close-ios-modal');

    // Registra Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').catch(err => {
                console.log('SW registration failed: ', err);
            });
        });
    }

    if (isIos()) {
        if (!isStandalone()) {
            // Siamo su Safari in iOS, mostra il pulsante "Scarica App"
            if (installBtn) installBtn.classList.remove('hidden');
            
            // Gestisci il click per mostrare le istruzioni
            if (installBtn) {
                installBtn.addEventListener('click', () => {
                    if (iosModal) iosModal.classList.remove('hidden');
                });
            }
            
            if (closeModalBtn) {
                closeModalBtn.addEventListener('click', () => {
                    if (iosModal) iosModal.classList.add('hidden');
                });
            }
        } else {
            // Siamo nella PWA installata su iOS!
            // Mostriamo il pulsante notifiche se supportate e non ancora permesse
            if ('Notification' in window && Notification.permission !== 'granted') {
                if (notifyBtn) notifyBtn.classList.remove('hidden');
                
                notifyBtn.addEventListener('click', async () => {
                    const permission = await Notification.requestPermission();
                    if (permission === 'granted') {
                        notifyBtn.classList.add('hidden');
                        // Mandiamo una notifica locale di benvenuto!
                        if ('serviceWorker' in navigator) {
                            navigator.serviceWorker.ready.then(registration => {
                                registration.showNotification("Notifiche Attivate! 🎉", {
                                    body: "Ora riceverai un avviso quando la spesa viene aggiornata.",
                                    icon: "icon.png"
                                });
                            });
                        }
                    }
                });
            }
        }
    } else {
        // Logica generica per Android/Chrome (opzionale)
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            if (installBtn) installBtn.classList.remove('hidden');
            
            installBtn.addEventListener('click', () => {
                installBtn.classList.add('hidden');
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    deferredPrompt = null;
                });
            });
        });
    }

    // Invia notifica locale quando riceviamo un messaggio MQTT e siamo in background (se permesso)
    if ('Notification' in window && Notification.permission === 'granted' && isStandalone()) {
        mqttClient.on('message', (topic, message) => {
            // Mostra notifica solo se l'app è in background
            if (document.hidden && 'serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(registration => {
                    registration.showNotification("Lista Aggiornata", {
                        body: "Qualcuno ha modificato la lista della spesa.",
                        icon: "icon.png",
                        badge: "icon.png"
                    });
                });
            }
        });
    }

});
