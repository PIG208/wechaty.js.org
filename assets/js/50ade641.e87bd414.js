"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9704],{35318:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70517:function(e,n,t){var a=t(27378);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},64535:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(27378),r=t(84956);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(38944),l="tabItem_c0e5",s="tabItemActive_28AG";var c=37,u=39;var p=function(e){var n=e.lazy,t=e.block,r=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=i(),h=f.tabGroupChoices,v=f.setTabGroupChoices,y=(0,a.useState)(r),g=y[0],b=y[1],k=a.Children.toArray(e.children),T=[];if(null!=d){var w=h[d];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&b(w)}var O=function(e){var n=e.currentTarget,t=T.indexOf(n),a=p[t].value;b(a),null!=d&&(v(d,a),setTimeout((function(){var e,t,a,r,i,o,l,c;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,t>=0&&i<=c&&r<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},N=function(e){var n,t;switch(e.keyCode){case u:var a=T.indexOf(e.target)+1;t=T[a]||T[0];break;case c:var r=T.indexOf(e.target)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},m)},p.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":g===n}),key:n,ref:function(e){return T.push(e)},onKeyDown:N,onFocus:O,onClick:O},t)}))),n?(0,a.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==g})}))))}},84956:function(e,n,t){var a=(0,t(27378).createContext)(void 0);n.Z=a},84748:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var a=t(25773),r=t(30808),i=(t(27378),t(35318)),o=t(64535),l=t(70517),s=["components"],c={title:"Making friends"},u=void 0,p={unversionedId:"howto/friendship",id:"howto/friendship",isDocsHomePage:!1,title:"Making friends",description:"Sending Request",source:"@site/docs/howto/friendship.md",sourceDirName:"howto",slug:"/howto/friendship",permalink:"/docs/howto/friendship",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/friendship.md",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{title:"Making friends"},sidebar:"docs",previous:{title:"Managing rooms",permalink:"/docs/howto/room"},next:{title:"Processing files",permalink:"/docs/howto/file-box"}},d=[{value:"Sending Request",id:"sending-request",children:[]},{value:"Receiving Request",id:"receiving-request",children:[]}],m={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"sending-request"},"Sending Request"),(0,i.kt)(o.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"async function onReady () {\n  const weixin  = 'FridayBOT' // weixin id\n  const contact = await bot.Friendship.search({ weixin })\n\n  if (contact) {\n    console.info('Sending friend request...')\n    await bot.Friendship.add(contact)\n  } else {\n    console.info('Friendship.search: not found')\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"async function onReady () {\n  const weixin  = 'FridayBOT' // weixin id\n  const contact = await bot.Friendship.search({ weixin })\n\n  if (contact) {\n    console.info('Sending friend request...')\n    await bot.Friendship.add(contact)\n  } else {\n    console.info('Friendship.search: not found')\n  }\n}\n\nbot.on('ready', onReady)\n"))),(0,i.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"from typing import Optional\nfrom wechaty import Wechaty, Contact\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        contact: Optional[Contact] = await self.Friendship.search(phone='phone-of-someone')\n        if contact:\n            self.Friendship.add(contact)\n"))),(0,i.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,i.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,i.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,i.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,i.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,i.kt)("h2",{id:"receiving-request"},"Receiving Request"),(0,i.kt)(o.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Friendship } from 'wechaty'\n\nasync function onFriendship (friendship: Friendship) {\n  if (friendship.type() === Friendship.Type.Receive) {\n    console.info('New requrest from', friendship.contact())\n    console.info('Hello message:', friendship.hello())\n    await friendship.accept()\n  } else if (friendship.type() === Friendship.Type.Confirm) {\n    console.info('New request confirmed with', friendship.contact().name())\n  }\n}\n\nbot.on('friendship', onFriendship)\n"))),(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Friendship } from 'wechaty'\n\nasync function onFriendship (friendship) {\n  if (friendship.type() === Friendship.Type.Receive) {\n    console.info('New requrest from', friendship.contact())\n    console.info('Hello message:', friendship.hello())\n    await friendship.accept()\n  } else if (friendship.type() === Friendship.Type.Confirm) {\n    console.info('New request confirmed with', friendship.contact().name())\n  }\n}\n\nbot.on('friendship', onFriendship)\n"))),(0,i.kt)(l.Z,{value:"py",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty, Friendship, FriendshipType\n\nclass MyBot(Wechaty):\n    async def on_friendship(self, friendship: Friendship):\n        if friendship.type() == FriendshipType.FRIENDSHIP_TYPE_RECEIVE:\n            await friendship.accept()\n"))),(0,i.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,i.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,i.kt)(l.Z,{value:"php",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,i.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,i.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,i.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))))}f.isMDXComponent=!0},38944:function(e,n,t){function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);