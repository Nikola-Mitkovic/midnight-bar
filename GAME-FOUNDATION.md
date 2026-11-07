# Game night groundwork

`games/deck.js` is a separate, tested module for the next update. The live menu does not load it yet. Existing recipes and artwork stay the single source of truth: each playing card points to a `cocktailId`, rather than keeping a second recipe database.

## Ready now

- A standard 52-card deck created from the four suits; the two jokers stay in the menu but are excluded from standard games.
- Copy-based shuffle and round-robin dealing for a requested player count, rejecting deals larger than the remaining deck.
- Five-card high-poker hand recognition and comparisons, including kickers, ties, and the ace-low straight. Royal flush is the highest straight flush.
- Single-deck blackjack totals, flexible aces, soft hands, busts, and two-card blackjack.
- Duplicate or invalid cards are rejected. Input arrays are never consumed or rearranged.

## Connecting the future interface

Load `recipes.js`, then `games/deck.js`. It exposes `MidnightGames` in a browser and CommonJS exports for Node tests. It works from disk or GitHub Pages without a build step.

```js
const deck = MidnightGames.shuffle(MidnightGames.createDeck(cocktails));
const {hands, remaining} = MidnightGames.deal(deck, 4, 5);
const results = hands.map(hand => MidnightGames.evaluatePoker(hand));
const chosenRecipe = cocktails.find(c => c.id === hands[0][0].cocktailId);
// Future UI can use the existing artwork() and openRecipe() functions.
```

`comparePoker(handA, handB)` returns 1, 0, or -1. `scoreBlackjack(hand)` returns `{total, soft, bust, blackjack}`. A caller must distinguish a split hand from an original opening hand if splits are introduced. No dealer policy, multi-deck shoe, or seven-card poker evaluator is included.

## Next session

Build a player-count screen and choose a game; keep hand resolution separate from the rule that recommends a cocktail. Decide whether a poker hand recommends one of its own cards or a matching flavor family, and whether blackjack serves individual suggestions or a shared table suggestion. Keep these rules in a separate policy file so they can be changed without touching recipes, artwork, or scoring. A party round can recommend a drink without prescribing how much anyone should consume.

Proposed starting point: five-card hands for a group (up to ten from one deck), or a casual blackjack round. Player names, turn order, hit/stand controls, dealer behavior, and final recommendation screens are deferred to that update. No game controls are displayed in the menu yet.

## Rules references

Checked 7 November 2026: [World Poker Tour hand rankings](https://www.worldpokertour.com/learn/poker-hand-rankings/) and [Bicycle blackjack rules](https://bicyclecards.com/how-to-play/blackjack/). Only hand-ranking and card-value rules are implemented; betting rules are outside this foundation.

Run the included foundation checks with `node games/deck.test.cjs` from this folder. Node is only needed for these checks, not for the website.
