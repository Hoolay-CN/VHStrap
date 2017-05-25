<template>
  <section><h1>Buttons (按钮)</h1>
    <h3>Basic</h3>
    <div class="ex-btn-container">
      <vh-button :type="el" v-for="(el, index) in types" :key="index">{{el}}</vh-button>
    </div>
    <h3>Outline</h3>
    <div class="ex-btn-container">
      <vh-button :type="`outline-${el}`" v-for="(el, index) in types" :key="index">outline-{{el}}</vh-button>
    </div>
    <h3>Disabled</h3>
    <div class="ex-btn-container">
      <vh-button type="hoolay" :disabled="true">Disabled</vh-button>
    </div>
    <h3>Loading</h3>
    <div class="ex-btn-container">
      <vh-button type="hoolay" :loading="true">Loading...</vh-button>
    </div>
    <h3>Block</h3>
    <div class="ex-btn-container">
      <vh-button type="hoolay" :block="true">block</vh-button>
    </div>
    <h3>Size</h3>
    <div class="ex-btn-container">
      <vh-button size="lg" type="hoolay">Large</vh-button>
      <vh-button size="md" type="success">Default</vh-button>
      <vh-button size="sm" type="warning">Small</vh-button>
    </div>
    <h3>Group</h3>
    <div class="ex-btn-group-container" style="padding: 10px 0;">
      <vh-button-group>
        <vh-button type="secondary" icon="store">Home</vh-button>
        <vh-button type="secondary" icon="yishujia">Artists</vh-button>
        <vh-button type="secondary" icon="collections">Arts</vh-button>
      </vh-button-group>
    </div>
    <h3>Icon</h3>
    <div class="ex-btn-container">
      <vh-button type="hoolay" size="sm" icon="send">发送邮件</vh-button>
      <vh-button type="secondary" size="sm" icon="settings"></vh-button>
      <vh-button type="outline-success" size="sm" icon="face"></vh-button>
    </div>

    <h4><code>#&lt;code&gt;</code></h4>
    <pre><code class="language-html">### Outline
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"ex-btn-container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">:type</span>=<span
      class="hljs-string">"`outline-${el}`"</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"el in types"</span>&gt;</span>outline-<span>{{</span>el<span>}}</span><span
          class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
### Disabled
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"ex-btn-container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"hoolay"</span> <span class="hljs-attr">:disabled</span>=<span
      class="hljs-string">"true"</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span
          class="hljs-name">vh-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
### Loading
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"ex-btn-container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"hoolay"</span> <span class="hljs-attr">:loading</span>=<span
      class="hljs-string">"true"</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
### Block
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"ex-btn-container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"hoolay"</span> <span class="hljs-attr">:block</span>=<span class="hljs-string">"true"</span>&gt;</span>block<span
          class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
### Size
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"ex-btn-container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">size</span>=<span
      class="hljs-string">"lg"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"hoolay"</span>&gt;</span>Large<span
          class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">size</span>=<span
      class="hljs-string">"md"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>Default<span
          class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">size</span>=<span
      class="hljs-string">"sm"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>Small<span
          class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
### Group
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"ex-btn-group-container"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 10px 0;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">type</span>=<span
        class="hljs-string">"secondary"</span> <span class="hljs-attr">icon</span>=<span
        class="hljs-string">"store"</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span
          class="hljs-name">vh-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">type</span>=<span
        class="hljs-string">"secondary"</span> <span class="hljs-attr">icon</span>=<span
        class="hljs-string">"yishujia"</span>&gt;</span>Artists<span class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">type</span>=<span
        class="hljs-string">"secondary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"collections"</span>&gt;</span>Arts<span
          class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-button-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
### Icon
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"ex-btn-container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"hoolay"</span> <span class="hljs-attr">size</span>=<span
      class="hljs-string">"sm"</span> <span class="hljs-attr">icon</span>=<span
      class="hljs-string">"send"</span>&gt;</span>发送邮件<span class="hljs-tag">&lt;/<span
          class="hljs-name">vh-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"secondary"</span> <span class="hljs-attr">size</span>=<span
      class="hljs-string">"sm"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"settings"</span>&gt;</span><span
          class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"outline-success"</span> <span class="hljs-attr">size</span>=<span
      class="hljs-string">"sm"</span> <span class="hljs-attr">icon</span>=<span
      class="hljs-string">"face"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { VhButton, VhButtonGroup } <span class="hljs-keyword">from</span> <span
          class="hljs-string">'src/components/button/index'</span>;

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">types</span>: [<span class="hljs-string">'hoolay'</span>, <span class="hljs-string">'primary'</span>, <span
          class="hljs-string">'success'</span>, <span class="hljs-string">'info'</span>, <span class="hljs-string">'warning'</span>, <span
          class="hljs-string">'danger'</span>, <span class="hljs-string">'secondary'</span>, <span class="hljs-string">'default'</span>]
      }
    },
    <span class="hljs-attr">components</span>: {
      VhButton, VhButtonGroup
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
  </section>
</template>
<style lang="scss">
  .ex-btn-container {
    padding: 10px 0;
    .btn {
      margin-right: 10px;
      margin-bottom: 5px;
    }
  }
</style>
<script>
  import { VhButton, VhButtonGroup } from 'src/components/button/index';

  export default {
    data() {
      return {
        types: ['hoolay', 'primary', 'success', 'info', 'warning', 'danger', 'secondary', 'default', 'link']
      }
    },
    components: {
      VhButton, VhButtonGroup
    }
  }
</script>