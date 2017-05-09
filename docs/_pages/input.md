# Input (输入框)


#### Basic

<div style="padding:  10px 0;" class="ex-input-container">
  <vh-input :value.sync="aValue" size="lg" type="email" placeholder="large Email" name="email"></vh-input>
  <vh-input :value.sync="aValue" type="email" placeholder="middle Email" name="email"></vh-input>
  <vh-input :value.sync="aValue" size="sm" type="email" placeholder="small Email" name="email"></vh-input>
  <strong> {{ aValue }}</strong>
</div>

```html
<div style="padding:  10px 0;" class="ex-input-container">
  <vh-input :value.sync="aValue" size="lg" type="email" placeholder="large Email" name="email"></vh-input>
  <vh-input :value.sync="aValue" type="email" placeholder="middle Email" name="email"></vh-input>
  <vh-input :value.sync="aValue" size="sm" type="email" placeholder="small Email" name="email"></vh-input>
  <strong> {{ aValue }}</strong>
</div>

<script>
  import { VhInputGroup, VhInput } from 'src/components/input/index';

  export default {
    data() {
      return {
        aValue: ''
      }
    },

    components: {
      VhInput, VhInputGroup
    }
  }
</script>
```

### Group

<div style="padding-bottom: 10px;">
  <vh-input-group :style="{width: '320px'}">
      <div class="input-group-addon">$</div>
    <vh-input placeholder="price"></vh-input>
      <div class="input-group-addon">00.00</div>
</vh-input-group>
</div>

```html
<vh-input-group :style="{width: '320px'}">
  <div class="input-group-addon">$</div>
  <vh-input placeholder="price"></vh-input>
  <div class="input-group-addon">00.00</div>
</vh-input-group>
```


#### Validate

@Fixed


### Input props

| 参数            | 说明    | 类型            | 可选值              | 默认值  |
| ------------- | ----- | ------------- | ---------------- | ---- |
| value         | 初始值   | string，number | --               | --   |
| type          | 类型    | string        | text，textarea... | text |
| placeholder   | 占位文本  | string        | --               | --   |
| readonly      | 只读    | boolean       | --               | --   |
| disabled      | 不可用   | boolean       | --               | --   |
| name          | 字段名称  | string        | --               | --   |
| auto-complete | raw   | string        | on，off           | off  |
| maxlength     | raw   | number        | --               | --   |
| minlength     | raw   | number        | --               | --   |
| size          | 输入框尺寸 | string        | lg，sm            | --   |
| on-change     | 回调    | function      | --               | --   |
| on-blur       | 回调    | function      | --               | --   |
| on-focus      | 回调    | function      | --               | --   |

<script>
  import { VhInputGroup, VhInput } from 'src/components/input/index';

  export default {
    data() {
      return {
        aValue: ''
      }
    },

    components: {
      VhInput, VhInputGroup
    }
  }
</script>

<style lang="sass">
  .ex-input-container {
    .form-control {
      margin-bottom: 5px;
    }
  }
</style>
