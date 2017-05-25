<template><section><h1>Modal (弹出层)</h1>
<h4>Basic</h4>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> ModalFactory, { VhModal }<span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/modal/index'</span>;
</code></pre>
<div class="ex-modal-container" style="padding-bottom: 15px;">
  <button class="btn btn-outline-hoolay" @click="modalShow = !modalShow">
    显示弹框组件
  </button>
  <button class="btn btn-outline-danger" @click="showModalAlert">
    提示框 `Alert`
  </button>
  <button class="btn btn-outline-success" @click="showModalConfirm">
    确认框 `Confirm`
  </button>
  <vh-modal :show.sync="modalShow" title="标题" :large="true">
    <div slot="modal-body">
      <p class="h1">h1. Bootstrap heading</p>
      <p class="h2">h2. Bootstrap heading</p>
      <p class="h3">h3. Bootstrap heading</p>
      <p class="h4">h4. Bootstrap heading</p>
      <p class="h5">h5. Bootstrap heading</p>
      <p class="h6">h6. Bootstrap heading</p>
    </div>
  </vh-modal>
</div>

<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ex-modal-container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-outline-hoolay"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"modalShow = !modalShow"</span>&gt;</span>
    显示弹框组件
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-outline-danger"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"showModalAlert"</span>&gt;</span>
    提示框 `Alert`
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-outline-success"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"showModalConfirm"</span>&gt;</span>
    确认框 `Confirm`
  <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-modal</span> <span class="hljs-attr">:show.sync</span>=<span class="hljs-string">"modalShow"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"标题"</span> <span class="hljs-attr">:large</span>=<span class="hljs-string">"true"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"modal-body"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"h1"</span>&gt;</span>h1. Bootstrap heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"h2"</span>&gt;</span>h2. Bootstrap heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"h3"</span>&gt;</span>h3. Bootstrap heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"h4"</span>&gt;</span>h4. Bootstrap heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"h5"</span>&gt;</span>h5. Bootstrap heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"h6"</span>&gt;</span>h6. Bootstrap heading<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-modal</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> ModalFactory, { VhModal }<span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/modal/index'</span>;

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">modalShow</span>: <span class="hljs-literal">false</span>
      }
    },

    <span class="hljs-attr">methods</span>: {
      showModalAlert() {
        ModalFactory.alert(<span class="hljs-string">'这是一个提示框'</span>, <span class="hljs-keyword">this</span>.onConfirm);
      },

      showModalConfirm() {
        ModalFactory.confirm(<span class="hljs-string">'这是一个确认框'</span>, <span class="hljs-keyword">this</span>.onConfirmCb);
      },

      onConfirm() {
        alert(<span class="hljs-string">'你点击了 确定'</span>);
      },

      onConfirmCb(isConfirm) {
        alert(<span class="hljs-string">`你点击了 <span class="hljs-subst">${isConfirm ? <span class="hljs-string">'确定'</span> : <span class="hljs-string">'取消'</span>}</span>`</span>);
      }
    },

    <span class="hljs-attr">components</span>: {
      VhModal
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<h3>Modal Props</h3>
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
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>show</td>
<td>绑定是否显示(.sync)</td>
<td>boolean</td>
<td>--</td>
<td>false</td>
</tr>
<tr>
<td>ok-text</td>
<td>确认按钮文本</td>
<td>string</td>
<td>--</td>
<td>确定</td>
</tr>
<tr>
<td>cancel-text</td>
<td>取消按钮文本</td>
<td>string</td>
<td>--</td>
<td>取消</td>
</tr>
<tr>
<td>width</td>
<td>手动控制宽度</td>
<td>number</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>large</td>
<td>是否大码</td>
<td>boolean</td>
<td>--</td>
<td>false</td>
</tr>
<tr>
<td>small</td>
<td>是否小码</td>
<td>boolean</td>
<td>--</td>
<td></td>
</tr>
<tr>
<td>effect</td>
<td>弹出动画效果</td>
<td>string</td>
<td>fade，zoom</td>
<td>fade</td>
</tr>
<tr>
<td>on-ok</td>
<td>确定回调（返回false可以中断关闭弹框）</td>
<td>function</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>on-cancel</td>
<td>取消回调（可中断）</td>
<td>function</td>
<td>--</td>
<td>--</td>
</tr>
</tbody>
</table>
<h3>Modal Factory Facade</h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>alert(message, done)</td>
<td>--</td>
</tr>
<tr>
<td>confirm(message, confirmCallback = (isConfirmed) =&gt; {})</td>
<td>--</td>
</tr>
</tbody>
</table>
</section></template>

<script>
  import ModalFactory, { VhModal }from 'src/components/modal/index';

  export default {
    data() {
      return {
        modalShow: false
      }
    },

    methods: {
      showModalAlert() {
        ModalFactory.alert('这是一个提示框', this.onConfirm);
      },

      showModalConfirm() {
        ModalFactory.confirm('这是一个确认框', this.onConfirmCb);
      },

      onConfirm() {
        alert('你点击了 确定');
      },

      onConfirmCb(isConfirm) {
        alert(`你点击了 ${isConfirm ? '确定' : '取消'}`);
      }
    },

    components: {
      VhModal
    }
  }
</script>