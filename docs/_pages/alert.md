# Alert (提示块)

#### Basic

```javascript
import VhAlert from 'src/components/alert/alert.vue';
```

```html
<vh-alert> Hello this is info</vh-alert>
<vh-alert type="danger">Hello this is info</vh-alert>
```

<div class="ex-alert-container">
  <vh-alert>
    我们将很快为您发货 ！
  </vh-alert>
  <vh-alert type="warning">
    您已经支付完成了 ！
  </vh-alert>
  <vh-alert type="success">
    感谢您的支持 !
  </vh-alert>
  <vh-alert type="danger">
    500 Internal Error .
  </vh-alert>
</div>

<script>
  import VhAlert from 'src/components/alert/alert.vue';

  export default {
    components: {
      VhAlert
    }
  }
</script>

### Alert Props

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type          | 类型 | string | info, success, warning, danger |    info     |
| visible |  是否可见  | boolean |         —              |     true    |