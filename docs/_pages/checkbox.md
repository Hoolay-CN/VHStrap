## Checkbox (复选框)

#### Basic

<div style="padding: 10px 0;">
  <vh-checkbox :value.sync="aValue" name="people[zh-cn]">中国人</vh-checkbox>
  <strong>
    people[zh-cn] => {{ aValue }}
  </strong>
</div>

```html
<vh-checkbox :value.sync="aValue" name="people[zh-cn]">中国人</vh-checkbox>
<strong>
  people[zh-cn] => {{ aValue }}
</strong>
```

#### Group

注：Group的value设计无法同步多值，提供`input`事件，手动处理多选值

<div style="padding: 10px 0;">
  <vh-checkbox-group :value="groupValue" @input="onGroupCheckboxInput">
    <vh-checkbox label="中国人" name="people[zh-cn]"></vh-checkbox>
    <vh-checkbox label="美国人" name="people[usa]"></vh-checkbox>
    <vh-checkbox label="日本人" name="people[japan]"></vh-checkbox>
  </vh-checkbox-group>

  <strong>
    [{{ groupValue }}]
  </strong>
</div>

```html
<div style="padding: 10px 0;">
  <vh-checkbox-group :value="groupValue" @input="onGroupCheckboxInput">
    <vh-checkbox label="中国人" name="people[zh-cn]"></vh-checkbox>
    <vh-checkbox label="美国人" name="people[usa]"></vh-checkbox>
    <vh-checkbox label="日本人" name="people[japan]"></vh-checkbox>
  </vh-checkbox-group>

  <strong>
    [{{ groupValue }}]
  </strong>
</div>

<script type="text/babel">
  import { VhCheckbox, VhCheckboxGroup } from 'src/components/checkbox/index';

  export default {

    data() {
      return {
        aValue: false,
        groupValue: ['中国人', '美国人']
      }
    },

    methods: {
      onCheckboxChange(sure) {
        console.log(sure);
      },
      onGroupCheckboxInput(val) {
        this.$set('groupValue', val);
      }
    },
    components: {
      VhCheckbox,
      VhCheckboxGroup
    }
  };
</script>
```

<script type="text/babel">
  import { VhCheckbox, VhCheckboxGroup } from 'src/components/checkbox/index';

  export default {

    data() {
      return {
        aValue: false,
        groupValue: ['中国人', '美国人']
      }
    },

    methods: {
      onCheckboxChange(sure) {
        console.log(sure);
      },
      onGroupCheckboxInput(val) {
        this.$set('groupValue', val);
      }
    },
    components: {
      VhCheckbox,
      VhCheckboxGroup
    }
  };
</script>

### Checkbox Props

| 参数          | 说明                              | 类型             | 可选值  | 默认值  |
| ----------- | ------------------------------- | -------------- | ---- | ---- |
| value       | 初始值                             | {any}          | --   | --   |
| name        | input名称                         | string         | --   | --   |
| label       | 选中状态的值（只有在`checkbox-group`下有意义) | string         | --   | --   |
| disabled    | 是否不可用                           | boolean        | --   | --   |
| true-label  | 选中时的值                           | string, number | --   | --   |
| false-label | 没有选中时的值                         | string, number | --   | --   |
| on-change   | 选中变更回调                          | function       | --   | --   |

### Checkbox-group Props

| 参数          | 说明                              | 类型             | 可选值  | 默认值  |
| ----------- | ------------------------------- | -------------- | ---- | ---- |
| value       | 初始值                             | {any}          | --   | --   |

### Checkbox-group Events

| 事件名称   | 说明         | 回调参数             |
| ------ | ---------- | ---------------- |
| change | checkbox发生改变是触发 | nativeChangeEvent|
| input  | 由子checkbox组件触发 | newGroupValues |
