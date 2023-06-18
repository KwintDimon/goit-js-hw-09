new Promise((function(o,n){var e=Math.random()>.5;setTimeout((function(){e&&o("your order"),n("no finished your order")}),1e3)})).then((function(o){console.log("onMakeOrderSuccess"),console.log(o)})).catch((function(o){console.log("onMakeOrderError"),console.log(o)}));
//# sourceMappingURL=03-promises.f4261081.js.map
