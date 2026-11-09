'use strict';
const $ = selector => document.querySelector(selector);
const escapeText = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const motion = matchMedia('(prefers-reduced-motion: reduce)');
let selectedId = null;
try { selectedId = sessionStorage.getItem('midnight-selected-snack'); } catch {}
let single = false, index = 0, filtered = [], table = [], point = 0, rolling = false;
let dialogRecipe = null, returnFocus = null;

function sketch(r) {
 const colour=r.colour;
 let vessel='';
 if(r.kind==='cocoa') vessel=`<path d="M163 92 C221 76 220 151 166 151" fill="none" stroke="#987d58" stroke-width="10"/><path d="M164 96 C205 89 204 143 168 142" fill="none" stroke="#eee1c1" stroke-width="5"/><path d="M61 85 Q58 171 114 177 Q170 177 174 85Z" fill="#eadcbd" stroke="#8f7656" stroke-width="2"/><path d="M70 108 Q75 155 105 164" fill="none" stroke="#fff6dc" stroke-width="6" opacity=".7"/><ellipse cx="118" cy="85" rx="57" ry="15" fill="${colour}" stroke="#8f7656" stroke-width="2"/><path d="M81 85 Q104 65 120 83 Q139 96 151 79" fill="none" stroke="#dfc49e" stroke-width="3"/><path d="M95 57 Q82 42 98 26 M119 58 Q138 44 124 22 M145 57 Q156 41 148 32" fill="none" stroke="#a78e6d" stroke-width="2" opacity=".6"/><path d="M88 130 Q118 144 145 130" fill="none" stroke="#ae8d51"/><text x="117" y="148" text-anchor="middle" fill="#9a7845" font-family="Georgia" font-size="15">M</text>`;
 else if(r.kind==='trifle'||r.kind==='tiramisu') vessel=`<path d="M66 62 L77 156 Q120 178 163 156 L174 62Z" fill="#fff8e044" stroke="#9e8d71" stroke-width="2"/><path d="M72 87 L76 111 Q120 125 164 111 L168 87Z" fill="${colour}" opacity=".85"/><path d="M76 111 L79 130 Q121 145 161 130 L164 111 Q121 125 76 111" fill="#f5e9ce"/><path d="M79 132 L82 151 Q120 171 158 151 L161 132Z" fill="${colour}" opacity=".75"/><ellipse cx="120" cy="83" rx="48" ry="12" fill="#f0dfbd"/><path d="M76 77 Q85 60 99 65 Q108 47 124 60 Q147 50 157 66 Q172 66 166 79 Q121 98 76 77" fill="#fbefd2" stroke="#b5a080" stroke-width="1.5"/><path d="M120 168 V194 M91 198 Q120 187 149 198 Q121 206 91 198" fill="none" stroke="#9e8d71" stroke-width="3"/><path d="M82 91 L88 145" stroke="white" stroke-width="4" opacity=".55"/>`;
 else if(r.kind==='muffin') vessel=`<path d="M74 110 Q64 99 76 86 Q71 70 91 64 Q97 45 119 57 Q140 45 153 64 Q176 71 166 91 Q181 106 166 117Z" fill="${colour}" stroke="#8d6841" stroke-width="2"/><path d="M71 115 L84 167 Q122 184 158 167 L171 115Z" fill="#dcc69d" stroke="#9a7b50" stroke-width="2"/><path d="M88 120 L96 165 M109 124 L112 172 M131 124 L131 172 M151 120 L145 168" stroke="#ae8f5f" stroke-width="2"/><path d="M163 128 Q196 113 195 142 Q193 160 163 155" fill="none" stroke="#9a7b50" stroke-width="6"/><ellipse cx="121" cy="115" rx="50" ry="9" fill="none" stroke="#b19160" stroke-width="2"/>`;
 else if(r.kind==='cookie') vessel=`<g fill="${colour}" stroke="#513728" stroke-width="2"><ellipse cx="98" cy="99" rx="28" ry="44" transform="rotate(-23 98 99)"/><ellipse cx="143" cy="92" rx="29" ry="45" transform="rotate(22 143 92)"/></g><g stroke="#bb9470" fill="none" stroke-width="2"><path d="M78 77 L95 91 L85 111 M96 66 L108 82 L103 103 M132 64 L146 84 L134 108 M154 76 L147 101 L163 115"/></g><path d="M66 116 L77 181 Q121 197 164 181 L175 116Z" fill="#efe1c066" stroke="#9e8d71" stroke-width="2"/><ellipse cx="121" cy="116" rx="55" ry="12" fill="none" stroke="#9e8d71" stroke-width="2"/><path d="M81 129 L88 171" stroke="#fff8dc" stroke-width="4" opacity=".7"/>`;
 else vessel=`<path d="M163 115 Q202 103 201 136 Q197 155 166 148" fill="none" stroke="#987d58" stroke-width="7"/><path d="M66 100 Q68 167 121 172 Q173 169 174 100Z" fill="#e6d5b3" stroke="#987d58" stroke-width="2"/><ellipse cx="120" cy="98" rx="55" ry="32" fill="#c99762" stroke="#916341" stroke-width="2"/><path d="M151 98 C155 73 89 67 83 94 C77 120 143 124 143 98 C143 80 99 80 98 99 C97 114 130 112 131 99 C132 92 112 90 111 98" fill="none" stroke="#80502f" stroke-width="7"/><path d="M81 85 Q114 61 157 91 M81 105 Q107 129 148 109" fill="none" stroke="#f6e7c9" stroke-width="4"/><path d="M91 143 Q120 154 150 140" fill="none" stroke="#a98b58"/><text x="121" y="154" text-anchor="middle" fill="#967344" font-family="Georgia" font-size="14">M</text>`;
 const dots=r.kind==='muffin'?'<g fill="#4f3630" opacity=".7"><circle cx="97" cy="78" r="4"/><circle cx="135" cy="74" r="4"/><circle cx="151" cy="94" r="3"/><circle cx="112" cy="100" r="4"/></g>':r.kind==='trifle'||r.kind==='tiramisu'?`<g fill="${colour}" opacity=".8"><circle cx="104" cy="67" r="3"/><circle cx="129" cy="71" r="2"/><circle cx="143" cy="67" r="3"/><circle cx="117" cy="62" r="2"/></g>`:'';
 return `<svg class="snack-art" viewBox="0 0 240 220" role="img" aria-label="${escapeText(r.name)} — illustrated ${r.kind==='cocoa'?'cup':'dessert vessel'} sketch"><ellipse cx="122" cy="195" rx="65" ry="8" fill="#8d6e4520"/><ellipse cx="121" cy="115" rx="84" ry="77" fill="${colour}" opacity=".05"/>${vessel}${dots}</svg>`;
}
function art(r){return `<div class="art-wrap">${r.image?`<img class="snack-art custom-art" src="${escapeText(r.image)}" alt="Watercolor illustration of ${escapeText(r.name)}" loading="lazy"><div class="fallback-art" hidden>${sketch(r)}</div>`:sketch(r)}</div>${r.image?'':'<span class="sketch-label">FROM THE HOUSE SKETCHBOOK</span>'}`;}
function loadArt(root){root.querySelectorAll('.custom-art').forEach(img=>{const fallback=()=>{img.hidden=true;img.nextElementSibling.hidden=false;};img.addEventListener('error',fallback,{once:true});if(img.complete&&!img.naturalWidth)fallback();});}
function card(r,board=false){return `<article class="snack-card ${selectedId===r.id?'chosen':''}" data-card="${r.id}"><p class="card-category"><span aria-hidden="true">◈</span>${escapeText(r.category)}</p>${art(r)}<h3>${escapeText(r.name)}</h3><p class="description">${escapeText(r.expect.split('. ')[0])}.</p><div class="tags">${r.tags.map(t=>`<span class="tag">${escapeText(t)}</span>`).join('')}</div><p class="card-meta">${escapeText(r.serves)} · ${escapeText(r.time)}</p><button class="recipe-button" data-recipe="${r.id}" ${board?'data-from-board="true"':''} aria-label="Discover ${escapeText(r.name)} recipe">Discover the recipe <span aria-hidden="true">↗</span></button></article>`;}
function renderMenu(){
 const q=$('#search').value.trim().toLocaleLowerCase();
 filtered=snackOrder.filter(r=>($('#category').value==='all'||r.category===$('#category').value)&&($('#flavour').value==='all'||r.tags.includes($('#flavour').value))&&[r.name,r.category,...r.tags,...r.ingredients].join(' ').toLocaleLowerCase().includes(q));
 index=Math.max(0,Math.min(index,filtered.length-1));
 $('#count').textContent=`${filtered.length} OF ${snacks.length} RECIPES`;
 $('#empty').hidden=filtered.length>0;
 $('#cards').classList.toggle('single',single);
 $('#cards').innerHTML=(single?filtered.slice(index,index+1):filtered).map(r=>card(r)).join('');
 $('#single-controls').hidden=!single||!filtered.length;$('#swipe-hint').hidden=!single||!filtered.length;
 $('#position').textContent=filtered.length?`${index+1} / ${filtered.length} · ${filtered[index].name}`:'';
 $('#previous').disabled=index===0;$('#next').disabled=index>=filtered.length-1;
 $('#cards').tabIndex=single?0:-1;
 $('#grid-view').setAttribute('aria-pressed',String(!single));$('#single-view').setAttribute('aria-pressed',String(single));
 loadArt($('#cards'));
}
for(const tag of [...new Set(snacks.flatMap(r=>r.tags))].sort()){const o=document.createElement('option');o.textContent=tag;$('#flavour').append(o);}
['#category','#flavour','#search'].forEach(selector=>$(selector).addEventListener(selector==='#search'?'input':'change',()=>{index=0;renderMenu();}));
$('#clear-filters').addEventListener('click',()=>{$('#search').value='';$('#category').value='all';$('#flavour').value='all';index=0;renderMenu();});
$('#grid-view').addEventListener('click',()=>{single=false;renderMenu();});$('#single-view').addEventListener('click',()=>{single=true;index=0;renderMenu();});
function stepCard(delta){if(!single)return;index=Math.max(0,Math.min(filtered.length-1,index+delta));renderMenu();}
$('#previous').addEventListener('click',()=>stepCard(-1));$('#next').addEventListener('click',()=>stepCard(1));
$('#cards').addEventListener('keydown',e=>{if(single&&['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();stepCard(e.key==='ArrowLeft'?-1:1);$('#cards').focus({preventScroll:true});}});
let touchStart=null;
$('#cards').addEventListener('touchstart',e=>{if(e.touches.length===1)touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
$('#cards').addEventListener('touchend',e=>{if(!touchStart||!single)return;const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;touchStart=null;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5)stepCard(dx<0?1:-1);},{passive:true});

function selectRecipe(id){selectedId=id;try{sessionStorage.setItem('midnight-selected-snack',id);}catch{}renderMenu();}
function renderDetail(back=false){
 const r=dialogRecipe,source=snackSources[r.source];
 $('#detail').innerHTML=`<div class="detail-heading"><p class="eyebrow">THE MIDNIGHT KITCHEN · ${escapeText(r.category)}</p><h2 id="recipe-title">${escapeText(r.name)}</h2><p>${escapeText(r.serves)} · ${escapeText(r.time)}</p></div><button class="flip-toggle" aria-expanded="${back}" aria-controls="recipe-face">${back?'↶ Return to the front':'↻ Flip the card · The full ritual'}</button><section id="recipe-face" class="${back?'detail-back':'detail-front'}">${back?`<h3>The full ritual</h3><ol class="steps">${r.steps.map(s=>`<li>${escapeText(s)}</li>`).join('')}</ol><div class="learning"><section><h3>Technique</h3><p>${escapeText(r.technique)}</p></section><section><h3>One thing to learn</h3><p>${escapeText(r.learn)}</p></section></div><h3>What to expect</h3><p class="ritual">${escapeText(r.expect)}</p><h3>Keep a little for later</h3><p class="storage">${escapeText(r.storage)}</p><p class="source-note">House adaptation, with independently written flavour variations. Reference for the base method: <a href="${source[1]}" target="_blank" rel="noopener noreferrer">${escapeText(source[0])} ↗</a>. These house variations have not been kitchen-tested.</p>`:`${art(r)}<h3>The measures</h3><ul class="ingredients">${r.ingredients.map(i=>`<li>${escapeText(i)}</li>`).join('')}</ul><h3>The Ritual</h3><p class="ritual">${escapeText(r.ritual)}</p><p class="house-note">“${escapeText(r.note)}”</p>`}</section>`;
 loadArt($('#detail'));
 $('#detail .flip-toggle').addEventListener('click',()=>{renderDetail(!back);$('#detail .flip-toggle').focus({preventScroll:true});$('#recipe').scrollTo({top:0,behavior:'instant'});});
}
document.addEventListener('click',e=>{const button=e.target.closest('[data-recipe]');if(!button)return;returnFocus=button;dialogRecipe=snacks.find(r=>r.id===button.dataset.recipe);if(!dialogRecipe)return;if(button.dataset.fromBoard)selectRecipe(dialogRecipe.id);renderDetail();$('#recipe').showModal();$('#recipe').scrollTop=0;});
$('#close-recipe').addEventListener('click',()=>$('#recipe').close());
$('#recipe').addEventListener('click',e=>{if(e.target===$('#recipe')){const b=$('#recipe').getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)$('#recipe').close();}});
$('#recipe').addEventListener('close',()=>{if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});});

const initialCheckers={1:[2,'dark'],6:[5,'light'],8:[3,'light'],12:[5,'dark'],13:[5,'light'],17:[3,'dark'],19:[5,'dark'],24:[2,'light']};
function renderBoard(){
 const makePoint=n=>{const r=table[n-1],stack=initialCheckers[n];return `<button class="point ${point===n-1?'selected':''}" data-point="${n-1}" aria-label="Point ${n}: ${escapeText(r.name)}" aria-pressed="${point===n-1}" ${rolling?'disabled':''}><span class="point-number">${n}</span>${stack?Array.from({length:stack[0]},(_,i)=>`<i class="checker ${stack[1]==='dark'?'dark':''}" style="--stack:${i}" aria-hidden="true"></i>`).join(''):''}</button>`;};
 $('#points-top').innerHTML=Array.from({length:12},(_,i)=>makePoint(i+13)).join('');
 $('#points-bottom').innerHTML=Array.from({length:12},(_,i)=>makePoint(12-i)).join('');
}
function showPick(){const r=table[point];$('#board-pick').innerHTML=`<p class="eyebrow">POINT ${String(point+1).padStart(2,'0')} · THE HOUSE SUGGESTS</p>${card(r,true)}`;loadArt($('#board-pick'));}
function newTable(){
 if(rolling)return;
 // Fisher–Yates gives all 31 recipes a chance at any of the 24 points.
 table=[...snackOrder];for(let i=table.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[table[i],table[j]]=[table[j],table[i]];}table=table.slice(0,24);point=0;renderBoard();showPick();
}
$('.board').addEventListener('click',e=>{const button=e.target.closest('[data-point]');if(!button||rolling)return;point=Number(button.dataset.point);renderBoard();showPick();$('.board [data-point="'+point+'"]').focus({preventScroll:true});$('#roll-status').textContent=`Point ${point+1} · ${table[point].name}. Your recipe is beside the board, or just below on a small screen.`;});
$('#new-table').addEventListener('click',()=>{newTable();$('#roll-status').textContent='A fresh table: 24 recipes drawn from the full collection.';});
$('#roll').addEventListener('click',async()=>{
 if(rolling)return;rolling=true;$('#roll').disabled=true;$('#new-table').disabled=true;renderBoard();
 const a=1+Math.floor(Math.random()*6),b=1+Math.floor(Math.random()*6),moves=a===b?a*4:a+b;
 $('#dice').setAttribute('aria-label',`Dice: ${a} and ${b}`);$('#dice').innerHTML=`<span>${String.fromCodePoint(0x267f+a)}</span><span>${String.fromCodePoint(0x267f+b)}</span>`;$('#dice').classList.add('rolling');
 $('#roll-status').textContent=`${a} and ${b}${a===b?' — doubles':''}. Moving ${moves} points…`;
 if(!motion.matches)await new Promise(resolve=>setTimeout(resolve,650));
 for(let i=0;i<moves;i++){point=(point+1)%24;renderBoard();if(!motion.matches)await new Promise(resolve=>setTimeout(resolve,75));}
 rolling=false;$('#roll').disabled=false;$('#new-table').disabled=false;$('#dice').classList.remove('rolling');renderBoard();showPick();$('#roll-status').textContent=`${a} + ${b}${a===b?' · doubles, four moves':''} → Point ${point+1}: ${table[point].name}.`;
});
newTable();renderMenu();
