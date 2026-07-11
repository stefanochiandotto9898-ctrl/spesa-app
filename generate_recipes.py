import json
import random

# Base components for generating realistic recipes

pasta_types = ["Spaghetti", "Penne", "Fusilli", "Rigatoni", "Farfalle", "Linguine", "Bucatini", "Paccheri", "Gnocchi", "Tagliatelle"]
pasta_sauces = [
    ("al Pomodoro", [{"name":"Passata di pomodoro","qty":500,"unit":"ml"}, {"name":"Cipolla","qty":1,"unit":"pz"}]),
    ("al Ragù", [{"name":"Macinato di carne","qty":400,"unit":"g"}, {"name":"Passata di pomodoro","qty":500,"unit":"ml"}, {"name":"Sedano carota cipolla","qty":100,"unit":"g"}]),
    ("alla Carbonara", [{"name":"Guanciale","qty":150,"unit":"g"}, {"name":"Uova","qty":4,"unit":"pz"}, {"name":"Pecorino Romano","qty":100,"unit":"g"}]),
    ("all'Amatriciana", [{"name":"Guanciale","qty":150,"unit":"g"}, {"name":"Pomodori pelati","qty":400,"unit":"g"}, {"name":"Pecorino Romano","qty":80,"unit":"g"}]),
    ("alla Gricia", [{"name":"Guanciale","qty":150,"unit":"g"}, {"name":"Pecorino Romano","qty":100,"unit":"g"}, {"name":"Pepe nero","qty":"q.b.","unit":""}]),
    ("Cacio e Pepe", [{"name":"Pecorino Romano","qty":150,"unit":"g"}, {"name":"Pepe nero","qty":"q.b.","unit":""}]),
    ("alla Boscaiola", [{"name":"Funghi","qty":200,"unit":"g"}, {"name":"Salsiccia","qty":200,"unit":"g"}, {"name":"Panna","qty":100,"unit":"ml"}]),
    ("al Pesto", [{"name":"Pesto alla genovese","qty":150,"unit":"g"}, {"name":"Parmigiano","qty":50,"unit":"g"}]),
    ("ai Frutti di Mare", [{"name":"Misto scoglio","qty":500,"unit":"g"}, {"name":"Aglio","qty":1,"unit":"spicchio"}, {"name":"Pomodorini","qty":150,"unit":"g"}]),
    ("alle Vongole", [{"name":"Vongole veraci","qty":500,"unit":"g"}, {"name":"Aglio","qty":2,"unit":"spicchi"}, {"name":"Prezzemolo","qty":"q.b.","unit":""}]),
    ("alla Norma", [{"name":"Melanzane","qty":2,"unit":"pz"}, {"name":"Salsa di pomodoro","qty":400,"unit":"g"}, {"name":"Ricotta salata","qty":100,"unit":"g"}]),
    ("ai Funghi Porcini", [{"name":"Funghi Porcini","qty":300,"unit":"g"}, {"name":"Aglio","qty":1,"unit":"spicchio"}, {"name":"Prezzemolo","qty":"q.b.","unit":""}]),
    ("Zucchine e Gamberetti", [{"name":"Zucchine","qty":2,"unit":"pz"}, {"name":"Gamberetti","qty":200,"unit":"g"}, {"name":"Panna","qty":100,"unit":"ml"}]),
    ("Speck e Zafferano", [{"name":"Speck","qty":100,"unit":"g"}, {"name":"Zafferano","qty":1,"unit":"bustina"}, {"name":"Panna","qty":100,"unit":"ml"}]),
    ("al Tonno", [{"name":"Tonno in scatola","qty":150,"unit":"g"}, {"name":"Pomodorini","qty":200,"unit":"g"}, {"name":"Olive","qty":50,"unit":"g"}])
]

risotto_types = [
    ("allo Zafferano", [{"name":"Zafferano","qty":1,"unit":"bustina"}, {"name":"Burro","qty":50,"unit":"g"}, {"name":"Parmigiano","qty":60,"unit":"g"}]),
    ("ai Funghi", [{"name":"Funghi","qty":300,"unit":"g"}, {"name":"Burro","qty":40,"unit":"g"}, {"name":"Prezzemolo","qty":"q.b.","unit":""}]),
    ("alla Zucca", [{"name":"Zucca","qty":400,"unit":"g"}, {"name":"Parmigiano","qty":50,"unit":"g"}, {"name":"Cipolla","qty":1,"unit":"pz"}]),
    ("al Radicchio", [{"name":"Radicchio","qty":1,"unit":"cespo"}, {"name":"Vino rosso","qty":0.5,"unit":"bicchiere"}, {"name":"Parmigiano","qty":50,"unit":"g"}]),
    ("alla Salsiccia", [{"name":"Salsiccia","qty":250,"unit":"g"}, {"name":"Vino bianco","qty":0.5,"unit":"bicchiere"}, {"name":"Burro","qty":40,"unit":"g"}])
]

