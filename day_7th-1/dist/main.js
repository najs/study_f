!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){const n="#app";$(n).append('<div id="count">0</div>'),$(n).append('<button id="btn-up">up</button>'),$(n).append('<button id="btn-down">down</button>');class o{constructor(t){this.hp=100,this.space=[]}eat(t){this.space.push(t),this.hp++}}const r=new class extends o{constructor(t){super(t)}work(){this.hp--}eat(t){super.eat(t),this.hp=this.hp+4}}("papa");r.work(),r.eat({name:"밥"}),r.eat({name:"밥"}),console.log(r)}]);