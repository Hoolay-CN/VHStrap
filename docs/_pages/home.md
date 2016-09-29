# Welcome



## hello


> hello

<strong>sss</strong>

```javascript
document.getElementById('sss')
document.body.querySelector('body')
```

<strong>____ {{name}}</strong>

<hello text="xxxb" channel="hoolay">Hello</hello>

<o-button text="abc" channel="warning">Hello2</o-button>

<button class="btn btn-outline-hoolay" @click="onClick()">Click Me</button>

<hlll input-type="select" label-tag="Example select" input-status="success">
	This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.
</hlll>

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