"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3854,5863,2775,2076,9725,4562,9842,7574,313,196,9685,2826],{35318:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var o=n(27378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),i=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=i(t.components);return o.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=i(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?o.createElement(m,r(r({ref:e},p),{},{components:n})):o.createElement(m,r({ref:e},p))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,r=new Array(s);r[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,r[1]=c;for(var i=2;i<s;i++)r[i]=n[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70517:function(t,e,n){var o=n(27378);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},64535:function(t,e,n){n.d(e,{Z:function(){return u}});var o=n(27378),a=n(84956);var s=function(){var t=(0,o.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},r=n(38944),c="tabItem_c0e5",l="tabItemActive_28AG";var i=37,p=39;var u=function(t){var e=t.lazy,n=t.block,a=t.defaultValue,u=t.values,d=t.groupId,h=t.className,m=s(),g=m.tabGroupChoices,y=m.setTabGroupChoices,f=(0,o.useState)(a),b=f[0],k=f[1],v=o.Children.toArray(t.children),w=[];if(null!=d){var N=g[d];null!=N&&N!==b&&u.some((function(t){return t.value===N}))&&k(N)}var T=function(t){var e=t.currentTarget,n=w.indexOf(e),o=u[n].value;k(o),null!=d&&(y(d,o),setTimeout((function(){var t,n,o,a,s,r,c,i;(t=e.getBoundingClientRect(),n=t.top,o=t.left,a=t.bottom,s=t.right,r=window,c=r.innerHeight,i=r.innerWidth,n>=0&&s<=i&&a<=c&&o>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(l),setTimeout((function(){return e.classList.remove(l)}),2e3))}),150))},x=function(t){var e,n;switch(t.keyCode){case p:var o=w.indexOf(t.target)+1;n=w[o]||w[0];break;case i:var a=w.indexOf(t.target)-1;n=w[a]||w[w.length-1]}null==(e=n)||e.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},h)},u.map((function(t){var e=t.value,n=t.label;return o.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,r.Z)("tabs__item",c,{"tabs__item--active":b===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:x,onFocus:T,onClick:T},n)}))),e?(0,o.cloneElement)(v.filter((function(t){return t.props.value===b}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(t,e){return(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==b})}))))}},84956:function(t,e,n){var o=(0,n(27378).createContext)(void 0);e.Z=o},21019:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var o=n(25773),a=n(30808),s=(n(27378),n(35318)),r=n(64535),c=n(70517),l=(n(88740),["components"]),i={title:"Starter Bot"},p=void 0,u={unversionedId:"examples/basic/starter-bot",id:"examples/basic/starter-bot",isDocsHomePage:!1,title:"Starter Bot",description:"Powered by Wechaty",source:"@site/docs/examples/basic/starter-bot.mdx",sourceDirName:"examples/basic",slug:"/examples/basic/starter-bot",permalink:"/docs/examples/basic/starter-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/examples/basic/starter-bot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{title:"Starter Bot"},sidebar:"docs",previous:{title:"Cheat sheet",permalink:"/docs/tutorials/cheatsheet"},next:{title:"World's Shortest Chatbot",permalink:"/docs/examples/basic/the-worlds-shortest-chatbot-code-in-6-lines"}},d=[{value:"Requirements",id:"requirements",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Building the bot",id:"building-the-bot",children:[{value:"1. Initialize project",id:"1-initialize-project",children:[]},{value:"2. Install dependencies",id:"2-install-dependencies",children:[]},{value:"3. Write code for bot",id:"3-write-code-for-bot",children:[]}]},{value:"Running the bot",id:"running-the-bot",children:[]},{value:"References",id:"references",children:[]}],h={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,s.kt)("wrapper",(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Starter bot")," is the most basic bot that you can build using Wechaty. You can use this bot as a template for creating an advanced version of the bot by doing further customizations."),(0,s.kt)("p",null,"In this tutorial, you will get step-by-step instructions for creating the Starter bot."),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," v12+"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," v0.40+")),(0,s.kt)("h2",{id:"getting-started"},"Getting started"),(0,s.kt)("p",null,"You should have ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," installed on your system. If you do not have ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," installed (or have a version below 12), then you need to install the latest version of ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Node.js installation docs")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,s.kt)("blockquote",{parentName:"div"},(0,s.kt)("p",{parentName:"blockquote"},"Installation guide for ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," on other platforms can be found ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),".")))),(0,s.kt)("h2",{id:"building-the-bot"},"Building the bot"),(0,s.kt)("p",null,"Let's get started with building the Starter bot using Wechaty."),(0,s.kt)("h3",{id:"1-initialize-project"},"1. Initialize project"),(0,s.kt)("p",null,"Create a new folder called ",(0,s.kt)("inlineCode",{parentName:"p"},"starter-bot")," and move into the directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir starter-bot\ncd starter-bot\n")),(0,s.kt)("p",null,"Use the following command to initialize a NPM project:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm init -y\n")),(0,s.kt)("p",null,"This will generate a ",(0,s.kt)("inlineCode",{parentName:"p"},"package.json")," file containing these:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "starter-bot",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n')),(0,s.kt)("h3",{id:"2-install-dependencies"},"2. Install dependencies"),(0,s.kt)("p",null,"You will need the ",(0,s.kt)("inlineCode",{parentName:"p"},"wechaty")," NPM package for building this bot & ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-node")," for running the TypeScript file of the bot. Install them using the following commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty\nnpm install ts-node\n")),(0,s.kt)("p",null,"You will also need to add dependencies for using any ",(0,s.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-providers/"},"Wechaty Puppet")," which helps to integrate Wechaty with various ",(0,s.kt)("strong",{parentName:"p"},"instant messaging (IM) systems")," (such as WeChat, WhatsApp, and WeCom):"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If you want to use ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://www.whatsapp.com/"},"WhatsApp")),", install ",(0,s.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-whatsapp"),":"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-whatsapp\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If you want to use ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://www.wechat.com/"},"WeChat")),", you can try the following puppets:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Web Protocol:")," Install ",(0,s.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-wechat"),":"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-wechat\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"iPad Protocol:")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"padlocal: Install ",(0,s.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-padlocal"),":"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-padlocal\n")),(0,s.kt)("p",{parentName:"li"},"Then get a token like ",(0,s.kt)("inlineCode",{parentName:"p"},"puppet_padlocal_XXX"),", know more about puppet service padlocal ",(0,s.kt)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/padlocal"},"here"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"paimon: Install ",(0,s.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-service"),":"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-service\n")),(0,s.kt)("p",{parentName:"li"},"Then get a token like ",(0,s.kt)("inlineCode",{parentName:"p"},"puppet_paimon_XXX"),", know more about puppet service paimon ",(0,s.kt)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/paimon"},"here"),".")))))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"If you want to use ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://work.weixin.qq.com/"},"WeCom")),", install ",(0,s.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-service"),":"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-service\n")),(0,s.kt)("p",{parentName:"li"},"Then get a token like ",(0,s.kt)("inlineCode",{parentName:"p"},"puppet_wxwork_XXXXX"),", more about puppet service wxwork ",(0,s.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-services/wxwork/"},"here"),"."))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"You can find more information about the puppets ",(0,s.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-providers/"},"here"),".")),(0,s.kt)("h3",{id:"3-write-code-for-bot"},"3. Write code for bot"),(0,s.kt)("p",null,"Create a new file called ",(0,s.kt)("inlineCode",{parentName:"p"},"starter-bot.ts")," in the root project directory. Add the following to the file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Importing the Wechaty npm package\nimport { Wechaty } from 'wechaty'\n\n// Initializing the bot\nconst bot = new Wechaty({\n    name: 'starter-bot',\n})\n\n// Starting the bot\nbot\n.on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n.on('login',            user => console.log(`User ${user} logged in`))\n.on('message',       message => console.log(`Message: ${message}`))\n.start()\n")),(0,s.kt)("h2",{id:"running-the-bot"},"Running the bot"),(0,s.kt)("p",null,"You have to ",(0,s.kt)("strong",{parentName:"p"},"export/set")," an environment variable with the type of puppet to use:"),(0,s.kt)(r.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,s.kt)(c.Z,{value:"linux",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n\n# For using WhatsApp:\n# export WECHATY_PUPPET=wechaty-puppet-whatsapp\n\n# For using WeCom:\n# export WECHATY_PUPPET=wechaty-puppet-service\n# export WECHATY_PUPPET_SERVICE_TOKEN="puppet_wxwork_XXXXX"\n'))),(0,s.kt)(c.Z,{value:"mac",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n\n# For using WhatsApp:\n# export WECHATY_PUPPET=wechaty-puppet-whatsapp\n\n# For using WeCom:\n# export WECHATY_PUPPET=wechaty-puppet-service\n# export WECHATY_PUPPET_SERVICE_TOKEN="puppet_wxwork_XXXXX"\n'))),(0,s.kt)(c.Z,{value:"windows",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\n\n# For using WhatsApp:\n# set WECHATY_PUPPET=wechaty-puppet-whatsapp\n\n# For using WeCom:\n# set WECHATY_PUPPET=wechaty-puppet-service\n# set WECHATY_PUPPET_SERVICE_TOKEN="puppet_wxwork_XXXXX"\n')))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"If you are using WeCom, you can get token from ",(0,s.kt)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/wxwork"},"puppet service wxwork"),".")),(0,s.kt)("p",null,"Run the bot using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"ts-node src/starter-bot.ts\n")),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../../using-plugin-with-wechaty/overview"},"Wechaty plugins")," to integrate with the bot."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started GitHub repository"))))}m.isMDXComponent=!0},60748:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var o=n(25773),a=n(30808),s=(n(27378),n(35318)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`csharp",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/dotnet/transclusions",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/docs/polyglot/dotnet/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{}},p=[],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}d.isMDXComponent=!0},26692:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var o=n(25773),a=n(30808),s=(n(27378),n(35318)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`go",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/go/transclusions",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/docs/polyglot/go/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{}},p=[],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}d.isMDXComponent=!0},98441:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var o=n(25773),a=n(30808),s=(n(27378),n(35318)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`java",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{}},p=[],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}d.isMDXComponent=!0},77582:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var o=n(25773),a=n(30808),s=(n(27378),n(35318)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/openapi/transclusions/shortest-chatbot",id:"polyglot/openapi/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`sh",source:"@site/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/openapi/transclusions",slug:"/polyglot/openapi/transclusions/shortest-chatbot",permalink:"/docs/polyglot/openapi/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{}},p=[],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# To be add: curl ...\n")))}d.isMDXComponent=!0},15017:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var o=n(25773),a=n(30808),s=(n(27378),n(35318)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`php",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{}},p=[],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}d.isMDXComponent=!0},26534:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var o=n(25773),a=n(30808),s=(n(27378),n(35318)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`py",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/python/transclusions",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/docs/polyglot/python/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{}},p=[],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}d.isMDXComponent=!0},16881:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var o=n(25773),a=n(30808),s=(n(27378),n(35318)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/rust/transclusions/shortest-chatbot",id:"polyglot/rust/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`rust",source:"@site/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/rust/transclusions",slug:"/polyglot/rust/transclusions/shortest-chatbot",permalink:"/docs/polyglot/rust/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{}},p=[],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"let bot = Wechaty::new(PuppetService::new(options).await.unwrap());\n\nbot.on_scan(handle_scan)\n    .on_login(handle_login)\n    .on_logout(handle_logout)\n    .on_message(handle_message)\n    .start()\n    .await;\n")))}d.isMDXComponent=!0},76714:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var o=n(25773),a=n(30808),s=(n(27378),n(35318)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/scala/transclusions/shortest-chatbot",id:"polyglot/scala/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`scala",source:"@site/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/scala/transclusions",slug:"/polyglot/scala/transclusions/shortest-chatbot",permalink:"/docs/polyglot/scala/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{}},p=[],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))}d.isMDXComponent=!0},88740:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return k},contentTitle:function(){return v},metadata:function(){return w},toc:function(){return N},default:function(){return x}});var o=n(25773),a=n(30808),s=(n(27378),n(35318)),r=n(64535),c=n(70517),l=n(54249),i=n(77582),p=n(86203),u=n(26534),d=n(26692),h=n(98441),m=n(15017),g=n(76714),y=n(60748),f=n(16881),b=["components"],k={},v=void 0,w={unversionedId:"polyglot/transclusions/shortest-chatbots",id:"polyglot/transclusions/shortest-chatbots",isDocsHomePage:!1,title:"shortest-chatbots",description:"<Tabs",source:"@site/docs/polyglot/transclusions/shortest-chatbots.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/shortest-chatbots",permalink:"/docs/polyglot/transclusions/shortest-chatbots",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/transclusions/shortest-chatbots.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{}},N=[],T={toc:N};function x(t){var e=t.components,n=(0,a.Z)(t,b);return(0,s.kt)("wrapper",(0,o.Z)({},T,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"OpenAPI",value:"openapi"},{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,s.kt)(c.Z,{value:"openapi",mdxType:"TabItem"},(0,s.kt)(i.default,{mdxType:"ShortestChatbotOpenApi"})),(0,s.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)(l.default,{mdxType:"ShortestChatbotTypeScript"})),(0,s.kt)(c.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)(p.default,{mdxType:"ShortestChatbotJavaScript"})),(0,s.kt)(c.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)(u.default,{mdxType:"ShortestChatbotPython"})),(0,s.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,s.kt)(d.default,{mdxType:"ShortestChatbotGo"})),(0,s.kt)(c.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)(h.default,{mdxType:"ShortestChatbotJava"})),(0,s.kt)(c.Z,{value:"php",mdxType:"TabItem"},(0,s.kt)(m.default,{mdxType:"ShortestChatbotPhp"})),(0,s.kt)(c.Z,{value:"scala",mdxType:"TabItem"},(0,s.kt)(g.default,{mdxType:"ShortestChatbotScala"})),(0,s.kt)(c.Z,{value:"csharp",mdxType:"TabItem"},(0,s.kt)(y.default,{mdxType:"ShortestChatbotDotnet"})),(0,s.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,s.kt)(f.default,{mdxType:"ShortestChatbotRust"}))))}x.isMDXComponent=!0},86203:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var o=n(25773),a=n(30808),s=(n(27378),n(35318)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot-js",id:"polyglot/typescript/transclusions/shortest-chatbot-js",isDocsHomePage:!1,title:"shortest-chatbot-js",description:"`js",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot-js",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot-js",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{}},p=[],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { Wechaty } = require('wechaty')\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},54249:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return d}});var o=n(25773),a=n(30808),s=(n(27378),n(35318)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`ts",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1630138184,formattedLastUpdatedAt:"8/28/2021",frontMatter:{}},p=[],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},38944:function(t,e,n){function o(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=o(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=o(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})}}]);