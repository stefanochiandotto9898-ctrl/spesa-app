const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// Remove duplicate 'let' and 'const' keywords for variables that are redefined
code = code.replace(/let catalog = JSON.parse/g, 'catalog = JSON.parse');
code = code.replace(/let shoppingList = JSON.parse/g, 'shoppingList = JSON.parse');
code = code.replace(/let lastUpdated = Date.now\(\);/g, 'lastUpdated = Date.now();');
code = code.replace(/let currentLastAction = null;/g, 'currentLastAction = null;');
code = code.replace(/const myDeviceId = 'device_'/g, 'myDeviceId = \'device_\'');
code = code.replace(/const MQTT_TOPIC = 'spesa\/lista\/aggiornamenti';/g, '');

// Prepend declarations at the very beginning of DOMContentLoaded
code = code.replace("document.addEventListener('DOMContentLoaded', () => {", 
`document.addEventListener('DOMContentLoaded', () => {
    let catalog = [];
    let shoppingList = [];
    window.showToast = function(msg) { console.log(msg); alert(msg); };
`);

fs.writeFileSync('script.js', code);
console.log('Script fixed!');
