# Replace artwork without changing the website code

## Easiest path: one image file per drink

1. Prepare a WebP image of the drink illustration (a transparent background works best).
2. Use its exact filename from the table below. Filenames are lowercase and case-sensitive on GitHub Pages.
3. In GitHub, open the `images` folder, choose **Add file → Upload files**, and upload it. Commit the change.
4. Once Pages redeploys, refresh the site. That image appears on the menu card, in recipe details, and in the hero if it is Old Fashioned. The same path is reused everywhere.

To replace it later, upload a new image with the same filename into `images` and commit. You do not need to edit any JavaScript. If the browser retains the old photo, hard-refresh or open a private tab. For a deliberate cache refresh across visitors, change the optional version in `artwork.js`.

Keep the rest of the site files in place when uploading art. Missing or broken images show the existing SVG illustration, without a broken-image icon. Images are fitted without cropping. Recommended: at least 600 × 600 pixels, with the drink centered and some breathing room; aim for under 300 KB. Recommendations are not upload limits. Crop out printed card text if you want to retain the website's own typography.

## PNG, JPEG, or a different filename

The automatic path is `images/DRINK-ID.webp`. To use another format, add one entry inside `overrides` in `artwork.js`, following its commented example. For example:

```js
"old-fashioned": { "src": "images/old-fashioned.png", "alt": "Watercolor Old Fashioned with orange peel", "version": "1" }
```

Use `src: null` to deliberately keep SVG artwork for that drink. A per-drink version is optional; increment it when replacing a cached image. Do not put multiple entries with the same key in the file.

## Exact filenames

Some IDs keep simplified spellings for compatibility (for example `pi-a-colada`). Use the names below exactly rather than guessing them. The two Moscow Mules have separate artwork slots.

| Card | File in images/ |
| --- | --- |
| A ♠ Old Fashioned | `old-fashioned.webp` |
| 2 ♠ Manhattan | `manhattan.webp` |
| 3 ♠ Whiskey Sour | `whiskey-sour.webp` |
| 4 ♠ Mint Julep | `mint-julep.webp` |
| 5 ♠ Sazerac | `sazerac.webp` |
| 6 ♠ Boulevardier | `boulevardier.webp` |
| 7 ♠ Irish Coffee | `irish-coffee.webp` |
| 8 ♠ Rusty Nail | `rusty-nail.webp` |
| 9 ♠ Penicillin | `penicillin.webp` |
| 10 ♠ Rob Roy | `rob-roy.webp` |
| J ♠ New York Sour | `new-york-sour.webp` |
| Q ♠ Godfather | `godfather.webp` |
| K ♠ Blood and Sand | `blood-and-sand.webp` |
| A ♣ Dry Martini | `dry-martini.webp` |
| 2 ♣ Gin & Tonic | `gin-tonic.webp` |
| 3 ♣ Gimlet | `gimlet.webp` |
| 4 ♣ Tom Collins | `tom-collins.webp` |
| 5 ♣ Aviation | `aviation.webp` |
| 6 ♣ Bee’s Knees | `bee-s-knees.webp` |
| 7 ♣ The Last Word | `the-last-word.webp` |
| 8 ♣ Singapore Sling | `singapore-sling.webp` |
| 9 ♣ Vesper | `vesper.webp` |
| 10 ♣ White Lady | `white-lady.webp` |
| J ♣ Negroni | `negroni.webp` |
| Q ♣ French 75 | `french-75.webp` |
| K ♣ Corpse Reviver #2 | `corpse-reviver-2.webp` |
| A ♦ Cosmopolitan | `cosmopolitan.webp` |
| 2 ♦ Moscow Mule | `moscow-mule.webp` |
| 3 ♦ Bloody Mary | `bloody-mary.webp` |
| 4 ♦ Espresso Martini | `espresso-martini.webp` |
| 5 ♦ Sex on the Beach | `sex-on-the-beach.webp` |
| 6 ♦ White Russian | `white-russian.webp` |
| 7 ♦ Lemon Drop | `lemon-drop.webp` |
| 8 ♦ Tequila Sunrise | `tequila-sunrise.webp` |
| 9 ♦ Paloma | `paloma.webp` |
| 10 ♦ Tommy’s Margarita | `tommy-s-margarita.webp` |
| J ♦ El Diablo | `el-diablo.webp` |
| Q ♦ Margarita | `margarita.webp` |
| K ♦ Batanga | `batanga.webp` |
| A ♥ Daiquiri | `daiquiri.webp` |
| 2 ♥ Cuba Libre | `cuba-libre.webp` |
| 3 ♥ Mai Tai | `mai-tai.webp` |
| 4 ♥ Piña Colada | `pi-a-colada.webp` |
| 5 ♥ Dark ’n’ Stormy | `dark-n-stormy.webp` |
| 6 ♥ Moscow Mule | `moscow-mule-hearts.webp` |
| 7 ♥ Hemingway Daiquiri | `hemingway-daiquiri.webp` |
| 8 ♥ Planter’s Punch | `planter-s-punch.webp` |
| 9 ♥ Hurricane | `hurricane.webp` |
| 10 ♥ Caipirinha | `caipirinha.webp` |
| J ♥ Jack Rose | `jack-rose.webp` |
| Q ♥ Ti’ Punch | `ti-punch.webp` |
| K ♥ Mojito | `mojito.webp` |
| JOKER ★ Zombie | `zombie.webp` |
| JOKER ★ Death in the Afternoon | `death-in-the-afternoon.webp` |
