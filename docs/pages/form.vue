<template><section><h1>Form (表单)</h1>
<p>该表单的设计，主要是集成了验证功能。</p>
<h3>基本结构</h3>
<pre><code class="language-javascript"><span class="hljs-keyword">import</span> { VhForm, VhFormItem } <span class="hljs-keyword">from</span> <span class="hljs-string">'src/components/form/index'</span>;
</code></pre>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">vh-form</span> <span class="hljs-attr">:inline</span>=<span class="hljs-string">"false"</span> <span class="hljs-attr">:model</span>=<span class="hljs-string">"formData"</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">"rules"</span> <span class="hljs-attr">@submit.prevent</span>=<span class="hljs-string">"onSubmit"</span> <span class="hljs-attr">v-ref:form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">vh-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Email:"</span> <span class="hljs-attr">muted-text</span>=<span class="hljs-string">"一个友情提示..."</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"email"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">vh-input-group</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">vh-input</span> <span class="hljs-attr">:value.sync</span>=<span class="hljs-string">"formData.email"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Email"</span> <span class="hljs-attr">:on-change</span>=<span class="hljs-string">"onInputChange"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vh-input</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"input-group-addon"</span>&gt;</span>@icloud.com<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">vh-input-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">vh-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">vh-form</span>&gt;</span>
</code></pre>
<h3>验证表单</h3>
<div class="ex-form-container">
  <div class="row">
    <div class="col-xs-9">
      <vh-form :inline="false" :model="formData" :rules="rules" @submit.prevent="onSubmit" v-ref:form="">
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
<pre><code class="language-javascript">onSubmit(e) {
  <span class="hljs-keyword">let</span> form = <span class="hljs-keyword">this</span>.$refs.form;

  form.validate(<span class="hljs-function">(<span class="hljs-params">valid</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (valid) {
      alert(<span class="hljs-built_in">JSON</span>.stringify(form.model, <span class="hljs-literal">null</span>, <span class="hljs-number">2</span>));
    }
  });
}
</code></pre>
<h3>Validate Rules</h3>
<p>参考 <a href="https://github.com/yiminghe/async-validator">https://github.com/yiminghe/async-validator</a></p>
<pre><code class="language-javascript">  rules: {
    <span class="hljs-attr">email</span>: {<span class="hljs-attr">type</span>: <span class="hljs-string">'email'</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'必须是一个邮箱'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">'change'</span>},
    <span class="hljs-attr">price</span>: {<span class="hljs-attr">type</span>: <span class="hljs-string">'regexp'</span>, <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">pattern</span>: <span class="hljs-regexp">/^\d+/</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'必须是一个数字'</span>},
    <span class="hljs-attr">select</span>: {<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'请选择一个'</span>},
    <span class="hljs-attr">content</span>: {<span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'必须填写哟'</span>},
    people(rule, value, callback, source, options) {
      <span class="hljs-keyword">var</span> errors = [];
      <span class="hljs-keyword">if</span>(!<span class="hljs-built_in">Array</span>.isArray(value) || value.length &lt; <span class="hljs-number">2</span>) {
        errors.push(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">'请选择至少两个吧'</span>));
      }
      callback(errors);
    }
  }
</code></pre>

<h3>Form Props</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>model</td>
<td>表单数据对象</td>
<td>object</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>rules</td>
<td>表单验证规则</td>
<td>object</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>inline</td>
<td>item是否内联排列</td>
<td>boolean</td>
<td>--</td>
<td>false</td>
</tr>
<tr>
<td>label-suffix</td>
<td>表单域标签的后缀</td>
<td>string</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>label-width</td>
<td>item label 宽度</td>
<td>string</td>
<td>--</td>
<td>--</td>
</tr>
</tbody>
</table>
<h3>Form Methods</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>validate(cb = (valid) =&gt; {})</td>
<td>对所有包含prop的item进行validate</td>
</tr>
<tr>
<td>validateField(prop, cb = (errors) =&gt; {})</td>
<td>通过prop对指定item进行validate</td>
</tr>
</tbody>
</table>
<h3>Form-item Props</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>标签文本</td>
<td>string</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>prop</td>
<td>表单model对应字段（嵌套用<code>:</code>分隔)</td>
<td>string</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>muted-text</td>
<td>输入提示文字</td>
<td>string</td>
<td>--</td>
<td>--</td>
</tr>
<tr>
<td>required</td>
<td>是否必选样式控制</td>
<td>string</td>
<td>--</td>
<td>false</td>
</tr>
<tr>
<td>label-width</td>
<td>标签宽度</td>
<td>string</td>
<td>--</td>
<td>--</td>
</tr>
</tbody>
</table>
</section></template>

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