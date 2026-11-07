'use strict';
const drinks=window.CAFE_RECIPES, wheel=document.querySelector('#wheel'),result=document.querySelector('#result'),cards=document.querySelector('#cards'),dialog=document.querySelector('#recipe');
const exclusions=document.querySelector('#exclusions'),spin=document.querySelector('#spin');
const ingredients=[...new Set(drinks.flatMap(c=>c.ingredients))];
const labels={coffee:'Coffee',milk:'Milk',ice:'Ice',chocolate:'Chocolate',dairy:'Ice cream / cream',pumpkin:'Pumpkin',spices:'Spices',alcohol:'Alcohol'};
exclusions.innerHTML=ingredients.map(k=>'<label><input type="checkbox" value="'+k+'"> '+(labels[k]||k)+'</label>').join('');
const allowed=()=>drinks.filter(c=>!c.ingredients.some(k=>exclusions.querySelector('input[value="'+k+'"]').checked));
let rotation=0,busy=false;
function paintWheel(){const n=37;wheel.style.background='conic-gradient('+Array.from({length:n},(_,i)=>{const color=i===0?'#19634b':i%2?'#782b34':'#17201c';return color+' '+(i*360/n)+'deg '+((i+1)*360/n)+'deg'}).join(',')+')';}
paintWheel();
function showDrink(c){result.textContent='✦ '+c.name+' · '+c.measure;result.dataset.drink=c.id;}
spin.addEventListener('click',()=>{if(busy)return;const pool=allowed();if(!pool.length){result.textContent='No recipes match. Remove an exclusion to spin.';return;}busy=true;spin.disabled=true;const c=pool[Math.floor(Math.random()*pool.length)];const segment=360/37;const current=((rotation%360)+360)%360;const desired=(360-((c.number+.5)*segment))%360;const extra=(desired-current+360)%360;rotation+=1800+extra;wheel.style.transform='rotate('+rotation+'deg)';result.textContent='The wheel is spinning…';setTimeout(()=>{showDrink(c);busy=false;spin.disabled=false;},4400);});
document.querySelector('#clear').addEventListener('click',()=>{exclusions.querySelectorAll('input').forEach(el=>el.checked=false);});
const esc=s=>String(s).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
function render(){const q=document.querySelector('#search').value.toLowerCase(),type=document.querySelector('#type').value;cards.innerHTML=drinks.filter(c=>c.name.toLowerCase().includes(q)&&(type==='all'||type===c.type)).map(c=>'<article class="coffee-card" id="'+c.id+'"><span class="number">'+String(c.number).padStart(2,'0')+' ◆</span><img src="images/'+c.id+'.svg" alt="Watercolor-style illustration of '+esc(c.name)+'" loading="lazy"><h3>'+esc(c.name)+'</h3><p>'+esc(c.measure)+'</p><button data-id="'+c.id+'">Discover the recipe ↗</button></article>').join('');}
document.querySelector('#search').addEventListener('input',render);document.querySelector('#type').addEventListener('change',render);
cards.addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b)openRecipe(b.dataset.id);});
function openRecipe(id){const c=drinks.find(x=>x.id===id);if(!c)return;document.querySelector('#detail').innerHTML='<img src="images/'+c.id+'.svg" alt=""><p class="eyebrow">THE MIDNIGHT CAFÉ · NO. '+c.number+'</p><h2>'+esc(c.name)+'</h2><h3>Ingredients</h3><p>'+esc(c.measure)+'</p><h3>The ritual</h3><p>'+esc(c.method)+'</p>';dialog.showModal();}
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
result.addEventListener('click',()=>{const id=result.dataset.drink;if(id)openRecipe(id);});
const topBtn=document.querySelector('#to-top');window.addEventListener('scroll',()=>topBtn.classList.toggle('visible',scrollY>320),{passive:true});topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
render();
