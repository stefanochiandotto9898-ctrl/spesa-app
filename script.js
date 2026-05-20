document.addEventListener('DOMContentLoaded', () => {
    // === CONFIGURAZIONE IMMAGINI PRODOTTI (Demo) ===
    // === CONFIGURAZIONE IMMAGINI PRODOTTI ===
    const PRODUCT_IMAGES = {
        'mela': 'cibi-bevande/mela.svg',
        'banana': 'cibi-bevande/banana.svg',
        'pera': 'cibi-bevande/pera.svg',
        'pesca': 'cibi-bevande/pesca.svg',
        'ciliegie': 'cibi-bevande/ciliegie.svg',
        'fragola': 'cibi-bevande/fragola.svg',
        'uva': 'cibi-bevande/uva.svg',
        'cocomero': 'cibi-bevande/cocomero.svg',
        'melone': 'cibi-bevande/melone.svg',
        'arancia': 'cibi-bevande/arancia.svg',
        'limone': 'cibi-bevande/limone.svg',
        'ananas': 'cibi-bevande/ananas.svg',
        'kiwi': 'cibi-bevande/kiwi.svg',
        'mango': 'cibi-bevande/mango.svg',
        'mirtilli': 'cibi-bevande/mirtilli.svg',
        'cocco': 'cibi-bevande/cocco.svg',
        'avocado': 'cibi-bevande/avocado.svg',
        'pomodoro': 'cibi-bevande/pomodoro.svg',
        'carota': 'cibi-bevande/carota.svg',
        'patata': 'cibi-bevande/patata.svg',
        'insalata': 'cibi-bevande/insalata.svg',
        'broccoli': 'cibi-bevande/broccoli.svg',
        'cipolla': 'cibi-bevande/cipolla.svg',
        'aglio': 'cibi-bevande/aglio.svg',
        'cetriolo': 'cibi-bevande/cetriolo.svg',
        'melanzana': 'cibi-bevande/melanzana.svg',
        'mais': 'cibi-bevande/mais.svg',
        'peperone': 'cibi-bevande/peperone.svg',
        'fungo': 'cibi-bevande/fungo.svg',
        'patate fritte': 'cibi-bevande/patate_fritte.svg',
        'pane': 'cibi-bevande/pane.svg',
        'croissant': 'cibi-bevande/croissant.svg',
        'baguette': 'cibi-bevande/baguette.svg',
        'pretzel': 'cibi-bevande/pretzel.svg',
        'bagel': 'cibi-bevande/bagel.svg',
        'formaggio': 'cibi-bevande/formaggio.svg',
        'burro': 'cibi-bevande/burro.svg',
        'uova': 'cibi-bevande/uova.svg',
        'latte': 'cibi-bevande/latte.svg',
        'yogurt': 'cibi-bevande/yogurt.svg',
        'bistecca': 'cibi-bevande/bistecca.svg',
        'carne con osso': 'cibi-bevande/carne_con_osso.svg',
        'pollo': 'cibi-bevande/pollo.svg',
        'bacon': 'cibi-bevande/bacon.svg',
        'salsiccia': 'cibi-bevande/salsiccia.svg',
        'hamburger': 'cibi-bevande/hamburger.svg',
        'pizza': 'cibi-bevande/pizza.svg',
        'sushi': 'cibi-bevande/sushi.svg',
        'gamberetti': 'cibi-bevande/gamberetti.svg',
        'pesce': 'cibi-bevande/pesce.svg',
        'aragosta': 'cibi-bevande/aragosta.svg',
        'granchio': 'cibi-bevande/granchio.svg',
        'ostrica': 'cibi-bevande/ostrica.svg',
        'pasta': 'cibi-bevande/pasta.svg',
        'riso': 'cibi-bevande/riso.svg',
        'cereali': 'cibi-bevande/cereali.svg',
        'pomodori pelati': 'cibi-bevande/pomodori_pelati.svg',
        'ravioli': 'cibi-bevande/ravioli.svg',
        'gallette di riso': 'cibi-bevande/gallette_di_riso.svg',
        'biscotto della fortuna': 'cibi-bevande/biscotto_della_fortuna.svg',
        'contenitore asporto': 'cibi-bevande/contenitore_asporto.svg',
        'kebab': 'cibi-bevande/kebab.svg',
        'polpette': 'cibi-bevande/polpette.svg',
        'uovo al tegamino': 'cibi-bevande/uovo_al_tegamino.svg',
        'zuppa': 'cibi-bevande/zuppa.svg',
        'cioccolato': 'cibi-bevande/cioccolato.svg',
        'biscotti': 'cibi-bevande/biscotti.svg',
        'miele': 'cibi-bevande/miele.svg',
        'caramelle': 'cibi-bevande/caramelle.svg',
        'lecca lecca': 'cibi-bevande/lecca_lecca.svg',
        'ciambella': 'cibi-bevande/ciambella.svg',
        'torta': 'cibi-bevande/torta.svg',
        'gelato': 'cibi-bevande/gelato.svg',
        'muffin': 'cibi-bevande/muffin.svg',
        'popcorn': 'cibi-bevande/popcorn.svg',
        'noccioline': 'cibi-bevande/noccioline.svg',
        'castagne': 'cibi-bevande/castagne.svg',
        'sale': 'cibi-bevande/sale.svg',
        'peperoncino': 'cibi-bevande/peperoncino.svg',
        'basilico': 'cibi-bevande/basilico.svg',
        'caffè': 'cibi-bevande/caffe.svg',
        'tè': 'cibi-bevande/te.svg',
        'bibita': 'cibi-bevande/bibita.svg',
        'succo di frutta': 'cibi-bevande/succo_di_frutta.svg',
        'birra': 'cibi-bevande/birra.svg',
        'vino': 'cibi-bevande/vino.svg',
        'spumante': 'cibi-bevande/spumante.svg',
        'cocktail': 'cibi-bevande/cocktail.svg',
        'liquore': 'cibi-bevande/liquore.svg',
        'mate': 'cibi-bevande/mate.svg',
        'bubble tea': 'cibi-bevande/bubble_tea.svg',
        'ghiaccio': 'cibi-bevande/ghiaccio.svg',
        'sapone': 'cibi-bevande/sapone.svg',
        'carta igienica': 'cibi-bevande/carta_igienica.svg',
        'spazzolino': 'cibi-bevande/spazzolino.svg',
        'detersivo': 'cibi-bevande/detersivo.svg',
        'spugna': 'cibi-bevande/spugna.svg',
        'scopa': 'cibi-bevande/scopa.svg',
        'fagioli': 'cibi-bevande/fagioli.svg',
        'piadina': 'cibi-bevande/piadina.svg'
    };

    function getProductImage(keyword, product) {
        const key = keyword ? keyword.toLowerCase() : '';
        if (PRODUCT_IMAGES[key]) return PRODUCT_IMAGES[key];
        
        // Cerca parzialmente nel nome
        const name = product.toLowerCase();
        for (const [k, url] of Object.entries(PRODUCT_IMAGES)) {
            if (name.includes(k)) return url;
        }
        return null;
    }

    // === SISTEMA NOTIFICHE ===
    let myDeviceId = localStorage.getItem('spesa_device_id');
    if (!myDeviceId) {
        myDeviceId = 'device_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('spesa_device_id', myDeviceId);
    }
    
    let currentLastAction = null;
    
    function sendLocalNotification(title, options) {
        if (Notification.permission === 'granted') {
            navigator.serviceWorker.ready.then(sw => {
                sw.showNotification(title, options);
            });
        }
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'NOTIFICATION_ACTION') {
                if (event.data.action === 'add_item' && event.data.data && event.data.data.itemName) {
                    addToList(event.data.data.itemName);
                    showToast('✅ ' + event.data.data.itemName + ' aggiunto dalla notifica!');
                }
            }
        });
    }

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
                        
                        // Controlla azione per notifica
                        if (parsed.lastAction && parsed.lastAction.deviceId !== myDeviceId) {
                            if (parsed.lastAction.type === 'ADD') {
                                const user = parsed.lastAction.user || 'Qualcuno';
                                sendLocalNotification('Lista Aggiornata! 🛒', {
                                    body: `🤖 ${user} ha aggiunto '${parsed.lastAction.item}' alla spesa.`,
                                    icon: 'icon.png',
                                    badge: 'icon.png'
                                });
                            }
                        }
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
        {"name": "YOG.BRUNIC.INT.CAFFE G125", "price": 0.32},
        {"name": "Pecorino Romano DOP", "price": 4.80},
        {"name": "Taleggio DOP 200g", "price": 2.99},
        {"name": "Asiago DOP 250g", "price": 3.20},
        {"name": "Provola Affumicata 200g", "price": 2.40},
        {"name": "Burrata Fresca 125g", "price": 1.99},
        {"name": "Mascarpone 250g", "price": 2.10},
        {"name": "Feta Greca Originale 200g", "price": 2.69},
        {"name": "Formaggio Philadelphia 175g", "price": 1.89},
        {"name": "Squacquerone Romagnolo 250g", "price": 2.30},
        {"name": "Pecorino Sardo 200g", "price": 3.99},
        {"name": "Caciotta Toscana 250g", "price": 2.80},
        {"name": "Formaggio Emmental Svizzero 200g", "price": 2.50},
        {"name": "Gorgonzola e Mascarpone 200g", "price": 2.89},
        {"name": "Sottilette Classiche x8", "price": 1.75},
        {"name": "Formaggio Fuso a Fette Light x8", "price": 1.60},
        {"name": "Formaggini Crema Bel Paese x8", "price": 1.45},
        {"name": "Scamorza Bianca 200g", "price": 2.10},
        {"name": "Scamorza Affumicata 200g", "price": 2.20},
        {"name": "Caciocavallo Silano DOP 250g", "price": 4.50},
        {"name": "Bresaola della Valtellina IGP 100g", "price": 4.90},
        {"name": "Coppa Stagionata 100g", "price": 2.99},
        {"name": "Pancetta Coppata 100g", "price": 2.10},
        {"name": "Porchetta Trevigiana 100g", "price": 2.40},
        {"name": "Mortadella Bologna IGP con Pistacchio 100g", "price": 1.99},
        {"name": "Prosciutto Cotto Alta Qualità 100g", "price": 2.80},
        {"name": "Arista di Maiale a Fette 500g", "price": 4.99},
        {"name": "Costine di Maiale per Griglia 1kg", "price": 8.90},
        {"name": "Fettine di Petto di Tacchino 400g", "price": 4.20},
        {"name": "Carne Macinata Scelta di Bovino 500g", "price": 5.99},
        {"name": "Spiedini Misti di Carne x4", "price": 4.80},
        {"name": "Cotolette di Pollo Impanate x2", "price": 2.99},
        {"name": "Nuggets di Pollo Impanati 250g", "price": 2.49},
        {"name": "Filetti di Merluzzo Nordico 400g", "price": 5.50},
        {"name": "Alici Marinate in Olio 150g", "price": 2.99},
        {"name": "Gamberi Rossi Surgelati 400g", "price": 7.90},
        {"name": "Bastoncini di Pesce Fritti x18", "price": 3.99},
        {"name": "Orata Fresca Pulita al kg", "price": 12.90},
        {"name": "Polpo Fresco al kg", "price": 18.90},
        {"name": "Cozze Fresche Pulite 1kg", "price": 3.50},
        {"name": "Anelli di Calamaro Surgelati 400g", "price": 5.80},
        {"name": "Filetto di Pesce Spada al kg", "price": 22.90},
        {"name": "Triglia Fresca al kg", "price": 14.90},
        {"name": "Vongole Veraci Fresche 500g", "price": 6.90},
        {"name": "Sarde Fresche Pulite al kg", "price": 7.90},
        {"name": "Fagioli Borlotti in Scatola (3x400g)", "price": 1.99},
        {"name": "Fagioli Cannellini in Scatola (3x400g)", "price": 1.99},
        {"name": "Ceci Lessati in Scatola (3x400g)", "price": 2.10},
        {"name": "Lenticchie Lessate in Scatola (3x400g)", "price": 1.99},
        {"name": "Piselli Fini in Scatola 400g", "price": 0.89},
        {"name": "Olive Verdi Snocciolate in Salamoia", "price": 1.25},
        {"name": "Olive Taggiasche in Olio Extravergine", "price": 3.80},
        {"name": "Capperi Sotto Sale 100g", "price": 1.50},
        {"name": "Carciofini Sottolio Tagliati 280g", "price": 2.99},
        {"name": "Funghetti Sottolio Conditi 280g", "price": 2.49},
        {"name": "Cetriolini Sottaceto Interi 290g", "price": 1.30},
        {"name": "Tonno all'Olio di Oliva Pinne Gialle (3x80g)", "price": 3.99},
        {"name": "Tonno al Naturale Dietetico (3x80g)", "price": 3.70},
        {"name": "Filetti di Sgombro all'Olio di Oliva", "price": 1.89},
        {"name": "Sardine all'Olio di Oliva 120g", "price": 1.10},
        {"name": "Polpa di Granchio al Naturale 170g", "price": 2.50},
        {"name": "Pasta Barilla Rigatoni 500g", "price": 0.99},
        {"name": "Pasta Barilla Farfalle 500g", "price": 0.99},
        {"name": "Pasta Barilla Mezze Maniche 500g", "price": 0.99},
        {"name": "Pasta De Cecco Spaghetti n.12 500g", "price": 1.49},
        {"name": "Pasta De Cecco Penne Rigate 500g", "price": 1.49},
        {"name": "Tagliatelle all'Uovo Secche 250g", "price": 1.80},
        {"name": "Lasagne all'Uovo Sfogliavelo 250g", "price": 2.10},
        {"name": "Gnocchi di Patate Freschi 500g", "price": 1.29},
        {"name": "Riso Carnaroli Superfino 1kg", "price": 3.89},
        {"name": "Riso Venere Nero Integrale 500g", "price": 2.69},
        {"name": "Riso Integrale 10 Minuti 1kg", "price": 2.20},
        {"name": "Riso Basmati Profumato 1kg", "price": 2.99},
        {"name": "Orzo Perlato 500g", "price": 1.10},
        {"name": "Farro Perlato Bio 500g", "price": 1.45},
        {"name": "Cous Cous Medio Precotto 1kg", "price": 1.89},
        {"name": "Polenta Valsugana Rapida 375g", "price": 1.69},
        {"name": "Farina di Grano Tenero Tipo 1 1kg", "price": 1.35},
        {"name": "Farina Integrale di Grano 1kg", "price": 1.20},
        {"name": "Farina di Mais per Polenta 1kg", "price": 1.10},
        {"name": "Farina di Riso Senza Glutine 500g", "price": 1.50},
        {"name": "Amido di Mais Maizena 250g", "price": 1.30},
        {"name": "Fecola di Patate 250g", "price": 0.99},
        {"name": "Pangrattato Classico 500g", "price": 1.10},
        {"name": "Piadina Romagnola IGP con Olio di Oliva", "price": 1.49},
        {"name": "Pane Azzimo Tradizionale 200g", "price": 1.80},
        {"name": "Tarallini Pugliesi al Finocchietto", "price": 1.20},
        {"name": "Schiacciatine Salate Croccanti", "price": 1.50},
        {"name": "Cantucci Toscani alle Mandorle 300g", "price": 2.99},
        {"name": "Biscotti Amaretti Classici 200g", "price": 1.40},
        {"name": "Savoiardi per Tiramisù 400g", "price": 1.99},
        {"name": "Cacao Amaro in Polvere 75g", "price": 1.15},
        {"name": "Lievito Pane degli Angeli per Dolci", "price": 0.85},
        {"name": "Orzo Solubile per Latte 200g", "price": 1.49},
        {"name": "Fette Biscottate Integrali Classiche", "price": 1.69},
        {"name": "Muesli al Cioccolato e Nocciole", "price": 2.80},
        {"name": "Confettura Extra di Ciliegie 350g", "price": 2.10},
        {"name": "Marmellata di Arance Amare 350g", "price": 2.20},
        {"name": "Miele Millefiori Italiano 500g", "price": 4.99},
        {"name": "Crema Spalmabile alle Nocciole Novi", "price": 3.99},
        {"name": "Dolcificante Dietor Liquido 50ml", "price": 2.49},
        {"name": "Fruttosio Puro Scatola 500g", "price": 1.99},
        {"name": "Sciroppo d'Acero Canadese 250ml", "price": 4.50},
        {"name": "Zucchero a Velo busta 125g", "price": 0.70},
        {"name": "Gelatina in Fogli Colla di Pesce 12g", "price": 1.20},
        {"name": "Amido di Frumento Frumina 250g", "price": 1.10},
        {"name": "Aroma Naturale di Vaniglia fiale x2", "price": 1.50},
        {"name": "Gocce di Cioccolato Fondente 100g", "price": 1.35},
        {"name": "Origano Siciliano Essiccato 15g", "price": 1.10},
        {"name": "Pepe Nero Macinato Fresco 45g", "price": 1.80},
        {"name": "Rosmarino Macinato 15g", "price": 0.99},
        {"name": "Zafferano in Polvere bustine x3", "price": 3.50},
        {"name": "Brodo Granulare Classico Knorr 150g", "price": 1.99},
        {"name": "Brodo Granulare di Verdure Bio", "price": 2.20},
        {"name": "Dado da Cucina Classico Star x20", "price": 1.60},
        {"name": "Dado Gusto Fungo Star x10", "price": 1.10},
        {"name": "Sale Marino Integrale Fino 1kg", "price": 0.89},
        {"name": "Sale Marino Integrale Grosso 1kg", "price": 0.89},
        {"name": "Salsa di Soia Tradizionale 150ml", "price": 2.10},
        {"name": "Salsa Tabasco Originale 57ml", "price": 3.49},
        {"name": "Senape Delicata in Tubo 150ml", "price": 1.25},
        {"name": "Maionese Classica Calvè Vaso 450ml", "price": 2.20},
        {"name": "Salsa Barbecue Premium 250ml", "price": 1.99},
        {"name": "Glassa all'Aceto Balsamico di Modena", "price": 2.50},
        {"name": "Succo di Limone Naturale 200ml", "price": 0.79},
        {"name": "Ragù alla Bolognese Classico Barilla", "price": 1.99},
        {"name": "Sugo all'Arrabbiata Barilla 400g", "price": 1.69},
        {"name": "Salsa Pronta di Ciliegino Mutti", "price": 1.49},
        {"name": "Pesto Rosso con Pomodori Secchi", "price": 1.80},
        {"name": "Pesto di Pistacchio Siciliano 190g", "price": 4.90},
        {"name": "Spinaci Freschi in Foglia 500g", "price": 1.99},
        {"name": "Funghi Champignon Freschi Interi 500g", "price": 1.80},
        {"name": "Porri Freschi al kg", "price": 2.20},
        {"name": "Carciofi Freschi Sfusi cad.", "price": 0.80},
        {"name": "Asparagi Verdi Freschi mazzo 500g", "price": 3.20},
        {"name": "Zucca Delica a tranci al kg", "price": 1.60},
        {"name": "Radice di Zenzero Fresco al kg", "price": 4.90},
        {"name": "Avocado Hass Pronto da Mangiare x2", "price": 2.99},
        {"name": "Pere Abate al kg", "price": 2.49},
        {"name": "Kiwi Verdi Nazionali al kg", "price": 2.20},
        {"name": "Melone Retato Italiano cad.", "price": 2.99},
        {"name": "Anguria Baby cad.", "price": 2.50},
        {"name": "Mirtilli Freschi Vaschetta 125g", "price": 1.99},
        {"name": "Lamponi Freschi Vaschetta 125g", "price": 2.10},
        {"name": "Pompelmo Rosa al kg", "price": 1.89},
        {"name": "Lime Freschi al kg", "price": 3.99},
        {"name": "Prugne Nere al kg", "price": 2.20},
        {"name": "Albicocche Fresche al kg", "price": 2.80},
        {"name": "Fichi d'India al kg", "price": 3.20},
        {"name": "Noci Sgusciate Sacchetto 150g", "price": 2.99},
        {"name": "Mandorle Pelate Sacchetto 150g", "price": 2.49},
        {"name": "Pistacchi Tostati Salati 150g", "price": 3.20},
        {"name": "Fichi Secchi Premium Confezione 250g", "price": 2.80},
        {"name": "Prugne Secche Denocciolate 250g", "price": 2.30},
        {"name": "Arachidi Tostate in Guscio 500g", "price": 2.10},
        {"name": "Castagne Fresche al kg", "price": 5.90},
        {"name": "Datteri Naturali Premium 250g", "price": 1.99},
        {"name": "Uvetta Passolina Essiccata 250g", "price": 1.40},
        {"name": "Pinoli Italiani Sgusciati 30g", "price": 2.99},
        {"name": "Piselli Novelli Surgelati Findus 1kg", "price": 3.99},
        {"name": "Patatine fritte surgelate da forno 1kg", "price": 2.49},
        {"name": "Spinaci in Foglia Surgelati 1kg", "price": 1.99},
        {"name": "Fagiolini Finissimi Surgelati 600g", "price": 1.70},
        {"name": "Minestrone di Verdure 15 Erbe 1kg", "price": 2.20},
        {"name": "Pizza Margherita Surgelata Buitoni x2", "price": 3.99},
        {"name": "Gelato Crema e Cioccolato Vaschetta", "price": 2.99},
        {"name": "Gelato Cornetti Algida x6", "price": 4.20},
        {"name": "Ghiaccioli Misti alla Frutta x10", "price": 2.50},
        {"name": "Frutti di Bosco Surgelati Misti 300g", "price": 2.89},
        {"name": "Funghi Porcini Surgelati a Cubetti", "price": 4.99},
        {"name": "Pasta Sfoglia Rotonda Buitoni 230g", "price": 1.49},
        {"name": "Pasta Frolla Rotonda Fresca 230g", "price": 1.49},
        {"name": "Piadina Arrotolata Classica x3", "price": 1.30},
        {"name": "Tigelle Modenesi Fresche x8", "price": 1.99},
        {"name": "Basi per Pizza Rettangolari x2", "price": 2.50},
        {"name": "Lievito di Birra Fresco panetto 25g", "price": 0.25},
        {"name": "Preparato per Fritture Farina 500g", "price": 1.10},
        {"name": "Fanta Orange Lattina 33cl x4", "price": 2.80},
        {"name": "Sprite Lattina 33cl x4", "price": 2.80},
        {"name": "Pepsi Cola Bottiglia 1.5L", "price": 1.49},
        {"name": "Chinotto Neri Lattina 33cl", "price": 0.79},
        {"name": "Tè Freddo alla Pesca San Benedetto 1.5L", "price": 1.10},
        {"name": "Tè Freddo al Limone Estathè 1.5L", "price": 1.99},
        {"name": "Succo d'Ananas 100% Senza Zuccheri 1L", "price": 1.89},
        {"name": "Succo di Pera Nettare 3x200ml", "price": 1.30},
        {"name": "Birra Ichnusa Non Filtrata 50cl", "price": 1.49},
        {"name": "Birra Analcolica Heineken 0.0 x3", "price": 2.49},
        {"name": "Prosecco Valdobbiadene Superiore DOCG", "price": 7.90},
        {"name": "Aperol Aperitivo 70cl", "price": 9.90},
        {"name": "Campari Bitter 70cl", "price": 11.50},
        {"name": "Crodino Aperitivo Analcolico (10x10cl)", "price": 5.90},
        {"name": "Sanbitter Rosso Aperitivo (10x10cl)", "price": 5.80},
        {"name": "Limoncello di Sorrento Premium 50cl", "price": 6.90},
        {"name": "Grappa Nonino Friulana 70cl", "price": 15.90},
        {"name": "Sambuca Molinari Extra 70cl", "price": 11.90},
        {"name": "Vino Chianti DOCG Bottiglia 750ml", "price": 4.90},
        {"name": "Vino Chardonnay Bianco Frizzante 750ml", "price": 3.80},
        {"name": "Vino Lambrusco Reggiano Frizzante", "price": 3.20},
        {"name": "Vino Montepulciano d'Abruzzo DOC", "price": 3.99},
        {"name": "Vino Tavernello Bianco Brik 1L", "price": 1.50},
        {"name": "Vino Tavernello Rosso Brik 1L", "price": 1.50},
        {"name": "Rum Bacardi Carta Blanca 70cl", "price": 11.90},
        {"name": "Vodka Keglevich Fragola 70cl", "price": 8.90},
        {"name": "Whisky Jack Daniel's Old No.7 70cl", "price": 18.90},
        {"name": "Liquore Amaro Averna 70cl", "price": 11.90},
        {"name": "Liquore Jägermeister Amaro 70cl", "price": 12.90},
        {"name": "Carta Casa Asciugatutto Rotoloni x4", "price": 3.50},
        {"name": "Piatti di Carta Compostabili x50", "price": 2.49},
        {"name": "Bicchieri di Carta Compostabili x50", "price": 1.99},
        {"name": "Tovaglioli Decorati Double Face x50", "price": 1.49},
        {"name": "Sacchetti Gelo Regolabili per Alimenti", "price": 1.80},
        {"name": "Sapone Liquido Intimo Chilly 200ml", "price": 2.49},
        {"name": "Balsamo Capelli Idratante Pantene 200ml", "price": 2.80},
        {"name": "Crema Corpo Idratante Nivea Fluida", "price": 3.50},
        {"name": "Assorbenti Lines Seta Ultra con Ali x14", "price": 3.99},
        {"name": "Dischetti Struccanti di Puro Cotone x80", "price": 1.20},
        {"name": "Salviettine Struccanti Delicate x20", "price": 1.80},
        {"name": "Detergente Viso Delicato Neutro Roberts", "price": 2.50},
        {"name": "Candeggina Igienizzante Classica 2L", "price": 1.30},
        {"name": "Detergente per Lana e Delicati Chanteclair", "price": 2.99},
        {"name": "Bicarbonato di Sodio Purissimo 500g", "price": 0.99},
        {"name": "Pastiglie Lavastoviglie Finish All in 1", "price": 6.90},
        {"name": "Anticalcare Spray Viakal Original 500ml", "price": 2.49},
        {"name": "Panni Catturapolvere Swiffer x18", "price": 4.50},
        {"name": "Cibo Umido per Gatti Felix Bocconcini x12", "price": 4.80},
        {"name": "Croccantini per Cani Purina One 800g", "price": 3.99},
        {"name": "Lettiera per Gatti Assorbente 10L", "price": 3.50},
        {"name": "Biscotti per Cani Ossetti Snack", "price": 1.80},
        {"name": "Detersivo Piatti Concentrato Nelsen 1L", "price": 1.49},
        {"name": "Gel Lavastoviglie Finish Tutto in 1", "price": 4.50},
        {"name": "Brillantante per Lavastoviglie Finish", "price": 2.20},
        {"name": "Deodorante per Lavastoviglie Finish", "price": 1.89},
        {"name": "Pasticche Sale per Addolcitore 25kg", "price": 7.90},
        {"name": "Guanti in Latex Multiuso x100", "price": 4.90},
        {"name": "Guanti per Lavare i Piatti Felpati", "price": 1.20},
        {"name": "Panni in Microfibra Multiuso x3", "price": 1.99},
        {"name": "Spugne Abrasive per Piatti x3", "price": 0.89},
        {"name": "Cera Lucidante Pavimenti Livax 1L", "price": 4.99},
        {"name": "Spray per Vetri e Cristalli Vetril 500ml", "price": 1.80},
        {"name": "Detergente per Vetri Antialoni Spray", "price": 1.50},
        {"name": "Disinfettante Liquido Presidio Medico", "price": 3.20},
        {"name": "Aceto Bianco di Alcol per Pulizie 1L", "price": 0.79},
        {"name": "Sturalavandini Liquido Idraulico 1L", "price": 2.49},
        {"name": "Pasticche Igienizzanti per Wc x2", "price": 1.30},
        {"name": "Gel Igienizzante Wc Net Candeggina 700ml", "price": 1.99},
        {"name": "Tavolette Wc Bref Blue Activ x2", "price": 2.20},
        {"name": "Sapone di Marsiglia Solido Bucato 250g", "price": 1.10},
        {"name": "Smacchiatore Liquido Vanish Oxi Action", "price": 4.99},
        {"name": "Acchiappacolore Grey Fogli x16", "price": 2.99},
        {"name": "Appretto per Stirare Facile Spray 500ml", "price": 1.60},
        {"name": "Acqua Demineralizzata per Ferro Stiro 2L", "price": 0.89},
        {"name": "Sacchetti Spazzatura Umido Biodegradabili", "price": 1.99},
        {"name": "Sacchetti Spazzatura Grandi Condominiali", "price": 2.50},
        {"name": "Pellicola Trasparente Alimenti 50m", "price": 1.80},
        {"name": "Carta da Forno Rotolo 20m", "price": 1.50},
        {"name": "Fogli Alluminio Spessi Gofrati x20", "price": 2.10},
        {"name": "Vaschette Alluminio con Coperchio x5", "price": 1.80},
        {"name": "Fazzoletti di Carta 4 Veli x10 pacchetti", "price": 1.10},
        {"name": "Tovaglioli di Carta Bianchi Monovelo x100", "price": 0.89},
        {"name": "Accendigas con Fiamma Regolabile", "price": 1.50},
        {"name": "Carbonella di Legna per Barbecue 3kg", "price": 3.99},
        {"name": "Diavolina Accendifuoco x40 tavolette", "price": 1.99},
        {"name": "Pila Alcalina Duracell AA Stilo x4", "price": 4.50},
        {"name": "Pila Alcalina Duracell AAA Ministilo x4", "price": 4.50},
        {"name": "Lampadina Led E27 10W Luce Calda", "price": 2.20},
        {"name": "Lampadina Led E14 5W Oliva Calda", "price": 1.99},
        {"name": "Insetticida Spray Zanzare e Mosche 400ml", "price": 2.80},
        {"name": "Insetticida Striscianti Scarafaggi e Formiche", "price": 2.99},
        {"name": "Pastiglie Antitarme per Armadi", "price": 1.80},
        {"name": "Gel Igienizzante Mani Amuchina 80ml", "price": 1.99},
        {"name": "Crema Solare Nivea Sun SPF 30 200ml", "price": 8.90},
        {"name": "Doposole Idratante Nivea Sun 200ml", "price": 5.90},
        {"name": "Cerotti Assortiti Resistenti Acqua x20", "price": 1.50},
        {"name": "Cotone Idrofilo Sanitario 100g", "price": 1.10},
        {"name": "Alcol Denaturato 90 Gradi 1L", "price": 1.49},
        {"name": "Acqua Ossigenata Disinfettante 250ml", "price": 0.89},
        {"name": "Shampoo Head & Shoulders Antiforfora", "price": 2.99},
        {"name": "Lacca per Capelli Splend'Or Forte 400ml", "price": 1.80},
        {"name": "Gel Capelli Fissaggio Forte 150ml", "price": 1.50},
        {"name": "Schiuma da Barba Proraso Verde 400ml", "price": 1.99},
        {"name": "Pennello da Barba Professionale Omega", "price": 4.90},
        {"name": "Rasoio Usa e Getta Gillette Blue II x10", "price": 2.80},
        {"name": "Crema Depilatoria Corpo Veet 200ml", "price": 4.99},
        {"name": "Strisce Depilatorie Corpo Veet x20", "price": 5.50},
        {"name": "Dentifricio Colgate Total Original 75ml", "price": 2.20},
        {"name": "Collutorio Listerine Mentolo 500ml", "price": 3.99},
        {"name": "Filo Interdentale Cerato Mentolato 50m", "price": 1.80},
        {"name": "Saponetta Classica Dove Idratante 100g", "price": 0.99},
        {"name": "Bagnoschiuma Felce Azzurra Classico 650ml", "price": 2.49},
        {"name": "Sali da Bagno Rilassanti Eucalipto 1kg", "price": 2.10},
        {"name": "Spugna da Bagno Morbida Massaggiante", "price": 1.10},
        {"name": "Pietra Pomice Naturale per Piedi", "price": 1.50},
        {"name": "Crema Mani Concentrata Neutrogena 50ml", "price": 3.99},
        {"name": "Burro Cacao Labello Original Idratante", "price": 1.80},
        {"name": "Salviettine Igieniche Intime x12", "price": 1.50},
        {"name": "Assorbenti Interni Tampax Regular x16", "price": 3.80},
        {"name": "Salvaslip Lines Intervallo Velo x40", "price": 2.20},
        {"name": "Biberon Chicco Benessere Plastica 150ml", "price": 6.90},
        {"name": "Ciuccio Succhietto Chicco Silicone 0-6m", "price": 4.50},
        {"name": "Pannolini Pampers Sole e Luna Taglia 4", "price": 6.99},
        {"name": "Salviettine Pampers Baby Fresh x70", "price": 2.20},
        {"name": "Biscotti per Neonati Plasmon 320g", "price": 2.89},
        {"name": "Pastina Primi Giochi Plasmon Tempestine", "price": 1.20},
        {"name": "Omogeneizzato Plasmon Vitello (2x80g)", "price": 1.99},
        {"name": "Omogeneizzato Plasmon Mela e Banana", "price": 1.50},
        {"name": "Polvere Asfissiante Talco Mentolato", "price": 1.80},
        {"name": "Olio per Neonati Johnson's Baby 300ml", "price": 3.50},
        {"name": "Detergente Delicato per Bambini Chicco", "price": 2.49},
        {"name": "Spugna Naturale Baby Chicco Delicata", "price": 3.99},
        {"name": "Cera d'Api Lucidante per Mobili Legno", "price": 3.20},
        {"name": "Pulisci Metalli Sidol Crema 250ml", "price": 2.49},
        {"name": "Togli Ruggine Smacchiatore Tessuti", "price": 1.99},
        {"name": "Acido Muriatico Disincrostante 1L", "price": 0.89},
        {"name": "Soda Caustica in Scaglie Sacchetto 1kg", "price": 2.99},
        {"name": "Crema per Scarpe di Pelle Nera Tubo", "price": 1.50},
        {"name": "Spazzola Lucida Scarpe in Setole", "price": 2.10},
        {"name": "Nastro Adesivo Imballaggio Marrone 50m", "price": 1.20},
        {"name": "Spago di Canapa Gomitolo 100m", "price": 1.10},
        {"name": "Colla Super Attak Liquid Original 3g", "price": 3.99},
        {"name": "Colla Stick Pritt Grande 43g", "price": 1.99},
        {"name": "Forbici da Cucina in Acciaio Inox", "price": 3.50},
        {"name": "Accendino Bic Maxi Classico cad.", "price": 1.50},
        {"name": "Fiammiferi in Legno Svedesi x10 scatole", "price": 0.99},
        {"name": "Panno di Lana Antistatico Catturapolvere", "price": 1.80},
        {"name": "Profumatore per Ambienti Glade Gel 150g", "price": 1.49},
        {"name": "Profumo spray per Tessuti Febreze 500ml", "price": 3.49},
        {"name": "Mangiaumidità Deumidificatore Scatola", "price": 2.99},
        {"name": "Pastiglie Ricarica Mangiaumidità x2", "price": 3.50},
        {"name": "Sacchetto Profumato per Cassetti Lavanda", "price": 0.99},
        {"name": "Antitarme Alimentare Autoadesivo x2", "price": 1.99},
        {"name": "Trappola per Formiche Baygon Box x2", "price": 3.99},
        {"name": "Tappi per Orecchie in Schiuma x4", "price": 1.80},
        {"name": "Mascherine Chirurgiche 3 Veli x10", "price": 1.00},
        {"name": "Termometro Clinico Digitale", "price": 4.90},
        {"name": "Stuzzicadenti in Legno di Betulla x200", "price": 0.89},
        {"name": "Filtri per Caffè Americano in Carta x40", "price": 1.50},
        {"name": "Pastiglie per Pulizia Dentiere Polident", "price": 3.99},
        {"name": "Crema Adesiva per Dentier Polident 40g", "price": 4.50},
        {"name": "Sabbia Lettiera Silicio per Gatti 5L", "price": 4.99},
        {"name": "Snack al Salmone per Gatti Dreamies 60g", "price": 1.50},
        {"name": "Collare Antipulci per Cani Taglia Media", "price": 7.90},
        {"name": "Shampoo Delicato per Cani e Cuccioli", "price": 3.50},
        {"name": "Sacchetti Igienici Raccogli Feci Cani x60", "price": 1.80},
        {"name": "Osso da Masticare per Cani in Pelle", "price": 2.20},
        {"name": "Guinzaglio Allungabile per Cani 5m", "price": 9.90},
        {"name": "Spazzola Cardatrice per Pelo Gatto", "price": 3.80},
        {"name": "Ciotola in Acciaio per Animali", "price": 2.50}
    ];

    const defaultCatalog = visottoData.map(item => ({
        name: item.name,
        price: item.price,
        icon: guessIcon(item.name)
    }));

    // Carica dati da LocalStorage
    // --- NUOVA LOGICA DASHBOARD SCURA ---

    let catalog = JSON.parse(localStorage.getItem('spesa_catalog')) || defaultCatalog;
    let shoppingList = JSON.parse(localStorage.getItem('spesa_list')) || [];
    let lastUpdated = Date.now();
    let currentLastAction = null;
    const myDeviceId = 'device_' + Math.random().toString(36).substr(2, 9);
    
    // MQTT Topic
    const MQTT_TOPIC = 'spesa/lista/aggiornamenti';

    // UI Elements
    const shoppingListEl = document.getElementById('shopping-list');
    const totalAmountEl = document.getElementById('total-amount');
    const predictiveListEl = document.getElementById('predictive-list');
    const flyersListEl = document.getElementById('flyers-list');
    
    // FAB & Modal
    const addFab = document.getElementById('add-fab');
    const addItemModal = document.getElementById('add-item-modal');
    const closeAddModal = document.getElementById('close-add-modal');
    const foodInput = document.getElementById('food-input');
    const suggestionsEl = document.getElementById('suggestions');
    const addBtn = document.getElementById('add-btn');

    // Mappatura Categorie
    function guessCategory(name) {
        const n = name.toLowerCase();
        if (n.includes('latte') || n.includes('yogurt') || n.includes('formaggio') || n.includes('mozzarella') || n.includes('burro')) {
            return { id: 'Dairy', icon: '🥛', color: '#60A5FA' };
        }
        if (n.includes('mela') || n.includes('banana') || n.includes('frutta') || n.includes('verdura') || n.includes('pomodoro') || n.includes('insalata')) {
            return { id: 'Fruit & Veg', icon: '🍎', color: '#10B981' };
        }
        if (n.includes('carne') || n.includes('pollo') || n.includes('pesce') || n.includes('salame') || n.includes('prosciutto')) {
            return { id: 'Meat', icon: '🥩', color: '#F43F5E' };
        }
        if (n.includes('pane') || n.includes('pasta') || n.includes('riso') || n.includes('farina') || n.includes('biscotti') || n.includes('caffè')) {
            return { id: 'Pantry', icon: '🥫', color: '#F59E0B' };
        }
        if (n.includes('acqua') || n.includes('vino') || n.includes('birra') || n.includes('succo')) {
            return { id: 'Drinks', icon: '🥤', color: '#38BDF8' };
        }
        if (n.includes('detersivo') || n.includes('sapone') || n.includes('carta igienica') || n.includes('shampoo')) {
            return { id: 'Home', icon: '🧻', color: '#8B5CF6' };
        }
        return { id: 'Other', icon: '🛒', color: '#94A3B8' };
    }

    function saveState() {
        lastUpdated = Date.now();
        localStorage.setItem('spesa_last_updated', lastUpdated.toString());
        localStorage.setItem('spesa_catalog', JSON.stringify(catalog));
        localStorage.setItem('spesa_list', JSON.stringify(shoppingList));
        
        if (typeof mqttClient !== 'undefined' && mqttClient && mqttClient.connected) {
            const payload = JSON.stringify({ ts: lastUpdated, list: shoppingList, lastAction: currentLastAction });
            mqttClient.publish(MQTT_TOPIC, payload, { retain: true });
            currentLastAction = null;
        }
    }

    function getOrCreateCatalogItem(name) {
        const trimmedName = name.trim();
        let item = catalog.find(c => c.name.toLowerCase() === trimmedName.toLowerCase());
        if (!item) {
            item = { name: trimmedName, icon: guessIcon(trimmedName), price: 0, frequency: 0 };
            catalog.push(item);
            saveState();
        }
        return item;
    }

    function addToList(name) {
        if (!name.trim()) return;
        const catalogItem = getOrCreateCatalogItem(name);
        
        if (!shoppingList.some(i => i.name.toLowerCase() === catalogItem.name.toLowerCase())) {
            catalogItem.frequency = (catalogItem.frequency || 0) + 1;
            shoppingList.push({ ...catalogItem, id: Date.now(), completed: false });
            currentLastAction = { type: 'ADD', item: catalogItem.name, deviceId: myDeviceId };
            saveState();
            renderList();
        }
        
        foodInput.value = '';
        suggestionsEl.classList.add('hidden');
        addItemModal.classList.add('hidden');
    }

    function updateTotal() {
        if (!totalAmountEl) return;
        const total = shoppingList.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
        totalAmountEl.textContent = '€' + total.toFixed(2);
    }

    function renderList() {
        if (!shoppingListEl) return;
        shoppingListEl.innerHTML = '';
        
        if (shoppingList.length === 0) {
            shoppingListEl.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 40px 20px;">Lista vuota. Aggiungi qualcosa!</div>`;
            updateTotal();
            return;
        }

        shoppingList.forEach(item => {
            const cat = guessCategory(item.name);
            const li = document.createElement('li');
            li.className = `list-item ${item.completed ? 'completed' : ''}`;
            
            // Layout List Item Complex
            li.innerHTML = `
                <div class="item-category-tile">
                    <span class="tile-icon">${cat.icon}</span>
                    <span class="tile-label">${cat.id}</span>
                </div>
                <div class="item-content">
                    <div class="item-main-row">
                        <div class="item-checkbox ${item.completed ? 'checked' : ''}"></div>
                        <div class="item-name">${item.name}</div>
                    </div>
                    <div class="item-progress-track">
                        <div class="item-progress-fill" style="width: 100%; background: ${cat.color};"></div>
                    </div>
                    ${item.price > 0 ? `<div class="item-badge">€${Number(item.price).toFixed(2)}</div>` : ''}
                </div>
            `;

            // Toglie/Aggiungi spunta
            li.addEventListener('click', (e) => {
                item.completed = !item.completed;
                saveState();
                renderList();
            });

            shoppingListEl.appendChild(li);
        });
        
        updateTotal();
    }

    // Modal Add Product
    addFab.addEventListener('click', () => {
        addItemModal.classList.remove('hidden');
        setTimeout(() => foodInput.focus(), 100);
    });

    closeAddModal.addEventListener('click', () => {
        addItemModal.classList.add('hidden');
    });

    addBtn.addEventListener('click', () => addToList(foodInput.value));
    
    foodInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addToList(foodInput.value);
        }
    });

    foodInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        suggestionsEl.innerHTML = '';
        if (!query.trim()) {
            suggestionsEl.classList.add('hidden');
            return;
        }
        const matches = catalog.filter(c => c.name.toLowerCase().includes(query)).slice(0, 5);
        if (matches.length > 0) {
            matches.forEach(match => {
                const li = document.createElement('li');
                li.className = 'suggestion-item';
                li.innerHTML = `<span class="suggestion-icon" style="color: white;">${guessIcon(match.name)}</span> <span style="color: white;">${match.name}</span>`;
                li.addEventListener('click', () => addToList(match.name));
                suggestionsEl.appendChild(li);
            });
            suggestionsEl.classList.remove('hidden');
        } else {
            suggestionsEl.classList.add('hidden');
        }
    });

    // Predictive & Flyers Mock Logic
    function loadDashboardData() {
        // Mock Finiti
        if (predictiveListEl) {
            predictiveListEl.innerHTML = `
                <li class="predictive-item-small" onclick="document.getElementById('food-input').value='Uova'; document.getElementById('add-fab').click();">
                    <span class="predictive-icon">🥚</span> <span class="predictive-name" style="color:white;">Uova?</span>
                </li>
                <li class="predictive-item-small" onclick="document.getElementById('food-input').value='Caffè'; document.getElementById('add-fab').click();">
                    <span class="predictive-icon">☕</span> <span class="predictive-name" style="color:white;">Caffè?</span>
                </li>
            `;
        }

        // Carica Volantini dal JSON
        if (flyersListEl) {
            fetch('volantini.json?t=' + Date.now())
                .then(r => r.json())
                .then(data => {
                    flyersListEl.innerHTML = '';
                    if (data.flyers && data.flyers.length > 0) {
                        data.flyers.forEach(f => {
                            flyersListEl.innerHTML += `
                                <li class="flyer-card" onclick="window.open('${f.url}', '_blank')">
                                    <div class="flyer-img">
                                        <div class="flyer-market-badge">${f.icon}</div>
                                        <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #FFED4A 0%, #F59E0B 100%);"></div>
                                    </div>
                                    <div class="flyer-info">
                                        <div class="flyer-title">${f.name}</div>
                                        <div style="font-size:10px; color:var(--text-secondary);">Clicca per aprire</div>
                                    </div>
                                </li>
                            `;
                        });
                    }
                })
                .catch(() => {
                    flyersListEl.innerHTML = '<li style="color:white; padding: 20px;">Nessun volantino</li>';
                });
        }
    }

    // Inizializzazione
    renderList();
    loadDashboardData();

}); // fine DOMContentLoaded
