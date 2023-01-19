(()=>{var e,t,n={90:e=>{!function(t,n){var r=function(e,t,n){"use strict";var r,i;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},n)t in i||(i[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var o,a,l,s,c,u,f,d,v,p,h,m,y,g,b,w,S,z,E,C,T,A,x,k,_,j,L,O,P,M,N,H,R,q,D,W,B,I,F,$,Y,U,G,J,K=t.documentElement,Q=e.HTMLPictureElement,V="addEventListener",X="getAttribute",Z=e[V].bind(e),ee=e.setTimeout,te=e.requestAnimationFrame||ee,ne=e.requestIdleCallback,re=/^picture$/i,ie=["load","error","lazyincluded","_lazyloaded"],oe={},ae=Array.prototype.forEach,le=function(e,t){return oe[t]||(oe[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),oe[t].test(e[X]("class")||"")&&oe[t]},se=function(e,t){le(e,t)||e.setAttribute("class",(e[X]("class")||"").trim()+" "+t)},ce=function(e,t){var n;(n=le(e,t))&&e.setAttribute("class",(e[X]("class")||"").replace(n," "))},ue=function(e,t,n){var r=n?V:"removeEventListener";n&&ue(e,t),ie.forEach((function(n){e[r](n,t)}))},fe=function(e,n,i,o,a){var l=t.createEvent("Event");return i||(i={}),i.instance=r,l.initEvent(n,!o,!a),l.detail=i,e.dispatchEvent(l),l},de=function(t,n){var r;!Q&&(r=e.picturefill||i.pf)?(n&&n.src&&!t[X]("srcset")&&t.setAttribute("srcset",n.src),r({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},ve=function(e,t){return(getComputedStyle(e,null)||{})[t]},pe=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},he=(Y=[],U=$=[],J=function(e,n){I&&!n?e.apply(this,arguments):(U.push(e),F||(F=!0,(t.hidden?ee:te)(G)))},J._lsFlush=G=function(){var e=U;for(U=$.length?Y:$,I=!0,F=!1;e.length;)e.shift()();I=!1},J),me=function(e,t){return t?function(){he(e)}:function(){var t=this,n=arguments;he((function(){e.apply(t,n)}))}},ye=function(e){var t,r,i=function(){t=null,e()},o=function(){var e=n.now()-r;e<99?ee(o,99-e):(ne||i)(i)};return function(){r=n.now(),t||(t=ee(o,99))}},ge=(S=/^img$/i,z=/^iframe$/i,E="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),0,C=0,T=0,A=-1,x=function(e){T--,(!e||T<0||!e.target)&&(T=0)},k=function(e){return null==w&&(w="hidden"==ve(t.body,"visibility")),w||!("hidden"==ve(e.parentNode,"visibility")&&"hidden"==ve(e,"visibility"))},_=function(e,n){var r,i=e,o=k(e);for(m-=n,b+=n,y-=n,g+=n;o&&(i=i.offsetParent)&&i!=t.body&&i!=K;)(o=(ve(i,"opacity")||1)>0)&&"visible"!=ve(i,"overflow")&&(r=i.getBoundingClientRect(),o=g>r.left&&y<r.right&&b>r.top-1&&m<r.bottom+1);return o},L=function(e){var t,r=0,o=i.throttleDelay,a=i.ricTimeout,l=function(){t=!1,r=n.now(),e()},s=ne&&a>49?function(){ne(l,{timeout:a}),a!==i.ricTimeout&&(a=i.ricTimeout)}:me((function(){ee(l)}),!0);return function(e){var i;(e=!0===e)&&(a=33),t||(t=!0,(i=o-(n.now()-r))<0&&(i=0),e||i<9?s():ee(s,i))}}(j=function(){var e,n,o,a,l,s,f,v,S,z,x,j,L=r.elements;if((d=i.loadMode)&&T<8&&(e=L.length)){for(n=0,A++;n<e;n++)if(L[n]&&!L[n]._lazyRace)if(!E||r.prematureUnveil&&r.prematureUnveil(L[n]))q(L[n]);else if((v=L[n][X]("data-expand"))&&(s=1*v)||(s=C),z||(z=!i.expand||i.expand<1?K.clientHeight>500&&K.clientWidth>500?500:370:i.expand,r._defEx=z,x=z*i.expFactor,j=i.hFac,w=null,C<x&&T<1&&A>2&&d>2&&!t.hidden?(C=x,A=0):C=d>1&&A>1&&T<6?z:0),S!==s&&(p=innerWidth+s*j,h=innerHeight+s,f=-1*s,S=s),o=L[n].getBoundingClientRect(),(b=o.bottom)>=f&&(m=o.top)<=h&&(g=o.right)>=f*j&&(y=o.left)<=p&&(b||g||y||m)&&(i.loadHidden||k(L[n]))&&(u&&T<3&&!v&&(d<3||A<4)||_(L[n],s))){if(q(L[n]),l=!0,T>9)break}else!l&&u&&!a&&T<4&&A<4&&d>2&&(c[0]||i.preloadAfterLoad)&&(c[0]||!v&&(b||g||y||m||"auto"!=L[n][X](i.sizesAttr)))&&(a=c[0]||L[n]);a&&!l&&q(a)}}),P=me(O=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(x(e),se(t,i.loadedClass),ce(t,i.loadingClass),ue(t,M),fe(t,"lazyloaded"))}),M=function(e){P({target:e.target})},N=function(e,t){var n=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},H=function(e){var t,n=e[X](i.srcsetAttr);(t=i.customMedia[e[X]("data-media")||e[X]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},R=me((function(e,t,n,r,o){var a,l,s,c,u,d;(u=fe(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?se(e,i.autosizesClass):e.setAttribute("sizes",r)),l=e[X](i.srcsetAttr),a=e[X](i.srcAttr),o&&(c=(s=e.parentNode)&&re.test(s.nodeName||"")),d=t.firesLoad||"src"in e&&(l||a||c),u={target:e},se(e,i.loadingClass),d&&(clearTimeout(f),f=ee(x,2500),ue(e,M,!0)),c&&ae.call(s.getElementsByTagName("source"),H),l?e.setAttribute("srcset",l):a&&!c&&(z.test(e.nodeName)?N(e,a):e.src=a),o&&(l||c)&&de(e,{src:a})),e._lazyRace&&delete e._lazyRace,ce(e,i.lazyClass),he((function(){var t=e.complete&&e.naturalWidth>1;d&&!t||(t&&se(e,i.fastLoadedClass),O(u),e._lazyCache=!0,ee((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&T--}),!0)})),q=function(e){if(!e._lazyRace){var t,n=S.test(e.nodeName),r=n&&(e[X](i.sizesAttr)||e[X]("sizes")),o="auto"==r;(!o&&u||!n||!e[X]("src")&&!e.srcset||e.complete||le(e,i.errorClass)||!le(e,i.lazyClass))&&(t=fe(e,"lazyunveilread").detail,o&&be.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,T++,R(e,t,o,r,n))}},D=ye((function(){i.loadMode=3,L()})),B=function(){u||(n.now()-v<999?ee(B,999):(u=!0,i.loadMode=3,L(),Z("scroll",W,!0)))},{_:function(){v=n.now(),r.elements=t.getElementsByClassName(i.lazyClass),c=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),Z("scroll",L,!0),Z("resize",L,!0),Z("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+i.loadingClass);n.length&&n.forEach&&te((function(){n.forEach((function(e){e.complete&&q(e)}))}))}})),e.MutationObserver?new MutationObserver(L).observe(K,{childList:!0,subtree:!0,attributes:!0}):(K[V]("DOMNodeInserted",L,!0),K[V]("DOMAttrModified",L,!0),setInterval(L,999)),Z("hashchange",L,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[V](e,L,!0)})),/d$|^c/.test(t.readyState)?B():(Z("load",B),t[V]("DOMContentLoaded",L),ee(B,2e4)),r.elements.length?(j(),he._lsFlush()):L()},checkElems:L,unveil:q,_aLSL:W=function(){3==i.loadMode&&(i.loadMode=2),D()}}),be=(a=me((function(e,t,n,r){var i,o,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),re.test(t.nodeName||""))for(o=0,a=(i=t.getElementsByTagName("source")).length;o<a;o++)i[o].setAttribute("sizes",r);n.detail.dataAttr||de(e,n.detail)})),l=function(e,t,n){var r,i=e.parentNode;i&&(n=pe(e,i,n),(r=fe(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&a(e,i,r,n))},{_:function(){o=t.getElementsByClassName(i.autosizesClass),Z("resize",s)},checkElems:s=ye((function(){var e,t=o.length;if(t)for(e=0;e<t;e++)l(o[e])})),updateElem:l}),we=function(){!we.i&&t.getElementsByClassName&&(we.i=!0,be._(),ge._())};return ee((function(){i.init&&we()})),r={cfg:i,autoSizer:be,loader:ge,init:we,uP:de,aC:se,rC:ce,hC:le,fire:fe,gW:pe,rAF:he}}(t,t.document,Date);t.lazySizes=r,e.exports&&(e.exports=r)}("undefined"!=typeof window?window:{})},705:(e,t,n)=>{var r=n(639).Symbol;e.exports=r},239:(e,t,n)=>{var r=n(705),i=n(607),o=n(333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?i(e):o(e)}},561:(e,t,n)=>{var r=n(990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(i,""):e}},957:(e,t,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},607:(e,t,n)=>{var r=n(705),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(e){}var i=a.call(e);return r&&(t?e[l]=n:delete e[l]),i}},333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},639:(e,t,n)=>{var r=n(957),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},279:(e,t,n)=>{var r=n(218),i=n(771),o=n(841),a=Math.max,l=Math.min;e.exports=function(e,t,n){var s,c,u,f,d,v,p=0,h=!1,m=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=s,r=c;return s=c=void 0,p=t,f=e.apply(r,n)}function b(e){return p=e,d=setTimeout(S,t),h?g(e):f}function w(e){var n=e-v;return void 0===v||n>=t||n<0||m&&e-p>=u}function S(){var e=i();if(w(e))return z(e);d=setTimeout(S,function(e){var n=t-(e-v);return m?l(n,u-(e-p)):n}(e))}function z(e){return d=void 0,y&&s?g(e):(s=c=void 0,f)}function E(){var e=i(),n=w(e);if(s=arguments,c=this,v=e,n){if(void 0===d)return b(v);if(m)return clearTimeout(d),d=setTimeout(S,t),g(v)}return void 0===d&&(d=setTimeout(S,t)),f}return t=o(t)||0,r(n)&&(h=!!n.leading,u=(m="maxWait"in n)?a(o(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),E.cancel=function(){void 0!==d&&clearTimeout(d),p=0,s=v=c=d=void 0},E.flush=function(){return void 0===d?f:z(i())},E}},218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},448:(e,t,n)=>{var r=n(239),i=n(5);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==r(e)}},771:(e,t,n)=>{var r=n(639);e.exports=function(){return r.Date.now()}},493:(e,t,n)=>{var r=n(279),i=n(218);e.exports=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:o,maxWait:t,trailing:a})}},841:(e,t,n)=>{var r=n(561),i=n(218),o=n(448),a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,i),o.exports}i.m=n,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,n)=>(i.f[n](e,t),t)),[])),i.u=e=>"modal.6ecc988426cdb64d9876.js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="platinum-travel-site:",i.l=(n,r,o,a)=>{if(e[n])e[n].push(r);else{var l,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var f=c[u];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+o){l=f;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",t+o),l.src=n),e[n]=[r];var d=(t,r)=>{l.onerror=l.onload=null,clearTimeout(v);var i=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(r))),t)return t(r)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={179:0};i.f.j=(t,n)=>{var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise(((n,i)=>r=e[t]=[n,i]));n.push(r[2]=o);var a=i.p+i.u(t),l=new Error;i.l(a,(n=>{if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,r[1](l)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,o,[a,l,s]=n,c=0;if(a.some((t=>0!==e[t]))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);s&&s(i)}for(t&&t(n);c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkplatinum_travel_site=self.webpackChunkplatinum_travel_site||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===e(o)?o:String(o)),i)}var o}i(90);const n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}var n,r;return n=e,(r=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();var r=i(493),o=i.n(r),a=i(279),l=i.n(a);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(i)?i:String(i)),r)}var i}const u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.revealPoint=n,this.itemToReveal=t,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=o()(this.calcCaller,200).bind(this),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",l()((function(){e.browserHeight=window.innerHeight}),300))}},{key:"calcCaller",value:function(){var e=this;this.itemToReveal.forEach((function(t){0==t.isRevealed&&e.calculateIfScrolledTo(t)}))}},{key:"calculateIfScrolledTo",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&e.getBoundingClientRect().y/this.browserHeight*100<this.revealPoint&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}},{key:"hideInitially",value:function(){this.itemToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemToReveal[this.itemToReveal.length-1].isLastItem=!0}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(i)?i:String(i)),r)}var i}var v;new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",o()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",l()((function(){e.browserHeight=window.innerHeight}),300))}},{key:"runOnScroll",value:function(){var e=this;this.checkScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"checkScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+window.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().y/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){var n=e.getAttribute("data-matching-link");document.querySelectorAll(".primary-nav a:not(".concat(n,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(n).classList.add("is-current-link")}}}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()),new u(document.querySelectorAll(".feature-item"),75),new u(document.querySelectorAll(".testimonial"),60),new n,document.querySelectorAll(".open-modal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===v?i.e(582).then(i.bind(i,222)).then((function(e){v=new e.default,setTimeout((function(){return v.openModal()}),20)})).catch((function(){return console.log("Модалыг дуудахад алдаа гарлаа!")})):v.openModal()}))}))})()})();