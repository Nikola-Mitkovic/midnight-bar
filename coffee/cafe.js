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
 const point=(r,a)=>[300+r*Math.sin(a*Math.PI/180),300-r*Math.cos(a*Math.PI/180)].join(',');
 const sectors=pocketOrder.map((n,i)=>{
  const a=i*segment,b=(i+1)*segment,mid=(a+b)/2;
  const color=pocketColor(n)==='green'?'#326449':pocketColor(n)==='red'?'#923e40':'#292923';
  const path='M'+point(235,a)+' A235,235 0 0 1 '+point(235,b)+' L'+point(155,b)+' A155,155 0 0 0 '+point(155,a)+' Z';
  const [x,y]=point(216,mid).split(',');
  return '<g data-pocket="'+n+'"><path d="'+path+'" fill="'+color+'" fill-opacity=".91" stroke="#c3a16b" stroke-width="1.3"/><path d="M'+point(200,a)+' A200,200 0 0 1 '+point(200,b)+'" fill="none" stroke="#c3a16b" stroke-width="1"/><text x="'+x+'" y="'+y+'" dy=".35em" text-anchor="middle">'+n+'</text></g>';
 }).join('');
 wheel.innerHTML='<img class="wheel-painting" src="images/roulette-watercolor.webp" alt="" draggable="false"><svg class="wheel-pockets" viewBox="0 0 600 600" aria-hidden="true">'+sectors+'<circle cx="300" cy="300" r="235" fill="none" stroke="#d2b37d" stroke-width="2.5"/><circle cx="300" cy="300" r="155" fill="none" stroke="#d2b37d" stroke-width="2.5"/></svg>';
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
  const angle=(from+(to-from)*eased)*Math.PI/180;
  // Translate without rotating the sphere: its highlight and cast shadow stay fixed.
  ball.style.transform='translate(-50%, -50%) translateX(calc(var(--ball-track) * '+Math.sin(angle)+')) translateY(calc(var(--ball-track) * '+(-Math.cos(angle))+'))';
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
const menuSearch=document.querySelector('#search'),typeFilter=document.querySelector('#type'),baseFilter=document.querySelector('#base');
const deck=document.querySelector('#coffee-deck'),stage=document.querySelector('#coffee-stage');
const prev=document.querySelector('#coffee-prev'),next=document.querySelector('#coffee-next');
const clearMenu=document.querySelector('#clear-menu');
const bean='<svg class="coffee-bean" aria-hidden="true" viewBox="0 0 32 32"><ellipse cx="16" cy="16" rx="11" ry="15" transform="rotate(35 16 16)" fill="currentColor"/><path d="M23 5C8 12 23 20 9 27" fill="none" stroke="#d6ae70" stroke-width="2" stroke-linecap="round"/></svg>';
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
let swipeMode=false,hand=[],handIndex=0,slideAnimation=null,swipeStart=null,suppressClick=false;
baseFilter.innerHTML+=[...new Set(Object.values(window.CAFE_MENU).map(c=>c.base))].sort().map(b=>'<option>'+esc(b)+'</option>').join('');
function coffeeCard(c){
 const m=window.CAFE_MENU[c.id];
 return '<article class="coffee-card '+(SelectedCard.get('cafe')===c.id?'chosen-card ':'')+'pocket-'+c.color+'" id="'+c.id+'"><span class="number">'+String(c.number).padStart(2,'0')+' ◆ '+esc(m.sector)+'</span>'+art(c)+'<h3>'+esc(c.name)+'</h3><p class="coffee-description">'+esc(m.description)+'</p><div class="coffee-tags"><button class="coffee-tag" data-base="'+esc(m.base)+'" aria-pressed="'+(baseFilter.value===m.base)+'">'+esc(m.base)+'</button><button class="coffee-tag" data-style="'+c.type+'" aria-pressed="'+(typeFilter.value===c.type)+'">'+esc(c.type[0].toUpperCase()+c.type.slice(1))+'</button></div><button class="coffee-recipe-button" data-id="'+c.id+'" aria-label="View '+esc(c.name)+' recipe">'+bean+'<span>Discover the recipe</span>'+bean+'</button></article>';
}
function paintHand(){
 stage.innerHTML=hand.length?coffeeCard(hand[handIndex]):'';
 prev.disabled=!hand.length||handIndex===0;next.disabled=!hand.length||handIndex===hand.length-1;
 document.querySelector('#coffee-position').textContent=hand.length?(handIndex+1)+' / '+hand.length+' · '+hand[handIndex].name:'0 cards';
}
function render(){
 slideAnimation?.cancel();slideAnimation=null;
 const q=norm(menuSearch.value.trim());
 hand=window.CAFE_BROWSE_ORDER.map(id=>drinks.find(c=>c.id===id)).filter(c=>{const m=window.CAFE_MENU[c.id];return (typeFilter.value==='all'||typeFilter.value===c.type)&&(baseFilter.value==='all'||baseFilter.value===m.base)&&norm([c.name,c.type,m.base,m.description,m.sector,...c.ingredients].join(' ')).includes(q);});
 handIndex=0;
 cards.hidden=swipeMode;deck.hidden=!swipeMode;
 cards.innerHTML=swipeMode?'':hand.map(coffeeCard).join('');
 stage.innerHTML='';if(swipeMode)paintHand();
 document.querySelector('#coffee-empty').hidden=hand.length!==0;
 document.querySelector('#coffee-count').textContent=hand.length+' OF '+drinks.length+' COFFEES';
 const active=[typeFilter,baseFilter].filter(el=>el.value!=='all').map(el=>el.options[el.selectedIndex].textContent);
 if(q)active.push('“'+menuSearch.value.trim()+'”');
 document.querySelector('#cafe-active').textContent=active.join(' · ');
 clearMenu.hidden=active.length===0;
}
function resetMenu(){menuSearch.value='';typeFilter.value='all';baseFilter.value='all';render();}
clearMenu.addEventListener('click',()=>{resetMenu();menuSearch.focus();});
menuSearch.addEventListener('input',render);[typeFilter,baseFilter].forEach(el=>el.addEventListener('change',render));
function menuClick(e){
 if(suppressClick){e.preventDefault();return;}
 const recipe=e.target.closest('[data-id]');if(recipe){openRecipe(recipe.dataset.id);return;}
 const tag=e.target.closest('[data-base],[data-style]');if(!tag)return;
 const filter=tag.dataset.base?baseFilter:typeFilter,value=tag.dataset.base||tag.dataset.style;
 filter.value=filter.value===value?'all':value;render();filter.focus();
}
cards.addEventListener('click',menuClick);stage.addEventListener('click',menuClick);
function setView(enabled){swipeMode=enabled;document.querySelector('#cafe-grid').setAttribute('aria-pressed',String(!enabled));document.querySelector('#cafe-swipe').setAttribute('aria-pressed',String(enabled));render();}
document.querySelector('#cafe-grid').addEventListener('click',()=>setView(false));
document.querySelector('#cafe-swipe').addEventListener('click',()=>setView(true));
function moveCoffee(direction){
 if(slideAnimation||handIndex+direction<0||handIndex+direction>=hand.length)return;
 handIndex+=direction;paintHand();
 if(!motionPreference.matches){
  slideAnimation=stage.animate([{opacity:0,transform:'translateX('+direction*65+'px) rotateY('+direction*18+'deg)'},{opacity:1,transform:'none'}],{duration:280,easing:'ease-out'});
  slideAnimation.onfinish=()=>{slideAnimation=null;};
 }
}
prev.addEventListener('click',()=>moveCoffee(-1));next.addEventListener('click',()=>moveCoffee(1));
stage.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();moveCoffee(e.key==='ArrowLeft'?-1:1);}});
stage.addEventListener('pointerdown',e=>{if(!e.isPrimary||e.button!==0)return;swipeStart={id:e.pointerId,x:e.clientX,y:e.clientY};});
stage.addEventListener('pointerup',e=>{
 if(!swipeStart||swipeStart.id!==e.pointerId)return;
 const dx=e.clientX-swipeStart.x,dy=e.clientY-swipeStart.y;swipeStart=null;
 if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.3){suppressClick=true;moveCoffee(dx<0?1:-1);setTimeout(()=>{suppressClick=false;},0);}
});
stage.addEventListener('pointercancel',()=>{swipeStart=null;});

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
 SelectedCard.set('cafe',b.dataset.winner);swipeMode=false;document.querySelector('#cafe-grid').setAttribute('aria-pressed','true');document.querySelector('#cafe-swipe').setAttribute('aria-pressed','false');resetMenu();
 const card=document.getElementById(b.dataset.winner);
 card.scrollIntoView({behavior:motionPreference.matches?'instant':'smooth',block:'center'});
 card.querySelector('button').focus({preventScroll:true});

});
const topBtn=document.querySelector('#to-top');window.addEventListener('scroll',()=>topBtn.classList.toggle('visible',scrollY>320),{passive:true});topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
render();
