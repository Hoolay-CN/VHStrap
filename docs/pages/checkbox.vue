<template><section><h2>Checkbox (复选框)</h2>
<h4>Basic</h4>
<div style="padding: 10px 0;">
  <vh-checkbox :value.sync="aValue" name="people[zh-cn]">中国人</vh-checkbox>
  <strong>
    people[zh-cn] => {{ aValue }}
  </strong>
</div>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">vh-checkbox</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"aValue"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"people[zh-cn]"</span>&gt;</span>中国人<span class="hljs-tag">&lt;/<span class="hljs-name">vh-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>
  people[zh-cn] =&gt; <span>{{</span> aValue <span>}}</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>
</code></pre>
<h4>Group</h4>
<p>注：Group的value设计无法同步多值，提供<code>input</code>事件，手动处理多选值</p>
<div style="padding: 10px 0;">
  <vh-checkbox-group :value="groupValue" @input="onGroupCheckboxInput">
    <vh-checkbox label="中国人" name="people[zh-cn]"></vh-checkbox>
    <vh-checkbox label="美国人" name="people[usa]"></vh-checkbox>
    <vh-checkbox label="日本人" name="people[japan]"></vh-checkbox>
  </vh-checkbox-group>
  <strong>
    [{{ groupValue }}]
  </strong>
</div>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 10px 0;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-checkbox-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">"groupValue"</span> <span class="hljs-attr">@input</span>=<span class="hljs-string">"onGroupCheckboxInput"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"中国人"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"people[zh-cn]"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"美国人"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"people[usa]"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"日本人"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"people[japan]"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-checkbox-group</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>
    [<span>{{</span> groupValue <span>}}</span>]
  <span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/babel"</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { VhCheckbox, VhCheckboxGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/checkbox/index'</span>;

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">aValue</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">groupValue</span>: [<span class="hljs-string">'中国人'</span>, <span class="hljs-string">'美国人'</span>]
      }
    },

    <span class="hljs-attr">methods</span>: {
      onCheckboxChange(sure) {
        <span class="hljs-built_in">console</span>.log(sure);
      },
      onGroupCheckboxInput(val) {
        <span class="hljs-keyword">this</span>.$set(<span class="hljs-string">'groupValue'</span>, val);
      }
    },
    <span class="hljs-attr">components</span>: {
      VhCheckbox,
      VhCheckboxGroup
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>

<h3>Checkbox Props</h3>
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
<td>name</td>
<td>input名称</td>
<td>string</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>label</td>
<td>选中状态的值（只有在<code>checkbox-group</code>下有意义)</td>
<td>string</td>
<td>--</td>
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
<td>true-label</td>
<td>选中时的值</td>
<td>string, number</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>false-label</td>
<td>没有选中时的值</td>
<td>string, number</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>on-change</td>
<td>选中变更回调</td>
<td>function</td>
<td>--</td>
<td>--</td>
</tr>
</tbody>
</table>
<h3>Checkbox-group Props</h3>
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
<h3>Checkbox-group Events</h3>
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
<td>checkbox发生改变是触发</td>
<td>nativeChangeEvent</td>
</tr>
<tr>
<td>input</td>
<td>由子checkbox组件触发</td>
<td>newGroupValues</td>
</tr>
</tbody>
</table>
</section></template>

<script type="text/babel">
  import { VhCheckbox, VhCheckboxGroup } from 'src/components/checkbox/index';

  export default {

    data() {
      return {
        aValue: false,
        groupValue: ['中国人', '美国人']
      }
    },

    methods: {
      onCheckboxChange(sure) {
        console.log(sure);
      },
      onGroupCheckboxInput(val) {
        this.$set('groupValue', val);
      }
    },
    components: {
      VhCheckbox,
      VhCheckboxGroup
    }
  };
</script>