webpackJsonp([2],{112:function(n,t,s){var e=s(53),a=s(87),r=s(121);n.exports=function(n){return function(t,s,o){var c,l=e(t),p=a(l.length),i=r(o,p);if(n&&s!=s){for(;p>i;)if(c=l[i++],c!=c)return!0}else for(;p>i;i++)if((n||i in l)&&l[i]===s)return n||i||0;return!n&&-1}}},113:function(n,t,s){n.exports=s(46).document&&document.documentElement},114:function(n,t,s){"use strict";var e=s(83),a=s(58),r=s(69),o={};s(52)(o,s(47)("iterator"),function(){return this}),n.exports=function(n,t,s){n.prototype=e(o,{next:a(1,s)}),r(n,t+" Iterator")}},115:function(n,t,s){var e=s(50),a=s(56),r=s(59);n.exports=s(48)?Object.defineProperties:function(n,t){a(n);for(var s,o=r(t),c=o.length,l=0;c>l;)e.f(n,s=o[l++],t[s]);return n}},118:function(n,t,s){var e=s(51),a=s(65),r=s(63)("IE_PROTO"),o=Object.prototype;n.exports=Object.getPrototypeOf||function(n){return n=a(n),e(n,r)?n[r]:"function"==typeof n.constructor&&n instanceof n.constructor?n.constructor.prototype:n instanceof Object?o:null}},120:function(n,t,s){var e=s(64),a=s(62);n.exports=function(n){return function(t,s){var r,o,c=String(a(t)),l=e(s),p=c.length;return l<0||l>=p?n?"":void 0:(r=c.charCodeAt(l),r<55296||r>56319||l+1===p||(o=c.charCodeAt(l+1))<56320||o>57343?n?c.charAt(l):r:n?c.slice(l,l+2):(r-55296<<10)+(o-56320)+65536)}}},121:function(n,t,s){var e=s(64),a=Math.max,r=Math.min;n.exports=function(n,t){return n=e(n),n<0?a(n+t,0):r(n,t)}},166:function(n,t,s){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}var a=s(247),r=e(a),o=s(248),c=e(o),l=s(246),p=e(l);n.exports={VhContainer:r["default"],VhRow:c["default"],VhCol:p["default"]}},177:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"VhCol",props:{span:{type:Number,"default":1},offset:Number,push:Number,pull:Number},computed:{_classes:function(){var n={};return n["col-xs-"+this.span]=!0,this.offset&&(n["offset-xs-"+this.offset]=!0),this.push&&(n["push-xs-"+this.push]=!0),this.pull&&(n["pull-xs-"+this.pull]=!0),n}}}},178:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"VhContainer",props:{type:String},computed:{isFluid:function(){return"fluid"===this.type}}}},179:function(n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"VhRow",props:{gutter:Number,type:String}}},184:function(n,t,s){n.exports={"default":s(193),__esModule:!0}},191:function(n,t,s){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var a=s(184),r=e(a);t["default"]=function(n){if(Array.isArray(n)){for(var t=0,s=Array(n.length);t<n.length;t++)s[t]=n[t];return s}return(0,r["default"])(n)}},193:function(n,t,s){s(97),s(215),n.exports=s(45).Array.from},201:function(n,t,s){var e=s(71),a=s(47)("toStringTag"),r="Arguments"==e(function(){return arguments}()),o=function(n,t){try{return n[t]}catch(s){}};n.exports=function(n){var t,s,c;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(s=o(t=Object(n),a))?s:r?e(t):"Object"==(c=e(t))&&"function"==typeof t.callee?"Arguments":c}},202:function(n,t,s){"use strict";var e=s(50),a=s(58);n.exports=function(n,t,s){t in n?e.f(n,t,a(0,s)):n[t]=s}},204:function(n,t,s){var e=s(60),a=s(47)("iterator"),r=Array.prototype;n.exports=function(n){return void 0!==n&&(e.Array===n||r[a]===n)}},207:function(n,t,s){var e=s(56);n.exports=function(n,t,s,a){try{return a?t(e(s)[0],s[1]):t(s)}catch(r){var o=n["return"];throw void 0!==o&&e(o.call(n)),r}}},208:function(n,t,s){var e=s(47)("iterator"),a=!1;try{var r=[7][e]();r["return"]=function(){a=!0},Array.from(r,function(){throw 2})}catch(o){}n.exports=function(n,t){if(!t&&!a)return!1;var s=!1;try{var r=[7],o=r[e]();o.next=function(){return{done:s=!0}},r[e]=function(){return o},n(r)}catch(c){}return s}},214:function(n,t,s){var e=s(201),a=s(47)("iterator"),r=s(60);n.exports=s(45).getIteratorMethod=function(n){if(void 0!=n)return n[a]||n["@@iterator"]||r[e(n)]}},215:function(n,t,s){"use strict";var e=s(72),a=s(57),r=s(65),o=s(207),c=s(204),l=s(87),p=s(202),i=s(214);a(a.S+a.F*!s(208)(function(n){Array.from(n)}),"Array",{from:function(n){var t,s,a,u,f=r(n),h="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,g=void 0!==d,j=0,x=i(f);if(g&&(d=e(d,v>2?arguments[2]:void 0,2)),void 0==x||h==Array&&c(x))for(t=l(f.length),s=new h(t);t>j;j++)p(s,j,g?d(f[j],j):f[j]);else for(u=x.call(f),s=new h;!(a=u.next()).done;j++)p(s,j,g?o(u,d,[a.value,j],!0):a.value);return s.length=j,s}})},234:function(n,t){n.exports=" <div :class=_classes> <slot></slot> </div> "},235:function(n,t){n.exports=" <div :class=\"{\n  'vh-container': !isFluid,\n  'vh-container-fluid': isFluid\n}\"> <slot></slot> </div> "},236:function(n,t){n.exports=" <div class=vh-row> <slot></slot> </div> "},246:function(n,t,s){var e,a;e=s(177),a=s(234),n.exports=e||{},n.exports.__esModule&&(n.exports=n.exports["default"]),a&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=a)},247:function(n,t,s){var e,a;e=s(178),a=s(235),n.exports=e||{},n.exports.__esModule&&(n.exports=n.exports["default"]),a&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=a)},248:function(n,t,s){var e,a;e=s(179),a=s(236),n.exports=e||{},n.exports.__esModule&&(n.exports=n.exports["default"]),a&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=a)},262:function(n,t,s){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var a=s(191),r=e(a),o=s(166);t["default"]={computed:{cols:function(){return[].concat((0,r["default"])(Array(24).keys())).map(function(n){return 1+n})}},components:{VhContainer:o.VhContainer,VhRow:o.VhRow,VhCol:o.VhCol}}},277:function(n,t,s){t=n.exports=s(0)(),t.push([n.i,".ex-layout .col-sm-4{background-color:#eee;padding:20px 0;text-align:center}",""])},288:function(n,t){n.exports='<section><h1>布局 (Layout)</h1> <p><code>Bootstrap</code>默认12栅格布局系统特性全部保留。</p> <div class="container ex-layout"> <div class=row> <div class=col-sm-4> One of three columns </div> <div class=col-sm-4> One of three columns </div> <div class=col-sm-4> One of three columns </div> </div> </div> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"container"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"row"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"col-sm-4"</span>&gt;</span>\n      One of three columns\n    <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"col-sm-4"</span>&gt;</span>\n      One of three columns\n    <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"col-sm-4"</span>&gt;</span>\n      One of three columns\n    <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n</code></pre> <h4>为了满足更精细的控制，系统扩展了一份24栅格的布局系统。</h4> <ul> <li>默认列间隔（gutter）16px</li> </ul> <vh-container> <vh-row> <vh-col :span=4> <h2 style="padding: 50px 0; background-color: #eeeeee; text-align: center">4</h2> </vh-col> <vh-col :span=20> <h2 style="padding: 50px 0; background-color: #eeeeee; text-align: center">20</h2> </vh-col> </vh-row> <vh-row> <vh-col v-for="n in cols"> <h6 style="text-align: center; padding: 70px 0; background-color:  #eeeeee">{{ n }}</h6> </vh-col> </vh-row> </vh-container> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>vh-container</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-row</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>vh-col</span> <span class=hljs-attr>:span</span>=<span class=hljs-string>"4"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>h2</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"padding: 50px 0; background-color: #eeeeee; text-align: center"</span>&gt;</span>4<span class=hljs-tag>&lt;/<span class=hljs-name>h2</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>vh-col</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>vh-col</span> <span class=hljs-attr>:span</span>=<span class=hljs-string>"20"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>h2</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"padding: 50px 0; background-color: #eeeeee; text-align: center"</span>&gt;</span>20<span class=hljs-tag>&lt;/<span class=hljs-name>h2</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>vh-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>vh-row</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-row</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>vh-col</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in cols"</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>h6</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"text-align: center; padding: 70px 0; background-color:  #eeeeee;"</span>&gt;</span><span>{{</span> n <span>}}</span><span class=hljs-tag>&lt;/<span class=hljs-name>h6</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>vh-col</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>vh-row</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>vh-container</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>import</span> { VhContainer, VhRow, VhCol } <span class=hljs-keyword>from</span> <span class=hljs-string>\'src/components/layout/index\'</span>;\n\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    <span class=hljs-attr>computed</span>: {\n      cols() {\n        <span class=hljs-keyword>return</span> [...Array(<span class=hljs-number>24</span>).keys()].map(<span class=hljs-function>(<span class=hljs-params>n</span>) =&gt;</span> <span class=hljs-number>1</span>+n);\n      }\n    },\n    <span class=hljs-attr>components</span>: {\n      VhContainer, VhRow, VhCol\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n</code></pre> <h3>Links</h3> <p><a href=http://v4-alpha.getbootstrap.com/layout/grid/ >http://v4-alpha.getbootstrap.com/layout/grid/</a></p> </section>'},301:function(n,t,s){var e=s(277);"string"==typeof e&&(e=[[n.i,e,""]]);s(4)(e,{});e.locals&&(n.exports=e.locals)},36:function(n,t,s){var e,a;s(301),e=s(262),a=s(288),n.exports=e||{},n.exports.__esModule&&(n.exports=n.exports["default"]),a&&(("function"==typeof n.exports?n.exports.options||(n.exports.options={}):n.exports).template=a)},45:function(n,t){var s=n.exports={version:"2.4.0"};"number"==typeof __e&&(__e=s)},46:function(n,t){var s=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=s)},47:function(n,t,s){var e=s(70)("wks"),a=s(61),r=s(46).Symbol,o="function"==typeof r,c=n.exports=function(n){return e[n]||(e[n]=o&&r[n]||(o?r:a)("Symbol."+n))};c.store=e},48:function(n,t,s){n.exports=!s(54)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},50:function(n,t,s){var e=s(56),a=s(73),r=s(66),o=Object.defineProperty;t.f=s(48)?Object.defineProperty:function(n,t,s){if(e(n),t=r(t,!0),e(s),a)try{return o(n,t,s)}catch(c){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");return"value"in s&&(n[t]=s.value),n}},51:function(n,t){var s={}.hasOwnProperty;n.exports=function(n,t){return s.call(n,t)}},52:function(n,t,s){var e=s(50),a=s(58);n.exports=s(48)?function(n,t,s){return e.f(n,t,a(1,s))}:function(n,t,s){return n[t]=s,n}},53:function(n,t,s){var e=s(81),a=s(62);n.exports=function(n){return e(a(n))}},54:function(n,t){n.exports=function(n){try{return!!n()}catch(t){return!0}}},55:function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},56:function(n,t,s){var e=s(55);n.exports=function(n){if(!e(n))throw TypeError(n+" is not an object!");return n}},57:function(n,t,s){var e=s(46),a=s(45),r=s(72),o=s(52),c="prototype",l=function(n,t,s){var p,i,u,f=n&l.F,h=n&l.G,v=n&l.S,d=n&l.P,g=n&l.B,j=n&l.W,x=h?a:a[t]||(a[t]={}),y=x[c],m=h?e:v?e[t]:(e[t]||{})[c];h&&(s=t);for(p in s)i=!f&&m&&void 0!==m[p],i&&p in x||(u=i?m[p]:s[p],x[p]=h&&"function"!=typeof m[p]?s[p]:g&&i?r(u,e):j&&m[p]==u?function(n){var t=function(t,s,e){if(this instanceof n){switch(arguments.length){case 0:return new n;case 1:return new n(t);case 2:return new n(t,s)}return new n(t,s,e)}return n.apply(this,arguments)};return t[c]=n[c],t}(u):d&&"function"==typeof u?r(Function.call,u):u,d&&((x.virtual||(x.virtual={}))[p]=u,n&l.R&&y&&!y[p]&&o(y,p,u)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,n.exports=l},58:function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},59:function(n,t,s){var e=s(85),a=s(68);n.exports=Object.keys||function(n){return e(n,a)}},60:function(n,t){n.exports={}},61:function(n,t){var s=0,e=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++s+e).toString(36))}},62:function(n,t){n.exports=function(n){if(void 0==n)throw TypeError("Can't call method on  "+n);return n}},63:function(n,t,s){var e=s(70)("keys"),a=s(61);n.exports=function(n){return e[n]||(e[n]=a(n))}},64:function(n,t){var s=Math.ceil,e=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?e:s)(n)}},65:function(n,t,s){var e=s(62);n.exports=function(n){return Object(e(n))}},66:function(n,t,s){var e=s(55);n.exports=function(n,t){if(!e(n))return n;var s,a;if(t&&"function"==typeof(s=n.toString)&&!e(a=s.call(n)))return a;if("function"==typeof(s=n.valueOf)&&!e(a=s.call(n)))return a;if(!t&&"function"==typeof(s=n.toString)&&!e(a=s.call(n)))return a;throw TypeError("Can't convert object to primitive value")}},67:function(n,t,s){var e=s(55),a=s(46).document,r=e(a)&&e(a.createElement);n.exports=function(n){return r?a.createElement(n):{}}},68:function(n,t){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},69:function(n,t,s){var e=s(50).f,a=s(51),r=s(47)("toStringTag");n.exports=function(n,t,s){n&&!a(n=s?n:n.prototype,r)&&e(n,r,{configurable:!0,value:t})}},70:function(n,t,s){var e=s(46),a="__core-js_shared__",r=e[a]||(e[a]={});n.exports=function(n){return r[n]||(r[n]={})}},71:function(n,t){var s={}.toString;n.exports=function(n){return s.call(n).slice(8,-1)}},72:function(n,t,s){var e=s(80);n.exports=function(n,t,s){if(e(n),void 0===t)return n;switch(s){case 1:return function(s){return n.call(t,s)};case 2:return function(s,e){return n.call(t,s,e)};case 3:return function(s,e,a){return n.call(t,s,e,a)}}return function(){return n.apply(t,arguments)}}},73:function(n,t,s){n.exports=!s(48)&&!s(54)(function(){return 7!=Object.defineProperty(s(67)("div"),"a",{get:function(){return 7}}).a})},74:function(n,t){n.exports=!0},80:function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},81:function(n,t,s){var e=s(71);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(n){return"String"==e(n)?n.split(""):Object(n)}},82:function(n,t,s){"use strict";var e=s(74),a=s(57),r=s(86),o=s(52),c=s(51),l=s(60),p=s(114),i=s(69),u=s(118),f=s(47)("iterator"),h=!([].keys&&"next"in[].keys()),v="@@iterator",d="keys",g="values",j=function(){return this};n.exports=function(n,t,s,x,y,m,w){p(s,t,x);var b,_,O,M=function(n){if(!h&&n in P)return P[n];switch(n){case d:return function(){return new s(this,n)};case g:return function(){return new s(this,n)}}return function(){return new s(this,n)}},k=t+" Iterator",S=y==g,A=!1,P=n.prototype,V=P[f]||P[v]||y&&P[y],C=V||M(y),E=y?S?M("entries"):C:void 0,F="Array"==t?P.entries||V:V;if(F&&(O=u(F.call(new n)),O!==Object.prototype&&(i(O,k,!0),e||c(O,f)||o(O,f,j))),S&&V&&V.name!==g&&(A=!0,C=function(){return V.call(this)}),e&&!w||!h&&!A&&P[f]||o(P,f,C),l[t]=C,l[k]=j,y)if(b={values:S?C:M(g),keys:m?C:M(d),entries:E},w)for(_ in b)_ in P||r(P,_,b[_]);else a(a.P+a.F*(h||A),t,b);return b}},83:function(n,t,s){var e=s(56),a=s(115),r=s(68),o=s(63)("IE_PROTO"),c=function(){},l="prototype",p=function(){var n,t=s(67)("iframe"),e=r.length,a="<",o=">";for(t.style.display="none",s(113).appendChild(t),t.src="javascript:",n=t.contentWindow.document,n.open(),n.write(a+"script"+o+"document.F=Object"+a+"/script"+o),n.close(),p=n.F;e--;)delete p[l][r[e]];return p()};n.exports=Object.create||function(n,t){var s;return null!==n?(c[l]=e(n),s=new c,c[l]=null,s[o]=n):s=p(),void 0===t?s:a(s,t)}},85:function(n,t,s){var e=s(51),a=s(53),r=s(112)(!1),o=s(63)("IE_PROTO");n.exports=function(n,t){var s,c=a(n),l=0,p=[];for(s in c)s!=o&&e(c,s)&&p.push(s);for(;t.length>l;)e(c,s=t[l++])&&(~r(p,s)||p.push(s));return p}},86:function(n,t,s){n.exports=s(52)},87:function(n,t,s){var e=s(64),a=Math.min;n.exports=function(n){return n>0?a(e(n),9007199254740991):0}},97:function(n,t,s){"use strict";var e=s(120)(!0);s(82)(String,"String",function(n){this._t=String(n),this._i=0},function(){var n,t=this._t,s=this._i;return s>=t.length?{value:void 0,done:!0}:(n=e(t,s),this._i+=n.length,{value:n,done:!1})})}});
//# sourceMappingURL=2.fea5c98.js.map