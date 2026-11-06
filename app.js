'use strict';
// Presentation and interactions only. Edit recipes.js for content, artwork.js for image overrides.
const grid=document.querySelector('#cards'), search=document.querySelector('#search'), dialog=document.querySelector('#recipe');
const spiritSelect=document.querySelector('#spirit'),suitSelect=document.querySelector('#suit'),styleSelect=document.querySelector('#style');
let current=null,unit=0,lastTrigger=null;
const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize=value=>String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’‘]/g,"'").toLowerCase();
const styles=[...new Set(cocktails.flatMap(c=>c.tags))].sort();
styleSelect.innerHTML='<option value="all">✦ All styles</option>'+styles.map(tag=>`<option value="${escapeHTML(tag)}">✧ ${escapeHTML(tag)}</option>`).join('');
function artwork(c,suffix){
 const settings=ARTWORK.overrides[c.artworkKey]||{};
 const path=Object.prototype.hasOwnProperty.call(settings,'src')?settings.src:`images/${c.artworkKey}.webp`;
 const version=settings.version??ARTWORK.version;
 const url=path?path+(version?(path.includes('?')?'&':'?')+'v='+encodeURIComponent(version):''):null;
 const alt=settings.alt||`Artwork of ${c.name}`;
 return `<div class="art-slot"><div class="art-fallback">${illustration(c.id,suffix)}</div>${url?`<img class="custom-art" src="${escapeHTML(url)}" alt="${escapeHTML(alt)}" loading="${suffix==='hero'?'eager':'lazy'}" decoding="async" width="600" height="600" hidden>`:''}</div>`;
}
// Image load/error events do not bubble; capture handles hero, cards, and dialogs alike.
// The image occupies its slot while transparent, so native lazy-loading can detect it.
function imageLoaded(event){const img=event.target;if(!img.matches?.('img.custom-art'))return;img.hidden=false;img.classList.add('loaded');img.parentElement.querySelector('.art-fallback').hidden=true;}
function imageFailed(event){const img=event.target;if(!img.matches?.('img.custom-art'))return;img.classList.remove('loaded');img.hidden=true;img.parentElement.querySelector('.art-fallback').hidden=false;}
// Keep images visible to the lazy loader while keeping the original art visible until success.
function activateArtwork(root){root.querySelectorAll('img.custom-art').forEach(img=>{img.hidden=false;img.setAttribute('aria-hidden','true');if(img.complete&&img.naturalWidth){imageLoaded({target:img});img.removeAttribute('aria-hidden');}});}
 document.addEventListener('load',event=>{imageLoaded(event);if(event.target.matches?.('img.custom-art'))event.target.removeAttribute('aria-hidden');},true);
 document.addEventListener('error',imageFailed,true);
