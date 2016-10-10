# Notifications

### 基本用法

<div class="lead" style="padding: 30px;">
  <button class="btn btn-outline-hoolay" @click="showNotification()">
    随机显示Notifications
  </button>
</div>

```html
<div class="lead">
  <button class="btn btn-outline-hoolay" @click="showNotification()">
    随机显示Notifications
  </button>
</div>

<script type="text/babel">
  import Notification from 'src/components/notification';

  export default {
    methods: {
      showNotification: function() {
        let vmNotify = Notification();

        vmNotify.title = '我是一个警告s';
        vmNotify.message = '邮箱必须完成!';

        vmNotify.type = ['success', 'warning', 'error', 'info'][Math.floor(Math.random()*4)];
        vmNotify.visible = true;

      }
    },
    components: {}
  }
</script>
```

<script type="text/babel">
  import Notification from 'src/components/notification';

  export default {
    methods: {
      showNotification: function() {
        let vmNotify = Notification();

        vmNotify.title = '我是一个警告s';
        vmNotify.message = '邮箱必须完成!';

        vmNotify.type = ['success', 'warning', 'error', 'info'][Math.floor(Math.random()*4)];
        vmNotify.visible = true;

      }
    },
    components: {}
  }
</script>

## Options
| 参数       | 说明                    | 类型       | 可选值                        | 默认值  |
| -------- | --------------------- | -------- | -------------------------- | ---- |
| title    | 标题                    | string   | —                          | —    |
| message  | 说明文字                  | string   | —                          | —    |
| type     | 主题样式，如果不在可选值内将被忽略     | string   | success/warning/info/error | —    |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number   | —                          | 4000 |
| onClose  | 关闭时的回调函数              | function | —                          | —    |
