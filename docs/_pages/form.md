# Form (表单)

该表单的设计，主要是集成了验证功能。

### 基本结构
```javascript
import { VhForm, VhFormItem } from 'src/components/form/index';
```
```html
<vh-form :inline="false" :model="formData" :rules="rules" @submit.prevent="onSubmit" v-ref:form>
  <vh-form-item label="Email:" muted-text="一个友情提示..." prop="email">
    <vh-input-group>
      <vh-input :value.sync="formData.email" type="text" placeholder="Email" :on-change="onInputChange"></vh-input>
      <span class="input-group-addon">@icloud.com</span>
    </vh-input-group>
  </vh-form-item>
</vh-form>
```

### 验证表单
<div class="ex-form-container">
  <div class="row">
    <div class="col-xs-9">
      <vh-form :inline="false" :model="formData" :rules="rules" @submit.prevent="onSubmit" v-ref:form>
          <vh-form-item label="Email:" muted-text="一个友情提示..." prop="email">
            <vh-input-group>
              <vh-input :value.sync="formData.email" type="text" placeholder="Email" :on-change="onInputChange"></vh-input>
              <span class="input-group-addon">@icloud.com</span>
            </vh-input-group>
          </vh-form-item>
          <vh-form-item label="Price:" prop="price">
            <vh-input-group>
              <span class="input-group-addon">￥</span>
              <vh-input :value.sync="formData.price" type="number"></vh-input>
            </vh-input-group>
          </vh-form-item>
          <vh-form-item label="Select One:" prop="select">
            <vh-select name="select" :value.sync="formData.select" label="--请选择一个xx--" :options="[ {name: 'one', value: '1'}, {name: 'two', value: '2'}, { label: '地理位置', subs: [ {name: 'four', value: '4'}, {name: 'five', value: '5'} ] }, {name: 'three', value: '3'} ]"></vh-select>
          </vh-form-item>
          <vh-form-item label="Content:" prop="content" muted-text="字数不要超过100个哟">
            <vh-input-group>
              <vh-input type="textarea" placeholder="description here ..." :styles="{height: '120px'}" :value.sync="formData.content"></vh-input>
            </vh-input-group>
          </vh-form-item>
          <vh-form-item label="How many People Do you Love ?" muted-text="multiple checkbox" prop="people">
            <vh-checkbox-group :value="formData.people" @input="onCheckboxInput">
              <vh-checkbox label="中国人" :on-change="onCheckboxChange" name="people[zh-cn]"></vh-checkbox>
              <vh-checkbox label="美国人" :on-change="onCheckboxChange" name="people[usa]"></vh-checkbox>
              <vh-checkbox label="日本人" :on-change="onCheckboxChange" name="people[jp]"></vh-checkbox>
            </vh-checkbox-group>
          </vh-form-item>
          <vh-form-item label="Which fruit do you like to eat ?" muted-text="single radio" prop="fruit">
            <vh-radio-group :value="formData.fruit" @input="onRadioInput">
              <vh-radio label="西瓜" name="fruits[]"></vh-radio>
              <vh-radio label="苹果" name="fruits[]"></vh-radio>
              <vh-radio label="菠萝" name="fruits[]"></vh-radio>
            </vh-radio-group>
          </vh-form-item>
          <div class="from-actions" style="text-align: left; padding-bottom: 10px;">
            <button class="btn btn-hoolay">
              Validate & Get FormData
            </button>
          </div>
        </vh-form>
    </div>
    <div class="col-xs-3">
    </div>
  </div>
</div>

```javascript
onSubmit(e) {
  let form = this.$refs.form;

  form.validate((valid) => {
    if (valid) {
      alert(JSON.stringify(form.model, null, 2));
    }
  });
}
```

### Validate Rules

参考 [https://github.com/yiminghe/async-validator](https://github.com/yiminghe/async-validator)

```javascript
  rules: {
    email: {type: 'email', required: true, message: '必须是一个邮箱', trigger: 'change'},
    price: {type: 'regexp', required: true, pattern: /^\d+/, message: '必须是一个数字'},
    select: {required: true, message: '请选择一个'},
    content: {required: true, message: '必须填写哟'},
    people(rule, value, callback, source, options) {
      var errors = [];
      if(!Array.isArray(value) || value.length < 2) {
        errors.push(new Error('请选择至少两个吧'));
      }
      callback(errors);
    }
  }
```

<script>
  import { VhForm, VhFormItem } from 'src/components/form/index';
  import { VhCheckbox, VhCheckboxGroup } from 'src/components/checkbox/index';
  import { VhRadio, VhRadioGroup } from 'src/components/radio/index';
  import { VhInputGroup, VhInput } from 'src/components/input/index';
  import { VhSelect } from 'src/components/select/index';

  export default {
    data() {
      return {
        formData: {
          email: '',
          price: 0,
          select: '',
          content: '',
          people: ['中国人'],
          fruit: '苹果'
        },
        rules: {
          email: {type: 'email', required: true, message: '必须是一个邮箱', trigger: 'change'},
          price: {type: 'regexp', required: true, pattern: /^\d+/, message: '必须是一个数字'},
          select: {required: true, message: '请选择一个'},
          content: {required: true, message: '必须填写哟'},
          people(rule, value, callback, source, options) {
            console.log(rule);
            var errors = [];
            if(!Array.isArray(value) || value.length < 2) {
              errors.push(new Error('请选择至少两个吧'));
            }
            callback(errors);
          }
        }
      }
    },
    methods: {
      onCheckboxInput(val) {
        this.$set('formData.people', val);
      },
      onRadioInput(val) {
        this.formData.fruit = val;
      },
      onSubmit(e) {
        let form = this.$refs.form;

        form.validate((valid) => {
          if (valid) {
            alert(JSON.stringify(form.model, null, 2));
          }
        });
      }
    },
    components: {
      VhForm, VhFormItem,
      VhCheckbox, VhCheckboxGroup,
      VhRadio, VhRadioGroup,
      VhInputGroup, VhInput,
      VhSelect
    }
  }
</script>

### Form Props

| 参数           | 说明            | 类型      | 可选值  | 默认值   |
| ------------ | ------------- | ------- | ---- | ----- |
| model        | 表单数据对象        | object  | --   | --    |
| rules        | 表单验证规则        | object  | --   | --    |
| inline       | item是否内联排列    | boolean | --   | false |
| label-suffix | 表单域标签的后缀      | string  | --   | --    |
| label-width  | item label 宽度 | string  | --   | --    |

### Form Methods

| 方法名                                      | 说明                       |
| ---------------------------------------- | ------------------------ |
| validate(cb = (valid) => {})             | 对所有包含prop的item进行validate |
| validateField(prop, cb = (errors) => {}) | 通过prop对指定item进行validate  |

### Form-item Props

| 参数          | 说明                    | 类型     | 可选值  | 默认值   |
| ----------- | --------------------- | ------ | ---- | ----- |
| label       | 标签文本                  | string | --   | --    |
| prop        | 表单model对应字段（嵌套用`:`分隔) | string | --   | --    |
| muted-text  | 输入提示文字                | string | --   | --    |
| required    | 是否必选样式控制              | string | --   | false |
| label-width | 标签宽度                  | string | --   | --    |
