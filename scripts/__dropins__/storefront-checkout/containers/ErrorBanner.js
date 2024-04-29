import*as e from"@dropins/tools/event-bus.js";import*as t from"@dropins/tools/preact-compat.js";import*as r from"@dropins/tools/preact-hooks.js";import*as n from"@dropins/tools/preact-jsx-runtime.js";import*as o from"@dropins/tools/preact.js";export const id=592;export const ids=[592,8612,160];export const modules={9064:(e,t,r)=>{r.d(t,{createElement:()=>n.createElement});var n=r(7320),o=r(2720);function i(e,t){for(var r in e)if("__source"!==r&&!(r in t))return!0;for(var n in t)if("__source"!==n&&e[n]!==t[n])return!0;return!1}function a(e,t){this.props=e,this.context=t}(a.prototype=new n.Component).isPureReactComponent=!0,a.prototype.shouldComponentUpdate=function(e,t){return i(this.props,e)||i(this.state,t)};var l=n.options.__b;n.options.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),l&&l(e)},"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var c=(n.toChildArray,n.options.__e);n.options.__e=function(e,t,r,n){if(e.then)for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return null==t.__e&&(t.__e=r.__e,t.__k=r.__k),o.__c(e,t);c(e,t,r,n)};var s=n.options.unmount;function u(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c()})),e.__c.__H=null),null!=(e=function(e,t){for(var r in t)e[r]=t[r];return e}({},e)).__c&&(e.__c.__P===r&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return u(e,t,r)}))),e}function p(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return p(e,t,r)})),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function f(){this.__u=0,this.t=null,this.__b=null}function d(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function b(){this.u=null,this.o=null}n.options.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),s&&s(e)},(f.prototype=new n.Component).__c=function(e,t){var r=t.__c,n=this;null==n.t&&(n.t=[]),n.t.push(r);var o=d(n.__v),i=!1,a=function(){i||(i=!0,r.__R=null,o?o(l):l())};r.__R=a;var l=function(){if(! --n.__u){if(n.state.__a){var e=n.state.__a;n.__v.__k[0]=p(e,e.__c.__P,e.__c.__O)}var t;for(n.setState({__a:n.__b=null});t=n.t.pop();)t.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(a,a)},f.prototype.componentWillUnmount=function(){this.t=[]},f.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=u(this.__b,r,o.__O=o.__P)}this.__b=null}var i=t.__a&&(0,n.createElement)(n.Fragment,null,e.fallback);return i&&(i.__u&=-33),[(0,n.createElement)(n.Fragment,null,t.__a?null:e.children),i]};var v=function(e,t,r){if(++r[1]===r[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(r=e.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.u=r=r[2]}};(b.prototype=new n.Component).__a=function(e){var t=this,r=d(t.__v),n=t.o.get(e);return n[0]++,function(o){var i=function(){t.props.revealOrder?(n.push(o),v(t,e,n)):o()};r?r(i):i()}},b.prototype.render=function(e){this.u=null,this.o=new Map;var t=(0,n.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var r=t.length;r--;)this.o.set(t[r],this.u=[1,0,this.u]);return e.children},b.prototype.componentDidUpdate=b.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,r){v(e,r,t)}))};var y="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,_=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,m=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,h=/[A-Z0-9]/g,O="undefined"!=typeof document,g=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(e)};n.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(n.Component.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})}));var j=n.options.event;function w(){}function P(){return this.cancelBubble}function x(){return this.defaultPrevented}n.options.event=function(e){return j&&(e=j(e)),e.persist=w,e.isPropagationStopped=P,e.isDefaultPrevented=x,e.nativeEvent=e};var E={enumerable:!1,configurable:!0,get:function(){return this.class}},S=n.options.vnode;n.options.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,r=e.type,o={};for(var i in t){var a=t[i];if(!("value"===i&&"defaultValue"in t&&null==a||O&&"children"===i&&"noscript"===r||"class"===i||"className"===i)){var l=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&!0===a?a="":"translate"===l&&"no"===a?a=!1:"ondoubleclick"===l?i="ondblclick":"onchange"!==l||"input"!==r&&"textarea"!==r||g(t.type)?"onfocus"===l?i="onfocusin":"onblur"===l?i="onfocusout":m.test(i)?i=l:-1===r.indexOf("-")&&_.test(i)?i=i.replace(h,"-$&").toLowerCase():null===a&&(a=void 0):l=i="oninput","oninput"===l&&o[i=l]&&(i="oninputCapture"),o[i]=a}}"select"==r&&o.multiple&&Array.isArray(o.value)&&(o.value=(0,n.toChildArray)(t.children).forEach((function(e){e.props.selected=-1!=o.value.indexOf(e.props.value)}))),"select"==r&&null!=o.defaultValue&&(o.value=(0,n.toChildArray)(t.children).forEach((function(e){e.props.selected=o.multiple?-1!=o.defaultValue.indexOf(e.props.value):o.defaultValue==e.props.value}))),t.class&&!t.className?(o.class=t.class,Object.defineProperty(o,"className",E)):(t.className&&!t.class||t.class&&t.className)&&(o.class=o.className=t.className),e.props=o}(e),e.$$typeof=y,S&&S(e)};var C=n.options.__r;n.options.__r=function(e){C&&C(e),e.__c};var k=n.options.diffed;n.options.diffed=function(e){k&&k(e);var t=e.props,r=e.__e;null!=r&&"textarea"===e.type&&"value"in t&&t.value!==r.value&&(r.value=null==t.value?"":t.value)},n.Fragment,o.useLayoutEffect,o.useState,o.useId,o.useReducer,o.useEffect,o.useLayoutEffect,o.useRef,o.useImperativeHandle,o.useMemo,o.useCallback,o.useContext,o.useDebugValue,n.createElement,n.createContext,n.createRef,n.Fragment,n.Component},8612:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n,o=r(9064);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const a=function(e){return o.createElement("svg",i({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=o.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.36 5.64 5.63 18.37M18.36 18.37 5.63 5.64",stroke:"currentColor"})))}},160:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n,o=r(9064);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}const a=function(e){return o.createElement("svg",i({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n||(n=o.createElement("path",{vectorEffect:"non-scaling-stroke",fillRule:"evenodd",clipRule:"evenodd",d:"M1 20.895 12.192 1.5l11.203 19.395H1Zm12.028-6.931.222-3.926V9h-2v1.038l.222 3.926h1.556ZM11.299 16v1.75h1.926V16H11.3Z",fill:"currentColor"})))}},1966:(e,t,r)=>{r.d(t,{q:()=>s});var n=r(8884),o=r(4496),i=r(5092),a=["value","variant","size","icon","className","children","disabled","active","activeChildren","activeIcon","href"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],(o="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o))?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=e=>{var{value:t,variant:r="primary",size:l="medium",icon:s,className:u,children:p,disabled:f=!1,active:d=!1,activeChildren:b,activeIcon:v,href:y}=e,_=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),m="dropin-button";(s&&!p||s&&d&&!b||!s&&d&&v)&&(m="dropin-iconButton"),d&&b&&(m="dropin-button"),u=(0,n.i)([m,"".concat(m,"--").concat(l),"".concat(m,"--").concat(r),["".concat(m,"--").concat(r,"--disabled"),f],p&&s&&"".concat(m,"--with-icon"),!p&&b&&s&&"".concat(m,"--with-icon"),d&&v&&"".concat(m,"--with-icon"),u]);var h=(0,n.i)(["dropin-button-icon","dropin-button-icon--".concat(r),["dropin-button-icon--".concat(r,"--disabled"),f],null==s?void 0:s.props.className]),O=y?c(c({node:(0,i.jsx)("a",{}),role:"link",href:y},_),{},{disabled:f,active:d}):c(c({node:(0,i.jsx)("button",{}),role:"button"},_),{},{value:t,disabled:f,active:d});return(0,i.jsxs)(o.o,c(c({},O),{},{className:u,children:[s&&!d&&(0,i.jsx)(o.o,{node:s,className:h}),v&&d&&(0,i.jsx)(o.o,{node:v,className:h}),p&&!d&&("string"==typeof p?(0,i.jsx)("span",{children:p}):p),d&&b&&("string"==typeof b?(0,i.jsx)("span",{children:b}):b)]}))}},7684:(e,t,r)=>{r.d(t,{G:()=>u});var n=r(8884),o=r(6528),i=r(5092),a=["source","size","stroke","viewBox","className"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],(o="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o))?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s={Add:(0,o.lazy)((()=>r.e(1704).then(r.bind(r,1704)))),Bulk:(0,o.lazy)((()=>r.e(2488).then(r.bind(r,2488)))),Burger:(0,o.lazy)((()=>r.e(5572).then(r.bind(r,5572)))),Cart:(0,o.lazy)((()=>r.e(2588).then(r.bind(r,2588)))),Check:(0,o.lazy)((()=>r.e(5944).then(r.bind(r,5944)))),ChevronDown:(0,o.lazy)((()=>r.e(9772).then(r.bind(r,9772)))),ChevronUp:(0,o.lazy)((()=>r.e(6380).then(r.bind(r,6380)))),ChevronRight:(0,o.lazy)((()=>r.e(5048).then(r.bind(r,5048)))),Close:(0,o.lazy)((()=>r.e(8612).then(r.bind(r,8612)))),Heart:(0,o.lazy)((()=>r.e(8992).then(r.bind(r,8992)))),Minus:(0,o.lazy)((()=>r.e(6236).then(r.bind(r,6236)))),Placeholder:(0,o.lazy)((()=>r.e(1464).then(r.bind(r,1464)))),PlaceholderFilled:(0,o.lazy)((()=>r.e(2375).then(r.bind(r,2375)))),Search:(0,o.lazy)((()=>r.e(5480).then(r.bind(r,5480)))),SearchFilled:(0,o.lazy)((()=>r.e(5288).then(r.bind(r,5288)))),Sort:(0,o.lazy)((()=>r.e(2680).then(r.bind(r,2680)))),Star:(0,o.lazy)((()=>r.e(5816).then(r.bind(r,5816)))),View:(0,o.lazy)((()=>r.e(8556).then(r.bind(r,8556)))),User:(0,o.lazy)((()=>r.e(6796).then(r.bind(r,6796)))),Warning:(0,o.lazy)((()=>r.e(3224).then(r.bind(r,3224)))),Locker:(0,o.lazy)((()=>r.e(624).then(r.bind(r,624)))),Wallet:(0,o.lazy)((()=>r.e(3844).then(r.bind(r,3844)))),Card:(0,o.lazy)((()=>r.e(3500).then(r.bind(r,3500)))),Order:(0,o.lazy)((()=>r.e(6200).then(r.bind(r,6200)))),Delivery:(0,o.lazy)((()=>r.e(7235).then(r.bind(r,7235)))),OrderError:(0,o.lazy)((()=>r.e(4896).then(r.bind(r,4896)))),OrderSuccess:(0,o.lazy)((()=>r.e(9588).then(r.bind(r,9588)))),PaymentError:(0,o.lazy)((()=>r.e(7918).then(r.bind(r,7918)))),CheckWithCircle:(0,o.lazy)((()=>r.e(1924).then(r.bind(r,1924)))),WarningWithCircle:(0,o.lazy)((()=>r.e(3724).then(r.bind(r,3724)))),WarningFilled:(0,o.lazy)((()=>r.e(160).then(r.bind(r,160)))),InfoFilled:(0,o.lazy)((()=>r.e(7088).then(r.bind(r,7088)))),HeartFilled:(0,o.lazy)((()=>r.e(832).then(r.bind(r,832)))),Trash:(0,o.lazy)((()=>r.e(3692).then(r.bind(r,3692))))};function u(e){var{source:t,size:r="24",stroke:l="2",viewBox:u="0 0 24 24",className:p}=e,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),d="string"==typeof t?s[t]:null,b={className:(0,n.i)(["dropin-icon","dropin-icon--shape-stroke-".concat(l),p]),width:r,height:r,viewBox:u};return(0,i.jsx)(o.Suspense,{fallback:null,children:d?(0,i.jsx)(d,c(c({},f),b)):(0,i.jsx)(t,c(c({},f),b))})}},8884:(e,t,r)=>{r.d(t,{i:()=>n});var n=e=>e.reduce(((e,t)=>{if(!t)return e;if("string"==typeof t&&(e+=" ".concat(t)),Array.isArray(t)){var[r,n]=t;r&&n&&(e+=" ".concat(r))}return e}),"").trim()},4496:(e,t,r)=>{r.d(t,{o:()=>c});var n=r(8884),o=r(5092),i=["node"];function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],(o="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o))?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){var{node:t}=e,r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i);return t?Array.isArray(t)?(0,o.jsx)(o.Fragment,{children:t.map(((e,t)=>(0,o.jsx)(c,l({node:e,className:r.className},r),t)))}):(r.className=(0,n.i)([t.props.className,r.className]),(0,o.jsx)(t.type,l(l({ref:t.ref},t.props),r),t.key)):null}},7892:(e,t,r)=>{r.d(t,{_:()=>h});var n=r(6528),o=r(8300),i=r(8122),a=r(8884),l=r(4496),c=r(1966),s=r(7684),u=r(8612),p=r(5092),f=["className","variant","icon","message","onDismiss","action"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],(o="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o))?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=e=>{var{className:t,variant:r,icon:n,message:i,onDismiss:d,action:v}=e,y=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,f),_=(0,o.cF)({dismiss:"Dropin.InlineAlert.dismissLabel"});return(0,p.jsxs)("div",b(b({},y),{},{className:(0,a.i)([t,"dropin-alert-banner","dropin-alert-banner--".concat(r)]),children:[(0,p.jsxs)("div",{className:"dropin-alert-banner__content",children:[n&&(0,p.jsx)(l.o,{node:n,"aria-hidden":"true",className:"dropin-alert-banner__icon"}),(0,p.jsx)(l.o,{node:i,className:(0,a.i)(["dropin-alert-banner__message"])})]}),(0,p.jsxs)("div",{className:"dropin-alert-banner__actions",children:[v&&(0,p.jsx)(c.q,{variant:"tertiary",className:"dropin-alert-banner__action",onClick:v.onClick,"aria-label":v.label,children:v.label}),(0,p.jsx)(c.q,{icon:(0,p.jsx)(s.G,{source:u.default,size:"24",stroke:"2"}),className:"dropin-alert-banner__dismiss-button",variant:"primary",onClick:d,"aria-label":_.dismiss})]})]}))},y=r(160);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],(o="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o))?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=e=>{var[t,r]=(0,n.useState)(!1);(0,n.useEffect)((()=>{var e=i.events.on("error",(e=>{"checkout"===(null==e?void 0:e.source)&&"network"===(null==e?void 0:e.type)&&r(!0)}));return()=>{null==e||e.off()}}),[]);var a=(0,o.cF)({message:"Checkout.ErrorBanner.genericMessage",label:"Checkout.ErrorBanner.dismissLabel"});return t?(0,p.jsx)(v,m(m({},e),{},{"data-testid":"error-banner",icon:(0,p.jsx)(s.G,{source:y.default}),message:(0,p.jsx)("span",{children:a.message}),onDismiss:()=>{r(!1)},variant:"warning"})):null}},3856:(e,t,r)=>{r.d(t,{_:()=>n._,c:()=>n._});var n=r(7892)},8122:(t,r,n)=>{var o,i;t.exports=(o={events:()=>e.events},i={},n.d(i,o),i)},6528:(e,r,n)=>{var o,i;e.exports=(o={Suspense:()=>t.Suspense,createContext:()=>t.createContext,forwardRef:()=>t.forwardRef,lazy:()=>t.lazy,useCallback:()=>t.useCallback,useContext:()=>t.useContext,useEffect:()=>t.useEffect,useImperativeHandle:()=>t.useImperativeHandle,useMemo:()=>t.useMemo,useRef:()=>t.useRef,useState:()=>t.useState},i={},n.d(i,o),i)},2720:(e,t,n)=>{var o,i;e.exports=(o={useCallback:()=>r.useCallback,useContext:()=>r.useContext,useDebugValue:()=>r.useDebugValue,useEffect:()=>r.useEffect,useId:()=>r.useId,useImperativeHandle:()=>r.useImperativeHandle,useLayoutEffect:()=>r.useLayoutEffect,useMemo:()=>r.useMemo,useReducer:()=>r.useReducer,useRef:()=>r.useRef,useState:()=>r.useState},i={},n.d(i,o),i)},6168:(e,t,r)=>{var o,i;e.exports=(o={Fragment:()=>n.Fragment,jsx:()=>n.jsx,jsxs:()=>n.jsxs},i={},r.d(i,o),i)},7320:(e,t,r)=>{var n,i;e.exports=(n={Component:()=>o.Component,Fragment:()=>o.Fragment,cloneElement:()=>o.cloneElement,createContext:()=>o.createContext,createElement:()=>o.createElement,createRef:()=>o.createRef,h:()=>o.h,hydrate:()=>o.hydrate,isValidElement:()=>o.isValidElement,options:()=>o.options,render:()=>o.render,toChildArray:()=>o.toChildArray},i={},r.d(i,n),i)}};import i from"../runtime.js";import*as a from"../4392.js";i.C(a);import*as l from"./ErrorBanner.js";i.C(l);var c=(3856,i(i.s=3856)),s=c._,u=c.c;export{s as ErrorBanner,u as default};