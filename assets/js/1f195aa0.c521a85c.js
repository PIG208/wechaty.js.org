"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[351],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70517:function(e,t,n){var a=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},64535:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(27378),r=n(84956);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(38944),p="tabItem_c0e5",l="tabItemActive_28AG";var u=37,s=39;var c=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,c=e.values,m=e.groupId,d=e.className,h=o(),f=h.tabGroupChoices,y=h.setTabGroupChoices,k=(0,a.useState)(r),v=k[0],g=k[1],w=a.Children.toArray(e.children),b=[];if(null!=m){var N=f[m];null!=N&&N!==v&&c.some((function(e){return e.value===N}))&&g(N)}var P=function(e){var t=e.currentTarget,n=b.indexOf(t),a=c[n].value;g(a),null!=m&&(y(m,a),setTimeout((function(){var e,n,a,r,o,i,p,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,p=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&r<=p&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case s:var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case u:var r=b.indexOf(e.target)-1;n=b[r]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",p,{"tabs__item--active":v===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:j,onFocus:P,onClick:P},n)}))),t?(0,a.cloneElement)(w.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},84956:function(e,t,n){var a=(0,n(27378).createContext)(void 0);t.Z=a},11315:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var a=n(25773),r=n(30808),o=(n(27378),n(35318)),i=(n(64535),n(70517),["components"]),p={title:"Puppet Provider: DIY"},l=void 0,u={unversionedId:"puppet-providers/diy",id:"puppet-providers/diy",isDocsHomePage:!1,title:"Puppet Provider: DIY",description:"Wechaty Puppet DIY",source:"@site/docs/puppet-providers/diy.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/diy",permalink:"/docs/puppet-providers/diy",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/diy.md",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{title:"Puppet Provider: DIY"},sidebar:"docs",previous:{title:"Mock",permalink:"/docs/puppet-providers/mock"},next:{title:"Puppet Services: Index",permalink:"/docs/puppet-services/"}},s=[{value:"Development",id:"development",children:[{value:"How to implement a wechaty puppet",id:"how-to-implement-a-wechaty-puppet",children:[]},{value:"Structure",id:"structure",children:[]}]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Issues",id:"issues",children:[]},{value:"Support",id:"support",children:[]}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"diy"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Provider-DIY-blueviolet",alt:"Wechaty Puppet DIY"}))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Do It Yourself")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can make a Wechaty Puppet Provider easily."))),(0,o.kt)("p",null,"You can build a Wechaty Puppet Service by yourself with any Wechaty Puppet Providers."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"A Wechaty Puppet is a node package published on NPM that follow a defined convention."),(0,o.kt)("h3",{id:"how-to-implement-a-wechaty-puppet"},"How to implement a wechaty puppet"),(0,o.kt)("p",null,"related tutorial: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lijiarui/wechaty-puppet-padchat/issues/33"},"How to implement a wechaty-puppet")),(0,o.kt)("h3",{id:"structure"},"Structure"),(0,o.kt)("h4",{id:"packagejson"},(0,o.kt)("inlineCode",{parentName:"h4"},"package.json")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," is a manifest format for describing ",(0,o.kt)("strong",{parentName:"p"},"Node.js modules"),". Wechaty Puppets are built on top of Node modules. It declares dependencies, version, ownership, and other information required to run a plugin in Wechaty. This document describes the schema in detail."),(0,o.kt)("p",null,"A plugin manifest ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," can also contain details about the required configuration. The configuration schema is defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"wechaty")," field of the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," (This field follow the ",(0,o.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON-Schema")," guidelines):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "wechaty-puppet-mytest",\n    "version": "0.0.1",\n    "description": "This is my first Wechaty Puppet",\n    "engines": {\n        "wechaty": ">=0.16.x"\n    },\n    "wechaty": {\n        "properties": {\n            "myConfigKey": {\n                "type": "string",\n                "default": "it\'s the default value",\n                "description": "It defines my awesome config!"\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"You can learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},"NPM documentation"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"package name")," must begin with ",(0,o.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-")," and the ",(0,o.kt)("strong",{parentName:"p"},"package engines")," should contain ",(0,o.kt)("inlineCode",{parentName:"p"},"wechaty"),"."),(0,o.kt)("h4",{id:"modts"},"mod.ts"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mod.ts")," is the main entry point of your puppet implementation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Puppet } from 'wechaty'\n\nexport class PuppetMyTest extends Puppet {\n  // ... implenmentation here ...\n}\n\nexport default PuppetMyTest\n")),(0,o.kt)("h4",{id:"publish-your-puppet"},"Publish Your Puppet"),(0,o.kt)("p",null,"Wechaty Puppet can be published on ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM"),"."),(0,o.kt)("p",null,"To publish a new Puppet, you need to create an account on ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs.com")," then publish it from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm publish\n")),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/05/wechaty-puppet-maker/"},"Wechaty Workshop for Puppet Makers: How to make a Puppet for Wechaty, Hao, Aug 5, 2020")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/15/publishment-of-wechaty-whatapp-puppet/"},"Wechaty Puppet Whatsapp Has been Published, Shan, Feb 15, 2021")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/"},"\u57fa\u4e8e\u5f00\u653e API \u5c01\u88c5 Wechaty \u63a5\u53e3\u4e0b\u7684\u98de\u4e66\u804a\u5929\u673a\u5668\u4eba, \u8303\u854a, Sep 30, 2020")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/08/23/wechaty-puppet-gitter/"},"Gitter.im is supported by Wechaty now, Huan, Aug 23, 2020")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/10/12/puppet-padlocal-intro/"},"New Wechaty Puppet Service: PadLocal, Padlocal, Oct 12, 2020")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/07/05/multilanguage-meeting-notes/"},"Multi-language Wechaty Meeting: Mocking & Code Quality, wj-Mcat, Jun 5, 2020"))),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2018/07/12/wechaty-new-release-version-0.18/"},"Wechaty New Release Version v0.18: SLOC from 27,630 to 7,817, Huan, Jul 12, 2018")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2018/06/21/wechaty-new-release-version-0.16/"},"Wechaty New Version 0.16(BETA, with super power) Released, Huan, Jun 21, 2018"))),(0,o.kt)("h2",{id:"issues"},"Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create New Puppets for Wechaty ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/issues/1167"},"wechaty/wechaty#1167"))),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}m.isMDXComponent=!0},38944:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);