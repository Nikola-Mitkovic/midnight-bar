'use strict';
// One-card browsing uses the same recipes, artwork, filters, and recipe dialog as the grid.
const deckPanel=document.querySelector('#deck'),deckStage=document.querySelector('#deck-stage');
const deckCard=document.querySelector('#deck-card'),deckPrevious=document.querySelector('#deck-prev'),deckNext=document.querySelector('#deck-next');
const viewGrid=document.querySelector('#view-grid'),viewDeck=document.querySelector('#view-deck');
const deckRanks=['A','2','3','4','5','6','7','8','9','10','J','Q','K','JOKER'];
let deckMode=false,deckVisited=false,deckHand=[],deckIndex=0,deckSignature='',deckBusy=false,deckRevision=0,deckAnimation=null,deckPointer=null,deckSuppressClick=false;
function stopDeckMotion(){deckRevision++;deckAnimation?.cancel();deckAnimation=null;deckBusy=false;deckPointer=null;}
function deckSelectedSuit(){
 document.querySelectorAll('[data-hand]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.hand===suitSelect.value)));
}
function paintDeck(){
 const c=deckHand[deckIndex];
 deckCard.innerHTML=c?cardMarkup(c,'swipe'):'';
 deckStage.hidden=!c;
 document.querySelector('#deck-empty').hidden=Boolean(c);
 deckPrevious.disabled=!c||deckIndex===0;
 deckNext.disabled=!c||deckIndex===deckHand.length-1;
 document.querySelector('#deck-position').textContent=c?`${deckIndex+1} / ${deckHand.length} · ${c.rank==='JOKER'?'Joker':c.rank} ${c.suit} · ${c.name}`:'0 cards';
 activateArtwork(deckCard);
 deckSelectedSuit();
}
function renderDeck(shown){
 // Existing recipe order groups suits. Explicit rank ordering guarantees ace-to-king within each suit.
 const suits=['♠','♣','♦','♥','★'];
 const next=shown.slice().sort((a,b)=>suits.indexOf(a.suit)-suits.indexOf(b.suit)||deckRanks.indexOf(a.rank)-deckRanks.indexOf(b.rank));
 const signature=JSON.stringify([search.value,spiritSelect.value,suitSelect.value,styleSelect.value,next.map(c=>c.id)]);
 if(signature!==deckSignature){stopDeckMotion();deckIndex=0;deckSignature=signature;}
 deckHand=next;
 grid.hidden=deckMode;deckPanel.hidden=!deckMode;
 // Use the common reset action below an empty hand without duplicating the grid's empty message.
 document.querySelector('#empty').hidden=deckMode||shown.length!==0;
 if(deckMode)paintDeck();
}
function setDeckView(enabled){
 stopDeckMotion();deckMode=enabled;
 viewGrid.setAttribute('aria-pressed',String(!enabled));viewDeck.setAttribute('aria-pressed',String(enabled));
 // First unfiltered visit opens at the ace of hearts; active filters are respected.
 if(enabled&&!deckVisited&&search.value.trim()===''&&[spiritSelect,suitSelect,styleSelect].every(s=>s.value==='all'))suitSelect.value='♥';
 if(enabled)deckVisited=true;
 renderCards();
}
async function stepDeck(direction){
 const target=deckIndex+direction;
 if(!deckMode||deckBusy||dialog.open||target<0||target>=deckHand.length)return;
 deckBusy=true;const revision=deckRevision;
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const run=async(frames,duration)=>{deckAnimation=deckCard.animate(frames,{duration,easing:'cubic-bezier(.22,.65,.3,1)',fill:'both'});await deckAnimation.finished;};
 try{
  if(!reduced&&deckCard.animate)await run([{transform:'translateX(0) rotateY(0deg)',opacity:1},{transform:`translateX(${-direction*72}%) rotateY(${-direction*72}deg) rotate(${-direction*7}deg)`,opacity:0}],220);
  if(revision!==deckRevision)return;
  // Move focus off a tag/recipe control that is about to be replaced.
  if(deckCard.contains(document.activeElement))deckStage.focus({preventScroll:true});
  deckAnimation?.cancel();deckIndex=target;paintDeck();
  if(!reduced&&deckCard.animate)await run([{transform:`translateX(${direction*60}%) rotateY(${direction*65}deg) rotate(${direction*5}deg)`,opacity:0},{transform:'translateX(0) rotateY(0deg)',opacity:1}],220);
 }catch(error){if(error.name!=='AbortError')throw error;}
 finally{if(revision===deckRevision){deckAnimation?.cancel();deckAnimation=null;deckBusy=false;}}
}
viewGrid.addEventListener('click',()=>setDeckView(false));
viewDeck.addEventListener('click',()=>setDeckView(true));
deckPrevious.addEventListener('click',()=>stepDeck(-1));deckNext.addEventListener('click',()=>stepDeck(1));
document.querySelectorAll('[data-hand]').forEach(b=>b.addEventListener('click',()=>{
 search.value='';spiritSelect.value='all';styleSelect.value='all';suitSelect.value=b.dataset.hand;
 stopDeckMotion();deckIndex=0;deckSignature='';renderCards();
}));
deckStage.addEventListener('keydown',event=>{
 if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();stepDeck(event.key==='ArrowLeft'?-1:1);}
});
deckStage.addEventListener('click',event=>{
 if(deckSuppressClick){event.preventDefault();event.stopPropagation();deckSuppressClick=false;return;}
 const button=event.target.closest('[data-recipe]');if(button){openRecipe(button.dataset.recipe,button);return;}
 const tag=event.target.closest('[data-tag]');if(tag){styleSelect.value=styleSelect.value===tag.dataset.tag?'all':tag.dataset.tag;renderCards();styleSelect.focus();}
});
// Vertical scrolling and pinch zoom stay native; only an intentional horizontal gesture changes cards.
deckStage.addEventListener('pointerdown',event=>{
 deckSuppressClick=false;
 if(!event.isPrimary||event.button!==0||deckBusy||event.target.closest('button,a,input,select'))return;
 deckPointer={id:event.pointerId,x:event.clientX,y:event.clientY};
 deckStage.setPointerCapture(event.pointerId);
});
deckStage.addEventListener('pointerup',event=>{
 if(!deckPointer||event.pointerId!==deckPointer.id)return;
 const dx=event.clientX-deckPointer.x,dy=event.clientY-deckPointer.y;deckPointer=null;
 if(deckStage.hasPointerCapture(event.pointerId))deckStage.releasePointerCapture(event.pointerId);
 if(Math.abs(dx)>=45&&Math.abs(dx)>Math.abs(dy)*1.35){deckSuppressClick=true;stepDeck(dx<0?1:-1);}
});
deckStage.addEventListener('pointercancel',()=>{deckPointer=null;});
deckStage.addEventListener('lostpointercapture',()=>{deckPointer=null;});
deckStage.addEventListener('dragstart',event=>event.preventDefault());
document.querySelector('a[href="#deck"]').addEventListener('click',event=>{event.preventDefault();setDeckView(true);document.querySelector('#menu').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});viewDeck.focus({preventScroll:true});});
window.addEventListener('hashchange',()=>{if(location.hash==='#deck'){setDeckView(true);deckPanel.scrollIntoView();}});
if(location.hash==='#deck'){setDeckView(true);deckPanel.scrollIntoView();}
