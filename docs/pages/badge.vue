<template><section><h1>Badge (徽章)</h1>
<h4>Basic</h4>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> VhBadge <span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/badge/index.vue'</span>;
</code></pre>
<div style="padding: 10px 0;" class="ex-badge-container">
  <vh-badge value="8">
    <vh-button size="sm" type="secondary" icon="shopping-cart"></vh-button>
  </vh-badge>
  <vh-badge :value="888" :max="99">
    <vh-button size="sm" type="secondary" icon="favorite"></vh-button>
  </vh-badge>
  <vh-badge :value="888" :is-dot="true">
    <vh-button size="sm" type="hoolay" icon="textsms"></vh-button>
  </vh-badge>
</div>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 10px 0;"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ex-badge-container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-badge</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"8"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"secondary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"shopping-cart"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">"888"</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">"99"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"secondary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"favorite"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">"888"</span> <span class="hljs-attr">:is-dot</span>=<span class="hljs-string">"true"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"hoolay"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"textsms"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-badge</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>


<h3>Badge Props</h3>
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
<td>value</td>
<td>显示值</td>
<td>string, number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max</td>
<td>最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>is-dot</td>
<td>小圆点</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
</section></template>
<style lang="sass">
  .ex-badge-container {
    .vh-badge {
      margin-right: 40px;
    }
  }
</style>
<script>
  import VhBadge from 'src/components/badge/index.vue';
  import { VhButton, VhButtonGroup } from 'src/components/button/index';

  export default {
    components: {
      VhBadge,
      VhButton
    }
  }
</script>