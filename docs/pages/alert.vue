<template><section><h1>Alert (提示块)</h1>
<h4>Basic</h4>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> VhAlert <span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/alert/alert.vue'</span>;
</code></pre>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">vh-alert</span>&gt;</span> Hello this is info<span class="hljs-tag">&lt;/<span class="hljs-name">vh-alert</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">vh-alert</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span>&gt;</span>Hello this is info<span class="hljs-tag">&lt;/<span class="hljs-name">vh-alert</span>&gt;</span>
</code></pre>
<div class="ex-alert-container">
  <vh-alert>
    我们将很快为您发货 ！
  </vh-alert>
  <vh-alert type="warning">
    您已经支付完成了 ！
  </vh-alert>
  <vh-alert type="success">
    感谢您的支持 !
  </vh-alert>
  <vh-alert type="danger">
    500 Internal Error .
  </vh-alert>
</div>

<h3>Alert Props</h3>
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
<td>type</td>
<td>类型</td>
<td>string</td>
<td>info, success, warning, danger</td>
<td>info</td>
</tr>
<tr>
<td>visible</td>
<td>是否可见</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
</tbody>
</table>
</section></template>

<script>
  import VhAlert from 'src/components/alert/alert.vue';

  export default {
    components: {
      VhAlert
    }
  }
</script>