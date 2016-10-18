# Select (选框)

#### Basic

<div style="padding: 10px 0;">
  <vh-select name="select" :value.sync="select" label="--请选择一个xx--" :options="selectData"></vh-select>
  <strong style="display: inline-block; padding-top: 5px;">
    您选中了 => {{ select }}
  </strong>
</div>

```html
<div style="padding: 10px 0;">
  <vh-select name="select" :value.sync="select" label="--请选择一个xx--" :options="selectData"></vh-select>
  <strong style="display: inline-block; padding-top: 5px;">
    您选中了 => {{ select }}
  </strong>
</div>

<script>
  import { VhSelect } from 'src/components/select/index';

  export default {
    data() {
      return {
        select: '',
        selectData: [
          {name: 'one', value: '1'},
          {name: 'two', value: '2'},
          {
            label: '地理位置',
            subs: [
              {name: 'four', value: '4'},
              {name: 'five', value: '5'}
            ]
          },
          {name: 'three', value: '3'}
        ]
      }
    },

    components: {
      VhSelect
    }
  }
</script>
```

<script>
  import { VhSelect } from 'src/components/select/index';

  export default {
    data() {
      return {
        select: '',
        selectData: [
          {name: 'one', value: '1'},
          {name: 'two', value: '2'},
          {
            label: '地理位置',
            subs: [
              {name: 'four', value: '4'},
              {name: 'five', value: '5'}
            ]
          },
          {name: 'three', value: '3'}
        ]
      }
    },

    components: {
      VhSelect
    }
  }
</script>


### Select Props

| 参数        | 说明     | 类型            | 可选值  | 默认值  |
| --------- | ------ | ------------- | ---- | ---- |
| value     | 初始值    | string，number | --   | --   |
| label     | 默认提示信息 | string        | --   | --   |
| options   | 条目数据   | array         | --   | --   |
| name      | 字段名称   | string        | --   | --   |
| disabled  | 不可用    | boolean       | --   | --   |
| on-change | 值变化回调  | function      | --   | --   |