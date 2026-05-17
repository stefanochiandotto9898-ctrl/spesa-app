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
            
            const imgUrl = getProductImage(item.keyword, item.name);
            const iconHtml = imgUrl 
                ? `<div class="item-icon" style="padding: 5px;"><img src="${imgUrl}" style="width:100%; height:100%; object-fit:contain;"></div>`
                : `<div class="item-icon">${item.icon}</div>`;

            li.innerHTML = `
                ${iconHtml}
                <div class="item-name ${item.completed ? 'completed' : ''}">${item.name}</div>
                
                <div class="item-price-wrapper">
                    <input type="number" class="price-input" step="0.10" min="0" placeholder="0.00" value="${item.price > 0 ? item.price : ''}">
                    <span class="price-currency">€</span>
                </div>
                
                <button class="check-btn ${item.completed ? 'checked' : ''}" aria-label="Segna completato"></button>
                <button class="delete-btn" aria-label="Elimina" style="background:transparent; border:none; color: #CCC; margin-left:10px; font-size:18px;">×</button>
            `;

            li.querySelector('.delete-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                shoppingList = shoppingList.filter(i => i.id !== item.id);
                saveState();
                renderList();
            });

            // Gestione prezzo
            const priceInput = li.querySelector('.price-input');
            priceInput.addEventListener('change', (e) => {
                const newPrice = parseFloat(e.target.value) || 0;
                item.price = newPrice;
                const catalogItem = catalog.find(c => c.name.toLowerCase() === item.name.toLowerCase());
                if (catalogItem) catalogItem.price = newPrice;
                saveState();
                updateTotal();
            });

            // Toggle completato
            li.querySelector('.check-btn').addEventListener('click', () => {
                item.completed = !item.completed;
                saveState();
                renderList();
            });

            li.querySelector('.item-name').addEventListener('click', () => {
                item.completed = !item.completed;
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

    // === Toggles & Offerte ===
    const viewListBtn = document.getElementById('view-list-btn');
    const viewOffersBtn = document.getElementById('view-offers-btn');
    const listView = document.getElementById('list-view');
    const offersView = document.getElementById('offers-view');
    const offersList = document.getElementById('offers-list');
    const personalizedList = document.getElementById('personalized-list');
    const personalizedSection = document.getElementById('personalized-section');
    const offersValidityEl = document.getElementById('offers-validity');
    const offersRefreshBtn = document.getElementById('offers-refresh-btn');
    const allOffersTitle = document.getElementById('all-offers-title');

    const viewFlyersBtn = document.getElementById('view-flyers-btn');
    const volantiniView = document.getElementById('volantini-view');
    const flyersList = document.getElementById('flyers-list');

    let allOffersData = [];
    let offersLoaded = false;
    let activeMarketFilter = 'all';

    if (viewListBtn && viewOffersBtn && viewFlyersBtn) {
        viewListBtn.addEventListener('click', () => {
            viewListBtn.classList.add('active');
            viewOffersBtn.classList.remove('active');
            viewFlyersBtn.classList.remove('active');
            listView.classList.remove('hidden');
            offersView.classList.add('hidden');
            volantiniView.classList.add('hidden');
        });

        viewOffersBtn.addEventListener('click', () => {
            viewOffersBtn.classList.add('active');
            viewListBtn.classList.remove('active');
            viewFlyersBtn.classList.remove('active');
            offersView.classList.remove('hidden');
            listView.classList.add('hidden');
            volantiniView.classList.add('hidden');
            if (!offersLoaded) loadOffers();
        });

        viewFlyersBtn.addEventListener('click', () => {
            viewFlyersBtn.classList.add('active');
            viewListBtn.classList.remove('active');
            viewOffersBtn.classList.remove('active');
            volantiniView.classList.remove('hidden');
            listView.classList.add('hidden');
            offersView.classList.add('hidden');
            renderFlyers();
        });
    }

    // Filtri supermercato
    document.getElementById('offers-filters')?.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeMarketFilter = chip.dataset.market;
        renderOffers(allOffersData);
    });

    // Pulsante aggiorna
    offersRefreshBtn?.addEventListener('click', () => {
        offersLoaded = false;
        offersList.innerHTML = '';
        if (personalizedList) personalizedList.innerHTML = '';
        if (personalizedSection) personalizedSection.classList.add('hidden');
        loadOffers();
    });

    // Determina se un'offerta è "per te" confrontando il keyword con il catalogo frequente
    function isPersonalized(offer) {
        const keyword = (offer.keyword || '').toLowerCase();
        const productName = offer.product.toLowerCase();
        // Controlla se il catalogo ha elementi con alta frequenza che matchano
        const frequentItems = catalog.filter(c => (c.frequency || 0) >= 1);
        return frequentItems.some(item => {
            const n = item.name.toLowerCase();
            return n.includes(keyword) || keyword.includes(n.split(' ')[0]) ||
                   n.includes(productName.split(' ')[0]) ||
                   productName.includes(n.split(' ')[0]);
        });
    }

    function createOfferCard(offer, isForYou) {
        const li = document.createElement('li');
        li.className = 'offer-item';
        
        const imgUrl = getProductImage(offer.keyword, offer.product);
        const mediaHtml = imgUrl 
            ? `<img src="${imgUrl}" alt="${offer.product}">`
            : `<div class="offer-placeholder-icon">${offer.icon || '🛒'}</div>`;

        const discountHtml = offer.discount
            ? `<div class="offer-discount-badge" style="position: absolute; top: 16px; right: 16px; background: var(--danger-color); color: white; padding: 4px 10px; border-radius: 20px; font-weight: 800; font-size: 12px;">-${offer.discount}%</div>`
            : '';
        
        const forYouTag = isForYou
            ? `<div style="position: absolute; bottom: 10px; left: 16px; background: rgba(0,0,0,0.7); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">⭐ CONSIGLIATO</div>`
            : '';

        li.innerHTML = `
            <div class="offer-image-container">
                <span class="offer-badge-market" data-market="${offer.supermarketKey || ''}">${offer.supermarket}</span>
                ${mediaHtml}
                ${discountHtml}
                ${forYouTag}
            </div>
            <div class="offer-details">
                <div class="offer-product">${offer.product}</div>
                <div class="offer-location">${offer.location || ''}</div>
                <div class="offer-footer">
                    <div class="offer-price-group">
                        <div class="offer-price-current">€${Number(offer.price).toFixed(2)}</div>
                        ${offer.originalPrice ? `<div class="offer-price-original">€${offer.originalPrice.toFixed(2)}</div>` : ''}
                    </div>
                    <div class="offer-add-action">+</div>
                </div>
            </div>
        `;

        li.addEventListener('click', () => {
            const added = getOrCreateCatalogItem(offer.product);
            added.price = parseFloat(offer.price);
            added.icon = offer.icon || '🛒';

            if (!shoppingList.some(i => i.name.toLowerCase() === added.name.toLowerCase())) {
                added.frequency = (added.frequency || 0) + 1;
                shoppingList.push({ ...added, id: Date.now(), completed: false });
                saveState();
                renderList();
                showToast('✅ ' + offer.product + ' aggiunto!');
            } else {
                showToast('⚠️ Già nella lista!');
            }
        });

        return li;
    }

    function renderOffers(offers) {
        if (!offersList) return;

        // Filtra per supermercato
        const filtered = activeMarketFilter === 'all'
            ? offers
            : offers.filter(o => o.supermarketKey === activeMarketFilter);

        // Separa consigliate
        const personalized = filtered.filter(o => isPersonalized(o));
        const rest = filtered.filter(o => !isPersonalized(o));

        // Sezione "Consigliate per te"
        if (personalizedList && personalizedSection) {
            personalizedList.innerHTML = '';
            if (personalized.length > 0) {
                personalizedSection.classList.remove('hidden');
                personalized.forEach(o => personalizedList.appendChild(createOfferCard(o, true)));
            } else {
                personalizedSection.classList.add('hidden');
            }
        }

        // Tutte le offerte (esclude le personalizzate se mostrate sopra)
        offersList.innerHTML = '';
        if (filtered.length === 0) {
            offersList.innerHTML = `
                <div class="offers-empty-state">
                    <div class="empty-icon">🔍</div>
                    <p>Nessuna offerta trovata<br>per questo supermercato.</p>
                </div>`;
            if (allOffersTitle) allOffersTitle.textContent = '📋 Tutte le Offerte';
            return;
        }

        if (allOffersTitle) {
            allOffersTitle.textContent = personalized.length > 0 ? '📋 Altre Offerte' : '📋 Tutte le Offerte';
        }

        if (rest.length === 0 && personalized.length > 0) {
            offersList.innerHTML = `<div class="offers-empty-state" style="padding: 20px 0;"><p>Tutte le offerte disponibili<br>sono già nei tuoi consigli!</p></div>`;
        } else {
            rest.forEach(o => offersList.appendChild(createOfferCard(o, false)));
        }
    }

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
                    <a href="${f.url}" target="_blank" class="flyer-btn">Apri</a>
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

    async function loadOffers() {
        if (offersList) {
            offersList.innerHTML = `
                <div class="offers-empty-state">
                    <div class="empty-icon">⏳</div>
                    <p>Caricamento offerte...</p>
                </div>`;
        }
        if (offersValidityEl) offersValidityEl.textContent = 'Aggiornamento...';

        try {
            const res = await fetch('offerte.json?t=' + new Date().getTime());
            if (!res.ok) throw new Error("File non trovato");
            const data = await res.json();

            allOffersData = data.offers || [];

            // Mostra validità
            if (offersValidityEl && data.validFrom && data.validTo) {
                const from = new Date(data.validFrom).toLocaleDateString('it-IT', { day: 'numeric', month: 'short' });
                const to = new Date(data.validTo).toLocaleDateString('it-IT', { day: 'numeric', month: 'short' });
                offersValidityEl.textContent = `Valide dal ${from} al ${to} · ${allOffersData.length} offerte`;
            } else if (offersValidityEl) {
                offersValidityEl.textContent = `${allOffersData.length} offerte disponibili`;
            }

            renderOffers(allOffersData);
            offersLoaded = true;

        } catch (e) {
            console.log('Error loading offers:', e);
            if (offersList) {
                offersList.innerHTML = `
                    <div class="offers-empty-state">
                        <div class="empty-icon">⚠️</div>
                        <p>Impossibile caricare le offerte.<br>
                        <a href="https://www.promoqui.it/volantino/lidl" target="_blank" style="color: var(--accent-color);">Apri Promoqui</a>
                        </p>
                    </div>`;
            }
            if (offersValidityEl) offersValidityEl.textContent = 'Errore caricamento';
        }
    }

    // Inizializza UI
    renderList();

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
