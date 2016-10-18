# Badge (徽章)

#### Basic

```javascript
import VhBadge from 'src/components/badge/index.vue';
```

<div style="padding: 10px 0;" class="ex-badge-container">
  <vh-badge value="8">
    <vh-button size="sm" type="secondary" icon="shopping-cart"></vh-button>
  </vh-badge>
  <vh-badge :value="888" :max="99">
    <vh-button size="sm" type="secondary" icon="favorite"></vh-button>
  </vh-badge>
  <vh-badge :value="888" :is-dot="true">
    <vh-button size="sm" type="hoolay" icon="textsms"></vh-button>
  </vh-badge>
</div>

```html
<div style="padding: 10px 0;" class="ex-badge-container">
  <vh-badge value="8">
    <vh-button size="sm" type="secondary" icon="shopping-cart"></vh-button>
  </vh-badge>
  <vh-badge :value="888" :max="99">
    <vh-button size="sm" type="secondary" icon="favorite"></vh-button>
  </vh-badge>
  <vh-badge :value="888" :is-dot="true">
    <vh-button size="sm" type="hoolay" icon="textsms"></vh-button>
  </vh-badge>
</div>
```


<script>
  import VhBadge from 'src/components/badge/index.vue';
  import { VhButton, VhButtonGroup } from 'src/components/button/index';

  export default {
    components: {
      VhBadge,
      VhButton
    }
  }
</script>

<style lang="sass">
  .ex-badge-container {
    .vh-badge {
      margin-right: 40px;
    }
  }
</style>

### Badge Props

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value          | 显示值      | string, number          |          —             |    —     |
| max          |  最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型    | number  |         —              |     —    |
| is-dot       | 小圆点    | boolean  |  —  |  false |