function matchingCocktails(){
 const query=normalize(search.value.trim());
 return cocktails.filter(c=>(spiritSelect.value==='all'||c.categories.includes(spiritSelect.value))&&(suitSelect.value==='all'||c.suit===suitSelect.value)&&(styleSelect.value==='all'||c.tags.includes(styleSelect.value))&&normalize([c.name,c.spirit,c.method,c.profile,c.suit,c.rank,...c.categories,...c.tags,...c.ingredients.map(i=>i[2])].join(' ')).includes(query));
}
function tagMarkup(c){return `<div class="flavour-tags" aria-label="${escapeHTML(c.name)} tags">${c.tags.map(tag=>`<button type="button" class="tag-chip" data-tag="${escapeHTML(tag)}" aria-label="Filter by ${escapeHTML(tag)}" aria-pressed="${styleSelect.value===tag}">${escapeHTML(tag)}</button>`).join('')}</div>`;}
function renderCards(){
 const shown=matchingCocktails();
 grid.innerHTML=shown.map(c=>`<article class="cocktail-card ${['♥','♦'].includes(c.suit)?'red-suit':''}"><span class="corner" aria-hidden="true">${escapeHTML(c.rank==='JOKER'?'Jkr':c.rank)}<br>${escapeHTML(c.suit)}</span><p class="card-kicker">${escapeHTML(c.label)}</p><h3>${escapeHTML(c.name)}</h3>${artwork(c,'card')}<p class="description">${escapeHTML(c.description)}</p>${tagMarkup(c)}<div class="tags">${escapeHTML(c.spirit)} &nbsp; / &nbsp; ${escapeHTML(c.method)}</div><button class="recipe-button" data-recipe="${escapeHTML(c.id)}" aria-label="View ${escapeHTML(c.name)} recipe"><span aria-hidden="true">${escapeHTML(c.suit)}</span> Discover the recipe <span aria-hidden="true">${escapeHTML(c.suit)}</span></button></article>`).join('');
 document.querySelector('#results').textContent=`${shown.length} OF ${cocktails.length} CARDS`;
 document.querySelector('#empty').hidden=shown.length!==0;
 const active=[spiritSelect,suitSelect,styleSelect].filter(el=>el.value!=='all').map(el=>el.options[el.selectedIndex].text);
 if(search.value.trim())active.push(`“${search.value.trim()}”`);
 document.querySelector('#active-filters').textContent=active.length?active.join(' · '):'Browse by spirit, suit, or flavour. Tap a tag to explore.';
 document.querySelector('#clear-filters').hidden=active.length===0;
 activateArtwork(grid);
}
function renderIngredients(){document.querySelector('#ingredient-list').innerHTML=current.ingredients.map(i=>`<li><strong>${escapeHTML(i[unit])}</strong> ${escapeHTML(i[2])}</li>`).join('');}
function openRecipe(id,trigger){
 current=cocktails.find(c=>c.id===id);if(!current)return;lastTrigger=trigger;unit=0;
 document.querySelector('#recipe-content').innerHTML=`<div class="detail-top"><div><p class="eyebrow">${escapeHTML(current.rank)} ${escapeHTML(current.suit)} &nbsp; ${escapeHTML(current.label)}</p><h2 id="recipe-title">${escapeHTML(current.name)}</h2><p>${escapeHTML(current.profile)}<br>1 card recipe · ${escapeHTML(current.method)} · ${escapeHTML(current.glass)}</p><p class="detail-tags">${current.tags.map(escapeHTML).join(' · ')}</p></div>${artwork(current,'detail')}</div><div class="unit-toggle" role="group" aria-label="Recipe measurement units"><button data-unit="0" aria-pressed="true">ml</button><button data-unit="1" aria-pressed="false">US oz</button></div><div class="recipe-columns"><section><h3>Ingredients</h3><ul class="ingredients" id="ingredient-list"></ul></section><section><h3>The ritual</h3><ol class="steps">${current.steps.map(s=>`<li>${escapeHTML(s)}</li>`).join('')}</ol></section></div><p class="tip">Bartender’s note — ${escapeHTML(current.tip)}</p>`;
 renderIngredients();dialog.showModal();activateArtwork(dialog);document.body.classList.add('modal-open');dialog.querySelector('.close').focus();
}
function clearFilters(){search.value='';[spiritSelect,suitSelect,styleSelect].forEach(el=>el.value='all');renderCards();search.focus();}
 grid.addEventListener('click',e=>{const recipe=e.target.closest('[data-recipe]');if(recipe){openRecipe(recipe.dataset.recipe,recipe);return;}const tag=e.target.closest('[data-tag]');if(tag){styleSelect.value=styleSelect.value===tag.dataset.tag?'all':tag.dataset.tag;renderCards();styleSelect.focus();}});
 search.addEventListener('input',renderCards);
 [spiritSelect,suitSelect,styleSelect].forEach(el=>el.addEventListener('change',renderCards));
 document.querySelector('#reset').addEventListener('click',clearFilters);
 document.querySelector('#clear-filters').addEventListener('click',clearFilters);
 dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{const b=e.target.closest('[data-unit]');if(b){unit=Number(b.dataset.unit);dialog.querySelectorAll('[data-unit]').forEach(el=>el.setAttribute('aria-pressed',String(el===b)));renderIngredients();}if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');lastTrigger?.focus();});
 document.querySelector('#hero-drink').innerHTML=artwork(cocktails.find(c=>c.id==='old-fashioned'),'hero');
 activateArtwork(document.querySelector('#hero-drink'));
 renderCards();
