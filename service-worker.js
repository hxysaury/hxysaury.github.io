if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const a=e=>s(e,c),f={module:{uri:c},exports:n,require:a};i[c]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(d(...e),n)))}}define(["./workbox-915e8d08"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2025/02/24/hello-world/index.html",revision:"079d22bba2f5c09c6d3e48171f78645b"},{url:"404.html",revision:"a1f73f2ed4cdb7eb31093de780937c07"},{url:"anzhiyu/random.js",revision:"1f3f1aedefeec5f03a248db0f5e1a822"},{url:"archives/2025/02/index.html",revision:"70fb3c50c3e1017f59661d5146a7322c"},{url:"archives/2025/index.html",revision:"88744cf66edc8707d9596de98e688652"},{url:"archives/index.html",revision:"d062e5c80bbc75fa0e8f69446d438be2"},{url:"categories/index.html",revision:"89f601d7d480916528690d550f2c6174"},{url:"css/index.css",revision:"81d2dbd56dd9a09bc90141deb1a28f90"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"equipment/index.html",revision:"086478397e5d2fef87302974b46ef40f"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"b99e86f2a2660a9624742bae97285b82"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"586c1eecf6617180a50d419def5fd4c0"},{url:"js/main.js",revision:"0ca6e958debf5d18e10ead8c0c00191c"},{url:"js/search/algolia.js",revision:"3ce06f0458bccd45a20ae797cccb6561"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"5e46ef2a6caf9e3430fe9dc22dd30075"},{url:"music/index.html",revision:"434e43daf70fa2b48ea8e270e7cb1881"},{url:"tags/index.html",revision:"89c96a64d7ef35df48aa00077df7d3ea"}],{})}));
//# sourceMappingURL=service-worker.js.map
