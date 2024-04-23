export const id=2157;export const ids=[2157];export const modules={3532:function(module){module.exports=function(t,n,e,i,o){for(n=n.split?n.split("."):n,i=0;i<n.length;i++)t=t?t[n[i]]:o;return t===o?e:t}},8300:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gg:()=>IntlContext,us:()=>IntlProvider,Mp:()=>Localizer,_q:()=>MarkupText,a:()=>Text,cF:()=>useText});var e,preact_js_=__webpack_require__(7320),preact_compat_js_=__webpack_require__(6528),dlv_umd=__webpack_require__(3532),dlv_umd_default=__webpack_require__.n(dlv_umd),o={};function n(r,t,e){if(3===r.nodeType){var o="textContent"in r?r.textContent:r.nodeValue||"";if(!1!==n.options.trim){var a=0===t||t===e.length-1;if((!(o=o.match(/^[\s\n]+$/g)&&"all"!==n.options.trim?" ":o.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===n.options.trim||a?"":" "))||" "===o)&&e.length>1&&a)return null}return o}if(1!==r.nodeType)return null;var p=String(r.nodeName).toLowerCase();if("script"===p&&!n.options.allowScripts)return null;var l,s,u=n.h(p,function(r){var t=r&&r.length;if(!t)return null;for(var e={},o=0;o<t;o++){var a=r[o],i=a.name,p=a.value;"on"===i.substring(0,2)&&n.options.allowEvents&&(p=new Function(p)),e[i]=p}return e}(r.attributes),(s=(l=r.childNodes)&&Array.prototype.map.call(l,n).filter(i))&&s.length?s:null);return n.visitor&&n.visitor(u),u}var a,i=function(r){return r},p={};function l(r){var t=(r.type||"").toLowerCase(),e=l.map;e&&e.hasOwnProperty(t)?(r.type=e[t],r.props=Object.keys(r.props||{}).reduce((function(t,e){var o;return t[(o=e,o.replace(/-(.)/g,(function(r,t){return t.toUpperCase()})))]=r.props[e],t}),{})):r.type=t.replace(/[^a-z0-9-]/i,"")}const preact_markup_module=function(t){function i(){t.apply(this,arguments)}return t&&(i.__proto__=t),(i.prototype=Object.create(t&&t.prototype)).constructor=i,i.setReviver=function(r){a=r},i.prototype.shouldComponentUpdate=function(r){var t=this.props;return r.wrap!==t.wrap||r.type!==t.type||r.markup!==t.markup},i.prototype.setComponents=function(r){if(this.map={},r)for(var t in r)if(r.hasOwnProperty(t)){var e=t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[e]=r[t]}},i.prototype.render=function(t){var i=t.wrap;void 0===i&&(i=!0);var s,u=t.type,c=t.markup,m=t.components,v=t.reviver,f=t.onError,d=t["allow-scripts"],h=t["allow-events"],y=t.trim,w=function(r,t){var e={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&-1===t.indexOf(o)&&(e[o]=r[o]);return e}(t,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),C=v||this.reviver||this.constructor.prototype.reviver||a||preact_js_.h;this.setComponents(m);var g={allowScripts:d,allowEvents:h,trim:y};try{s=function(r,t,a,i,s){var u=function(r,t){var o,n,a,i,p="html"===t?"text/html":"application/xml";"html"===t?(i="body",a="<!DOCTYPE html>\n<html><body>"+r+"</body></html>"):(i="xml",a='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+r+"</xml>");try{o=(new DOMParser).parseFromString(a,p)}catch(r){n=r}if(o||"html"!==t||((o=e||(e=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var r=document.createElement("iframe");return r.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",r.setAttribute("sandbox","allow-forms"),document.body.appendChild(r),r.contentWindow.document}())).open(),o.write(a),o.close()),o){var l=o.getElementsByTagName(i)[0],s=l.firstChild;return r&&!s&&(l.error="Document parse failed."),s&&"parsererror"===String(s.nodeName).toLowerCase()&&(s.removeChild(s.firstChild),s.removeChild(s.lastChild),l.error=s.textContent||s.nodeValue||n||"Unknown error",l.removeChild(s)),l}}(r,t);if(u&&u.error)throw new Error(u.error);var c=u&&u.body||u;l.map=i||p;var m=c&&function(r,t,e,a){return n.visitor=t,n.h=e,n.options=a||o,n(r)}(c,l,a,s);return l.map=null,m&&m.props&&m.props.children||null}(c,u,C,this.map,g)}catch(r){f?f({error:r}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+r)}if(!1===i)return s||null;var x=w.hasOwnProperty("className")?"className":"class",b=w[x];return b?b.splice?b.splice(0,0,"markup"):"string"==typeof b?w[x]+=" markup":"object"==typeof b&&(b.markup=!0):w[x]="markup",C("div",w,s||null)},i}(preact_js_.Component);var IntlContext=(0,preact_js_.createContext)({intl:{}});function defined(obj){return null!=obj}function preact_i18n_esm_assign(obj,props){for(var i in props)obj[i]=props[i];return obj}function deepAssign(target,source){var out=preact_i18n_esm_assign({},target);for(var i in source)source.hasOwnProperty(i)&&(target[i]&&source[i]&&"object"==typeof target[i]&&"object"==typeof source[i]?out[i]=deepAssign(target[i],source[i]):out[i]=target[i]||source[i]);return out}var URL_FLAG=/[?&#]intl=show/;function IntlProvider(ref){var scope=ref.scope,mark=ref.mark,definition=ref.definition,props=function(obj,exclude){var target={};for(var k in obj)Object.prototype.hasOwnProperty.call(obj,k)&&-1===exclude.indexOf(k)&&(target[k]=obj[k]);return target}(ref,["scope","mark","definition"]),intl=preact_i18n_esm_assign({},(0,preact_compat_js_.useContext)(IntlContext).intl||{});return scope&&(intl.scope=scope),definition&&(intl.dictionary=deepAssign(intl.dictionary||{},definition)),(mark||"undefined"!=typeof location&&String(location).match(URL_FLAG))&&(intl.mark=!0),(0,preact_js_.h)(IntlContext.Provider,{value:{intl}},props.children)}function intl(Child,options){if(arguments.length<2)return options=Child,function(Child){return intl(Child,options)};function IntlProviderWrapper(props){return(0,preact_js_.h)(IntlProvider,options||{},(0,preact_js_.h)(Child,props))}return IntlProviderWrapper.getWrappedComponent=Child&&Child.getWrappedComponent||function(){return Child},IntlProviderWrapper}var EMPTY={};function template(template,fields,scope,dictionary){return template&&template.replace(/\{\{([\w.-]+)\}\}/g,replacer.bind(null,fields||EMPTY,scope,dictionary))}function replacer(currentFields,scope,dictionary,s,field){for(var parts=field.split("."),v=currentFields,i=0;i<parts.length;i++){if(null==(v=v[parts[i]]))return"";if(v&&v.type===Text)return translate(v.props.id,scope,dictionary,v.props.fields,v.props.plural,v.props.fallback)}return"string"==typeof v&&v.match(/\{\{/)&&(v=template(v,currentFields)),v}function translate(id,scope,dictionary,fields,plural,fallback){scope&&(id=scope+"."+id);var value=dictionary&&dlv_umd_default()(dictionary,id);return(plural||0===plural)&&value&&"object"==typeof value&&(value=value.splice?value[plural]||value[0]:0===plural&&defined(value.none||value.zero)?value.none||value.zero:1===plural&&defined(value.one||value.singular)?value.one||value.singular:value.some||value.many||value.plural||value.other||value),value&&template(value,fields,scope,dictionary)||fallback||null}function HighlightI18N(ref){var value=ref.value,id=ref.id,intl=(0,preact_compat_js_.useContext)(IntlContext).intl;if(intl&&intl.mark){var dictionaryKey="dictionary"+(intl&&intl.scope?"."+intl.scope:"")+"."+id;return(0,preact_js_.h)("mark",{style:{background:value?dlv_umd_default()(intl,dictionaryKey)?"rgba(119,231,117,.5)":"rgba(229,226,41,.5)":"rgba(228,147,51,.5)"},title:id},value)}return value}function Text(ref){var id=ref.id,fallback=ref.children,plural=ref.plural,fields=ref.fields,intl=(0,preact_compat_js_.useContext)(IntlContext).intl,value=translate(id,intl&&intl.scope,intl&&intl.dictionary,fields,plural,fallback);return(0,preact_js_.h)(HighlightI18N,{id,value})}function translateMapping(props,intl,onlyTextNodes){var out={};for(var name in intl=intl||{},props=function(properties){if("string"==typeof(properties=properties||{})&&(properties=properties.split(",")),"join"in properties){for(var selected={},i=0;i<properties.length;i++){var val=properties[i].trim();val&&(selected[val.split(".").pop()]=val)}return selected}return properties}(props),props)if(props.hasOwnProperty(name)&&props[name]){var def=props[name];onlyTextNodes||"string"!=typeof def?def.type===Text&&(def=preact_i18n_esm_assign({fallback:def.props.children},def.props),out[name]=translate(def.id,intl.scope,intl.dictionary,def.fields,def.plural,def.fallback)):out[name]=translate(def,intl.scope,intl.dictionary)}return out}function Localizer(ref){var children=ref.children,intl=(0,preact_compat_js_.useContext)(IntlContext).intl;return children&&children.length?children.map((function(child){return(0,preact_js_.cloneElement)(child,translateMapping(child.props,intl,!0))})):children&&(0,preact_js_.cloneElement)(children,translateMapping(children.props,intl,!0))}function objectWithoutProperties$1(obj,exclude){var target={};for(var k in obj)Object.prototype.hasOwnProperty.call(obj,k)&&-1===exclude.indexOf(k)&&(target[k]=obj[k]);return target}function MarkupText(ref){var id=ref.id,fields=ref.fields,plural=ref.plural,children=ref.children,props=objectWithoutProperties$1(ref,["id","fields","plural","children"]);return(0,preact_js_.h)(Localizer,null,(0,preact_js_.h)(Html,Object.assign({},{html:(0,preact_js_.h)(Text,{id,fields,plural,children}),id},props)))}function Html(ref){var html=ref.html,id=ref.id,props=objectWithoutProperties$1(ref,["html","id"]);return(0,preact_js_.h)(HighlightI18N,{id,value:html?"string"==typeof html?(0,preact_js_.h)(preact_markup_module,Object.assign({},{type:"html",trim:!1},props,{markup:html})):(0,preact_js_.h)("span",null,html):html})}function useText(mapping){var intl=(0,preact_compat_js_.useContext)(IntlContext).intl;return translateMapping("function"==typeof mapping?mapping({intl}):mapping,intl)}intl.intl=intl,intl.IntlContext=IntlContext,intl.IntlProvider=IntlProvider,intl.Text=Text,intl.MarkupText=MarkupText,intl.Localizer=Localizer,intl.withText=function(mapping){return function(Child){function WithTextWrapper(props,context){var intl=(0,preact_compat_js_.useContext)(IntlContext).intl,translations=translateMapping("function"==typeof mapping?mapping(props,{intl}):mapping,intl);return(0,preact_js_.h)(Child,preact_i18n_esm_assign(preact_i18n_esm_assign({},props),translations))}return WithTextWrapper.getWrappedComponent=Child&&Child.getWrappedComponent||function(){return Child},WithTextWrapper}},intl.useText=useText,intl.translate=translate},2076:module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},6008:module=>{module.exports=function(i){return i[1]}},5536:module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},1496:module=>{var memo={};module.exports=function(insert,style){var target=function(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},9904:module=>{module.exports=function(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},9356:module=>{module.exports=function(styleElement,attributes){Object.keys(attributes).forEach((function(key){styleElement.setAttribute(key,attributes[key])}))}},7008:module=>{module.exports=function(options){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var styleElement=options.insertStyleElement(options);return{update:function(obj){!function(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function(){!function(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},9888:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ae:()=>preact_js_.Fragment,im:()=>u,YH:()=>u});__webpack_require__(6528);var preact_js_=__webpack_require__(7320);var f=0;Array.isArray;function u(e,t,n,o,i,u){var a,c,p={};for(c in t)"ref"==c?a=t[c]:p[c]=t[c];var l={type:e,props:p,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--f,__i:-1,__u:0,__source:i,__self:u};if("function"==typeof e&&(a=e.defaultProps))for(c in a)void 0===p[c]&&(p[c]=a[c]);return preact_js_.options.vnode&&preact_js_.options.vnode(l),l}}};