secondi_meats = [
    ("Petto di Pollo", "🍗", [{"name":"Petto di pollo","qty":500,"unit":"g"}]),
    ("Scaloppine di Vitello", "🥩", [{"name":"Fettine di vitello","qty":400,"unit":"g"}]),
    ("Cotoletta", "🥩", [{"name":"Fettine di carne","qty":4,"unit":"pz"}, {"name":"Uova","qty":1,"unit":"pz"}, {"name":"Pangrattato","qty":150,"unit":"g"}]),
    ("Arrosto di Maiale", "🥩", [{"name":"Arrosto di maiale","qty":800,"unit":"g"}, {"name":"Rosmarino","qty":"q.b.","unit":""}]),
    ("Polpette", "🧆", [{"name":"Macinato","qty":400,"unit":"g"}, {"name":"Uova","qty":1,"unit":"pz"}, {"name":"Mollica di pane","qty":100,"unit":"g"}]),
    ("Filetto di Manzo", "🥩", [{"name":"Filetto di manzo","qty":500,"unit":"g"}]),
    ("Salsiccia", "🥩", [{"name":"Salsiccia","qty":400,"unit":"g"}]),
    ("Hamburger", "🍔", [{"name":"Hamburger di manzo","qty":4,"unit":"pz"}])
]

secondi_fish = [
    ("Filetto di Salmone", "🐟", [{"name":"Filetto di salmone","qty":400,"unit":"g"}]),
    ("Orata", "🐟", [{"name":"Orata","qty":2,"unit":"pz"}]),
    ("Branzino", "🐟", [{"name":"Branzino","qty":2,"unit":"pz"}]),
    ("Calamari", "🦑", [{"name":"Calamari","qty":500,"unit":"g"}]),
    ("Seppie", "🦑", [{"name":"Seppie","qty":500,"unit":"g"}]),
    ("Tonno scottato", "🐟", [{"name":"Trancio di tonno","qty":400,"unit":"g"}])
]

secondi_preparations = [
    ("al Limone", [{"name":"Limoni","qty":2,"unit":"pz"}, {"name":"Burro","qty":40,"unit":"g"}]),
    ("al Forno con Patate", [{"name":"Patate","qty":600,"unit":"g"}, {"name":"Olio EVO","qty":"q.b.","unit":""}]),
    ("in Padella", [{"name":"Olio EVO","qty":"q.b.","unit":""}, {"name":"Aglio","qty":1,"unit":"spicchio"}]),
    ("alla Griglia", [{"name":"Olio EVO","qty":"q.b.","unit":""}, {"name":"Sale grosso","qty":"q.b.","unit":""}]),
    ("al Vino Bianco", [{"name":"Vino bianco","qty":1,"unit":"bicchiere"}, {"name":"Burro","qty":30,"unit":"g"}]),
    ("ai Funghi", [{"name":"Funghi","qty":250,"unit":"g"}, {"name":"Prezzemolo","qty":"q.b.","unit":""}]),
    ("al Sugo", [{"name":"Passata di pomodoro","qty":400,"unit":"ml"}, {"name":"Cipolla","qty":1,"unit":"pz"}]),
    ("con Piselli", [{"name":"Piselli","qty":300,"unit":"g"}, {"name":"Cipolla","qty":1,"unit":"pz"}]),
    ("Ripieno", [{"name":"Formaggio a fette","qty":100,"unit":"g"}, {"name":"Prosciutto cotto","qty":100,"unit":"g"}])
]

