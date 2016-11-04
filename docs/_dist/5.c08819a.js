webpackJsonp([5],{104:function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"VhBadge",props:{value:{},max:Number,isDot:Boolean},computed:{content:function(){if(!this.isDot){var s=this.value,t=this.max;return"number"==typeof s&&"number"==typeof t&&t<s?t+"+":s}}}}},123:function(s,t){s.exports=" <div class=vh-badge> <slot></slot> <sup v-text=content class=vh-badge__content :class=\"{ 'is-fixed': $el.children.length > 1, 'is-dot': isDot }\"> </sup> </div> "},131:function(s,t,a){var n,e;n=a(104),e=a(123),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),e&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=e)},254:function(s,t,a){"use strict";function n(s){return s&&s.__esModule?s:{"default":s}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(131),l=n(e),p=a(77);t["default"]={components:{VhBadge:l["default"],VhButton:p.VhButton}}},272:function(s,t,a){t=s.exports=a(0)(),t.push([s.i,".ex-badge-container .vh-badge{margin-right:40px}",""])},28:function(s,t,a){var n,e;a(296),n=a(254),e=a(280),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),e&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=e)},280:function(s,t){s.exports='<section><h1>Badge (徽章)</h1> <h4>Basic</h4> <pre><code class=language-javascript><span class=hljs-keyword>import</span> VhBadge <span class=hljs-keyword>from</span> <span class=hljs-string>\'src/components/badge/index.vue\'</span>;\n</code></pre> <div style="padding: 10px 0" class=ex-badge-container> <vh-badge value=8> <vh-button size=sm type=secondary icon=shopping-cart></vh-button> </vh-badge> <vh-badge :value=888 :max=99> <vh-button size=sm type=secondary icon=favorite></vh-button> </vh-badge> <vh-badge :value=888 :is-dot=true> <vh-button size=sm type=hoolay icon=textsms></vh-button> </vh-badge> </div> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>style</span>=<span class=hljs-string>"padding: 10px 0;"</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"ex-badge-container"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-badge</span> <span class=hljs-attr>value</span>=<span class=hljs-string>"8"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"sm"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"secondary"</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"shopping-cart"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>vh-badge</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-badge</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"888"</span> <span class=hljs-attr>:max</span>=<span class=hljs-string>"99"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"sm"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"secondary"</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"favorite"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>vh-badge</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>vh-badge</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>"888"</span> <span class=hljs-attr>:is-dot</span>=<span class=hljs-string>"true"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>vh-button</span> <span class=hljs-attr>size</span>=<span class=hljs-string>"sm"</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"hoolay"</span> <span class=hljs-attr>icon</span>=<span class=hljs-string>"textsms"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>vh-button</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>vh-badge</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n</code></pre> <h3>Badge Props</h3> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>value</td> <td>显示值</td> <td>string, number</td> <td>—</td> <td>—</td> </tr> <tr> <td>max</td> <td>最大值，超过最大值会显示 \'{max}+\'，要求 value 是 Number 类型</td> <td>number</td> <td>—</td> <td>—</td> </tr> <tr> <td>is-dot</td> <td>小圆点</td> <td>boolean</td> <td>—</td> <td>false</td> </tr> </tbody> </table> </section>'},296:function(s,t,a){var n=a(272);"string"==typeof n&&(n=[[s.i,n,""]]);a(4)(n,{});n.locals&&(s.exports=n.locals)},77:function(s,t,a){"use strict";function n(s){return s&&s.__esModule?s:{"default":s}}var e=a(94),l=n(e),p=a(93),o=n(p);s.exports={VhButton:l["default"],VhButtonGroup:o["default"]}},78:function(s,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"VhButtonGroup"}},79:function(s,t,a){"use strict";function n(s){return s&&s.__esModule?s:{"default":s}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(5),l=n(e);t["default"]={name:"VhButton",props:{loading:{type:Boolean},type:{type:String,"default":"default"},size:{type:String,"default":"md"},icon:{type:String,"default":""},disabled:Boolean,block:Boolean},components:{VhIcon:l["default"]}}},90:function(s,t,a){t=s.exports=a(0)(),t.push([s.i,".btn-group-lg>.btn .iconfont,.btn-lg .iconfont{font-size:1.25rem}",""])},91:function(s,t){s.exports=" <div class=btn-group> <slot></slot> </div> "},92:function(s,t){s.exports=" <button :class=\"['btn','btn-' + type, 'btn-' + size, {\n      'btn-block': block,\n      'disabled' : disabled || loading\n    }]\" :disabled=disabled type=button> <vh-icon type=loading v-if=loading></vh-icon> <vh-icon :type=icon v-if=\"icon && !loading\"></vh-icon> <slot></slot> </button> "},93:function(s,t,a){var n,e;n=a(78),e=a(91),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),e&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=e)},94:function(s,t,a){var n,e;a(95),n=a(79),e=a(92),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports["default"]),e&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=e)},95:function(s,t,a){var n=a(90);"string"==typeof n&&(n=[[s.i,n,""]]);a(4)(n,{});n.locals&&(s.exports=n.locals)}});
//# sourceMappingURL=5.c08819a.js.map