<template><section><h1>Notifications</h1>
<h3>基本用法</h3>
<div class="lead" style="padding: 30px;">
  <button class="btn btn-outline-hoolay" @click="showNotification()">
    随机显示Notifications
  </button>
</div>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"lead"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-outline-hoolay"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"showNotification()"</span>&gt;</span>
    随机显示Notifications
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/babel"</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> Notification <span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/notification'</span>;

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      <span class="hljs-attr">showNotification</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">let</span> vmNotify = Notification();

        vmNotify.title = <span class="hljs-string">'我是一个警告s'</span>;
        vmNotify.message = <span class="hljs-string">'邮箱必须完成!'</span>;

        vmNotify.type = [<span class="hljs-string">'success'</span>, <span class="hljs-string">'warning'</span>, <span class="hljs-string">'error'</span>, <span class="hljs-string">'info'</span>][<span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random()*<span class="hljs-number">4</span>)];
        vmNotify.visible = <span class="hljs-literal">true</span>;

      }
    },
    <span class="hljs-attr">components</span>: {}
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>

<h2>Options</h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>标题</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>message</td>
<td>说明文字</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>主题样式，如果不在可选值内将被忽略</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>—</td>
</tr>
<tr>
<td>duration</td>
<td>显示时间, 毫秒。设为 0 则不会自动关闭</td>
<td>number</td>
<td>—</td>
<td>4000</td>
</tr>
<tr>
<td>onClose</td>
<td>关闭时的回调函数</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
</section></template>

<script type="text/babel">
  import Notification from 'src/components/notification';

  export default {
    methods: {
      showNotification: function() {
        let vmNotify = Notification();

        vmNotify.title = '我是一个警告s';
        vmNotify.message = '邮箱必须完成!';

        vmNotify.type = ['success', 'warning', 'error', 'info'][Math.floor(Math.random()*4)];
        vmNotify.visible = true;

      }
    },
    components: {}
  }
</script>