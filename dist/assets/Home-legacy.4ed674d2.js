!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(j){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=l;var p={};function d(){}function h(){}function m(){}var v={};u(v,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(R([])));b&&b!==r&&o.call(b,a)&&(v=b);var y=m.prototype=d.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(i,a,s,c){var u=f(e[i],e,a);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==n(p)&&o.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,s,c)}),(function(e){r("throw",e,s,c)})):t.resolve(p).then((function(e){l.value=e,s(l)}),(function(e){return r("throw",e,s,c)}))}c(u.arg)}var i;this._invoke=function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function R(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=m,u(y,"constructor",m),u(m,"constructor",h),h.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},t.awrap=function(e){return{__await:e}},w(x.prototype),u(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(y),u(y,c,"Generator"),u(y,a,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:R(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function t(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,o)}function r(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=e.apply(r,n);function s(e){t(a,o,i,s,c,"next",e)}function c(e){t(a,o,i,s,c,"throw",e)}s(void 0)}))}}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=document.createElement("style");o.innerHTML='.van-overlay{position:fixed;top:0;left:0;z-index:1;width:100%;height:100%;background-color:rgba(0,0,0,.7)}.van-overflow-hidden{overflow:hidden!important}.van-popup{position:fixed;max-height:100%;overflow-y:auto;background-color:#fff;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;-o-transition:transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-overflow-scrolling:touch}.van-popup--center{top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-popup--center.van-popup--round{border-radius:.42667rem}.van-popup--top{top:0;left:0;width:100%}.van-popup--top.van-popup--round{border-radius:0 0 .42667rem .42667rem}.van-popup--right{top:50%;right:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--right.van-popup--round{border-radius:.42667rem 0 0 .42667rem}.van-popup--bottom{bottom:0;left:0;width:100%}.van-popup--bottom.van-popup--round{border-radius:.42667rem .42667rem 0 0}.van-popup--left{top:50%;left:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--left.van-popup--round{border-radius:0 .42667rem .42667rem 0}.van-popup--safe-area-inset-bottom{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.van-popup-slide-bottom-enter-active,.van-popup-slide-left-enter-active,.van-popup-slide-right-enter-active,.van-popup-slide-top-enter-active{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.van-popup-slide-bottom-leave-active,.van-popup-slide-left-leave-active,.van-popup-slide-right-leave-active,.van-popup-slide-top-leave-active{-webkit-transition-timing-function:ease-in;-o-transition-timing-function:ease-in;transition-timing-function:ease-in}.van-popup-slide-top-enter,.van-popup-slide-top-leave-active{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.van-popup-slide-right-enter,.van-popup-slide-right-leave-active{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}.van-popup-slide-bottom-enter,.van-popup-slide-bottom-leave-active{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.van-popup-slide-left-enter,.van-popup-slide-left-leave-active{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.van-popup__close-icon{position:absolute;z-index:1;color:#c8c9cc;font-size:.58667rem;cursor:pointer}.van-popup__close-icon:active{color:#969799}.van-popup__close-icon--top-left{top:.42667rem;left:.42667rem}.van-popup__close-icon--top-right{top:.42667rem;right:.42667rem}.van-popup__close-icon--bottom-left{bottom:.42667rem;left:.42667rem}.van-popup__close-icon--bottom-right{right:.42667rem;bottom:.42667rem}.van-toast{position:fixed;top:50%;left:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:content-box;box-sizing:content-box;width:2.34667rem;max-width:70%;min-height:2.34667rem;padding:.42667rem;color:#fff;font-size:.37333rem;line-height:.53333rem;white-space:pre-wrap;text-align:center;word-break:break-all;background-color:rgba(0,0,0,.7);border-radius:.21333rem;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-toast--unclickable{overflow:hidden}.van-toast--unclickable *{pointer-events:none}.van-toast--html,.van-toast--text{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;min-width:2.56rem;min-height:0;padding:.21333rem .32rem}.van-toast--html .van-toast__text,.van-toast--text .van-toast__text{margin-top:0}.van-toast--top{top:20%}.van-toast--bottom{top:auto;bottom:20%}.van-toast__icon{font-size:.96rem}.van-toast__loading{padding:.10667rem;color:#fff}.van-toast__text{margin-top:.21333rem}.van-cell{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:.26667rem .42667rem;overflow:hidden;color:#323233;font-size:.37333rem;line-height:.64rem;background-color:#fff}.van-cell:after{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";pointer-events:none;right:.42667rem;bottom:0;left:.42667rem;border-bottom:.02667rem solid #ebedf0;-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5)}.van-cell--borderless:after,.van-cell:last-child:after{display:none}.van-cell__label{margin-top:.10667rem;color:#969799;font-size:.32rem;line-height:.48rem}.van-cell__title,.van-cell__value{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.van-cell__value{position:relative;overflow:hidden;color:#969799;text-align:right;vertical-align:middle;word-wrap:break-word}.van-cell__value--alone{color:#323233;text-align:left}.van-cell__left-icon,.van-cell__right-icon{height:.64rem;font-size:.42667rem;line-height:.64rem}.van-cell__left-icon{margin-right:.10667rem}.van-cell__right-icon{margin-left:.10667rem;color:#969799}.van-cell--clickable{cursor:pointer}.van-cell--clickable:active{background-color:#f2f3f5}.van-cell--required{overflow:visible}.van-cell--required:before{position:absolute;left:.21333rem;color:#ee0a24;font-size:.37333rem;content:"*"}.van-cell--center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.van-cell--large{padding-top:.32rem;padding-bottom:.32rem}.van-cell--large .van-cell__title{font-size:.42667rem}.van-cell--large .van-cell__label{font-size:.37333rem}.van-cell-group{background-color:#fff}.van-cell-group--inset{margin:0 .42667rem;overflow:hidden;border-radius:.21333rem}.van-cell-group__title{padding:.42667rem .42667rem .21333rem;color:#969799;font-size:.37333rem;line-height:.42667rem}.van-cell-group__title--inset{padding:.42667rem .42667rem .21333rem .85333rem}.home[data-v-e9e4ede4]{padding-top:.8rem;text-align:center}.home .xhb-logo[data-v-e9e4ede4]{width:2.66667rem}.home .title[data-v-e9e4ede4]{font-size:.8rem;font-weight:500;padding:.26667rem 0}.home .router-wrap[data-v-e9e4ede4]{padding:.53333rem 0}.home .router-wrap a[data-v-e9e4ede4]{color:#477dfd;text-decoration:underline}.home .requset-test[data-v-e9e4ede4]{margin-top:.53333rem}.home .mode-info[data-v-e9e4ede4]{text-align:left;margin-top:.8rem}\n',document.head.appendChild(o),System.register(["./index-legacy.dcd19c48.js","./logo-legacy.e6b3059b.js","./index-legacy.ab8df4ea.js"],(function(t){"use strict";var o,i,a,s,c,u;return{setters:[function(e){o=e.T,i=e._,a=e.a,s=e.b},function(e){c=e._},function(e){u=e.n}],execute:function(){function l(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var f,p={exports:{}},d={exports:{}},h=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},m=h,v=Object.prototype.toString,g=(f=Object.create(null),function(e){var t=v.call(e);return f[t]||(f[t]=t.slice(8,-1).toLowerCase())});function b(e){return e=e.toLowerCase(),function(t){return g(t)===e}}function y(e){return Array.isArray(e)}function w(e){return void 0===e}var x=b("ArrayBuffer");function E(e){return null!==e&&"object"===n(e)}function _(e){if("object"!==g(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var O=b("Date"),k=b("File"),R=b("Blob"),S=b("FileList");function j(e){return"[object Function]"===v.call(e)}var T=b("URLSearchParams");function A(e,t){if(null!=e)if("object"!==n(e)&&(e=[e]),y(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var L,C=(L="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return L&&e instanceof L}),N={isArray:y,isArrayBuffer:x,isBuffer:function(e){return null!==e&&!w(e)&&null!==e.constructor&&!w(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||v.call(e)===t||j(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&x(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:E,isPlainObject:_,isUndefined:w,isDate:O,isFile:k,isBlob:R,isFunction:j,isStream:function(e){return E(e)&&j(e.pipe)},isURLSearchParams:T,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:A,merge:function e(){var t={};function r(r,n){_(t[n])&&_(r)?t[n]=e(t[n],r):_(r)?t[n]=e({},r):y(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)A(arguments[n],r);return t},extend:function(e,t,r){return A(t,(function(t,n){e[n]=r&&"function"==typeof t?m(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r){var n,o,i,a={};t=t||{};do{for(o=(n=Object.getOwnPropertyNames(e)).length;o-- >0;)a[i=n[o]]||(t[i]=e[i],a[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:g,kindOfTest:b,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;var t=e.length;if(w(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},isTypedArray:C,isFileList:S},P=N;function D(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var U=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(P.isURLSearchParams(t))n=t.toString();else{var o=[];P.forEach(t,(function(e,t){null!=e&&(P.isArray(e)?t+="[]":e=[e],P.forEach(e,(function(e){P.isDate(e)?e=e.toISOString():P.isObject(e)&&(e=JSON.stringify(e)),o.push(D(t)+"="+D(e))})))})),n=o.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},B=N;function F(){this.handlers=[]}F.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},F.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},F.prototype.forEach=function(e){B.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var z=F,q=N,I=N;function M(e,t,r,n,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}I.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var H=M.prototype,J={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){J[e]={value:e}})),Object.defineProperties(M,J),Object.defineProperty(H,"isAxiosError",{value:!0}),M.from=function(e,t,r,n,o,i){var a=Object.create(H);return I.toFlatObject(e,a,(function(e){return e!==Error.prototype})),M.call(a,e.message,t,r,n,o),a.name=e.name,i&&Object.assign(a,i),a};var G=M,W={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Y=N;var K,V,$,X,Q=function(e,t){t=t||new FormData;var r=[];function o(e){return null===e?"":Y.isDate(e)?e.toISOString():Y.isArrayBuffer(e)||Y.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(i,a){if(Y.isPlainObject(i)||Y.isArray(i)){if(-1!==r.indexOf(i))throw Error("Circular reference detected in "+a);r.push(i),Y.forEach(i,(function(r,i){if(!Y.isUndefined(r)){var s,c=a?a+"."+i:i;if(r&&!a&&"object"===n(r))if(Y.endsWith(i,"{}"))r=JSON.stringify(r);else if(Y.endsWith(i,"[]")&&(s=Y.toArray(r)))return void s.forEach((function(e){!Y.isUndefined(e)&&t.append(c,o(e))}));e(r,c)}})),r.pop()}else t.append(a,o(i))}(e),t};function Z(){if(V)return K;V=1;var e=G;return K=function(t,r,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?r(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}}function ee(){if(X)return $;X=1;var e=N;return $=e.isStandardBrowserEnv()?{write:function(t,r,n,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(r)),e.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),e.isString(o)&&s.push("path="+o),e.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}var te,re,ne,oe,ie,ae,se,ce,ue,le,fe,pe,de=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},he=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},me=function(e,t){return e&&!de(t)?he(e,t):t};function ve(){if(re)return te;re=1;var e=N,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return te=function(r){var n,o,i,a={};return r?(e.forEach(r.split("\n"),(function(r){if(i=r.indexOf(":"),n=e.trim(r.substr(0,i)).toLowerCase(),o=e.trim(r.substr(i+1)),n){if(a[n]&&t.indexOf(n)>=0)return;a[n]="set-cookie"===n?(a[n]?a[n]:[]).concat([o]):a[n]?a[n]+", "+o:o}})),a):a}}function ge(){if(oe)return ne;oe=1;var e=N;return ne=e.isStandardBrowserEnv()?function(){var t,r=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var t=e;return r&&(n.setAttribute("href",t),t=n.href),n.setAttribute("href",t),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(r){var n=e.isString(r)?o(r):r;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}}function be(){if(ae)return ie;ae=1;var e=G;function t(t){e.call(this,null==t?"canceled":t,e.ERR_CANCELED),this.name="CanceledError"}return N.inherits(t,e,{__CANCEL__:!0}),ie=t}function ye(){return ce?se:(ce=1,se=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""})}function we(){if(le)return ue;le=1;var e=N,t=Z(),r=ee(),n=U,o=me,i=ve(),a=ge(),s=W,c=G,u=be(),l=ye();return ue=function(f){return new Promise((function(p,d){var h,m=f.data,v=f.headers,g=f.responseType;function b(){f.cancelToken&&f.cancelToken.unsubscribe(h),f.signal&&f.signal.removeEventListener("abort",h)}e.isFormData(m)&&e.isStandardBrowserEnv()&&delete v["Content-Type"];var y=new XMLHttpRequest;if(f.auth){var w=f.auth.username||"",x=f.auth.password?unescape(encodeURIComponent(f.auth.password)):"";v.Authorization="Basic "+btoa(w+":"+x)}var E=o(f.baseURL,f.url);function _(){if(y){var e="getAllResponseHeaders"in y?i(y.getAllResponseHeaders()):null,r={data:g&&"text"!==g&&"json"!==g?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:e,config:f,request:y};t((function(e){p(e),b()}),(function(e){d(e),b()}),r),y=null}}if(y.open(f.method.toUpperCase(),n(E,f.params,f.paramsSerializer),!0),y.timeout=f.timeout,"onloadend"in y?y.onloadend=_:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(_)},y.onabort=function(){y&&(d(new c("Request aborted",c.ECONNABORTED,f,y)),y=null)},y.onerror=function(){d(new c("Network Error",c.ERR_NETWORK,f,y,y)),y=null},y.ontimeout=function(){var e=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded",t=f.transitional||s;f.timeoutErrorMessage&&(e=f.timeoutErrorMessage),d(new c(e,t.clarifyTimeoutError?c.ETIMEDOUT:c.ECONNABORTED,f,y)),y=null},e.isStandardBrowserEnv()){var O=(f.withCredentials||a(E))&&f.xsrfCookieName?r.read(f.xsrfCookieName):void 0;O&&(v[f.xsrfHeaderName]=O)}"setRequestHeader"in y&&e.forEach(v,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete v[t]:y.setRequestHeader(t,e)})),e.isUndefined(f.withCredentials)||(y.withCredentials=!!f.withCredentials),g&&"json"!==g&&(y.responseType=f.responseType),"function"==typeof f.onDownloadProgress&&y.addEventListener("progress",f.onDownloadProgress),"function"==typeof f.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",f.onUploadProgress),(f.cancelToken||f.signal)&&(h=function(e){y&&(d(!e||e&&e.type?new u:e),y.abort(),y=null)},f.cancelToken&&f.cancelToken.subscribe(h),f.signal&&(f.signal.aborted?h():f.signal.addEventListener("abort",h))),m||(m=null);var k=l(E);k&&-1===["http","https","file"].indexOf(k)?d(new c("Unsupported protocol "+k+":",c.ERR_BAD_REQUEST,f)):y.send(m)}))},ue}var xe=N,Ee=function(e,t){q.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},_e=G,Oe=Q,ke={"Content-Type":"application/x-www-form-urlencoded"};function Re(e,t){!xe.isUndefined(e)&&xe.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Se,je={transitional:W,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Se=we()),Se),transformRequest:[function(e,t){if(Ee(t,"Accept"),Ee(t,"Content-Type"),xe.isFormData(e)||xe.isArrayBuffer(e)||xe.isBuffer(e)||xe.isStream(e)||xe.isFile(e)||xe.isBlob(e))return e;if(xe.isArrayBufferView(e))return e.buffer;if(xe.isURLSearchParams(e))return Re(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r,n=xe.isObject(e),o=t&&t["Content-Type"];if((r=xe.isFileList(e))||n&&"multipart/form-data"===o){var i=this.env&&this.env.FormData;return Oe(r?{"files[]":e}:e,i&&new i)}return n||"application/json"===o?(Re(t,"application/json"),function(e,t,r){if(xe.isString(e))try{return(t||JSON.parse)(e),xe.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||je.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||n&&xe.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw _e.from(i,_e.ERR_BAD_RESPONSE,this,null,this.response);throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pe?fe:(pe=1,fe=null)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};xe.forEach(["delete","get","head"],(function(e){je.headers[e]={}})),xe.forEach(["post","put","patch"],(function(e){je.headers[e]=xe.merge(ke)}));var Te,Ae,Le=je,Ce=N,Ne=Le;function Pe(){return Ae?Te:(Ae=1,Te=function(e){return!(!e||!e.__CANCEL__)})}var De=N,Ue=function(e,t,r){var n=this||Ne;return Ce.forEach(r,(function(r){e=r.call(n,e,t)})),e},Be=Pe(),Fe=Le,ze=be();function qe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ze}var Ie,Me,He=N,Je=function(e,t){t=t||{};var r={};function n(e,t){return He.isPlainObject(e)&&He.isPlainObject(t)?He.merge(e,t):He.isPlainObject(t)?He.merge({},t):He.isArray(t)?t.slice():t}function o(r){return He.isUndefined(t[r])?He.isUndefined(e[r])?void 0:n(void 0,e[r]):n(e[r],t[r])}function i(e){if(!He.isUndefined(t[e]))return n(void 0,t[e])}function a(r){return He.isUndefined(t[r])?He.isUndefined(e[r])?void 0:n(void 0,e[r]):n(void 0,t[r])}function s(r){return r in t?n(e[r],t[r]):r in e?n(void 0,e[r]):void 0}var c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s};return He.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,n=t(e);He.isUndefined(n)&&t!==s||(r[e]=n)})),r};function Ge(){return Me?Ie:(Me=1,Ie={version:"0.27.2"})}var We=Ge().version,Ye=G,Ke={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Ke[e]=function(r){return n(r)===e||"a"+(t<1?"n ":" ")+e}}));var Ve={};Ke.transitional=function(e,t,r){function n(e,t){return"[Axios v"+We+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,o,i){if(!1===e)throw new Ye(n(o," has been removed"+(t?" in "+t:"")),Ye.ERR_DEPRECATED);return t&&!Ve[o]&&(Ve[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}};var $e,Xe,Qe,Ze,et,tt,rt={assertOptions:function(e,t,r){if("object"!==n(e))throw new Ye("options must be an object",Ye.ERR_BAD_OPTION_VALUE);for(var o=Object.keys(e),i=o.length;i-- >0;){var a=o[i],s=t[a];if(s){var c=e[a],u=void 0===c||s(c,a,e);if(!0!==u)throw new Ye("option "+a+" must be "+u,Ye.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new Ye("Unknown option "+a,Ye.ERR_BAD_OPTION)}},validators:Ke},nt=N,ot=U,it=z,at=function(e){return qe(e),e.headers=e.headers||{},e.data=Ue.call(e,e.data,e.headers,e.transformRequest),e.headers=De.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),De.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Fe.adapter)(e).then((function(t){return qe(e),t.data=Ue.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return Be(t)||(qe(e),t&&t.response&&(t.response.data=Ue.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},st=Je,ct=me,ut=rt,lt=ut.validators;function ft(e){this.defaults=e,this.interceptors={request:new it,response:new it}}ft.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=st(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&ut.assertOptions(r,{silentJSONParsing:lt.transitional(lt.boolean),forcedJSONParsing:lt.transitional(lt.boolean),clarifyTimeoutError:lt.transitional(lt.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!o){var s=[at,void 0];for(Array.prototype.unshift.apply(s,n),s=s.concat(a),i=Promise.resolve(t);s.length;)i=i.then(s.shift(),s.shift());return i}for(var c=t;n.length;){var u=n.shift(),l=n.shift();try{c=u(c)}catch(f){l(f);break}}try{i=at(c)}catch(f){return Promise.reject(f)}for(;a.length;)i=i.then(a.shift(),a.shift());return i},ft.prototype.getUri=function(e){e=st(this.defaults,e);var t=ct(e.baseURL,e.url);return ot(t,e.params,e.paramsSerializer)},nt.forEach(["delete","get","head","options"],(function(e){ft.prototype[e]=function(t,r){return this.request(st(r||{},{method:e,url:t,data:(r||{}).data}))}})),nt.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(st(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}ft.prototype[e]=t(),ft.prototype[e+"Form"]=t(!0)}));var pt=N,dt=h,ht=ft,mt=Je;var vt=function e(t){var r=new ht(t),n=dt(ht.prototype.request,r);return pt.extend(n,ht.prototype,r),pt.extend(n,r),n.create=function(r){return e(mt(t,r))},n}(Le);vt.Axios=ht,vt.CanceledError=be(),vt.CancelToken=function(){if(Xe)return $e;Xe=1;var e=be();function t(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var r;this.promise=new Promise((function(e){r=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},t((function(t){n.reason||(n.reason=new e(t),r(n.reason))}))}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},t.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},t.source=function(){var e;return{token:new t((function(t){e=t})),cancel:e}},$e=t}(),vt.isCancel=Pe(),vt.VERSION=Ge().version,vt.toFormData=Q,vt.AxiosError=G,vt.Cancel=vt.CanceledError,vt.all=function(e){return Promise.all(e)},vt.spread=Ze?Qe:(Ze=1,Qe=function(e){return function(t){return e.apply(null,t)}}),vt.isAxiosError=function(){if(tt)return et;tt=1;var e=N;return et=function(t){return e.isObject(t)&&!0===t.isAxiosError}}(),d.exports=vt,d.exports.default=vt,p.exports=d.exports;var gt=l(p.exports).create({baseURL:"https://mock.apifox.cn/m1/735495-0-default",withCredentials:!0,timeout:1e4});gt.interceptors.request.use((function(e){return e.hideloading||o.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner",duration:"10000"}),e}),(function(e){return o.clear(),o.fail(e.message),Promise.reject(e)})),gt.interceptors.response.use((function(e){o.clear();var t=e.data;return"ok"==(null==t?void 0:t.result)?Promise.resolve(t):401===t.code?(401===t.status&&store.dispatch("user/resetToken").then((function(){location.reload()})),Promise.reject(t||"error")):void 0}),(function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="错误请求";break;case 401:e.message="未授权，请重新登录";break;case 403:e.message="拒绝访问";break;case 404:e.message="请求错误,未找到该资源";break;case 405:e.message="请求方法未允许";break;case 408:e.message="请求超时";break;case 500:e.message="服务器端出错";break;case 501:e.message="网络未实现";break;case 502:e.message="网络错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网络超时";break;case 505:e.message="http版本不支持该请求";break;default:e.message="连接错误".concat(e.response.status)}else e.message="加载失败，请检查网络设置";return Promise.reject(e)}));var bt,yt,wt,xt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{staticClass:"xhb-logo",attrs:{src:c,alt:"logo"}}),e._m(0),r("nav",{staticClass:"router-wrap"},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r(i,{attrs:{type:"primary"},on:{click:e.mockLogOut}},[e._v("MOCK LOGOUT")]),r("br"),r(i,{staticClass:"requset-test",attrs:{type:"info"},on:{click:e.getPet}},[e._v(" REQUEST TEST")]),r("br"),r(a,{staticClass:"mode-info",attrs:{inset:""}},[r(s,{attrs:{title:"环境",value:e.MODE}}),r(s,{attrs:{title:"SOME_KEY",value:e.SOME_KEY}})],1)],1)},Et=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",{staticClass:"title"},[r("span",[e._v("This is home")])])}],_t={data:function(){return{minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),currentDate:new Date(2021,0,17),MODE:"production",SOME_KEY:"xhb-demo"}},computed:{count:function(){return this.$store.getters.count}},created:function(){return r(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()},mounted:function(){o("WELOCME TO XHB")},components:(bt={},yt=o.name,wt=o,yt in bt?Object.defineProperty(bt,yt,{value:wt,enumerable:!0,configurable:!0,writable:!0}):bt[yt]=wt,bt),methods:{mockLogOut:function(){var t=this;return r(e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("user/logout");case 3:location.reload(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),oast.fail(e.t0);case 9:case"end":return e.stop()}}),r,null,[[0,6]])})))()},getPet:function(){return r(e().mark((function t(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t=void 0,t={id:1}.id,gt({method:"get",url:"/pet/".concat(void 0===t?"":t),params:{}});case 3:r=e.sent,console.log(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o.fail(e.t0);case 10:case"end":return e.stop()}var t}),t,null,[[0,7]])})))()}}},Ot={},kt=u(_t,xt,Et,!1,Rt,"e9e4ede4",null,null);function Rt(e){for(var t in Ot)this[t]=Ot[t]}t("default",function(){return kt.exports}())}}}))}();