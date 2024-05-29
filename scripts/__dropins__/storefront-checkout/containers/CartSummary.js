import*as t from"@dropins/tools/event-bus.js";import*as e from"@dropins/tools/fetch-graphql.js";export const id=6784;export const ids=[6784,4424];export const modules={4424:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var r,i,a=n(2796);function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}const s=function(t){return a.kv("svg",o({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),r||(r=a.kv("path",{vectorEffect:"non-scaling-stroke",d:"M.75 12C.75 5.784 5.784.75 12 .75S23.25 5.784 23.25 12 18.216 23.25 12 23.25.75 18.216.75 12Z",stroke:"currentColor"})),i||(i=a.kv("path",{vectorEffect:"non-scaling-stroke",d:"M11.75 5.884V4.75h.5v1.134l-.201 7.187h-.098l-.201-7.187Zm.05 12.366v-1.263h.425v1.263H11.8Z",stroke:"currentColor"})))}},3720:(t,e,n)=>{n.d(e,{G:()=>S});var r=n(4944),i=n(2796),a=n(5536),o=n.n(a),s=n(7008),l=n.n(s),p=n(1496),c=n.n(p),d=n(9356),u=n.n(d),h=n(9904),y=n.n(h),f=n(4480),g={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.23.0-alpha1067"},styleTagTransform:function(t,e){window._loadedStyles=window._loadedStyles??{};const n=t?.match(/^\.dropin-(\w+)/)?.[1],r=e.getAttribute("data-sdk"),i=n?`sdk/${n}`:e.getAttribute("data-dropin");e.setAttribute("data-dropin",i),e.removeAttribute("data-sdk");const a=window._loadedStyles[i];if(a){const i=function(t,e){const[n,r]=t.split("-"),[i,a]=e.split("-"),o=[...n.split("."),r],s=[...i.split("."),a],l=parseInt(o[0],10),p=parseInt(s[0],10);if(l!==p)return l>p?t:e;const c=parseInt(o[1],10),d=parseInt(s[1],10);if(c!==d)return c>d?t:e;const u=parseInt(o[2],10),h=parseInt(s[2],10);if(u!==h)return u>h?t:e;if(o[3]&&s[3]){const n=/(alpha|beta)(.*)/,r=o[3].match(n),i=s[3].match(n),a=r[1],l=i[1],p=parseInt(r[2],10),c=parseInt(i[2],10);if(a===l)return p>c?t:e;if("alpha"===a&&"beta"===l)return e;if("beta"===a&&"alpha"===l)return t}return o[3]?e:t}(r,a.sdk);if(!n||n&&i===a.sdk){const e=a.style.textContent;a.style.textContent=`${e}\n/* --- MERGED --- */\n${t}`}else n&&i!==a.sdk&&(a.style.textContent=`/* --- UPGRADED --- */\n${t}`);return void e.remove()}e.textContent=t,window._loadedStyles[i]={sdk:r,core:n,style:e};const o=document.querySelector("head"),{lastDropinStyleInjected:s,lastSDKStyleInjected:l}=window._loadedStyles;n?(l?o.insertBefore(e,l.nextSibling):o.insertBefore(e,o.firstChild),window._loadedStyles.lastSDKStyleInjected=e):(s?o.insertBefore(e,s.nextSibling):l?o.insertBefore(e,l.nextSibling):o.insertBefore(e,o.firstChild),window._loadedStyles.lastDropinStyleInjected=e)}};g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=y();o()(f.c,g);f.c&&f.c.locals&&f.c.locals;var m=n(8412),b=["source","size","stroke","viewBox","className"];function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e,n){var r;return(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function C(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var w={Add:(0,i.Wk)((()=>n.e(1600).then(n.bind(n,1600)))),Bulk:(0,i.Wk)((()=>n.e(3180).then(n.bind(n,3180)))),Burger:(0,i.Wk)((()=>n.e(3728).then(n.bind(n,3728)))),Cart:(0,i.Wk)((()=>n.e(5008).then(n.bind(n,5008)))),Check:(0,i.Wk)((()=>n.e(9772).then(n.bind(n,9772)))),ChevronDown:(0,i.Wk)((()=>n.e(1680).then(n.bind(n,1680)))),ChevronUp:(0,i.Wk)((()=>n.e(844).then(n.bind(n,844)))),ChevronRight:(0,i.Wk)((()=>n.e(8824).then(n.bind(n,8824)))),Close:(0,i.Wk)((()=>n.e(2543).then(n.bind(n,2543)))),Heart:(0,i.Wk)((()=>n.e(9176).then(n.bind(n,9176)))),Minus:(0,i.Wk)((()=>n.e(1268).then(n.bind(n,1268)))),Placeholder:(0,i.Wk)((()=>n.e(8868).then(n.bind(n,8868)))),PlaceholderFilled:(0,i.Wk)((()=>n.e(5488).then(n.bind(n,5488)))),Search:(0,i.Wk)((()=>n.e(3764).then(n.bind(n,3764)))),SearchFilled:(0,i.Wk)((()=>n.e(6820).then(n.bind(n,6820)))),Sort:(0,i.Wk)((()=>n.e(3832).then(n.bind(n,3832)))),Star:(0,i.Wk)((()=>n.e(3836).then(n.bind(n,3836)))),View:(0,i.Wk)((()=>n.e(7524).then(n.bind(n,7524)))),User:(0,i.Wk)((()=>n.e(3996).then(n.bind(n,3996)))),Warning:(0,i.Wk)((()=>n.e(4004).then(n.bind(n,4004)))),Locker:(0,i.Wk)((()=>n.e(2388).then(n.bind(n,2388)))),Wallet:(0,i.Wk)((()=>n.e(8220).then(n.bind(n,8220)))),Card:(0,i.Wk)((()=>n.e(664).then(n.bind(n,664)))),Order:(0,i.Wk)((()=>n.e(3916).then(n.bind(n,3916)))),Delivery:(0,i.Wk)((()=>n.e(9948).then(n.bind(n,2328)))),OrderError:(0,i.Wk)((()=>n.e(984).then(n.bind(n,984)))),OrderSuccess:(0,i.Wk)((()=>n.e(2920).then(n.bind(n,2920)))),PaymentError:(0,i.Wk)((()=>n.e(9940).then(n.bind(n,9940)))),CheckWithCircle:(0,i.Wk)((()=>n.e(1604).then(n.bind(n,1604)))),WarningWithCircle:(0,i.Wk)((()=>n.e(4424).then(n.bind(n,4424)))),WarningFilled:(0,i.Wk)((()=>n.e(1176).then(n.bind(n,1176)))),InfoFilled:(0,i.Wk)((()=>n.e(6484).then(n.bind(n,6484)))),HeartFilled:(0,i.Wk)((()=>n.e(488).then(n.bind(n,488)))),Trash:(0,i.Wk)((()=>n.e(5476).then(n.bind(n,5476))))};function S(t){var{source:e,size:n="24",stroke:a="2",viewBox:o="0 0 24 24",className:s}=t,l=C(t,b),p="string"==typeof e?w[e]:null,c={className:(0,r.i)(["dropin-icon","dropin-icon--shape-stroke-".concat(a),s]),width:n,height:n,viewBox:o};return(0,m.im)(i.G0,{fallback:null,children:p?(0,m.im)(p,v(v({},l),c)):(0,m.im)(e,v(v({},l),c))})}},2780:(t,e,n)=>{n.d(e,{C:()=>r});var r=(t,e)=>{var n;return function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];clearTimeout(n),n=setTimeout((()=>t.apply(this,i)),e)}}},1044:(t,e,n)=>{n.d(e,{o:()=>c});var r=n(4944),i=n(8412),a=["node"];function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){var r;return(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?r:String(r))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function c(t){var{node:e}=t,n=p(t,a);return e?Array.isArray(e)?(0,i.im)(i.ae,{children:e.map(((t,e)=>(0,i.im)(c,s({node:t,className:n.className},n),e)))}):(n.className=(0,r.i)([e.props.className,n.className]),(0,i.im)(e.type,s(s({ref:e.ref},e.props),n),e.key)):null}},1036:(t,e,n)=>{n.d(e,{a:()=>h});var r=n(3584),i=n(5912),a=n(2256),o=n(4723),s=n(2148);function l(t){return 1===t?o.m.ExcludingTax:2===t?o.m.IncludingTax:3===t?o.m.IncludingAndExcludingTax:o.m.ExcludingTax}function p(t){switch(t){case i.ow.DisplayExcludingTax:return o.m.ExcludingTax;case i.ow.DisplayIncludingTax:return o.m.IncludingTax;case i.ow.DisplayTypeBoth:return o.m.IncludingAndExcludingTax}}var c=n(764),d=n(1092);function u(t,e,n,r,i,a,o){try{var s=t[a](o),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(r,i)}var h=function(){var t,e=(t=function*(){return(0,r.CA)("\n  query getStoreConfig {\n    storeConfig {\n      cart_summary_display_quantity\n      countries_with_required_region\n      default_country\n      display_state_if_optional\n      is_guest_checkout_enabled\n      is_one_page_checkout_enabled\n      locale\n      max_items_in_order_summary\n      optional_zip_countries\n      shopping_cart_display_full_summary\n      shopping_cart_display_grand_total\n      shopping_cart_display_price\n      shopping_cart_display_shipping\n      shopping_cart_display_subtotal\n      shopping_cart_display_tax_gift_wrapping\n      shopping_cart_display_zero_tax\n      store_code\n    }\n  }\n",{method:"GET",cache:"no-cache"}).then((t=>{var{data:e,errors:n}=t;return(0,c.Y)(n),function(t){if(!t)return a.IJ;var e,{default_country:n,countries_with_required_region:r,display_state_if_optional:i,optional_zip_countries:c,is_guest_checkout_enabled:d,is_one_page_checkout_enabled:u,shopping_cart_display_price:h,shopping_cart_display_shipping:y,shopping_cart_display_subtotal:f,shopping_cart_display_tax_gift_wrapping:g,shopping_cart_display_grand_total:m,shopping_cart_display_full_summary:b,shopping_cart_display_zero_tax:_,max_items_in_order_summary:v,cart_summary_display_quantity:k}=t;return{defaultCountry:n||a.IJ.defaultCountry,countriesWithRequiredRegion:(null==r?void 0:r.split(","))||a.IJ.countriesWithRequiredRegion,displayStateIfOptional:i||a.IJ.displayStateIfOptional,countriesWithOptionalZipCode:(null==c?void 0:c.split(","))||a.IJ.countriesWithOptionalZipCode,isGuestCheckoutEnabled:d||a.IJ.isGuestCheckoutEnabled,isOnePageCheckoutEnabled:u||a.IJ.isOnePageCheckoutEnabled,taxCartDisplay:{shoppingCartDisplayPrice:h?l(h):a.IJ.taxCartDisplay.shoppingCartDisplayPrice,shoppingCartDisplayShipping:y?l(y):a.IJ.taxCartDisplay.shoppingCartDisplayShipping,shoppingCartDisplaySubtotal:f?l(f):a.IJ.taxCartDisplay.shoppingCartDisplaySubtotal,shoppingCartDisplayGiftWrapping:g?p(g):a.IJ.taxCartDisplay.shoppingCartDisplayGiftWrapping,shoppingCartDisplayGrandTotal:m||a.IJ.taxCartDisplay.shoppingCartDisplayGrandTotal,shoppingCartDisplayFullSummary:b||a.IJ.taxCartDisplay.shoppingCartDisplayFullSummary,shoppingCartDisplayZeroTax:_||a.IJ.taxCartDisplay.shoppingCartDisplayZeroTax},cartSummaryMaxItems:v||a.IJ.cartSummaryMaxItems,cartSummaryTotalDisplay:(0,s.q)(k)?a.IJ.cartSummaryTotalDisplay:(e=k,0===e?o.E.Rows:o.E.Quantity)}}(null==e?void 0:e.storeConfig)})).catch(d.i)},function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){u(a,r,i,o,s,"next",t)}function s(t){u(a,r,i,o,s,"throw",t)}o(void 0)}))});return function(){return e.apply(this,arguments)}}()},2216:(t,e,n)=>{n.d(e,{_:()=>g});var r=n(5536),i=n.n(r),a=n(7008),o=n.n(a),s=n(1496),l=n.n(s),p=n(9356),c=n.n(p),d=n(9904),u=n.n(d),h=n(7696),y={attributes:{"data-dropin":"storefront-checkout","data-sdk":"0.23.0-alpha1067"},styleTagTransform:function(t,e){window._loadedStyles=window._loadedStyles??{};const n=t?.match(/^\.dropin-(\w+)/)?.[1],r=e.getAttribute("data-sdk"),i=n?`sdk/${n}`:e.getAttribute("data-dropin");e.setAttribute("data-dropin",i),e.removeAttribute("data-sdk");const a=window._loadedStyles[i];if(a){const i=function(t,e){const[n,r]=t.split("-"),[i,a]=e.split("-"),o=[...n.split("."),r],s=[...i.split("."),a],l=parseInt(o[0],10),p=parseInt(s[0],10);if(l!==p)return l>p?t:e;const c=parseInt(o[1],10),d=parseInt(s[1],10);if(c!==d)return c>d?t:e;const u=parseInt(o[2],10),h=parseInt(s[2],10);if(u!==h)return u>h?t:e;if(o[3]&&s[3]){const n=/(alpha|beta)(.*)/,r=o[3].match(n),i=s[3].match(n),a=r[1],l=i[1],p=parseInt(r[2],10),c=parseInt(i[2],10);if(a===l)return p>c?t:e;if("alpha"===a&&"beta"===l)return e;if("beta"===a&&"alpha"===l)return t}return o[3]?e:t}(r,a.sdk);if(!n||n&&i===a.sdk){const e=a.style.textContent;a.style.textContent=`${e}\n/* --- MERGED --- */\n${t}`}else n&&i!==a.sdk&&(a.style.textContent=`/* --- UPGRADED --- */\n${t}`);return void e.remove()}e.textContent=t,window._loadedStyles[i]={sdk:r,core:n,style:e};const o=document.querySelector("head"),{lastDropinStyleInjected:s,lastSDKStyleInjected:l}=window._loadedStyles;n?(l?o.insertBefore(e,l.nextSibling):o.insertBefore(e,o.firstChild),window._loadedStyles.lastSDKStyleInjected=e):(s?o.insertBefore(e,s.nextSibling):l?o.insertBefore(e,l.nextSibling):o.insertBefore(e,o.firstChild),window._loadedStyles.lastDropinStyleInjected=e)}};y.setAttributes=c(),y.insert=l().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=u();i()(h.c,y);h.c&&h.c.locals&&h.c.locals;var f=n(8412),g=t=>{var{className:e,children:n,level:r=2}=t,i=r>=1&&r<=6?"h".concat(r):"h2";return(0,f.im)(i,{className:e,children:n})}},6768:(t,e,n)=>{n.d(e,{AB:()=>r.A,EP:()=>r.E,cp:()=>r.E});var r=n(3316)},2256:(t,e,n)=>{n.d(e,{EV:()=>c,IJ:()=>l,o3:()=>d});var r=n(1036),i=n(4723),a=n(304),o=n(8596),s=n(8412),l={defaultCountry:"US",countriesWithRequiredRegion:[],displayStateIfOptional:!1,countriesWithOptionalZipCode:[],isGuestCheckoutEnabled:!1,isOnePageCheckoutEnabled:!1,taxCartDisplay:{shoppingCartDisplayPrice:i.m.ExcludingTax,shoppingCartDisplayShipping:i.m.ExcludingTax,shoppingCartDisplaySubtotal:i.m.ExcludingTax,shoppingCartDisplayGiftWrapping:i.m.ExcludingTax,shoppingCartDisplayGrandTotal:!1,shoppingCartDisplayFullSummary:!1,shoppingCartDisplayZeroTax:!1},cartSummaryMaxItems:10,cartSummaryTotalDisplay:i.E.Quantity},p=(0,a.GY)(void 0),c=t=>{var{children:e}=t,[n,i]=(0,o.oT)();return(0,o.YB)((()=>{(0,r.a)().then((t=>{i(t)})).catch((()=>{console.error("Failed to fetch store config"),i(l)}))}),[]),(0,s.im)(p.Provider,{value:{config:n},children:e})};function d(){var t=(0,o.Co)(p);if(void 0!==t)return t;throw new Error("useStore must be used within a StoreProvider")}},5172:(t,e,n)=>{n.d(e,{s:()=>r,w:()=>i});var r=function(t){return t.InStock="IN_STOCK",t.OutOfStock="OUT_OF_STOCK",t}({}),i=function(t){return t.Simple="SimpleProduct",t.Configurable="ConfigurableProduct",t.Downloadable="DownloadableProduct",t.GiftCard="GiftCardProduct",t.Virtual="VirtualProduct",t.Bundle="BundleProduct",t}({})},4723:(t,e,n)=>{n.d(e,{E:()=>i,m:()=>r});var r=function(t){return t[t.ExcludingTax=1]="ExcludingTax",t[t.IncludingTax=2]="IncludingTax",t[t.IncludingAndExcludingTax=3]="IncludingAndExcludingTax",t}({}),i=function(t){return t[t.Rows=0]="Rows",t[t.Quantity=1]="Quantity",t}({})},764:(t,e,n)=>{n.d(e,{Y:()=>r});var r=t=>{if(t&&0!==t.length)throw Error(t.map((t=>t.message)).join(" "))}},5668:(t,e,n)=>{n.d(e,{cartSignal:()=>r});var r=(0,n(1520).OC)({pending:!1,data:void 0})},4480:(t,e,n)=>{n.d(e,{c:()=>s});var r=n(6008),i=n.n(r),a=n(2076),o=n.n(a)()(i());o.push([t.id,".dropin-icon{\n}\n\n.dropin-icon--shape-stroke-1{\n  stroke-width:var(--shape-icon-stroke-1);\n}\n\n.dropin-icon--shape-stroke-2{\n  stroke-width:var(--shape-icon-stroke-2);\n}\n\n.dropin-icon--shape-stroke-3{\n  stroke-width:var(--shape-icon-stroke-3);\n}\n\n.dropin-icon--shape-stroke-4{\n  stroke-width:var(--shape-icon-stroke-4);\n}\n",""]);const s=o},7696:(t,e,n)=>{n.d(e,{c:()=>s});var r=n(6008),i=n.n(r),a=n(2076),o=n.n(a)()(i());o.push([t.id,"\n",""]);const s=o},8122:(e,n,r)=>{e.exports=(t=>{var e={};return r.d(e,t),e})({events:()=>t.events})},8616:(t,n,r)=>{t.exports=(t=>{var e={};return r.d(e,t),e})({FetchGraphQL:()=>e.FetchGraphQL})}};import n from"../runtime.js";import*as r from"../8412.js";n.C(r);import*as i from"../2892.js";n.C(i);import*as a from"../4928.js";n.C(a);import*as o from"../2956.js";n.C(o);import*as s from"../1424.js";n.C(s);import*as l from"../8668.js";n.C(l);import*as p from"../3316.js";n.C(p);import*as c from"./CartSummary.js";n.C(c);var d,u=(d=6768,n(n.s=d)),h=u.EP,y=u.cp,f=u.AB;export{h as CartSummary,y as default,f as useCartSummary};