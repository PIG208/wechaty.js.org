"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7450],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(a),u=r,d=f["".concat(c,".").concat(u)]||f[u]||m[u]||o;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},27967:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=a(25773),r=a(30808),o=(a(27378),a(35318)),l=["components"],i={title:"ContactSelf"},c=void 0,s={unversionedId:"api/contact-self",id:"api/contact-self",isDocsHomePage:!1,title:"ContactSelf",description:"Bot itself will be encapsulated as a ContactSelf. This class is extends Contact.",source:"@site/docs/api/contact-self.md",sourceDirName:"api",slug:"/api/contact-self",permalink:"/docs/api/contact-self",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/contact-self.md",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{title:"ContactSelf"}},p=[{value:"ContactSelf",id:"contactself",children:[{value:"contactSelf.avatar([file]) \u21d2 <code>Promise &lt;void | FileBox&gt;</code>",id:"contactselfavatarfile--promise-void--filebox",children:[]},{value:"contactSelf.qrcode() \u21d2 <code>Promise &lt;string&gt;</code>",id:"contactselfqrcode--promise-string",children:[]},{value:"contactSelf.signature(signature) \u21d2 <code>Promise &lt;void&gt;</code>",id:"contactselfsignaturesignature--promise-void",children:[]},{value:"contactSelf.name([name]) \u21d2 <code>Promise&lt;void&gt; | string</code>",id:"contactselfnamename--promisevoid--string",children:[]}]}],m={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Bot itself will be encapsulated as a ContactSelf. This class is extends Contact."),(0,o.kt)("h2",{id:"contactself"},"ContactSelf"),(0,o.kt)("p",null,"Bot itself will be encapsulated as a ContactSelf."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tips: this class is extends Contact")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": global class"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/contact-self#contactself"},"ContactSelf"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/contact-self#contactself"},"intance"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/contact-self#contactselfavatarfile-%E2%87%92-promise"},"contactSelf.avatar","(","[","file","]",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"a"},"Promise <void | FileBox>"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/contact-self#contactselfqrcode-%E2%87%92-promise"},"contactSelf.qrcode","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"a"},"Promise <string>"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/contact-self#contactselfsignaturesignature"},"contactSelf.signature","(","signature",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"a"},"Promise <string>"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/contact-self#contactselfname-%E2%87%92-promisestring"},"contactSelf.name","(","[","name","]",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"a"},"Promise <void> | string")))))))),(0,o.kt)("h3",{id:"contactselfavatarfile--promise-void--filebox"},"contactSelf.avatar","(","[","file","]",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <void | FileBox>")),(0,o.kt)("p",null,"GET / SET bot avatar"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/contact-self#ContactSelf"},(0,o.kt)("inlineCode",{parentName:"a"},"ContactSelf"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"[","file","]"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"FileBox"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")," ",(0,o.kt)("em",{parentName:"p"},"("," GET the avatar for bot, return {Promise","<","FileBox",">","}",")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Save avatar to local file like `1-name.jpg`\n\nbot.on('login', async user => {\n  console.log(`user ${user} login`)\n  const file = await user.avatar()\n  const name = file.name\n  await file.toFile(name, true)\n  console.log(`Save bot avatar: ${user.name()} with avatar file: ${name}`)\n})\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")," ",(0,o.kt)("em",{parentName:"p"},"(","SET the avatar for a bot",")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { FileBox }  from 'file-box'\nbot.on('login', user => {\n  console.log(`user ${user} login`)\n  const fileBox = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')\n  await user.avatar(fileBox)\n  console.log(`Change bot avatar successfully!`)\n})\n")),(0,o.kt)("h3",{id:"contactselfqrcode--promise-string"},"contactSelf.qrcode","(",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <string>")),(0,o.kt)("p",null,"Get bot qrcode"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/contact-self#ContactSelf"},(0,o.kt)("inlineCode",{parentName:"a"},"ContactSelf"))),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { generate } from 'qrcode-terminal'\nbot.on('login', async user => {\n  console.log(`user ${user} login`)\n  const qrcode = await user.qrcode()\n  console.log(`Following is the bot qrcode!`)\n  generate(qrcode, { small: true })\n})\n")),(0,o.kt)("h3",{id:"contactselfsignaturesignature--promise-void"},"contactSelf.signature","(","signature",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise <void>")),(0,o.kt)("p",null,"Change bot signature"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/contact-self#ContactSelf"},(0,o.kt)("inlineCode",{parentName:"a"},"ContactSelf"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"signature"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The new signature that the bot will change to")))),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.on('login', async user => {\n  console.log(`user ${user} login`)\n  try {\n    await user.signature(`Signature changed by wechaty on ${new Date()}`)\n  } catch (e) {\n    console.error('change signature failed', e)\n  }\n})\n")),(0,o.kt)("h3",{id:"contactselfnamename--promisevoid--string"},"contactSelf.name","(","[","name","]",")"," \u21d2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Promise<void> | string")),(0,o.kt)("p",null,"Get or change bot name."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/contact-self#contactself"},(0,o.kt)("inlineCode",{parentName:"a"},"ContactSelf"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"[","name","]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The new alias that the bot will change to")))),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.on('login', async user => {\n  console.log(`user ${user} login`)\n  const oldName = user.name() // get bot name\n  try {\n    await user.name(`${oldName}-${new Date().getTime()}`) // change bot name\n  } catch (e) {\n    console.error('change name failed', e)\n  }\n})\n")))}f.isMDXComponent=!0}}]);