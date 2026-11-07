'use strict';
const drinks=window.CAFE_RECIPES;
const wheel=document.querySelector('#wheel'),ball=document.querySelector('#roulette-ball');
const result=document.querySelector('#result'),cards=document.querySelector('#cards'),dialog=document.querySelector('#recipe');
const exclusions=document.querySelector('#exclusions'),spin=document.querySelector('#spin');
const pocketOrder=[0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];
const redNumbers=new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);
const segment=360/37;
const ingredients=[...new Set(drinks.flatMap(c=>c.ingredients))];
const labels={coffee:'Coffee',milk:'Milk',ice:'Ice',chocolate:'Chocolate',dairy:'Ice cream',pumpkin:'Pumpkin',spices:'Spices',alcohol:'Alcohol',cream:'Cream',sugar:'Sugar / syrup',water:'Added water',nuts:'Nuts / hazelnut / pistachio',vanilla:'Vanilla',caramel:'Caramel',honey:'Honey',floral:'Floral syrups',maple:'Maple syrup',coconut:'Coconut',tonic:'Tonic', 'condensed-milk':'Condensed milk',cocoa:'Cocoa'};
const esc=s=>String(s).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[x]));
exclusions.innerHTML=ingredients.map(k=>'<label><input type="checkbox" value="'+esc(k)+'"> '+(labels[k]||k)+'</label>').join('');
const allowed=()=>drinks.filter(c=>!c.ingredients.some(k=>exclusions.querySelector('input[value="'+k+'"]')?.checked));
const pocketColor=n=>n===0?'green':redNumbers.has(n)?'red':'black';
function paintWheel(){
 wheel.style.background='conic-gradient('+pocketOrder.map((n,i)=>{const color=pocketColor(n)==='green'?'#166d4d':pocketColor(n)==='red'?'#9a303b':'#171e1b';return color+' '+(i*segment)+'deg '+((i+1)*segment)+'deg'}).join(',')+')';
 wheel.insertAdjacentHTML('beforeend',pocketOrder.map((n,i)=>'<span class="pocket-number" style="--angle:'+((i+.5)*segment)+'deg">'+n+'</span>').join(''));
}
paintWheel();
let currentAngle=0,busy=false;
function showDrink(c){result.innerHTML='<span class="result-dot '+c.color+'"></span> '+esc(c.name)+' <small>· '+esc(c.measure)+'</small><br><span class="result-hint">Tap to open recipe ↗</span>';result.dataset.drink=c.id;result.classList.add('winner');}
spin.addEventListener('click',()=>{
 if(busy)return;
 const pool=allowed();
 if(!pool.length){result.textContent='No recipes match. Remove an exclusion to spin.';delete result.dataset.drink;return;}
 busy=true;spin.disabled=true;delete result.dataset.drink;
 const c=pool[Math.floor(Math.random()*pool.length)];
 const slot=pocketOrder.indexOf(c.number);
 const landing=(slot+.5)*segment;
 const normalized=((currentAngle%360)+360)%360;
 const offset=(landing-normalized+360)%360;
 currentAngle+=360*6+offset;
 result.textContent='The ball is circling…';
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 ball.style.transition=reduce?'none':'transform 4.4s cubic-bezier(.1,.72,.16,1)';
 ball.style.transform='translate(-50%, -50%) rotate('+currentAngle+'deg) translateY(calc(var(--ball-track) * -1))';
 setTimeout(()=>{showDrink(c);busy=false;spin.disabled=false;},reduce?20:4450);
});
document.querySelector('#clear').addEventListener('click',()=>{exclusions.querySelectorAll('input').forEach(el=>el.checked=false);});
function art(c){return c.artwork?'<img src="'+esc(c.artwork)+'" alt="Vintage illustration of '+esc(c.name)+'" loading="lazy">':'<div class="coffee-placeholder" role="img" aria-label="Illustration coming later"><span>✦</span><strong>☕</strong><small>ILLUSTRATION<br>COMING SOON</small><span>✦</span></div>';}
function render(){
 const q=document.querySelector('#search').value.toLowerCase(),type=document.querySelector('#type').value;
 cards.innerHTML=drinks.filter(c=>c.name.toLowerCase().includes(q)&&(type==='all'||type===c.type)).map(c=>'<article class="coffee-card pocket-'+c.color+'" id="'+c.id+'"><span class="number">'+String(c.number).padStart(2,'0')+' ◆ '+esc(c.type.toUpperCase())+'</span>'+art(c)+'<h3>'+esc(c.name)+'</h3><p>'+esc(c.measure)+'</p><button data-id="'+c.id+'">Discover the recipe ↗</button></article>').join('');
}
document.querySelector('#search').addEventListener('input',render);document.querySelector('#type').addEventListener('change',render);
cards.addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b)openRecipe(b.dataset.id);});
function openRecipe(id){const c=drinks.find(x=>x.id===id);if(!c)return;document.querySelector('#detail').innerHTML=art(c)+'<p class="eyebrow">THE MIDNIGHT CAFÉ · POCKET '+c.number+'</p><h2>'+esc(c.name)+'</h2><h3>Ingredients · one serving unless noted</h3><p>'+esc(c.measure)+'</p><h3>The ritual</h3><p>'+esc(c.method)+'</p><p class="recipe-note">House version; coffee ratios can vary by café and equipment.</p><a class="source-link" href="'+esc(c.source)+'" target="_blank" rel="noopener noreferrer">Recipe reference ↗</a>';dialog.showModal();}
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
result.addEventListener('click',()=>{const id=result.dataset.drink;if(id)openRecipe(id);});
result.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&result.dataset.drink){e.preventDefault();openRecipe(result.dataset.drink);}});
result.tabIndex=0;result.setAttribute('aria-label','Winning coffee, activate to open recipe');
const topBtn=document.querySelector('#to-top');window.addEventListener('scroll',()=>topBtn.classList.toggle('visible',scrollY>320),{passive:true});topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
render();