contorni = [
    ("Insalata Mista", "🥗", [{"name":"Insalata","qty":200,"unit":"g"}, {"name":"Pomodorini","qty":100,"unit":"g"}]),
    ("Patate al Forno", "🥔", [{"name":"Patate","qty":800,"unit":"g"}, {"name":"Rosmarino","qty":"q.b.","unit":""}]),
    ("Patatine Fritte", "🍟", [{"name":"Patate fritte surgelate","qty":500,"unit":"g"}, {"name":"Olio di semi","qty":1,"unit":"L"}]),
    ("Verdure Grigliate", "🍆", [{"name":"Zucchine","qty":2,"unit":"pz"}, {"name":"Melanzane","qty":1,"unit":"pz"}, {"name":"Peperoni","qty":2,"unit":"pz"}]),
    ("Spinaci al Burro", "🥬", [{"name":"Spinaci","qty":500,"unit":"g"}, {"name":"Burro","qty":40,"unit":"g"}]),
    ("Broccoli saltati", "🥦", [{"name":"Broccoli","qty":400,"unit":"g"}, {"name":"Aglio","qty":1,"unit":"spicchio"}]),
    ("Piselli in padella", "🟢", [{"name":"Piselli","qty":300,"unit":"g"}, {"name":"Pancetta","qty":50,"unit":"g"}]),
    ("Carote julienne", "🥕", [{"name":"Carote","qty":4,"unit":"pz"}, {"name":"Limone","qty":1,"unit":"pz"}]),
    ("Cavolfiore gratinato", "🥦", [{"name":"Cavolfiore","qty":1,"unit":"pz"}, {"name":"Besciamella","qty":200,"unit":"ml"}]),
    ("Purè di Patate", "🥔", [{"name":"Patate","qty":800,"unit":"g"}, {"name":"Latte","qty":200,"unit":"ml"}, {"name":"Burro","qty":50,"unit":"g"}])
]

piatti_unici = [
    ("Pizza Margherita", "🍕", [{"name":"Farina","qty":500,"unit":"g"}, {"name":"Mozzarella","qty":250,"unit":"g"}, {"name":"Passata","qty":200,"unit":"ml"}]),
    ("Pizza Diavola", "🍕", [{"name":"Farina","qty":500,"unit":"g"}, {"name":"Mozzarella","qty":250,"unit":"g"}, {"name":"Salame piccante","qty":100,"unit":"g"}]),
    ("Pizza Capricciosa", "🍕", [{"name":"Farina","qty":500,"unit":"g"}, {"name":"Mozzarella","qty":250,"unit":"g"}, {"name":"Funghi carciofi prosciutto","qty":150,"unit":"g"}]),
    ("Insalatona Tonno e Uova", "🥗", [{"name":"Insalata","qty":150,"unit":"g"}, {"name":"Tonno","qty":100,"unit":"g"}, {"name":"Uova","qty":2,"unit":"pz"}]),
    ("Insalatona con Pollo", "🥗", [{"name":"Insalata","qty":150,"unit":"g"}, {"name":"Petto di pollo","qty":150,"unit":"g"}, {"name":"Mais","qty":50,"unit":"g"}]),
    ("Piadina Crudo e Squacquerone", "🌮", [{"name":"Piadina","qty":2,"unit":"pz"}, {"name":"Prosciutto crudo","qty":100,"unit":"g"}, {"name":"Squacquerone","qty":100,"unit":"g"}]),
    ("Torta Salata Ricotta e Spinaci", "🥧", [{"name":"Pasta sfoglia","qty":1,"unit":"rotolo"}, {"name":"Ricotta","qty":250,"unit":"g"}, {"name":"Spinaci","qty":300,"unit":"g"}]),
    ("Torta Salata Zucchine e Pancetta", "🥧", [{"name":"Pasta sfoglia","qty":1,"unit":"rotolo"}, {"name":"Zucchine","qty":2,"unit":"pz"}, {"name":"Pancetta","qty":100,"unit":"g"}]),
    ("Poke Bowl Salmone", "🍲", [{"name":"Riso sushi","qty":200,"unit":"g"}, {"name":"Salmone crudo","qty":150,"unit":"g"}, {"name":"Avocado","qty":1,"unit":"pz"}]),
    ("Poke Bowl Pollo Teriyaki", "🍲", [{"name":"Riso","qty":200,"unit":"g"}, {"name":"Pollo","qty":150,"unit":"g"}, {"name":"Salsa teriyaki","qty":"q.b.","unit":""}])
]

