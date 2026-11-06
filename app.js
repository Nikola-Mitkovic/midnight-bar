'use strict';
const cocktails = [
  {
    "id": "old-fashioned",
    "name": "Old Fashioned",
    "rank": "A",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Bourbon",
    "shape": "rocks",
    "color": "#d78b27",
    "method": "Stirred",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "bourbon whiskey"
      ],
      [
        "1",
        "1",
        "sugar cube"
      ],
      [
        "2 dashes",
        "2 dashes",
        "Angostura bitters"
      ],
      [
        "1",
        "1",
        "orange peel"
      ]
    ],
    "steps": [
      "Muddle the sugar with the bitters and a small splash of water until dissolved.",
      "Add bourbon and ice, then stir until chilled. Express the orange peel over the glass and add it."
    ],
    "description": "Rich whiskey, aromatic bitters, and a little sweetness.",
    "label": "The whiskey collection",
    "profile": "Rich whiskey, aromatic bitters, and a little sweetness.",
    "glass": "Rocks glass",
    "style": "bold",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "manhattan",
    "name": "Manhattan",
    "rank": "2",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Rye whiskey",
    "shape": "coupe",
    "color": "#b84e28",
    "method": "Stirred",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "rye whiskey"
      ],
      [
        "30 ml",
        "1 oz",
        "sweet vermouth"
      ],
      [
        "2 dashes",
        "2 dashes",
        "Angostura bitters"
      ],
      [
        "1",
        "1",
        "cocktail cherry"
      ]
    ],
    "steps": [
      "Stir the rye, vermouth, and bitters with ice until chilled.",
      "Strain into a chilled coupe and garnish with the cherry."
    ],
    "description": "Silky rye and sweet vermouth, finished with cherry.",
    "label": "The whiskey collection",
    "profile": "Silky rye and sweet vermouth, finished with cherry.",
    "glass": "Chilled coupe",
    "style": "bold",
    "tip": "Refrigerate opened vermouth to keep its aromas fresh."
  },
  {
    "id": "whiskey-sour",
    "name": "Whiskey Sour",
    "rank": "3",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Bourbon",
    "shape": "rocks",
    "color": "#e6ba56",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "bourbon"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "lemon juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "simple syrup"
      ],
      [
        "1",
        "1",
        "pasteurized egg white (optional)"
      ]
    ],
    "steps": [
      "If using egg white, shake it with the other ingredients without ice first.",
      "Add ice, shake vigorously, and strain over fresh ice."
    ],
    "description": "Golden bourbon balanced with fresh lemon.",
    "label": "The whiskey collection",
    "profile": "Golden bourbon balanced with fresh lemon.",
    "glass": "Rocks glass",
    "style": "citrus",
    "tip": "The card lists one optional egg white; use pasteurized egg white or omit it."
  },
  {
    "id": "mint-julep",
    "name": "Mint Julep",
    "rank": "4",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Bourbon",
    "shape": "julep",
    "color": "#b99449",
    "method": "Built",
    "ingredients": [
      [
        "75 ml",
        "2.5 oz",
        "bourbon"
      ],
      [
        "15 ml",
        "0.5 oz",
        "simple syrup"
      ],
      [
        "8–10",
        "8–10",
        "mint leaves"
      ],
      [
        "To fill",
        "To fill",
        "crushed ice"
      ]
    ],
    "steps": [
      "Gently press the mint with the syrup in a julep cup.",
      "Add bourbon, pack with crushed ice, and stir until the cup is cold."
    ],
    "description": "Bourbon over crushed ice with fragrant fresh mint.",
    "label": "The whiskey collection",
    "profile": "Bourbon over crushed ice with fragrant fresh mint.",
    "glass": "Julep cup",
    "style": "citrus",
    "tip": "Press mint gently; shredding it can add bitterness."
  },
  {
    "id": "sazerac",
    "name": "Sazerac",
    "rank": "5",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Rye whiskey",
    "shape": "rocks",
    "color": "#d99a35",
    "method": "Stirred",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "rye whiskey"
      ],
      [
        "7.5 ml",
        "0.25 oz",
        "simple syrup"
      ],
      [
        "3 dashes",
        "3 dashes",
        "Peychaud’s bitters"
      ],
      [
        "A rinse",
        "A rinse",
        "absinthe"
      ]
    ],
    "steps": [
      "Rinse a chilled rocks glass with absinthe and discard the excess.",
      "Stir rye, syrup, and bitters with ice. Strain into the prepared glass."
    ],
    "description": "Rye, anise, and bitters in a New Orleans classic.",
    "label": "The whiskey collection",
    "profile": "Rye, anise, and bitters in a New Orleans classic.",
    "glass": "Rocks glass",
    "style": "bold",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "boulevardier",
    "name": "Boulevardier",
    "rank": "6",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Bourbon",
    "shape": "rocks",
    "color": "#b84325",
    "method": "Stirred",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "bourbon"
      ],
      [
        "30 ml",
        "1 oz",
        "Campari"
      ],
      [
        "30 ml",
        "1 oz",
        "sweet vermouth"
      ],
      [
        "1",
        "1",
        "orange peel"
      ]
    ],
    "steps": [
      "Stir the bourbon, Campari, and vermouth with ice.",
      "Strain over fresh ice and garnish with the orange peel."
    ],
    "description": "A warming whiskey turn on a bitter Italian classic.",
    "label": "The whiskey collection",
    "profile": "A warming whiskey turn on a bitter Italian classic.",
    "glass": "Rocks glass",
    "style": "bold",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "irish-coffee",
    "name": "Irish Coffee",
    "rank": "7",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Irish whiskey",
    "shape": "coffee",
    "color": "#563023",
    "method": "Built",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "Irish whiskey"
      ],
      [
        "120 ml",
        "4 oz",
        "hot coffee"
      ],
      [
        "1 tsp",
        "1 tsp",
        "brown sugar"
      ],
      [
        "To float",
        "To float",
        "heavy cream"
      ]
    ],
    "steps": [
      "Warm a heatproof glass, then add hot coffee, whiskey, and sugar. Stir to dissolve.",
      "Lightly whip the cream and float it over the back of a spoon. Do not stir."
    ],
    "description": "Warm coffee and Irish whiskey beneath soft cream.",
    "label": "The whiskey collection",
    "profile": "Warm coffee and Irish whiskey beneath soft cream.",
    "glass": "Heatproof coffee glass",
    "style": "citrus",
    "tip": "The card does not specify a cream quantity; add a thin floating layer."
  },
  {
    "id": "rusty-nail",
    "name": "Rusty Nail",
    "rank": "8",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Scotch whisky",
    "shape": "rocks",
    "color": "#d09b3d",
    "method": "Stirred",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "Scotch whisky"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "Drambuie"
      ],
      [
        "1",
        "1",
        "lemon twist"
      ]
    ],
    "steps": [
      "Build the Scotch and Drambuie in a rocks glass over ice.",
      "Stir gently and garnish with the lemon twist."
    ],
    "description": "Scotch softened by honeyed, herbal Drambuie.",
    "label": "The whiskey collection",
    "profile": "Scotch softened by honeyed, herbal Drambuie.",
    "glass": "Rocks glass",
    "style": "bold",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "penicillin",
    "name": "Penicillin",
    "rank": "9",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Scotch whisky",
    "shape": "rocks",
    "color": "#d8af5c",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "blended Scotch"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "lemon juice"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "honey-ginger syrup"
      ],
      [
        "7.5 ml",
        "0.25 oz",
        "Islay Scotch"
      ]
    ],
    "steps": [
      "Shake the blended Scotch, lemon, and honey-ginger syrup with ice.",
      "Strain over fresh ice. Float the Islay Scotch gently on top."
    ],
    "description": "Bright lemon, ginger warmth, and a smoky finish.",
    "label": "The whiskey collection",
    "profile": "Bright lemon, ginger warmth, and a smoky finish.",
    "glass": "Rocks glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "rob-roy",
    "name": "Rob Roy",
    "rank": "10",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Scotch whisky",
    "shape": "coupe",
    "color": "#ac4d28",
    "method": "Stirred",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "Scotch whisky"
      ],
      [
        "30 ml",
        "1 oz",
        "sweet vermouth"
      ],
      [
        "2 dashes",
        "2 dashes",
        "Angostura bitters"
      ]
    ],
    "steps": [
      "Stir all ingredients with ice until chilled.",
      "Strain into a chilled cocktail glass."
    ],
    "description": "The Manhattan’s Scotch cousin, rich and aromatic.",
    "label": "The whiskey collection",
    "profile": "The Manhattan’s Scotch cousin, rich and aromatic.",
    "glass": "Chilled coupe",
    "style": "bold",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "new-york-sour",
    "name": "New York Sour",
    "rank": "J",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Rye whiskey",
    "shape": "rocks",
    "color": "#bc733e",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "rye whiskey"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "lemon juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "simple syrup"
      ],
      [
        "15 ml",
        "0.5 oz",
        "red wine, to float"
      ]
    ],
    "steps": [
      "Shake the rye, lemon, and syrup with ice. Strain over fresh ice.",
      "Slowly pour the wine over the back of a spoon to float it on top."
    ],
    "description": "A whiskey sour crowned with a ruby wine float.",
    "label": "The whiskey collection",
    "profile": "A whiskey sour crowned with a ruby wine float.",
    "glass": "Rocks glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "godfather",
    "name": "Godfather",
    "rank": "Q",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Scotch whisky",
    "shape": "rocks",
    "color": "#be8731",
    "method": "Stirred",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "Scotch whisky"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "amaretto"
      ],
      [
        "1",
        "1",
        "orange peel"
      ]
    ],
    "steps": [
      "Build the Scotch and amaretto over ice.",
      "Stir gently and garnish with the orange peel."
    ],
    "description": "Scotch with a smooth almond sweetness.",
    "label": "The whiskey collection",
    "profile": "Scotch with a smooth almond sweetness.",
    "glass": "Rocks glass",
    "style": "bold",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "blood-and-sand",
    "name": "Blood and Sand",
    "rank": "K",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Scotch whisky",
    "shape": "coupe",
    "color": "#b96a35",
    "method": "Shaken",
    "ingredients": [
      [
        "22.5 ml",
        "0.75 oz",
        "Scotch whisky"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "cherry liqueur"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "sweet vermouth"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "orange juice"
      ]
    ],
    "steps": [
      "Shake all ingredients with ice.",
      "Strain into a chilled coupe."
    ],
    "description": "Equal parts Scotch, cherry, vermouth, and orange.",
    "label": "The whiskey collection",
    "profile": "Equal parts Scotch, cherry, vermouth, and orange.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "dry-martini",
    "name": "Dry Martini",
    "rank": "A",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "coupe",
    "color": "#d6d5a8",
    "method": "Stirred",
    "ingredients": [
      [
        "75 ml",
        "2.5 oz",
        "gin"
      ],
      [
        "15 ml",
        "0.5 oz",
        "dry vermouth"
      ],
      [
        "1",
        "1",
        "lemon twist or olive"
      ]
    ],
    "steps": [
      "Stir the gin and vermouth with ice until cold.",
      "Strain into a chilled cocktail glass. Garnish with a lemon twist or olive."
    ],
    "description": "Clean, crisp gin with a whisper of dry vermouth.",
    "label": "The gin collection",
    "profile": "Clean, crisp gin with a whisper of dry vermouth.",
    "glass": "Chilled coupe",
    "style": "bold",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "gin-tonic",
    "name": "Gin & Tonic",
    "rank": "2",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "tall",
    "color": "#d2dfb1",
    "method": "Built",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "gin"
      ],
      [
        "120 ml",
        "4 oz",
        "tonic water"
      ],
      [
        "1",
        "1",
        "lime wedge"
      ]
    ],
    "steps": [
      "Fill a highball glass with ice and add gin.",
      "Pour in tonic, stir gently, and garnish with lime."
    ],
    "description": "Botanical gin, lively tonic, and a squeeze of lime.",
    "label": "The gin collection",
    "profile": "Botanical gin, lively tonic, and a squeeze of lime.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "gimlet",
    "name": "Gimlet",
    "rank": "3",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "coupe",
    "color": "#cbd28a",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "gin"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "lime juice"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "simple syrup"
      ]
    ],
    "steps": [
      "Shake all ingredients with ice.",
      "Strain into a chilled coupe."
    ],
    "description": "A bright, clean balance of gin and lime.",
    "label": "The gin collection",
    "profile": "A bright, clean balance of gin and lime.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "tom-collins",
    "name": "Tom Collins",
    "rank": "4",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "tall",
    "color": "#e5d58b",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "gin"
      ],
      [
        "30 ml",
        "1 oz",
        "lemon juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "simple syrup"
      ],
      [
        "To top",
        "To top",
        "soda water"
      ],
      [
        "1",
        "1",
        "lemon slice"
      ]
    ],
    "steps": [
      "Shake gin, lemon, and syrup with ice, then strain over fresh ice in a tall glass.",
      "Top with soda water and garnish with lemon."
    ],
    "description": "Tall, sparkling, and freshly lemony.",
    "label": "The gin collection",
    "profile": "Tall, sparkling, and freshly lemony.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "aviation",
    "name": "Aviation",
    "rank": "5",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "coupe",
    "color": "#ac9fc9",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "gin"
      ],
      [
        "15 ml",
        "0.5 oz",
        "maraschino liqueur"
      ],
      [
        "7.5 ml",
        "0.25 oz",
        "crème de violette"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "lemon juice"
      ]
    ],
    "steps": [
      "Shake all ingredients with ice.",
      "Strain into a chilled coupe."
    ],
    "description": "Floral violet, cherry, and lemon lifted by gin.",
    "label": "The gin collection",
    "profile": "Floral violet, cherry, and lemon lifted by gin.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "bee-s-knees",
    "name": "Bee’s Knees",
    "rank": "6",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "coupe",
    "color": "#dfb95c",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "gin"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "lemon juice"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "honey syrup"
      ]
    ],
    "steps": [
      "Shake all ingredients vigorously with ice.",
      "Strain into a chilled coupe."
    ],
    "description": "Honeyed gin with a lively lemon finish.",
    "label": "The gin collection",
    "profile": "Honeyed gin with a lively lemon finish.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "the-last-word",
    "name": "The Last Word",
    "rank": "7",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "coupe",
    "color": "#bdc37c",
    "method": "Shaken",
    "ingredients": [
      [
        "22.5 ml",
        "0.75 oz",
        "gin"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "green Chartreuse"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "maraschino liqueur"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "lime juice"
      ]
    ],
    "steps": [
      "Shake all four ingredients hard with ice.",
      "Strain into a chilled coupe."
    ],
    "description": "Herbal, tart, and perfectly equal in measure.",
    "label": "The gin collection",
    "profile": "Herbal, tart, and perfectly equal in measure.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "singapore-sling",
    "name": "Singapore Sling",
    "rank": "8",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "tall",
    "color": "#d78e76",
    "method": "Shaken",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "gin"
      ],
      [
        "15 ml",
        "0.5 oz",
        "cherry liqueur"
      ],
      [
        "7.5 ml",
        "0.25 oz",
        "Cointreau"
      ],
      [
        "15 ml",
        "0.5 oz",
        "lime juice"
      ],
      [
        "To taste",
        "To taste",
        "pineapple juice"
      ],
      [
        "To top",
        "To top",
        "soda water"
      ]
    ],
    "steps": [
      "Shake gin, liqueurs, lime, and pineapple juice with ice.",
      "Strain into an ice-filled tall glass and top with soda."
    ],
    "description": "A fruit-forward gin sling with cherry and pineapple.",
    "label": "The gin collection",
    "profile": "A fruit-forward gin sling with cherry and pineapple.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "The photographed card leaves pineapple and soda quantities unspecified; adjust to your glass and taste."
  },
  {
    "id": "vesper",
    "name": "Vesper",
    "rank": "9",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin & vodka",
    "shape": "coupe",
    "color": "#dfcc84",
    "method": "Shaken",
    "ingredients": [
      [
        "90 ml",
        "3 oz",
        "gin"
      ],
      [
        "30 ml",
        "1 oz",
        "vodka"
      ],
      [
        "15 ml",
        "0.5 oz",
        "Lillet Blanc"
      ],
      [
        "1",
        "1",
        "lemon twist"
      ]
    ],
    "steps": [
      "Shake gin, vodka, and Lillet with ice as directed on the card.",
      "Strain into a chilled cocktail glass and garnish with lemon."
    ],
    "description": "Gin, vodka, and Lillet in a bold, crisp pour.",
    "label": "The gin collection",
    "profile": "Gin, vodka, and Lillet in a bold, crisp pour.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "This is a large, spirit-forward serving; use a suitably sized glass."
  },
  {
    "id": "white-lady",
    "name": "White Lady",
    "rank": "10",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "coupe",
    "color": "#eee1af",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "gin"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "Cointreau"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "lemon juice"
      ],
      [
        "1",
        "1",
        "pasteurized egg white (optional)"
      ]
    ],
    "steps": [
      "Combine ingredients; if using egg white, shake without ice first.",
      "Add ice, shake well, and strain into a chilled coupe."
    ],
    "description": "A silky gin sour with a touch of orange.",
    "label": "The gin collection",
    "profile": "A silky gin sour with a touch of orange.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "The card leaves optional egg-white quantity unspecified; one pasteurized white is a preparation suggestion."
  },
  {
    "id": "negroni",
    "name": "Negroni",
    "rank": "J",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "rocks",
    "color": "#bd3b20",
    "method": "Stirred",
    "ingredients": [
      [
        "30 ml",
        "1 oz",
        "gin"
      ],
      [
        "30 ml",
        "1 oz",
        "Campari"
      ],
      [
        "30 ml",
        "1 oz",
        "sweet vermouth"
      ],
      [
        "1",
        "1",
        "orange peel"
      ]
    ],
    "steps": [
      "Stir gin, Campari, and vermouth with ice.",
      "Serve over fresh ice and garnish with orange peel."
    ],
    "description": "Bittersweet, botanical, and unmistakably Italian.",
    "label": "The gin collection",
    "profile": "Bittersweet, botanical, and unmistakably Italian.",
    "glass": "Rocks glass",
    "style": "bold",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "french-75",
    "name": "French 75",
    "rank": "Q",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "flute",
    "color": "#e2c66f",
    "method": "Shaken",
    "ingredients": [
      [
        "30 ml",
        "1 oz",
        "gin"
      ],
      [
        "15 ml",
        "0.5 oz",
        "lemon juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "simple syrup"
      ],
      [
        "90 ml",
        "3 oz",
        "Champagne"
      ]
    ],
    "steps": [
      "Shake gin, lemon, and syrup with ice. Strain into a flute.",
      "Top slowly with chilled Champagne."
    ],
    "description": "Bright gin and lemon with a Champagne sparkle.",
    "label": "The gin collection",
    "profile": "Bright gin and lemon with a Champagne sparkle.",
    "glass": "Champagne flute",
    "style": "citrus",
    "tip": "Add Champagne after shaking, never to the shaker."
  },
  {
    "id": "corpse-reviver-2",
    "name": "Corpse Reviver #2",
    "rank": "K",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "coupe",
    "color": "#d9d18f",
    "method": "Shaken",
    "ingredients": [
      [
        "22.5 ml",
        "0.75 oz",
        "gin"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "Cointreau"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "Lillet Blanc"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "lemon juice"
      ],
      [
        "A rinse",
        "A rinse",
        "absinthe"
      ]
    ],
    "steps": [
      "Rinse a chilled coupe with absinthe and discard excess.",
      "Shake the remaining ingredients with ice and strain into the glass."
    ],
    "description": "Citrus and botanicals with a delicate anise edge.",
    "label": "The gin collection",
    "profile": "Citrus and botanicals with a delicate anise edge.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "cosmopolitan",
    "name": "Cosmopolitan",
    "rank": "A",
    "suit": "♦",
    "category": "vodka",
    "spirit": "Vodka",
    "shape": "coupe",
    "color": "#bd5570",
    "method": "Shaken",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "vodka"
      ],
      [
        "30 ml",
        "1 oz",
        "Cointreau"
      ],
      [
        "15 ml",
        "0.5 oz",
        "lime juice"
      ],
      [
        "30 ml",
        "1 oz",
        "cranberry juice"
      ],
      [
        "1",
        "1",
        "lime twist"
      ]
    ],
    "steps": [
      "Shake the liquid ingredients with ice.",
      "Strain into a chilled cocktail glass and garnish with lime."
    ],
    "description": "Cranberry blush with a bright orange-lime finish.",
    "label": "Vodka & tequila",
    "profile": "Cranberry blush with a bright orange-lime finish.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "moscow-mule",
    "name": "Moscow Mule",
    "rank": "2",
    "suit": "♦",
    "category": "vodka",
    "spirit": "Vodka",
    "shape": "mug",
    "color": "#c79c55",
    "method": "Built",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "vodka"
      ],
      [
        "15 ml",
        "0.5 oz",
        "lime juice"
      ],
      [
        "120 ml",
        "4 oz",
        "ginger beer"
      ],
      [
        "1",
        "1",
        "lime wedge"
      ]
    ],
    "steps": [
      "Fill a copper mug with ice. Add vodka and lime juice.",
      "Top with ginger beer, stir gently, and add the lime wedge."
    ],
    "description": "Zesty lime and fiery ginger in a frosty mug.",
    "label": "Vodka & tequila",
    "profile": "Zesty lime and fiery ginger in a frosty mug.",
    "glass": "Copper mug",
    "style": "citrus",
    "tip": "The diamond-suit version from the photographed deck."
  },
  {
    "id": "bloody-mary",
    "name": "Bloody Mary",
    "rank": "3",
    "suit": "♦",
    "category": "vodka",
    "spirit": "Vodka",
    "shape": "tall",
    "color": "#b84930",
    "method": "Rolled",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "vodka"
      ],
      [
        "90 ml",
        "3 oz",
        "tomato juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "lemon juice"
      ],
      [
        "To taste",
        "To taste",
        "Worcestershire sauce"
      ],
      [
        "To taste",
        "To taste",
        "Tabasco"
      ],
      [
        "1 stalk",
        "1 stalk",
        "celery"
      ]
    ],
    "steps": [
      "Combine the liquids with ice and gently roll between two mixing vessels.",
      "Pour into a tall glass and garnish with celery."
    ],
    "description": "Savory tomato, warming spice, and a citrus lift.",
    "label": "Vodka & tequila",
    "profile": "Savory tomato, warming spice, and a citrus lift.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "The card does not specify sauce quantities; season to taste."
  },
  {
    "id": "espresso-martini",
    "name": "Espresso Martini",
    "rank": "4",
    "suit": "♦",
    "category": "vodka",
    "spirit": "Vodka",
    "shape": "coupe",
    "color": "#654332",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "vodka"
      ],
      [
        "30 ml",
        "1 oz",
        "coffee liqueur"
      ],
      [
        "30 ml",
        "1 oz",
        "fresh espresso"
      ],
      [
        "15 ml",
        "0.5 oz",
        "simple syrup"
      ]
    ],
    "steps": [
      "Add all ingredients to a shaker with ice.",
      "Shake hard to create foam and strain into a chilled cocktail glass."
    ],
    "description": "Fresh espresso and coffee liqueur with a velvet foam.",
    "label": "Vodka & tequila",
    "profile": "Fresh espresso and coffee liqueur with a velvet foam.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "sex-on-the-beach",
    "name": "Sex on the Beach",
    "rank": "5",
    "suit": "♦",
    "category": "vodka",
    "spirit": "Vodka",
    "shape": "tall",
    "color": "#e98c5e",
    "method": "Shaken",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "vodka"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "peach schnapps"
      ],
      [
        "45 ml",
        "1.5 oz",
        "cranberry juice"
      ],
      [
        "45 ml",
        "1.5 oz",
        "orange juice"
      ]
    ],
    "steps": [
      "Shake all ingredients with ice.",
      "Strain over fresh ice in a tall glass."
    ],
    "description": "Peach, orange, and cranberry in a sunny long drink.",
    "label": "Vodka & tequila",
    "profile": "Peach, orange, and cranberry in a sunny long drink.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "white-russian",
    "name": "White Russian",
    "rank": "6",
    "suit": "♦",
    "category": "vodka",
    "spirit": "Vodka",
    "shape": "rocks",
    "color": "#aa845d",
    "method": "Built",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "vodka"
      ],
      [
        "30 ml",
        "1 oz",
        "coffee liqueur"
      ],
      [
        "30 ml",
        "1 oz",
        "heavy cream"
      ]
    ],
    "steps": [
      "Add vodka and coffee liqueur to a rocks glass over ice.",
      "Slowly float the cream on top."
    ],
    "description": "Coffee and cream meet a smooth vodka base.",
    "label": "Vodka & tequila",
    "profile": "Coffee and cream meet a smooth vodka base.",
    "glass": "Rocks glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "lemon-drop",
    "name": "Lemon Drop",
    "rank": "7",
    "suit": "♦",
    "category": "vodka",
    "spirit": "Vodka",
    "shape": "coupe",
    "color": "#e6d265",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "vodka"
      ],
      [
        "30 ml",
        "1 oz",
        "lemon juice"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "simple syrup"
      ],
      [
        "For the rim",
        "For the rim",
        "sugar"
      ]
    ],
    "steps": [
      "Moisten the glass rim with lemon and dip in sugar.",
      "Shake vodka, lemon, and syrup with ice. Strain into the prepared glass."
    ],
    "description": "Sweet-tart lemon with a sparkling sugar rim.",
    "label": "Vodka & tequila",
    "profile": "Sweet-tart lemon with a sparkling sugar rim.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "tequila-sunrise",
    "name": "Tequila Sunrise",
    "rank": "8",
    "suit": "♦",
    "category": "tequila",
    "spirit": "Tequila",
    "shape": "tall",
    "color": "#ed983c",
    "method": "Built",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "tequila"
      ],
      [
        "120 ml",
        "4 oz",
        "orange juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "grenadine"
      ]
    ],
    "steps": [
      "Add tequila and orange juice to an ice-filled tall glass.",
      "Slowly pour in grenadine and let it settle; leave the gradient unstirred."
    ],
    "description": "Orange and tequila with a glowing grenadine sunrise.",
    "label": "Vodka & tequila",
    "profile": "Orange and tequila with a glowing grenadine sunrise.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "paloma",
    "name": "Paloma",
    "rank": "9",
    "suit": "♦",
    "category": "tequila",
    "spirit": "Tequila",
    "shape": "tall",
    "color": "#e3b69a",
    "method": "Built",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "tequila"
      ],
      [
        "15 ml",
        "0.5 oz",
        "lime juice"
      ],
      [
        "120 ml",
        "4 oz",
        "grapefruit soda"
      ],
      [
        "For the rim",
        "For the rim",
        "salt"
      ]
    ],
    "steps": [
      "Moisten the rim with lime and dip in salt. Fill the glass with ice.",
      "Add tequila and lime; top with grapefruit soda and stir gently."
    ],
    "description": "Grapefruit sparkle, fresh lime, and a salted edge.",
    "label": "Vodka & tequila",
    "profile": "Grapefruit sparkle, fresh lime, and a salted edge.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "tommy-s-margarita",
    "name": "Tommy’s Margarita",
    "rank": "10",
    "suit": "♦",
    "category": "tequila",
    "spirit": "Tequila",
    "shape": "rocks",
    "color": "#d4cf80",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "tequila"
      ],
      [
        "30 ml",
        "1 oz",
        "lime juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "agave nectar"
      ]
    ],
    "steps": [
      "Shake tequila, lime, and agave nectar with ice.",
      "Strain over fresh ice in a rocks glass."
    ],
    "description": "A simple trio of tequila, lime, and agave.",
    "label": "Vodka & tequila",
    "profile": "A simple trio of tequila, lime, and agave.",
    "glass": "Rocks glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "el-diablo",
    "name": "El Diablo",
    "rank": "J",
    "suit": "♦",
    "category": "tequila",
    "spirit": "Tequila",
    "shape": "tall",
    "color": "#ae5e52",
    "method": "Built",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "tequila"
      ],
      [
        "15 ml",
        "0.5 oz",
        "crème de cassis"
      ],
      [
        "15 ml",
        "0.5 oz",
        "lime juice"
      ],
      [
        "To top",
        "To top",
        "ginger beer"
      ]
    ],
    "steps": [
      "Build tequila, cassis, and lime juice over ice in a tall glass.",
      "Top with ginger beer and stir gently."
    ],
    "description": "Blackcurrant richness with tequila and ginger bite.",
    "label": "Vodka & tequila",
    "profile": "Blackcurrant richness with tequila and ginger bite.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "margarita",
    "name": "Margarita",
    "rank": "Q",
    "suit": "♦",
    "category": "tequila",
    "spirit": "Tequila",
    "shape": "coupe",
    "color": "#d5d47d",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "tequila"
      ],
      [
        "30 ml",
        "1 oz",
        "Cointreau"
      ],
      [
        "30 ml",
        "1 oz",
        "fresh lime juice"
      ],
      [
        "For the rim",
        "For the rim",
        "salt"
      ]
    ],
    "steps": [
      "Moisten the rim with lime and dip in salt.",
      "Shake tequila, Cointreau, and lime with ice. Strain into the prepared glass."
    ],
    "description": "The classic tequila, orange, and lime combination.",
    "label": "Vodka & tequila",
    "profile": "The classic tequila, orange, and lime combination.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "batanga",
    "name": "Batanga",
    "rank": "K",
    "suit": "♦",
    "category": "tequila",
    "spirit": "Tequila",
    "shape": "tall",
    "color": "#704330",
    "method": "Built",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "tequila"
      ],
      [
        "120 ml",
        "4 oz",
        "cola"
      ],
      [
        "15 ml",
        "0.5 oz",
        "lime juice"
      ],
      [
        "For the rim",
        "For the rim",
        "salt"
      ]
    ],
    "steps": [
      "Salt the rim and fill a tall glass with ice.",
      "Add tequila and lime, top with cola, and stir gently."
    ],
    "description": "Tequila and cola sharpened with lime and salt.",
    "label": "Vodka & tequila",
    "profile": "Tequila and cola sharpened with lime and salt.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "The card mentions stirring with a knife; a bar spoon is an easier preparation choice."
  },
  {
    "id": "daiquiri",
    "name": "Daiquiri",
    "rank": "A",
    "suit": "♥",
    "category": "rum",
    "spirit": "White rum",
    "shape": "coupe",
    "color": "#d6d395",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "white rum"
      ],
      [
        "30 ml",
        "1 oz",
        "fresh lime juice"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "simple syrup"
      ]
    ],
    "steps": [
      "Shake all ingredients hard with ice.",
      "Strain into a chilled coupe."
    ],
    "description": "Rum, lime, and sugar in a beautifully simple balance.",
    "label": "The hearts collection",
    "profile": "Rum, lime, and sugar in a beautifully simple balance.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "cuba-libre",
    "name": "Cuba Libre",
    "rank": "2",
    "suit": "♥",
    "category": "rum",
    "spirit": "White rum",
    "shape": "tall",
    "color": "#74452c",
    "method": "Built",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "white rum"
      ],
      [
        "120 ml",
        "4 oz",
        "cola"
      ],
      [
        "15 ml",
        "0.5 oz",
        "fresh lime juice"
      ],
      [
        "1",
        "1",
        "lime wedge"
      ]
    ],
    "steps": [
      "Build the rum, cola, and lime juice over ice.",
      "Squeeze in the lime wedge and stir gently."
    ],
    "description": "Rum and cola made lively with fresh lime.",
    "label": "The hearts collection",
    "profile": "Rum and cola made lively with fresh lime.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "mai-tai",
    "name": "Mai Tai",
    "rank": "3",
    "suit": "♥",
    "category": "rum",
    "spirit": "Aged rum",
    "shape": "rocks",
    "color": "#d6a24e",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "aged rum"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "orange curaçao"
      ],
      [
        "15 ml",
        "0.5 oz",
        "orgeat"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "lime juice"
      ],
      [
        "To garnish",
        "To garnish",
        "mint"
      ]
    ],
    "steps": [
      "Shake rum, curaçao, orgeat, and lime with ice.",
      "Pour over crushed ice and garnish with mint."
    ],
    "description": "Aged rum, almond, and orange with a tart lime finish.",
    "label": "The hearts collection",
    "profile": "Aged rum, almond, and orange with a tart lime finish.",
    "glass": "Rocks glass",
    "style": "citrus",
    "tip": "Orgeat usually contains almonds; check the label when serving guests."
  },
  {
    "id": "pi-a-colada",
    "name": "Piña Colada",
    "rank": "4",
    "suit": "♥",
    "category": "rum",
    "spirit": "White rum",
    "shape": "hurricane",
    "color": "#f0dda3",
    "method": "Blended",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "white rum"
      ],
      [
        "60 ml",
        "2 oz",
        "pineapple juice"
      ],
      [
        "45 ml",
        "1.5 oz",
        "coconut cream"
      ],
      [
        "1",
        "1",
        "pineapple wedge"
      ]
    ],
    "steps": [
      "Blend rum, pineapple juice, and coconut cream with ice until smooth.",
      "Pour into a glass and garnish with pineapple."
    ],
    "description": "Creamy coconut and pineapple with white rum.",
    "label": "The hearts collection",
    "profile": "Creamy coconut and pineapple with white rum.",
    "glass": "Hurricane glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "dark-n-stormy",
    "name": "Dark ’n’ Stormy",
    "rank": "5",
    "suit": "♥",
    "category": "rum",
    "spirit": "Dark rum",
    "shape": "tall",
    "color": "#bd8a3a",
    "method": "Built",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "dark rum"
      ],
      [
        "120 ml",
        "4 oz",
        "ginger beer"
      ],
      [
        "15 ml",
        "0.5 oz",
        "lime juice"
      ],
      [
        "1",
        "1",
        "lime wedge"
      ]
    ],
    "steps": [
      "Build rum and lime over ice in a tall glass.",
      "Top with ginger beer, stir gently, and garnish with lime."
    ],
    "description": "Dark rum and ginger with a refreshing lime edge.",
    "label": "The hearts collection",
    "profile": "Dark rum and ginger with a refreshing lime edge.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "moscow-mule-hearts",
    "name": "Moscow Mule",
    "rank": "6",
    "suit": "♥",
    "category": "vodka",
    "spirit": "Vodka",
    "shape": "mug",
    "color": "#c79c55",
    "method": "Built",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "vodka"
      ],
      [
        "120 ml",
        "4 oz",
        "ginger beer"
      ],
      [
        "15 ml",
        "0.5 oz",
        "lime juice"
      ],
      [
        "To garnish",
        "To garnish",
        "lime and mint"
      ]
    ],
    "steps": [
      "Build vodka and lime juice in an ice-filled copper mug.",
      "Add ginger beer, stir gently, and garnish with lime and mint."
    ],
    "description": "The heart-suit Mule, finished with lime and mint.",
    "label": "The hearts collection",
    "profile": "The heart-suit Mule, finished with lime and mint.",
    "glass": "Copper mug",
    "style": "citrus",
    "tip": "This card appears in the hearts suit but uses vodka, so it is listed under the vodka filter."
  },
  {
    "id": "hemingway-daiquiri",
    "name": "Hemingway Daiquiri",
    "rank": "7",
    "suit": "♥",
    "category": "rum",
    "spirit": "White rum",
    "shape": "coupe",
    "color": "#e5baa6",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "white rum"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "lime juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "grapefruit juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "maraschino liqueur"
      ]
    ],
    "steps": [
      "Shake all ingredients vigorously with ice.",
      "Strain into a chilled coupe."
    ],
    "description": "A dry, citrus-led daiquiri with grapefruit and cherry.",
    "label": "The hearts collection",
    "profile": "A dry, citrus-led daiquiri with grapefruit and cherry.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "planter-s-punch",
    "name": "Planter’s Punch",
    "rank": "8",
    "suit": "♥",
    "category": "rum",
    "spirit": "Dark rum",
    "shape": "tall",
    "color": "#b5753c",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "dark rum"
      ],
      [
        "30 ml",
        "1 oz",
        "lime juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "simple syrup"
      ],
      [
        "2 dashes",
        "2 dashes",
        "Angostura bitters"
      ]
    ],
    "steps": [
      "Shake all ingredients with ice.",
      "Pour over crushed ice in a tall glass."
    ],
    "description": "Dark rum and lime with an aromatic bitters finish.",
    "label": "The hearts collection",
    "profile": "Dark rum and lime with an aromatic bitters finish.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "hurricane",
    "name": "Hurricane",
    "rank": "9",
    "suit": "♥",
    "category": "rum",
    "spirit": "White & dark rum",
    "shape": "hurricane",
    "color": "#df8362",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "white rum"
      ],
      [
        "60 ml",
        "2 oz",
        "dark rum"
      ],
      [
        "60 ml",
        "2 oz",
        "passion fruit juice"
      ],
      [
        "30 ml",
        "1 oz",
        "lime juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "grenadine"
      ]
    ],
    "steps": [
      "Shake all ingredients with ice.",
      "Serve over fresh ice in a large hurricane glass."
    ],
    "description": "A generous rum punch with passion fruit and lime.",
    "label": "The hearts collection",
    "profile": "A generous rum punch with passion fruit and lime.",
    "glass": "Hurricane glass",
    "style": "citrus",
    "tip": "This card makes a large serving; choose a large glass or divide between two smaller glasses."
  },
  {
    "id": "caipirinha",
    "name": "Caipirinha",
    "rank": "10",
    "suit": "♥",
    "category": "other",
    "spirit": "Cachaça",
    "shape": "rocks",
    "color": "#cbd096",
    "method": "Muddled",
    "ingredients": [
      [
        "15 ml",
        "0.5 oz",
        "sugar"
      ],
      [
        "1",
        "1",
        "lime, quartered"
      ],
      [
        "60 ml",
        "2 oz",
        "cachaça"
      ],
      [
        "To fill",
        "To fill",
        "crushed ice"
      ]
    ],
    "steps": [
      "Muddle the lime and sugar in a rocks glass.",
      "Add cachaça and crushed ice, then stir."
    ],
    "description": "Fresh muddled lime and sugar with Brazilian cachaça.",
    "label": "The hearts collection",
    "profile": "Fresh muddled lime and sugar with Brazilian cachaça.",
    "glass": "Rocks glass",
    "style": "citrus",
    "tip": "The card omits the cachaça amount; 2 oz / 60 ml is an added preparation measure. Sugar is shown as a volume measure, as on the card."
  },
  {
    "id": "jack-rose",
    "name": "Jack Rose",
    "rank": "J",
    "suit": "♥",
    "category": "other",
    "spirit": "Applejack",
    "shape": "coupe",
    "color": "#d78b8c",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "applejack"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "lemon juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "grenadine"
      ]
    ],
    "steps": [
      "Shake all ingredients with ice.",
      "Strain into a chilled cocktail glass."
    ],
    "description": "Apple brandy, lemon, and a blush of grenadine.",
    "label": "The hearts collection",
    "profile": "Apple brandy, lemon, and a blush of grenadine.",
    "glass": "Chilled coupe",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "ti-punch",
    "name": "Ti’ Punch",
    "rank": "Q",
    "suit": "♥",
    "category": "rum",
    "spirit": "Rhum agricole",
    "shape": "rocks",
    "color": "#c5a65d",
    "method": "Stirred",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "rhum agricole"
      ],
      [
        "15 ml",
        "0.5 oz",
        "cane syrup"
      ],
      [
        "1",
        "1",
        "lime disc"
      ]
    ],
    "steps": [
      "Squeeze the lime disc into a rocks glass and drop it in.",
      "Add cane syrup and rhum agricole, then stir."
    ],
    "description": "Grassy agricole rum with cane syrup and a little lime.",
    "label": "The hearts collection",
    "profile": "Grassy agricole rum with cane syrup and a little lime.",
    "glass": "Rocks glass",
    "style": "bold",
    "tip": "Traditionally served with little or no ice; adjust to your preference."
  },
  {
    "id": "mojito",
    "name": "Mojito",
    "rank": "K",
    "suit": "♥",
    "category": "rum",
    "spirit": "White rum",
    "shape": "tall",
    "color": "#c6d99e",
    "method": "Muddled",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "white rum"
      ],
      [
        "30 ml",
        "1 oz",
        "fresh lime juice"
      ],
      [
        "2 tsp",
        "2 tsp",
        "sugar"
      ],
      [
        "6–8",
        "6–8",
        "mint leaves"
      ],
      [
        "To top",
        "To top",
        "soda water"
      ]
    ],
    "steps": [
      "Gently muddle mint with sugar and lime juice.",
      "Add rum and ice, top with soda water, and stir gently."
    ],
    "description": "Cool mint, fresh lime, and sparkling white rum.",
    "label": "The hearts collection",
    "profile": "Cool mint, fresh lime, and sparkling white rum.",
    "glass": "Highball glass",
    "style": "citrus",
    "tip": "Use fresh ice and chill the glass before serving."
  },
  {
    "id": "zombie",
    "name": "Zombie",
    "rank": "JOKER",
    "suit": "★",
    "category": "rum",
    "spirit": "Mixed rum",
    "shape": "tiki",
    "color": "#b77b39",
    "method": "Shaken",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "white rum"
      ],
      [
        "45 ml",
        "1.5 oz",
        "gold rum"
      ],
      [
        "30 ml",
        "1 oz",
        "dark rum (151 proof)"
      ],
      [
        "30 ml",
        "1 oz",
        "lime juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "pineapple juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "passion fruit syrup"
      ],
      [
        "1 tsp",
        "1 tsp",
        "brown sugar"
      ],
      [
        "1 dash",
        "1 dash",
        "bitters"
      ]
    ],
    "steps": [
      "Shake all ingredients with ice until the sugar is dissolved.",
      "Pour into a tiki mug over fresh ice and garnish with tropical fruit."
    ],
    "description": "Three rums, tropical fruit, and a wild-card finish.",
    "label": "The wild cards",
    "profile": "Three rums, tropical fruit, and a wild-card finish.",
    "glass": "Tiki mug",
    "style": "citrus",
    "tip": "This is a strong, large serving, including 151-proof rum; it can be divided into smaller portions."
  },
  {
    "id": "death-in-the-afternoon",
    "name": "Death in the Afternoon",
    "rank": "JOKER",
    "suit": "★",
    "category": "other",
    "spirit": "Absinthe",
    "shape": "flute",
    "color": "#d5d899",
    "method": "Built",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "absinthe"
      ],
      [
        "120 ml",
        "4 oz",
        "Champagne"
      ]
    ],
    "steps": [
      "Pour absinthe into a large flute.",
      "Slowly top with chilled Champagne."
    ],
    "description": "Anise and Champagne in a pale, sparkling wild card.",
    "label": "The wild cards",
    "profile": "Anise and Champagne in a pale, sparkling wild card.",
    "glass": "Champagne flute",
    "style": "citrus",
    "tip": "Pour slowly to control the foam. Choose a glass that holds at least 165 ml with room to spare."
  }
];
// Original, self-contained SVG illustrations. Unique IDs allow several pours per page.
function illustration(id, suffix) {
 const drink=cocktails.find(c=>c.id===id);
 if(!['old-fashioned','manhattan','whiskey-sour'].includes(id)) return deckIllustration(drink,suffix);
 const key=id+'-'+suffix, coupe=id==='manhattan', sour=id==='whiskey-sour';
 return `<svg class="drink-art" viewBox="0 0 260 235" role="img" aria-label="Illustration of ${cocktails.find(c=>c.id===id).name}"><defs><linearGradient id="amber-${key}" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="${coupe?'#cf6e2e':'#f4be47'}" stop-opacity=".8"/><stop offset=".5" stop-color="${coupe?'#a82b12':'#d87920'}"/><stop offset="1" stop-color="#81351d" stop-opacity=".85"/></linearGradient><filter id="wash-${key}" x="-15%" y="-15%" width="130%" height="130%"><feTurbulence type="fractalNoise" baseFrequency=".045" numOctaves="3" seed="8" result="grain"/><feDisplacementMap in="SourceGraphic" in2="grain" scale="2.5"/></filter><radialGradient id="shadow-${key}"><stop stop-color="#a7733c" stop-opacity=".24"/><stop offset="1" stop-color="#cfa76c" stop-opacity="0"/></radialGradient></defs><ellipse cx="132" cy="209" rx="88" ry="20" fill="url(#shadow-${key})"/><g filter="url(#wash-${key})" stroke-linejoin="round">${coupe?`<path d="M66 65 Q75 130 126 140 L126 195 Q105 198 100 205 Q130 215 160 205 Q156 199 135 195 L135 140 Q182 132 195 65Z" fill="#fff9df" fill-opacity=".25" stroke="#8f7652" stroke-width="1.4"/><path d="M73 80 Q85 133 131 134 Q172 128 188 80Z" fill="url(#amber-${key})"/><ellipse cx="131" cy="80" rx="57" ry="9" fill="#c66b33" stroke="#945329"/><path d="M82 91 Q96 120 115 125 M130 148 L130 193" fill="none" stroke="#fffcdf" stroke-width="3" opacity=".7"/><path d="M156 112 L190 43" stroke="#816042" stroke-width="2"/><circle cx="151" cy="114" r="12" fill="#76231d"/><circle cx="147" cy="110" r="4" fill="#cc6a45" opacity=".7"/><ellipse cx="131" cy="65" rx="64" ry="11" fill="none" stroke="#9e896a"/>`:`<path d="M72 72 L84 192 Q130 211 178 192 L190 72Z" fill="#fff8df" fill-opacity=".35" stroke="#917750" stroke-width="1.5"/><path d="M78 104 L87 186 Q132 200 175 186 L184 103Z" fill="url(#amber-${key})"/><ellipse cx="131" cy="104" rx="53" ry="12" fill="${sour?'#f6e4b1':'#df9a39'}"/><g fill="#fff4c4" fill-opacity=".44" stroke="#fff8dd" stroke-opacity=".7"><rect x="91" y="100" width="36" height="37" rx="6" transform="rotate(-14 108 118)"/><rect x="133" y="111" width="35" height="40" rx="6" transform="rotate(17 151 131)"/><rect x="99" y="151" width="39" height="30" rx="5" transform="rotate(9 118 166)"/></g><path d="M82 81 L92 184 M179 82 L169 184" stroke="#fffbea" stroke-width="4" opacity=".65"/><ellipse cx="131" cy="73" rx="59" ry="12" fill="none" stroke="#99835f"/><path d="M88 193 Q130 208 176 193" stroke="#fff7df" stroke-width="4" fill="none"/>${sour?'<ellipse cx="131" cy="94" rx="53" ry="13" fill="#fff4d9" opacity=".95"/><path d="M162 87 L185 43 A41 41 0 0 0 139 57Z" fill="#e99a2a" stroke="#ba652a"/><path d="M162 82 L180 48 A33 33 0 0 0 145 58Z" fill="#f3ce77"/><circle cx="127" cy="88" r="10" fill="#973829"/><path d="M128 80 Q135 60 146 61" fill="none" stroke="#64583a" stroke-width="2"/>':'<path d="M150 116 Q181 67 151 54 Q131 47 120 66 Q110 83 136 84" fill="none" stroke="#c26723" stroke-width="12"/><path d="M150 112 Q177 67 150 58 Q134 52 124 67" fill="none" stroke="#f5b43b" stroke-width="7"/>'}`}</g></svg>`;
}
const grid=document.querySelector('#cards'), search=document.querySelector('#search'), dialog=document.querySelector('#recipe');
let activeFilter='all',activeSpirit='all',current=null,unit=0,lastTrigger=null;
document.querySelector('#hero-drink').innerHTML=illustration('old-fashioned','hero');
function renderCards(){
 const query=search.value.trim().toLowerCase();
 const shown=cocktails.filter(c=>(activeFilter==='all'||(activeFilter==='bold'?c.style==='bold':c.ingredients.some(i=>/lemon juice|lime juice|grapefruit/i.test(i[2]))))&&(activeSpirit==='all'||c.category===activeSpirit)&&[c.name,c.spirit,c.profile,c.suit,c.rank,...c.ingredients.map(i=>i[2])].join(' ').toLowerCase().includes(query));
 grid.innerHTML=shown.map(c=>`<article class="cocktail-card ${['♥','♦'].includes(c.suit)?'red-suit':''}"><span class="corner" aria-hidden="true">${c.rank==='JOKER'?'Jkr':c.rank}<br>${c.suit}</span><p class="card-kicker">${c.label}</p><h3>${c.name}</h3>${illustration(c.id,'card')}<p class="description">${c.description}</p><div class="tags">${c.spirit} &nbsp; / &nbsp; ${c.method} &nbsp; / &nbsp; 5 min</div><button class="recipe-button" data-recipe="${c.id}" aria-label="View ${c.name} recipe"><span aria-hidden="true">${c.suit}</span> Discover the recipe <span aria-hidden="true">${c.suit}</span></button></article>`).join('');
 document.querySelector('#results').textContent=`${shown.length} OF ${cocktails.length} CARDS`;
 document.querySelector('#empty').hidden=shown.length!==0;
}
function renderIngredients(){document.querySelector('#ingredient-list').innerHTML=current.ingredients.map(i=>`<li><strong>${i[unit]}</strong> ${i[2]}</li>`).join('');}
function openRecipe(id,trigger){
 current=cocktails.find(c=>c.id===id);if(!current)return;lastTrigger=trigger;unit=0;
 document.querySelector('#recipe-content').innerHTML=`<div class="detail-top"><div><p class="eyebrow">${current.rank} ${current.suit} &nbsp; ${current.label}</p><h2 id="recipe-title">${current.name}</h2><p>${current.profile}<br>1 card recipe · About 5 minutes · ${current.glass}</p></div>${illustration(id,'detail')}</div><div class="unit-toggle" role="group" aria-label="Recipe measurement units"><button data-unit="0" aria-pressed="true">ml</button><button data-unit="1" aria-pressed="false">US oz</button></div><div class="recipe-columns"><section><h3>Ingredients</h3><ul class="ingredients" id="ingredient-list"></ul></section><section><h3>The ritual</h3><ol class="steps">${current.steps.map(s=>`<li>${s}</li>`).join('')}</ol></section></div><p class="tip">Bartender’s note — ${current.tip}</p>`;
 renderIngredients();dialog.showModal();document.body.classList.add('modal-open');dialog.querySelector('.close').focus();
}
grid.addEventListener('click',e=>{const b=e.target.closest('[data-recipe]');if(b)openRecipe(b.dataset.recipe,b);});
search.addEventListener('input',renderCards);
document.querySelector('#spirit').addEventListener('change',e=>{activeSpirit=e.target.value;renderCards();});
document.querySelector('.filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;activeFilter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(el=>{el.classList.toggle('active',el===b);el.setAttribute('aria-pressed',String(el===b));});renderCards();});
document.querySelector('#reset').addEventListener('click',()=>{search.value='';activeSpirit='all';document.querySelector('#spirit').value='all';document.querySelector('[data-filter="all"]').click();search.focus();});
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{const b=e.target.closest('[data-unit]');if(b){unit=Number(b.dataset.unit);dialog.querySelectorAll('[data-unit]').forEach(el=>el.setAttribute('aria-pressed',String(el===b)));renderIngredients();}if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');lastTrigger?.focus();});
renderCards();

// Additional glass silhouettes for the full deck. All artwork is local SVG.
function deckIllustration(c,suffix){
 const key=c.id+'-'+suffix, color=c.color;
 const defs=`<defs><linearGradient id="pour-${key}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${color}" stop-opacity=".55"/><stop offset=".6" stop-color="${color}"/><stop offset="1" stop-color="${color}" stop-opacity=".8"/></linearGradient></defs>`;
 const liquid=`url(#pour-${key})`;
 const ice='<g fill="#fff9e3" fill-opacity=".4" stroke="#fff8df" stroke-opacity=".6"><rect x="103" y="100" width="28" height="31" rx="5" transform="rotate(-12 117 115)"/><rect x="133" y="125" width="25" height="29" rx="5" transform="rotate(16 145 139)"/><rect x="105" y="155" width="28" height="24" rx="4"/></g>';
 let glass='';
 if(c.shape==='coupe')glass=`<path d="M66 72 Q80 137 126 141 L126 197 Q105 199 102 206 Q130 214 158 206 Q154 200 134 197 L134 141 Q180 134 194 72Z" fill="#fff9e0" fill-opacity=".3" stroke="#98805e"/><path d="M73 86 Q90 135 130 135 Q172 130 186 86Z" fill="${liquid}"/><ellipse cx="130" cy="86" rx="56" ry="8" fill="${color}" opacity=".7"/><path d="M84 94 Q98 122 116 126 M130 146 L130 194" fill="none" stroke="#fff9e3" stroke-width="3" opacity=".8"/>`;
 else if(c.shape==='flute')glass=`<path d="M106 40 Q99 141 126 151 L126 198 L108 206 Q130 213 153 206 L135 198 L135 151 Q161 141 154 40Z" fill="#fff9e0" fill-opacity=".3" stroke="#98805e"/><path d="M109 64 Q108 139 130 145 Q153 138 151 64Z" fill="${liquid}"/><g fill="#fffce7" opacity=".7"><circle cx="121" cy="100" r="2"/><circle cx="135" cy="85" r="2"/><circle cx="133" cy="124" r="2"/><circle cx="124" cy="74" r="2"/></g>`;
 else if(c.shape==='hurricane')glass=`<path d="M102 42 Q122 75 97 110 Q75 159 126 174 L126 198 L107 207 Q130 214 155 207 L135 198 L135 174 Q186 158 163 110 Q139 74 158 42Z" fill="#fff9e0" fill-opacity=".3" stroke="#98805e"/><path d="M112 65 Q127 83 105 118 Q86 156 130 168 Q176 156 155 118 Q134 82 149 65Z" fill="${liquid}"/>`;
 else if(c.shape==='mug')glass=`<path d="M169 91 Q213 76 206 130 Q202 157 173 159" fill="none" stroke="#a76a3b" stroke-width="9"/><path d="M88 72 Q74 113 89 186 Q130 209 174 186 Q188 113 172 72Z" fill="#bd8152" stroke="#825c3b" stroke-width="2"/><path d="M98 89 Q87 139 103 184" fill="none" stroke="#e9bb83" stroke-width="8" opacity=".7"/><ellipse cx="130" cy="74" rx="42" ry="10" fill="${liquid}"/>`;
 else if(c.shape==='julep')glass=`<path d="M84 80 L98 195 Q130 207 163 195 L177 80Z" fill="#b8b5a3" stroke="#817e70"/><path d="M99 92 L109 190 M155 92 L150 190" stroke="#f5efd9" stroke-width="5" opacity=".7"/><ellipse cx="130" cy="81" rx="46" ry="10" fill="#f0e7d1"/>`;
 else if(c.shape==='coffee')glass=`<path d="M172 85 Q207 80 200 126 Q195 149 173 145" fill="none" stroke="#a39577" stroke-width="6"/><path d="M82 64 L91 151 Q98 173 126 176 L126 197 L108 207 L153 207 L135 197 L135 176 Q164 173 170 151 L178 64Z" fill="#fff9e0" fill-opacity=".3" stroke="#98805e"/><path d="M88 81 L97 148 Q130 182 164 148 L172 81Z" fill="${liquid}"/><ellipse cx="130" cy="81" rx="42" ry="11" fill="#f7e9cc"/>`;
 else if(c.shape==='tiki')glass=`<path d="M88 60 L94 199 Q130 212 168 199 L175 60Z" fill="#ae7546" stroke="#765034" stroke-width="2"/><path d="M99 105 L122 115 L101 125 M161 105 L138 115 L160 125 M130 112 L120 151 L140 151Z M105 166 Q130 183 154 166 L149 192 L110 192Z" fill="#765034" stroke="#d9a369" stroke-width="3"/><ellipse cx="131" cy="61" rx="43" ry="10" fill="${liquid}"/>`;
 else {const tall=c.shape==='tall',top=tall?42:78;glass=`<path d="M87 ${top} L96 195 Q130 209 165 195 L174 ${top}Z" fill="#fff9e0" fill-opacity=".3" stroke="#98805e"/><path d="M92 ${top+20} L101 189 Q131 201 160 189 L169 ${top+20}Z" fill="${liquid}"/>${ice}<path d="M96 ${top+8} L105 187 M165 ${top+8} L157 184" stroke="#fff9df" stroke-width="3" opacity=".6"/>`;}
 const names=c.ingredients.map(i=>i[2]).join(' ');
 let garnish='';
 if(/mint/.test(names))garnish+='<g fill="#6a8b47" stroke="#4b6c35"><path d="M144 79 Q139 47 157 42 Q172 57 144 79Z"/><path d="M144 79 Q112 66 119 49 Q140 46 144 79Z"/><path d="M147 78 Q162 55 179 62 Q175 82 147 78Z"/></g>';
 if(/lime|lemon|orange|grapefruit/.test(names)){const peel=/lime/.test(names)?'#7e994d':'#d7a03d';garnish+=`<g transform="translate(165 65)"><circle r="22" fill="${peel}"/><circle r="18" fill="#efe2a3"/><path d="M0-17V17 M-17 0H17 M-12-12L12 12 M12-12L-12 12" stroke="${peel}" opacity=".65"/></g>`;}
 if(/cherry/.test(names))garnish+='<circle cx="111" cy="94" r="9" fill="#8b302d"/><path d="M111 86 Q119 65 130 68" fill="none" stroke="#5e6e3c" stroke-width="2"/>';
 if(c.id==='espresso-martini')garnish='<ellipse cx="130" cy="85" rx="55" ry="8" fill="#d7ba8b"/><g fill="#503527"><ellipse cx="119" cy="84" rx="5" ry="3"/><ellipse cx="132" cy="88" rx="5" ry="3"/><ellipse cx="141" cy="81" rx="5" ry="3"/></g>';
 if(c.id==='white-russian')garnish+='<path d="M92 100 Q130 118 170 100 L167 133 Q140 118 111 142Z" fill="#f4e5c9" opacity=".9"/>';
 if(c.id==='new-york-sour')garnish+='<path d="M92 98 L169 98 L167 117 Q130 126 94 117Z" fill="#792e36" opacity=".9"/>';
 return `<svg class="drink-art" viewBox="0 0 260 235" role="img" aria-label="Illustration of ${c.name}">${defs}<ellipse cx="131" cy="210" rx="65" ry="10" fill="#ad8554" opacity=".13"/><g stroke-linejoin="round">${glass}${garnish}</g></svg>`;
}

