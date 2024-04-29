import*as e from"@dropins/tools/event-bus.js";import*as t from"@dropins/tools/preact-compat.js";import*as r from"@dropins/tools/preact-hooks.js";import*as n from"@dropins/tools/preact-jsx-runtime.js";import*as o from"@dropins/tools/preact.js";export const id=375;export const ids=[375];export const modules={914:e=>{var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function o(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function i(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function a(e,t){try{return t in e}catch(e){return!1}}function l(e,r,s){(s=s||{}).arrayMerge=s.arrayMerge||o,s.isMergeableObject=s.isMergeableObject||t,s.cloneUnlessOtherwiseSpecified=n;var u=Array.isArray(r);return u===Array.isArray(e)?u?s.arrayMerge(e,r,s):function(e,t,r){var o={};return r.isMergeableObject(e)&&i(e).forEach((function(t){o[t]=n(e[t],r)})),i(t).forEach((function(i){(function(e,t){return a(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,i)||(a(e,i)&&r.isMergeableObject(t[i])?o[i]=function(e,t){if(!t.customMerge)return l;var r=t.customMerge(e);return"function"==typeof r?r:l}(i,r)(e[i],t[i],r):o[i]=n(t[i],r))})),o}(e,r,s):n(r,s)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return l(e,r,t)}),{})};var s=l;e.exports=s},4786:function(e){e.exports=function(e,t,r,n,o){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)e=e?e[t[n]]:o;return e===o?r:e}},8422:(e,t,r)=>{r.d(t,{RK:()=>m,Dk:()=>O,O:()=>E,EY:()=>S,FV:()=>T});var n,o=r(7706),i=r(2885),a=r(4786),l=r.n(a),s={};function u(e,t,r){if(3===e.nodeType){var n="textContent"in e?e.textContent:e.nodeValue||"";if(!1!==u.options.trim){var o=0===t||t===r.length-1;if((!(n=n.match(/^[\s\n]+$/g)&&"all"!==u.options.trim?" ":n.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===u.options.trim||o?"":" "))||" "===n)&&r.length>1&&o)return null}return n}if(1!==e.nodeType)return null;var i=String(e.nodeName).toLowerCase();if("script"===i&&!u.options.allowScripts)return null;var a,l,s=u.h(i,function(e){var t=e&&e.length;if(!t)return null;for(var r={},n=0;n<t;n++){var o=e[n],i=o.name,a=o.value;"on"===i.substring(0,2)&&u.options.allowEvents&&(a=new Function(a)),r[i]=a}return r}(e.attributes),(l=(a=e.childNodes)&&Array.prototype.map.call(a,u).filter(p))&&l.length?l:null);return u.visitor&&u.visitor(s),s}var c,p=function(e){return e},f={};function d(e){var t=(e.type||"").toLowerCase(),r=d.map;r&&r.hasOwnProperty(t)?(e.type=r[t],e.props=Object.keys(e.props||{}).reduce((function(t,r){var n;return t[(n=r,n.replace(/-(.)/g,(function(e,t){return t.toUpperCase()})))]=e.props[r],t}),{})):e.type=t.replace(/[^a-z0-9-]/i,"")}const v=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.setReviver=function(e){c=e},t.prototype.shouldComponentUpdate=function(e){var t=this.props;return e.wrap!==t.wrap||e.type!==t.type||e.markup!==t.markup},t.prototype.setComponents=function(e){if(this.map={},e)for(var t in e)if(e.hasOwnProperty(t)){var r=t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[r]=e[t]}},t.prototype.render=function(e){var t=e.wrap;void 0===t&&(t=!0);var r,i=e.type,a=e.markup,l=e.components,p=e.reviver,v=e.onError,m=e["allow-scripts"],y=e["allow-events"],b=e.trim,h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),g=p||this.reviver||this.constructor.prototype.reviver||c||o.h;this.setComponents(l);var O={allowScripts:m,allowEvents:y,trim:b};try{r=function(e,t,r,o,i){var a=function(e,t){var r,o,i,a,l="html"===t?"text/html":"application/xml";"html"===t?(a="body",i="<!DOCTYPE html>\n<html><body>"+e+"</body></html>"):(a="xml",i='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+e+"</xml>");try{r=(new DOMParser).parseFromString(i,l)}catch(e){o=e}if(r||"html"!==t||((r=n||(n=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var e=document.createElement("iframe");return e.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",e.setAttribute("sandbox","allow-forms"),document.body.appendChild(e),e.contentWindow.document}())).open(),r.write(i),r.close()),r){var s=r.getElementsByTagName(a)[0],u=s.firstChild;return e&&!u&&(s.error="Document parse failed."),u&&"parsererror"===String(u.nodeName).toLowerCase()&&(u.removeChild(u.firstChild),u.removeChild(u.lastChild),s.error=u.textContent||u.nodeValue||o||"Unknown error",s.removeChild(u)),s}}(e,t);if(a&&a.error)throw new Error(a.error);var l=a&&a.body||a;d.map=o||f;var c=l&&function(e,t,r,n){return u.visitor=t,u.h=r,u.options=n||s,u(e)}(l,d,r,i);return d.map=null,c&&c.props&&c.props.children||null}(a,i,g,this.map,O)}catch(e){v?v({error:e}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+e)}if(!1===t)return r||null;var j=h.hasOwnProperty("className")?"className":"class",w=h[j];return w?w.splice?w.splice(0,0,"markup"):"string"==typeof w?h[j]+=" markup":"object"==typeof w&&(w.markup=!0):h[j]="markup",g("div",h,r||null)},t}(o.Component);var m=(0,o.createContext)({intl:{}});function y(e){return null!=e}function b(e,t){for(var r in t)e[r]=t[r];return e}function h(e,t){var r=b({},e);for(var n in t)t.hasOwnProperty(n)&&(e[n]&&t[n]&&"object"==typeof e[n]&&"object"==typeof t[n]?r[n]=h(e[n],t[n]):r[n]=e[n]||t[n]);return r}var g=/[?&#]intl=show/;function O(e){var t=e.scope,r=e.mark,n=e.definition,a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["scope","mark","definition"]),l=b({},(0,i.useContext)(m).intl||{});return t&&(l.scope=t),n&&(l.dictionary=h(l.dictionary||{},n)),(r||"undefined"!=typeof location&&String(location).match(g))&&(l.mark=!0),(0,o.h)(m.Provider,{value:{intl:l}},a.children)}function j(e,t){if(arguments.length<2)return t=e,function(e){return j(e,t)};function r(r){return(0,o.h)(O,t||{},(0,o.h)(e,r))}return r.getWrappedComponent=e&&e.getWrappedComponent||function(){return e},r}var w={};function x(e,t,r,n){return e&&e.replace(/\{\{([\w.-]+)\}\}/g,_.bind(null,t||w,r,n))}function _(e,t,r,n,o){for(var i=o.split("."),a=e,l=0;l<i.length;l++){if(null==(a=a[i[l]]))return"";if(a&&a.type===S)return P(a.props.id,t,r,a.props.fields,a.props.plural,a.props.fallback)}return"string"==typeof a&&a.match(/\{\{/)&&(a=x(a,e)),a}function P(e,t,r,n,o,i){t&&(e=t+"."+e);var a=r&&l()(r,e);return(o||0===o)&&a&&"object"==typeof a&&(a=a.splice?a[o]||a[0]:0===o&&y(a.none||a.zero)?a.none||a.zero:1===o&&y(a.one||a.singular)?a.one||a.singular:a.some||a.many||a.plural||a.other||a),a&&x(a,n,t,r)||i||null}function C(e){var t=e.value,r=e.id,n=(0,i.useContext)(m).intl;if(n&&n.mark){var a="dictionary"+(n&&n.scope?"."+n.scope:"")+"."+r;return(0,o.h)("mark",{style:{background:t?l()(n,a)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:r},t)}return t}function S(e){var t=e.id,r=e.children,n=e.plural,a=e.fields,l=(0,i.useContext)(m).intl,s=P(t,l&&l.scope,l&&l.dictionary,a,n,r);return(0,o.h)(C,{id:t,value:s})}function k(e,t,r){var n={};for(var o in t=t||{},e=function(e){if("string"==typeof(e=e||{})&&(e=e.split(",")),"join"in e){for(var t={},r=0;r<e.length;r++){var n=e[r].trim();n&&(t[n.split(".").pop()]=n)}return t}return e}(e),e)if(e.hasOwnProperty(o)&&e[o]){var i=e[o];r||"string"!=typeof i?i.type===S&&(i=b({fallback:i.props.children},i.props),n[o]=P(i.id,t.scope,t.dictionary,i.fields,i.plural,i.fallback)):n[o]=P(i,t.scope,t.dictionary)}return n}function E(e){var t=e.children,r=(0,i.useContext)(m).intl;return t&&t.length?t.map((function(e){return(0,o.cloneElement)(e,k(e.props,r,!0))})):t&&(0,o.cloneElement)(t,k(t.props,r,!0))}function D(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}function A(e){var t=e.html,r=e.id,n=D(e,["html","id"]);return(0,o.h)(C,{id:r,value:t?"string"==typeof t?(0,o.h)(v,Object.assign({},{type:"html",trim:!1},n,{markup:t})):(0,o.h)("span",null,t):t})}function T(e){var t=(0,i.useContext)(m).intl;return k("function"==typeof e?e({intl:t}):e,t)}j.intl=j,j.IntlContext=m,j.IntlProvider=O,j.Text=S,j.MarkupText=function(e){var t=e.id,r=e.fields,n=e.plural,i=e.children,a=D(e,["id","fields","plural","children"]);return(0,o.h)(E,null,(0,o.h)(A,Object.assign({},{html:(0,o.h)(S,{id:t,fields:r,plural:n,children:i}),id:t},a)))},j.Localizer=E,j.withText=function(e){return function(t){function r(r,n){var a=(0,i.useContext)(m).intl,l=k("function"==typeof e?e(r,{intl:a}):e,a);return(0,o.h)(t,b(b({},r),l))}return r.getWrappedComponent=t&&t.getWrappedComponent||function(){return t},r}},j.useText=T,j.translate=P},5444:(e,t,r)=>{r.d(t,{L:()=>n});var n=e=>e.reduce(((e,t)=>{if(!t)return e;if("string"==typeof t&&(e+=" ".concat(t)),Array.isArray(t)){var[r,n]=t;r&&n&&(e+=" ".concat(r))}return e}),"").trim()},8506:(e,t,r)=>{r.d(t,{X:()=>o,x:()=>i});var n=new class{get map(){return this._map}set map(e){this._map=e}getMethods(){return{setMap:e=>{this.map=e},getMap:()=>this.map}}},{setMap:o,getMap:i}=n.getMethods()},4405:(e,t,r)=>{r.d(t,{a:()=>s});var n=r(5444),o=r(9145),i=["node"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],(o="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o))?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){var{node:t}=e,r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i);return t?Array.isArray(t)?(0,o.jsx)(o.Fragment,{children:t.map(((e,t)=>(0,o.jsx)(s,l({node:e,className:r.className},r),t)))}):(r.className=(0,n.L)([t.props.className,r.className]),(0,o.jsx)(t.type,l(l({ref:t.ref},t.props),r),t.key)):null}},5913:(e,t,r)=>{r.d(t,{$:()=>y,n:()=>m});class n{constructor(e){this.config=e}getConfig(){return this.config}setConfig(e){this.config=e}}var o=r(8506),i=["imageParamsKeyMap"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class u{static register(e,t){var r,n;u._mounted&&(null===(r=e.listeners)||void 0===r||r.call(e,t),null===(n=e.init)||void 0===n||n.call(e,t)),u._initializers.push([e,t])}static mount(){var e,t;u._mounted=!0,null===(e=u._initializers)||void 0===e||e.forEach((e=>{var t,[r,n]=e;null===(t=r.listeners)||void 0===t||t.call(r,n)})),null===(t=u._initializers)||void 0===t||t.forEach((e=>{var t,[r,n]=e;null===(t=r.init)||void 0===t||t.call(r,l({imageParamsKeyMap:u._imageParamsKeyMap},n))}))}static setImageParamKeys(e){u._imageParamsKeyMap=e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],(o="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o))?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r,n,o,i,a){try{var l=e[i](a),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,o)}s(u,"_initializers",[]),s(u,"_mounted",!1),s(u,"_imageParamsKeyMap",void 0);var d,v,m=new class{constructor(e){var{init:t,listeners:r}=e;s(this,"_listeners",[]),s(this,"config",new n({})),this.listeners=e=>(this._listeners.forEach((e=>e.off())),this._listeners=r(e)),this.init=e=>{var r=e,{imageParamsKeyMap:n}=r,a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,i);return this.config.setConfig(l(l({},this.config.getConfig()),a)),(0,o.X)(n),t(e)}}}({init:(d=function*(e){m.config.setConfig(p(p({},{}),e))},v=function(){var e=this,t=arguments;return new Promise((function(r,n){var o=d.apply(e,t);function i(e){f(o,r,n,i,a,"next",e)}function a(e){f(o,r,n,i,a,"throw",e)}i(void 0)}))},function(e){return v.apply(this,arguments)}),listeners:()=>[]}),y=m.config},5447:(e,t,r)=>{r.d(t,{X:()=>ee});var n=r(7706),o=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,i=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,a=/[\s\n\\/='"\0<>]/,l=/^xlink:?./,s=/["&<]/;function u(e){if(!1===s.test(e+=""))return e;for(var t=0,r=0,n="",o="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}r!==t&&(n+=e.slice(t,r)),n+=o,t=r+1}return r!==t&&(n+=e.slice(t,r)),n}var c=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"\t"))},p=function(e,t,r){return String(e).length>(t||40)||!r&&-1!==String(e).indexOf("\n")||-1!==String(e).indexOf("<")},f={},d=/([A-Z])/g;function v(e){var t="";for(var r in e){var n=e[r];null!=n&&""!==n&&(t&&(t+=" "),t+="-"==r[0]?r:f[r]||(f[r]=r.replace(d,"-$1").toLowerCase()),t="number"==typeof n&&!1===o.test(r)?t+": "+n+"px;":t+": "+n+";")}return t||void 0}function m(e,t){return Array.isArray(t)?t.reduce(m,e):null!=t&&!1!==t&&e.push(t),e}function y(){this.__d=!0}function b(e,t){return{__v:e,context:t,props:e.props,setState:y,forceUpdate:y,__d:!0,__h:[]}}function h(e,t){var r=e.contextType,n=r&&t[r.__c];return null!=r?n?n.props.value:r.__:t}var g=[];function O(e,t,r,o,s,f){if(null==e||"boolean"==typeof e)return"";if("object"!=typeof e)return"function"==typeof e?"":u(e);var d=r.pretty,y=d&&"string"==typeof d?d:"\t";if(Array.isArray(e)){for(var j="",w=0;w<e.length;w++)d&&w>0&&(j+="\n"),j+=O(e[w],t,r,o,s,f);return j}if(void 0!==e.constructor)return"";var x,_=e.type,P=e.props,C=!1;if("function"==typeof _){if(C=!0,!r.shallow||!o&&!1!==r.renderRootComponent){if(_===n.Fragment){var S=[];return m(S,e.props.children),O(S,t,r,!1!==r.shallowHighOrder,s,f)}var k,E=e.__c=b(e,t);n.options.__b&&n.options.__b(e);var D=n.options.__r;if(_.prototype&&"function"==typeof _.prototype.render){var A=h(_,t);(E=e.__c=new _(P,A)).__v=e,E._dirty=E.__d=!0,E.props=P,null==E.state&&(E.state={}),null==E._nextState&&null==E.__s&&(E._nextState=E.__s=E.state),E.context=A,_.getDerivedStateFromProps?E.state=Object.assign({},E.state,_.getDerivedStateFromProps(E.props,E.state)):E.componentWillMount&&(E.componentWillMount(),E.state=E._nextState!==E.state?E._nextState:E.__s!==E.state?E.__s:E.state),D&&D(e),k=E.render(E.props,E.state,E.context)}else for(var T=h(_,t),M=0;E.__d&&M++<25;)E.__d=!1,D&&D(e),k=_.call(e.__c,P,T);return E.getChildContext&&(t=Object.assign({},t,E.getChildContext())),n.options.diffed&&n.options.diffed(e),O(k,t,r,!1!==r.shallowHighOrder,s,f)}_=(x=_).displayName||x!==Function&&x.name||function(e){var t=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!t){for(var r=-1,n=g.length;n--;)if(g[n]===e){r=n;break}r<0&&(r=g.push(e)-1),t="UnnamedComponent"+r}return t}(x)}var F,I,L="<"+_;if(P){var N=Object.keys(P);r&&!0===r.sortAttributes&&N.sort();for(var R=0;R<N.length;R++){var z=N[R],$=P[z];if("children"!==z){if(!a.test(z)&&(r&&r.allAttributes||"key"!==z&&"ref"!==z&&"__self"!==z&&"__source"!==z)){if("defaultValue"===z)z="value";else if("defaultChecked"===z)z="checked";else if("defaultSelected"===z)z="selected";else if("className"===z){if(void 0!==P.class)continue;z="class"}else s&&l.test(z)&&(z=z.toLowerCase().replace(/^xlink:?/,"xlink:"));if("htmlFor"===z){if(P.for)continue;z="for"}"style"===z&&$&&"object"==typeof $&&($=v($)),"a"===z[0]&&"r"===z[1]&&"boolean"==typeof $&&($=String($));var H=r.attributeHook&&r.attributeHook(z,$,t,r,C);if(H||""===H)L+=H;else if("dangerouslySetInnerHTML"===z)I=$&&$.__html;else if("textarea"===_&&"value"===z)F=$;else if(($||0===$||""===$)&&"function"!=typeof $){if(!(!0!==$&&""!==$||($=z,r&&r.xml))){L=L+" "+z;continue}if("value"===z){if("select"===_){f=$;continue}"option"===_&&f==$&&void 0===P.selected&&(L+=" selected")}L=L+" "+z+'="'+u($)+'"'}}}else F=$}}if(d){var U=L.replace(/\n\s*/," ");U===L||~U.indexOf("\n")?d&&~L.indexOf("\n")&&(L+="\n"):L=U}if(L+=">",a.test(_))throw new Error(_+" is not a valid HTML tag name in "+L);var W,K=i.test(_)||r.voidElements&&r.voidElements.test(_),V=[];if(I)d&&p(I)&&(I="\n"+y+c(I,y)),L+=I;else if(null!=F&&m(W=[],F).length){for(var B=d&&~L.indexOf("\n"),Z=!1,q=0;q<W.length;q++){var Q=W[q];if(null!=Q&&!1!==Q){var X=O(Q,t,r,!0,"svg"===_||"foreignObject"!==_&&s,f);if(d&&!B&&p(X)&&(B=!0),X)if(d){var J=X.length>0&&"<"!=X[0];Z&&J?V[V.length-1]+=X:V.push(X),Z=J}else V.push(X)}}if(d&&B)for(var Y=V.length;Y--;)V[Y]="\n"+y+c(V[Y],y)}if(V.length||I)L+=V.join("");else if(r&&r.xml)return L.substring(0,L.length-1)+" />";return!K||W||I?(d&&~L.indexOf("\n")&&(L+="\n"),L=L+"</"+_+">"):L=L.replace(/>$/," />"),L}var j={shallow:!0};x.render=x;var w=[];function x(e,t,r){t=t||{};var o=n.options.__s;n.options.__s=!0;var i,a=(0,n.h)(n.Fragment,null);return a.__k=[e],i=r&&(r.pretty||r.voidElements||r.sortAttributes||r.shallow||r.allAttributes||r.xml||r.attributeHook)?O(e,t,r):E(e,t,!1,void 0,a),n.options.__c&&n.options.__c(e,w),n.options.__s=o,w.length=0,i}function _(e){return null==e||"boolean"==typeof e?null:"string"==typeof e||"number"==typeof e||"bigint"==typeof e?(0,n.h)(null,null,e):e}function P(e,t){return"className"===e?"class":"htmlFor"===e?"for":"defaultValue"===e?"value":"defaultChecked"===e?"checked":"defaultSelected"===e?"selected":t&&l.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function C(e,t){return"style"===e&&null!=t&&"object"==typeof t?v(t):"a"===e[0]&&"r"===e[1]&&"boolean"==typeof t?String(t):t}var S=Array.isArray,k=Object.assign;function E(e,t,r,o,l){if(null==e||!0===e||!1===e||""===e)return"";if("object"!=typeof e)return"function"==typeof e?"":u(e);if(S(e)){var s="";l.__k=e;for(var c=0;c<e.length;c++)s+=E(e[c],t,r,o,l),e[c]=_(e[c]);return s}if(void 0!==e.constructor)return"";e.__=l,n.options.__b&&n.options.__b(e);var p=e.type,f=e.props;if("function"==typeof p){var d;if(p===n.Fragment)d=f.children;else{d=p.prototype&&"function"==typeof p.prototype.render?function(e,t){var r=e.type,o=h(r,t),i=new r(e.props,o);e.__c=i,i.__v=e,i.__d=!0,i.props=e.props,null==i.state&&(i.state={}),null==i.__s&&(i.__s=i.state),i.context=o,r.getDerivedStateFromProps?i.state=k({},i.state,r.getDerivedStateFromProps(i.props,i.state)):i.componentWillMount&&(i.componentWillMount(),i.state=i.__s!==i.state?i.__s:i.state);var a=n.options.__r;return a&&a(e),i.render(i.props,i.state,i.context)}(e,t):function(e,t){var r,o=b(e,t),i=h(e.type,t);e.__c=o;for(var a=n.options.__r,l=0;o.__d&&l++<25;)o.__d=!1,a&&a(e),r=e.type.call(o,e.props,i);return r}(e,t);var v=e.__c;v.getChildContext&&(t=k({},t,v.getChildContext()))}var m=E(d=null!=d&&d.type===n.Fragment&&null==d.key?d.props.children:d,t,r,o,e);return n.options.diffed&&n.options.diffed(e),e.__=void 0,n.options.unmount&&n.options.unmount(e),m}var y,g,O="<";if(O+=p,f)for(var j in y=f.children,f){var w=f[j];if(!("key"===j||"ref"===j||"__self"===j||"__source"===j||"children"===j||"className"===j&&"class"in f||"htmlFor"===j&&"for"in f||a.test(j)))if(w=C(j=P(j,r),w),"dangerouslySetInnerHTML"===j)g=w&&w.__html;else if("textarea"===p&&"value"===j)y=w;else if((w||0===w||""===w)&&"function"!=typeof w){if(!0===w||""===w){w=j,O=O+" "+j;continue}if("value"===j){if("select"===p){o=w;continue}"option"!==p||o!=w||"selected"in f||(O+=" selected")}O=O+" "+j+'="'+u(w)+'"'}}var x=O;if(O+=">",a.test(p))throw new Error(p+" is not a valid HTML tag name in "+O);var D="",A=!1;if(g)D+=g,A=!0;else if("string"==typeof y)D+=u(y),A=!0;else if(S(y)){e.__k=y;for(var T=0;T<y.length;T++){var M=y[T];if(y[T]=_(M),null!=M&&!1!==M){var F=E(M,t,"svg"===p||"foreignObject"!==p&&r,o,e);F&&(D+=F,A=!0)}}}else if(null!=y&&!1!==y&&!0!==y){e.__k=[_(y)];var I=E(y,t,"svg"===p||"foreignObject"!==p&&r,o,e);I&&(D+=I,A=!0)}if(n.options.diffed&&n.options.diffed(e),e.__=void 0,n.options.unmount&&n.options.unmount(e),A)O+=D;else if(i.test(p))return x+" />";return O+"</"+p+">"}x.shallowRender=function(e,t){return x(e,t,j)};const D=x;var A=r(4405),T=r(9145);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(o),o in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r,n,o,i,a){try{var l=e[i](a),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,o)}function L(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){I(i,n,o,a,l,"next",e)}function l(e){I(i,n,o,a,l,"throw",e)}a(void 0)}))}}var N=r(2885),R=r(1771),z=r(914),$=r.n(z),H=r(5444);const U=JSON.parse('{"Dropin":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"},"Modal":{"Close":{"label":"Close"}},"InlineAlert":{"dismissLabel":"Dismiss Alert"},"PriceSummary":{"subTotal":{"label":"Subtotal","withTaxes":"Including taxes","withoutTaxes":"excluding taxes"},"shipping":{"label":"Shipping","editZipAction":"Apply","estimated":"Estimated Shipping","estimatedDestination":"Estimated Shipping to ","destinationLinkAriaLabel":"Change destination","zipPlaceholder":"Zip Code","withTaxes":"Including taxes","withoutTaxes":"excluding taxes","alternateField":{"zip":"Estimate using country/zip","state":"Estimate using country/state"}},"taxes":{"total":"Tax Total","totalOnly":"Tax","breakdown":"Taxes","showBreakdown":"Show Tax Breakdown","hideBreakdown":"Hide Tax Breakdown","estimated":"Estimated Tax"},"total":{"estimated":"Estimated Total","label":"Total","withoutTax":"Total excluding taxes"}},"ProgressSpinner":{"updating":{"label":"Item is updating"},"updatingChildren":{"label":"Items are updating"}},"PriceRange":{"from":{"label":"From"},"to":{"label":"to"},"asLowAs":{"label":"As low as"}},"Swatches":{"outOfStock":{"label":"out of stock swatch"},"selected":{"label":"swatch selected"},"swatch":{"label":"swatch"}},"Accordion":{"open":{"label":"Open"},"close":{"label":"Close"}},"CartItem":{"each":{"label":"each"},"quantity":{"label":"Quantity"},"remove":{"label":"Remove {product} from the cart"},"removeDefault":{"label":"Remove item from the cart"},"taxIncluded":{"label":"incl. VAT"},"taxExcluded":{"label":"excl. tax"},"updating":{"label":"{product} is updating"}}}}');var W=r(8422),K={default:U,en_US:U},V=["lang","langDefinitions","className","children"];function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(o),o in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=(0,R.createContext)({locale:"en-US"}),Q=e=>{var{lang:t="en_US",langDefinitions:r={},className:n,children:o}=e,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,V),a=(0,R.useMemo)((()=>{var e,n=$()(r.default,null!==(e=r[t])&&void 0!==e?e:{});return $()((e=>$()(K.default,K[e]||{}))(t),n)}),[t,r]),l=t.replace("_","-");return(0,T.jsx)(q.Provider,{value:{locale:l},children:(0,T.jsx)(W.Dk,{definition:a,children:(0,T.jsx)("div",Z(Z({},i),{},{className:(0,H.L)(["dropin-design",n]),children:o}))})})},X=r(1178),J=r(5913),Y={default:r(6601)},G=e=>{var t,{children:r}=e,[n,o]=(0,N.useState)(),i=null===(t=J.$.getConfig())||void 0===t?void 0:t.langDefinitions;(0,N.useEffect)((()=>{var e=X.events.on("locale",(e=>{e!==n&&o(e)}),{eager:!0});return()=>{null==e||e.off()}}),[n]);var a=$()(Y,null!=i?i:{});return(0,T.jsx)(Q,{lang:n,langDefinitions:a,children:r})},ee=new class{constructor(e){this._provider=e}render(e,t){var r=this;return function(){var o=L((function*(o){var i,a;if(!e)throw new Error("Component is not defined");if(!o)throw new Error("Root element is not defined");var l=null!==(i=yield null===(a=e.getInitialData)||void 0===a?void 0:a.call(e,t))&&void 0!==i?i:{};(0,n.render)((0,T.jsx)(A.a,F(F({node:r._provider},r._provider.props),{},{children:(0,T.jsx)(e,F(F({},t),{},{initialData:l}))})),o)}));return function(e){return o.apply(this,arguments)}}()}unmount(e){if(!e)throw new Error("Root element is not defined");(0,n.render)(null,e)}toString(e,t,r){var n=this;return L((function*(){var o,i;if(!e)throw new Error("Component is not defined");var a=null!==(o=yield null===(i=e.getInitialData)||void 0===i?void 0:i.call(e,t))&&void 0!==o?o:{};return D((0,T.jsx)(A.a,F(F({node:n._provider},n._provider.props),{},{children:(0,T.jsx)(e,F(F({},t),{},{initialData:a}))})),{},F({},r))}))()}}((0,T.jsx)(G,{}))},1178:(t,r,n)=>{var o,i;t.exports=(o={events:()=>e.events},i={},n.d(i,o),i)},1771:(e,r,n)=>{var o,i;e.exports=(o={Children:()=>t.Children,Suspense:()=>t.Suspense,createContext:()=>t.createContext,lazy:()=>t.lazy,useCallback:()=>t.useCallback,useEffect:()=>t.useEffect,useMemo:()=>t.useMemo,useRef:()=>t.useRef,useState:()=>t.useState},i={},n.d(i,o),i)},2885:(e,t,n)=>{var o,i;e.exports=(o={useCallback:()=>r.useCallback,useContext:()=>r.useContext,useDebugValue:()=>r.useDebugValue,useEffect:()=>r.useEffect,useId:()=>r.useId,useImperativeHandle:()=>r.useImperativeHandle,useLayoutEffect:()=>r.useLayoutEffect,useMemo:()=>r.useMemo,useReducer:()=>r.useReducer,useRef:()=>r.useRef,useState:()=>r.useState},i={},n.d(i,o),i)},997:(e,t,r)=>{var o,i;e.exports=(o={Fragment:()=>n.Fragment,jsx:()=>n.jsx,jsxs:()=>n.jsxs},i={},r.d(i,o),i)},7706:(e,t,r)=>{var n,i;e.exports=(n={Component:()=>o.Component,Fragment:()=>o.Fragment,cloneElement:()=>o.cloneElement,createContext:()=>o.createContext,createElement:()=>o.createElement,createRef:()=>o.createRef,h:()=>o.h,hydrate:()=>o.hydrate,options:()=>o.options,render:()=>o.render,toChildArray:()=>o.toChildArray},i={},r.d(i,n),i)},9145:(e,t,r)=>{r(1771);var n=r(997);r.o(n,"Fragment")&&r.d(t,{Fragment:function(){return n.Fragment}}),r.o(n,"jsx")&&r.d(t,{jsx:function(){return n.jsx}}),r.o(n,"jsxs")&&r.d(t,{jsxs:function(){return n.jsxs}})},6601:e=>{e.exports=JSON.parse('{"PDP":{"Product":{"Incrementer":{"label":"Item Quantity"},"OutOfStock":{"label":"Out of Stock"},"AddToCart":{"label":"Add to Cart"},"Details":{"label":"Details"},"RegularPrice":{"label":"Regular Price"},"SpecialPrice":{"label":"Special Price"},"PriceRange":{"From":{"label":"From"},"To":{"label":"to"}},"Image":{"label":"{product} Image {key} of {total}"}},"Swatches":{"Required":{"label":"Required"}},"Carousel":{"label":"Carousel","Next":{"label":"Next"},"Previous":{"label":"Previous"},"Slide":{"label":"Slide"},"Controls":{"label":"Carousel Controls","Button":{"label":"Show slide {key} of {total}"}}},"Overlay":{"Close":{"label":"Close"}}},"Custom":{"quantityLabel":"Passengers"}}')}};import i from"./runtime.js";import*as a from"./render.js";i.C(a);var l=(5447,i(i.s=5447)).X;export{l as render};