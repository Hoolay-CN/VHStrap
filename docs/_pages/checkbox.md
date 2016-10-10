## Checkbox (复选框)

### 基本用法

<div style="padding: 10px;">
  <h-checkbox :value="true" :on-change="onCheckboxChange">中国人</h-checkbox>
</div>

```html
<div>
  <h-checkbox :value="true" :on-change="onCheckboxChange">中国人</h-checkbox>
</div>

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
```

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
