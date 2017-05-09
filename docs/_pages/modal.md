# Modal (弹出层)

#### Basic

```javascript
import ModalFactory, { VhModal }from 'src/components/modal/index';
```

<div class="ex-modal-container" style="padding-bottom: 15px;">
  <button class="btn btn-outline-hoolay" @click="modalShow = !modalShow">
    显示弹框组件
  </button>
  <button class="btn btn-outline-danger" @click="showModalAlert">
    提示框 `Alert`
  </button>
  <button class="btn btn-outline-success" @click="showModalConfirm">
    确认框 `Confirm`
  </button>
  <vh-modal :show.sync="modalShow" title="标题" :large="true">
    <div slot="modal-body">
      <p class="h1">h1. Bootstrap heading</p>
      <p class="h2">h2. Bootstrap heading</p>
      <p class="h3">h3. Bootstrap heading</p>
      <p class="h4">h4. Bootstrap heading</p>
      <p class="h5">h5. Bootstrap heading</p>
      <p class="h6">h6. Bootstrap heading</p>
    </div>
  </vh-modal>
</div>

<script>
  import ModalFactory, { VhModal }from 'src/components/modal/index';

  export default {
    data() {
      return {
        modalShow: false
      }
    },

    methods: {
      showModalAlert() {
        ModalFactory.alert('这是一个提示框', this.onConfirm);
      },

      showModalConfirm() {
        ModalFactory.confirm('这是一个确认框', this.onConfirmCb);
      },

      onConfirm() {
        alert('你点击了 确定');
      },

      onConfirmCb(isConfirm) {
        alert(`你点击了 ${isConfirm ? '确定' : '取消'}`);
      }
    },

    components: {
      VhModal
    }
  }
</script>

```html
<div class="ex-modal-container">
  <button class="btn btn-outline-hoolay" @click="modalShow = !modalShow">
    显示弹框组件
  </button>
  <button class="btn btn-outline-danger" @click="showModalAlert">
    提示框 `Alert`
  </button>
  <button class="btn btn-outline-success" @click="showModalConfirm">
    确认框 `Confirm`
  </button>
  <vh-modal :show.sync="modalShow" title="标题" :large="true">
    <div slot="modal-body">
      <p class="h1">h1. Bootstrap heading</p>
      <p class="h2">h2. Bootstrap heading</p>
      <p class="h3">h3. Bootstrap heading</p>
      <p class="h4">h4. Bootstrap heading</p>
      <p class="h5">h5. Bootstrap heading</p>
      <p class="h6">h6. Bootstrap heading</p>
    </div>
  </vh-modal>
</div>

<script>
  import ModalFactory, { VhModal }from 'src/components/modal/index';

  export default {
    data() {
      return {
        modalShow: false
      }
    },

    methods: {
      showModalAlert() {
        ModalFactory.alert('这是一个提示框', this.onConfirm);
      },

      showModalConfirm() {
        ModalFactory.confirm('这是一个确认框', this.onConfirmCb);
      },

      onConfirm() {
        alert('你点击了 确定');
      },

      onConfirmCb(isConfirm) {
        alert(`你点击了 ${isConfirm ? '确定' : '取消'}`);
      }
    },

    components: {
      VhModal
    }
  }
</script>
```

### Modal Props

| 参数          | 说明                    | 类型       | 可选值       | 默认值   |
| ----------- | --------------------- | -------- | --------- | ----- |
| title       | 标题                    | string   | --        | --    |
| show        | 绑定是否显示(two-way)       | boolean  | --        | false |
| ok-text     | 确认按钮文本                | string   | --        | 确定    |
| cancel-text | 取消按钮文本                | string   | --        | 取消    |
| width       | 手动控制宽度                | number   | --        | --    |
| large       | 是否大码                  | boolean  | --        | false |
| small       | 是否小码                  | boolean  | --        |       |
| effect      | 弹出动画效果                | string   | fade，zoom | fade  |
| on-ok       | 确定回调（返回false可以中断关闭弹框） | function | --        | --    |
| on-cancel   | 取消回调（可中断）             | function | --        | --    |

### Modal Factory Facade

| 方法       | 说明   |
|------------|---------|
| alert(message, done) | -- |
| confirm(message, confirmCallback = (isConfirmed) => {}) | -- |
