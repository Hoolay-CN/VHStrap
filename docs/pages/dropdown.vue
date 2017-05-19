<template><section><h1>Dropdown (下拉)</h1>
<h4>Basic</h4>
<div class="ex-dd-container" style="padding-bottom: 20px;">
  <vh-dropdown :up="false" type="outline-hoolay" label="Checkout Repo">
    <dd-item type="header">Header</dd-item>
    <dd-item tag="Charles label">
      <i class="iconfont icon-yishujia"></i>
      Charles
    </dd-item>
    <dd-item type="header">Links</dd-item>
    <dd-item href="http://google.com" target="_blank">
      <i class="iconfont icon-face"></i>
      Google
    </dd-item>
    <dd-item type="divider"></dd-item>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </vh-dropdown>
</div>

<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ex-dd-container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-dropdown</span> <span class="hljs-attr">:up</span>=<span class="hljs-string">"false"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Checkout Repo"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dd-item</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"header"</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">dd-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dd-item</span> <span class="hljs-attr">@select</span>=<span class="hljs-string">"onItemSelect"</span> <span class="hljs-attr">tag</span>=<span class="hljs-string">"Charles label"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"iconfont icon-yishujia"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
      Charles
    <span class="hljs-tag">&lt;/<span class="hljs-name">dd-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dd-item</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"header"</span>&gt;</span>Links<span class="hljs-tag">&lt;/<span class="hljs-name">dd-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dd-item</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"http://google.com"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"_blank"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"iconfont icon-face"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
      Google
    <span class="hljs-tag">&lt;/<span class="hljs-name">dd-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">dd-item</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"divider"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">dd-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Another action<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Something else here<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-divider"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Separated link<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-dropdown</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { VhDropdown, VhDropdownItem <span class="hljs-keyword">as</span> DdItem } <span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/dropdown/index'</span>;
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">components</span>:{
      VhDropdown, DdItem
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<h3>Dropdown Props</h3>
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
<td>按钮样式类型</td>
<td>String</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>label</td>
<td>按钮说明文字</td>
<td>String</td>
<td>--</td>
<td>必选</td>
</tr>
<tr>
<td>visible</td>
<td>子菜单是否可见</td>
<td>Boolean</td>
<td>--</td>
<td>false</td>
</tr>
<tr>
<td>trigger</td>
<td>触发时间类型</td>
<td>String</td>
<td>['click', 'hover']</td>
<td>click</td>
</tr>
<tr>
<td>up</td>
<td>子菜单是否向上对其</td>
<td>Boolean</td>
<td>--</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3>Dropdown-menu Props</h3>
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
<td>right</td>
<td>菜单是否右对齐</td>
<td>Boolean</td>
<td>--</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3>Dropdown-menu-item Props</h3>
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
<td>tag</td>
<td>自定义item唯一标识</td>
<td>String</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>type</td>
<td>item类型</td>
<td>String</td>
<td>['divider', 'header', 'item']</td>
<td>item</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>Boolean</td>
<td>--</td>
<td>false</td>
</tr>
<tr>
<td>href</td>
<td>链接地址</td>
<td>String</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>target</td>
<td>href打开方式</td>
<td>String</td>
<td>--</td>
<td>--</td>
</tr>
</tbody>
</table>
<h3>Dropdown-menu-item Events</h3>
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
<td>select</td>
<td>item被选中时触发</td>
<td>item vm instance</td>
</tr>
</tbody>
</table>
</section></template>

<script type="text/babel">
  import VhIcon from 'src/components/iconfonts/impl.vue';
  import { VhDropdown, VhDropdownItem as DdItem } from 'src/components/dropdown/index';

  export default {
    components:{
      VhDropdown, DdItem
    }
  }
</script>