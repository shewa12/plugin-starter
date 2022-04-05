!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=(n.n(r),n(2));n.n(o),n(3)},function(e,t){},function(e,t){},function(e,t,n){"use strict";var r=n(4),__=wp.i18n.__;(0,wp.blocks.registerBlockType)("plugin-starter/users-list",{title:__("Users List","plugin-starter"),description:__("Basic user listing table. Get data from API and show case here.","plugin-starter"),icon:"smiley",category:"widgets",attributes:{id:{type:Boolean,default:!0},fname:{type:Boolean,default:!0},lname:{type:Boolean,default:!0},email:{type:Boolean,default:!0},date:{type:Boolean,default:!0}},keywords:[],supports:{align:!0},edit:r.a,save:function(){return null}})},function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),l=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}return r("next")})}}function o(e){var t=this,n=u([]),o=l(n,2),a=o[0],c=o[1],h=u(!0),E=l(h,2),b=E[0],x=E[1],L=e.attributes.id,k=e.attributes.fname,_=e.attributes.lname,O=e.attributes.email,P=e.attributes.date,j=function(e){return e.map(function(e){if(("ID"!==e||L)&&("First Name"!==e||k)&&("Last Name"!==e||_)&&("Email"!==e||O)&&("Date"!==e||P))return wp.element.createElement("th",null,e)})},S=function(e){return Object.values(e).map(function(e){return wp.element.createElement("tr",null,L?wp.element.createElement("td",null,e.id):"",k?wp.element.createElement("td",null,e.fname):"",_?wp.element.createElement("td",null,e.lname):"",O?wp.element.createElement("td",null,e.email):"",P?wp.element.createElement("td",null,e.date):"")})};return f(r(i.a.mark(function e(){var n,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new FormData,n.set("action","aw_task_user_list"),n.set("nonce",awData.nonce),e.next=5,fetch(awData.url,{method:"POST",body:n});case 5:return r=e.sent,x(!1),e.next=9,r.json();case 9:o=e.sent,c(o);case 11:case"end":return e.stop()}},e,t)})),[]),wp.element.createElement(s,null,b?wp.element.createElement(m,{label:__("Loading users list...","plugin-starter")},wp.element.createElement(d,null)):wp.element.createElement("div",{className:"plugin-starter-users-list"},wp.element.createElement(g,{key:"setting"},wp.element.createElement("div",{id:"plugin-starter-controls"},wp.element.createElement(w,null,wp.element.createElement(y,{title:__("Column Visibility","plugin-starter"),initialOpen:!0},wp.element.createElement(v,null,wp.element.createElement(p,{label:__("Show ID","plugin-starter"),checked:L,onChange:function(){e.setAttributes({id:!L}),console.log(L)}})),wp.element.createElement(v,null,wp.element.createElement(p,{label:__("Show First Name","plugin-starter"),checked:k,onChange:function(){e.setAttributes({fname:!k})}})),wp.element.createElement(v,null,wp.element.createElement(p,{label:__("Show Last Name","plugin-starter"),checked:_,onChange:function(){e.setAttributes({lname:!_})}})),wp.element.createElement(v,null,wp.element.createElement(p,{label:__("Show Email","plugin-starter"),checked:O,onChange:function(){e.setAttributes({email:!O})}})),wp.element.createElement(v,null,wp.element.createElement(p,{label:__("Show Date","plugin-starter"),checked:P,onChange:function(){e.setAttributes({date:!P})}})))))),a&&a.data?function(e){return wp.element.createElement(s,null,wp.element.createElement("h2",null,e.data.title),wp.element.createElement("table",null,wp.element.createElement("thead",null,j(e.data.data.headers)),wp.element.createElement("tbody",null,S(e.data.data.rows))))}(a):""))}t.a=o;var a=n(5),i=n.n(a),l=function(){function e(e,t){var n=[],_n=!0,r=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(_n=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);_n=!0);}catch(e){r=!0,o=e}finally{try{!_n&&i.return&&i.return()}finally{if(r)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),__=wp.i18n.__,c=wp.element,u=c.useState,s=c.Fragment,f=c.useEffect,h=wp.components,p=h.ToggleControl,m=h.Placeholder,d=h.Spinner,w=h.Panel,y=h.PanelBody,v=h.PanelRow,g=wp.editor.InspectorControls},function(e,t,n){e.exports=n(6)},function(e,t,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(7),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";function n(e,t,n,r){var a=t&&t.prototype instanceof o?t:o,i=Object.create(a.prototype),l=new p(r||[]);return i._invoke=u(e,n,l),i}function r(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function o(){}function a(){}function i(){}function l(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function c(e){function t(n,o,a,i){var l=r(e[n],e,o);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"===typeof u&&v.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,a,i)},function(e){t("throw",e,a,i)}):Promise.resolve(u).then(function(e){c.value=e,a(c)},i)}i(l.arg)}function n(e,n){function r(){return new Promise(function(r,o){t(e,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function u(e,t,n){var o=_;return function(a,i){if(o===P)throw new Error("Generator is already running");if(o===j){if("throw"===a)throw i;return d()}for(n.method=a,n.arg=i;;){var l=n.delegate;if(l){var c=s(l,n);if(c){if(c===S)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===_)throw o=j,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=P;var u=r(e,t,n);if("normal"===u.type){if(o=n.done?j:O,u.arg===S)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=j,n.method="throw",n.arg=u.arg)}}}function s(e,t){var n=e.iterator[t.method];if(n===w){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=w,s(e,t),"throw"===t.method))return S;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return S}var o=r(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,S;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=w),t.delegate=null,S):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,S)}function f(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function h(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function p(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(f,this),this.reset(!0)}function m(e){if(e){var t=e[E];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(v.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=w,t.done=!0,t};return r.next=r}}return{next:d}}function d(){return{value:w,done:!0}}var w,y=Object.prototype,v=y.hasOwnProperty,g="function"===typeof Symbol?Symbol:{},E=g.iterator||"@@iterator",b=g.asyncIterator||"@@asyncIterator",x=g.toStringTag||"@@toStringTag",L="object"===typeof e,k=t.regeneratorRuntime;if(k)return void(L&&(e.exports=k));k=t.regeneratorRuntime=L?e.exports:{},k.wrap=n;var _="suspendedStart",O="suspendedYield",P="executing",j="completed",S={},N={};N[E]=function(){return this};var F=Object.getPrototypeOf,A=F&&F(F(m([])));A&&A!==y&&v.call(A,E)&&(N=A);var R=i.prototype=o.prototype=Object.create(N);a.prototype=R.constructor=i,i.constructor=a,i[x]=a.displayName="GeneratorFunction",k.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===a||"GeneratorFunction"===(t.displayName||t.name))},k.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,i):(e.__proto__=i,x in e||(e[x]="GeneratorFunction")),e.prototype=Object.create(R),e},k.awrap=function(e){return{__await:e}},l(c.prototype),c.prototype[b]=function(){return this},k.AsyncIterator=c,k.async=function(e,t,r,o){var a=new c(n(e,t,r,o));return k.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},l(R),R[x]="Generator",R[E]=function(){return this},R.toString=function(){return"[object Generator]"},k.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},k.values=m,p.prototype={constructor:p,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=w,this.done=!1,this.delegate=null,this.method="next",this.arg=w,this.tryEntries.forEach(h),!e)for(var t in this)"t"===t.charAt(0)&&v.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=w)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,r){return a.type="throw",a.arg=e,n.next=t,r&&(n.method="next",n.arg=w),!!r}if(this.done)throw e;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var i=v.call(o,"catchLoc"),l=v.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&v.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,S):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),S},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),h(n),S}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;h(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:m(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=w),S}}}(function(){return this}()||Function("return this")())}]);