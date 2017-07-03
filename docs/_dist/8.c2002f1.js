webpackJsonp([8],{255:function(s,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(77);a["default"]={data:function(){return{types:["hoolay","primary","success","info","warning","danger","secondary","default","link"]}},components:{VhButton:t.VhButton,VhButtonGroup:t.VhButtonGroup}}},273:function(s,a,n){a=s.exports=n(0)(),a.push([s.i,".ex-btn-container{padding:10px 0}.ex-btn-container .btn{margin-right:10px;margin-bottom:5px}",""])},281:function(s,a){s.exports='<section><h1>Buttons (按钮)</h1> <h3>Basic</h3> <div class=ex-btn-container> <vh-button :type=el v-for="el in types">{{el}}</vh-button> </div> <h3>Outline</h3> <div class=ex-btn-container> <vh-button :type="`outline-${el}`" v-for="el in types">outline-{{el}}</vh-button> </div> <h3>Disabled</h3> <div class=ex-btn-container> <vh-button type=hoolay :disabled=true>Disabled</vh-button> </div> <h3>Loading</h3> <div class=ex-btn-container> <vh-button type=hoolay :loading=true>Loading...</vh-button> </div> <h3>Block</h3> <div class=ex-btn-container> <vh-button type=hoolay :block=true>block</vh-button> </div> <h3>Size</h3> <div class=ex-btn-container> <vh-button size=lg type=hoolay>Large</vh-button> <vh-button size=md type=success>Default</vh-button> <vh-button size=sm type=warning>Small</vh-button> </div> <h3>Group</h3> <div class=ex-btn-group-container style="padding: 10px 0"> <vh-button-group> <vh-button type=secondary icon=store>Home</vh-button> <vh-button type=secondary icon=yishujia>Artists</vh-button> <vh-button type=secondary icon=collections>Arts</vh-button> </vh-button-group> </div> <h3>Icon</h3> <div class=ex-btn-container> <vh-button type=hoolay size=sm icon=send>发送邮件</vh-button> <vh-button type=secondary size=sm icon=settings></vh-button> <vh-button type=outline-success size=sm icon=face></vh-button> </div> <h4><code>#&lt;code&gt;</code></h4> <pre><code class=language-html>### Outline\n<span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"ex-btn-container"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>:type</span>=<span class=hljs-string>"`outline-${el}`"</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"el in types"</span>&gt;</span>outline-<span>{{</span>el<span>}}</span><span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n### Disabled\n<span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"ex-btn-container"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"hoolay"</span> <span class=hljs-attr>:disabled</span>=<span class=hljs-string>"true"</span>&gt;</span>Disabled<span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n### Loading\n<span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"ex-btn-container"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"hoolay"</span> <span class=hljs-attr>:loading</span>=<span class=hljs-string>"true"</span>&gt;</span>Loading...<span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n### Block\n<span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"ex-btn-container"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"hoolay"</span> <span class=hljs-attr>:block</span>=<span class=hljs-string>"true"</span>&gt;</span>block<span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n### Size\n<span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"ex-btn-container"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"lg"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"hoolay"</span>&gt;</span>Large<span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"md"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"success"</span>&gt;</span>Default<span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"sm"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"warning"</span>&gt;</span>Small<span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n### Group\n<span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"ex-btn-group-container"</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"padding: 10px 0;"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-button-group</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"secondary"</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"store"</span>&gt;</span>Home<span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"secondary"</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"yishujia"</span>&gt;</span>Artists<span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"secondary"</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"collections"</span>&gt;</span>Arts<span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>vh-button-group</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n### Icon\n<span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"ex-btn-container"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"hoolay"</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"sm"</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"send"</span>&gt;</span>发送邮件<span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"secondary"</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"sm"</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"settings"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"outline-success"</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"sm"</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"face"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>import</span> { VhButton, VhButtonGroup } <span class=hljs-keyword>from</span> <span class=hljs-string>\'src/components/button/index\'</span>;\n\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    data() {\n      <span class=hljs-keyword>return</span> {\n        <span class=hljs-attr>types</span>: [<span class=hljs-string>\'hoolay\'</span>, <span class=hljs-string>\'primary\'</span>, <span class=hljs-string>\'success\'</span>, <span class=hljs-string>\'info\'</span>, <span class=hljs-string>\'warning\'</span>, <span class=hljs-string>\'danger\'</span>, <span class=hljs-string>\'secondary\'</span>, <span class=hljs-string>\'default\'</span>]\n      }\n    },\n    <span class=hljs-attr>components</span>: {\n      VhButton, VhButtonGroup\n    }\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n</code></pre> </section>'},29:function(s,a,n){var t,l;n(297),t=n(255),l=n(281),s.exports=t||{},s.exports.__esModule&&(s.exports=s.exports["default"]),l&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=l)},297:function(s,a,n){var t=n(273);"string"==typeof t&&(t=[[s.i,t,""]]);n(4)(t,{});t.locals&&(s.exports=t.locals)},77:function(s,a,n){"use strict";function t(s){return s&&s.__esModule?s:{"default":s}}var l=n(94),p=t(l),e=n(93),o=t(e);s.exports={VhButton:p["default"],VhButtonGroup:o["default"]}},78:function(s,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={name:"VhButtonGroup"}},79:function(s,a,n){"use strict";function t(s){return s&&s.__esModule?s:{"default":s}}Object.defineProperty(a,"__esModule",{value:!0});var l=n(5),p=t(l);a["default"]={name:"VhButton",props:{loading:{type:Boolean},type:{type:String,"default":"default"},size:{type:String,"default":"md"},icon:{type:String,"default":""},disabled:Boolean,block:Boolean},components:{VhIcon:p["default"]}}},90:function(s,a,n){a=s.exports=n(0)(),a.push([s.i,".btn-group-lg>.btn .iconfont,.btn-lg .iconfont{font-size:1.25rem}",""])},91:function(s,a){s.exports=" <div class=btn-group> <slot></slot> </div> "},92:function(s,a){s.exports=" <button :class=\"['btn','btn-' + type, 'btn-' + size, {\n      'btn-block': block,\n      'disabled' : disabled || loading\n    }]\" :disabled=disabled type=button> <vh-icon type=loading v-if=loading></vh-icon> <vh-icon :type=icon v-if=\"icon && !loading\"></vh-icon> <slot></slot> </button> "},93:function(s,a,n){var t,l;t=n(78),l=n(91),s.exports=t||{},s.exports.__esModule&&(s.exports=s.exports["default"]),l&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=l)},94:function(s,a,n){var t,l;n(95),t=n(79),l=n(92),s.exports=t||{},s.exports.__esModule&&(s.exports=s.exports["default"]),l&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=l)},95:function(s,a,n){var t=n(90);"string"==typeof t&&(t=[[s.i,t,""]]);n(4)(t,{});t.locals&&(s.exports=t.locals)}});
//# sourceMappingURL=8.c2002f1.js.map