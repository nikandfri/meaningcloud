!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=7)}([function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},o=[],r=0;r<e.length;r++){var i=e[r],s=n.base?i[0]+n.base:i[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:b(f,n),references:1}),o.push(u)}return o}function l(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function b(e,n){var t,o,r;if(n.singleton){var i=m++;t=h||(h=l(n)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=l(n),o=p.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=s(e,n),l=0;l<t.length;l++){var u=c(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";var o=t(1),r=t.n(o)()((function(e){return e[1]}));r.push([e.i,"*{box-sizing:border-box}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}ul{list-style-type:none}\n",""]),n.a=r},function(e,n,t){"use strict";var o=t(1),r=t.n(o)()((function(e){return e[1]}));r.push([e.i,"body{display:flex;flex-direction:column;min-height:100vh}main{flex:2}section{max-width:800px;margin:50px auto}\n",""]),n.a=r},function(e,n,t){"use strict";var o=t(1),r=t.n(o)()((function(e){return e[1]}));r.push([e.i,"",""]),n.a=r},function(e,n,t){"use strict";var o=t(1),r=t.n(o)()((function(e){return e[1]}));r.push([e.i,"form{border:1px solid #545454;border-radius:3px;padding:40px}input{padding:5px 20px;width:100%;line-height:16px;margin:10px 0}\n",""]),n.a=r},function(e,n,t){"use strict";var o=t(1),r=t.n(o)()((function(e){return e[1]}));r.push([e.i,"header{display:flex;justify-content:space-between;padding:10px 40px}\n",""]),n.a=r},function(e,n,t){"use strict";function o(e){let n=document.querySelector("form");n.addEventListener("submit",e=>{const t=n.elements.input.value;e.preventDefault(),console.log("input:",t);const o=r(t);console.log("returning url in apiCall function:",o),fetch(o,{method:"POST",body:"data",mode:"cors",headers:new Headers,credentials:"same-origin"}).then(e=>e.json()).then(e=>i(e))})}t.r(n),t.d(n,"apiCall",(function(){return o}));const r=e=>{console.log("Inside of getURL",e);const n="https://api.meaningcloud.com/sentiment-2.1?key=4c86f19313711cbb6fc8c26d9c8eaf53&of=json&txt="+encodeURIComponent(e)+"&model=general&lang=en";return console.log("returning of url in getURL:",n),n},i=e=>{console.log("Inside of PostServer:",e),fetch("http://localhost:8080/post",{headers:new Headers({"content-type":"application/json"}),method:"POST",body:e,mode:"cors",credential:"same-origin"}).then(e=>e.json()).then(e=>{console.log("Response from the server!",e)})};var a=t(0),c=t.n(a),s=t(2),l={insert:"head",singleton:!1},u=(c()(s.a,l),s.a.locals,t(3)),d={insert:"head",singleton:!1},f=(c()(u.a,d),u.a.locals,t(4)),p={insert:"head",singleton:!1},h=(c()(f.a,p),f.a.locals,t(5)),m={insert:"head",singleton:!1},b=(c()(h.a,m),h.a.locals,t(6)),g={insert:"head",singleton:!1};c()(b.a,g),b.a.locals;o()}]);