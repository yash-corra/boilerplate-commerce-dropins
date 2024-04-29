export const id=4392;export const ids=[4392];export const modules={3532:function(r){r.exports=function(r,t,n,e,o){for(t=t.split?t.split("."):t,e=0;e<t.length;e++)r=r?r[t[e]]:o;return r===o?n:r}},8300:(r,t,n)=>{n.d(t,{Gg:()=>v,us:()=>w,Mp:()=>F,_q:()=>z,a:()=>T,cF:()=>S});var e,o=n(7320),i=n(2720),a=n(3532),l=n.n(a),p={};function u(r,t,n){if(3===r.nodeType){var e="textContent"in r?r.textContent:r.nodeValue||"";if(!1!==u.options.trim){var o=0===t||t===n.length-1;if((!(e=e.match(/^[\s\n]+$/g)&&"all"!==u.options.trim?" ":e.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===u.options.trim||o?"":" "))||" "===e)&&n.length>1&&o)return null}return e}if(1!==r.nodeType)return null;var i=String(r.nodeName).toLowerCase();if("script"===i&&!u.options.allowScripts)return null;var a,l,p=u.h(i,function(r){var t=r&&r.length;if(!t)return null;for(var n={},e=0;e<t;e++){var o=r[e],i=o.name,a=o.value;"on"===i.substring(0,2)&&u.options.allowEvents&&(a=new Function(a)),n[i]=a}return n}(r.attributes),(l=(a=r.childNodes)&&Array.prototype.map.call(a,u).filter(c))&&l.length?l:null);return u.visitor&&u.visitor(p),p}var s,c=function(r){return r},f={};function m(r){var t=(r.type||"").toLowerCase(),n=m.map;n&&n.hasOwnProperty(t)?(r.type=n[t],r.props=Object.keys(r.props||{}).reduce((function(t,n){var e;return t[(e=n,e.replace(/-(.)/g,(function(r,t){return t.toUpperCase()})))]=r.props[n],t}),{})):r.type=t.replace(/[^a-z0-9-]/i,"")}const d=function(r){function t(){r.apply(this,arguments)}return r&&(t.__proto__=r),(t.prototype=Object.create(r&&r.prototype)).constructor=t,t.setReviver=function(r){s=r},t.prototype.shouldComponentUpdate=function(r){var t=this.props;return r.wrap!==t.wrap||r.type!==t.type||r.markup!==t.markup},t.prototype.setComponents=function(r){if(this.map={},r)for(var t in r)if(r.hasOwnProperty(t)){var n=t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[n]=r[t]}},t.prototype.render=function(r){var t=r.wrap;void 0===t&&(t=!0);var n,i=r.type,a=r.markup,l=r.components,c=r.reviver,d=r.onError,v=r["allow-scripts"],h=r["allow-events"],y=r.trim,g=function(r,t){var n={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&-1===t.indexOf(e)&&(n[e]=r[e]);return n}(r,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),x=c||this.reviver||this.constructor.prototype.reviver||s||o.h;this.setComponents(l);var w={allowScripts:v,allowEvents:h,trim:y};try{n=function(r,t,n,o,i){var a=function(r,t){var n,o,i,a,l="html"===t?"text/html":"application/xml";"html"===t?(a="body",i="<!DOCTYPE html>\n<html><body>"+r+"</body></html>"):(a="xml",i='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+r+"</xml>");try{n=(new DOMParser).parseFromString(i,l)}catch(r){o=r}if(n||"html"!==t||((n=e||(e=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var r=document.createElement("iframe");return r.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",r.setAttribute("sandbox","allow-forms"),document.body.appendChild(r),r.contentWindow.document}())).open(),n.write(i),n.close()),n){var p=n.getElementsByTagName(a)[0],u=p.firstChild;return r&&!u&&(p.error="Document parse failed."),u&&"parsererror"===String(u.nodeName).toLowerCase()&&(u.removeChild(u.firstChild),u.removeChild(u.lastChild),p.error=u.textContent||u.nodeValue||o||"Unknown error",p.removeChild(u)),p}}(r,t);if(a&&a.error)throw new Error(a.error);var l=a&&a.body||a;m.map=o||f;var s=l&&function(r,t,n,e){return u.visitor=t,u.h=n,u.options=e||p,u(r)}(l,m,n,i);return m.map=null,s&&s.props&&s.props.children||null}(a,i,x,this.map,w)}catch(r){d?d({error:r}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+r)}if(!1===t)return n||null;var C=g.hasOwnProperty("className")?"className":"class",b=g[C];return b?b.splice?b.splice(0,0,"markup"):"string"==typeof b?g[C]+=" markup":"object"==typeof b&&(b.markup=!0):g[C]="markup",x("div",g,n||null)},t}(o.Component);var v=(0,o.createContext)({intl:{}});function h(r){return null!=r}function y(r,t){for(var n in t)r[n]=t[n];return r}function g(r,t){var n=y({},r);for(var e in t)t.hasOwnProperty(e)&&(r[e]&&t[e]&&"object"==typeof r[e]&&"object"==typeof t[e]?n[e]=g(r[e],t[e]):n[e]=r[e]||t[e]);return n}var x=/[?&#]intl=show/;function w(r){var t=r.scope,n=r.mark,e=r.definition,a=function(r,t){var n={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&-1===t.indexOf(e)&&(n[e]=r[e]);return n}(r,["scope","mark","definition"]),l=y({},(0,i.useContext)(v).intl||{});return t&&(l.scope=t),e&&(l.dictionary=g(l.dictionary||{},e)),(n||"undefined"!=typeof location&&String(location).match(x))&&(l.mark=!0),(0,o.h)(v.Provider,{value:{intl:l}},a.children)}function C(r,t){if(arguments.length<2)return t=r,function(r){return C(r,t)};function n(n){return(0,o.h)(w,t||{},(0,o.h)(r,n))}return n.getWrappedComponent=r&&r.getWrappedComponent||function(){return r},n}var b={};function k(r,t,n,e){return r&&r.replace(/\{\{([\w.-]+)\}\}/g,O.bind(null,t||b,n,e))}function O(r,t,n,e,o){for(var i=o.split("."),a=r,l=0;l<i.length;l++){if(null==(a=a[i[l]]))return"";if(a&&a.type===T)return j(a.props.id,t,n,a.props.fields,a.props.plural,a.props.fallback)}return"string"==typeof a&&a.match(/\{\{/)&&(a=k(a,r)),a}function j(r,t,n,e,o,i){t&&(r=t+"."+r);var a=n&&l()(n,r);return(o||0===o)&&a&&"object"==typeof a&&(a=a.splice?a[o]||a[0]:0===o&&h(a.none||a.zero)?a.none||a.zero:1===o&&h(a.one||a.singular)?a.one||a.singular:a.some||a.many||a.plural||a.other||a),a&&k(a,e,t,n)||i||null}function P(r){var t=r.value,n=r.id,e=(0,i.useContext)(v).intl;if(e&&e.mark){var a="dictionary"+(e&&e.scope?"."+e.scope:"")+"."+n;return(0,o.h)("mark",{style:{background:t?l()(e,a)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:n},t)}return t}function T(r){var t=r.id,n=r.children,e=r.plural,a=r.fields,l=(0,i.useContext)(v).intl,p=j(t,l&&l.scope,l&&l.dictionary,a,e,n);return(0,o.h)(P,{id:t,value:p})}function E(r,t,n){var e={};for(var o in t=t||{},r=function(r){if("string"==typeof(r=r||{})&&(r=r.split(",")),"join"in r){for(var t={},n=0;n<r.length;n++){var e=r[n].trim();e&&(t[e.split(".").pop()]=e)}return t}return r}(r),r)if(r.hasOwnProperty(o)&&r[o]){var i=r[o];n||"string"!=typeof i?i.type===T&&(i=y({fallback:i.props.children},i.props),e[o]=j(i.id,t.scope,t.dictionary,i.fields,i.plural,i.fallback)):e[o]=j(i,t.scope,t.dictionary)}return e}function F(r){var t=r.children,n=(0,i.useContext)(v).intl;return t&&t.length?t.map((function(r){return(0,o.cloneElement)(r,E(r.props,n,!0))})):t&&(0,o.cloneElement)(t,E(t.props,n,!0))}function L(r,t){var n={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&-1===t.indexOf(e)&&(n[e]=r[e]);return n}function z(r){var t=r.id,n=r.fields,e=r.plural,i=r.children,a=L(r,["id","fields","plural","children"]);return(0,o.h)(F,null,(0,o.h)(N,Object.assign({},{html:(0,o.h)(T,{id:t,fields:n,plural:e,children:i}),id:t},a)))}function N(r){var t=r.html,n=r.id,e=L(r,["html","id"]);return(0,o.h)(P,{id:n,value:t?"string"==typeof t?(0,o.h)(d,Object.assign({},{type:"html",trim:!1},e,{markup:t})):(0,o.h)("span",null,t):t})}function S(r){var t=(0,i.useContext)(v).intl;return E("function"==typeof r?r({intl:t}):r,t)}C.intl=C,C.IntlContext=v,C.IntlProvider=w,C.Text=T,C.MarkupText=z,C.Localizer=F,C.withText=function(r){return function(t){function n(n,e){var a=(0,i.useContext)(v).intl,l=E("function"==typeof r?r(n,{intl:a}):r,a);return(0,o.h)(t,y(y({},n),l))}return n.getWrappedComponent=t&&t.getWrappedComponent||function(){return t},n}},C.useText=S,C.translate=j},5092:(r,t,n)=>{n(6528);var e=n(6168);n.o(e,"Fragment")&&n.d(t,{Fragment:function(){return e.Fragment}}),n.o(e,"jsx")&&n.d(t,{jsx:function(){return e.jsx}}),n.o(e,"jsxs")&&n.d(t,{jsxs:function(){return e.jsxs}})}};