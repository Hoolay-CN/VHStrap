<template><section><h1>Input (输入框)</h1>
<h4>Basic</h4>
<div style="padding:  10px 0;" class="ex-input-container">
  <vh-input :value.sync="aValue" size="lg" type="email" placeholder="large Email" name="email"></vh-input>
  <vh-input :value.sync="aValue" type="email" placeholder="middle Email" name="email"></vh-input>
  <vh-input :value.sync="aValue" size="sm" type="email" placeholder="small Email" name="email"></vh-input>
  <strong> {{ aValue }}</strong>
</div>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding:  10px 0;"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ex-input-container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-input</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"aValue"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"lg"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"large Email"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"email"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-input</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-input</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"aValue"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"middle Email"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"email"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-input</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-input</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"aValue"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"sm"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"small Email"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"email"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-input</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span> <span>{{</span> aValue <span>}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { VhInputGroup, VhInput } <span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/input/index'</span>;

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">aValue</span>: <span class="hljs-string">''</span>
      }
    },

    <span class="hljs-attr">components</span>: {
      VhInput, VhInputGroup
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<h3>Group</h3>
<div style="padding-bottom: 10px;">
  <vh-input-group :style="{width: '320px'}">
      <div class="input-group-addon">$</div>
    <vh-input placeholder="price"></vh-input>
      <div class="input-group-addon">00.00</div>
</vh-input-group>
</div>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">vh-input-group</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">"{width: '320px'}"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"input-group-addon"</span>&gt;</span>$<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"price"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-input</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"input-group-addon"</span>&gt;</span>00.00<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">vh-input-group</span>&gt;</span>
</code></pre>
<h4>Validate</h4>
<p>@Fixed</p>
<h3>Input props</h3>
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
<td>初始值</td>
<td>string，number</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>type</td>
<td>类型</td>
<td>string</td>
<td>text，textarea...</td>
<td>text</td>
</tr>
<tr>
<td>placeholder</td>
<td>占位文本</td>
<td>string</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>readonly</td>
<td>只读</td>
<td>boolean</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>disabled</td>
<td>不可用</td>
<td>boolean</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>name</td>
<td>字段名称</td>
<td>string</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>auto-complete</td>
<td>raw</td>
<td>string</td>
<td>on，off</td>
<td>off</td>
</tr>
<tr>
<td>maxlength</td>
<td>raw</td>
<td>number</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>minlength</td>
<td>raw</td>
<td>number</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>size</td>
<td>输入框尺寸</td>
<td>string</td>
<td>lg，sm</td>
<td>--</td>
</tr>
<tr>
<td>on-change</td>
<td>回调</td>
<td>function</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>on-blur</td>
<td>回调</td>
<td>function</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>on-focus</td>
<td>回调</td>
<td>function</td>
<td>--</td>
<td>--</td>
</tr>
</tbody>
</table>


</section></template>
<style lang="sass">
  .ex-input-container {
    .form-control {
      margin-bottom: 5px;
    }
  }
</style>
<script>
  import { VhInputGroup, VhInput } from 'src/components/input/index';

  export default {
    data() {
      return {
        aValue: ''
      }
    },

    components: {
      VhInput, VhInputGroup
    }
  }
</script>