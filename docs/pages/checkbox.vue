<template><section><h2>Checkbox (复选框)</h2>
<h3>基本用法</h3>
<div style="padding: 10px;">
  <h-checkbox :value="true" :on-change="onCheckboxChange">中国人</h-checkbox>
</div>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h-checkbox</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:on-change</span>=<span class="hljs-string">"onCheckboxChange"</span>&gt;</span>中国人<span class="hljs-tag">&lt;/<span class="hljs-name">h-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/babel"</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> HCheckbox <span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/checkbox'</span>;

  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      onCheckboxChange(sure) {
        <span class="hljs-built_in">console</span>.log(sure);
      }
    },
    <span class="hljs-attr">components</span>: {
      HCheckbox
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>

</section></template>

<script type="text/babel">
  import HCheckbox from 'src/components/checkbox';

  export default {
    methods: {
      onCheckboxChange(sure) {
        console.log(sure);
      }
    },
    components: {
      HCheckbox
    }
  };
</script>