dolci = [
    ("Tiramisù", "🍰", [{"name":"Savoiardi","qty":300,"unit":"g"}, {"name":"Mascarpone","qty":500,"unit":"g"}, {"name":"Uova","qty":4,"unit":"pz"}, {"name":"Caffè","qty":300,"unit":"ml"}]),
    ("Torta di Mele", "🥧", [{"name":"Mele","qty":3,"unit":"pz"}, {"name":"Farina","qty":200,"unit":"g"}, {"name":"Burro","qty":100,"unit":"g"}]),
    ("Crostata alla Marmellata", "🥧", [{"name":"Pasta frolla","qty":1,"unit":"rotolo"}, {"name":"Marmellata","qty":250,"unit":"g"}]),
    ("Panna Cotta", "🍮", [{"name":"Panna fresca","qty":500,"unit":"ml"}, {"name":"Colla di pesce","qty":8,"unit":"g"}, {"name":"Zucchero","qty":80,"unit":"g"}]),
    ("Cheesecake", "🍰", [{"name":"Biscotti secchi","qty":200,"unit":"g"}, {"name":"Burro","qty":100,"unit":"g"}, {"name":"Philadelphia","qty":500,"unit":"g"}]),
    ("Muffin al Cioccolato", "🧁", [{"name":"Farina","qty":200,"unit":"g"}, {"name":"Cacao","qty":50,"unit":"g"}, {"name":"Zucchero","qty":150,"unit":"g"}]),
    ("Biscotti al Burro", "🍪", [{"name":"Farina","qty":250,"unit":"g"}, {"name":"Burro","qty":150,"unit":"g"}, {"name":"Zucchero","qty":100,"unit":"g"}]),
    ("Salame di Cioccolato", "🍫", [{"name":"Biscotti secchi","qty":200,"unit":"g"}, {"name":"Cioccolato fondente","qty":150,"unit":"g"}, {"name":"Burro","qty":100,"unit":"g"}]),
    ("Profiteroles", "🍮", [{"name":"Bignè","qty":20,"unit":"pz"}, {"name":"Crema pasticcera","qty":300,"unit":"ml"}, {"name":"Cioccolato fondente","qty":200,"unit":"g"}]),
    ("Gelato Fatto in Casa", "🍦", [{"name":"Latte","qty":500,"unit":"ml"}, {"name":"Panna","qty":250,"unit":"ml"}, {"name":"Zucchero","qty":150,"unit":"g"}])
]

recipes = []
r_id = 1

# Generate Primi (Pasta)
for pt in pasta_types:
    for ps, ings in pasta_sauces:
        name = f"{pt} {ps}"
        ingredients = [{"name": pt, "qty": 400, "unit": "g"}] + ings
        recipes.append({
            "id": f"r_{r_id}", "name": name, "emoji": "🍝", "cat": "Primi", "portions": 4, "ingredients": ingredients
        })
        r_id += 1

# Generate Primi (Risotti)
for rt, ings in risotto_types:
    name = f"Risotto {rt}"
    ingredients = [{"name": "Riso", "qty": 320, "unit": "g"}, {"name": "Brodo", "qty": 1, "unit": "L"}] + ings
    recipes.append({
        "id": f"r_{r_id}", "name": name, "emoji": "🍚", "cat": "Primi", "portions": 4, "ingredients": ingredients
    })
    r_id += 1

# Generate Secondi (Meat)
for m_name, emoji, m_ings in secondi_meats:
    for p_name, p_ings in secondi_preparations:
        name = f"{m_name} {p_name}"
        ingredients = m_ings + p_ings
        recipes.append({
            "id": f"r_{r_id}", "name": name, "emoji": emoji, "cat": "Secondi", "portions": 4, "ingredients": ingredients
        })
        r_id += 1

# Generate Secondi (Fish)
for f_name, emoji, f_ings in secondi_fish:
    for p_name, p_ings in secondi_preparations:
        name = f"{f_name} {p_name}"
        ingredients = f_ings + p_ings
        recipes.append({
            "id": f"r_{r_id}", "name": name, "emoji": emoji, "cat": "Secondi", "portions": 4, "ingredients": ingredients
        })
        r_id += 1

# Add Contorni, Piatti Unici, Dolci
for name, emoji, ings in contorni:
    recipes.append({
        "id": f"r_{r_id}", "name": name, "emoji": emoji, "cat": "Contorni", "portions": 4, "ingredients": ings
    })
    r_id += 1
    
for name, emoji, ings in piatti_unici:
    recipes.append({
        "id": f"r_{r_id}", "name": name, "emoji": emoji, "cat": "Piatti Unici", "portions": 2, "ingredients": ings
    })
    r_id += 1
    
for name, emoji, ings in dolci:
    recipes.append({
        "id": f"r_{r_id}", "name": name, "emoji": emoji, "cat": "Dolci", "portions": 6, "ingredients": ings
    })
    r_id += 1

# If not exactly 300, print count
print(f"Generated {len(recipes)} recipes.")

with open('c:/Users/stefa/Documents/GitHub/spesa-app/recipes-db.js', 'w', encoding='utf-8') as f:
    f.write("const RECIPES_DB = ")
    json.dump(recipes, f, ensure_ascii=False, indent=2)
    f.write(";\n\nfunction searchRecipes(query) {\n  const q = query.toLowerCase().trim();\n  return RECIPES_DB.filter(r => r.name.toLowerCase().includes(q));\n}\n\nfunction getRecipeById(id) {\n  return RECIPES_DB.find(r => r.id === id);\n}\n")

print("File written.")
