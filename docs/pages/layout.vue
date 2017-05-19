<template><section><h1>布局 (Layout)</h1>
<p><code>Bootstrap</code>默认12栅格布局系统特性全部保留。</p>
<div class="container ex-layout">
  <div class="row">
    <div class="col-sm-4">
      One of three columns
    </div>
    <div class="col-sm-4">
      One of three columns
    </div>
    <div class="col-sm-4">
      One of three columns
    </div>
  </div>
</div>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"row"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"col-sm-4"</span>&gt;</span>
      One of three columns
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"col-sm-4"</span>&gt;</span>
      One of three columns
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"col-sm-4"</span>&gt;</span>
      One of three columns
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>

<h4>为了满足更精细的控制，系统扩展了一份24栅格的布局系统。</h4>
<ul>
<li>默认列间隔（gutter）16px</li>
</ul>
<vh-container>
  <vh-row>
    <vh-col :span="4">
      <h2 style="padding: 50px 0; background-color: #eeeeee; text-align: center">4</h2>
    </vh-col>
    <vh-col :span="20">
      <h2 style="padding: 50px 0; background-color: #eeeeee; text-align: center">20</h2>
    </vh-col>
  </vh-row>
  <vh-row>
    <vh-col v-for="(n, index) in cols" :key="index">
      <h6 style="text-align: center; padding: 70px 0; background-color:  #eeeeee;">{{ n }}</h6>
    </vh-col>
  </vh-row>
</vh-container>

<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">vh-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-row</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"4"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 50px 0; background-color: #eeeeee; text-align: center"</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vh-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"20"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 50px 0; background-color: #eeeeee; text-align: center"</span>&gt;</span>20<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vh-col</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-row</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-row</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-col</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"n in cols"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h6</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"text-align: center; padding: 70px 0; background-color:  #eeeeee;"</span>&gt;</span><span>{{</span> n <span>}}</span><span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vh-col</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-row</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">vh-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> { VhContainer, VhRow, VhCol } <span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/layout/index'</span>;

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">computed</span>: {
      cols() {
        <span class="hljs-keyword">return</span> [...Array(<span class="hljs-number">24</span>).keys()].map(<span class="hljs-function">(<span class="hljs-params">n</span>) =&gt;</span> <span class="hljs-number">1</span>+n);
      }
    },
    <span class="hljs-attr">components</span>: {
      VhContainer, VhRow, VhCol
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
<h3>Links</h3>
<p><a href="http://v4-alpha.getbootstrap.com/layout/grid/">http://v4-alpha.getbootstrap.com/layout/grid/</a></p>
</section></template>
<style lang="scss">
  .ex-layout {
    .col-sm-4 {
      background-color: #eeeeee;
      padding: 20px 0;
      text-align: center;
    }
  }
</style>
<script>
  import { VhContainer, VhRow, VhCol } from 'src/components/layout/index';

  export default {
    computed: {
      cols() {
        return [...Array(24).keys()].map((n) => 1+n);
      }
    },
    components: {
      VhContainer, VhRow, VhCol
    }
  }
</script>