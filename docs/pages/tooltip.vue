<template><section><h1>Tooltip (提示便签)</h1>
<h4>Basic</h4>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> VhTooltip <span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/tooltip/index.vue'</span>;
</code></pre>
<div style="padding: 15px 0;">
  <vh-tooltip content="Top Hi center" placement="top" theme="light">
    <vh-badge value="9+">
      <button class="btn btn-secondary">Dark Tooltip</button>
    </vh-badge>
  </vh-tooltip>
  <vh-tooltip content="您购物车有 8 件商品 ." placement="top" style="margin-left: 50px;">
    <vh-badge value="8">
      <vh-button icon="shopping-cart" type="secondary">Cart</vh-button>
    </vh-badge>
  </vh-tooltip>
</div>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 15px 0;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Top Hi center"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">"light"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-badge</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"9+"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-secondary"</span>&gt;</span>Dark Tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vh-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-tooltip</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-tooltip</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"您购物车有 8 件商品 ."</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-left: 50px;"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-badge</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"8"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"shopping-cart"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"secondary"</span>&gt;</span>Cart<span class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vh-badge</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-tooltip</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>

<h3>Tooltip Props</h3>
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
<td>theme</td>
<td>默认提供的主题</td>
<td>String</td>
<td><code>dark</code>, <code>light</code></td>
<td>dark</td>
</tr>
<tr>
<td>content</td>
<td>显示的内容，也可以通过 <code>slot#content</code> 传入 DOM</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>placement</td>
<td>Tooltip 的出现位置</td>
<td>String</td>
<td><code>top</code>, <code>top-start</code>, <code>top-end</code>, <code>bottom</code>, <code>bottom-start</code>, <code>bottom-end</code>, <code>left</code>, <code>left-start</code>, <code>left-end</code>, <code>right</code>, <code>right-start</code>, <code>right-end</code></td>
<td>bottom</td>
</tr>
<tr>
<td>value(v-model)</td>
<td>状态是否可见</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Tooltip 是否可用</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>出现位置的偏移量</td>
<td>Number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>transition</td>
<td>定义渐变动画</td>
<td>String</td>
<td>—</td>
<td><code>fade-in-linear</code></td>
</tr>
<tr>
<td>visible-arrow</td>
<td>是否显示 Tooltip 箭头，更多参数可见<a href="https://github.com/element-component/vue-popper">Vue-popper</a></td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>options</td>
<td><a href="https://popper.js.org/documentation.html">popper.js</a> 的参数</td>
<td>Object</td>
<td>参考 <a href="https://popper.js.org/documentation.html">popper.js</a> 文档</td>
<td><code>{ boundariesElement: 'body', gpuAcceleration: false }</code></td>
</tr>
<tr>
<td>open-delay</td>
<td>延迟出现，单位毫秒</td>
<td>Number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3>Links</h3>
<p><a href="https://popper.js.org/documentation.html">https://popper.js.org/documentation.html</a></p>
</section></template>

<script>
  import { VhTooltip } from 'src/components/tooltip';
  import { VhBadge } from 'src/components/badge';
  import { VhButton } from 'src/components/button/index';

  export default {
    components: {
      VhTooltip,
      VhBadge,
      VhButton
    }
  }
</script>