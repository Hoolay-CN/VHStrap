# Buttons (按钮)


### Basic

<div class="ex-btn-container">
  <vh-button :type="el" v-for="el in types">{{el}}</vh-button>
</div>

### Outline

<div class="ex-btn-container">
  <vh-button :type="`outline-${el}`" v-for="el in types">outline-{{el}}</vh-button>
</div>

### Disabled
<div class="ex-btn-container">
  <vh-button type="hoolay" :disabled="true">Disabled</vh-button>
</div>

### Loading
<div class="ex-btn-container">
  <vh-button type="hoolay" :loading="true">Loading...</vh-button>
</div>

### Block
<div class="ex-btn-container">
  <vh-button type="hoolay" :block="true">block</vh-button>
</div>

### Size
<div class="ex-btn-container">
  <vh-button size="lg" type="hoolay">Large</vh-button>
  <vh-button size="md" type="success">Default</vh-button>
  <vh-button size="sm" type="warning">Small</vh-button>
</div>

### Group

<div class="ex-btn-group-container" style="padding: 10px 0;">
  <vh-button-group>
    <vh-button type="secondary" icon="store">Home</vh-button>
    <vh-button type="secondary" icon="yishujia">Artists</vh-button>
    <vh-button type="secondary" icon="collections">Arts</vh-button>
  </vh-button-group>
</div>

### Icon
<div class="ex-btn-container">
  <vh-button type="hoolay" size="sm" icon="send">发送邮件</vh-button>
  <vh-button type="secondary" size="sm" icon="settings"></vh-button>
  <vh-button type="outline-success" size="sm" icon="face"></vh-button>
</div>

<script>
  import { VhButton, VhButtonGroup } from 'src/components/button/index';

  export default {
    data() {
      return {
        types: ['hoolay', 'primary', 'success', 'info', 'warning', 'danger', 'secondary', 'default', 'link']
      }
    },
    components: {
      VhButton, VhButtonGroup
    }
  }
</script>

#### `#<code>`

```html
### Outline
<div class="ex-btn-container">
  <vh-button :type="`outline-${el}`" v-for="el in types">outline-{{el}}</vh-button>
</div>
### Disabled
<div class="ex-btn-container">
  <vh-button type="hoolay" :disabled="true">Disabled</vh-button>
</div>
### Loading
<div class="ex-btn-container">
  <vh-button type="hoolay" :loading="true">Loading...</vh-button>
</div>
### Block
<div class="ex-btn-container">
  <vh-button type="hoolay" :block="true">block</vh-button>
</div>
### Size
<div class="ex-btn-container">
  <vh-button size="lg" type="hoolay">Large</vh-button>
  <vh-button size="md" type="success">Default</vh-button>
  <vh-button size="sm" type="warning">Small</vh-button>
</div>
### Group
<div class="ex-btn-group-container" style="padding: 10px 0;">
  <vh-button-group>
    <vh-button type="secondary" icon="store">Home</vh-button>
    <vh-button type="secondary" icon="yishujia">Artists</vh-button>
    <vh-button type="secondary" icon="collections">Arts</vh-button>
  </vh-button-group>
</div>
### Icon
<div class="ex-btn-container">
  <vh-button type="hoolay" size="sm" icon="send">发送邮件</vh-button>
  <vh-button type="secondary" size="sm" icon="settings"></vh-button>
  <vh-button type="outline-success" size="sm" icon="face"></vh-button>
</div>
<script>
  import { VhButton, VhButtonGroup } from 'src/components/button/index';

  export default {
    data() {
      return {
        types: ['hoolay', 'primary', 'success', 'info', 'warning', 'danger', 'secondary', 'default']
      }
    },
    components: {
      VhButton, VhButtonGroup
    }
  }
</script>
```


<style lang="sass">
.ex-btn-container {
  padding: 10px 0;
  .btn {
    margin-right: 10px;
    margin-bottom: 5px;
  }
}
</style>