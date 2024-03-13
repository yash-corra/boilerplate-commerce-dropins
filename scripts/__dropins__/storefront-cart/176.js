export const id=176;export const ids=[176];export const modules={8528:r=>{var t=function(r){return function(r){return!!r&&"object"==typeof r}(r)&&!function(r){var t=Object.prototype.toString.call(r);return"[object RegExp]"===t||"[object Date]"===t||function(r){return r.$$typeof===e}(r)}(r)};var e="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(r,t){return!1!==t.clone&&t.isMergeableObject(r)?u((e=r,Array.isArray(e)?[]:{}),r,t):r;var e}function o(r,t,e){return r.concat(t).map((function(r){return n(r,e)}))}function i(r){return Object.keys(r).concat(function(r){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(r).filter((function(t){return Object.propertyIsEnumerable.call(r,t)})):[]}(r))}function a(r,t){try{return t in r}catch(r){return!1}}function c(r,t,e){var o={};return e.isMergeableObject(r)&&i(r).forEach((function(t){o[t]=n(r[t],e)})),i(t).forEach((function(i){(function(r,t){return a(r,t)&&!(Object.hasOwnProperty.call(r,t)&&Object.propertyIsEnumerable.call(r,t))})(r,i)||(a(r,i)&&e.isMergeableObject(t[i])?o[i]=function(r,t){if(!t.customMerge)return u;var e=t.customMerge(r);return"function"==typeof e?e:u}(i,e)(r[i],t[i],e):o[i]=n(t[i],e))})),o}function u(r,e,i){(i=i||{}).arrayMerge=i.arrayMerge||o,i.isMergeableObject=i.isMergeableObject||t,i.cloneUnlessOtherwiseSpecified=n;var a=Array.isArray(e);return a===Array.isArray(r)?a?i.arrayMerge(r,e,i):c(r,e,i):n(e,i)}u.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce((function(r,e){return u(r,e,t)}),{})};var l=u;r.exports=l},3532:function(r){r.exports=function(r,t,e,n,o){for(t=t.split?t.split("."):t,n=0;n<t.length;n++)r=r?r[t[n]]:o;return r===o?e:r}},8300:(r,t,e)=>{e.d(t,{us:()=>x,Mp:()=>A,a:()=>M,cF:()=>N});var n,o=e(7320),i=e(2720),a=e(3532),c=e.n(a),u={};function l(r,t,e){if(3===r.nodeType){var n="textContent"in r?r.textContent:r.nodeValue||"";if(!1!==l.options.trim){var o=0===t||t===e.length-1;if((!(n=n.match(/^[\s\n]+$/g)&&"all"!==l.options.trim?" ":n.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===l.options.trim||o?"":" "))||" "===n)&&e.length>1&&o)return null}return n}if(1!==r.nodeType)return null;var i=String(r.nodeName).toLowerCase();if("script"===i&&!l.options.allowScripts)return null;var a,c,u=l.h(i,function(r){var t=r&&r.length;if(!t)return null;for(var e={},n=0;n<t;n++){var o=r[n],i=o.name,a=o.value;"on"===i.substring(0,2)&&l.options.allowEvents&&(a=new Function(a)),e[i]=a}return e}(r.attributes),(c=(a=r.childNodes)&&Array.prototype.map.call(a,l).filter(p))&&c.length?c:null);return l.visitor&&l.visitor(u),u}var s,p=function(r){return r},f={};function d(r){var t=(r.type||"").toLowerCase(),e=d.map;e&&e.hasOwnProperty(t)?(r.type=e[t],r.props=Object.keys(r.props||{}).reduce((function(t,e){var n;return t[(n=e,n.replace(/-(.)/g,(function(r,t){return t.toUpperCase()})))]=r.props[e],t}),{})):r.type=t.replace(/[^a-z0-9-]/i,"")}const m=function(r){function t(){r.apply(this,arguments)}return r&&(t.__proto__=r),(t.prototype=Object.create(r&&r.prototype)).constructor=t,t.setReviver=function(r){s=r},t.prototype.shouldComponentUpdate=function(r){var t=this.props;return r.wrap!==t.wrap||r.type!==t.type||r.markup!==t.markup},t.prototype.setComponents=function(r){if(this.map={},r)for(var t in r)if(r.hasOwnProperty(t)){var e=t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[e]=r[t]}},t.prototype.render=function(r){var t=r.wrap;void 0===t&&(t=!0);var e,i=r.type,a=r.markup,c=r.components,p=r.reviver,m=r.onError,v=r["allow-scripts"],h=r["allow-events"],y=r.trim,g=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===t.indexOf(n)&&(e[n]=r[n]);return e}(r,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),b=p||this.reviver||this.constructor.prototype.reviver||s||o.h;this.setComponents(c);var x={allowScripts:v,allowEvents:h,trim:y};try{e=function(r,t,e,o,i){var a=function(r,t){var e,o,i,a,c="html"===t?"text/html":"application/xml";"html"===t?(a="body",i="<!DOCTYPE html>\n<html><body>"+r+"</body></html>"):(a="xml",i='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+r+"</xml>");try{e=(new DOMParser).parseFromString(i,c)}catch(r){o=r}if(e||"html"!==t||((e=n||(n=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var r=document.createElement("iframe");return r.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",r.setAttribute("sandbox","allow-forms"),document.body.appendChild(r),r.contentWindow.document}())).open(),e.write(i),e.close()),e){var u=e.getElementsByTagName(a)[0],l=u.firstChild;return r&&!l&&(u.error="Document parse failed."),l&&"parsererror"===String(l.nodeName).toLowerCase()&&(l.removeChild(l.firstChild),l.removeChild(l.lastChild),u.error=l.textContent||l.nodeValue||o||"Unknown error",u.removeChild(l)),u}}(r,t);if(a&&a.error)throw new Error(a.error);var c=a&&a.body||a;d.map=o||f;var s=c&&function(r,t,e,n){return l.visitor=t,l.h=e,l.options=n||u,l(r)}(c,d,e,i);return d.map=null,s&&s.props&&s.props.children||null}(a,i,b,this.map,x)}catch(r){m?m({error:r}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+r)}if(!1===t)return e||null;var w=g.hasOwnProperty("className")?"className":"class",O=g[w];return O?O.splice?O.splice(0,0,"markup"):"string"==typeof O?g[w]+=" markup":"object"==typeof O&&(O.markup=!0):g[w]="markup",b("div",g,e||null)},t}(o.Component);var v=(0,o.createContext)({intl:{}});function h(r){return null!=r}function y(r,t){for(var e in t)r[e]=t[e];return r}function g(r,t){var e=y({},r);for(var n in t)t.hasOwnProperty(n)&&(r[n]&&t[n]&&"object"==typeof r[n]&&"object"==typeof t[n]?e[n]=g(r[n],t[n]):e[n]=r[n]||t[n]);return e}var b=/[?&#]intl=show/;function x(r){var t=r.scope,e=r.mark,n=r.definition,a=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===t.indexOf(n)&&(e[n]=r[n]);return e}(r,["scope","mark","definition"]),c=y({},(0,i.useContext)(v).intl||{});return t&&(c.scope=t),n&&(c.dictionary=g(c.dictionary||{},n)),(e||"undefined"!=typeof location&&String(location).match(b))&&(c.mark=!0),(0,o.h)(v.Provider,{value:{intl:c}},a.children)}function w(r,t){if(arguments.length<2)return t=r,function(r){return w(r,t)};function e(e){return(0,o.h)(x,t||{},(0,o.h)(r,e))}return e.getWrappedComponent=r&&r.getWrappedComponent||function(){return r},e}var O={};function j(r,t,e,n){return r&&r.replace(/\{\{([\w.-]+)\}\}/g,C.bind(null,t||O,e,n))}function C(r,t,e,n,o){for(var i=o.split("."),a=r,c=0;c<i.length;c++){if(null==(a=a[i[c]]))return"";if(a&&a.type===M)return k(a.props.id,t,e,a.props.fields,a.props.plural,a.props.fallback)}return"string"==typeof a&&a.match(/\{\{/)&&(a=j(a,r)),a}function k(r,t,e,n,o,i){t&&(r=t+"."+r);var a=e&&c()(e,r);return(o||0===o)&&a&&"object"==typeof a&&(a=a.splice?a[o]||a[0]:0===o&&h(a.none||a.zero)?a.none||a.zero:1===o&&h(a.one||a.singular)?a.one||a.singular:a.some||a.many||a.plural||a.other||a),a&&j(a,n,t,e)||i||null}function E(r){var t=r.value,e=r.id,n=(0,i.useContext)(v).intl;if(n&&n.mark){var a="dictionary"+(n&&n.scope?"."+n.scope:"")+"."+e;return(0,o.h)("mark",{style:{background:t?c()(n,a)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:e},t)}return t}function M(r){var t=r.id,e=r.children,n=r.plural,a=r.fields,c=(0,i.useContext)(v).intl,u=k(t,c&&c.scope,c&&c.dictionary,a,n,e);return(0,o.h)(E,{id:t,value:u})}function S(r,t,e){var n={};for(var o in t=t||{},r=function(r){if("string"==typeof(r=r||{})&&(r=r.split(",")),"join"in r){for(var t={},e=0;e<r.length;e++){var n=r[e].trim();n&&(t[n.split(".").pop()]=n)}return t}return r}(r),r)if(r.hasOwnProperty(o)&&r[o]){var i=r[o];e||"string"!=typeof i?i.type===M&&(i=y({fallback:i.props.children},i.props),n[o]=k(i.id,t.scope,t.dictionary,i.fields,i.plural,i.fallback)):n[o]=k(i,t.scope,t.dictionary)}return n}function A(r){var t=r.children,e=(0,i.useContext)(v).intl;return t&&t.length?t.map((function(r){return(0,o.cloneElement)(r,S(r.props,e,!0))})):t&&(0,o.cloneElement)(t,S(t.props,e,!0))}function P(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&-1===t.indexOf(n)&&(e[n]=r[n]);return e}function T(r){var t=r.html,e=r.id,n=P(r,["html","id"]);return(0,o.h)(E,{id:e,value:t?"string"==typeof t?(0,o.h)(m,Object.assign({},{type:"html",trim:!1},n,{markup:t})):(0,o.h)("span",null,t):t})}function N(r){var t=(0,i.useContext)(v).intl;return S("function"==typeof r?r({intl:t}):r,t)}w.intl=w,w.IntlContext=v,w.IntlProvider=x,w.Text=M,w.MarkupText=function(r){var t=r.id,e=r.fields,n=r.plural,i=r.children,a=P(r,["id","fields","plural","children"]);return(0,o.h)(A,null,(0,o.h)(T,Object.assign({},{html:(0,o.h)(M,{id:t,fields:e,plural:n,children:i}),id:t},a)))},w.Localizer=A,w.withText=function(r){return function(t){function e(e,n){var a=(0,i.useContext)(v).intl,c=S("function"==typeof r?r(e,{intl:a}):r,a);return(0,o.h)(t,y(y({},e),c))}return e.getWrappedComponent=t&&t.getWrappedComponent||function(){return t},e}},w.useText=N,w.translate=k},2076:r=>{r.exports=function(r){var t=[];return t.toString=function(){return this.map((function(t){var e="",n=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),n&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=r(t),n&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(r,e,n,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var l=0;l<r.length;l++){var s=[].concat(r[l]);n&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},6008:r=>{r.exports=function(r){return r[1]}},5536:r=>{var t=[];function e(r){for(var e=-1,n=0;n<t.length;n++)if(t[n].identifier===r){e=n;break}return e}function n(r,n){for(var i={},a=[],c=0;c<r.length;c++){var u=r[c],l=n.base?u[0]+n.base:u[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var f=e(p),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var m=o(d,n);n.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(r,t){var e=t.domAPI(t);e.update(r);return function(t){if(t){if(t.css===r.css&&t.media===r.media&&t.sourceMap===r.sourceMap&&t.supports===r.supports&&t.layer===r.layer)return;e.update(r=t)}else e.remove()}}r.exports=function(r,o){var i=n(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var u=n(r,o),l=0;l<i.length;l++){var s=e(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=u}}},9904:r=>{r.exports=function(r){var t=document.createElement("style");return r.setAttributes(t,r.attributes),r.insert(t,r.options),t}},9356:r=>{r.exports=function(r,t){Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])}))}},4492:r=>{var t,e=(t=[],function(r,e){return t[r]=e,t.filter(Boolean).join("\n")});function n(r,t,n,o){var i;if(n)i="";else{i="",o.supports&&(i+="@supports (".concat(o.supports,") {")),o.media&&(i+="@media ".concat(o.media," {"));var a=void 0!==o.layer;a&&(i+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),i+=o.css,a&&(i+="}"),o.media&&(i+="}"),o.supports&&(i+="}")}if(r.styleSheet)r.styleSheet.cssText=e(t,i);else{var c=document.createTextNode(i),u=r.childNodes;u[t]&&r.removeChild(u[t]),u.length?r.insertBefore(c,u[t]):r.appendChild(c)}}var o={singleton:null,singletonCounter:0};r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=o.singletonCounter++,e=o.singleton||(o.singleton=r.insertStyleElement(r));return{update:function(r){n(e,t,!1,r)},remove:function(r){n(e,t,!0,r)}}}},5092:(r,t,e)=>{e(6528);var n=e(6168);e.o(n,"Fragment")&&e.d(t,{Fragment:function(){return n.Fragment}}),e.o(n,"jsx")&&e.d(t,{jsx:function(){return n.jsx}}),e.o(n,"jsxs")&&e.d(t,{jsxs:function(){return n.jsxs}})}};