webpackJsonp([6],{103:function(t,s){function a(t,s){for(var a=0;a<t.length;a++){var e=t[a],n=c[e.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](e.parts[i]);for(;i<e.parts.length;i++)n.parts.push(l(e.parts[i],s))}else{for(var r=[],i=0;i<e.parts.length;i++)r.push(l(e.parts[i],s));c[e.id]={id:e.id,refs:1,parts:r}}}}function e(t){for(var s=[],a={},e=0;e<t.length;e++){var n=t[e],i=n[0],r=n[1],l=n[2],o=n[3],v={css:r,media:l,sourceMap:o};a[i]?a[i].parts.push(v):s.push(a[i]={id:i,parts:[v]})}return s}function n(t,s){var a=p(),e=f[f.length-1];if("top"===t.insertAt)e?e.nextSibling?a.insertBefore(s,e.nextSibling):a.appendChild(s):a.insertBefore(s,a.firstChild),f.push(s);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(s)}}function i(t){t.parentNode.removeChild(t);var s=f.indexOf(t);s>=0&&f.splice(s,1)}function r(t){var s=document.createElement("style");return s.type="text/css",n(t,s),s}function l(t,s){var a,e,n;if(s.singleton){var l=h++;a=d||(d=r(s)),e=o.bind(null,a,l,!1),n=o.bind(null,a,l,!0)}else a=r(s),e=v.bind(null,a),n=function(){i(a)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else n()}}function o(t,s,a,e){var n=a?"":e.css;if(t.styleSheet)t.styleSheet.cssText=g(s,n);else{var i=document.createTextNode(n),r=t.childNodes;r[s]&&t.removeChild(r[s]),r.length?t.insertBefore(i,r[s]):t.appendChild(i)}}function v(t,s){var a=s.css,e=s.media,n=s.sourceMap;if(e&&t.setAttribute("media",e),n&&(a+="\n/*# sourceURL="+n.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var c={},_=function(t){var s;return function(){return void 0===s&&(s=t.apply(this,arguments)),s}},u=_(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=_(function(){return document.head||document.getElementsByTagName("head")[0]}),d=null,h=0,f=[];t.exports=function(t,s){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");s=s||{},void 0===s.singleton&&(s.singleton=u()),void 0===s.insertAt&&(s.insertAt="bottom");var n=e(t);return a(n,s),function(t){for(var i=[],r=0;r<n.length;r++){var l=n[r],o=c[l.id];o.refs--,i.push(o)}if(t){a(e(t),s)}for(var r=0;r<i.length;r++){var o=i[r];if(0===o.refs){for(var v=0;v<o.parts.length;v++)o.parts[v]();delete c[o.id]}}}};var g=function(){var t=[];return function(s,a){return t[s]=a,t.filter(Boolean).join("\n")}}()},124:function(t,s,a){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var n=a(128),i=e(n),r=a(127),l=e(r);t.exports={VhButton:i.default,VhButtonGroup:l.default}},126:function(t,s,a){var e=a(138);"string"==typeof e&&(e=[[t.i,e,""]]);a(64)(e,{});e.locals&&(t.exports=e.locals)},127:function(t,s,a){var e=a(2)(a(132),a(129),null,null,null);t.exports=e.exports},128:function(t,s,a){function e(t){a(126)}var n=a(2)(a(133),a(130),e,null,null);t.exports=n.exports},129:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"btn-group"},[t._t("default")],2)},staticRenderFns:[]}},130:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{class:["btn","btn-"+t.type,"btn-"+t.size,{"btn-block":t.block,disabled:t.disabled||t.loading}],attrs:{disabled:t.disabled,type:"button"}},[t.loading?a("vh-icon",{attrs:{type:"loading"}}):t._e(),t._v(" "),t.icon&&!t.loading?a("vh-icon",{attrs:{type:t.icon}}):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},132:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"VhButtonGroup"}},133:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(13);s.default={name:"VhButton",props:{loading:{type:Boolean},type:{type:String,default:"default"},size:{type:String,default:"md"},icon:{type:String,default:""},disabled:Boolean,block:Boolean},components:{VhIcon:e.VhIcon}}},138:function(t,s,a){s=t.exports=a(63)(),s.push([t.i,".btn-group-lg>.btn .iconfont,.btn-lg .iconfont{font-size:1.25rem}","",{version:3,sources:["/../src/components/button/button.vue"],names:[],mappings:"AACA,+CAA+C,iBAAiB,CAC/D",file:"button.vue",sourcesContent:["\n.btn-lg .iconfont,.btn-group-lg>.btn .iconfont{font-size:1.25rem\n}\n"],sourceRoot:"webpack://"}])},140:function(t,s,a){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var n=a(146);Object.defineProperty(s,"VhBadge",{enumerable:!0,get:function(){return e(n).default}})},146:function(t,s,a){var e=a(2)(a(166),a(157),null,null,null);t.exports=e.exports},157:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"vh-badge"},[t._t("default"),t._v(" "),a("sup",{staticClass:"vh-badge__content",class:{"is-fixed":t.$slots.default,"is-dot":t.isDot},domProps:{textContent:t._s(t.content)}})],2)},staticRenderFns:[]}},166:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"VhBadge",props:{value:{},max:Number,isDot:Boolean},computed:{content:function(){if(!this.isDot){var t=this.value,s=this.max;return"number"==typeof t&&"number"==typeof s&&s<t?s+"+":t}}}}},309:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(140),n=a(124);s.default={components:{VhBadge:e.VhBadge,VhButton:n.VhButton}}},326:function(t,s,a){s=t.exports=a(0)(),s.push([t.i,".ex-badge-container .vh-badge{margin-right:40px}","",{version:3,sources:["/./pages/badge.vue"],names:[],mappings:"AACA,8BAA8B,iBAAiB,CAC9C",file:"badge.vue",sourcesContent:["\n.ex-badge-container .vh-badge{margin-right:40px\n}\n"],sourceRoot:"webpack://"}])},332:function(t,s,a){var e=a(326);"string"==typeof e&&(e=[[t.i,e,""]]);a(103)(e,{});e.locals&&(t.exports=e.locals)},341:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("Badge (徽章)")]),t._v(" "),a("h4",[t._v("Basic")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"ex-badge-container",staticStyle:{padding:"10px 0"}},[a("vh-badge",{attrs:{value:"8"}},[a("vh-button",{attrs:{size:"sm",type:"secondary",icon:"shopping-cart"}})],1),t._v(" "),a("vh-badge",{attrs:{value:888,max:99}},[a("vh-button",{attrs:{size:"sm",type:"secondary",icon:"favorite"}})],1),t._v(" "),a("vh-badge",{attrs:{value:888,"is-dot":!0}},[a("vh-button",{attrs:{size:"sm",type:"hoolay",icon:"textsms"}})],1)],1),t._v(" "),t._m(1),t._v(" "),a("h3",[t._v("Badge Props")]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" VhBadge "),a("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"hljs-string"},[t._v("'src/components/badge/index.vue'")]),t._v(";\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("style")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"padding: 10px 0;"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"ex-badge-container"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vh-badge")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"8"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vh-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"sm"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"secondary"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"shopping-cart"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vh-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vh-badge")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vh-badge")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"888"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"99"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vh-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"sm"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"secondary"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"favorite"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vh-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vh-badge")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vh-badge")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":value")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"888"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":is-dot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("vh-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"sm"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"hoolay"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"textsms"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vh-button")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("vh-badge")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("div")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("value")]),t._v(" "),a("td",[t._v("显示值")]),t._v(" "),a("td",[t._v("string, number")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("max")]),t._v(" "),a("td",[t._v("最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("is-dot")]),t._v(" "),a("td",[t._v("小圆点")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("false")])])])])}]}},66:function(t,s,a){function e(t){a(332)}var n=a(2)(a(309),a(341),e,null,null);t.exports=n.exports}});
//# sourceMappingURL=6.8ae51ff.js.map