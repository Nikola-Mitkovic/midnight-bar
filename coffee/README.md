# Midnight Café — Coffee Roulette

Live page: `/coffee/` under the existing Midnight Bar GitHub Pages site.

## Navigation
Both the cocktail and coffee pages have prominently styled links to the sister page. Their URLs remain stable.

## Wheel
European roulette pocket order, 0–36; 0 is green, and the other pockets use their standard red/black roulette colors. **The wheel stays fixed while the ball spins** and lands on the randomly selected eligible recipe. All 37 recipes participate. This is a themed interactive picker, not a gambling service or physics simulation.

## Coffee recipes
All 37 cards live in `coffee/recipes.js`. Each includes a number, type, quantities, method, ingredient keys, roulette accent color, and a source URL. The listed preparations are practical house variations rather than rigid universal specifications, especially flavored café drinks.

Background references:
- https://coffeeassoc.com/coffee-101/styles-of-coffee/
- https://baristarecipes.com/recipes/
- https://iba-world.com/iba-cocktail/irish-coffee/

Ingredient exclusions prevent drinks containing the selected ingredient from being drawn. A menu with text search and style filtering lets guests deliberately select any recipe.

## Artwork
The first seven illustrations are lightweight SVG starter art in `coffee/images/`: espresso, cappuccino, iced-latte, mocha, affogato, pumpkin-spice, irish-coffee. Other recipes display elegant placeholders. For a final image, upload a WebP or PNG to the same folder and set the corresponding recipe's `artwork` property to `images/your-file.webp` or `.png`. No illustration file is necessary for a placeholder.

Source files: `coffee/index.html` (layout), `coffee/cafe.css` (theme), `coffee/cafe.js` (interactive roulette, exclusions, menu), `coffee/recipes.js` (recipes).
