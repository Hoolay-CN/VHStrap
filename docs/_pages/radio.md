# Radio (单选框)

单选框需要在Group模式下使用

#### Basic

<div style="padding: 10px 0;">
  <vh-radio-group :value="groupSingleValue" @input="onRadioCheck">
    <vh-radio label="西瓜" name="fruit"></vh-radio>
    <vh-radio label="苹果" name="fruit"></vh-radio>
    <vh-radio label="哈密瓜" name="fruit"></vh-radio>
  </vh-radio-group>

  <strong>{{ groupSingleValue }}</strong>
</div>

<script>
  import { VhRadio, VhRadioGroup } from 'src/components/radio/index';

  export default {

    data() {
      return {
        groupSingleValue: '西瓜'
      }
    },

    methods: {
      onRadioCheck(val) {
        this.groupSingleValue = val;
      }
    },

    components: {
      VhRadio, VhRadioGroup
    }
  }
</script>
```html
<div style="padding: 10px 0;">
  <vh-radio-group :value="groupSingleValue" @input="onRadioCheck">
    <vh-radio label="西瓜" name="fruit"></vh-radio>
    <vh-radio label="苹果" name="fruit"></vh-radio>
    <vh-radio label="哈密瓜" name="fruit"></vh-radio>
  </vh-radio-group>

  <strong>{{ groupSingleValue }}</strong>
</div>

<script>
  import { VhRadio, VhRadioGroup } from 'src/components/radio/index';

  export default {

    data() {
      return {
        groupSingleValue: '西瓜'
      }
    },

    methods: {
      onRadioCheck(val) {
        this.groupSingleValue = val; // 手动更新$parentのvalue，去刷新子view的状态
      }
    },

    components: {
      VhRadio, VhRadioGroup
    }
  }
</script>
```

### Radio Props

| 参数       | 说明       | 类型      | 可选值  | 默认值  |
| -------- | -------- | ------- | ---- | ---- |
| value    | 初始值      | {any}   | --   | --   |
| label    | 选中的值     | string  | 必选   | --   |
| disabled | 是否不可用    | boolean | --   | --   |
| name     | input的名称 | string  | --   | --   |

### Radio-group Props

| 参数          | 说明                              | 类型             | 可选值  | 默认值  |
| ----------- | ------------------------------- | -------------- | ---- | ---- |
| value       | 初始值                             | {any}          | --   | --   |

### Radio-group Events

| 事件名称   | 说明         | 回调参数             |
| ------ | ---------- | ---------------- |
| change | radio发生改变是触发 | nativeChangeEvent|
| input  | 由子radio组件触发 | newSingleRadioValue|
