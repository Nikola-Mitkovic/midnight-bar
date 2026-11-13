'use strict';
// NIST US customary factors. Values remain metric in recipe records.
// https://www.nist.gov/pml/owm/metric-si/unit-conversion/approximate-conversions-us-customary-measures-metric
window.RecipeUnits=(()=>{
 const state=new WeakMap();
 const number=n=>String(Number(n.toFixed(n<1?2:1)));
 function convert(text){
  text=text.replace(/(\d+(?:\.\d+)?)\s*×\s*(\d+(?:\.\d+)?)\s*cm\b/g,'$1 cm × $2 cm');
  return text.replace(/(\d+(?:\.\d+)?)(?:\s*[–-]\s*(\d+(?:\.\d+)?))?\s*(ml|mL|g|°C|cm)\b/g,(_,a,b,u)=>{
   const fn=u==='g'?n=>n/28.349523125:u==='°C'?n=>Math.round((n*9/5+32)/5)*5:u==='cm'?n=>n/2.54:n=>n/29.5735295625;
   const unit=u==='g'?'oz (weight)':u==='°C'?'°F':u==='cm'?'in':'US fl oz';
   return number(fn(+a))+(b?'–'+number(fn(+b)):'')+' '+unit;
  });
 }
 function install(root){
  const dialog=root.closest('dialog');let unit=state.get(dialog)||'metric';
  const controls=document.createElement('div');controls.className='measurement-switch';controls.setAttribute('role','group');controls.setAttribute('aria-label','Recipe measurement system');
  controls.innerHTML='<button type="button" data-system="metric">Metric</button><button type="button" data-system="us">US</button><small>US conversions are approximate; oz means weight, fl oz means volume.</small>';
  root.querySelector('h2').after(controls);
  const originals=[];const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;
  while(node=walker.nextNode())if(!controls.contains(node)&&!node.parentElement.closest('button,a'))originals.push([node,node.nodeValue]);
  const apply=()=>{for(const [node,text] of originals)node.nodeValue=unit==='us'?convert(text):text;controls.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.system===unit)));};
  controls.addEventListener('click',e=>{const b=e.target.closest('[data-system]');if(!b)return;unit=b.dataset.system;state.set(dialog,unit);apply();});apply();
 }
 return {convert,install,reset:dialog=>state.set(dialog,'metric')};
})();
