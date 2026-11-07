/* Shared foundation for future cocktail games. No UI or drink rules yet. */
(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.MidnightGames = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const SUITS = Object.freeze(['♠', '♣', '♦', '♥']);
  const RANKS = Object.freeze(['2','3','4','5','6','7','8','9','10','J','Q','K','A']);
  const value = rank => RANKS.indexOf(rank) + 2;
  function validate(cards, exactLength) {
    if (!Array.isArray(cards) || (exactLength !== undefined && cards.length !== exactLength)) throw new TypeError('Invalid number of cards.');
    const seen = new Set();
    for (const c of cards) {
      if (!c || !SUITS.includes(c.suit) || !RANKS.includes(c.rank)) throw new TypeError('Use standard cards, without jokers.');
      const key = c.suit + c.rank;
      if (seen.has(key)) throw new TypeError('Duplicate card.');
      seen.add(key);
    }
  }
  function createDeck(recipes) {
    if (!Array.isArray(recipes)) throw new TypeError('Provide the cocktail recipe array.');
    return SUITS.flatMap(suit => RANKS.map(rank => {
      const matches = recipes.filter(c => c.suit === suit && c.rank === rank);
      if (matches.length !== 1 || typeof matches[0].id !== 'string' || !matches[0].id) throw new Error('Each rank and suit must map to exactly one cocktail.');
      return {rank, suit, cocktailId: matches[0].id};
    }));
  }
  function shuffle(deck, random = Math.random) {
    validate(deck);
    const result = deck.map(c => ({...c}));
    for (let i = result.length - 1; i > 0; i--) {
      const n = random();
      if (!Number.isFinite(n) || n < 0 || n >= 1) throw new RangeError('Random values must be in [0, 1).');
      const j = Math.floor(n * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function deal(deck, players, cardsEach) {
    validate(deck);
    if (!Number.isInteger(players) || players < 1 || !Number.isInteger(cardsEach) || cardsEach < 1 || players * cardsEach > deck.length) throw new RangeError('Not enough cards for this deal.');
    const hands = Array.from({length: players}, () => []);
    for (let i = 0; i < players * cardsEach; i++) hands[i % players].push({...deck[i]});
    return {hands, remaining: deck.slice(players * cardsEach).map(c => ({...c}))};
  }
  function scoreBlackjack(hand) {
    validate(hand);
    let total = 0, aces = 0;
    for (const c of hand) {
      if (c.rank === 'A') { total += 11; aces++; }
      else total += Math.min(value(c.rank), 10);
    }
    while (total > 21 && aces) { total -= 10; aces--; }
    return {total, soft: aces > 0, bust: total > 21, blackjack: total === 21 && hand.length === 2};
  }
  function evaluatePoker(hand) {
    validate(hand, 5);
    const ranks = hand.map(c => value(c.rank)).sort((a,b) => b-a);
    const groups = [...new Set(ranks)].map(v => ({value:v, count:ranks.filter(r => r === v).length})).sort((a,b) => b.count-a.count || b.value-a.value);
    const flush = hand.every(c => c.suit === hand[0].suit);
    const wheel = ranks.join(',') === '14,5,4,3,2';
    const straight = groups.length === 5 && (ranks[0] - ranks[4] === 4 || wheel);
    const high = wheel ? 5 : ranks[0];
    const g = groups.map(x => x.value);
    let category, name, tiebreak;
    if (straight && flush) { category=8; name=high===14?'Royal flush':'Straight flush'; tiebreak=[high]; }
    else if (groups[0].count === 4) { category=7; name='Four of a kind'; tiebreak=g; }
    else if (groups[0].count === 3 && groups[1].count === 2) { category=6; name='Full house'; tiebreak=g; }
    else if (flush) { category=5; name='Flush'; tiebreak=ranks; }
    else if (straight) { category=4; name='Straight'; tiebreak=[high]; }
    else if (groups[0].count === 3) { category=3; name='Three of a kind'; tiebreak=g; }
    else if (groups[0].count === 2 && groups[1].count === 2) { category=2; name='Two pair'; tiebreak=g; }
    else if (groups[0].count === 2) { category=1; name='One pair'; tiebreak=g; }
    else { category=0; name='High card'; tiebreak=ranks; }
    return {category, name, tiebreak};
  }
  function comparePoker(a, b) {
    const x = evaluatePoker(a), y = evaluatePoker(b);
    if (x.category !== y.category) return Math.sign(x.category-y.category);
    for (let i=0; i<x.tiebreak.length; i++) {
      if (x.tiebreak[i] !== y.tiebreak[i]) return Math.sign(x.tiebreak[i]-y.tiebreak[i]);
    }
    return 0;
  }
  return Object.freeze({SUITS, RANKS, createDeck, shuffle, deal, scoreBlackjack, evaluatePoker, comparePoker});
});
