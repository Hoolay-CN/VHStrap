<template><section><h1>Select (选框)</h1>
<h4>Basic</h4>
<div style="padding: 10px 0;">
  <vh-select name="select" :value.sync="select" label="--请选择一个xx--" :options="selectData"></vh-select>
  <strong style="display: inline-block; padding-top: 5px;">
    您选中了 => {{ select }}
  </strong>
</div>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 10px 0;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-select</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"select"</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"select"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"--请选择一个xx--"</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">"selectData"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-select</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">strong</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display: inline-block; padding-top: 5px;"</span>&gt;</span>
    您选中了 =&gt; <span>{{</span> select <span>}}</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { VhSelect } <span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/select/index'</span>;

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">select</span>: <span class="hljs-string">''</span>,
        <span class="hljs-attr">selectData</span>: [
          {<span class="hljs-attr">name</span>: <span class="hljs-string">'one'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'1'</span>},
          {<span class="hljs-attr">name</span>: <span class="hljs-string">'two'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'2'</span>},
          {
            <span class="hljs-attr">label</span>: <span class="hljs-string">'地理位置'</span>,
            <span class="hljs-attr">subs</span>: [
              {<span class="hljs-attr">name</span>: <span class="hljs-string">'four'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'4'</span>},
              {<span class="hljs-attr">name</span>: <span class="hljs-string">'five'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'5'</span>}
            ]
          },
          {<span class="hljs-attr">name</span>: <span class="hljs-string">'three'</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'3'</span>}
        ]
      }
    },

    <span class="hljs-attr">components</span>: {
      VhSelect
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>

<h3>Select Props</h3>
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
<td>label</td>
<td>默认提示信息</td>
<td>string</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>options</td>
<td>条目数据</td>
<td>array</td>
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
<td>disabled</td>
<td>不可用</td>
<td>boolean</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>on-change</td>
<td>值变化回调</td>
<td>function</td>
<td>--</td>
<td>--</td>
</tr>
</tbody>
</table>
</section></template>

<script>
  import { VhSelect } from 'src/components/select/index';

  export default {
    data() {
      return {
        select: '',
        selectData: [
          {name: 'one', value: '1'},
          {name: 'two', value: '2'},
          {
            label: '地理位置',
            subs: [
              {name: 'four', value: '4'},
              {name: 'five', value: '5'}
            ]
          },
          {name: 'three', value: '3'}
        ]
      }
    },

    components: {
      VhSelect
    }
  }
</script>