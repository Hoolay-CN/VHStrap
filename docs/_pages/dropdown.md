# Dropdown (下拉)

#### Basic

<div class="ex-dd-container" style="padding-bottom: 20px;">
  <vh-dropdown :up="false" type="outline-hoolay" label="Checkout Repo">
    <dd-item type="header">Header</dd-item>
    <dd-item @select="onItemSelect" tag="Charles label">
      <i class="iconfont icon-yishujia"></i>
      Charles
    </dd-item>
    <dd-item type="header">Links</dd-item>
    <dd-item href="http://google.com" target="_blank">
      <i class="iconfont icon-face"></i>
      Google
    </dd-item>
    <dd-item type="divider"></dd-item>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </vh-dropdown>
</div>

<script>
  import VhIcon from 'src/components/iconfonts/index.vue';
  import { VhDropdown, VhDropdownItem as DdItem } from 'src/components/dropdown/index';
  export default {
    components:{
      VhDropdown, DdItem
    }
  }
</script>

```html
<div class="ex-dd-container">
  <vh-dropdown :up="false" label="Checkout Repo">
    <dd-item type="header">Header</dd-item>
    <dd-item @select="onItemSelect" tag="Charles label">
      <i class="iconfont icon-yishujia"></i>
      Charles
    </dd-item>
    <dd-item type="header">Links</dd-item>
    <dd-item href="http://google.com" target="_blank">
      <i class="iconfont icon-face"></i>
      Google
    </dd-item>
    <dd-item type="divider"></dd-item>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </vh-dropdown>
</div>

<script>
  import { VhDropdown, VhDropdownItem as DdItem } from 'src/components/dropdown/index';
  export default {
    components:{
      VhDropdown, DdItem
    }
  }
</script>
```

### Dropdown Props

| 参数      | 说明        | 类型      | 可选值                | 默认值   |
| ------- | --------- | ------- | ------------------ | ----- |
| type    | 按钮样式类型    | String  | --                 | --    |
| label   | 按钮说明文字    | String  | --                 | 必选    |
| visible | 子菜单是否可见   | Boolean | --                 | false |
| trigger | 触发时间类型    | String  | ['click', 'hover'] | click |
| up      | 子菜单是否向上对其 | Boolean | --                 | false |

### Dropdown-menu Props

| 参数      | 说明        | 类型      | 可选值                | 默认值   |
| ------- | --------- | ------- | ------------------ | ----- |
| right | 菜单是否右对齐  | Boolean | --                 | false    |

### Dropdown-menu-item Props

| 参数      | 说明        | 类型      | 可选值                | 默认值   |
| ------- | --------- | ------- | ------------------ | ----- |
| tag  | 自定义item唯一标识  | String | --                 | --|
| type | item类型 | String | ['divider', 'header', 'item'] | item |
| disabled | 是否禁用 | Boolean | -- | false |
| href | 链接地址 | String | -- | -- |
| target | href打开方式 | String | -- | -- |

### Dropdown-menu-item Events

| 事件名称   | 说明         | 回调参数             |
| ------ | ---------- | ---------------- |
| select | item被选中时触发 | item vm instance |
