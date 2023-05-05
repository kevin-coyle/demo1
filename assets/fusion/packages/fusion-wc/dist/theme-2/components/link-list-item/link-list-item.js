/*! For license information please see link-list-item.js.LICENSE.txt */
var t={159:(t,e)=>{var i;!function(){var r={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var o=typeof i;if("string"===o||"number"===o)t.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&t.push(s)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){t.push(i.toString());continue}for(var l in i)r.call(i,l)&&i[l]&&t.push(l)}}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0===(i=function(){return n}.apply(e,[]))||(t.exports=i)}()},9163:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i,r,n,o=t[1]||"",s=t[3];if(!s)return o;if(e&&"function"==typeof btoa){var l=(i=s,r=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(n," */")),a=s.sources.map((function(t){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(t," */")}));return[o].concat(a).concat([l]).join("\n")}return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,r){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(n[s]=!0)}for(var l=0;l<t.length;l++){var a=[].concat(t[l]);r&&n[a[0]]||(i&&(a[2]?a[2]="".concat(i," and ").concat(a[2]):a[2]=i),e.push(a))}},e}},7492:(t,e,i)=>{i.d(e,{Q:()=>v});var r=i(159),n=i.n(r),o=i(8485),s=i(7010);function l(){l=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(i){e.forEach((function(e){e.kind===i&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var i=t.prototype;["method","field"].forEach((function(r){e.forEach((function(e){var n=e.placement;if(e.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?t:i;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var i=e.descriptor;if("field"===e.kind){var r=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(t)}}Object.defineProperty(t,e.key,i)},decorateClass:function(t,e){var i=[],r=[],n={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,n)}),this),t.forEach((function(t){if(!d(t))return i.push(t);var e=this.decorateElement(t,n);i.push(e.element),i.push.apply(i,e.extras),r.push.apply(r,e.finishers)}),this),!e)return{elements:i,finishers:r};var o=this.decorateConstructor(i,e);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(t,e,i){var r=e[t.placement];if(!i&&-1!==r.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");r.push(t.key)},decorateElement:function(t,e){for(var i=[],r=[],n=t.decorators,o=n.length-1;o>=0;o--){var s=e[t.placement];s.splice(s.indexOf(t.key),1);var l=this.fromElementDescriptor(t),a=this.toElementFinisherExtras((0,n[o])(l)||l);t=a.element,this.addElementPlacement(t,e),a.finisher&&r.push(a.finisher);var c=a.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],e);i.push.apply(i,c)}}return{element:t,finishers:r,extras:i}},decorateConstructor:function(t,e){for(var i=[],r=e.length-1;r>=0;r--){var n=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){t=o.elements;for(var s=0;s<t.length-1;s++)for(var l=s+1;l<t.length;l++)if(t[s].key===t[l].key&&t[s].placement===t[l].placement)throw new TypeError("Duplicated element ("+t[s].key+")")}}return{elements:t,finishers:i}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var i=p(t.key),r=String(t.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:u(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var i=u(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:i}},runClassFinishers:function(t,e){for(var i=0;i<e.length;i++){var r=(0,e[i])(t);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");t=r}}return t},disallowProperty:function(t,e,i){if(void 0!==t[e])throw new TypeError(i+" can't have a ."+e+" property.")}};return t}function a(t){var e,i=p(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===t.kind?"field":"method",key:i,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(r.decorators=t.decorators),"field"===t.kind&&(r.initializer=t.value),r}function c(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function d(t){return t.decorators&&t.decorators.length}function h(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function u(t,e){var i=t[e];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+e+"' to be a function");return i}function p(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}let v=(m=o.oi,$=l(),y=function(t){$.initializeInstanceElements(t,_.elements)},g=m,b={F:class extends g{constructor(...t){super(...t),y(this)}},d:[{kind:"field",decorators:[(0,s.Cb)()],key:"styleModifier",value:void 0},{kind:"method",key:"componentClassNames",value:function(t,e={}){return n()(t,this.styleModifier,e)}},{kind:"method",key:"slotEmpty",value:function(t){return!this.querySelector(`[slot="${t}"]`)}},{kind:"method",key:"slotNotEmpty",value:function(t){return 0!=!this.slotEmpty(t)?!this.slotEmpty(t):void 0}},{kind:"method",key:"dispatch",value:function({e:t,eventName:e,detailObj:i={},optionsObj:r={}}){const n={bubbles:!0,composed:!0,...r,detail:{...t&&{originalEvent:t},...i}},o=new CustomEvent(e,n);return this.dispatchEvent(o),o}},{kind:"method",key:"render",value:function(){return o.dy`<slot></slot>`}}]},_=$.decorateClass(function(t){for(var e=[],i=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},r=0;r<t.length;r++){var n,o=t[r];if("method"===o.kind&&(n=e.find(i)))if(h(o.descriptor)||h(n.descriptor)){if(d(o)||d(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(d(o)){if(d(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}c(o,n)}else e.push(o)}return e}(b.d.map(a)),null),$.initializeClassElements(b.F,_.elements),$.runClassFinishers(b.F,_.finishers));var m,y,g,$,b,_},1801:(t,e,i)=>{(e=i(9163)(!1)).push([t.id,"*,::slotted(*),*:before,*:after{box-sizing:border-box}:root,:host{--size-base-unit: 0.5rem}.fusion-c-link-list__item{display:flex;align-items:center}.fusion-c-link-list__link{color:inherit;text-decoration:none}.fusion-c-link-list__link:hover,.fusion-c-link-list__link:focus{text-decoration:underline}.fusion-c-link-list__item.fusion-is-active .fusion-c-link-list__link{color:var(--fusion-link-list-item-active-text-color);font-weight:var(--fusion-font-weight-bold)}.fusion-c-link-list__item-after{margin-left:calc(var(--size-base-unit) * 1)}",""]),t.exports=e},2039:(t,e,i)=>{i.d(e,{$m:()=>a,ec:()=>c,i1:()=>d});const r=window,n=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class l{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const a=t=>new l("string"==typeof t?t:t+"",void 0,o),c=(t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),n=r.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=e.cssText,t.appendChild(i)}))},d=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return a(e)})(t):t},6153:(t,e,i)=>{i.d(e,{M:()=>r});const r=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){customElements.define(t,e)}}})(t,e)},7973:(t,e,i)=>{i.d(e,{C:()=>n});const r=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function n(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):r(t,e)}},7158:(t,e,i)=>{var r;null===(r=window.HTMLSlotElement)||void 0===r||r.prototype.assignedElements},1484:(t,e,i)=>{i(7158)},3285:(t,e,i)=>{i.d(e,{$m:()=>n.$m,fl:()=>u});var r,n=i(2039);const o=window,s=o.trustedTypes,l=s?s.emptyScript:"",a=o.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift((0,n.i1)(t))}else void 0!==t&&e.push((0,n.i1)(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return(0,n.ec)(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=h){var r;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:c).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,n=r._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=r.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:c;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:u}),(null!==(r=o.reactiveElementVersions)&&void 0!==r?r:o.reactiveElementVersions=[]).push("1.6.1")},119:(t,e,i)=>{i.d(e,{$m:()=>o.$m,dy:()=>s.dy,oi:()=>l});var r,n,o=i(3285),s=i(2922);class l extends o.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,s.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return s.Jb}}l.finalized=!0,l._$litElement$=!0,null===(r=globalThis.litElementHydrateSupport)||void 0===r||r.call(globalThis,{LitElement:l});const a=globalThis.litElementPolyfillSupport;null==a||a({LitElement:l}),(null!==(n=globalThis.litElementVersions)&&void 0!==n?n:globalThis.litElementVersions=[]).push("3.3.0")},2085:(t,e,i)=>{i.d(e,{o:()=>n});var r=i(2922);const n=t=>null!=t?t:r.Ld},2922:(t,e,i)=>{var r;i.d(e,{Jb:()=>k,Ld:()=>S,dy:()=>w,sY:()=>L});const n=window,o=n.trustedTypes,s=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",a=`lit$${(Math.random()+"").slice(9)}$`,c="?"+a,d=`<${c}>`,h=document,u=()=>h.createComment(""),p=t=>null===t||"object"!=typeof t&&"function"!=typeof t,f=Array.isArray,v="[ \t\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,g=/>/g,$=RegExp(`>|${v}(?:([^\\s"'>=/]+)(${v}*=${v}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),b=/'/g,_=/"/g,E=/^(?:script|style|textarea|title)$/i,A=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),w=A(1),k=(A(2),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),C=new WeakMap,P=h.createTreeWalker(h,129,null,!1),x=(t,e)=>{const i=t.length-1,r=[];let n,o=2===e?"<svg>":"",c=m;for(let e=0;e<i;e++){const i=t[e];let s,h,u=-1,p=0;for(;p<i.length&&(c.lastIndex=p,h=c.exec(i),null!==h);)p=c.lastIndex,c===m?"!--"===h[1]?c=y:void 0!==h[1]?c=g:void 0!==h[2]?(E.test(h[2])&&(n=RegExp("</"+h[2],"g")),c=$):void 0!==h[3]&&(c=$):c===$?">"===h[0]?(c=null!=n?n:m,u=-1):void 0===h[1]?u=-2:(u=c.lastIndex-h[2].length,s=h[1],c=void 0===h[3]?$:'"'===h[3]?_:b):c===_||c===b?c=$:c===y||c===g?c=m:(c=$,n=void 0);const f=c===$&&t[e+1].startsWith("/>")?" ":"";o+=c===m?i+d:u>=0?(r.push(s),i.slice(0,u)+l+i.slice(u)+a+f):i+a+(-2===u?(r.push(void 0),e):f)}const h=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==s?s.createHTML(h):h,r]};class T{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,s=0;const d=t.length-1,h=this.parts,[p,f]=x(t,e);if(this.el=T.createElement(p,i),P.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=P.nextNode())&&h.length<d;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith(l)||e.startsWith(a)){const i=f[s++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+l).split(a),e=/([.?@])?(.*)/.exec(i);h.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?j:"?"===e[1]?N:"@"===e[1]?M:z})}else h.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(E.test(r.tagName)){const t=r.textContent.split(a),e=t.length-1;if(e>0){r.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],u()),P.nextNode(),h.push({type:2,index:++n});r.append(t[e],u())}}}else if(8===r.nodeType)if(r.data===c)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(a,t+1));)h.push({type:7,index:n}),t+=a.length-1}n++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function O(t,e,i=t,r){var n,o,s,l;if(e===k)return e;let a=void 0!==r?null===(n=i._$Co)||void 0===n?void 0:n[r]:i._$Cl;const c=p(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,r)),void 0!==r?(null!==(s=(l=i)._$Co)&&void 0!==s?s:l._$Co=[])[r]=a:i._$Cl=a),void 0!==a&&(e=O(t,a._$AS(t,e.values),a,r)),e}class D{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(i,!0);P.currentNode=n;let o=P.nextNode(),s=0,l=0,a=r[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new U(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new R(o,this,t)),this.u.push(e),a=r[++l]}s!==(null==a?void 0:a.index)&&(o=P.nextNode(),s++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,r){var n;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cm=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),p(t)?t===S||null==t||""===t?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==k&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>f(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==S&&p(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=T.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new D(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=C.get(t.strings);return void 0===e&&C.set(t.strings,e=new T(t)),e}k(t){f(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new U(this.S(u()),this.S(u()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class z{constructor(t,e,i,r,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const n=this.strings;let o=!1;if(void 0===n)t=O(this,t,e,0),o=!p(t)||t!==this._$AH&&t!==k,o&&(this._$AH=t);else{const r=t;let s,l;for(t=n[0],s=0;s<n.length-1;s++)l=O(this,r[i+s],e,s),l===k&&(l=this._$AH[s]),o||(o=!p(l)||l!==this._$AH[s]),l===S?t=S:t!==S&&(t+=(null!=l?l:"")+n[s+1]),this._$AH[s]=l}o&&!r&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class j extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}const H=o?o.emptyScript:"";class N extends z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==S?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class M extends z{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=O(this,t,e,0))&&void 0!==i?i:S)===k)return;const r=this._$AH,n=t===S&&r!==S||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==S&&(r===S||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class R{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const I=n.litHtmlPolyfillSupport;null==I||I(T,U),(null!==(r=n.litHtmlVersions)&&void 0!==r?r:n.litHtmlVersions=[]).push("2.7.0");const L=(t,e,i)=>{var r,n;const o=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let s=o._$litPart$;if(void 0===s){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=s=new U(e.insertBefore(u(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s}},7010:(t,e,i)=>{i.d(e,{Cb:()=>n.C,Mo:()=>r.M});var r=i(6153),n=i(7973);i(7158),i(1484)},8485:(t,e,i)=>{i.d(e,{$m:()=>r.$m,dy:()=>r.dy,oi:()=>r.oi}),i(3285),i(2922);var r=i(119)}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r={};(()=>{i.d(r,{v:()=>m});var t=i(8485),e=i(2085),n=i(7010),o=i(7492),s=i(1801),l=i.n(s);function a(){a=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach((function(i){e.forEach((function(e){e.kind===i&&"own"===e.placement&&this.defineClassElement(t,e)}),this)}),this)},initializeClassElements:function(t,e){var i=t.prototype;["method","field"].forEach((function(r){e.forEach((function(e){var n=e.placement;if(e.kind===r&&("static"===n||"prototype"===n)){var o="static"===n?t:i;this.defineClassElement(o,e)}}),this)}),this)},defineClassElement:function(t,e){var i=e.descriptor;if("field"===e.kind){var r=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(t)}}Object.defineProperty(t,e.key,i)},decorateClass:function(t,e){var i=[],r=[],n={static:[],prototype:[],own:[]};if(t.forEach((function(t){this.addElementPlacement(t,n)}),this),t.forEach((function(t){if(!h(t))return i.push(t);var e=this.decorateElement(t,n);i.push(e.element),i.push.apply(i,e.extras),r.push.apply(r,e.finishers)}),this),!e)return{elements:i,finishers:r};var o=this.decorateConstructor(i,e);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(t,e,i){var r=e[t.placement];if(!i&&-1!==r.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");r.push(t.key)},decorateElement:function(t,e){for(var i=[],r=[],n=t.decorators,o=n.length-1;o>=0;o--){var s=e[t.placement];s.splice(s.indexOf(t.key),1);var l=this.fromElementDescriptor(t),a=this.toElementFinisherExtras((0,n[o])(l)||l);t=a.element,this.addElementPlacement(t,e),a.finisher&&r.push(a.finisher);var c=a.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],e);i.push.apply(i,c)}}return{element:t,finishers:r,extras:i}},decorateConstructor:function(t,e){for(var i=[],r=e.length-1;r>=0;r--){var n=this.fromClassDescriptor(t),o=this.toClassDescriptor((0,e[r])(n)||n);if(void 0!==o.finisher&&i.push(o.finisher),void 0!==o.elements){t=o.elements;for(var s=0;s<t.length-1;s++)for(var l=s+1;l<t.length;l++)if(t[s].key===t[l].key&&t[s].placement===t[l].placement)throw new TypeError("Duplicated element ("+t[s].key+")")}}return{elements:t,finishers:i}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){var e;if(void 0!==t)return(e=t,function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?v(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e}),this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var i=f(t.key),r=String(t.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o},toElementFinisherExtras:function(t){return{element:this.toElementDescriptor(t),finisher:p(t,"finisher"),extras:this.toElementDescriptors(t.extras)}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var i=p(t,"finisher");return{elements:this.toElementDescriptors(t.elements),finisher:i}},runClassFinishers:function(t,e){for(var i=0;i<e.length;i++){var r=(0,e[i])(t);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");t=r}}return t},disallowProperty:function(t,e,i){if(void 0!==t[e])throw new TypeError(i+" can't have a ."+e+" property.")}};return t}function c(t){var e,i=f(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===t.kind?"field":"method",key:i,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(r.decorators=t.decorators),"field"===t.kind&&(r.initializer=t.value),r}function d(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function h(t){return t.decorators&&t.decorators.length}function u(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function p(t,e){var i=t[e];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+e+"' to be a function");return i}function f(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}let m=(y=[(0,n.Mo)("fusion-link-list-item")],g=o.Q,_=a(),$=function(t){_.initializeInstanceElements(t,A.elements)},b=g,E={F:class extends b{constructor(...t){super(...t),$(this)}},d:[{kind:"get",static:!0,key:"styles",value:function(){return(0,t.$m)(l())}},{kind:"field",decorators:[(0,n.Cb)()],key:"text",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"isActive",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"href",value:void 0},{kind:"method",key:"render",value:function(){const i=this.componentClassNames("fusion-c-link-list__item",{"fusion-is-active":!0===this.isActive});return t.dy`
      <li class="${i}">
        <a class="fusion-c-link-list__link" href="${(0,e.o)(this.href)}"> ${this.text} </a>
        ${this.slotNotEmpty("itemAfter")&&t.dy`<div class="fusion-c-link-list__item-after"><slot name="itemAfter"></slot></div>`}
      </li>
    `}}]},A=_.decorateClass(function(t){for(var e=[],i=function(t){return"method"===t.kind&&t.key===o.key&&t.placement===o.placement},r=0;r<t.length;r++){var n,o=t[r];if("method"===o.kind&&(n=e.find(i)))if(u(o.descriptor)||u(n.descriptor)){if(h(o)||h(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(h(o)){if(h(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}d(o,n)}else e.push(o)}return e}(E.d.map(c)),y),_.initializeClassElements(E.F,A.elements),_.runClassFinishers(E.F,A.finishers));var y,g,$,b,_,E,A})();var n=r.v;export{n as FusionLinkListItem};