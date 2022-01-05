(function(t){function e(e){for(var r,l,s=e[0],i=e[1],u=e[2],d=0,f=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},o=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0423":function(t,e,n){"use strict";n("07d5")},"04e8":function(t,e,n){var r=n("22dd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("499e").default;a("20ffb1eb",r,!0,{sourceMap:!1,shadowMode:!1})},"07d5":function(t,e,n){var r=n("b0b4");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("499e").default;a("26053f9a",r,!0,{sourceMap:!1,shadowMode:!1})},"22dd":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500&display=swap);"]),e.push([t.i,"*{margin:0;padding:0;box-sizing:border-box;font-family:Noto Sans TC,sans-serif}#app{width:100vw;height:100vh;background:#00ff4c;background:linear-gradient(90deg,#00ff4c,#00ffa2 42%,#00d4ff)}#app,.tool{display:flex;justify-content:center;align-items:center;flex-direction:column}.tool{position:relative;bottom:10%;background-color:#fff;border:none;border-radius:15px;padding:15px 10px;max-width:90vw}@media screen and (max-width:500px){.tool{bottom:0}}",""]),t.exports=e},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"tool"};function o(t,e,n,o,l,s){var i=Object(r["j"])("tool");return Object(r["f"])(),Object(r["c"])("div",a,[Object(r["e"])(i)])}var l=function(t){return Object(r["h"])("data-v-72ad0aea"),t=t(),Object(r["g"])(),t},s=l((function(){return Object(r["d"])("h1",null,"四分位距計算機",-1)})),i={class:"control"},u={class:"results"};function c(t,e,n,a,o,l){var c=this;return Object(r["f"])(),Object(r["c"])(r["a"],null,[s,Object(r["m"])(Object(r["d"])("textarea",{name:"input",id:"input",cols:"30",rows:"10","onUpdate:modelValue":e[0]||(e[0]=function(t){return o.textInput=t}),placeholder:"輸入數字以空格隔開",onKeyup:e[1]||(e[1]=Object(r["n"])((function(t){return l.calculate()}),["enter"]))},null,544),[[r["l"],o.textInput]]),Object(r["d"])("div",i,[Object(r["d"])("button",{onClick:e[2]||(e[2]=function(t){return l.calculate()})},"計算"),Object(r["d"])("button",{onClick:e[3]||(e[3]=function(t){return c.textInput=""})},"清除")]),Object(r["d"])("div",u,[Object(r["d"])("ul",null,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(o.results,(function(t){return Object(r["f"])(),Object(r["c"])("li",{key:t},[Object(r["d"])("h1",null,Object(r["k"])(t[0]),1),Object(r["d"])("p",null,Object(r["k"])(t[1]),1)])})),128))])])],64)}n("ac1f"),n("1276"),n("a434"),n("4e82");var d={name:"tool",data:function(){return{textInput:"",results:{q1:["Q1",0],q2:["中位數",0],q3:["Q3",0],allRange:["全距",0],interquartile:["四分位距",0]}}},methods:{calculate:function(){for(var t=this.textInput.split(" "),e=0;e<t.length;e++)""===t[e]?(t.splice(e,1),e--):t[e]=parseInt(t[e],10);return t.sort((function(t,e){return t-e})),t.length<4?(alert("請輸入4個以上的數"),!1):0!==t.length&&void(t.length%4===0?(this.results.q1[1]=(t[t.length/4-1]+t[t.length/4])/2,this.results.q2[1]=(t[t.length/2-1]+t[t.length/2])/2,this.results.q3[1]=(t[t.length/4*3-1]+t[t.length/4*3])/2,this.results.interquartile[1]=this.results.q3[1]-this.results.q1[1],this.results.allRange[1]=t[t.length-1]-t[0]):t.length%2===0?(this.results.q1[1]=t[Math.ceil(t.length/4)-1],this.results.q2[1]=(t[t.length/2-1]+t[t.length/2])/2,this.results.q3[1]=t[Math.ceil(3*t.length/4)-1],this.results.allRange[1]=this.results.q3[1]-this.results.q1[1],this.results.interquartile[1]=t[t.length-1]-t[0]):(this.results.q1[1]=t[Math.ceil(t.length/4)-1],this.results.q2[1]=t[Math.ceil(t.length/2)-1],this.results.q3[1]=t[Math.ceil(3*t.length/4)-1],this.results.interquartile[1]=this.results.q3[1]-this.results.q1[1],this.results.allRange[1]=t[t.length-1]-t[0]))}}},f=(n("0423"),n("6b0d")),p=n.n(f);const h=p()(d,[["render",c],["__scopeId","data-v-72ad0aea"]]);var b=h,g={name:"App",components:{tool:b}};n("7e1e");const v=p()(g,[["render",o]]);var x=v;Object(r["b"])(x).mount("#app")},"7e1e":function(t,e,n){"use strict";n("04e8")},b0b4:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,"h1[data-v-72ad0aea]{font-size:1.5rem;font-weight:400;margin-bottom:5px}h1[data-v-72ad0aea],textarea[data-v-72ad0aea]{color:#282828}textarea[data-v-72ad0aea]{resize:none;border:1px solid #ccc;border-radius:5px;padding:10px 8px;font-size:1rem;outline:none;transition:.3s;max-width:85vw;margin-bottom:10px}textarea[data-v-72ad0aea]:focus{border:1px solid #00ffa2}button[data-v-72ad0aea]{cursor:pointer;border:none;border-radius:5px;padding:3px 20px;background-color:#2d7ef8;font-size:1.1rem;font-weight:100;color:#fff;margin-bottom:15px}button[data-v-72ad0aea]:not(:last-child){margin-right:15px}.results>ul[data-v-72ad0aea]{list-style:none;display:flex;flex-direction:row;width:100%;justify-content:space-between;border:1px solid #8f8f8f;padding:0 10px;border-radius:5px}.results>ul>li[data-v-72ad0aea]{padding-bottom:3px}.results>ul>li[data-v-72ad0aea]:not(:last-child){margin-right:10px;border-right:1px solid #8f8f8f;padding-right:10px}.results>ul>li>h1[data-v-72ad0aea]{font-size:1rem;color:#8f8f8f}@media screen and (max-width:350px){.results>ul>li>h1[data-v-72ad0aea]{font-size:.8rem}}",""]),t.exports=e}});
//# sourceMappingURL=app.cff6e687.js.map