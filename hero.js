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
  featuredCard.setAttribute('aria-label', 'Go to ' + c.name + ' in the cocktail menu');
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


// Featured card: reveal its matching cocktail in the grid, then scroll to it.
featuredCard.setAttribute('role', 'link');
featuredCard.setAttribute('tabindex', '0');
featuredCard.setAttribute('aria-label', 'Go to featured cocktail');
function jumpToFeatured() {
  const id = featuredCard.dataset.cocktail;
  const drink = cocktails.find(c => c.id === id);
  if (!drink) return;
  // Show the full grid even if a previous filter or deck view is active.
  search.value = '';
  spiritSelect.value = 'all';
  suitSelect.value = 'all';
  styleSelect.value = 'all';
  if (typeof setView === 'function') setView('grid');
  else {
    document.querySelector('#cards').hidden = false;
    document.querySelector('#deck').hidden = true;
    document.querySelector('#view-grid').setAttribute('aria-pressed', 'true');
    document.querySelector('#view-deck').setAttribute('aria-pressed', 'false');
  }
  renderCards();
  const target = [...grid.querySelectorAll('.recipe-button')]
    .find(button => button.dataset.recipe === id)?.closest('.cocktail-card');
  if (!target) return;
  target.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center'});
  target.classList.remove('featured-arrival');
  void target.offsetWidth;
  target.classList.add('featured-arrival');
  window.setTimeout(() => target.classList.remove('featured-arrival'), 2300);
}
featuredCard.addEventListener('click', jumpToFeatured);
featuredCard.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    jumpToFeatured();
  }
});
const topButton = document.querySelector('#back-to-top');
function updateTopButton() {
  topButton.classList.toggle('is-visible', window.scrollY > 320);
}
topButton.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
});
window.addEventListener('scroll', updateTopButton, {passive: true});
updateTopButton();
