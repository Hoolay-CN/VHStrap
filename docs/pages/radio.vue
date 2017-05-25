<template><section><h1>Radio (单选框)</h1>
<p>单选框需要在Group模式下使用</p>
<h4>Basic</h4>
<div style="padding: 10px 0;">
  <vh-radio-group v-model="groupSingleValue">
    <vh-radio label="西瓜" name="fruit"></vh-radio>
    <vh-radio label="苹果" name="fruit"></vh-radio>
    <vh-radio label="哈密瓜" name="fruit"></vh-radio>
  </vh-radio-group>
<p><strong>{{ groupSingleValue }}</strong></p>
</div>

<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 10px 0;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-radio-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">"groupSingleValue"</span> <span class="hljs-attr">@input</span>=<span class="hljs-string">"onRadioCheck"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"西瓜"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"fruit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"苹果"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"fruit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"哈密瓜"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"fruit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-radio-group</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span><span>{{</span> groupSingleValue <span>}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { VhRadio, VhRadioGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/radio/index'</span>;

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">groupSingleValue</span>: <span class="hljs-string">'西瓜'</span>
      }
    },

    <span class="hljs-attr">methods</span>: {
      onRadioCheck(val) {
        <span class="hljs-keyword">this</span>.groupSingleValue = val; <span class="hljs-comment">// 手动更新$parentのvalue，去刷新子view的状态</span>
      }
    },

    <span class="hljs-attr">components</span>: {
      VhRadio, VhRadioGroup
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<h3>Radio Props</h3>
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
<td>{any}</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>label</td>
<td>选中的值</td>
<td>string</td>
<td>必选</td>
<td>--</td>
</tr>
<tr>
<td>disabled</td>
<td>是否不可用</td>
<td>boolean</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>name</td>
<td>input的名称</td>
<td>string</td>
<td>--</td>
<td>--</td>
</tr>
</tbody>
</table>
<h3>Radio-group Props</h3>
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
<td>{any}</td>
<td>--</td>
<td>--</td>
</tr>
</tbody>
</table>
<h3>Radio-group Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>radio发生改变是触发</td>
<td>nativeChangeEvent</td>
</tr>
<tr>
<td>input</td>
<td>由子radio组件触发</td>
<td>newSingleRadioValue</td>
</tr>
</tbody>
</table>
</section></template>

<script>
  import { VhRadio, VhRadioGroup } from 'src/components/radio/index';

  export default {

    data() {
      return {
        groupSingleValue: '西瓜'
      }
    },

    methods: {
      onRadioCheck(val) {
        this.groupSingleValue = val;
      }
    },

    components: {
      VhRadio, VhRadioGroup
    }
  }
</script>