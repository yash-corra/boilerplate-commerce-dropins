export const id=152;export const ids=[152];export const modules={5840:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>UIContext,C:()=>UIProvider_UIProvider_UIProvider});var preact_compat_js_=__webpack_require__(6528),cjs=__webpack_require__(8528),cjs_default=__webpack_require__.n(cjs),classes=__webpack_require__(8884);const en_US_namespaceObject=JSON.parse('{"Dropin":{"ExampleComponentName":{"item":{"label":"string"}},"Incrementer":{"decreaseLabel":"Decrease Quantity","increaseLabel":"Increase Quantity","label":"Quantity"},"Modal":{"Close":{"label":"Close"}},"InlineAlert":{"dismissLabel":"Dismiss Alert"},"PriceSummary":{"subTotal":{"label":"Subtotal","withTaxes":"Including taxes"},"shipping":{"label":"Shipping","editZipAction":"Apply","estimated":"Estimated Shipping","estimatedDestination":"Estimated Shipping to ","destinationLinkAriaLabel":"Change destination","zipPlaceholder":"Zip Code","withTaxes":"Including taxes","alternateField":{"zip":"Estimate using country/zip","state":"Estimate using country/state"}},"taxes":{"total":"Tax Total","totalOnly":"Tax","breakdown":"Taxes","showBreakdown":"Show Tax Breakdown","hideBreakdown":"Hide Tax Breakdown","estimated":"Estimated Tax"},"total":{"estimated":"Estimated Total","label":"Total","withoutTax":"Total excluding taxes"}},"ProgressSpinner":{"updating":{"label":"Item is updating"},"updatingChildren":{"label":"Items are updating"}},"PriceRange":{"from":{"label":"From"},"to":{"label":"to"},"asLowAs":{"label":"As low as"}},"Swatches":{"outOfStock":{"label":"out of stock swatch"},"selected":{"label":"swatch selected"},"swatch":{"label":"swatch"}},"Accordion":{"open":{"label":"Open"},"close":{"label":"Close"}},"CartItem":{"each":{"label":"each"},"quantity":{"label":"Quantity"},"remove":{"label":"Remove {product} from the cart"},"removeDefault":{"label":"Remove item from the cart"},"taxIncluded":{"label":"incl. VAT"},"updating":{"label":"{product} is updating"}}}}');var preact_i18n_esm=__webpack_require__(8300),definition={default:en_US_namespaceObject,en_US:en_US_namespaceObject},injectStylesIntoStyleTag=__webpack_require__(5536),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__(7008),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__(1496),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__(9356),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__(9904),insertStyleElement_default=__webpack_require__.n(insertStyleElement),UIProvider=__webpack_require__(3040),options={attributes:{"data-dropin":"storefront-cart","data-sdk":"0.21.2"}};options.styleTagTransform=function(css,style){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core,sdk}=function(css,style){const core=css?.match(/^\.dropin-(\w+)/)?.[1],sdk=style.getAttribute("data-sdk");return{core,sdk}}(css,style),key=core?`sdk/${core}`:style.getAttribute("data-dropin");!function(style,key){style.setAttribute("data-dropin",key),style.removeAttribute("data-sdk")}(style,key);const cached=window._loadedStyles[key];cached?function(css,style,sdk,cached){const latest=function(version1,version2){const parseVersion=version=>{const[versionNumber,preRelease]=version.split("-"),[major,minor,patch]=versionNumber.split(".").map(Number),preReleaseParts=preRelease?preRelease.match(/(alpha|beta)(\d*)/):null;return{major,minor,patch,preType:preReleaseParts?preReleaseParts[1]:"",preNumber:preReleaseParts?parseInt(preReleaseParts[2],10):0}},v1=parseVersion(version1),v2=parseVersion(version2);if(v1.major!==v2.major)return v1.major>v2.major?version1:version2;if(v1.minor!==v2.minor)return v1.minor>v2.minor?version1:version2;if(v1.patch!==v2.patch)return v1.patch>v2.patch?version1:version2;if(v1.preType&&v2.preType)return v1.preType===v2.preType?v1.preNumber>v2.preNumber?version1:version2:"beta"===v1.preType?version2:version1;return v1.preType?version2:version1}(sdk,cached.sdk);if(!cached.core||cached.core&&latest===cached.sdk){const prev=cached.style.textContent;cached.style.textContent=`${prev}\n/* --- MERGED --- */\n${css}`}else cached.core&&latest!==cached.sdk&&(cached.style.textContent=`/* --- UPGRADED --- */\n${css}`);style.remove()}(css,style,sdk,cached):(function(css,style,core,sdk,key){style.textContent=css,window._loadedStyles[key]={sdk,core,style}}(css,style,core,sdk,key),function(style,core){const parent=document.querySelector("head"),{lastDropinStyleInjected,lastSDKStyleInjected}=window._loadedStyles;core?(lastSDKStyleInjected?parent.insertBefore(style,lastSDKStyleInjected.nextSibling):parent.insertBefore(style,parent.firstChild),window._loadedStyles.lastSDKStyleInjected=style):(lastDropinStyleInjected?parent.insertBefore(style,lastDropinStyleInjected.nextSibling):lastSDKStyleInjected?parent.insertBefore(style,lastSDKStyleInjected.nextSibling):parent.insertBefore(style,parent.firstChild),window._loadedStyles.lastDropinStyleInjected=style)}(style,core))}),0)},options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(UIProvider.c,options);UIProvider.c&&UIProvider.c.locals&&UIProvider.c.locals;var normalize=__webpack_require__(4044),normalize_options={attributes:{"data-dropin":"storefront-cart","data-sdk":"0.21.2"}};normalize_options.styleTagTransform=function(css,style){setTimeout((()=>{window.window._loadedStyles=window.window._loadedStyles??{};const{core,sdk}=function(css,style){const core=css?.match(/^\.dropin-(\w+)/)?.[1],sdk=style.getAttribute("data-sdk");return{core,sdk}}(css,style),key=core?`sdk/${core}`:style.getAttribute("data-dropin");!function(style,key){style.setAttribute("data-dropin",key),style.removeAttribute("data-sdk")}(style,key);const cached=window._loadedStyles[key];cached?function(css,style,sdk,cached){const latest=function(version1,version2){const parseVersion=version=>{const[versionNumber,preRelease]=version.split("-"),[major,minor,patch]=versionNumber.split(".").map(Number),preReleaseParts=preRelease?preRelease.match(/(alpha|beta)(\d*)/):null;return{major,minor,patch,preType:preReleaseParts?preReleaseParts[1]:"",preNumber:preReleaseParts?parseInt(preReleaseParts[2],10):0}},v1=parseVersion(version1),v2=parseVersion(version2);if(v1.major!==v2.major)return v1.major>v2.major?version1:version2;if(v1.minor!==v2.minor)return v1.minor>v2.minor?version1:version2;if(v1.patch!==v2.patch)return v1.patch>v2.patch?version1:version2;if(v1.preType&&v2.preType)return v1.preType===v2.preType?v1.preNumber>v2.preNumber?version1:version2:"beta"===v1.preType?version2:version1;return v1.preType?version2:version1}(sdk,cached.sdk);if(!cached.core||cached.core&&latest===cached.sdk){const prev=cached.style.textContent;cached.style.textContent=`${prev}\n/* --- MERGED --- */\n${css}`}else cached.core&&latest!==cached.sdk&&(cached.style.textContent=`/* --- UPGRADED --- */\n${css}`);style.remove()}(css,style,sdk,cached):(function(css,style,core,sdk,key){style.textContent=css,window._loadedStyles[key]={sdk,core,style}}(css,style,core,sdk,key),function(style,core){const parent=document.querySelector("head"),{lastDropinStyleInjected,lastSDKStyleInjected}=window._loadedStyles;core?(lastSDKStyleInjected?parent.insertBefore(style,lastSDKStyleInjected.nextSibling):parent.insertBefore(style,parent.firstChild),window._loadedStyles.lastSDKStyleInjected=style):(lastDropinStyleInjected?parent.insertBefore(style,lastDropinStyleInjected.nextSibling):lastSDKStyleInjected?parent.insertBefore(style,lastSDKStyleInjected.nextSibling):parent.insertBefore(style,parent.firstChild),window._loadedStyles.lastDropinStyleInjected=style)}(style,core))}),0)},normalize_options.setAttributes=setAttributesWithAttributesAndNonce_default(),normalize_options.insert=insertBySelector_default().bind(null,"head"),normalize_options.domAPI=styleDomAPI_default(),normalize_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(normalize.c,normalize_options);normalize.c&&normalize.c.locals&&normalize.c.locals;var jsx_runtime=__webpack_require__(9888),_excluded=["lang","langDefinitions","className","children"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){var i;return(key="symbol"==typeof(i=function(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(key,"string"))?i:String(i))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var UIContext=(0,preact_compat_js_.createContext)({locale:"en-US"}),UIProvider_UIProvider_UIProvider=_ref=>{var{lang="en_US",langDefinitions={},className,children}=_ref,props=_objectWithoutProperties(_ref,_excluded),definitions=(0,preact_compat_js_.useMemo)((()=>{var _langDefinitions$lang,selectedDefinitions=cjs_default()(langDefinitions.default,null!==(_langDefinitions$lang=langDefinitions[lang])&&void 0!==_langDefinitions$lang?_langDefinitions$lang:{});return cjs_default()((lang=>cjs_default()(definition.default,definition[lang]||{}))(lang),selectedDefinitions)}),[lang,langDefinitions]),locale=lang.replace("_","-");return(0,jsx_runtime.im)(UIContext.Provider,{value:{locale},children:(0,jsx_runtime.im)(preact_i18n_esm.us,{definition:definitions,children:(0,jsx_runtime.im)("div",_objectSpread(_objectSpread({},props),{},{className:(0,classes.i)(["dropin-design",className]),children}))})})}},8884:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>classes});var classes=classes=>classes.reduce(((result,item)=>{if(!item)return result;if("string"==typeof item&&(result+=" ".concat(item)),Array.isArray(item)){var[className,isActive]=item;className&&isActive&&(result+=" ".concat(className))}return result}),"").trim()},4496:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>VComponent});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8884),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9888),_excluded=["node"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){var i;return(key="symbol"==typeof(i=function(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(key,"string"))?i:String(i))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function VComponent(_ref){var{node}=_ref,props=_objectWithoutProperties(_ref,_excluded);return node?Array.isArray(node)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.im)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.ae,{children:node.map(((n,key)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.im)(VComponent,_objectSpread({node:n,className:props.className},props),key)))}):(props.className=(0,___WEBPACK_IMPORTED_MODULE_1__.i)([node.props.className,props.className]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.im)(node.type,_objectSpread(_objectSpread({ref:node.ref},node.props),props),node.key)):null}},3040:(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _storefront_cart_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6008),_storefront_cart_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_storefront_cart_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_storefront_cart_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2076),___CSS_LOADER_EXPORT___=__webpack_require__.n(_storefront_cart_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_storefront_cart_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dropin-design{\n  --color-brand-500:#454545;\n  --color-brand-600:#383838;\n  --color-brand-700:#2b2b2b;\n  --color-neutral-50:#ffffff;\n  --color-neutral-100:#fafafa;\n  --color-neutral-200:#f5f5f5;\n  --color-neutral-300:#e8e8e8;\n  --color-neutral-400:#d6d6d6;\n  --color-neutral-500:#b8b8b8;\n  --color-neutral-600:#8f8f8f;\n  --color-neutral-700:#666666;\n  --color-neutral-800:#3d3d3d;\n  --color-neutral-900:#292929;\n  --color-positive-200:#eff5ef;\n  --color-positive-500:#7fb078;\n  --color-positive-800:#53824c;\n  --color-informational-200:#eeeffb;\n  --color-informational-500:#6978d9;\n  --color-informational-800:#5d6dd6;\n  --color-warning-200:#fdf3e9;\n  --color-warning-500:#e79f5c;\n  --color-warning-800:#ad5c00;\n  --color-alert-200:#ffebeb;\n  --color-alert-500:#db7070;\n  --color-alert-800:#bf4545;\n  --color-opacity-16:rgba(255, 255, 255, 0.16);\n  --color-opacity-24:rgba(255, 255, 255, 0.24);\n  --color-action-button-active:#ffffff;\n  --color-action-button-hover:#e8e8e8;\n  --color-button-active:#2b2b2b;\n  --color-button-focus:#d6d6d6;\n  --color-button-hover:#383838;\n  --grid-1-columns:4;\n  --grid-1-margins:0;\n  --grid-1-gutters:16px;\n  --grid-2-columns:12;\n  --grid-2-margins:0;\n  --grid-2-gutters:16px;\n  --grid-3-columns:12;\n  --grid-3-margins:0;\n  --grid-3-gutters:24px;\n  --grid-4-columns:12;\n  --grid-4-margins:0;\n  --grid-4-gutters:24px;\n  --grid-5-columns:12;\n  --grid-5-margins:0;\n  --grid-5-gutters:24px;\n  --shape-border-radius-1:3px;\n  --shape-border-radius-2:8px;\n  --shape-border-radius-3:24px;\n  --shape-border-width-1:1px;\n  --shape-border-width-2:1.5px;\n  --shape-border-width-3:2px;\n  --shape-border-width-4:4px;\n  --shape-shadow-1:0 0 16px 0 rgba(0, 0, 0, 0.16);\n  --shape-shadow-2:0 2px 16px 0 rgba(0, 0, 0, 0.16);\n  --shape-shadow-3:0 2px 3px 0 rgba(0, 0, 0, 0.16);\n  --shape-icon-stroke-1:1px;\n  --shape-icon-stroke-2:1.5px;\n  --shape-icon-stroke-3:2px;\n  --shape-icon-stroke-4:4px;\n  --spacing-xxsmall:4px;\n  --spacing-xsmall:8px;\n  --spacing-small:16px;\n  --spacing-medium:24px;\n  --spacing-big:32px;\n  --spacing-xbig:40px;\n  --spacing-xxbig:48px;\n  --spacing-large:64px;\n  --spacing-xlarge:72px;\n  --spacing-xxlarge:96px;\n  --spacing-huge:120px;\n  --spacing-xhuge:144px;\n  --spacing-xxhuge:192px;\n  --type-base-font-family:system-ui, sans-serif;\n  --type-display-1-font:normal normal 300 60px/72px var(--type-base-font-family);\n  --type-display-1-letter-spacing:0.04em;\n  --type-display-2-font:normal normal 300 48px/56px var(--type-base-font-family);\n  --type-display-2-letter-spacing:0.04em;\n  --type-display-3-font:normal normal 300 34px/40px var(--type-base-font-family);\n  --type-display-3-letter-spacing:0.04em;\n  --type-headline-1-font:normal normal 400 24px/32px var(--type-base-font-family);\n  --type-headline-1-letter-spacing:0.04em;\n  --type-headline-2-default-font:normal normal 300 20px/24px var(--type-base-font-family);\n  --type-headline-2-default-letter-spacing:0.04em;\n  --type-headline-2-strong-font:normal normal 400 20px/24px var(--type-base-font-family);\n  --type-headline-2-strong-letter-spacing:0.04em;\n  --type-body-1-default-font:normal normal 300 16px/24px var(--type-base-font-family);\n  --type-body-1-default-letter-spacing:0.04em;\n  --type-body-1-strong-font:normal normal 400 16px/24px var(--type-base-font-family);\n  --type-body-1-strong-letter-spacing:0.04em;\n  --type-body-1-emphasized-font:normal normal 700 16px/24px var(--type-base-font-family);\n  --type-body-1-emphasized-letter-spacing:0.04em;\n  --type-body-2-default-font:normal normal 300 14px/20px var(--type-base-font-family);\n  --type-body-2-default-letter-spacing:0.04em;\n  --type-body-2-strong-font:normal normal 400 14px/20px var(--type-base-font-family);\n  --type-body-2-strong-letter-spacing:0.04em;\n  --type-body-2-emphasized-font:normal normal 700 14px/20px var(--type-base-font-family);\n  --type-body-2-emphasized-letter-spacing:0.04em;\n  --type-button-1-font:normal normal 400 20px/26px var(--type-base-font-family);\n  --type-button-1-letter-spacing:0.08em;\n  --type-button-2-font:normal normal 400 16px/24px var(--type-base-font-family);\n  --type-button-2-letter-spacing:0.08em;\n  --type-details-caption-1-font:normal normal 400 12px/16px var(--type-base-font-family);\n  --type-details-caption-1-letter-spacing:0.08em;\n  --type-details-caption-2-font:normal normal 300 12px/16px var(--type-base-font-family);\n  --type-details-caption-2-letter-spacing:0.08em;\n  --type-details-overline-font:normal normal 700 12px/20px var(--type-base-font-family);\n  --type-details-overline-letter-spacing:0.16em;\n}\n",""]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},4044:(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>__WEBPACK_DEFAULT_EXPORT__});var _storefront_cart_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6008),_storefront_cart_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_storefront_cart_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_storefront_cart_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2076),___CSS_LOADER_EXPORT___=__webpack_require__.n(_storefront_cart_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_storefront_cart_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dropin-design a{\n  --textColor:var(--color-brand-500);\n  color:var(--textColor);\n  text-decoration:none;\n}\n\n.dropin-design a:hover{\n  --textColor:var(--color-brand-700);\n  text-decoration:solid underline var(--textColor);\n  text-underline-offset:6px;\n}\n\n.dropin-design a:focus-visible{\n  outline:solid var(--shape-border-width-4) var(--color-neutral-400);\n  border:var(--shape-border-width-1) solid var(--color-neutral-800);\n  border-radius:var(--shape-border-radius-1);\n}\n",""]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}};