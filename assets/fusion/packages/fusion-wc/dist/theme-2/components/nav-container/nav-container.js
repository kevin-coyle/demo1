/*! For license information please see nav-container.js.LICENSE.txt */
var t={159:(t,e)=>{var r;!function(){var i={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var s=n.apply(null,r);s&&t.push(s)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var l in r)i.call(r,l)&&r[l]&&t.push(l)}}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0===(r=function(){return n}.apply(e,[]))||(t.exports=r)}()},9163:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r,i,n,o=t[1]||"",s=t[3];if(!s)return o;if(e&&"function"==typeof btoa){var l=(r=s,i=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(n," */")),a=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[o].concat(a).concat([l]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,i){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(i)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(n[s]=!0)}for(var l=0;l<t.length;l++){var a=[].concat(t[l]);i&&n[a[0]]||(r&&(a[2]?a[2]="".concat(r," and ").concat(a[2]):a[2]=r),e.push(a))}},e}},7492:(t,e,r)=>{r.d(e,{Q:()=>v});var i=r(159),n=r.n(i),o=r(8485),s=r(7010);function l(){l=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(r){e.forEach((function(e){e.kind===r&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var r=t.prototype;["method","field"].forEach((function(i){e.forEach((function(e){var n=e.placement;if(e.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?t:r;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var r=e.descriptor;if("field"===e.kind){var i=e.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(t)}}Object.defineProperty(t,e.key,r)},decorateClass:function(t,e){var r=[],i=[],n={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,n)}),this),t.forEach((function(t){if(!d(t))return r.push(t);var e=this.decorateElement(t,n);r.push(e.element),r.push.apply(r,e.extras),i.push.apply(i,e.finishers)}),this),!e)return{elements:r,finishers:i};var o=this.decorateConstructor(r,e);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(t,e,r){var i=e[t.placement];if(!r&&-1!==i.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");i.push(t.key)},decorateElement:function(t,e){for(var r=[],i=[],n=t.decorators,o=n.length-1;o>=0;o--){var s=e[t.placement];s.splice(s.indexOf(t.key),1);var l=this.fromElementDescriptor(t),a=this.toElementFinisherExtras((0,n[o])(l)||l);t=a.element,this.addElementPlacement(t,e),a.finisher&&i.push(a.finisher);var c=a.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],e);r.push.apply(r,c)}}return{element:t,finishers:i,extras:r}},decorateConstructor:function(t,e){for(var r=[],i=e.length-1;i>=0;i--){var n=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){t=o.elements;for(var s=0;s<t.length-1;s++)for(var l=s+1;l<t.length;l++)if(t[s].key===t[l].key&&t[s].placement===t[l].placement)throw new TypeError("Duplicated element ("+t[s].key+")")}}return{elements:t,finishers:r}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var r=u(t.key),i=String(t.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:p(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var r=p(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:r}},runClassFinishers:function(t,e){for(var r=0;r<e.length;r++){var i=(0,e[r])(t);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");t=i}}return t},disallowProperty:function(t,e,r){if(void 0!==t[e])throw new TypeError(r+" can't have a ."+e+" property.")}};return t}function a(t){var e,r=u(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===t.kind?"field":"method",key:r,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),"field"===t.kind&&(i.initializer=t.value),i}function c(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function d(t){return t.decorators&&t.decorators.length}function h(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function p(t,e){var r=t[e];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+e+"' to be a function");return r}function u(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}let v=(m=o.oi,$=l(),y=function(t){$.initializeInstanceElements(t,E.elements)},g=m,b={F:class extends g{constructor(...t){super(...t),y(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"styleModifier",value:void 0},{kind:"method",key:"componentClassNames",value:function(t,e={}){return n()(t,this.styleModifier,e)}},{kind:"method",key:"slotEmpty",value:function(t){return!this.querySelector(`[slot="${t}"]`)}},{kind:"method",key:"slotNotEmpty",value:function(t){return 0!=!this.slotEmpty(t)?!this.slotEmpty(t):void 0}},{kind:"method",key:"dispatch",value:function({e:t,eventName:e,detailObj:r={},optionsObj:i={}}){const n={bubbles:!0,composed:!0,...i,detail:{...t&&{originalEvent:t},...r}},o=new CustomEvent(e,n);return this.dispatchEvent(o),o}},{kind:"method",key:"render",value:function(){return o.dy`<slot></slot>`}}]},E=$.decorateClass(function(t){for(var e=[],r=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},i=0;i<t.length;i++){var n,o=t[i];if("method"===o.kind&&(n=e.find(r)))if(h(o.descriptor)||h(n.descriptor)){if(d(o)||d(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(d(o)){if(d(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}c(o,n)}else e.push(o)}return e}(b.d.map(a)),null),$.initializeClassElements(b.F,E.elements),$.runClassFinishers(b.F,E.finishers));var m,y,g,$,b,E},9336:(t,e,r)=>{(e=r(9163)(!1)).push([t.id,"*,::slotted(*),*:before,*:after{box-sizing:border-box}:root,:host{--size-base-unit: 0.5rem}:host{position:absolute;left:0;top:100%;width:100%;height:100vh;background:var(--fusion-theme-color-background-default);overflow:auto}@media all and (min-width: 60rem){:host{position:static;width:auto;height:auto;background:none;overflow:initial}}.fusion-c-nav-container{display:flex;flex-direction:column;justify-content:space-between}@media all and (min-width: 60rem){.fusion-c-nav-container{flex-direction:row}}",""]),t.exports=e},2039:(t,e,r)=>{r.d(e,{$m:()=>a,ec:()=>c,i1:()=>d});const i=window,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class l{constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(e,t))}return t}toString(){return this.cssText}}const a=t=>new l("string"==typeof t?t:t+"",void 0,o),c=(t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),n=i.litNonce;void 0!==n&&r.setAttribute("nonce",n),r.textContent=e.cssText,t.appendChild(r)}))},d=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return a(e)})(t):t},6153:(t,e,r)=>{r.d(e,{M:()=>i});const i=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(e){customElements.define(t,e)}}})(t,e)},7973:(t,e,r)=>{r.d(e,{C:()=>n});const i=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function n(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):i(t,e)}},7158:(t,e,r)=>{var i;null===(i=window.HTMLSlotElement)||void 0===i||i.prototype.assignedElements},1484:(t,e,r)=>{r(7158)},3285:(t,e,r)=>{r.d(e,{$m:()=>n.$m,fl:()=>p});var i,n=r(2039);const o=window,s=o.trustedTypes,l=s?s.emptyScript:"",a=o.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},d=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const i=this._$Ep(r,e);void 0!==i&&(this._$Ev.set(i,r),t.push(i))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift((0,n.i1)(t))}else void 0!==t&&e.push((0,n.i1)(t));return e}static _$Ep(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return(0,n.ec)(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=h){var i;const n=this.constructor._$Ep(t,r);if(void 0!==n&&!0===r.reflect){const o=(void 0!==(null===(i=r.converter)||void 0===i?void 0:i.toAttribute)?r.converter:c).toAttribute(e,r.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var r;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:c;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let i=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:p}),(null!==(i=o.reactiveElementVersions)&&void 0!==i?i:o.reactiveElementVersions=[]).push("1.6.1")},119:(t,e,r)=>{r.d(e,{$m:()=>o.$m,dy:()=>s.dy,oi:()=>l});var i,n,o=r(3285),s=r(2922);class l extends o.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,s.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return s.Jb}}l.finalized=!0,l._$litElement$=!0,null===(i=globalThis.litElementHydrateSupport)||void 0===i||i.call(globalThis,{LitElement:l});const a=globalThis.litElementPolyfillSupport;null==a||a({LitElement:l}),(null!==(n=globalThis.litElementVersions)&&void 0!==n?n:globalThis.litElementVersions=[]).push("3.3.0")},2922:(t,e,r)=>{var i;r.d(e,{Jb:()=>k,dy:()=>_,sY:()=>L});const n=window,o=n.trustedTypes,s=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,c="?"+a,d=`<${c}>`,h=document,p=()=>h.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,f=Array.isArray,v="[ \t\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,g=/>/g,$=RegExp(`>|${v}(?:([^\\s"'>=/]+)(${v}*=${v}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,E=/"/g,w=/^(?:script|style|textarea|title)$/i,A=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),_=A(1),k=(A(2),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),C=new WeakMap,P=h.createTreeWalker(h,129,null,!1),x=(t,e)=>{const r=t.length-1,i=[];let n,o=2===e?"<svg>":"",c=m;for(let e=0;e<r;e++){const r=t[e];let s,h,p=-1,u=0;for(;u<r.length&&(c.lastIndex=u,h=c.exec(r),null!==h);)u=c.lastIndex,c===m?"!--"===h[1]?c=y:void 0!==h[1]?c=g:void 0!==h[2]?(w.test(h[2])&&(n=RegExp("</"+h[2],"g")),c=$):void 0!==h[3]&&(c=$):c===$?">"===h[0]?(c=null!=n?n:m,p=-1):void 0===h[1]?p=-2:(p=c.lastIndex-h[2].length,s=h[1],c=void 0===h[3]?$:'"'===h[3]?E:b):c===E||c===b?c=$:c===y||c===g?c=m:(c=$,n=void 0);const f=c===$&&t[e+1].startsWith("/>")?" ":"";o+=c===m?r+d:p>=0?(i.push(s),r.slice(0,p)+l+r.slice(p)+a+f):r+a+(-2===p?(i.push(void 0),e):f)}const h=o+(t[r]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s?s.createHTML(h):h,i]};class T{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,s=0;const d=t.length-1,h=this.parts,[u,f]=x(t,e);if(this.el=T.createElement(u,r),P.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=P.nextNode())&&h.length<d;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(l)||e.startsWith(a)){const r=f[s++];if(t.push(e),void 0!==r){const t=i.getAttribute(r.toLowerCase()+l).split(a),e=/([.?@])?(.*)/.exec(r);h.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?z:"?"===e[1]?N:"@"===e[1]?M:j})}else h.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(w.test(i.tagName)){const t=i.textContent.split(a),e=t.length-1;if(e>0){i.textContent=o?o.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],p()),P.nextNode(),h.push({type:2,index:++n});i.append(t[e],p())}}}else if(8===i.nodeType)if(i.data===c)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(a,t+1));)h.push({type:7,index:n}),t+=a.length-1}n++}}static createElement(t,e){const r=h.createElement("template");return r.innerHTML=t,r}}function O(t,e,r=t,i){var n,o,s,l;if(e===k)return e;let a=void 0!==i?null===(n=r._$Co)||void 0===n?void 0:n[i]:r._$Cl;const c=u(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,r,i)),void 0!==i?(null!==(s=(l=r)._$Co)&&void 0!==s?s:l._$Co=[])[i]=a:r._$Cl=a),void 0!==a&&(e=O(t,a._$AS(t,e.values),a,i)),e}class D{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:r},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(r,!0);P.currentNode=n;let o=P.nextNode(),s=0,l=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new U(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new R(o,this,t)),this.u.push(e),a=i[++l]}s!==(null==a?void 0:a.index)&&(o=P.nextNode(),s++)}return n}p(t){let e=0;for(const r of this.u)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class U{constructor(t,e,r,i){var n;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cm=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),u(t)?t===S||null==t||""===t?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==k&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>f(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==S&&u(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=T.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(r);else{const t=new D(n,this),e=t.v(this.options);t.p(r),this.T(e),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new T(t)),e}k(t){f(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const n of t)i===e.length?e.push(r=new U(this.S(p()),this.S(p()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,r,i,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){const n=this.strings;let o=!1;if(void 0===n)t=O(this,t,e,0),o=!u(t)||t!==this._$AH&&t!==k,o&&(this._$AH=t);else{const i=t;let s,l;for(t=n[0],s=0;s<n.length-1;s++)l=O(this,i[r+s],e,s),l===k&&(l=this._$AH[s]),o||(o=!u(l)||l!==this._$AH[s]),l===S?t=S:t!==S&&(t+=(null!=l?l:"")+n[s+1]),this._$AH[s]=l}o&&!i&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class z extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}const H=o?o.emptyScript:"";class N extends j{constructor(){super(...arguments),this.type=4}j(t){t&&t!==S?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class M extends j{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=O(this,t,e,0))&&void 0!==r?r:S)===k)return;const i=this._$AH,n=t===S&&i!==S||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==S&&(i===S||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class R{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const I=n.litHtmlPolyfillSupport;null==I||I(T,U),(null!==(i=n.litHtmlVersions)&&void 0!==i?i:n.litHtmlVersions=[]).push("2.7.0");const L=(t,e,r)=>{var i,n;const o=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:e;let s=o._$litPart$;if(void 0===s){const t=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;o._$litPart$=s=new U(e.insertBefore(p(),t),t,void 0,null!=r?r:{})}return s._$AI(t),s}},7010:(t,e,r)=>{r.d(e,{Cb:()=>n.C,Mo:()=>i.M});var i=r(6153),n=r(7973);r(7158),r(1484)},8485:(t,e,r)=>{r.d(e,{$m:()=>i.$m,dy:()=>i.dy,oi:()=>i.oi}),r(3285),r(2922);var i=r(119)}},e={};function r(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var i={};(()=>{r.d(i,{i:()=>v});var t=r(8485),e=r(7010),n=r(7492),o=r(9336),s=r.n(o);function l(){l=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(r){e.forEach((function(e){e.kind===r&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var r=t.prototype;["method","field"].forEach((function(i){e.forEach((function(e){var n=e.placement;if(e.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?t:r;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var r=e.descriptor;if("field"===e.kind){var i=e.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(t)}}Object.defineProperty(t,e.key,r)},decorateClass:function(t,e){var r=[],i=[],n={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,n)}),this),t.forEach((function(t){if(!d(t))return r.push(t);var e=this.decorateElement(t,n);r.push(e.element),r.push.apply(r,e.extras),i.push.apply(i,e.finishers)}),this),!e)return{elements:r,finishers:i};var o=this.decorateConstructor(r,e);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(t,e,r){var i=e[t.placement];if(!r&&-1!==i.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");i.push(t.key)},decorateElement:function(t,e){for(var r=[],i=[],n=t.decorators,o=n.length-1;o>=0;o--){var s=e[t.placement];s.splice(s.indexOf(t.key),1);var l=this.fromElementDescriptor(t),a=this.toElementFinisherExtras((0,n[o])(l)||l);t=a.element,this.addElementPlacement(t,e),a.finisher&&i.push(a.finisher);var c=a.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],e);r.push.apply(r,c)}}return{element:t,finishers:i,extras:r}},decorateConstructor:function(t,e){for(var r=[],i=e.length-1;i>=0;i--){var n=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){t=o.elements;for(var s=0;s<t.length-1;s++)for(var l=s+1;l<t.length;l++)if(t[s].key===t[l].key&&t[s].placement===t[l].placement)throw new TypeError("Duplicated element ("+t[s].key+")")}}return{elements:t,finishers:r}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var r=u(t.key),i=String(t.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:p(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var r=p(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:r}},runClassFinishers:function(t,e){for(var r=0;r<e.length;r++){var i=(0,e[r])(t);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");t=i}}return t},disallowProperty:function(t,e,r){if(void 0!==t[e])throw new TypeError(r+" can't have a ."+e+" property.")}};return t}function a(t){var e,r=u(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===t.kind?"field":"method",key:r,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(i.decorators=t.decorators),"field"===t.kind&&(i.initializer=t.value),i}function c(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function d(t){return t.decorators&&t.decorators.length}function h(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function p(t,e){var r=t[e];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+e+"' to be a function");return r}function u(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}let v=(m=[(0,e.Mo)("fusion-nav-container")],y=n.Q,b=l(),g=function(t){b.initializeInstanceElements(t,w.elements)},$=y,E={F:class extends ${constructor(...t){super(...t),g(this)}},d:[{kind:"get",static:!0,key:"styles",value:function(){return(0,t.$m)(s())}},{kind:"method",key:"render",value:function(){const e=this.componentClassNames("fusion-c-nav-container",{});return t.dy`
      <div class="${e}">
        <slot></slot>
      </div>
    `}}]},w=b.decorateClass(function(t){for(var e=[],r=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},i=0;i<t.length;i++){var n,o=t[i];if("method"===o.kind&&(n=e.find(r)))if(h(o.descriptor)||h(n.descriptor)){if(d(o)||d(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(d(o)){if(d(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}c(o,n)}else e.push(o)}return e}(E.d.map(a)),m),b.initializeClassElements(E.F,w.elements),b.runClassFinishers(E.F,w.finishers));var m,y,g,$,b,E,w})();var n=i.i;export{n as FusionNavContainer};