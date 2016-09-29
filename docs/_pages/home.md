# Welcome

> hello

```javascript
document.getElementById('sss')
document.body.querySelector('body')
```

<strong>____ {{name}}</strong>

<hello text="xxxb" channel="hoolay">Hello</hello>

<o-button text="abc" channel="danger">Hello2</o-button>

<button class="btn btn-outline-hoolay" @click="onClick()">Click Me</button>

<script>
  import OButton from 'src/components/Button.vue';
  import Hello from '../components/Button.vue';

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
      Hello
    }
  }
</script>