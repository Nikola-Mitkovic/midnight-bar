'use strict';
// Live recipe data. Four suits have researched, two-sided cards.
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
        "45 ml",
        "1.5 oz",
        "bourbon or rye whiskey"
      ],
      [
        "1",
        "1",
        "sugar cube"
      ],
      [
        "A few dashes",
        "A few dashes",
        "Angostura bitters"
      ],
      [
        "A few dashes",
        "A few dashes",
        "water"
      ],
      [
        "To garnish",
        "To garnish",
        "orange zest and cocktail cherry"
      ]
    ],
    "steps": [
      "Dissolve sugar with bitters and water. Add ice and whiskey; stir and garnish."
    ],
    "description": "Rich whiskey, aromatic bitters, and a little sweetness.",
    "label": "The spades collection",
    "profile": "Rich whiskey, aromatic bitters, and a little sweetness.",
    "glass": "Rocks glass",
    "tip": "The peel has a speaking part. Let it introduce the drink.",
    "tags": [
      "Spirit-forward",
      "Sweet",
      "Spiced"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Dissolve sugar with bitters and water. Add ice and whiskey; stir and garnish.",
    "detailedSteps": [
      "Wet the sugar cube with bitters and a little water in a rocks glass.",
      "Crush and stir until the sugar dissolves; grit at the bottom means it needs more mixing.",
      "Add fresh ice and whiskey. Stir gently until the glass feels cold.",
      "Bend orange zest over the surface to release its oils, then add it with a cherry."
    ],
    "recipeSources": [
      {
        "title": "IBA · Old Fashioned",
        "url": "https://iba-world.com/iba-cocktail/old-fashioned/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "old-fashioned",
    "learn": "Expressing citrus means bending the peel, coloured side toward the drink, to spray aromatic oils onto its surface.",
    "expect": "A slow, whiskey-led sip: oak, caramel, orange oil, and baking spice, with sweetness rounding the edges. Try alongside toasted pecans.",
    "recipeVersion": "IBA’s 45 ml whiskey replaces the photographed 60 ml. Orange zest and cherry follow its garnish options.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Barspoon",
      "Muddler"
    ]
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
        "50 ml",
        "1.67 oz",
        "rye whiskey"
      ],
      [
        "20 ml",
        "0.67 oz",
        "sweet red vermouth"
      ],
      [
        "1 dash",
        "1 dash",
        "Angostura bitters"
      ],
      [
        "1",
        "1",
        "cocktail cherry"
      ]
    ],
    "steps": [
      "Stir whiskey, vermouth, and bitters with ice; strain into a chilled coupe and add a cherry."
    ],
    "description": "Silky rye and sweet vermouth, finished with cherry.",
    "label": "The spades collection",
    "profile": "Silky rye and sweet vermouth, finished with cherry.",
    "glass": "Chilled coupe",
    "tip": "A cherry is a garnish, not a substitute for good vermouth.",
    "tags": [
      "Spirit-forward",
      "Spiced"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Stir whiskey, vermouth, and bitters with ice; strain into a chilled coupe and add a cherry.",
    "detailedSteps": [
      "Chill the serving coupe before mixing.",
      "Measure rye, vermouth, and bitters into a mixing glass, then fill with ice.",
      "Stir smoothly for about 20–30 seconds, until cold and slightly diluted.",
      "Strain into the empty chilled coupe and garnish with the cherry."
    ],
    "recipeSources": [
      {
        "title": "IBA · Manhattan",
        "url": "https://iba-world.com/iba-cocktail/manhattan/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "manhattan",
    "learn": "Stirring chills and dilutes without the aeration of shaking, keeping this spirit-led drink clear and silky.",
    "expect": "Rye spice meets dark fruit and herbal sweetness, with a gently bitter finish. A small piece of aged cheddar makes a savory contrast.",
    "recipeVersion": "Uses IBA 50/20 ml measures and one dash of bitters instead of the card’s 60/30 ml and two dashes.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Mixing glass",
      "Barspoon",
      "Strainer"
    ]
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
        "45 ml",
        "1.5 oz",
        "bourbon whiskey"
      ],
      [
        "25 ml",
        "0.83 oz",
        "fresh lemon juice"
      ],
      [
        "20 ml",
        "0.67 oz",
        "simple syrup"
      ],
      [
        "A few drops, optional",
        "A few drops, optional",
        "pasteurized egg white"
      ],
      [
        "To garnish",
        "To garnish",
        "half orange slice and cocktail cherry"
      ]
    ],
    "steps": [
      "Shake bourbon, lemon, syrup, and optional egg white with ice. Strain over fresh ice; garnish."
    ],
    "description": "Golden bourbon balanced with fresh lemon.",
    "label": "The spades collection",
    "profile": "Golden bourbon balanced with fresh lemon.",
    "glass": "Rocks glass",
    "tip": "Fresh lemon gets the lead role. Bourbon still gets the applause.",
    "tags": [
      "Citrusy",
      "Sour"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Shake bourbon, lemon, syrup, and optional egg white with ice. Strain over fresh ice; garnish.",
    "detailedSteps": [
      "Measure bourbon, fresh lemon juice, and syrup into a shaker. Add pasteurized egg white if using.",
      "Fill with ice, close firmly, and shake briskly for about 15 seconds; shake especially well with egg white.",
      "Strain into a rocks glass containing fresh ice.",
      "Add orange and cherry. The illustrated foam is most noticeable when egg white is included."
    ],
    "recipeSources": [
      {
        "title": "IBA · Whiskey Sour",
        "url": "https://iba-world.com/iba-cocktail/whiskey-sour/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "whiskey-sour",
    "learn": "Egg white adds foam and a softer texture rather than sweetness. The drink also works without it.",
    "expect": "Bright lemon first, then rounded bourbon and a sweet-tart finish. With egg white it feels softer and silkier; without, more direct and crisp.",
    "recipeVersion": "Uses IBA 45/25/20 ml measures; optional egg white is specified as pasteurized for home mixing.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ]
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
        "60 ml",
        "2 oz",
        "bourbon whiskey"
      ],
      [
        "4 sprigs",
        "4 sprigs",
        "fresh mint"
      ],
      [
        "1 tsp",
        "1 tsp",
        "powdered sugar"
      ],
      [
        "2 tsp",
        "2 tsp",
        "water"
      ],
      [
        "To fill",
        "To fill",
        "cracked ice"
      ],
      [
        "1 sprig",
        "1 sprig",
        "mint for garnish"
      ]
    ],
    "steps": [
      "Gently press mint with sugar and water. Add cracked ice and bourbon; stir until frosty."
    ],
    "description": "Bourbon over crushed ice with fragrant fresh mint.",
    "label": "The spades collection",
    "profile": "Bourbon over crushed ice with fragrant fresh mint.",
    "glass": "Metal julep cup",
    "tip": "Hold the cup by the rim and let the frost do its thing.",
    "tags": [
      "Refreshing",
      "Herbal"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Gently press mint with sugar and water. Add cracked ice and bourbon; stir until frosty.",
    "detailedSteps": [
      "Place mint, sugar, and water in a metal julep cup.",
      "Press gently with a muddler to release aroma without shredding the leaves.",
      "Fill with cracked ice, add bourbon, and stir until the cup feels very cold.",
      "Top up the ice mound and tuck a fresh mint sprig beside a short straw, if using."
    ],
    "recipeSources": [
      {
        "title": "IBA · Mint Julep",
        "url": "https://iba-world.com/iba-cocktail/mint-julep/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "mint-julep",
    "learn": "Cracked ice packs closely around the drink and chills it quickly. Top it up after stirring as the first ice settles.",
    "expect": "Cold mint aroma over gently sweet bourbon. It is refreshing but still whiskey-forward, without citrus tartness. Try with smoky grilled food.",
    "recipeVersion": "Uses IBA 60 ml bourbon, mint sprigs, powdered sugar, and water in place of the card’s syrup formula.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Muddler",
      "Barspoon"
    ]
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
        "45 ml",
        "1.5 oz",
        "Sazerac rye whiskey"
      ],
      [
        "1",
        "1",
        "sugar cube"
      ],
      [
        "3 dashes",
        "3 dashes",
        "Peychaud’s bitters"
      ],
      [
        "7.5 ml",
        "0.25 oz",
        "Herbsaint, for rinsing (discard excess)"
      ],
      [
        "To garnish",
        "To garnish",
        "lemon peel"
      ]
    ],
    "steps": [
      "Stir rye, sugar, and bitters with ice. Strain into a chilled Herbsaint-rinsed glass; add lemon peel."
    ],
    "description": "Rye, anise, and bitters in a New Orleans classic.",
    "label": "The spades collection",
    "profile": "Rye, anise, and bitters in a New Orleans classic.",
    "glass": "Chilled rocks glass, no serving ice",
    "tip": "The anise should arrive as perfume, not take over the room.",
    "tags": [
      "Spirit-forward",
      "Herbal",
      "Spiced"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Stir rye, sugar, and bitters with ice. Strain into a chilled Herbsaint-rinsed glass; add lemon peel.",
    "detailedSteps": [
      "Chill one rocks glass with ice. In another, crush the sugar cube with Peychaud’s bitters.",
      "Add rye, stir to dissolve the sugar, then add ice and stir until chilled.",
      "Empty the first glass. Swirl Herbsaint around its inside and discard the excess.",
      "Strain the whiskey mixture into the coated glass without serving ice. Express lemon peel over it and garnish."
    ],
    "recipeSources": [
      {
        "title": "Sazerac House · Official recipe (PDF)",
        "url": "https://www.sazerachouse.com/wp-content/uploads/2025/05/Sazerac_Pamphlet_SazHouse_RGB-Pages.pdf",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "sazerac",
    "learn": "A rinse coats the glass with a thin film of aroma. The measured rinsing spirit is not a full ingredient pour: discard the excess.",
    "expect": "Concentrated rye spice, lemon oil, and a distinctive anise aroma. It is a short, lightly sweet sipping drink with no citrus juice.",
    "recipeVersion": "Follows Sazerac House’s rye-and-Herbsaint version, preserving the whiskey suit. IBA instead specifies cognac and absinthe. The card’s syrup is replaced by a sugar cube.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Two rocks glasses",
      "Muddler",
      "Barspoon",
      "Strainer"
    ]
  },
  {
    "id": "boulevardier",
    "name": "Boulevardier",
    "rank": "6",
    "suit": "♠",
    "category": "whiskey",
    "spirit": "Bourbon",
    "shape": "coupe",
    "color": "#b84325",
    "method": "Stirred",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "bourbon or rye whiskey"
      ],
      [
        "30 ml",
        "1 oz",
        "Campari"
      ],
      [
        "30 ml",
        "1 oz",
        "sweet red vermouth"
      ],
      [
        "To garnish",
        "To garnish",
        "orange zest"
      ]
    ],
    "steps": [
      "Stir whiskey, Campari, and vermouth with ice. Strain into a chilled coupe; add orange zest."
    ],
    "description": "A warming whiskey turn on a bitter Italian classic.",
    "label": "The spades collection",
    "profile": "A warming whiskey turn on a bitter Italian classic.",
    "glass": "Chilled coupe",
    "tip": "For the friend who always steals the darkest chocolate.",
    "tags": [
      "Spirit-forward",
      "Bitter"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Stir whiskey, Campari, and vermouth with ice. Strain into a chilled coupe; add orange zest.",
    "detailedSteps": [
      "Chill a coupe while measuring the ingredients.",
      "Combine whiskey, Campari, and sweet vermouth in a mixing glass full of ice.",
      "Stir smoothly until cold, about 20–30 seconds.",
      "Strain into the empty coupe. Express orange zest over the drink and add it."
    ],
    "recipeSources": [
      {
        "title": "IBA · Boulevardier",
        "url": "https://iba-world.com/iba-cocktail/boulevardier/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "boulevardier",
    "learn": "Serving “up” means chilled and strained without serving ice. It differs from “on the rocks,” which means served over ice.",
    "expect": "Bittersweet orange and herbs wrapped around whiskey warmth. Expect a firmer bitter finish than a Manhattan; salty olives make a useful contrast.",
    "recipeVersion": "Uses IBA 45/30/30 ml and an up serve; the photographed version uses 37.5 ml bourbon and a rocks glass.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Mixing glass",
      "Barspoon",
      "Strainer"
    ]
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
        "50 ml",
        "1.67 oz",
        "Irish whiskey"
      ],
      [
        "120 ml",
        "4 oz",
        "hot black coffee"
      ],
      [
        "50 ml",
        "1.67 oz",
        "fresh cream, chilled"
      ],
      [
        "1 tsp",
        "1 tsp",
        "sugar"
      ]
    ],
    "steps": [
      "Stir whiskey and sugar into hot coffee in a warmed glass. Float chilled cream over a spoon."
    ],
    "description": "Warm coffee and Irish whiskey beneath soft cream.",
    "label": "The spades collection",
    "profile": "Warm coffee and Irish whiskey beneath soft cream.",
    "glass": "Heatproof coffee glass",
    "tip": "Sip through the cream. The spoon has already done its job.",
    "tags": [
      "Creamy",
      "Coffee",
      "Sweet"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Stir whiskey and sugar into hot coffee in a warmed glass. Float chilled cream over a spoon.",
    "detailedSteps": [
      "Warm a heatproof Irish coffee glass with hot water, then empty it.",
      "Add hot coffee, whiskey, and sugar. Stir until the sugar dissolves.",
      "Lightly thicken the chilled cream with a whisk if needed; it should still pour, not hold stiff peaks.",
      "Pour the cream slowly over the back of a spoon just above the coffee. Serve without stirring the layers together."
    ],
    "recipeSources": [
      {
        "title": "IBA · Irish Coffee",
        "url": "https://iba-world.com/iba-cocktail/irish-coffee/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "irish-coffee",
    "learn": "A cream float needs a slow pour close to the surface. Pourable, slightly thick cream is easier to layer than stiff whipped cream.",
    "expect": "Hot, lightly sweet coffee under cool, rich cream, with mellow whiskey warmth. A little shortbread suits its coffee-and-cream character.",
    "recipeVersion": "Uses IBA 50 ml whiskey and 50 ml cream; retains 120 ml coffee. No garnish is specified.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Heatproof glass",
      "Teaspoon",
      "Small whisk"
    ]
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
        "25 ml",
        "0.83 oz",
        "Drambuie"
      ],
      [
        "To garnish",
        "To garnish",
        "lemon zest"
      ]
    ],
    "steps": [
      "Pour Scotch and Drambuie over ice, stir gently, and finish with lemon zest."
    ],
    "description": "Scotch softened by honeyed, herbal Drambuie.",
    "label": "The spades collection",
    "profile": "Scotch softened by honeyed, herbal Drambuie.",
    "glass": "Rocks glass",
    "tip": "A remarkably polished drink for something named after hardware.",
    "tags": [
      "Spirit-forward",
      "Sweet"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Pour Scotch and Drambuie over ice, stir gently, and finish with lemon zest.",
    "detailedSteps": [
      "Fill a rocks glass with fresh ice.",
      "Measure Scotch and Drambuie directly into the glass.",
      "Stir gently until the drink is evenly mixed and cold.",
      "Express a strip of lemon zest above the drink and drop it in."
    ],
    "recipeSources": [
      {
        "title": "IBA · Rusty Nail",
        "url": "https://iba-world.com/iba-cocktail/rusty-nail/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "rusty-nail",
    "learn": "Building means mixing in the serving glass. With two still ingredients, a spoon is enough; a shaker adds unnecessary aeration.",
    "expect": "Honeyed sweetness, warming whisky, and an herbal finish. Richer and sweeter than a plain Scotch; try a small piece of dark chocolate.",
    "recipeVersion": "Uses IBA 45 ml Scotch and 25 ml Drambuie, slightly more liqueur than the photographed 22.5 ml.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Barspoon"
    ]
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
        "blended Scotch whisky"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "fresh lemon juice"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "honey syrup"
      ],
      [
        "2–3 coin-size slices",
        "2–3 coin-size slices",
        "fresh ginger"
      ],
      [
        "7.5 ml",
        "0.25 oz",
        "Lagavulin 16 or another smoky Islay Scotch, to float"
      ],
      [
        "To garnish",
        "To garnish",
        "candied ginger"
      ]
    ],
    "steps": [
      "Muddle ginger. Shake with blended Scotch, lemon, and honey syrup; fine-strain over ice and float Islay Scotch."
    ],
    "description": "Bright lemon, ginger warmth, and a smoky finish.",
    "label": "The spades collection",
    "profile": "Bright lemon, ginger warmth, and a smoky finish.",
    "glass": "Rocks glass",
    "tip": "A smoky entrance; a ginger encore.",
    "tags": [
      "Citrusy",
      "Smoky",
      "Sour",
      "Spiced"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Muddle ginger. Shake with blended Scotch, lemon, and honey syrup; fine-strain over ice and float Islay Scotch.",
    "detailedSteps": [
      "Press fresh ginger slices in a shaker. Add blended Scotch, lemon, and honey syrup; reserve the Islay Scotch.",
      "Fill with ice and shake firmly until cold.",
      "Strain through a cocktail strainer and a fine sieve into a rocks glass with fresh ice, catching ginger fibres.",
      "Slowly pour the Islay Scotch over a spoon onto the surface. Garnish with candied ginger."
    ],
    "recipeSources": [
      {
        "title": "IBA · Penicillin",
        "url": "https://iba-world.com/iba-cocktail/penicillin/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "penicillin",
    "learn": "Fine-straining uses a second, fine-mesh sieve to catch ginger fibres and small ice chips that pass through a cocktail strainer.",
    "expect": "Lemon brightness and honey give way to fresh ginger heat. The smoky top layer reaches your nose first, rather than dominating every sip.",
    "recipeVersion": "Uses IBA’s fresh ginger plus honey syrup instead of the card’s combined honey-ginger syrup. Lagavulin 16 is the named IBA float; other smoky Islay Scotch is an explicit substitution.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Muddler",
      "Shaker",
      "Strainer",
      "Fine sieve",
      "Barspoon"
    ]
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
        "blended Scotch whisky"
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
      "Stir Scotch, vermouth, and bitters over ice; strain into a chilled coupe and garnish with cherry."
    ],
    "description": "The Manhattan’s Scotch cousin, rich and aromatic.",
    "label": "The spades collection",
    "profile": "The Manhattan’s Scotch cousin, rich and aromatic.",
    "glass": "Chilled coupe",
    "tip": "The Manhattan’s Scottish cousin brought a very good coat.",
    "tags": [
      "Spirit-forward",
      "Spiced"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Stir Scotch, vermouth, and bitters over ice; strain into a chilled coupe and garnish with cherry.",
    "detailedSteps": [
      "Chill a coupe; this cocktail will be served without ice.",
      "Measure Scotch, sweet vermouth, and bitters into a mixing glass filled with ice.",
      "Stir for about 20–30 seconds, keeping the spoon moving smoothly around the glass.",
      "Strain into the coupe and add a cocktail cherry."
    ],
    "recipeSources": [
      {
        "title": "Chivas Regal · Rob Roy",
        "url": "https://www.chivas.com/en-us/cocktails/rob-roy/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "rob-roy",
    "learn": "Changing the base spirit can define a new cocktail: a Rob Roy follows the Manhattan family but uses Scotch rather than rye or bourbon.",
    "expect": "Malt, dark fruit, herbs, and gentle sweetness in a silky sip. Smoke depends on the Scotch you choose; it is not inevitable.",
    "recipeVersion": "Retains the photographed 60/30 ml proportions, matching Chivas’s 2:1 recipe with two dashes of bitters. A coupe replaces its martini glass.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Mixing glass",
      "Barspoon",
      "Strainer"
    ]
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
        "rye whiskey or bourbon"
      ],
      [
        "30 ml",
        "1 oz",
        "fresh lemon juice"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "simple syrup"
      ],
      [
        "A few drops, optional",
        "A few drops, optional",
        "pasteurized egg white"
      ],
      [
        "15 ml",
        "0.5 oz",
        "dry red wine, such as Shiraz or Malbec"
      ],
      [
        "To garnish",
        "To garnish",
        "lemon zest and cocktail cherry"
      ]
    ],
    "steps": [
      "Shake whiskey, lemon, syrup, and optional egg white. Strain over ice, then gently float red wine."
    ],
    "description": "A whiskey sour crowned with a ruby wine float.",
    "label": "The spades collection",
    "profile": "A whiskey sour crowned with a ruby wine float.",
    "glass": "Rocks glass",
    "tip": "The skyline is best poured slowly.",
    "tags": [
      "Citrusy",
      "Sour"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Shake whiskey, lemon, syrup, and optional egg white. Strain over ice, then gently float red wine.",
    "detailedSteps": [
      "Put whiskey, lemon, syrup, and optional pasteurized egg white in a shaker. Keep the wine separate.",
      "Add ice and shake vigorously until cold.",
      "Strain into a chilled rocks glass filled with fresh ice.",
      "Hold a spoon close to the surface and pour the wine slowly over its back. Finish with lemon zest and cherry."
    ],
    "recipeSources": [
      {
        "title": "IBA · New York Sour",
        "url": "https://iba-world.com/iba-cocktail/new-york-sour/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "new-york-sour",
    "learn": "Floating means gently layering one liquid over another. Keep the spoon close to the surface and pour slowly to avoid disturbing the layer.",
    "expect": "A bright whiskey sour with a fruity, slightly tannic red-wine finish. The wine adds depth and a drier edge rather than extra sweetness.",
    "recipeVersion": "Uses IBA 60/30/22.5/15 ml measures. Egg white is made optional and pasteurized; the wine is reserved for the float, never shaken with the base.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer",
      "Barspoon"
    ]
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
        "15 ml",
        "0.5 oz",
        "amaretto"
      ],
      [
        "Optional",
        "Optional",
        "orange zest and cocktail cherry"
      ]
    ],
    "steps": [
      "Stir Scotch and amaretto with ice. Strain over fresh ice; optionally add orange zest and cherry."
    ],
    "description": "Scotch with a smooth almond sweetness.",
    "label": "The spades collection",
    "profile": "Scotch with a smooth almond sweetness.",
    "glass": "Rocks glass",
    "tip": "Two ingredients, no lengthy negotiations.",
    "tags": [
      "Spirit-forward",
      "Sweet",
      "Nutty"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Stir Scotch and amaretto with ice. Strain over fresh ice; optionally add orange zest and cherry.",
    "detailedSteps": [
      "Fill a mixing glass with ice.",
      "Measure Scotch and amaretto into it.",
      "Stir until cold and combined, then strain into a rocks glass over fresh ice.",
      "Serve plain as illustrated, or express orange zest and add a cherry for the source’s garnish."
    ],
    "recipeSources": [
      {
        "title": "The Glenlivet · The Godfather",
        "url": "https://www.theglenlivet.com/en/whisky-cocktails/the-godfather/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "godfather",
    "learn": "Ratios matter even in a two-ingredient drink. This 3:1 Scotch-to-amaretto version is less sweet than an equal-parts version.",
    "expect": "Almond-like sweetness over warm whisky and oak. A rounded after-dinner sip; try with a plain almond biscuit. The whisky remains prominent.",
    "recipeVersion": "Uses The Glenlivet’s 45/15 ml formula rather than the card’s 45/22.5 ml. Its orange-and-cherry garnish is optional here.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Mixing glass",
      "Barspoon",
      "Strainer"
    ]
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
        "fresh orange juice"
      ],
      [
        "To garnish",
        "To garnish",
        "orange zest"
      ]
    ],
    "steps": [
      "Shake all four liquids with ice; strain into a chilled coupe and finish with orange zest."
    ],
    "description": "Equal parts Scotch, cherry, vermouth, and orange.",
    "label": "The spades collection",
    "profile": "Equal parts Scotch, cherry, vermouth, and orange.",
    "glass": "Chilled coupe",
    "tip": "An unlikely quartet that knows its harmonies.",
    "tags": [
      "Citrusy",
      "Fruity"
    ],
    "categories": [
      "whiskey"
    ],
    "shortMethod": "Shake all four liquids with ice; strain into a chilled coupe and finish with orange zest.",
    "detailedSteps": [
      "Chill a coupe and squeeze fresh orange juice.",
      "Measure equal amounts of Scotch, cherry liqueur, vermouth, and orange juice into a shaker.",
      "Add ice and shake firmly until the ingredients are fully mixed and cold.",
      "Strain into the coupe and express orange zest over the surface. Add the zest as a house garnish."
    ],
    "recipeSources": [
      {
        "title": "Difford’s Guide · Classic formula discussion",
        "url": "https://www.diffordsguide.com/cocktails/recipe/556/blood-and-sand-diffords-recipe",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "blood-and-sand",
    "learn": "Orange juice changes the method: shaking blends and aerates the juice with the spirits, unlike the stirring used for a clear Rob Roy.",
    "expect": "Soft orange, rich cherry, and malty whisky, with herbal vermouth underneath. Fruity and rounded rather than sharply sour; sweetness varies with the orange.",
    "recipeVersion": "Retains the photographed equal-parts classic described in Difford’s review, not the tweaked recipe at the top of that page. Orange zest is our house garnish.",
    "researched": true,
    "edition": "spades-2026-11",
    "artworkVersion": "spades-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ]
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
        "60 ml",
        "2 oz",
        "gin"
      ],
      [
        "10 ml",
        "0.33 oz",
        "dry vermouth"
      ],
      [
        "To garnish",
        "To garnish",
        "lemon peel or green olive"
      ]
    ],
    "steps": [
      "Stir gin and vermouth with ice; strain into a chilled martini glass. Finish with lemon oil or an olive."
    ],
    "description": "Clean, crisp gin with a whisper of dry vermouth.",
    "label": "The clubs collection",
    "profile": "Clean, crisp gin with a whisper of dry vermouth.",
    "glass": "Chilled martini glass",
    "tip": "An olive and a twist are both excellent company. You need not invite both.",
    "tags": [
      "Spirit-forward",
      "Herbal"
    ],
    "categories": [
      "gin"
    ],
    "shortMethod": "Stir gin and vermouth with ice; strain into a chilled martini glass. Finish with lemon oil or an olive.",
    "detailedSteps": [
      "Chill a martini glass while you measure the ingredients.",
      "Pour gin and dry vermouth into a mixing glass filled with ice.",
      "Stir smoothly for about 20–30 seconds, until cold and slightly diluted.",
      "Strain into the empty chilled glass. Express lemon peel over the drink or add an olive."
    ],
    "recipeSources": [
      {
        "title": "IBA · Dry Martini",
        "url": "https://iba-world.com/iba-cocktail/dry-martini/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "dry-martini",
    "learn": "Dry vermouth is an aromatized wine, not a spirit. Refrigerate it after opening to help preserve its fresh character.",
    "expect": "Crisp, juniper-led, and very spirit-forward, with subtle herbal wine notes. Lemon brightens it; an olive adds a savory accent.",
    "recipeVersion": "IBA 60/10 ml replaces the photographed 75/15 ml. The art shows both garnish choices; use either.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Mixing glass",
      "Barspoon",
      "Strainer"
    ]
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
        "50 ml",
        "1.67 oz",
        "gin"
      ],
      [
        "100 ml",
        "3.33 oz",
        "chilled tonic water"
      ],
      [
        "1",
        "1",
        "lime wedge"
      ]
    ],
    "steps": [
      "Pour gin over plenty of ice. Squeeze in lime, add tonic, and stir gently."
    ],
    "description": "Botanical gin, lively tonic, and a squeeze of lime.",
    "label": "The clubs collection",
    "profile": "Botanical gin, lively tonic, and a squeeze of lime.",
    "glass": "Highball glass",
    "tip": "The bubbles worked hard to get here. Stir politely.",
    "tags": [
      "Refreshing",
      "Bitter",
      "Herbal",
      "Sparkling"
    ],
    "categories": [
      "gin"
    ],
    "shortMethod": "Pour gin over plenty of ice. Squeeze in lime, add tonic, and stir gently.",
    "detailedSteps": [
      "Fill a highball glass with fresh ice.",
      "Measure in the gin. Squeeze a lime wedge over it and drop the wedge in.",
      "Pour chilled tonic slowly down the inside of the glass.",
      "Lift gently once or twice with a spoon to combine without flattening the bubbles."
    ],
    "recipeSources": [
      {
        "title": "Bombay Sapphire · Gin & Tonic",
        "url": "https://www.bombaysapphire.com/gin-cocktails/bombay-sapphire-and-tonic/23153/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "gin-tonic",
    "learn": "Tonic and soda water are different mixers. Tonic brings bitterness and usually sweetness; soda primarily adds dilution and bubbles.",
    "expect": "Bright gin botanicals and lime against bittersweet tonic, with a crisp sparkling texture. Try with salty snacks or cucumber sandwiches.",
    "recipeVersion": "Uses Bombay Sapphire’s 50/100 ml ratio. A highball replaces the source’s balloon glass to match the deck.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Barspoon"
    ]
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
        "50 ml",
        "1.67 oz",
        "gin"
      ],
      [
        "25 ml",
        "0.83 oz",
        "fresh lime juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "simple syrup"
      ],
      [
        "To garnish",
        "To garnish",
        "lime wheel"
      ]
    ],
    "steps": [
      "Shake gin, lime, and syrup with ice. Fine-strain into a chilled coupe and garnish with lime."
    ],
    "description": "A bright, clean balance of gin and lime.",
    "label": "The clubs collection",
    "profile": "A bright, clean balance of gin and lime.",
    "glass": "Chilled coupe",
    "tip": "Small glass, very clear intentions.",
    "tags": [
      "Citrusy",
      "Sour"
    ],
    "categories": [
      "gin"
    ],
    "shortMethod": "Shake gin, lime, and syrup with ice. Fine-strain into a chilled coupe and garnish with lime.",
    "detailedSteps": [
      "Chill a coupe and squeeze the lime just before mixing.",
      "Measure gin, lime juice, and syrup into a shaker.",
      "Add ice and shake firmly for about 10–15 seconds.",
      "Strain through a cocktail strainer and fine sieve into the empty coupe. Add a lime wheel."
    ],
    "recipeSources": [
      {
        "title": "Plymouth Gin · Gimlet",
        "url": "https://www.plymouthgin.com/en/cocktail/gimlet/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "gimlet",
    "learn": "Fresh-lime Gimlets use juice plus syrup; older versions use sweetened lime cordial. They are different recipes, not one-for-one substitutions.",
    "expect": "A direct, bright lime sour with juniper underneath. Taut and refreshing, with enough sweetness to soften the citrus.",
    "recipeVersion": "Uses Plymouth Gin’s fresh-lime 50/25/15 ml formula, served up to retain the card’s coupe rather than over ice as in the source.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer",
      "Fine sieve"
    ]
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
        "50 ml",
        "1.67 oz",
        "Old Tom gin"
      ],
      [
        "25 ml",
        "0.83 oz",
        "fresh lemon juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "rich sugar syrup (2:1)"
      ],
      [
        "To top",
        "To top",
        "chilled soda water"
      ],
      [
        "To garnish",
        "To garnish",
        "lemon wheel"
      ]
    ],
    "steps": [
      "Shake gin, lemon, and syrup with ice. Strain over fresh ice, top with soda, and garnish."
    ],
    "description": "Tall, sparkling, and freshly lemony.",
    "label": "The clubs collection",
    "profile": "Tall, sparkling, and freshly lemony.",
    "glass": "Collins glass",
    "tip": "Lemonade put on its best jacket.",
    "tags": [
      "Citrusy",
      "Refreshing",
      "Sparkling"
    ],
    "categories": [
      "gin"
    ],
    "shortMethod": "Shake gin, lemon, and syrup with ice. Strain over fresh ice, top with soda, and garnish.",
    "detailedSteps": [
      "Measure Old Tom gin, lemon juice, and rich syrup into a shaker; keep the soda separate.",
      "Add ice and shake for 10–15 seconds.",
      "Fine-strain into a Collins glass filled with fresh ice, leaving room for soda.",
      "Top with chilled soda, stir gently, and garnish with a lemon wheel."
    ],
    "recipeSources": [
      {
        "title": "Hayman’s Gin · Tom Collins",
        "url": "https://www.haymansgin.com/cocktails/tomcollins/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "tom-collins",
    "learn": "Rich syrup uses two parts sugar to one part water. It is sweeter per measure than 1:1 simple syrup, so do not swap equal volumes without adjusting.",
    "expect": "Sparkling lemon with rounded gin botanicals: a long, bright drink with a gentle sweet edge. A good match for light grilled dishes.",
    "recipeVersion": "Follows Hayman’s Old Tom 50/25/15 ml recipe with rich syrup. The illustrated lemon wheel replaces its lemon peel; soda is never shaken.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer",
      "Fine sieve",
      "Barspoon"
    ]
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
        "45 ml",
        "1.5 oz",
        "gin"
      ],
      [
        "15 ml",
        "0.5 oz",
        "maraschino liqueur"
      ],
      [
        "15 ml",
        "0.5 oz",
        "fresh lemon juice"
      ],
      [
        "1 barspoon",
        "1 barspoon",
        "crème de violette"
      ],
      [
        "Optional",
        "Optional",
        "maraschino cherry"
      ]
    ],
    "steps": [
      "Shake all liquids with cracked ice; strain into a chilled coupe. Add a cherry if desired."
    ],
    "description": "Floral violet, cherry, and lemon lifted by gin.",
    "label": "The clubs collection",
    "profile": "Floral violet, cherry, and lemon lifted by gin.",
    "glass": "Chilled coupe",
    "tip": "A little violet flies a long way.",
    "tags": [
      "Citrusy",
      "Herbal",
      "Sour"
    ],
    "categories": [
      "gin"
    ],
    "shortMethod": "Shake all liquids with cracked ice; strain into a chilled coupe. Add a cherry if desired.",
    "detailedSteps": [
      "Chill a coupe and measure the gin, maraschino, and lemon into a shaker.",
      "Add one barspoon of crème de violette; it is a concentrated accent.",
      "Add cracked ice and shake until the shaker feels cold.",
      "Strain into the coupe, without serving ice. Add an optional cherry."
    ],
    "recipeSources": [
      {
        "title": "IBA · Aviation",
        "url": "https://iba-world.com/iba-cocktail/aviation/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "aviation",
    "learn": "A barspoon is a small measure, not a full jigger. With floral liqueurs, a little extra can change the balance noticeably.",
    "expect": "Tart lemon, cherry-kernel notes, and a delicate violet perfume over gin. The lavender shade varies with the violet liqueur.",
    "recipeVersion": "Uses IBA 45/15/15 ml plus one barspoon violette, rather than the stronger photographed proportions.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Barspoon",
      "Shaker",
      "Strainer"
    ]
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
        "fresh lemon juice"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "honey syrup (2:1 honey to water)"
      ],
      [
        "To garnish",
        "To garnish",
        "lemon twist"
      ]
    ],
    "steps": [
      "Shake gin, lemon, and honey syrup with ice. Fine-strain into a chilled coupe; add lemon twist."
    ],
    "description": "Honeyed gin with a lively lemon finish.",
    "label": "The clubs collection",
    "profile": "Honeyed gin with a lively lemon finish.",
    "glass": "Chilled coupe",
    "tip": "The bees handled the complicated ingredient.",
    "tags": [
      "Citrusy",
      "Sweet",
      "Sour"
    ],
    "categories": [
      "gin"
    ],
    "shortMethod": "Shake gin, lemon, and honey syrup with ice. Fine-strain into a chilled coupe; add lemon twist.",
    "detailedSteps": [
      "For the syrup, combine two parts honey with one part hot water, stir, and let cool. Measure only the syrup needed for this drink.",
      "Add gin, lemon juice, and cooled honey syrup to a shaker.",
      "Fill with ice and shake firmly until cold.",
      "Fine-strain into a chilled coupe and express a lemon twist over the surface."
    ],
    "recipeSources": [
      {
        "title": "Barr Hill · Bee’s Knees",
        "url": "https://www.barrhill.com/pages/bees-knees-cocktail",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "bee-s-knees",
    "learn": "Diluting honey into syrup helps it mix evenly. Thick honey straight from the jar can stick to cold ice instead of blending into the cocktail.",
    "expect": "Floral honey softens fresh lemon while gin keeps the finish lively. Rounder than a Gimlet; try with a small piece of mild goat cheese.",
    "recipeVersion": "Follows Barr Hill’s lemon-and-honey version, matching the deck’s character. Its 2:1 honey syrup is specified; IBA lists a different version containing orange juice.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer",
      "Fine sieve"
    ]
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
        "Green Chartreuse"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "maraschino liqueur"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "fresh lime juice"
      ]
    ],
    "steps": [
      "Shake all four ingredients with ice; strain into a chilled coupe, without garnish."
    ],
    "description": "Herbal, tart, and perfectly equal in measure.",
    "label": "The clubs collection",
    "profile": "Herbal, tart, and perfectly equal in measure.",
    "glass": "Chilled coupe",
    "tip": "Four voices. Nobody needs a louder microphone.",
    "tags": [
      "Citrusy",
      "Herbal",
      "Sour"
    ],
    "categories": [
      "gin"
    ],
    "shortMethod": "Shake all four ingredients with ice; strain into a chilled coupe, without garnish.",
    "detailedSteps": [
      "Chill the coupe before measuring.",
      "Add equal measures of gin, Green Chartreuse, maraschino, and lime to a shaker.",
      "Fill with ice and shake firmly until thoroughly chilled.",
      "Strain into the empty coupe and serve without garnish."
    ],
    "recipeSources": [
      {
        "title": "IBA · The Last Word",
        "url": "https://iba-world.com/iba-cocktail/last-word/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "the-last-word",
    "learn": "Equal parts means equal measured volumes, not equally strong flavors. Measure carefully so the potent herbal liqueur does not overwhelm the lime.",
    "expect": "Intensely herbal, tart, and lightly sweet, with a cherry-kernel finish. More complex and assertive than a simple gin sour.",
    "recipeVersion": "Matches IBA’s four equal 22.5 ml measures and no-garnish serve.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ]
  },
  {
    "id": "singapore-sling",
    "name": "Singapore Sling",
    "rank": "8",
    "suit": "♣",
    "category": "gin",
    "spirit": "Gin",
    "shape": "hurricane",
    "color": "#d78e76",
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
        "cherry liqueur (Sangue Morlacco)"
      ],
      [
        "7.5 ml",
        "0.25 oz",
        "Cointreau"
      ],
      [
        "7.5 ml",
        "0.25 oz",
        "Bénédictine"
      ],
      [
        "120 ml",
        "4 oz",
        "fresh pineapple juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "fresh lime juice"
      ],
      [
        "10 ml",
        "0.33 oz",
        "grenadine"
      ],
      [
        "1 dash",
        "1 dash",
        "Angostura bitters"
      ],
      [
        "To garnish",
        "To garnish",
        "pineapple wedge and cocktail cherry"
      ]
    ],
    "steps": [
      "Shake all liquids with ice; strain into a hurricane glass over fresh ice and garnish."
    ],
    "description": "Pineapple, cherry, and lime with a quietly herbal gin base.",
    "label": "The clubs collection",
    "profile": "Pineapple, cherry, and lime with a quietly herbal gin base.",
    "glass": "Hurricane glass",
    "tip": "A long ingredient list, a very sociable result.",
    "tags": [
      "Citrusy",
      "Fruity",
      "Tropical"
    ],
    "categories": [
      "gin"
    ],
    "shortMethod": "Shake all liquids with ice; strain into a hurricane glass over fresh ice and garnish.",
    "detailedSteps": [
      "Use a large shaker to leave room for the juice and ice. Measure in all liquid ingredients.",
      "Fill with ice and shake firmly until cold; pineapple juice creates a light froth.",
      "Strain into a hurricane glass over fresh ice, allowing room for the foamy top.",
      "Add a pineapple wedge and cherry. No soda is added in this version."
    ],
    "recipeSources": [
      {
        "title": "IBA · Singapore Sling",
        "url": "https://iba-world.com/iba-cocktail/singapore-sling/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "singapore-sling",
    "learn": "Pineapple juice can make its own frothy top when shaken. You do not need egg white to create that light foam.",
    "expect": "Juicy pineapple and cherry with lime brightness and subtle herbal depth. A fruity, tropical long drink; try alongside ginger-spiced food.",
    "recipeVersion": "Uses the full IBA formula, adding Bénédictine, grenadine, bitters, and a measured pineapple portion to the simplified card. Fresh serving ice is our house presentation.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Large shaker",
      "Strainer"
    ]
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
        "45 ml",
        "1.5 oz",
        "gin"
      ],
      [
        "15 ml",
        "0.5 oz",
        "vodka"
      ],
      [
        "7.5 ml",
        "0.25 oz",
        "Lillet Blanc"
      ],
      [
        "To garnish",
        "To garnish",
        "lemon zest"
      ]
    ],
    "steps": [
      "Shake gin, vodka, and Lillet with ice; strain into a chilled martini glass and add lemon zest."
    ],
    "description": "Gin, vodka, and Lillet in a bold, crisp pour.",
    "label": "The clubs collection",
    "profile": "Gin, vodka, and Lillet in a bold, crisp pour.",
    "glass": "Chilled martini glass",
    "tip": "A sharp suit with a lemon-yellow pocket square.",
    "tags": [
      "Spirit-forward",
      "Herbal"
    ],
    "categories": [
      "gin",
      "vodka"
    ],
    "shortMethod": "Shake gin, vodka, and Lillet with ice; strain into a chilled martini glass and add lemon zest.",
    "detailedSteps": [
      "Chill a martini glass before mixing.",
      "Measure gin, vodka, and Lillet Blanc into a shaker.",
      "Add ice and shake until very cold, about 10–15 seconds.",
      "Strain into the empty glass. Express lemon zest over the surface and add it."
    ],
    "recipeSources": [
      {
        "title": "IBA · Vesper",
        "url": "https://iba-world.com/iba-cocktail/vesper/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "vesper",
    "learn": "Lillet Blanc is an aromatized wine aperitif, not dry vermouth. Using the named ingredient preserves this recipe’s balance.",
    "expect": "Very spirit-forward, crisp, and citrus-scented, with a faint rounded wine sweetness. More forceful than a citrus sour.",
    "recipeVersion": "Uses IBA 45/15/7.5 ml, half the photographed card’s measures but the same proportions. Shaking follows this recipe’s specified method.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ]
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
        "40 ml",
        "1.33 oz",
        "gin"
      ],
      [
        "30 ml",
        "1 oz",
        "triple sec"
      ],
      [
        "20 ml",
        "0.67 oz",
        "fresh lemon juice"
      ]
    ],
    "steps": [
      "Shake gin, triple sec, and lemon with ice. Strain into a chilled coupe without garnish."
    ],
    "description": "A silky gin sour with a touch of orange.",
    "label": "The clubs collection",
    "profile": "A silky gin sour with a touch of orange.",
    "glass": "Chilled coupe",
    "tip": "Three ingredients, dressed impeccably.",
    "tags": [
      "Citrusy",
      "Sour"
    ],
    "categories": [
      "gin"
    ],
    "shortMethod": "Shake gin, triple sec, and lemon with ice. Strain into a chilled coupe without garnish.",
    "detailedSteps": [
      "Chill a coupe and squeeze fresh lemon juice.",
      "Measure gin, triple sec, and lemon into a shaker.",
      "Add ice and shake firmly until cold and combined.",
      "Strain into the coupe, without serving ice or garnish."
    ],
    "recipeSources": [
      {
        "title": "IBA · White Lady",
        "url": "https://iba-world.com/iba-cocktail/white-lady/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "white-lady",
    "learn": "Triple sec supplies both orange flavor and sweetness here. Adding syrup as well would create a different balance.",
    "expect": "Lemon-led and orange-bright, with gin underneath and a clean finish. This egg-free version has a lighter texture than a foamy White Lady.",
    "recipeVersion": "Uses IBA’s 40/30/20 ml egg-free formula, replacing the photographed proportions and optional egg white.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ]
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
        "sweet red vermouth"
      ],
      [
        "To garnish",
        "To garnish",
        "half orange slice"
      ]
    ],
    "steps": [
      "Build equal parts gin, Campari, and vermouth over ice. Stir gently and add orange."
    ],
    "description": "Bittersweet, botanical, and unmistakably Italian.",
    "label": "The clubs collection",
    "profile": "Bittersweet, botanical, and unmistakably Italian.",
    "glass": "Rocks glass",
    "tip": "Bitter is a flavor, not a complaint.",
    "tags": [
      "Spirit-forward",
      "Bitter"
    ],
    "categories": [
      "gin"
    ],
    "shortMethod": "Build equal parts gin, Campari, and vermouth over ice. Stir gently and add orange.",
    "detailedSteps": [
      "Fill a chilled rocks glass with fresh ice.",
      "Measure equal amounts of gin, Campari, and sweet vermouth directly into the glass.",
      "Stir gently until combined and cold.",
      "Add half an orange slice and serve over the ice."
    ],
    "recipeSources": [
      {
        "title": "IBA · Negroni",
        "url": "https://iba-world.com/iba-cocktail/negroni/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "negroni",
    "learn": "Dilution is part of the recipe even when water is not listed. Stirring with ice softens and integrates this concentrated combination.",
    "expect": "Bold bitter orange, sweet herbs, and juniper. The finish is distinctly bitter, not sour; salty olives or roasted nuts make a good contrast.",
    "recipeVersion": "Matches IBA’s equal 30 ml measures. Half an orange slice replaces the photographed orange peel.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Barspoon"
    ]
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
        "fresh lemon juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "simple syrup"
      ],
      [
        "60 ml",
        "2 oz",
        "chilled Champagne"
      ]
    ],
    "steps": [
      "Shake gin, lemon, and syrup with ice; strain into a flute. Add Champagne and stir gently."
    ],
    "description": "Bright gin and lemon with a Champagne sparkle.",
    "label": "The clubs collection",
    "profile": "Bright gin and lemon with a Champagne sparkle.",
    "glass": "Champagne flute",
    "tip": "The bubbles make their entrance last.",
    "tags": [
      "Citrusy",
      "Sparkling"
    ],
    "categories": [
      "gin"
    ],
    "shortMethod": "Shake gin, lemon, and syrup with ice; strain into a flute. Add Champagne and stir gently.",
    "detailedSteps": [
      "Chill a Champagne flute and keep the sparkling wine cold.",
      "Shake gin, lemon juice, and syrup with ice until cold; leave the Champagne out.",
      "Strain into the flute, then slowly add the measured Champagne.",
      "Stir very gently once to combine. Serve without garnish."
    ],
    "recipeSources": [
      {
        "title": "IBA · French 75",
        "url": "https://iba-world.com/iba-cocktail/french-75/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "french-75",
    "learn": "Never shake sparkling wine. Add it after straining the still ingredients so the drink keeps its bubbles and the shaker stays unpressurized.",
    "expect": "Crisp lemon, light gin botanicals, and fine wine bubbles. Bright and elegant, with sweetness balanced by citrus and dry Champagne.",
    "recipeVersion": "Uses IBA’s 60 ml Champagne rather than the card’s 90 ml; other measures match. No garnish is specified.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer",
      "Barspoon"
    ]
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
        "30 ml",
        "1 oz",
        "gin"
      ],
      [
        "30 ml",
        "1 oz",
        "Cointreau"
      ],
      [
        "30 ml",
        "1 oz",
        "Lillet Blanc"
      ],
      [
        "30 ml",
        "1 oz",
        "fresh lemon juice"
      ],
      [
        "1 dash",
        "1 dash",
        "absinthe"
      ],
      [
        "To garnish",
        "To garnish",
        "orange zest"
      ]
    ],
    "steps": [
      "Shake all liquids with ice; strain into a chilled coupe and garnish with orange zest."
    ],
    "description": "Citrus and botanicals with a delicate anise edge.",
    "label": "The clubs collection",
    "profile": "Citrus and botanicals with a delicate anise edge.",
    "glass": "Chilled coupe",
    "tip": "A dramatic name; a surprisingly tidy recipe.",
    "tags": [
      "Citrusy",
      "Herbal",
      "Sour"
    ],
    "categories": [
      "gin"
    ],
    "shortMethod": "Shake all liquids with ice; strain into a chilled coupe and garnish with orange zest.",
    "detailedSteps": [
      "Chill a coupe and measure gin, Cointreau, Lillet, and lemon into a shaker.",
      "Add just one dash of absinthe; it is an accent, not an equal part.",
      "Fill with ice and shake firmly until cold.",
      "Strain into the coupe and express orange zest over the surface before adding it."
    ],
    "recipeSources": [
      {
        "title": "IBA · Corpse Reviver #2",
        "url": "https://iba-world.com/iba-cocktail/corpse-reviver-2/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "corpse-reviver-2",
    "learn": "A dash of absinthe goes into the shaker in this version. That is different from rinsing the serving glass and discarding the excess.",
    "expect": "Bright lemon and orange with soft wine notes and a delicate anise edge. Tart and aromatic, with a lighter impression than a Martini.",
    "recipeVersion": "Uses IBA’s four equal 30 ml measures and an absinthe dash, instead of the card’s 22.5 ml measures and glass rinse. The name makes no health claim.",
    "researched": true,
    "edition": "clubs-2026-11",
    "artworkVersion": "clubs-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ]
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
        "40 ml",
        "1.33 oz",
        "citrus vodka"
      ],
      [
        "15 ml",
        "0.5 oz",
        "Cointreau"
      ],
      [
        "15 ml",
        "0.5 oz",
        "fresh lime juice"
      ],
      [
        "30 ml",
        "1 oz",
        "cranberry juice"
      ],
      [
        "To garnish",
        "To garnish",
        "lemon twist (or orange zest, house option)"
      ]
    ],
    "steps": [
      "Shake the liquids with ice; strain into a chilled cocktail glass and add a citrus twist."
    ],
    "description": "Cranberry blush with a bright orange-lime finish.",
    "label": "The diamonds collection",
    "profile": "Cranberry blush with a bright orange-lime finish.",
    "glass": "Chilled cocktail glass",
    "tip": "Pink, with a point of view.",
    "tags": [
      "Citrusy",
      "Fruity",
      "Sour"
    ],
    "categories": [
      "vodka"
    ],
    "shortMethod": "Shake the liquids with ice; strain into a chilled cocktail glass and add a citrus twist.",
    "detailedSteps": [
      "Chill a cocktail glass while you measure the ingredients.",
      "Add citrus vodka, Cointreau, lime, and cranberry juice to a shaker.",
      "Fill with ice and shake firmly until thoroughly chilled.",
      "Strain into the empty glass. Express a lemon twist over the surface and add it; orange zest is our illustrated alternative."
    ],
    "recipeSources": [
      {
        "title": "IBA · Cosmopolitan",
        "url": "https://iba-world.com/iba-cocktail/cosmopolitan/",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "cosmopolitan",
    "learn": "Expressing a twist releases oils from the colored peel. Bend it over the drink before adding it so the aroma reaches the surface.",
    "expect": "Cranberry and lime give a tart, fruity opening, with orange sweetness underneath. Bright and polished rather than syrupy; try alongside salty canapés.",
    "recipeVersion": "Follows IBA 40/15/15/30 ml and citrus vodka. IBA specifies lemon twist; the artwork uses orange zest as an optional house garnish.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ]
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
        "45 ml",
        "1.5 oz",
        "vodka"
      ],
      [
        "120 ml",
        "4 oz",
        "chilled ginger beer"
      ],
      [
        "10 ml",
        "0.33 oz",
        "fresh lime juice"
      ],
      [
        "To garnish",
        "To garnish",
        "lime slice"
      ]
    ],
    "steps": [
      "Build vodka, ginger beer, and lime over ice in a mule mug. Stir gently and garnish."
    ],
    "description": "Zesty lime and fiery ginger in a frosty mug.",
    "label": "The diamonds collection",
    "profile": "Zesty lime and fiery ginger in a frosty mug.",
    "glass": "Mule mug or rocks glass",
    "tip": "The mug is handsome. The ginger does the talking.",
    "tags": [
      "Citrusy",
      "Refreshing",
      "Sparkling",
      "Spiced"
    ],
    "categories": [
      "vodka"
    ],
    "shortMethod": "Build vodka, ginger beer, and lime over ice in a mule mug. Stir gently and garnish.",
    "detailedSteps": [
      "Fill a mule mug or rocks glass with fresh ice.",
      "Measure in vodka and lime juice.",
      "Pour in chilled ginger beer, leaving a little room at the rim.",
      "Stir gently to combine, then add a lime slice. Do not shake the ginger beer."
    ],
    "recipeSources": [
      {
        "title": "IBA · Moscow Mule",
        "url": "https://iba-world.com/iba-cocktail/moscow-mule/",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "moscow-mule",
    "learn": "A built drink is assembled in its serving vessel. Gentle stirring combines the ingredients while keeping the mixer lively.",
    "expect": "Spicy ginger and fresh lime, with a clean vodka base and a sparkling finish. Crisp and zingy; a good companion to ginger or chili-spiced snacks.",
    "recipeVersion": "Uses IBA 45/120/10 ml instead of the photographed 60/120/15 ml. Fresh serving ice is specified for the home version.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Barspoon"
    ]
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
    "method": "Stirred",
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
        "fresh lemon juice"
      ],
      [
        "2 dashes",
        "2 dashes",
        "Worcestershire sauce"
      ],
      [
        "To taste",
        "To taste",
        "Tabasco, celery salt, and black pepper"
      ],
      [
        "Optional garnish",
        "Optional garnish",
        "celery stalk and lemon wedge"
      ]
    ],
    "steps": [
      "Stir the liquids and seasonings gently with ice. Pour into a highball over ice; garnish if desired."
    ],
    "description": "Savory tomato, warming spice, and a citrus lift.",
    "label": "The diamonds collection",
    "profile": "Savory tomato, warming spice, and a citrus lift.",
    "glass": "Highball glass",
    "tip": "Season it like you mean dinner, not dessert.",
    "tags": [
      "Citrusy",
      "Savory",
      "Spiced"
    ],
    "categories": [
      "vodka"
    ],
    "shortMethod": "Stir the liquids and seasonings gently with ice. Pour into a highball over ice; garnish if desired.",
    "detailedSteps": [
      "Measure vodka, tomato juice, and lemon into a mixing glass.",
      "Add Worcestershire sauce, then a little Tabasco, celery salt, and pepper; taste and adjust the seasoning.",
      "Add ice and stir gently until cold, keeping the tomato juice smooth rather than frothy.",
      "Pour into a highball with ice. Add celery and a lemon wedge if desired."
    ],
    "recipeSources": [
      {
        "title": "IBA · Bloody Mary",
        "url": "https://iba-world.com/iba-cocktail/bloody-mary/",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "bloody-mary",
    "learn": "Season to taste means start small, taste, and adjust. Hot sauces differ in intensity, so a fixed large dash is not always interchangeable.",
    "expect": "Savory tomato, tangy lemon, pepper, and a warming chili finish. More like a seasoned appetizer than a sweet cocktail; try with a brunch spread.",
    "recipeVersion": "Follows IBA 45/90/15 ml and its highball-with-ice option. Gentle stirring replaces the card’s rolling method.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Mixing glass",
      "Barspoon"
    ]
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
        "50 ml",
        "1.67 oz",
        "vodka"
      ],
      [
        "30 ml",
        "1 oz",
        "Kahlúa coffee liqueur"
      ],
      [
        "10 ml",
        "0.33 oz",
        "simple syrup"
      ],
      [
        "1 strong shot",
        "1 strong shot",
        "fresh espresso, briefly cooled"
      ],
      [
        "3",
        "3",
        "coffee beans, to garnish"
      ]
    ],
    "steps": [
      "Shake vodka, coffee liqueur, syrup, and espresso hard with ice. Strain into a chilled glass; add three beans."
    ],
    "description": "Fresh espresso and coffee liqueur with a velvet foam.",
    "label": "The diamonds collection",
    "profile": "Fresh espresso and coffee liqueur with a velvet foam.",
    "glass": "Chilled cocktail glass",
    "tip": "Three beans. One very good entrance.",
    "tags": [
      "Coffee",
      "Sweet"
    ],
    "categories": [
      "vodka"
    ],
    "shortMethod": "Shake vodka, coffee liqueur, syrup, and espresso hard with ice. Strain into a chilled glass; add three beans.",
    "detailedSteps": [
      "Chill a cocktail glass and brew one strong espresso. Let the shot briefly cool before mixing.",
      "Measure vodka, Kahlúa, syrup, and the espresso into a shaker.",
      "Add plenty of ice and shake firmly until very cold and foamy.",
      "Strain into the chilled glass. Wait a moment for the foam to settle, then place three coffee beans on top."
    ],
    "recipeSources": [
      {
        "title": "IBA · Espresso Martini",
        "url": "https://iba-world.com/iba-cocktail/espresso-martini/",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "espresso-martini",
    "learn": "A firm shake aerates the espresso to create foam. This creamy-looking cap comes from coffee, not dairy or egg white.",
    "expect": "Roasted coffee leads, with a sweet liqueur middle and a bittersweet finish. Silky foam makes the first sip soft; a small chocolate truffle fits well.",
    "recipeVersion": "Uses IBA 50 ml vodka, 30 ml Kahlúa, 10 ml syrup, and one strong espresso. The source specifies a shot rather than a fixed espresso volume.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ]
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
    "method": "Built",
    "ingredients": [
      [
        "40 ml",
        "1.33 oz",
        "vodka"
      ],
      [
        "20 ml",
        "0.67 oz",
        "peach schnapps"
      ],
      [
        "40 ml",
        "1.33 oz",
        "fresh orange juice"
      ],
      [
        "40 ml",
        "1.33 oz",
        "cranberry juice"
      ],
      [
        "To garnish",
        "To garnish",
        "half orange slice"
      ]
    ],
    "steps": [
      "Build all liquids over ice in a highball, combine gently, and add an orange slice."
    ],
    "description": "Peach, orange, and cranberry in a sunny long drink.",
    "label": "The diamonds collection",
    "profile": "Peach, orange, and cranberry in a sunny long drink.",
    "glass": "Highball glass",
    "tip": "A seaside name; no sand required.",
    "tags": [
      "Citrusy",
      "Fruity",
      "Sweet"
    ],
    "categories": [
      "vodka"
    ],
    "shortMethod": "Build all liquids over ice in a highball, combine gently, and add an orange slice.",
    "detailedSteps": [
      "Fill a highball glass with fresh ice.",
      "Measure in vodka and peach schnapps.",
      "Add orange and cranberry juices, then stir gently until the colors and flavors combine.",
      "Garnish with half an orange slice and serve over the ice."
    ],
    "recipeSources": [
      {
        "title": "IBA · Sex on the Beach",
        "url": "https://iba-world.com/iba-cocktail/sex-on-the-beach/",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "sex-on-the-beach",
    "learn": "Peach schnapps is a sweet fruit liqueur in this recipe. It contributes sweetness as well as peach flavor, so extra syrup is not needed.",
    "expect": "Juicy peach and orange with cranberry tartness. A fruity, rounded long drink with little bitterness; pair with a fruit platter or mild savory snacks.",
    "recipeVersion": "Uses IBA’s 40/20/40/40 ml proportions and built method, replacing the card’s shaken version.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Barspoon"
    ]
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
        "30 ml",
        "1 oz",
        "vodka"
      ],
      [
        "30 ml",
        "1 oz",
        "Kahlúa coffee liqueur"
      ],
      [
        "30 ml",
        "1 oz",
        "heavy cream"
      ]
    ],
    "steps": [
      "Pour vodka and coffee liqueur over ice. Float cream over a spoon; stir lightly if you prefer it blended."
    ],
    "description": "Coffee and cream meet a smooth vodka base.",
    "label": "The diamonds collection",
    "profile": "Coffee and cream meet a smooth vodka base.",
    "glass": "Rocks glass",
    "tip": "The cream makes a slow entrance. Let it.",
    "tags": [
      "Creamy",
      "Coffee",
      "Sweet"
    ],
    "categories": [
      "vodka"
    ],
    "shortMethod": "Pour vodka and coffee liqueur over ice. Float cream over a spoon; stir lightly if you prefer it blended.",
    "detailedSteps": [
      "Fill a rocks glass with fresh ice.",
      "Measure coffee liqueur and vodka into the glass.",
      "Hold a spoon just above the drink and slowly pour the cream over its back for a pale top layer.",
      "Serve layered, or stir lightly just before sipping for an evenly creamy texture."
    ],
    "recipeSources": [
      {
        "title": "Kahlúa · White Russian",
        "url": "https://www.kahlua.com/en-us/drinks/white-russian/",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "white-russian",
    "learn": "Floating means adding a liquid gently on top instead of immediately mixing it in. A spoon softens the pour and helps make the cream layer visible.",
    "expect": "Rich cream, sweet roasted coffee, and a soft vanilla impression. Dessert-like and velvety; try with a small plain biscuit rather than another very sweet dish.",
    "recipeVersion": "Uses Kahlúa’s equal 30 ml vodka, coffee liqueur, and cream version, rather than the card’s larger vodka measure.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Barspoon"
    ]
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
        "37.5 ml",
        "1.25 oz",
        "vodka"
      ],
      [
        "7.5 ml",
        "0.25 oz",
        "triple sec"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "fresh lemon juice"
      ],
      [
        "For optional rim",
        "For optional rim",
        "sugar"
      ],
      [
        "Optional garnish",
        "Optional garnish",
        "lemon wheel"
      ]
    ],
    "steps": [
      "Sugar-rim a chilled cocktail glass if desired. Shake the liquids with ice, fine-strain, and optionally add a lemon wheel."
    ],
    "description": "Sweet-tart lemon with a sparkling sugar rim.",
    "label": "The diamonds collection",
    "profile": "Sweet-tart lemon with a sparkling sugar rim.",
    "glass": "Chilled cocktail glass",
    "tip": "A little sugar around the edges never hurt the presentation.",
    "tags": [
      "Citrusy",
      "Sour"
    ],
    "categories": [
      "vodka"
    ],
    "shortMethod": "Sugar-rim a chilled cocktail glass if desired. Shake the liquids with ice, fine-strain, and optionally add a lemon wheel.",
    "detailedSteps": [
      "Moisten the outside edge of a chilled cocktail glass with lemon and dip it in sugar, if using; keep sugar out of the bowl.",
      "Measure vodka, triple sec, and lemon juice into a shaker.",
      "Add ice and shake firmly until cold.",
      "Fine-strain into the prepared glass and add a lemon wheel if desired."
    ],
    "recipeSources": [
      {
        "title": "Diageo Bar Academy · Lemon Drop Martini",
        "url": "https://www.diageobaracademy.com/en-us/home/explore-all-recipes/smirnoff-lemon-drop-martini",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "lemon-drop",
    "learn": "A sugar rim sweetens individual sips rather than the whole mixture. Coating only the outer edge keeps loose crystals out of the drink.",
    "expect": "Sharp fresh lemon with a little orange sweetness. The optional rim makes each sip more candy-like; without it, expect a distinctly tart drink.",
    "recipeVersion": "Uses Diageo Bar Academy’s 1.25/0.25/0.75 oz vodka/triple-sec/lemon version, converted at 30 ml per ounce. Sugar is for the optional rim; no syrup is mixed in. The illustration omits the source’s lemon wheel, which is optional here.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer",
      "Fine sieve"
    ]
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
        "45 ml",
        "1.5 oz",
        "tequila"
      ],
      [
        "90 ml",
        "3 oz",
        "fresh orange juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "grenadine"
      ],
      [
        "To garnish",
        "To garnish",
        "half orange slice"
      ],
      [
        "Optional house garnish",
        "Optional house garnish",
        "cocktail cherry"
      ]
    ],
    "steps": [
      "Build tequila and orange over ice. Add grenadine slowly and leave it unstirred for the sunrise layers."
    ],
    "description": "Orange and tequila with a glowing grenadine sunrise.",
    "label": "The diamonds collection",
    "profile": "Orange and tequila with a glowing grenadine sunrise.",
    "glass": "Highball glass",
    "tip": "For this sunset, put the spoon down.",
    "tags": [
      "Citrusy",
      "Fruity",
      "Sweet"
    ],
    "categories": [
      "tequila"
    ],
    "shortMethod": "Build tequila and orange over ice. Add grenadine slowly and leave it unstirred for the sunrise layers.",
    "detailedSteps": [
      "Fill a highball glass with fresh ice cubes.",
      "Measure in tequila and orange juice; combine gently before adding the syrup.",
      "Pour grenadine slowly into the glass and let it settle toward the bottom. Do not stir afterward.",
      "Add half an orange slice. A cherry is an optional house garnish, as shown in the artwork."
    ],
    "recipeSources": [
      {
        "title": "IBA · Tequila Sunrise",
        "url": "https://iba-world.com/iba-cocktail/tequila-sunrise/",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "tequila-sunrise",
    "learn": "Dense grenadine sinks through the juice, making the red-to-orange gradient. Stirring after adding it blends the colors and removes the sunrise effect.",
    "expect": "Sweet orange and pomegranate-like syrup, with tequila underneath. Fruity and soft-edged; the first and last sips can differ while the layers remain intact.",
    "recipeVersion": "Uses IBA 45/90/15 ml rather than the larger photographed pour. Orange follows IBA; the illustrated cherry is an optional house addition.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Barspoon"
    ]
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
        "50 ml",
        "1.67 oz",
        "100% agave tequila"
      ],
      [
        "5 ml",
        "0.17 oz",
        "fresh lime juice"
      ],
      [
        "1 pinch",
        "1 pinch",
        "salt"
      ],
      [
        "100 ml",
        "3.33 oz",
        "chilled pink grapefruit soda"
      ],
      [
        "To garnish",
        "To garnish",
        "lime slice"
      ]
    ],
    "steps": [
      "Build tequila, lime, and a pinch of salt over ice. Add grapefruit soda, stir gently, and garnish."
    ],
    "description": "Grapefruit sparkle, fresh lime, and a subtle pinch of salt.",
    "label": "The diamonds collection",
    "profile": "Grapefruit sparkle, fresh lime, and a subtle pinch of salt.",
    "glass": "Highball glass",
    "tip": "Grapefruit brings the sparkle and a little attitude.",
    "tags": [
      "Citrusy",
      "Refreshing",
      "Fruity",
      "Sparkling"
    ],
    "categories": [
      "tequila"
    ],
    "shortMethod": "Build tequila, lime, and a pinch of salt over ice. Add grapefruit soda, stir gently, and garnish.",
    "detailedSteps": [
      "Measure tequila and lime juice into a highball glass.",
      "Add fresh ice and a small pinch of salt.",
      "Pour in chilled pink grapefruit soda and stir gently to combine.",
      "Add a lime slice. The salt goes in the drink in this version, rather than around the rim."
    ],
    "recipeSources": [
      {
        "title": "IBA · Paloma",
        "url": "https://iba-world.com/iba-cocktail/paloma/",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "paloma",
    "learn": "Grapefruit soda is already sweetened and carbonated. Grapefruit juice plus plain soda is a different mixture and needs its own balancing.",
    "expect": "Bittersweet grapefruit, fresh lime, and an earthy tequila note with lively bubbles. Bright and refreshing; try with tacos or grilled vegetables.",
    "recipeVersion": "Follows IBA 50/5/100 ml with a pinch of salt in the glass. This replaces the card’s salt rim and larger lime measure.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Barspoon"
    ]
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
        "100% agave tequila"
      ],
      [
        "30 ml",
        "1 oz",
        "fresh lime juice"
      ],
      [
        "30 ml",
        "1 oz",
        "agave nectar"
      ],
      [
        "To garnish",
        "To garnish",
        "lime slice"
      ]
    ],
    "steps": [
      "Shake tequila, lime, and agave nectar with ice. Strain over fresh ice in a rocks glass; add lime."
    ],
    "description": "A simple trio of tequila, lime, and agave.",
    "label": "The diamonds collection",
    "profile": "A simple trio of tequila, lime, and agave.",
    "glass": "Rocks glass",
    "tip": "Three ingredients, all pulling in the same direction.",
    "tags": [
      "Citrusy",
      "Sour"
    ],
    "categories": [
      "tequila"
    ],
    "shortMethod": "Shake tequila, lime, and agave nectar with ice. Strain over fresh ice in a rocks glass; add lime.",
    "detailedSteps": [
      "Fill a rocks glass with fresh serving ice.",
      "Measure tequila, lime juice, and agave nectar into a shaker.",
      "Add ice and shake firmly until the nectar is fully mixed and the drink is cold.",
      "Strain into the prepared glass and add a lime slice."
    ],
    "recipeSources": [
      {
        "title": "IBA · Tommy’s Margarita",
        "url": "https://iba-world.com/iba-cocktail/tommys-margarita/",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "tommy-s-margarita",
    "learn": "Tommy’s uses agave nectar in place of orange liqueur. That changes both the sweetness and the flavor, letting tequila and lime stand more clearly apart.",
    "expect": "Lime-bright with rounded agave sweetness and a direct tequila character. This recipe is relatively generous with nectar; brands vary in sweetness and thickness.",
    "recipeVersion": "Uses the current IBA 60/30/30 ml formula, including 30 ml agave nectar rather than the photographed 15 ml. Served over ice with lime.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ]
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
    "method": "Shaken",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "reposado tequila"
      ],
      [
        "30 ml",
        "1 oz",
        "fresh lime juice"
      ],
      [
        "30 ml",
        "1 oz",
        "chilled ginger beer"
      ],
      [
        "7.5 ml",
        "0.25 oz",
        "crème de cassis"
      ],
      [
        "To garnish",
        "To garnish",
        "lime wedge"
      ]
    ],
    "steps": [
      "Shake tequila and lime with ice. Strain over fresh ice, add ginger beer, drizzle cassis on top, and garnish."
    ],
    "description": "Blackcurrant richness with tequila and ginger bite.",
    "label": "The diamonds collection",
    "profile": "Blackcurrant richness with tequila and ginger bite.",
    "glass": "Collins glass",
    "tip": "The devil is in the final drizzle.",
    "tags": [
      "Citrusy",
      "Refreshing",
      "Fruity",
      "Sparkling"
    ],
    "categories": [
      "tequila"
    ],
    "shortMethod": "Shake tequila and lime with ice. Strain over fresh ice, add ginger beer, drizzle cassis on top, and garnish.",
    "detailedSteps": [
      "Measure reposado tequila and lime juice into a shaker, keeping ginger beer and cassis separate.",
      "Add ice and shake until cold; strain into a Collins glass over fresh ice.",
      "Add ginger beer, then slowly drizzle the measured cassis over the surface.",
      "Garnish with a lime wedge. Give it a gentle stir before sipping if you prefer an even flavor throughout."
    ],
    "recipeSources": [
      {
        "title": "Patrón · El Diablo official recipe video",
        "url": "https://www.youtube.com/watch?v=5MZLcByZJPE",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "el-diablo",
    "learn": "Crème de cassis is blackcurrant liqueur, not cream. Here it is added last for a dark berry accent; the carbonated ginger beer is never shaken.",
    "expect": "Tart lime, peppery ginger, dark berries, and gently rounded tequila. This producer version is citrus-forward with only a short ginger-beer top.",
    "recipeVersion": "Follows Patrón’s official recipe video: 45/30/30/7.5 ml and reposado tequila. Its explicit method resolves the website’s ambiguous instruction about when to add cassis.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer",
      "Barspoon"
    ]
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
        "50 ml",
        "1.67 oz",
        "100% agave tequila"
      ],
      [
        "20 ml",
        "0.67 oz",
        "triple sec"
      ],
      [
        "15 ml",
        "0.5 oz",
        "fresh lime juice"
      ],
      [
        "Optional",
        "Optional",
        "salt for half the rim"
      ]
    ],
    "steps": [
      "Shake tequila, triple sec, and lime with ice. Strain into a chilled cocktail glass with an optional half-salt rim."
    ],
    "description": "The classic tequila, orange, and lime combination.",
    "label": "The diamonds collection",
    "profile": "The classic tequila, orange, and lime combination.",
    "glass": "Chilled cocktail glass",
    "tip": "Half a rim leaves room for personal taste.",
    "tags": [
      "Citrusy",
      "Sour"
    ],
    "categories": [
      "tequila"
    ],
    "shortMethod": "Shake tequila, triple sec, and lime with ice. Strain into a chilled cocktail glass with an optional half-salt rim.",
    "detailedSteps": [
      "Chill a cocktail glass. If using salt, moisten half the outer rim with lime and dip that section in salt.",
      "Measure tequila, triple sec, and fresh lime juice into a shaker.",
      "Add ice and shake firmly until cold.",
      "Strain into the empty prepared glass, keeping serving ice out. No additional garnish is needed."
    ],
    "recipeSources": [
      {
        "title": "IBA · Margarita",
        "url": "https://iba-world.com/iba-cocktail/margarita/",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "margarita",
    "learn": "A half-salt rim gives you a choice: turn the glass to sip with or without salt. Keep the coating outside the glass rather than dropping salt into the mixture.",
    "expect": "Agave and orange lead into a clean lime finish. Short, bright, and spirit-forward, with salt adding a savory edge when used; try with tortilla chips.",
    "recipeVersion": "Uses IBA 50/20/15 ml and an optional half-salt rim, replacing the card’s 60/30/30 ml formula. Served up without a lime-wheel garnish.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ]
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
        "El Tequileño Blanco tequila"
      ],
      [
        "Juice of 1",
        "Juice of 1",
        "fresh lime"
      ],
      [
        "To top",
        "To top",
        "chilled Mexican cola"
      ],
      [
        "For rim",
        "For rim",
        "coarse salt"
      ],
      [
        "To garnish",
        "To garnish",
        "lime wedge"
      ]
    ],
    "steps": [
      "Salt-rim a highball, fill with ice, and add tequila and lime. Top with cola, stir gently, and garnish."
    ],
    "description": "Tequila and cola sharpened with lime and salt.",
    "label": "The diamonds collection",
    "profile": "Tequila and cola sharpened with lime and salt.",
    "glass": "Highball glass",
    "tip": "A small ingredient list with a well-dressed rim.",
    "tags": [
      "Citrusy",
      "Refreshing",
      "Sparkling"
    ],
    "categories": [
      "tequila"
    ],
    "shortMethod": "Salt-rim a highball, fill with ice, and add tequila and lime. Top with cola, stir gently, and garnish.",
    "detailedSteps": [
      "Moisten the outside rim of a highball with lime and dip it in coarse salt. Fill with cubed ice.",
      "Measure tequila into the glass and squeeze in the juice of one fresh lime.",
      "Top with chilled Mexican cola, leaving room to stir.",
      "Stir gently with a barspoon and add a lime wedge."
    ],
    "recipeSources": [
      {
        "title": "El Tequileño · La Batanga",
        "url": "https://www.tequileno.com/la-batanga-cocktail",
        "accessed": "2026-11-07"
      }
    ],
    "artworkKey": "batanga",
    "learn": "A recipe calling for one lime follows the fruit rather than an exact juice volume. Lime size and juiciness vary, so taste the balance before serving.",
    "expect": "Cola spice and sweetness meet bright lime and earthy tequila, with a salty edge. Familiar and fizzy, but more savory than a simple cola highball.",
    "recipeVersion": "Follows El Tequileño’s 2 oz tequila, whole lime, and cola-to-top recipe. A barspoon replaces the traditional stirring knife for this home version.",
    "researched": true,
    "edition": "diamonds-2026-11",
    "artworkVersion": "diamonds-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "tools": [
      "Jigger",
      "Barspoon",
      "Citrus press"
    ]
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
        "white Cuban rum"
      ],
      [
        "20 ml",
        "0.67 oz",
        "fresh lime juice"
      ],
      [
        "2 barspoons",
        "2 barspoons",
        "superfine sugar"
      ],
      [
        "Optional",
        "Optional",
        "lime wheel"
      ]
    ],
    "steps": [
      "Dissolve sugar with rum and lime. Shake with ice; strain into a chilled coupe."
    ],
    "description": "Rum, lime, and sugar in a beautifully simple balance.",
    "label": "The hearts collection",
    "profile": "Rum, lime, and sugar in a beautifully simple balance.",
    "glass": "Chilled coupe",
    "tip": "Three ingredients. Nowhere for a tired lime to hide.",
    "tags": [
      "Citrusy",
      "Sour"
    ],
    "categories": [
      "rum"
    ],
    "shortMethod": "Dissolve sugar with rum and lime. Shake with ice; strain into a chilled coupe.",
    "detailedSteps": [
      "Chill a coupe while you measure the drink. Squeeze the lime just before mixing.",
      "Stir rum, lime juice, and superfine sugar in the shaker until no gritty sugar remains.",
      "Fill the shaker with ice, seal it, and shake firmly for about 10–15 seconds, until cold.",
      "Empty the coupe and strain in the cocktail without ice. The illustrated lime wheel is an optional house garnish."
    ],
    "recipeSources": [
      {
        "title": "IBA · Daiquiri",
        "url": "https://iba-world.com/iba-cocktail/daiquiri/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "daiquiri",
    "learn": "Shaking chills and dilutes the drink. Dissolving sugar first keeps the final sip from being gritty.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer",
      "Barspoon"
    ],
    "recipeVersion": "IBA measures replace the photographed syrup version. The lime-wheel garnish is optional; IBA specifies none.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "Clean, bright lime with a lightly sweet rum finish. A crisp, short sour rather than a frozen fruit drink."
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
        "50 ml",
        "1.67 oz",
        "white rum"
      ],
      [
        "120 ml",
        "4 oz",
        "cola"
      ],
      [
        "10 ml",
        "0.33 oz",
        "fresh lime juice"
      ],
      [
        "1",
        "1",
        "lime wedge"
      ]
    ],
    "steps": [
      "Build rum, lime, and cola over ice. Stir gently and add a lime wedge."
    ],
    "description": "Rum and cola made lively with fresh lime.",
    "label": "The hearts collection",
    "profile": "Rum and cola made lively with fresh lime.",
    "glass": "Highball glass",
    "tip": "The lime does more work than its size suggests.",
    "tags": [
      "Citrusy",
      "Refreshing",
      "Sparkling"
    ],
    "categories": [
      "rum"
    ],
    "shortMethod": "Build rum, lime, and cola over ice. Stir gently and add a lime wedge.",
    "detailedSteps": [
      "Fill a highball glass with fresh ice so the drink stays cold from the start.",
      "Measure the rum and freshly squeezed lime juice into the glass.",
      "Add chilled cola slowly. Lift once or twice with a spoon to combine without flattening the bubbles.",
      "Set a lime wedge on the rim and serve immediately."
    ],
    "recipeSources": [
      {
        "title": "IBA · Cuba Libre",
        "url": "https://iba-world.com/iba-cocktail/cuba-libre/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "cuba-libre",
    "learn": "Build means mix directly in the serving glass. Carbonated ingredients go in last and are never shaken.",
    "tools": [
      "Jigger",
      "Barspoon"
    ],
    "recipeVersion": "Uses IBA measures: 50 ml rum, 120 ml cola, and 10 ml lime; slightly different from the photographed card.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "Familiar cola sweetness sharpened by lime, with lively bubbles. Try alongside a salty grilled sandwich."
  },
  {
    "id": "mai-tai",
    "name": "Mai Tai",
    "rank": "3",
    "suit": "♥",
    "category": "rum",
    "spirit": "Jamaican & Martinique rum",
    "shape": "rocks",
    "color": "#d6a24e",
    "method": "Shaken",
    "ingredients": [
      [
        "30 ml",
        "1 oz",
        "amber Jamaican rum"
      ],
      [
        "30 ml",
        "1 oz",
        "Martinique molasses rum"
      ],
      [
        "15 ml",
        "0.5 oz",
        "orange curaçao"
      ],
      [
        "15 ml",
        "0.5 oz",
        "orgeat (almond syrup)"
      ],
      [
        "30 ml",
        "1 oz",
        "fresh lime juice"
      ],
      [
        "7.5 ml",
        "0.25 oz",
        "simple syrup"
      ],
      [
        "To garnish",
        "To garnish",
        "mint, pineapple spear, and lime peel"
      ]
    ],
    "steps": [
      "Shake everything except garnish with ice. Pour into a double rocks glass; garnish generously."
    ],
    "description": "Aged rum, almond, and orange with a tart lime finish.",
    "label": "The hearts collection",
    "profile": "Aged rum, almond, and orange with a tart lime finish.",
    "glass": "Rocks glass",
    "tip": "The mint is a tiny aromatic parasol. Give it room.",
    "tags": [
      "Citrusy",
      "Fruity",
      "Tropical",
      "Sour",
      "Nutty"
    ],
    "categories": [
      "rum"
    ],
    "shortMethod": "Shake everything except garnish with ice. Pour into a double rocks glass; garnish generously.",
    "detailedSteps": [
      "Measure both rums, curaçao, orgeat, lime, and simple syrup into a shaker.",
      "Add ice and shake briskly until the shaker feels cold.",
      "Pour the drink and ice into a double rocks glass. Add a little fresh ice if needed.",
      "Garnish with mint, pineapple, and lime. Lightly clap the mint once to release its aroma."
    ],
    "recipeSources": [
      {
        "title": "IBA · Mai-Tai",
        "url": "https://iba-world.com/iba-cocktail/mai-tai/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "mai-tai",
    "learn": "Orgeat brings almond flavour and texture. It usually contains nuts. The IBA specification calls for molasses rum, not agricole.",
    "tools": [
      "Jigger",
      "Shaker"
    ],
    "recipeVersion": "The IBA two-rum formula replaces the card’s single aged rum and adds simple syrup. A lime shell in the artwork is decorative.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "Rum-forward with tart lime, rounded almond, and orange aroma. Tropical, but not a pineapple-juice punch."
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
        "50 ml",
        "1.67 oz",
        "white rum"
      ],
      [
        "30 ml",
        "1 oz",
        "coconut cream"
      ],
      [
        "50 ml",
        "1.67 oz",
        "fresh pineapple juice"
      ],
      [
        "To blend",
        "To blend",
        "ice"
      ],
      [
        "To garnish",
        "To garnish",
        "pineapple slice and cocktail cherry"
      ]
    ],
    "steps": [
      "Blend rum, coconut cream, and pineapple juice with ice until smooth. Pour and garnish."
    ],
    "description": "Creamy coconut and pineapple with white rum.",
    "label": "The hearts collection",
    "profile": "Creamy coconut and pineapple with white rum.",
    "glass": "Hurricane glass",
    "tip": "A little tropical weather, without the airport queue.",
    "tags": [
      "Fruity",
      "Tropical",
      "Creamy",
      "Sweet"
    ],
    "categories": [
      "rum"
    ],
    "shortMethod": "Blend rum, coconut cream, and pineapple juice with ice until smooth. Pour and garnish.",
    "detailedSteps": [
      "Stir the coconut cream until uniform, then measure it into a blender with rum and pineapple juice.",
      "Add a small scoop of ice. Blend, stopping once the drink becomes smooth and spoonably thick.",
      "If needed, add ice a little at a time and blend briefly again; too much makes the flavour watery.",
      "Pour into a large hurricane glass and garnish with pineapple and a cherry."
    ],
    "recipeSources": [
      {
        "title": "IBA · Piña Colada",
        "url": "https://iba-world.com/iba-cocktail/pina-colada/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "pi-a-colada",
    "learn": "Coconut products vary in sweetness and thickness. This card follows IBA’s coconut-cream wording; check your product before mixing.",
    "tools": [
      "Jigger",
      "Blender"
    ],
    "recipeVersion": "Uses IBA 50/30/50 ml proportions instead of the photographed 60/45/60 ml recipe.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "Soft coconut, juicy pineapple, and a thick frozen texture. More creamy and dessert-like than a sharp citrus sour."
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
        "Goslings rum"
      ],
      [
        "100 ml",
        "3.33 oz",
        "ginger beer"
      ],
      [
        "1",
        "1",
        "lime wedge or slice"
      ]
    ],
    "steps": [
      "Fill a highball with ice and ginger beer. Float the rum on top; garnish with lime."
    ],
    "description": "Dark rum and ginger with a refreshing lime edge.",
    "label": "The hearts collection",
    "profile": "Dark rum and ginger with a refreshing lime edge.",
    "glass": "Highball glass",
    "tip": "Admire the storm cloud. Then stir it into the sunshine.",
    "tags": [
      "Citrusy",
      "Refreshing",
      "Sparkling",
      "Spiced"
    ],
    "categories": [
      "rum"
    ],
    "shortMethod": "Fill a highball with ice and ginger beer. Float the rum on top; garnish with lime.",
    "detailedSteps": [
      "Pack a highball glass with ice and pour in well-chilled ginger beer.",
      "Hold a spoon near the surface and slowly pour the rum over its back to help form a dark top layer.",
      "Garnish with lime. The colour gradient is presentation, not a mixing requirement.",
      "Give the drink a gentle stir before sipping if you prefer an even flavour throughout."
    ],
    "recipeSources": [
      {
        "title": "IBA · Dark ’N’ Stormy",
        "url": "https://iba-world.com/iba-cocktail/dark-n-stormy/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "dark-n-stormy",
    "learn": "Floating means layering one liquid gently over another. Ginger beer is added directly to the glass, never shaken.",
    "tools": [
      "Jigger",
      "Barspoon"
    ],
    "recipeVersion": "IBA version: Goslings rum, ginger beer, and lime garnish. The photographed added lime juice is omitted.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "Fizzy ginger heat with dark-rum richness and lime aroma. A spicy, refreshing long drink."
  },
  {
    "id": "painkiller",
    "name": "Painkiller",
    "rank": "6",
    "suit": "♥",
    "category": "rum",
    "spirit": "Pusser’s rum",
    "shape": "hurricane",
    "color": "#e0bd72",
    "method": "Shaken",
    "ingredients": [
      [
        "60 ml",
        "2 oz",
        "Pusser’s rum"
      ],
      [
        "120 ml",
        "4 oz",
        "pineapple juice"
      ],
      [
        "30 ml",
        "1 oz",
        "orange juice"
      ],
      [
        "30 ml",
        "1 oz",
        "cream of coconut (sweetened)"
      ],
      [
        "To garnish",
        "To garnish",
        "freshly grated nutmeg"
      ],
      [
        "Optional",
        "Optional",
        "orange slice and cherry"
      ]
    ],
    "steps": [
      "Shake rum, juices, and cream of coconut with ice. Pour over ice; finish with nutmeg."
    ],
    "description": "Pineapple and coconut, orange brightness, and a fragrant nutmeg finish.",
    "label": "The hearts collection",
    "profile": "Creamy · tropical · spiced",
    "glass": "Large snifter or hurricane glass",
    "tip": "The nutmeg is the tiny detail that steals the scene.",
    "tags": [
      "Tropical",
      "Fruity",
      "Creamy",
      "Spiced",
      "Sweet"
    ],
    "categories": [
      "rum"
    ],
    "shortMethod": "Shake rum, juices, and cream of coconut with ice. Pour over ice; finish with nutmeg.",
    "detailedSteps": [
      "Stir the sweetened cream of coconut until smooth. Measure it with rum and both juices into a shaker.",
      "Add ice and shake firmly to combine the thick coconut with the juices.",
      "Pour into a large snifter or hurricane glass over fresh ice, leaving room for garnish.",
      "Grate a little nutmeg over the surface. An orange slice and cherry are optional finishing touches."
    ],
    "recipeSources": [
      {
        "title": "Pusser’s · Painkiller",
        "url": "https://pussersrum.com/blogs/logbook/best-painkiller-cocktail-recipes-for-a-soothing-night-in",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "painkiller",
    "learn": "Cream of coconut is sweetened and differs from plain coconut cream. This recipe needs the sweetened product.",
    "tools": [
      "Jigger",
      "Shaker",
      "Nutmeg grater"
    ],
    "recipeVersion": "Pusser’s 2:4:1:1 formula fills the former 6♥ Moscow Mule slot. The 2♦ vodka Mule remains.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "Rich coconut and pineapple with a softer orange note, finished by nutmeg aroma. Creamy and tropical; try with lightly spiced grilled food."
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
        "40 ml",
        "1.33 oz",
        "grapefruit juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "maraschino liqueur"
      ],
      [
        "15 ml",
        "0.5 oz",
        "fresh lime juice"
      ],
      [
        "Optional",
        "Optional",
        "grapefruit twist"
      ]
    ],
    "steps": [
      "Shake rum, grapefruit, maraschino, and lime with ice. Strain into a large chilled coupe."
    ],
    "description": "A dry, citrus-led daiquiri with grapefruit and cherry.",
    "label": "The hearts collection",
    "profile": "A dry, citrus-led daiquiri with grapefruit and cherry.",
    "glass": "Chilled coupe",
    "tip": "No diary required. Just a fresh grapefruit and a cold glass.",
    "tags": [
      "Citrusy",
      "Fruity",
      "Sour"
    ],
    "categories": [
      "rum"
    ],
    "shortMethod": "Shake rum, grapefruit, maraschino, and lime with ice. Strain into a large chilled coupe.",
    "detailedSteps": [
      "Chill a large coupe. Measure the rum, grapefruit juice, maraschino liqueur, and lime into a shaker.",
      "Add plenty of ice and seal the shaker securely.",
      "Shake until cold, then strain into the empty chilled glass, leaving the ice behind.",
      "Serve without ice. A grapefruit twist, as pictured, is an optional house garnish."
    ],
    "recipeSources": [
      {
        "title": "IBA · Hemingway Special",
        "url": "https://iba-world.com/iba-cocktail/hemingway-special/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "hemingway-daiquiri",
    "learn": "Maraschino is a clear cherry liqueur, not the syrup from a jar of cocktail cherries.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ],
    "recipeVersion": "Keeps the familiar menu name but uses IBA Hemingway Special measures. IBA specifies no garnish.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "Brisk lime and grapefruit, a faint cherry note, and a relatively dry finish. More tart and bittersweet than a standard Daiquiri."
  },
  {
    "id": "planter-s-punch",
    "name": "Planter’s Punch",
    "rank": "8",
    "suit": "♥",
    "category": "rum",
    "spirit": "Dark rum",
    "shape": "rocks",
    "color": "#b5753c",
    "method": "Built",
    "ingredients": [
      [
        "45 ml",
        "1.5 oz",
        "Jamaican rum"
      ],
      [
        "15 ml",
        "0.5 oz",
        "fresh lime juice"
      ],
      [
        "30 ml",
        "1 oz",
        "sugar-cane juice"
      ],
      [
        "To taste",
        "To taste",
        "ice or water for dilution"
      ],
      [
        "1",
        "1",
        "orange zest strip"
      ]
    ],
    "steps": [
      "Build rum, lime, and cane juice in a small tumbler. Dilute to taste and garnish with orange zest."
    ],
    "description": "Jamaican rum and fresh lime, softened with sugar-cane juice.",
    "label": "The hearts collection",
    "profile": "Dark rum and lime with an aromatic bitters finish.",
    "glass": "Small tumbler or terracotta cup",
    "tip": "A little punch with a big opinion about good rum.",
    "tags": [
      "Citrusy",
      "Spirit-forward"
    ],
    "categories": [
      "rum"
    ],
    "shortMethod": "Build rum, lime, and cane juice in a small tumbler. Dilute to taste and garnish with orange zest.",
    "detailedSteps": [
      "Measure rum, lime, and sugar-cane juice into a small tumbler or terracotta cup.",
      "Stir to combine. Sugar-cane juice is a juice, not concentrated cane syrup.",
      "Add a few ice pieces or a small splash of water. Stir, taste, and adjust dilution gradually.",
      "Twist orange zest over the surface and rest it on the rim."
    ],
    "recipeSources": [
      {
        "title": "IBA · Planters Punch",
        "url": "https://iba-world.com/iba-cocktail/planters-punch/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "planter-s-punch",
    "learn": "Dilution is part of the recipe: water softens intensity and lets aromas open up.",
    "tools": [
      "Jigger",
      "Barspoon",
      "Peeler"
    ],
    "recipeVersion": "This is the current IBA cane-juice version, not the photographed syrup-and-bitters variation.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "Jamaican rum leads, softened by cane juice and lifted by lime. This compact version is more rum-led than a tall fruit punch."
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
        "30 ml",
        "1 oz",
        "BACARDÍ Black rum"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "BACARDÍ Superior rum"
      ],
      [
        "30 ml",
        "1 oz",
        "orange juice"
      ],
      [
        "30 ml",
        "1 oz",
        "fresh lime juice"
      ],
      [
        "30 ml",
        "1 oz",
        "passion-fruit syrup"
      ],
      [
        "1 tsp",
        "1 tsp",
        "grenadine"
      ],
      [
        "To garnish",
        "To garnish",
        "lemon wheel, orange peel, and cherry"
      ]
    ],
    "steps": [
      "Shake both rums, juices, and syrups with ice. Strain over fresh ice in a hurricane glass."
    ],
    "description": "Two rums with passion fruit, orange, lime, and a blush of grenadine.",
    "label": "The hearts collection",
    "profile": "A generous rum punch with passion fruit and lime.",
    "glass": "Hurricane glass",
    "tip": "Forecast: passion fruit, bright citrus, and a cherry on top.",
    "tags": [
      "Citrusy",
      "Fruity",
      "Tropical",
      "Sweet"
    ],
    "categories": [
      "rum"
    ],
    "shortMethod": "Shake both rums, juices, and syrups with ice. Strain over fresh ice in a hurricane glass.",
    "detailedSteps": [
      "Fill the serving glass with fresh ice. Measure all liquid ingredients into a shaker.",
      "Add plenty of ice, seal, and shake vigorously until the shaker is cold.",
      "Strain into the prepared glass; leave enough space at the top for the garnish.",
      "Finish with citrus and a cherry. The artwork’s orange wheel is an optional substitute for the peel."
    ],
    "recipeSources": [
      {
        "title": "BACARDÍ US · Hurricane",
        "url": "https://www.bacardi.com/us/en/rum-cocktails/hurricane/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "hurricane",
    "learn": "Passion-fruit syrup is sweetened. Juice or purée is not a direct one-for-one substitute.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ],
    "recipeVersion": "Uses BACARDÍ’s US recipe, with less rum than the photographed card. Other Hurricane versions differ.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "Passion fruit and orange with tart lime and a little grenadine sweetness. Juicy, bright, and tropical."
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
        "60 ml",
        "2 oz",
        "cachaça"
      ],
      [
        "1",
        "1",
        "lime, cut into small wedges"
      ],
      [
        "4 tsp",
        "4 tsp",
        "white cane sugar"
      ],
      [
        "To fill",
        "To fill",
        "cracked ice"
      ]
    ],
    "steps": [
      "Gently muddle lime with sugar. Fill with cracked ice, add cachaça, and stir."
    ],
    "description": "Fresh muddled lime and sugar with Brazilian cachaça.",
    "label": "The hearts collection",
    "profile": "Fresh muddled lime and sugar with Brazilian cachaça.",
    "glass": "Rocks glass",
    "tip": "Persuade the lime. No interrogation necessary.",
    "tags": [
      "Citrusy",
      "Refreshing"
    ],
    "categories": [
      "cachaca"
    ],
    "shortMethod": "Gently muddle lime with sugar. Fill with cracked ice, add cachaça, and stir.",
    "detailedSteps": [
      "Cut a washed lime into small wedges and place them in a sturdy double rocks glass.",
      "Add sugar and press gently with a muddler to release juice. Avoid grinding the peel into a paste.",
      "Fill the glass with cracked ice, then measure in the cachaça.",
      "Stir from the bottom to lift the sweetened lime juice through the drink. Leave the lime pieces in."
    ],
    "recipeSources": [
      {
        "title": "IBA · Caipirinha",
        "url": "https://iba-world.com/iba-cocktail/caipirinha/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "caipirinha",
    "learn": "Cachaça is the defining spirit here. Muddling releases juice and peel oils; a gentle touch limits bitterness.",
    "tools": [
      "Jigger",
      "Muddler",
      "Barspoon"
    ],
    "recipeVersion": "IBA supplies the card’s missing spirit amount and specifies four teaspoons of sugar.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "Zesty lime oils, fresh lime juice, and a grassy cane-spirit character. Sweet-tart with a lively, rustic texture."
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
        "Laird’s Applejack"
      ],
      [
        "22.5 ml",
        "0.75 oz",
        "fresh lemon juice"
      ],
      [
        "15 ml",
        "0.5 oz",
        "pomegranate grenadine"
      ],
      [
        "Optional",
        "Optional",
        "lemon twist"
      ]
    ],
    "steps": [
      "Shake applejack, lemon, and grenadine with ice. Strain into a chilled coupe."
    ],
    "description": "Apple brandy, lemon, and a blush of grenadine.",
    "label": "The hearts collection",
    "profile": "Apple brandy, lemon, and a blush of grenadine.",
    "glass": "Chilled coupe",
    "tip": "The rose is the colour. The apple does the talking.",
    "tags": [
      "Citrusy",
      "Fruity",
      "Sour"
    ],
    "categories": [
      "applejack"
    ],
    "shortMethod": "Shake applejack, lemon, and grenadine with ice. Strain into a chilled coupe.",
    "detailedSteps": [
      "Chill a coupe. Measure applejack, fresh lemon juice, and pomegranate grenadine into a shaker.",
      "Add ice and shake firmly for about 10–15 seconds.",
      "Strain into the chilled glass without ice; use a fine strainer too if you prefer a cleaner surface.",
      "Add an optional lemon twist, expressing its oils over the drink first."
    ],
    "recipeSources": [
      {
        "title": "Laird & Company · Jack Rose",
        "url": "https://www.lairdandcompany.com/all-cocktails/jack-rose-cocktail",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "jack-rose",
    "learn": "Grenadine is pomegranate-based syrup. Applejack gives this sour its apple character; it is not a rum drink.",
    "tools": [
      "Jigger",
      "Shaker",
      "Strainer"
    ],
    "recipeVersion": "Measures match Laird’s published recipe and the photographed card. Expanded steps and garnish are house guidance.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "Apple-brandy warmth, lemon brightness, and a pomegranate finish. Fruity but still a compact, tart cocktail."
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
        "50 ml",
        "1.67 oz",
        "white rhum agricole"
      ],
      [
        "1",
        "1",
        "lime wedge or cheek"
      ],
      [
        "1 tsp",
        "1 tsp",
        "cane sugar or cane syrup"
      ]
    ],
    "steps": [
      "Press lime into sugar, stir, then add rhum agricole and stir again. Serve in a small glass."
    ],
    "description": "Grassy agricole rum with cane syrup and a little lime.",
    "label": "The hearts collection",
    "profile": "Grassy agricole rum with cane syrup and a little lime.",
    "glass": "Rocks glass",
    "tip": "Small glass. Big cane-field energy.",
    "tags": [
      "Spirit-forward",
      "Citrusy",
      "Herbal"
    ],
    "categories": [
      "rum"
    ],
    "shortMethod": "Press lime into sugar, stir, then add rhum agricole and stir again. Serve in a small glass.",
    "detailedSteps": [
      "Put a teaspoon of cane sugar or syrup into a small rocks glass.",
      "Press a lime wedge or cheek over it, drop it in, and stir to combine the juice and sugar.",
      "Measure in rhum agricole and stir again until the mixture is integrated.",
      "Serve as a small, spirit-led drink. The illustration shows it without ice; add a small cube if preferred."
    ],
    "recipeSources": [
      {
        "title": "Rhum Clément · Ti’Punch",
        "url": "https://www.rhum-clement.com/en/cocktail/tipunch/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "ti-punch",
    "learn": "Rhum agricole is distilled from fresh sugar-cane juice rather than molasses. Check the bottle label: ordinary white rum is not the same ingredient.",
    "tools": [
      "Jigger",
      "Barspoon"
    ],
    "recipeVersion": "Uses Clément’s 50 ml rum and teaspoon of sugar/syrup, rather than the photographed 60/15 ml formula.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "A short, concentrated sip with grassy cane character, a little sweetness, and lime-peel aroma. No juice-heavy tropical softness."
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
        "45 ml",
        "1.5 oz",
        "white Cuban rum"
      ],
      [
        "20 ml",
        "0.67 oz",
        "fresh lime juice"
      ],
      [
        "6 small sprigs",
        "6 small sprigs",
        "mint"
      ],
      [
        "2 tsp",
        "2 tsp",
        "white cane sugar"
      ],
      [
        "To top",
        "To top",
        "soda water"
      ],
      [
        "To garnish",
        "To garnish",
        "mint sprig and lime slice"
      ]
    ],
    "steps": [
      "Gently press mint with sugar and lime. Add ice and rum, top with soda, and stir lightly."
    ],
    "description": "Cool mint, fresh lime, and sparkling white rum.",
    "label": "The hearts collection",
    "profile": "Cool mint, fresh lime, and sparkling white rum.",
    "glass": "Highball glass",
    "tip": "Wake the mint up. Don’t send it through a wood chipper.",
    "tags": [
      "Citrusy",
      "Refreshing",
      "Herbal",
      "Sparkling"
    ],
    "categories": [
      "rum"
    ],
    "shortMethod": "Gently press mint with sugar and lime. Add ice and rum, top with soda, and stir lightly.",
    "detailedSteps": [
      "Put mint, sugar, and lime juice in a tall glass. Gently press the mint; do not shred the leaves.",
      "Add a small splash of soda and stir to help dissolve the sugar.",
      "Fill with ice, pour in the rum, and top with chilled soda water.",
      "Lift gently with a spoon to mix. Garnish with mint and a lime slice."
    ],
    "recipeSources": [
      {
        "title": "IBA · Mojito",
        "url": "https://iba-world.com/iba-cocktail/mojito/",
        "accessed": "2026-11-06"
      }
    ],
    "artworkKey": "mojito",
    "learn": "The aroma of intact mint is part of the drink. Gentle mixing preserves both fresh fragrance and soda bubbles.",
    "tools": [
      "Jigger",
      "Barspoon",
      "Muddler"
    ],
    "recipeVersion": "Follows IBA rum, lime, and sugar measures. IBA lists six mint sprigs; use small sprigs that fit the glass.",
    "researched": true,
    "edition": "hearts-2026-11",
    "artworkVersion": "hearts-1",
    "measureNote": "Metric measures are the reference; oz values are rounded using 30 ml per recipe ounce.",
    "expect": "Fresh mint, bright lime, and light sweetness with crisp soda bubbles. A refreshing partner for grilled vegetables or seafood."
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
    "tip": "This is a strong, large serving, including 151-proof rum; it can be divided into smaller portions.",
    "tags": [
      "Citrusy",
      "Fruity",
      "Tropical",
      "Spiced"
    ],
    "categories": [
      "rum"
    ],
    "shortMethod": "Shake all ingredients with ice until the sugar is dissolved. Pour into a tiki mug over fresh ice and garnish with tropical fruit.",
    "detailedSteps": [],
    "recipeSources": [],
    "artworkKey": "zombie"
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
    "tip": "Pour slowly to control the foam. Choose a glass that holds at least 165 ml with room to spare.",
    "tags": [
      "Spirit-forward",
      "Herbal",
      "Sparkling"
    ],
    "categories": [
      "absinthe"
    ],
    "shortMethod": "Pour absinthe into a large flute. Slowly top with chilled Champagne.",
    "detailedSteps": [],
    "recipeSources": [],
    "artworkKey": "death-in-the-afternoon"
  }
];
