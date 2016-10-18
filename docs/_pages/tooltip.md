# Tooltip (提示便签)

#### Basic

```javascript
import VhTooltip from 'src/components/tooltip/index.vue';
```

<div style="padding: 15px 0;">
  <vh-tooltip content="Top Hi center" placement="top" effect="light">
    <vh-badge value="9+">
      <button class="btn btn-secondary">Dark Tooltip</button>
    </vh-badge>
  </vh-tooltip>
  <vh-tooltip content="您购物车有 8 件商品 ." placement="top" style="margin-left: 50px;">
    <vh-badge value="8">
      <vh-button icon="shopping-cart" type="secondary">Cart</vh-button>
    </vh-badge>
  </vh-tooltip>
</div>

```html
<div style="padding: 15px 0;">
  <vh-tooltip content="Top Hi center" placement="top" effect="light">
    <vh-badge value="9+">
      <button class="btn btn-secondary">Dark Tooltip</button>
    </vh-badge>
  </vh-tooltip>
  <vh-tooltip content="您购物车有 8 件商品 ." placement="top" style="margin-left: 50px;">
    <vh-badge value="8">
      <vh-button icon="shopping-cart" type="secondary">Cart</vh-button>
    </vh-badge>
  </vh-tooltip>
</div>
```

<script>
  import VhTooltip from 'src/components/tooltip/index.vue';
  import VhBadge from 'src/components/badge/index.vue';
  import { VhButton } from 'src/components/button/index';

  export default {
    components: {
      VhTooltip,
      VhBadge,
      VhButton
    }
  }
</script>


### Tooltip Props

| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
|  effect        |  默认提供的主题  | String            | `dark`, `light`  | dark  |
|  content        |  显示的内容，也可以通过 `slot#content` 传入 DOM  | String            | — | — |
|  placement        |  Tooltip 的出现位置  | String           |  `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end` |  bottom |
|  value(v-model)        |  状态是否可见  | Boolean           | — |  false |
|  disabled       |  Tooltip 是否可用  | Boolean           | — |  false |
|  offset        |  出现位置的偏移量  | Number           | — |  0 |
|  transition     |  定义渐变动画      | String             | — | `fade-in-linear` |
|  visible-arrow   |  是否显示 Tooltip 箭头，更多参数可见[Vue-popper](https://github.com/element-component/vue-popper) | Boolean | — | true |
|  options        | [popper.js](https://popper.js.org/documentation.html) 的参数 | Object            | 参考 [popper.js](https://popper.js.org/documentation.html) 文档 | `{ boundariesElement: 'body', gpuAcceleration: false }` |
| open-delay | 延迟出现，单位毫秒 | Number | — | 0 |


### Links

[https://popper.js.org/documentation.html](https://popper.js.org/documentation.html)