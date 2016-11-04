webpackJsonp([11],{168:function(t,s,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0}),s.Notification=s["default"]=void 0;var e=n(1),o=a(e),i=(n(96),o["default"].extend(n(250))),l=void 0,r=[],c=1,p=function h(t){t=t||{};var s=t.onClose,n="notification_"+c++;t.onClose=function(){h.close(n,s)},l=new i({data:t}),l.id=n,l.vm=l.$mount(),document.body.appendChild(l.vm.$el),l.vm.visible=!0,l.dom=l.vm.$el;for(var a=0,e=0,o=r.length;e<o;e++)a+=r[e].$el.offsetHeight+16;return a+=16,l.top=a,r.push(l),l};p.close=function(t,s){for(var n=void 0,a=void 0,e=0,o=r.length;e<o;e++)if(t===r[e].id){"function"==typeof s&&s(r[e]),n=e,a=r[e].dom.offsetHeight,r.splice(e,1);break}if(o>1)for(e=n;e<o-1;e++)r[e].dom.style.top=parseInt(r[e].dom.style.top,10)-a-16+"px"};var d={alert:function(t,s){return s=s||{},s.message=t,s.title=s.title||"提示",p(s)},success:function(t,s){return s=s||{},s.type="success",s.message=t,s.title=s.title||"提示",p(s)},warn:function(t,s){return s=s||{},s.type="warning",s.message=t,s.title=s.title||"提示",p(s)},error:function(t,s){return s=s||{},s.type="error",s.message=t,s.title=s.title||"提示",p(s)},info:function(t,s){return s=s||{},s.type="info",s.message=t,s.title=s.title||"提示",p(s)}};s["default"]=d,s.Notification=p},182:function(t,s,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var e=n(5),o=a(e),i={success:"right",info:"info",warning:"warn",error:"error"};s["default"]={data:function(){return{visible:!1,title:"",message:"",duration:4e3,type:"",onClose:null,closed:!1,top:null,timer:null}},computed:{typeClass:function(){return this.type&&i[this.type]?i[this.type]:""}},watch:{closed:function(t){var s=this;!0===t&&(this.visible=!1,this.$nextTick(function(){s.$destroy(!0)}))}},methods:{handleClose:function(){this.closed=!0,"function"==typeof this.onClose&&this.onClose()},clearTimer:function(){clearTimeout(this.timer)},startTimer:function(){var t=this;this.duration>0&&(this.timer=setTimeout(function(){t.closed||t.handleClose()},this.duration))}},created:function(){var t=this;this.duration>0&&(this.timer=setTimeout(function(){t.closed||t.handleClose()},this.duration))},components:{Icon:o["default"]}}},239:function(t,s){t.exports=" <div class=vh-notification v-show=visible :style=\"{ top: top ? top + 'px' : 'auto' }\" @mouseenter=clearTimer() @mouseleave=startTimer()> <icon class=vh-notification__icon :type=typeClass v-if=type></icon> <div class=vh-notification__group :style=\"{ 'margin-left': typeClass ? '55px' : '0' }\"> <span>{{ title }}</span> <p>{{ message }}</p> <div class=\"vh-notification__closeBtn close\" @click=handleClose()>&times;</div> </div> </div> "},250:function(t,s,n){var a,e;a=n(182),e=n(239),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),e&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=e)},264:function(t,s,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(s,"__esModule",{value:!0});var e=n(168),o=a(e);s["default"]={methods:{showNotification:function(){var t=["success","warn","error","info","alert"][Math.floor(5*Math.random())];o["default"][t]("hello")},notCloseNotification:function(){o["default"].alert("我不会关闭哟",{duration:0})}},components:{}}},290:function(t,s){t.exports='<section><h1>Notifications</h1> <h4>Basic</h4> <pre><code class=language-javascript><span class=hljs-keyword>import</span> NotificationFactory, { Notification } <span class=hljs-keyword>from</span> <span class=hljs-string>\'src/components/notification\'</span>;\n</code></pre> <div class=lead style="padding: 20px 0"> <button class="btn btn-outline-hoolay" @click=showNotification()> 随机显示Notifications </button> <button class="btn btn-secondary" @click=notCloseNotification> 不会关闭的通知 </button> </div> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"lead"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>button</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"btn btn-outline-hoolay"</span> <span class=hljs-attr>@click</span>=<span class=hljs-string>"showNotification()"</span>&gt;</span>\n    随机显示Notifications\n  <span class=hljs-tag>&lt;/<span class=hljs-name>button</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>button</span> <span class=hljs-attr>class</span>=<span class=hljs-string>"btn btn-secondary"</span> <span class=hljs-attr>@click</span>=<span class=hljs-string>"notCloseNotification"</span>&gt;</span>\n    不会关闭的通知\n  <span class=hljs-tag>&lt;/<span class=hljs-name>button</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span> <span class=hljs-attr>type</span>=<span class=hljs-string>"text/babel"</span>&gt;</span><span class=javascript>\n  <span class=hljs-keyword>import</span> NotificationFactory, { Notification } <span class=hljs-keyword>from</span> <span class=hljs-string>\'src/components/notification\'</span>;\n\n  <span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n    <span class=hljs-attr>methods</span>: {\n      <span class=hljs-attr>showNotification</span>: <span class=hljs-function><span class=hljs-keyword>function</span>(<span class=hljs-params></span>) </span>{\n        <span class=hljs-keyword>let</span> type = [<span class=hljs-string>\'success\'</span>, <span class=hljs-string>\'warning\'</span>, <span class=hljs-string>\'error\'</span>, <span class=hljs-string>\'info\'</span>][<span class=hljs-built_in>Math</span>.floor(<span class=hljs-built_in>Math</span>.random()*<span class=hljs-number>4</span>)];\n        NotificationFactory[type](<span class=hljs-string>\'hello\'</span>);\n      },\n      notCloseNotification() {\n        NotificationFactory.alert(<span class=hljs-string>\'我不会关闭哟\'</span>, {\n          <span class=hljs-attr>duration</span>: <span class=hljs-number>0</span>\n        });\n      }\n    },\n    <span class=hljs-attr>components</span>: {}\n  }\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n</code></pre> <h3>Notification Factory Facade</h3> <table> <thead> <tr> <th>方法</th> <th>说明</th> </tr> </thead> <tbody> <tr> <td>alert(message, options)</td> <td>--</td> </tr> <tr> <td>success(message, options)</td> <td>--</td> </tr> <tr> <td>warn(message, options)</td> <td>--</td> </tr> <tr> <td>info(message, options)</td> <td>--</td> </tr> <tr> <td>error(message, options)</td> <td>--</td> </tr> </tbody> </table> <h3>Options</h3> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>title</td> <td>标题</td> <td>string</td> <td>—</td> <td>—</td> </tr> <tr> <td>message</td> <td>说明文字</td> <td>string</td> <td>—</td> <td>—</td> </tr> <tr> <td>type</td> <td>主题样式，如果不在可选值内将被忽略</td> <td>string</td> <td>success/warning/info/error</td> <td>—</td> </tr> <tr> <td>duration</td> <td>显示时间, 毫秒。设为 0 则不会自动关闭</td> <td>number</td> <td>—</td> <td>4000</td> </tr> <tr> <td>onClose</td> <td>关闭时的回调函数</td> <td>function</td> <td>—</td> <td>—</td> </tr> </tbody> </table> </section>'},38:function(t,s,n){var a,e;a=n(264),e=n(290),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),e&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=e)},96:function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=0;s.getScrollBarWidth=function(){if(0!==n||document.documentElement.scrollHeight<=document.documentElement.clientHeight)return n;var t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);var s=t.offsetWidth;t.style.overflow="scroll";var a=document.createElement("div");a.style.width="100%",t.appendChild(a);var e=a.offsetWidth;return t.parentNode.removeChild(t),s-e},s.mixin=function(t,s){for(var n in s)t[n]=s[n];return t}}});
//# sourceMappingURL=11.f698fc8.js.map