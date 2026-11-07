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
const winner=document.querySelector('#winner-card');
const motion=document.querySelector('#animate-spin');
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
motion.checked=!motionPreference.matches;
function motionNote(){document.querySelector('#motion-note').textContent=motion.checked?'The ball circles the fixed wheel before landing.':'Motion is off. Enable “Animate the spin” to watch the ball circle.';}
motionNote();motion.addEventListener('change',motionNote);
motionPreference.addEventListener('change',e=>{motion.checked=!e.matches;motionNote();});
function showDrink(c){
 result.textContent='Your cup: '+c.name+' · pocket '+c.number;
 winner.innerHTML='<button class="coffee-card pocket-'+c.color+'" data-winner="'+c.id+'" aria-label="Find '+esc(c.name)+' in the coffee menu"><span class="number">'+String(c.number).padStart(2,'0')+' ◆ YOUR LUCKY CUP</span>'+art(c)+'<h3>'+esc(c.name)+'</h3><p>'+esc(window.CAFE_DETAILS[c.id].expect)+'</p><span class="winner-link">Find this card in the menu ↗</span></button>';
 winner.hidden=false;
}
// Explicit frames avoid transform-transition coalescing and matrix interpolation differences.
function animateBall(from,to,duration,done){
 let start;
 function frame(now){
  if(start===undefined)start=now;
  const progress=duration?Math.min((now-start)/duration,1):1;
  const eased=1-Math.pow(1-progress,3);
  ball.style.transform='translate(-50%, -50%) rotate('+(from+(to-from)*eased)+'deg) translateY(calc(var(--ball-track) * -1))';
  if(progress<1)requestAnimationFrame(frame);else done();
 }
 requestAnimationFrame(frame);
}
spin.addEventListener('click',()=>{
 if(busy)return;
 const pool=allowed();
 if(!pool.length){result.textContent='No recipes match. Remove an exclusion to spin.';winner.hidden=true;return;}
 busy=true;spin.disabled=true;motion.disabled=true;winner.hidden=true;
 const c=pool[Math.floor(Math.random()*pool.length)];
 const slot=pocketOrder.indexOf(c.number);
 const landing=(slot+.5)*segment;
 const normalized=((currentAngle%360)+360)%360;
 const offset=(landing-normalized+360)%360;
 const from=currentAngle;
 currentAngle+=360*6+offset;
 result.textContent=motion.checked?'The ball is circling…':'Choosing your cup…';
 animateBall(from,currentAngle,motion.checked?4400:0,()=>{showDrink(c);busy=false;spin.disabled=false;motion.disabled=false;});
});
document.querySelector('#clear').addEventListener('click',()=>{exclusions.querySelectorAll('input').forEach(el=>el.checked=false);});
function art(c){return c.artwork?'<img src="'+esc(c.artwork)+'" alt="Vintage illustration of '+esc(c.name)+'" loading="lazy">':'<div class="coffee-placeholder" role="img" aria-label="Illustration coming later"><span>✦</span><strong>☕</strong><small>ILLUSTRATION<br>COMING SOON</small><span>✦</span></div>';}
function render(){
 const q=document.querySelector('#search').value.toLowerCase(),type=document.querySelector('#type').value;
 cards.innerHTML=drinks.filter(c=>c.name.toLowerCase().includes(q)&&(type==='all'||type===c.type)).map(c=>'<article class="coffee-card pocket-'+c.color+'" id="'+c.id+'"><span class="number">'+String(c.number).padStart(2,'0')+' ◆ '+esc(c.type.toUpperCase())+'</span>'+art(c)+'<h3>'+esc(c.name)+'</h3><p>'+esc(c.measure)+'</p><button data-id="'+c.id+'">Discover the recipe ↗</button></article>').join('');
}
document.querySelector('#search').addEventListener('input',render);document.querySelector('#type').addEventListener('change',render);
cards.addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b)openRecipe(b.dataset.id);});
function openRecipe(id){
 const c=drinks.find(x=>x.id===id);if(!c)return;
 const d=window.CAFE_DETAILS[id],source=d.source||['Recipe background',c.source];
 document.querySelector('#detail').innerHTML='<p class="eyebrow">THE MIDNIGHT CAFÉ · POCKET '+c.number+'</p><h2 id="coffee-title">'+esc(c.name)+'</h2><div class="coffee-flip-tools"><span id="face-status" role="status">Front · at a glance</span><button id="flip-coffee" aria-controls="coffee-front coffee-back" aria-pressed="false">Flip the card ↻</button></div><section id="coffee-front" class="coffee-face" aria-label="Recipe card front">'+art(c)+'<h3>In the cup</h3><ul class="coffee-ingredients">'+c.measure.split(';').map(s=>'<li>'+esc(s.trim())+'</li>').join('')+'</ul><h3>The Ritual</h3><p>'+esc(c.method)+'</p><p class="recipe-note">Barista’s note — '+esc(d.expect)+'</p></section><section id="coffee-back" class="coffee-face coffee-back" aria-label="Recipe card back" hidden><p class="back-ornament">✦ ◆ ✦</p><h3>The Ritual · step by step</h3><p class="equipment">'+esc(d.equipment)+'</p><ol>'+d.steps.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ol><aside><h4>Technique</h4><p>'+esc(d.technique)+'</p></aside><aside><h4>What to expect</h4><p>'+esc(d.expect)+'</p></aside><p class="recipe-note">House preparation; ratios and flavored variations are our menu’s starting points. The reference explains the recipe or underlying technique.</p><a class="source-link" href="'+esc(source[1])+'" target="_blank" rel="noopener noreferrer">'+esc(source[0])+' ↗</a></section>';
 const flip=document.querySelector('#flip-coffee');
 flip.addEventListener('click',()=>{
  const back=flip.getAttribute('aria-pressed')!=='true';
  flip.setAttribute('aria-pressed',String(back));
  document.querySelector('#coffee-front').hidden=back;document.querySelector('#coffee-back').hidden=!back;
  document.querySelector('#face-status').textContent=back?'Back · behind the brew':'Front · at a glance';
  flip.textContent=back?'Back to the front ↶':'Flip the card ↻';
  dialog.scrollTop=0;
 });
 dialog.showModal();
}
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
winner.addEventListener('click',e=>{
 const b=e.target.closest('[data-winner]');if(!b)return;
 document.querySelector('#search').value='';document.querySelector('#type').value='all';render();
 const card=document.getElementById(b.dataset.winner);
 card.scrollIntoView({behavior:motionPreference.matches?'instant':'smooth',block:'center'});
 card.querySelector('button').focus({preventScroll:true});
 card.classList.add('drawn-card');
});
const topBtn=document.querySelector('#to-top');window.addEventListener('scroll',()=>topBtn.classList.toggle('visible',scrollY>320),{passive:true});topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
render();
