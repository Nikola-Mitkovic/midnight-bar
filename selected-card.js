// Remember the latest chosen drink for this tab, including filter/view re-renders.
window.SelectedCard = {
 get(menu) { try { return sessionStorage.getItem('midnight-selected-'+menu); } catch { return this[menu] || null; } },
 set(menu,id) { this[menu]=id;try { sessionStorage.setItem('midnight-selected-'+menu,id); } catch {} }
};
