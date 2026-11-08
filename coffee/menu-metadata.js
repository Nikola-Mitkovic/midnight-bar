'use strict';
// Display metadata stays separate from quantities and preparation instructions.
// French wheel sectors: https://www.playsmart.ca/table-games/roulette/how-to-play/european-roulette/
(() => {
 const voisins = new Set([0,2,3,4,7,12,15,18,19,21,22,25,26,28,29,32,35]);
 const tiers = new Set([5,8,10,11,13,16,23,24,27,30,33,36]);
 const bases = {
  espresso:'Ground Espresso Coffee', doppio:'Ground Coffee', ristretto:'Ground Espresso Coffee', lungo:'Ground Espresso Coffee',
  'cold-brew':'Ground Coffee','vietnamese-iced':'Ground Coffee','irish-coffee':'Brewed Coffee',dalgona:'Instant Coffee',
  'iced-latte':'Double Espresso',americano:'Double Espresso',cortado:'Double Espresso','flat-white':'Double Espresso',latte:'Double Espresso',
  'freddo-espresso':'Double Espresso','freddo-cappuccino':'Double Espresso',shakerato:'Double Espresso','espresso-tonic':'Double Espresso','iced-americano':'Double Espresso'
 };
 window.CAFE_MENU = Object.fromEntries(window.CAFE_RECIPES.map(c=>[c.id,{
  base:bases[c.id] || 'Espresso',
  description:window.CAFE_DETAILS[c.id].expect,
  sector:voisins.has(c.number)?'Voisins du Zéro':tiers.has(c.number)?'Tiers du Cylindre':'Orphelins'
 }]));
})();
