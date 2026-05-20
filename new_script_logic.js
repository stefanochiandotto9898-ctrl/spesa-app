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
