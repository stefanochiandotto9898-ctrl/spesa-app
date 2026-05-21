document.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // STATE VARIABLES
    // ============================================================
    let currentLastAction = null;
    let myDeviceId = localStorage.getItem('spesa_device_id');
    if (!myDeviceId) {
        myDeviceId = 'device_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('spesa_device_id', myDeviceId);
    }
    let lastUpdated = parseInt(localStorage.getItem('spesa_last_updated')) || 0;
    let mqttClient = null;
    const MQTT_TOPIC = 'spesa-app-ste-room-secret-99';

    // ============================================================
    // PRODUCT IMAGES
    // ============================================================
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
        const name = product.toLowerCase();
        for (const [k, url] of Object.entries(PRODUCT_IMAGES)) {
            if (name.includes(k)) return url;
        }
        return null;
    }

    // ============================================================
    // ICON & CATEGORY HELPERS
    // ============================================================
    function guessIcon(name) {
        const n = name.toLowerCase();
        if(n.includes('tacch') || n.includes('carne') || n.includes('pollo')) return '🍗';
        if(n.includes('platess') || n.includes('pesce') || n.includes('tonno')) return '🐟';
        if(n.includes('verdura') || n.includes('insalata')) return '🥦';
        if(n.includes('frutta') || n.includes('mele')) return '🍎';
        if(n.includes('banane')) return '🍌';
        if(n.includes('dolce') || n.includes('torta') || n.includes('zucchero') || n.includes('cioccolato')) return '🍫';
        if(n.includes('latte')) return '🥛';
        if(n.includes('pane') || n.includes('pan ') || n.includes('filone') || n.includes('piadin')) return '🍞';
        if(n.includes('uova') || n.includes('luovo')) return '🥚';
        if(n.includes('pasta')) return '🍝';
        if(n.includes('passata') || n.includes('pomodor') || n.includes('datterin')) return '🍅';
        if(n.includes('farina')) return '🌾';
        if(n.includes('burro') || n.includes('formaggio') || n.includes('yogurt') || n.includes('yog.')) return '🧀';
        if(n.includes('patatine') || n.includes('tortillas') || n.includes('nacho') || n.includes('pata ')) return '🍟';
        if(n.includes('birra')) return '🍺';
        if(n.includes('gin') || n.includes('vino') || n.includes('alcol')) return '🍷';
        if(n.includes('caffè') || n.includes('caffe')) return '☕';
        if(n.includes('cereali') || n.includes('biscott')) return '🥣';
        if(n.includes('succo') || n.includes('sanfruit') || n.includes('tonica') || n.includes('drink')) return '🥤';
        if(n.includes('carta igienica')) return '🧻';
        if(n.includes('dentifricio') || n.includes('spazzolino')) return '🪥';
        if(n.includes('tarall') || n.includes('grissin') || n.includes('cracker')) return '🥨';
        if(n.includes('masch') || n.includes('bagn') || n.includes('shampoo') || n.includes('sapone') || n.includes('hydra')) return '🧼';
        return '🛒';
    }

    function guessCategory(name) {
        const n = name.toLowerCase();
        if (n.includes('latte') || n.includes('yogurt') || n.includes('formaggio') || n.includes('mozzarella') || n.includes('burro') || n.includes('panna') || n.includes('ricotta')) {
            return { id: 'Dairy', icon: '🥛', color: '#60A5FA' };
        }
        if (n.includes('mela') || n.includes('banana') || n.includes('frutta') || n.includes('verdura') || n.includes('pomodor') || n.includes('insalata') || n.includes('carota') || n.includes('zucch') || n.includes('broccol') || n.includes('patata') || n.includes('cipoll')) {
            return { id: 'Fruit & Veg', icon: '🍎', color: '#10B981' };
        }
        if (n.includes('carne') || n.includes('pollo') || n.includes('pesce') || n.includes('salame') || n.includes('prosciutto') || n.includes('salsiccia') || n.includes('tacch') || n.includes('tonno') || n.includes('salmon')) {
            return { id: 'Meat', icon: '🥩', color: '#F43F5E' };
        }
        if (n.includes('pane') || n.includes('pasta') || n.includes('riso') || n.includes('farina') || n.includes('biscott') || n.includes('caffè') || n.includes('caffe') || n.includes('cereali') || n.includes('uova') || n.includes('zucchero')) {
            return { id: 'Pantry', icon: '🥫', color: '#F59E0B' };
        }
        if (n.includes('acqua') || n.includes('vino') || n.includes('birra') || n.includes('succo') || n.includes('cola') || n.includes('prosecco') || n.includes('sprite')) {
            return { id: 'Drinks', icon: '🥤', color: '#38BDF8' };
        }
        if (n.includes('detersivo') || n.includes('sapone') || n.includes('carta igienica') || n.includes('shampoo') || n.includes('dentifricio') || n.includes('spugn') || n.includes('bagnoschiuma')) {
            return { id: 'Home', icon: '🧻', color: '#8B5CF6' };
        }
        return { id: 'Other', icon: '🛒', color: '#94A3B8' };
    }

    // ============================================================
    // CATALOG DATA (Visotto)
    // ============================================================
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
        {"name": "Spazzolino Setole Morbide", "price": 1.80}
    ];

    const defaultCatalog = visottoData.map(item => ({
        name: item.name,
        price: item.price,
        icon: guessIcon(item.name)
    }));

    // ============================================================
    // LOAD STATE FROM LOCALSTORAGE
    // ============================================================
    let catalog = JSON.parse(localStorage.getItem('spesa_catalog')) || defaultCatalog;
    let shoppingList = JSON.parse(localStorage.getItem('spesa_list')) || [];

    // Merge visotto data if missing
    visottoData.forEach(vItem => {
        const existing = catalog.find(c => c.name.toLowerCase() === vItem.name.toLowerCase());
        if (!existing) {
            catalog.push({ name: vItem.name, price: vItem.price, icon: guessIcon(vItem.name) });
        } else if (existing.price === 0) {
            existing.price = vItem.price;
        }
    });
    localStorage.setItem('spesa_catalog', JSON.stringify(catalog));

    // ============================================================
    // DOM REFERENCES
    // ============================================================
    const shoppingListEl = document.getElementById('shopping-list');
    const totalAmountEl = document.getElementById('total-amount');
    const predictiveListEl = document.getElementById('predictive-list');
    const flyersListEl = document.getElementById('flyers-list');
    const addFab = document.getElementById('add-fab');
    const addItemModal = document.getElementById('add-item-modal');
    const closeAddModal = document.getElementById('close-add-modal');
    const foodInput = document.getElementById('food-input');
    const suggestionsEl = document.getElementById('suggestions');
    const addBtn = document.getElementById('add-btn');

    // ============================================================
    // TOAST & NOTIFICATIONS
    // ============================================================
    function showToast(msg) {
        // Remove existing toast if any
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = msg;
        document.body.appendChild(toast);
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

    function sendLocalNotification(title, options) {
        if ('Notification' in window && Notification.permission === 'granted') {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(sw => {
                    sw.showNotification(title, options);
                });
            }
        }
    }

    // Listen for service worker messages
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

    // ============================================================
    // CORE FUNCTIONS
    // ============================================================
    function saveState() {
        lastUpdated = Date.now();
        localStorage.setItem('spesa_last_updated', lastUpdated.toString());
        localStorage.setItem('spesa_catalog', JSON.stringify(catalog));
        localStorage.setItem('spesa_list', JSON.stringify(shoppingList));

        if (mqttClient && mqttClient.connected) {
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
        if (!name || !name.trim()) return;
        const catalogItem = getOrCreateCatalogItem(name);

        if (!shoppingList.some(i => i.name.toLowerCase() === catalogItem.name.toLowerCase())) {
            catalogItem.frequency = (catalogItem.frequency || 0) + 1;
            shoppingList.push({ ...catalogItem, id: Date.now(), completed: false });
            const username = localStorage.getItem('spesa_username') || 'Qualcuno';
            currentLastAction = { type: 'ADD', item: catalogItem.name, deviceId: myDeviceId, user: username };
            saveState();
            renderList();
            showToast('✅ ' + catalogItem.name + ' aggiunto!');
        } else {
            showToast('⚠️ ' + catalogItem.name + ' è già nella lista');
        }

        if (foodInput) foodInput.value = '';
        hideSuggestions();
        if (addItemModal) addItemModal.classList.add('hidden');
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
            shoppingListEl.innerHTML = `
                <div style="text-align: center; color: #64748B; padding: 40px 20px; font-size: 15px;">
                    <div style="font-size: 48px; margin-bottom: 16px;">🛍️</div>
                    La tua lista è vuota.<br>Premi il tasto <strong style="color: #34D399;">+</strong> per aggiungere!
                </div>
            `;
            updateTotal();
            return;
        }

        shoppingList.forEach(item => {
            const cat = guessCategory(item.name);
            const li = document.createElement('li');
            li.className = `list-item ${item.completed ? 'completed' : ''}`;

            li.innerHTML = `
                <div class="item-category-tile" style="background: ${item.completed ? '#94A3B8' : '#CBD5E1'};">
                    <span class="tile-icon">${cat.icon}</span>
                    <span class="tile-label">${cat.id}</span>
                </div>
                <div class="item-content">
                    <div class="item-main-row">
                        <div class="item-checkbox ${item.completed ? 'checked' : ''}"></div>
                        <div class="item-name">${item.name}</div>
                    </div>
                    <div class="item-progress-track">
                        <div class="item-progress-fill" style="width: ${item.completed ? '100%' : '60%'}; background: ${cat.color};"></div>
                    </div>
                    ${item.price > 0 ? `<div class="item-badge">€${Number(item.price).toFixed(2)}</div>` : ''}
                </div>
            `;

            // Click checkbox to toggle
            const checkbox = li.querySelector('.item-checkbox');
            checkbox.addEventListener('click', (e) => {
                e.stopPropagation();
                item.completed = !item.completed;
                if (item.completed) {
                    // Save purchase date for predictive algorithm
                    const catalogItem = catalog.find(c => c.name.toLowerCase() === item.name.toLowerCase());
                    if (catalogItem) {
                        catalogItem.purchaseDates = catalogItem.purchaseDates || [];
                        catalogItem.purchaseDates.push(Date.now());
                        if (catalogItem.purchaseDates.length > 10) catalogItem.purchaseDates.shift();
                    }
                }
                saveState();
                renderList();
            });

            // Click item name to toggle too
            const nameEl = li.querySelector('.item-name');
            nameEl.addEventListener('click', (e) => {
                e.stopPropagation();
                checkbox.click();
            });

            // Swipe left to delete (simple: long press)
            let pressTimer = null;
            li.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                if (confirm('Rimuovere "' + item.name + '" dalla lista?')) {
                    shoppingList = shoppingList.filter(i => i.id !== item.id);
                    saveState();
                    renderList();
                    showToast('🗑️ ' + item.name + ' rimosso');
                }
            });

            shoppingListEl.appendChild(li);
        });

        updateTotal();
    }

    // ============================================================
    // SUGGESTIONS
    // ============================================================
    function hideSuggestions() {
        if (suggestionsEl) suggestionsEl.classList.add('hidden');
    }

    function showSuggestions(query) {
        if (!suggestionsEl) return;
        suggestionsEl.innerHTML = '';

        if (!query || !query.trim()) {
            hideSuggestions();
            return;
        }

        const lowerQuery = query.toLowerCase();
        const matches = catalog
            .filter(c => c.name.toLowerCase().includes(lowerQuery))
            .sort((a, b) => (b.frequency || 0) - (a.frequency || 0))
            .slice(0, 6);

        if (matches.length > 0) {
            matches.forEach(match => {
                const li = document.createElement('li');
                li.className = 'suggestion-item';
                li.innerHTML = `<span class="suggestion-icon">${guessIcon(match.name)}</span> <span style="color: white;">${match.name}</span>`;
                li.addEventListener('click', (e) => {
                    e.stopPropagation();
                    addToList(match.name);
                });
                suggestionsEl.appendChild(li);
            });
            suggestionsEl.classList.remove('hidden');
        } else {
            hideSuggestions();
        }
    }

    // ============================================================
    // EVENT LISTENERS (with null-checks)
    // ============================================================
    if (addFab) {
        addFab.addEventListener('click', () => {
            if (addItemModal) addItemModal.classList.remove('hidden');
            if (foodInput) setTimeout(() => foodInput.focus(), 150);
        });
    }

    if (closeAddModal) {
        closeAddModal.addEventListener('click', () => {
            if (addItemModal) addItemModal.classList.add('hidden');
            hideSuggestions();
        });
    }

    if (addBtn) {
        addBtn.addEventListener('click', () => {
            if (foodInput && foodInput.value.trim()) {
                addToList(foodInput.value);
            }
        });
    }

    if (foodInput) {
        foodInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                if (foodInput.value.trim()) {
                    addToList(foodInput.value);
                }
            }
        });

        foodInput.addEventListener('input', (e) => {
            showSuggestions(e.target.value);
        });
    }

    // Close modal when clicking backdrop
    if (addItemModal) {
        addItemModal.addEventListener('click', (e) => {
            if (e.target === addItemModal) {
                addItemModal.classList.add('hidden');
                hideSuggestions();
            }
        });
    }

    // ============================================================
    // PREDICTIVE ALGORITHM
    // ============================================================
    function checkPredictiveAlerts() {
        if (!predictiveListEl) return;
        predictiveListEl.innerHTML = '';
        let foundSuggestions = false;
        const now = Date.now();
        const oneDayMs = 24 * 60 * 60 * 1000;

        catalog.forEach(item => {
            if (item.purchaseDates && item.purchaseDates.length >= 2) {
                let totalDiff = 0;
                for (let i = 1; i < item.purchaseDates.length; i++) {
                    totalDiff += (item.purchaseDates[i] - item.purchaseDates[i - 1]);
                }
                const avgInterval = totalDiff / (item.purchaseDates.length - 1);
                const lastPurchase = item.purchaseDates[item.purchaseDates.length - 1];
                const timeSinceLast = now - lastPurchase;

                if (timeSinceLast > (avgInterval + oneDayMs) && !shoppingList.some(sl => sl.name.toLowerCase() === item.name.toLowerCase())) {
                    foundSuggestions = true;
                    const li = document.createElement('li');
                    li.className = 'predictive-item-small';
                    const icon = item.icon || guessIcon(item.name);
                    li.innerHTML = `<span class="predictive-icon">${icon}</span> <span class="predictive-name" style="color:white;">${item.name}</span>`;
                    li.addEventListener('click', () => {
                        addToList(item.name);
                        checkPredictiveAlerts();
                    });
                    predictiveListEl.appendChild(li);
                }
            }
        });

        // If nothing from the algorithm, show some placeholders
        if (!foundSuggestions) {
            predictiveListEl.innerHTML = `
                <li class="predictive-item-small" style="opacity: 0.5;">
                    <span class="predictive-icon">💡</span>
                    <span class="predictive-name" style="color:white; font-size:11px;">I suggerimenti appariranno qui</span>
                </li>
            `;
        }
    }

    // ============================================================
    // VOLANTINI / FLYERS
    // ============================================================
    function loadFlyers() {
        if (!flyersListEl) return;
        fetch('volantini.json?t=' + Date.now())
            .then(r => r.json())
            .then(data => {
                flyersListEl.innerHTML = '';
                if (data.flyers && data.flyers.length > 0) {
                    data.flyers.forEach(f => {
                        const li = document.createElement('li');
                        li.className = 'flyer-card';
                        li.innerHTML = `
                            <div class="flyer-img">
                                <div class="flyer-market-badge">${f.icon}</div>
                                <div style="width:100%; height:100%; background: linear-gradient(135deg, #FFED4A 0%, #F59E0B 100%);"></div>
                            </div>
                            <div class="flyer-info">
                                <div class="flyer-title">${f.name}</div>
                                <div style="font-size:10px; color:var(--text-secondary);">Clicca per aprire</div>
                            </div>
                        `;
                        li.addEventListener('click', () => window.open(f.url, '_blank'));
                        flyersListEl.appendChild(li);
                    });
                } else {
                    flyersListEl.innerHTML = '<li style="color:white; padding: 20px; font-size: 13px;">Nessun volantino disponibile</li>';
                }
            })
            .catch(() => {
                flyersListEl.innerHTML = '<li style="color:white; padding: 20px; font-size: 13px;">Nessun volantino disponibile</li>';
            });
    }

    // ============================================================
    // MQTT (Sync in real time)
    // ============================================================
    try {
        mqttClient = mqtt.connect('wss://broker.emqx.io:8084/mqtt');

        mqttClient.on('connect', () => {
            console.log('MQTT Connesso! 🟢');
            mqttClient.subscribe(MQTT_TOPIC);
            setTimeout(() => {
                if (shoppingList.length > 0) {
                    const payload = JSON.stringify({ ts: lastUpdated, list: shoppingList });
                    mqttClient.publish(MQTT_TOPIC, payload, { retain: true });
                }
            }, 2000);
        });

        mqttClient.on('message', (topic, message) => {
            if (topic === MQTT_TOPIC) {
                try {
                    const parsed = JSON.parse(message.toString());
                    let incomingTs = 0;
                    let incomingList = [];

                    if (Array.isArray(parsed)) {
                        incomingList = parsed;
                    } else if (parsed && parsed.ts) {
                        incomingList = parsed.list;
                        incomingTs = parsed.ts;

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

                    if (incomingTs > lastUpdated || (incomingTs === 0 && incomingList.length > shoppingList.length)) {
                        shoppingList = incomingList;
                        lastUpdated = incomingTs > 0 ? incomingTs : Date.now();
                        localStorage.setItem('spesa_list', JSON.stringify(shoppingList));
                        localStorage.setItem('spesa_last_updated', lastUpdated.toString());
                        renderList();
                    } else if (incomingTs > 0 && incomingTs < lastUpdated) {
                        const payload = JSON.stringify({ ts: lastUpdated, list: shoppingList });
                        mqttClient.publish(MQTT_TOPIC, payload, { retain: true });
                    }
                } catch (e) {
                    console.error('Errore MQTT parse:', e);
                }
            }
        });

        mqttClient.on('error', (err) => console.error('MQTT Error:', err));
    } catch (e) {
        console.error('MQTT Init Error:', e);
    }

    // ============================================================
    // INIT
    // ============================================================
    renderList();
    checkPredictiveAlerts();
    loadFlyers();

    console.log('✅ SpesaApp Dashboard caricata!');
});
