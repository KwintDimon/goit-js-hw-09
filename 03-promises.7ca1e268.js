!function(){function e(e,n){return new Promise((function(t,o){Math.random()>.3?setTimeout((function(){t({position:e,delay:n})}),n):setTimeout((function(){o({position:e,delay:n})}),n)}))}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]'),i=parseInt(t.value),u=parseInt(o.value),a=parseInt(c.value),r=0;r<a;r++){e(r,i+r*u).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.7ca1e268.js.map
