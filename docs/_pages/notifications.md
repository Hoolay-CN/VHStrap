# Notifications

### Options
| 参数       | 说明                    | 类型       | 可选值                        | 默认值  |
| -------- | --------------------- | -------- | -------------------------- | ---- |
| title    | 标题                    | string   | —                          | —    |
| message  | 说明文字                  | string   | —                          | —    |
| type     | 主题样式，如果不在可选值内将被忽略     | string   | success/warning/info/error | —    |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | number   | —                          | 4000 |
| onClose  | 关闭时的回调函数              | function | —                          | —    |

