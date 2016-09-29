<template><section><h1>Welcome</h1>
<h2>hello</h2>
<blockquote>
<p>hello</p>
</blockquote>
<p><strong>sss</strong></p>
<pre><code class="language-javascript"><span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'sss'</span>)
<span class="hljs-built_in">document</span>.body.querySelector(<span class="hljs-string">'body'</span>)
</code></pre>
<p><strong>____ {{name}}</strong></p>
<p><hello text="xxxb" channel="hoolay">Hello</hello></p>
<p><o-button text="abc" channel="warning">Hello2</o-button></p>
<p><button class="btn btn-outline-hoolay" @click="onClick()">Click Me</button></p>
<hlll input-type="select" label-tag="Example select" input-status="success">
	This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
</hlll>
</section></template>

<script>
  import OButton from 'src/components/Button.vue';
  import Hello from '../components/Button.vue';
	import hlll from 'src/components/h-formGroup.vue';

  export default {
    data() {
        return {
            name: 'HOME4',
        }
    },
    methods: {
      onClick() {
        alert('click')
      }
    },
    components: {
      OButton,
      Hello,
			hlll
    }
  }
</script>