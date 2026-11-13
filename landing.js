// Old shared menu links should introduce the house from the top on arrival.
// Later in-page navigation and individual drink deep links retain their targets.
(() => {
 const startAtTop = !location.hash || ['#home','#top'].includes(location.hash);
 if (!startAtTop) return;
 if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
 if (location.hash) history.replaceState(history.state, '', location.pathname + location.search);
 window.addEventListener('pageshow', () => {
  window.scrollTo({top:0,left:0,behavior:'instant'});
 });
})();
