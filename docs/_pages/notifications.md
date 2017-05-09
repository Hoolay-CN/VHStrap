# Notifications

#### Basic

```javascript
import NotificationFactory, { Notification } from 'src/components/notification';
```

<div class="lead" style="padding: 20px 0;">
  <button class="btn btn-outline-hoolay" @click="showNotification()">
    随机显示Notifications
  </button>
  <button class="btn btn-secondary" @click="notCloseNotification">
    不会关闭的通知
  </button>
</div>

```html
<div class="lead">
  <button class="btn btn-outline-hoolay" @click="showNotification()">
    随机显示Notifications
  </button>
  <button class="btn btn-secondary" @click="notCloseNotification">
    不会关闭的通知
  </button>
</div>

<script type="text/babel">
  import NotificationFactory, { Notification } from 'src/components/notification';

  export default {
    methods: {
      showNotification: function() {
        let type = ['success', 'warning', 'error', 'info'][Math.floor(Math.random()*4)];
        NotificationFactory[type]('hello');
      },
      notCloseNotification() {
        NotificationFactory.alert('我不会关闭哟', {
          duration: 0
        });
      }
    },
    components: {}
  }
</script>
```

<script type="text/babel">
  import NotificationFactory, { Notification } from 'src/components/notification';

  export default {
    methods: {
      showNotification: function() {
        let type = ['success', 'warn', 'error', 'info', 'alert'][Math.floor(Math.random()*5)];
        NotificationFactory[type]('hello');
      },
       notCloseNotification() {
        NotificationFactory.alert('我不会关闭哟', {
          duration: 0
        });
      }
    },
    components: {}
  }
</script>

### Notification Factory Facade
| 方法       | 说明   |
|------------|---------|
| alert(message, options) | -- |
| success(message, options) | -- |
| warn(message, options) | -- |
| info(message, options) | -- |
| error(message, options) | -- |


### Options

| 参数       | 说明                    | 类型       | 可选值                        | 默认值  |
| -------- | --------------------- | -------- | -------------------------- | ---- |
| title    | 标题                    | string   | —                          | —    |
| message  | 说明文字                  | string   | —                          | —    |
| type     | 主题样式，如果不在可选值内将被忽略     | string   | success/warning/info/error | —    |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number   | —                          | 4000 |
| onClose  | 关闭时的回调函数              | function | —                          | —    |
