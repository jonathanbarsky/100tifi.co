(()=>{var t={757:(t,r,n)=>{t.exports=n(666)},666:t=>{var r=function(t){"use strict";var r,n=Object.prototype,e=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,n){return t[r]=n}}function s(t,r,n,e){var o=r&&r.prototype instanceof y?r:y,a=Object.create(o.prototype),i=new P(e||[]);return a._invoke=function(t,r,n){var e=f;return function(o,a){if(e===p)throw new Error("Generator is already running");if(e===v){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=j(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===f)throw e=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=p;var u=h(t,r,n);if("normal"===u.type){if(e=n.done?v:l,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(e=v,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function h(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",l="suspendedYield",p="executing",v="completed",d={};function y(){}function g(){}function m(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(G([])));L&&L!==n&&e.call(L,a)&&(w=L);var b=m.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function n(o,a,i,c){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):r.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}}function j(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,j(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=h(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,d):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=r,n.done=!0,n};return i.next=i}}return{next:T}}function T(){return{value:r,done:!0}}return g.prototype=m,u(b,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(r,n,e,o,a){void 0===a&&(a=Promise);var i=new _(s(r,n,e,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(b),u(b,c,"Generator"),u(b,a,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=G,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(e,o){return c.type="throw",c.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:G(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return n.d(r,{a:r}),r},n.d=(t,r)=>{for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},n.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";function t(t,r,n,e,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?r(u):Promise.resolve(u).then(e,o)}function r(r){return function(){var n=this,e=arguments;return new Promise((function(o,a){var i=r.apply(n,e);function c(r){t(i,o,a,c,u,"next",r)}function u(r){t(i,o,a,c,u,"throw",r)}c(void 0)}))}}var e=n(757),o=n.n(e);var a="https://rickandmortyapi.com/api/character/";const i=function(){var t=r(o().mark((function t(r){var n,e,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r?"".concat(a).concat(r):a,t.prev=1,t.next=4,fetch(n);case 4:return e=t.sent,t.next=7,e.json();case 7:return i=t.sent,t.abrupt("return",i);case 11:t.prev=11,t.t0=t.catch(1),console.log("Fetch Error",t.t0);case 14:case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(r){return t.apply(this,arguments)}}(),c=function(){return location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"},u=function(){return'\n      <div class="Error404">\n        <h2>Error 404</h2>\n      </div>\n    '},s=function(t){return t.length<=3?"/"===t?t:"/:id":t};var h={"/":function(){var t=r(o().mark((function t(){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i();case 2:return r=t.sent,n='\n        <div class="Characters">\n            '.concat(r.results.map((function(t){return'\n                <article class="Character-item">\n                    <a href="#/'.concat(t.id,'/">\n                        <img src="').concat(t.image,'" alt="').concat(t.name,'">\n                        <h2>').concat(t.name,"</h2>\n                    </a>\n                </article>\n            ")})).join(""),"\n\n        </div>\n    "),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),"/:id":function(){var t=r(o().mark((function t(){var r,n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=c(),t.next=3,i(r);case 3:return n=t.sent,e='\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="'.concat(n.image,'" alt="').concat(n.name,'">\n        <h2>').concat(n.name,'</h2>\n      </article>\n      <article class="Characters-card">\n        <h3>Episodes: <span>').concat(n.episode.length,"</span></h3>\n        <h3>Status: <span>").concat(n.status,"</span></h3>\n        <h3>Species: <span>").concat(n.species,"</span></h3>\n        <h3>Gender: <span>").concat(n.gender,"</span></h3>\n        <h3>Origin: <span>").concat(n.origin.name,"</span></h3>\n        <h3>Last Location: ").concat(n.location.name,"</h3>\n      </article>\n    </div>\n  "),t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),"/contact":"Contact"};const f=function(){var t=r(o().mark((function t(){var r,n,e,a,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.getElementById("header"),n=document.getElementById("content"),t.next=4,'\n    <div class="Header-main">\n      <div class="Header-logo">\n        <h1>\n          <a href="/100tifi.co">\n            100tifi.co\n          </a>\n        </h1>\n      </div>\n      <div class="Header-nav">\n        <a href="#/about/">\n          About\n        </a>\n      </div>\n    </div>\n  ';case 4:return r.innerHTML=t.sent,e=c(),t.next=8,s(e);case 8:return a=t.sent,i=h[a]?h[a]:u,t.next=12,i();case 12:n.innerHTML=t.sent;case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();window.addEventListener("load",f),window.addEventListener("hashChange",f)})()})();