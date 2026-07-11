const RECIPES_DB = [
  {
    "id": "r_1",
    "name": "Spaghetti al Pomodoro",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_2",
    "name": "Spaghetti al Ragù",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Macinato di carne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Misto soffritto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_3",
    "name": "Spaghetti alla Carbonara",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_4",
    "name": "Spaghetti all'Amatriciana",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodori pelati",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 80,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_5",
    "name": "Spaghetti alla Gricia",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_6",
    "name": "Spaghetti Cacio e Pepe",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_7",
    "name": "Spaghetti alla Boscaiola",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Salsiccia",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_8",
    "name": "Spaghetti al Pesto",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pesto alla genovese",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Parmigiano",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_9",
    "name": "Spaghetti ai Frutti di Mare",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Misto scoglio",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Pomodorini",
        "qty": 150,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_10",
    "name": "Spaghetti alle Vongole",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vongole veraci",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 2,
        "unit": "spicchi"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_11",
    "name": "Spaghetti alla Norma",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Melanzane",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Salsa di pomodoro",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Ricotta salata",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_12",
    "name": "Spaghetti ai Funghi Porcini",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi Porcini",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_13",
    "name": "Spaghetti Zucchine e Gamberetti",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Zucchine",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Gamberetti",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_14",
    "name": "Spaghetti Speck e Zafferano",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Speck",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Zafferano",
        "qty": 1,
        "unit": "bustina"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_15",
    "name": "Spaghetti al Tonno",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spaghetti",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Tonno in scatola",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodorini",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Olive",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_16",
    "name": "Penne al Pomodoro",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_17",
    "name": "Penne al Ragù",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Macinato di carne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Misto soffritto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_18",
    "name": "Penne alla Carbonara",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_19",
    "name": "Penne all'Amatriciana",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodori pelati",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 80,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_20",
    "name": "Penne alla Gricia",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_21",
    "name": "Penne Cacio e Pepe",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_22",
    "name": "Penne alla Boscaiola",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Salsiccia",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_23",
    "name": "Penne al Pesto",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pesto alla genovese",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Parmigiano",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_24",
    "name": "Penne ai Frutti di Mare",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Misto scoglio",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Pomodorini",
        "qty": 150,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_25",
    "name": "Penne alle Vongole",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vongole veraci",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 2,
        "unit": "spicchi"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_26",
    "name": "Penne alla Norma",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Melanzane",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Salsa di pomodoro",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Ricotta salata",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_27",
    "name": "Penne ai Funghi Porcini",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi Porcini",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_28",
    "name": "Penne Zucchine e Gamberetti",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Zucchine",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Gamberetti",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_29",
    "name": "Penne Speck e Zafferano",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Speck",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Zafferano",
        "qty": 1,
        "unit": "bustina"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_30",
    "name": "Penne al Tonno",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Penne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Tonno in scatola",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodorini",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Olive",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_31",
    "name": "Fusilli al Pomodoro",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_32",
    "name": "Fusilli al Ragù",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Macinato di carne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Misto soffritto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_33",
    "name": "Fusilli alla Carbonara",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_34",
    "name": "Fusilli all'Amatriciana",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodori pelati",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 80,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_35",
    "name": "Fusilli alla Gricia",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_36",
    "name": "Fusilli Cacio e Pepe",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_37",
    "name": "Fusilli alla Boscaiola",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Salsiccia",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_38",
    "name": "Fusilli al Pesto",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pesto alla genovese",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Parmigiano",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_39",
    "name": "Fusilli ai Frutti di Mare",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Misto scoglio",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Pomodorini",
        "qty": 150,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_40",
    "name": "Fusilli alle Vongole",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vongole veraci",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 2,
        "unit": "spicchi"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_41",
    "name": "Fusilli alla Norma",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Melanzane",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Salsa di pomodoro",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Ricotta salata",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_42",
    "name": "Fusilli ai Funghi Porcini",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi Porcini",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_43",
    "name": "Fusilli Zucchine e Gamberetti",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Zucchine",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Gamberetti",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_44",
    "name": "Fusilli Speck e Zafferano",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Speck",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Zafferano",
        "qty": 1,
        "unit": "bustina"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_45",
    "name": "Fusilli al Tonno",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fusilli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Tonno in scatola",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodorini",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Olive",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_46",
    "name": "Rigatoni al Pomodoro",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_47",
    "name": "Rigatoni al Ragù",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Macinato di carne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Misto soffritto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_48",
    "name": "Rigatoni alla Carbonara",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_49",
    "name": "Rigatoni all'Amatriciana",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodori pelati",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 80,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_50",
    "name": "Rigatoni alla Gricia",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_51",
    "name": "Rigatoni Cacio e Pepe",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_52",
    "name": "Rigatoni alla Boscaiola",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Salsiccia",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_53",
    "name": "Rigatoni al Pesto",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pesto alla genovese",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Parmigiano",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_54",
    "name": "Rigatoni ai Frutti di Mare",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Misto scoglio",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Pomodorini",
        "qty": 150,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_55",
    "name": "Rigatoni alle Vongole",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vongole veraci",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 2,
        "unit": "spicchi"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_56",
    "name": "Rigatoni alla Norma",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Melanzane",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Salsa di pomodoro",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Ricotta salata",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_57",
    "name": "Rigatoni ai Funghi Porcini",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi Porcini",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_58",
    "name": "Rigatoni Zucchine e Gamberetti",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Zucchine",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Gamberetti",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_59",
    "name": "Rigatoni Speck e Zafferano",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Speck",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Zafferano",
        "qty": 1,
        "unit": "bustina"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_60",
    "name": "Rigatoni al Tonno",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Rigatoni",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Tonno in scatola",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodorini",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Olive",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_61",
    "name": "Farfalle al Pomodoro",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_62",
    "name": "Farfalle al Ragù",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Macinato di carne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Misto soffritto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_63",
    "name": "Farfalle alla Carbonara",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_64",
    "name": "Farfalle all'Amatriciana",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodori pelati",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 80,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_65",
    "name": "Farfalle alla Gricia",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_66",
    "name": "Farfalle Cacio e Pepe",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_67",
    "name": "Farfalle alla Boscaiola",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Salsiccia",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_68",
    "name": "Farfalle al Pesto",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pesto alla genovese",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Parmigiano",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_69",
    "name": "Farfalle ai Frutti di Mare",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Misto scoglio",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Pomodorini",
        "qty": 150,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_70",
    "name": "Farfalle alle Vongole",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vongole veraci",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 2,
        "unit": "spicchi"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_71",
    "name": "Farfalle alla Norma",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Melanzane",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Salsa di pomodoro",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Ricotta salata",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_72",
    "name": "Farfalle ai Funghi Porcini",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi Porcini",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_73",
    "name": "Farfalle Zucchine e Gamberetti",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Zucchine",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Gamberetti",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_74",
    "name": "Farfalle Speck e Zafferano",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Speck",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Zafferano",
        "qty": 1,
        "unit": "bustina"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_75",
    "name": "Farfalle al Tonno",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Farfalle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Tonno in scatola",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodorini",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Olive",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_76",
    "name": "Linguine al Pomodoro",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_77",
    "name": "Linguine al Ragù",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Macinato di carne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Misto soffritto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_78",
    "name": "Linguine alla Carbonara",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_79",
    "name": "Linguine all'Amatriciana",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodori pelati",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 80,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_80",
    "name": "Linguine alla Gricia",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_81",
    "name": "Linguine Cacio e Pepe",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_82",
    "name": "Linguine alla Boscaiola",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Salsiccia",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_83",
    "name": "Linguine al Pesto",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pesto alla genovese",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Parmigiano",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_84",
    "name": "Linguine ai Frutti di Mare",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Misto scoglio",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Pomodorini",
        "qty": 150,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_85",
    "name": "Linguine alle Vongole",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vongole veraci",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 2,
        "unit": "spicchi"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_86",
    "name": "Linguine alla Norma",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Melanzane",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Salsa di pomodoro",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Ricotta salata",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_87",
    "name": "Linguine ai Funghi Porcini",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi Porcini",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_88",
    "name": "Linguine Zucchine e Gamberetti",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Zucchine",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Gamberetti",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_89",
    "name": "Linguine Speck e Zafferano",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Speck",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Zafferano",
        "qty": 1,
        "unit": "bustina"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_90",
    "name": "Linguine al Tonno",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Linguine",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Tonno in scatola",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodorini",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Olive",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_91",
    "name": "Bucatini al Pomodoro",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_92",
    "name": "Bucatini al Ragù",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Macinato di carne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Misto soffritto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_93",
    "name": "Bucatini alla Carbonara",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_94",
    "name": "Bucatini all'Amatriciana",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodori pelati",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 80,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_95",
    "name": "Bucatini alla Gricia",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_96",
    "name": "Bucatini Cacio e Pepe",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_97",
    "name": "Bucatini alla Boscaiola",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Salsiccia",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_98",
    "name": "Bucatini al Pesto",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pesto alla genovese",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Parmigiano",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_99",
    "name": "Bucatini ai Frutti di Mare",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Misto scoglio",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Pomodorini",
        "qty": 150,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_100",
    "name": "Bucatini alle Vongole",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vongole veraci",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 2,
        "unit": "spicchi"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_101",
    "name": "Bucatini alla Norma",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Melanzane",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Salsa di pomodoro",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Ricotta salata",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_102",
    "name": "Bucatini ai Funghi Porcini",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi Porcini",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_103",
    "name": "Bucatini Zucchine e Gamberetti",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Zucchine",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Gamberetti",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_104",
    "name": "Bucatini Speck e Zafferano",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Speck",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Zafferano",
        "qty": 1,
        "unit": "bustina"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_105",
    "name": "Bucatini al Tonno",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Bucatini",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Tonno in scatola",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodorini",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Olive",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_106",
    "name": "Paccheri al Pomodoro",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_107",
    "name": "Paccheri al Ragù",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Macinato di carne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Misto soffritto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_108",
    "name": "Paccheri alla Carbonara",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_109",
    "name": "Paccheri all'Amatriciana",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodori pelati",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 80,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_110",
    "name": "Paccheri alla Gricia",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_111",
    "name": "Paccheri Cacio e Pepe",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_112",
    "name": "Paccheri alla Boscaiola",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Salsiccia",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_113",
    "name": "Paccheri al Pesto",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pesto alla genovese",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Parmigiano",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_114",
    "name": "Paccheri ai Frutti di Mare",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Misto scoglio",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Pomodorini",
        "qty": 150,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_115",
    "name": "Paccheri alle Vongole",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vongole veraci",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 2,
        "unit": "spicchi"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_116",
    "name": "Paccheri alla Norma",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Melanzane",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Salsa di pomodoro",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Ricotta salata",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_117",
    "name": "Paccheri ai Funghi Porcini",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi Porcini",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_118",
    "name": "Paccheri Zucchine e Gamberetti",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Zucchine",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Gamberetti",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_119",
    "name": "Paccheri Speck e Zafferano",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Speck",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Zafferano",
        "qty": 1,
        "unit": "bustina"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_120",
    "name": "Paccheri al Tonno",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Paccheri",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Tonno in scatola",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodorini",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Olive",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_121",
    "name": "Gnocchi al Pomodoro",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_122",
    "name": "Gnocchi al Ragù",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Macinato di carne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Misto soffritto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_123",
    "name": "Gnocchi alla Carbonara",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_124",
    "name": "Gnocchi all'Amatriciana",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodori pelati",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 80,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_125",
    "name": "Gnocchi alla Gricia",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_126",
    "name": "Gnocchi Cacio e Pepe",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_127",
    "name": "Gnocchi alla Boscaiola",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Salsiccia",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_128",
    "name": "Gnocchi al Pesto",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pesto alla genovese",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Parmigiano",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_129",
    "name": "Gnocchi ai Frutti di Mare",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Misto scoglio",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Pomodorini",
        "qty": 150,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_130",
    "name": "Gnocchi alle Vongole",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vongole veraci",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 2,
        "unit": "spicchi"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_131",
    "name": "Gnocchi alla Norma",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Melanzane",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Salsa di pomodoro",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Ricotta salata",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_132",
    "name": "Gnocchi ai Funghi Porcini",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi Porcini",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_133",
    "name": "Gnocchi Zucchine e Gamberetti",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Zucchine",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Gamberetti",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_134",
    "name": "Gnocchi Speck e Zafferano",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Speck",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Zafferano",
        "qty": 1,
        "unit": "bustina"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_135",
    "name": "Gnocchi al Tonno",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Gnocchi",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Tonno in scatola",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodorini",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Olive",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_136",
    "name": "Tagliatelle al Pomodoro",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_137",
    "name": "Tagliatelle al Ragù",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Macinato di carne",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Misto soffritto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_138",
    "name": "Tagliatelle alla Carbonara",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_139",
    "name": "Tagliatelle all'Amatriciana",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodori pelati",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 80,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_140",
    "name": "Tagliatelle alla Gricia",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Guanciale",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_141",
    "name": "Tagliatelle Cacio e Pepe",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pecorino Romano",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pepe nero",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_142",
    "name": "Tagliatelle alla Boscaiola",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Salsiccia",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_143",
    "name": "Tagliatelle al Pesto",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Pesto alla genovese",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Parmigiano",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_144",
    "name": "Tagliatelle ai Frutti di Mare",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Misto scoglio",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Pomodorini",
        "qty": 150,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_145",
    "name": "Tagliatelle alle Vongole",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vongole veraci",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 2,
        "unit": "spicchi"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_146",
    "name": "Tagliatelle alla Norma",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Melanzane",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Salsa di pomodoro",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Ricotta salata",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_147",
    "name": "Tagliatelle ai Funghi Porcini",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi Porcini",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_148",
    "name": "Tagliatelle Zucchine e Gamberetti",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Zucchine",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Gamberetti",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_149",
    "name": "Tagliatelle Speck e Zafferano",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Speck",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Zafferano",
        "qty": 1,
        "unit": "bustina"
      },
      {
        "name": "Panna",
        "qty": 100,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_150",
    "name": "Tagliatelle al Tonno",
    "emoji": "🍝",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Tagliatelle",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Tonno in scatola",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Pomodorini",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Olive",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_151",
    "name": "Risotto allo Zafferano",
    "emoji": "🍚",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Riso",
        "qty": 320,
        "unit": "g"
      },
      {
        "name": "Brodo",
        "qty": 1,
        "unit": "L"
      },
      {
        "name": "Zafferano",
        "qty": 1,
        "unit": "bustina"
      },
      {
        "name": "Burro",
        "qty": 50,
        "unit": "g"
      },
      {
        "name": "Parmigiano",
        "qty": 60,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_152",
    "name": "Risotto ai Funghi",
    "emoji": "🍚",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Riso",
        "qty": 320,
        "unit": "g"
      },
      {
        "name": "Brodo",
        "qty": 1,
        "unit": "L"
      },
      {
        "name": "Funghi",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_153",
    "name": "Risotto alla Zucca",
    "emoji": "🍚",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Riso",
        "qty": 320,
        "unit": "g"
      },
      {
        "name": "Brodo",
        "qty": 1,
        "unit": "L"
      },
      {
        "name": "Zucca",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Parmigiano",
        "qty": 50,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_154",
    "name": "Risotto al Radicchio",
    "emoji": "🍚",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Riso",
        "qty": 320,
        "unit": "g"
      },
      {
        "name": "Brodo",
        "qty": 1,
        "unit": "L"
      },
      {
        "name": "Radicchio",
        "qty": 1,
        "unit": "cespo"
      },
      {
        "name": "Vino rosso",
        "qty": 0.5,
        "unit": "bicchiere"
      },
      {
        "name": "Parmigiano",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_155",
    "name": "Risotto alla Salsiccia",
    "emoji": "🍚",
    "cat": "Primi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Riso",
        "qty": 320,
        "unit": "g"
      },
      {
        "name": "Brodo",
        "qty": 1,
        "unit": "L"
      },
      {
        "name": "Salsiccia",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Vino bianco",
        "qty": 0.5,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_156",
    "name": "Petto di Pollo al Limone",
    "emoji": "🍗",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Petto di pollo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_157",
    "name": "Petto di Pollo al Forno con Patate",
    "emoji": "🍗",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Petto di pollo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_158",
    "name": "Petto di Pollo in Padella",
    "emoji": "🍗",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Petto di pollo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_159",
    "name": "Petto di Pollo alla Griglia",
    "emoji": "🍗",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Petto di pollo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_160",
    "name": "Petto di Pollo al Vino Bianco",
    "emoji": "🍗",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Petto di pollo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_161",
    "name": "Petto di Pollo ai Funghi",
    "emoji": "🍗",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Petto di pollo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_162",
    "name": "Petto di Pollo al Sugo",
    "emoji": "🍗",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Petto di pollo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_163",
    "name": "Petto di Pollo con Piselli",
    "emoji": "🍗",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Petto di pollo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_164",
    "name": "Petto di Pollo Ripieno",
    "emoji": "🍗",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Petto di pollo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_165",
    "name": "Scaloppine di Vitello al Limone",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di vitello",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_166",
    "name": "Scaloppine di Vitello al Forno con Patate",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di vitello",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_167",
    "name": "Scaloppine di Vitello in Padella",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di vitello",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_168",
    "name": "Scaloppine di Vitello alla Griglia",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di vitello",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_169",
    "name": "Scaloppine di Vitello al Vino Bianco",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di vitello",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_170",
    "name": "Scaloppine di Vitello ai Funghi",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di vitello",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_171",
    "name": "Scaloppine di Vitello al Sugo",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di vitello",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_172",
    "name": "Scaloppine di Vitello con Piselli",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di vitello",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_173",
    "name": "Scaloppine di Vitello Ripieno",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di vitello",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_174",
    "name": "Cotoletta al Limone",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di carne",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Pangrattato",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_175",
    "name": "Cotoletta al Forno con Patate",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di carne",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Pangrattato",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_176",
    "name": "Cotoletta in Padella",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di carne",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Pangrattato",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_177",
    "name": "Cotoletta alla Griglia",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di carne",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Pangrattato",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_178",
    "name": "Cotoletta al Vino Bianco",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di carne",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Pangrattato",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_179",
    "name": "Cotoletta ai Funghi",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di carne",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Pangrattato",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_180",
    "name": "Cotoletta al Sugo",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di carne",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Pangrattato",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_181",
    "name": "Cotoletta con Piselli",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di carne",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Pangrattato",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_182",
    "name": "Cotoletta Ripieno",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Fettine di carne",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Pangrattato",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_183",
    "name": "Arrosto di Maiale al Limone",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Arrosto di maiale",
        "qty": 800,
        "unit": "g"
      },
      {
        "name": "Rosmarino",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_184",
    "name": "Arrosto di Maiale al Forno con Patate",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Arrosto di maiale",
        "qty": 800,
        "unit": "g"
      },
      {
        "name": "Rosmarino",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_185",
    "name": "Arrosto di Maiale in Padella",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Arrosto di maiale",
        "qty": 800,
        "unit": "g"
      },
      {
        "name": "Rosmarino",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_186",
    "name": "Arrosto di Maiale alla Griglia",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Arrosto di maiale",
        "qty": 800,
        "unit": "g"
      },
      {
        "name": "Rosmarino",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_187",
    "name": "Arrosto di Maiale al Vino Bianco",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Arrosto di maiale",
        "qty": 800,
        "unit": "g"
      },
      {
        "name": "Rosmarino",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_188",
    "name": "Arrosto di Maiale ai Funghi",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Arrosto di maiale",
        "qty": 800,
        "unit": "g"
      },
      {
        "name": "Rosmarino",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_189",
    "name": "Arrosto di Maiale al Sugo",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Arrosto di maiale",
        "qty": 800,
        "unit": "g"
      },
      {
        "name": "Rosmarino",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_190",
    "name": "Arrosto di Maiale con Piselli",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Arrosto di maiale",
        "qty": 800,
        "unit": "g"
      },
      {
        "name": "Rosmarino",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_191",
    "name": "Arrosto di Maiale Ripieno",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Arrosto di maiale",
        "qty": 800,
        "unit": "g"
      },
      {
        "name": "Rosmarino",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_192",
    "name": "Polpette al Limone",
    "emoji": "🧆",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Macinato",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Mollica di pane",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_193",
    "name": "Polpette al Forno con Patate",
    "emoji": "🧆",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Macinato",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Mollica di pane",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_194",
    "name": "Polpette in Padella",
    "emoji": "🧆",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Macinato",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Mollica di pane",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_195",
    "name": "Polpette alla Griglia",
    "emoji": "🧆",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Macinato",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Mollica di pane",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_196",
    "name": "Polpette al Vino Bianco",
    "emoji": "🧆",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Macinato",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Mollica di pane",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_197",
    "name": "Polpette ai Funghi",
    "emoji": "🧆",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Macinato",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Mollica di pane",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_198",
    "name": "Polpette al Sugo",
    "emoji": "🧆",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Macinato",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Mollica di pane",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_199",
    "name": "Polpette con Piselli",
    "emoji": "🧆",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Macinato",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Mollica di pane",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_200",
    "name": "Polpette Ripieno",
    "emoji": "🧆",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Macinato",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Mollica di pane",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_201",
    "name": "Filetto di Manzo al Limone",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di manzo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_202",
    "name": "Filetto di Manzo al Forno con Patate",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di manzo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_203",
    "name": "Filetto di Manzo in Padella",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di manzo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_204",
    "name": "Filetto di Manzo alla Griglia",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di manzo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_205",
    "name": "Filetto di Manzo al Vino Bianco",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di manzo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_206",
    "name": "Filetto di Manzo ai Funghi",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di manzo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_207",
    "name": "Filetto di Manzo al Sugo",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di manzo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_208",
    "name": "Filetto di Manzo con Piselli",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di manzo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_209",
    "name": "Filetto di Manzo Ripieno",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di manzo",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_210",
    "name": "Salsiccia al Limone",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Salsiccia",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_211",
    "name": "Salsiccia al Forno con Patate",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Salsiccia",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_212",
    "name": "Salsiccia in Padella",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Salsiccia",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_213",
    "name": "Salsiccia alla Griglia",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Salsiccia",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_214",
    "name": "Salsiccia al Vino Bianco",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Salsiccia",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_215",
    "name": "Salsiccia ai Funghi",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Salsiccia",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_216",
    "name": "Salsiccia al Sugo",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Salsiccia",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_217",
    "name": "Salsiccia con Piselli",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Salsiccia",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_218",
    "name": "Salsiccia Ripieno",
    "emoji": "🥩",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Salsiccia",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_219",
    "name": "Hamburger al Limone",
    "emoji": "🍔",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Hamburger di manzo",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_220",
    "name": "Hamburger al Forno con Patate",
    "emoji": "🍔",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Hamburger di manzo",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_221",
    "name": "Hamburger in Padella",
    "emoji": "🍔",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Hamburger di manzo",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_222",
    "name": "Hamburger alla Griglia",
    "emoji": "🍔",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Hamburger di manzo",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_223",
    "name": "Hamburger al Vino Bianco",
    "emoji": "🍔",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Hamburger di manzo",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_224",
    "name": "Hamburger ai Funghi",
    "emoji": "🍔",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Hamburger di manzo",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_225",
    "name": "Hamburger al Sugo",
    "emoji": "🍔",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Hamburger di manzo",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_226",
    "name": "Hamburger con Piselli",
    "emoji": "🍔",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Hamburger di manzo",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_227",
    "name": "Hamburger Ripieno",
    "emoji": "🍔",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Hamburger di manzo",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_228",
    "name": "Filetto di Salmone al Limone",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di salmone",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_229",
    "name": "Filetto di Salmone al Forno con Patate",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di salmone",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_230",
    "name": "Filetto di Salmone in Padella",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di salmone",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_231",
    "name": "Filetto di Salmone alla Griglia",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di salmone",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_232",
    "name": "Filetto di Salmone al Vino Bianco",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di salmone",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_233",
    "name": "Filetto di Salmone ai Funghi",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di salmone",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_234",
    "name": "Filetto di Salmone al Sugo",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di salmone",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_235",
    "name": "Filetto di Salmone con Piselli",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di salmone",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_236",
    "name": "Filetto di Salmone Ripieno",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Filetto di salmone",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_237",
    "name": "Orata al Limone",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Orata",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_238",
    "name": "Orata al Forno con Patate",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Orata",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_239",
    "name": "Orata in Padella",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Orata",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_240",
    "name": "Orata alla Griglia",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Orata",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_241",
    "name": "Orata al Vino Bianco",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Orata",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_242",
    "name": "Orata ai Funghi",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Orata",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_243",
    "name": "Orata al Sugo",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Orata",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_244",
    "name": "Orata con Piselli",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Orata",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_245",
    "name": "Orata Ripieno",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Orata",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_246",
    "name": "Branzino al Limone",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Branzino",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_247",
    "name": "Branzino al Forno con Patate",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Branzino",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_248",
    "name": "Branzino in Padella",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Branzino",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_249",
    "name": "Branzino alla Griglia",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Branzino",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_250",
    "name": "Branzino al Vino Bianco",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Branzino",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_251",
    "name": "Branzino ai Funghi",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Branzino",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_252",
    "name": "Branzino al Sugo",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Branzino",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_253",
    "name": "Branzino con Piselli",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Branzino",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_254",
    "name": "Branzino Ripieno",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Branzino",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_255",
    "name": "Calamari al Limone",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Calamari",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_256",
    "name": "Calamari al Forno con Patate",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Calamari",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_257",
    "name": "Calamari in Padella",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Calamari",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_258",
    "name": "Calamari alla Griglia",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Calamari",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_259",
    "name": "Calamari al Vino Bianco",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Calamari",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_260",
    "name": "Calamari ai Funghi",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Calamari",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_261",
    "name": "Calamari al Sugo",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Calamari",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_262",
    "name": "Calamari con Piselli",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Calamari",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_263",
    "name": "Calamari Ripieno",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Calamari",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_264",
    "name": "Seppie al Limone",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Seppie",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_265",
    "name": "Seppie al Forno con Patate",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Seppie",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_266",
    "name": "Seppie in Padella",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Seppie",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_267",
    "name": "Seppie alla Griglia",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Seppie",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_268",
    "name": "Seppie al Vino Bianco",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Seppie",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_269",
    "name": "Seppie ai Funghi",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Seppie",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_270",
    "name": "Seppie al Sugo",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Seppie",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_271",
    "name": "Seppie con Piselli",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Seppie",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_272",
    "name": "Seppie Ripieno",
    "emoji": "🦑",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Seppie",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_273",
    "name": "Tonno scottato al Limone",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Trancio di tonno",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Limoni",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_274",
    "name": "Tonno scottato al Forno con Patate",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Trancio di tonno",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Patate",
        "qty": 600,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_275",
    "name": "Tonno scottato in Padella",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Trancio di tonno",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_276",
    "name": "Tonno scottato alla Griglia",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Trancio di tonno",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Olio EVO",
        "qty": "q.b.",
        "unit": ""
      },
      {
        "name": "Sale grosso",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_277",
    "name": "Tonno scottato al Vino Bianco",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Trancio di tonno",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Vino bianco",
        "qty": 1,
        "unit": "bicchiere"
      },
      {
        "name": "Burro",
        "qty": 30,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_278",
    "name": "Tonno scottato ai Funghi",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Trancio di tonno",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Funghi",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Prezzemolo",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_279",
    "name": "Tonno scottato al Sugo",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Trancio di tonno",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Passata di pomodoro",
        "qty": 400,
        "unit": "ml"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_280",
    "name": "Tonno scottato con Piselli",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Trancio di tonno",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Cipolla",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_281",
    "name": "Tonno scottato Ripieno",
    "emoji": "🐟",
    "cat": "Secondi",
    "portions": 4,
    "ingredients": [
      {
        "name": "Trancio di tonno",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Formaggio a fette",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Prosciutto cotto",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_282",
    "name": "Insalata Mista",
    "emoji": "🥗",
    "cat": "Contorni",
    "portions": 4,
    "ingredients": [
      {
        "name": "Insalata",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Pomodorini",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_283",
    "name": "Patate al Forno",
    "emoji": "🥔",
    "cat": "Contorni",
    "portions": 4,
    "ingredients": [
      {
        "name": "Patate",
        "qty": 800,
        "unit": "g"
      },
      {
        "name": "Rosmarino",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_284",
    "name": "Patatine Fritte",
    "emoji": "🍟",
    "cat": "Contorni",
    "portions": 4,
    "ingredients": [
      {
        "name": "Patate fritte surgelate",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Olio di semi",
        "qty": 1,
        "unit": "L"
      }
    ]
  },
  {
    "id": "r_285",
    "name": "Verdure Grigliate",
    "emoji": "🍆",
    "cat": "Contorni",
    "portions": 4,
    "ingredients": [
      {
        "name": "Zucchine",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Melanzane",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Peperoni",
        "qty": 2,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_286",
    "name": "Spinaci al Burro",
    "emoji": "🥬",
    "cat": "Contorni",
    "portions": 4,
    "ingredients": [
      {
        "name": "Spinaci",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Burro",
        "qty": 40,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_287",
    "name": "Broccoli saltati",
    "emoji": "🥦",
    "cat": "Contorni",
    "portions": 4,
    "ingredients": [
      {
        "name": "Broccoli",
        "qty": 400,
        "unit": "g"
      },
      {
        "name": "Aglio",
        "qty": 1,
        "unit": "spicchio"
      }
    ]
  },
  {
    "id": "r_288",
    "name": "Piselli in padella",
    "emoji": "🟢",
    "cat": "Contorni",
    "portions": 4,
    "ingredients": [
      {
        "name": "Piselli",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Pancetta",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_289",
    "name": "Carote julienne",
    "emoji": "🥕",
    "cat": "Contorni",
    "portions": 4,
    "ingredients": [
      {
        "name": "Carote",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Limone",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_290",
    "name": "Cavolfiore gratinato",
    "emoji": "🥦",
    "cat": "Contorni",
    "portions": 4,
    "ingredients": [
      {
        "name": "Cavolfiore",
        "qty": 1,
        "unit": "pz"
      },
      {
        "name": "Besciamella",
        "qty": 200,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_291",
    "name": "Purè di Patate",
    "emoji": "🥔",
    "cat": "Contorni",
    "portions": 4,
    "ingredients": [
      {
        "name": "Patate",
        "qty": 800,
        "unit": "g"
      },
      {
        "name": "Latte",
        "qty": 200,
        "unit": "ml"
      },
      {
        "name": "Burro",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_292",
    "name": "Pizza Margherita",
    "emoji": "🍕",
    "cat": "Piatti Unici",
    "portions": 2,
    "ingredients": [
      {
        "name": "Farina",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Mozzarella",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Passata",
        "qty": 200,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_293",
    "name": "Pizza Diavola",
    "emoji": "🍕",
    "cat": "Piatti Unici",
    "portions": 2,
    "ingredients": [
      {
        "name": "Farina",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Mozzarella",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Salame piccante",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_294",
    "name": "Pizza Capricciosa",
    "emoji": "🍕",
    "cat": "Piatti Unici",
    "portions": 2,
    "ingredients": [
      {
        "name": "Farina",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Mozzarella",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Funghi carciofi prosciutto",
        "qty": 150,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_295",
    "name": "Insalatona Tonno e Uova",
    "emoji": "🥗",
    "cat": "Piatti Unici",
    "portions": 2,
    "ingredients": [
      {
        "name": "Insalata",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Tonno",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 2,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_296",
    "name": "Insalatona con Pollo",
    "emoji": "🥗",
    "cat": "Piatti Unici",
    "portions": 2,
    "ingredients": [
      {
        "name": "Insalata",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Petto di pollo",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Mais",
        "qty": 50,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_297",
    "name": "Piadina Crudo e Squacquerone",
    "emoji": "🌮",
    "cat": "Piatti Unici",
    "portions": 2,
    "ingredients": [
      {
        "name": "Piadina",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Prosciutto crudo",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Squacquerone",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_298",
    "name": "Torta Salata Ricotta e Spinaci",
    "emoji": "🥧",
    "cat": "Piatti Unici",
    "portions": 2,
    "ingredients": [
      {
        "name": "Pasta sfoglia",
        "qty": 1,
        "unit": "rotolo"
      },
      {
        "name": "Ricotta",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Spinaci",
        "qty": 300,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_299",
    "name": "Torta Salata Zucchine e Pancetta",
    "emoji": "🥧",
    "cat": "Piatti Unici",
    "portions": 2,
    "ingredients": [
      {
        "name": "Pasta sfoglia",
        "qty": 1,
        "unit": "rotolo"
      },
      {
        "name": "Zucchine",
        "qty": 2,
        "unit": "pz"
      },
      {
        "name": "Pancetta",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_300",
    "name": "Poke Bowl Salmone",
    "emoji": "🍲",
    "cat": "Piatti Unici",
    "portions": 2,
    "ingredients": [
      {
        "name": "Riso sushi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Salmone crudo",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Avocado",
        "qty": 1,
        "unit": "pz"
      }
    ]
  },
  {
    "id": "r_301",
    "name": "Poke Bowl Pollo Teriyaki",
    "emoji": "🍲",
    "cat": "Piatti Unici",
    "portions": 2,
    "ingredients": [
      {
        "name": "Riso",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Pollo",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Salsa teriyaki",
        "qty": "q.b.",
        "unit": ""
      }
    ]
  },
  {
    "id": "r_302",
    "name": "Tiramisù",
    "emoji": "🍰",
    "cat": "Dolci",
    "portions": 6,
    "ingredients": [
      {
        "name": "Savoiardi",
        "qty": 300,
        "unit": "g"
      },
      {
        "name": "Mascarpone",
        "qty": 500,
        "unit": "g"
      },
      {
        "name": "Uova",
        "qty": 4,
        "unit": "pz"
      },
      {
        "name": "Caffè",
        "qty": 300,
        "unit": "ml"
      }
    ]
  },
  {
    "id": "r_303",
    "name": "Torta di Mele",
    "emoji": "🥧",
    "cat": "Dolci",
    "portions": 6,
    "ingredients": [
      {
        "name": "Mele",
        "qty": 3,
        "unit": "pz"
      },
      {
        "name": "Farina",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Burro",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_304",
    "name": "Crostata alla Marmellata",
    "emoji": "🥧",
    "cat": "Dolci",
    "portions": 6,
    "ingredients": [
      {
        "name": "Pasta frolla",
        "qty": 1,
        "unit": "rotolo"
      },
      {
        "name": "Marmellata",
        "qty": 250,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_305",
    "name": "Panna Cotta",
    "emoji": "🍮",
    "cat": "Dolci",
    "portions": 6,
    "ingredients": [
      {
        "name": "Panna fresca",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Colla di pesce",
        "qty": 8,
        "unit": "g"
      },
      {
        "name": "Zucchero",
        "qty": 80,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_306",
    "name": "Cheesecake",
    "emoji": "🍰",
    "cat": "Dolci",
    "portions": 6,
    "ingredients": [
      {
        "name": "Biscotti secchi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Burro",
        "qty": 100,
        "unit": "g"
      },
      {
        "name": "Philadelphia",
        "qty": 500,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_307",
    "name": "Muffin al Cioccolato",
    "emoji": "🧁",
    "cat": "Dolci",
    "portions": 6,
    "ingredients": [
      {
        "name": "Farina",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Cacao",
        "qty": 50,
        "unit": "g"
      },
      {
        "name": "Zucchero",
        "qty": 150,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_308",
    "name": "Biscotti al Burro",
    "emoji": "🍪",
    "cat": "Dolci",
    "portions": 6,
    "ingredients": [
      {
        "name": "Farina",
        "qty": 250,
        "unit": "g"
      },
      {
        "name": "Burro",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Zucchero",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_309",
    "name": "Salame di Cioccolato",
    "emoji": "🍫",
    "cat": "Dolci",
    "portions": 6,
    "ingredients": [
      {
        "name": "Biscotti secchi",
        "qty": 200,
        "unit": "g"
      },
      {
        "name": "Cioccolato fondente",
        "qty": 150,
        "unit": "g"
      },
      {
        "name": "Burro",
        "qty": 100,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_310",
    "name": "Profiteroles",
    "emoji": "🍮",
    "cat": "Dolci",
    "portions": 6,
    "ingredients": [
      {
        "name": "Bignè",
        "qty": 20,
        "unit": "pz"
      },
      {
        "name": "Crema pasticcera",
        "qty": 300,
        "unit": "ml"
      },
      {
        "name": "Cioccolato fondente",
        "qty": 200,
        "unit": "g"
      }
    ]
  },
  {
    "id": "r_311",
    "name": "Gelato Fatto in Casa",
    "emoji": "🍦",
    "cat": "Dolci",
    "portions": 6,
    "ingredients": [
      {
        "name": "Latte",
        "qty": 500,
        "unit": "ml"
      },
      {
        "name": "Panna",
        "qty": 250,
        "unit": "ml"
      },
      {
        "name": "Zucchero",
        "qty": 150,
        "unit": "g"
      }
    ]
  }
];

function searchRecipes(query) {
  const q = query.toLowerCase().trim();
  return RECIPES_DB.filter(r => r.name.toLowerCase().includes(q));
}

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}
