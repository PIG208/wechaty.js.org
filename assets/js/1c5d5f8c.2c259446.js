"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8469],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,k=m["".concat(i,".").concat(h)]||m[h]||l[h]||a;return n?r.createElement(k,c(c({ref:t},u),{},{components:n})):r.createElement(k,c({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7475:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(25773),o=n(30808),a=(n(27378),n(35318)),c=["components"],p={title:"Writing tests"},i=void 0,s={unversionedId:"howto/testing",id:"howto/testing",isDocsHomePage:!1,title:"Writing tests",description:"NPM Version",source:"@site/docs/howto/testing.md",sourceDirName:"howto",slug:"/howto/testing",permalink:"/docs/howto/testing",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/testing.md",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{title:"Writing tests"},sidebar:"docs",previous:{title:"Processing files",permalink:"/docs/howto/file-box"},next:{title:"References: Overview",permalink:"/docs/references/"}},u=[{value:"USAGE",id:"usage",children:[{value:"Puppet Mock",id:"puppet-mock",children:[]},{value:"Mocker &amp; Environment",id:"mocker--environment",children:[]}]},{value:"API Reference",id:"api-reference",children:[{value:"Mocker",id:"mocker",children:[]}]},{value:"HELPER UTILITIES",id:"helper-utilities",children:[{value:"StateSwitch",id:"stateswitch",children:[]}]}],l={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-mock"},(0,a.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-mock.svg",alt:"NPM Version"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg",alt:"npm (tag)"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-mock/actions?query=workflow%3ANPM"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/wechaty/wechaty-puppet-mock/workflows/NPM/badge.svg",alt:"NPM"}))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://wechaty.github.io/wechaty-puppet-mock/images/mock.png",alt:"chatie puppet"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Picture Credit: ",(0,a.kt)("a",{parentName:"p",href:"https://softwareautotools.com/2017/03/01/mocking-explained-in-python/"},"https://softwareautotools.com/2017/03/01/mocking-explained-in-python/"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,a.kt)("p",null,"Puppet Mocker & Starter Template for Wechaty, it is very useful when you:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Want to test the Wechaty framework with a mock puppet, or"),(0,a.kt)("li",{parentName:"ol"},"You want to write your own Puppet implenmentation.")),(0,a.kt)("p",null,"Then ",(0,a.kt)("inlineCode",{parentName:"p"},"PuppetMock")," will helps you a lot."),(0,a.kt)("h2",{id:"usage"},"USAGE"),(0,a.kt)("h3",{id:"puppet-mock"},"Puppet Mock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty }   from 'wechaty'\nimport { PuppetMock } from 'wechaty-puppet-mock'\n\nconst puppet  = new PuppetMock()\nconst wechaty = new Wechaty({ puppet })\n\nwechaty.start()\n")),(0,a.kt)("h3",{id:"mocker--environment"},"Mocker & Environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  PuppetMock,\n  Mocker,\n  SimpleEnvironment,\n}                     from 'wechaty-puppet-mock'\n\nconst mocker = new Mocker()\nmocker.use(SimpleEnvironment())\n\nconst puppet = new PuppetMock({ mocker })\nconst wechaty = new Wechaty({ puppet })\n\nwechaty.start()\n\n// The Mocker will start perform the SimpleEnvironment...\n")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"mocker"},"Mocker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty }  from 'wechaty'\nimport { PuppetMock, mock }   from 'wechaty-puppet-mock'\n\nconst mocker = new mock.Mocker()\nconst puppet = new PuppetMock({ mocker })\nconst bot = new Wechaty({ puppet })\n\nawait bot.start()\n\nmocker.scan('https://github.com/wechaty', 1)\n\nconst user = mocker.createContact()\nmocker.login(user)\n\nconst contact = mocker.createContact()\nconst room = mocker.createRoom()\n\nuser.say('Hello').to(contact)\ncontact.say('World').to(user)\n")),(0,a.kt)("h2",{id:"helper-utilities"},"HELPER UTILITIES"),(0,a.kt)("h3",{id:"stateswitch"},"StateSwitch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"this.state.on('pending')\nthis.state.on(true)\nthis.state.off('pending')\nthis.state.off(true)\n\nawait this.state.ready('on')\nawait this.state.ready('off')\n")))}m.isMDXComponent=!0}}]);