// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,s,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),s="get"in r,_="set"in r,c&&(s||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(e,t,r.get),_&&a&&a.call(e,t,r.set),e};var f=["none","equiv","safe","same-kind","unsafe"];function c(){return f.slice()}e(c,"enum",{configurable:!1,enumerable:!1,writable:!1,value:function(){return{none:0,equiv:1,safe:2,"same-kind":3,unsafe:4}}});var s=c(),_=s.length;return function(e){var t;for(t=0;t<_;t++)if(e===s[t])return!0;return!1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isCastingMode=t();
//# sourceMappingURL=index.js.map
