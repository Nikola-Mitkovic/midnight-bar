'use strict';
// A simple showcase card, independent from menu filters and the open recipe.
// Change HERO_INTERVAL_MS to adjust the time between random cards.
const HERO_INTERVAL_MS = 20000;
const featuredCard = document.querySelector('.featured-card');
const heroPause = document.querySelector('#hero-pause');
const heroNext = document.querySelector('#hero-next');
let heroCurrentId = null;
let heroPaused = false;
let heroTimer = null;

function dealHeroCard() {
  const choices = cocktails.filter(c => c.id !== heroCurrentId);
  const c = choices[Math.floor(Math.random() * choices.length)];
  if (!c) return;
  heroCurrentId = c.id;
  const rank = c.rank === 'JOKER' ? 'Jkr' : c.rank;
  featuredCard.classList.toggle('red-suit', ['♥', '♦'].includes(c.suit));
  featuredCard.dataset.cocktail = c.id;
  featuredCard.innerHTML = `<div class="featured-content"><span class="corner" aria-hidden="true">${escapeHTML(rank)}<br>${escapeHTML(c.suit)}</span><p class="card-kicker">${escapeHTML(c.label)}</p><h2>${escapeHTML(c.name)}</h2><div id="hero-drink">${artwork(c, 'hero')}</div><p class="card-caption">${escapeHTML(c.spirit)} · ${escapeHTML(c.method)}</p><span class="corner bottom" aria-hidden="true">${escapeHTML(rank)}<br>${escapeHTML(c.suit)}</span></div>`;
  activateArtwork(featuredCard);
}

function scheduleHero() {
  clearInterval(heroTimer);
  heroTimer = null;
  if (!heroPaused && !document.hidden) {
    heroTimer = setInterval(() => {
      // Reading a full recipe should not reshuffle the background.
      if (!document.hidden && !dialog.open) dealHeroCard();
    }, HERO_INTERVAL_MS);
  }
}

heroPause.addEventListener('click', () => {
  heroPaused = !heroPaused;
  heroPause.textContent = heroPaused ? 'Resume shuffle' : 'Pause shuffle';
  heroPause.setAttribute('aria-pressed', String(heroPaused));
  scheduleHero();
});
heroNext.addEventListener('click', () => {
  dealHeroCard();
  scheduleHero();
});
document.addEventListener('visibilitychange', scheduleHero);
dealHeroCard();
scheduleHero();
