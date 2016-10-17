# 布局 (Layout)

`Bootstrap`默认12栅格布局系统特性全部保留。

<div class="container ex-layout">
  <div class="row">
    <div class="col-sm-4">
      One of three columns
    </div>
    <div class="col-sm-4">
      One of three columns
    </div>
    <div class="col-sm-4">
      One of three columns
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      One of three columns
    </div>
    <div class="col-sm-4">
      One of three columns
    </div>
    <div class="col-sm-4">
      One of three columns
    </div>
  </div>
</div>
```

<style lang="sass">
  .ex-layout {
    .col-sm-4 {
      background-color: #eeeeee;
      padding: 20px 0;
      text-align: center;
    }
  }
</style>

#### 为了满足更精细的控制，系统扩展了一份24栅格的布局系统。

- 默认列间隔（gutter）16px

<vh-container>
  <vh-row>
    <vh-col :span="4">
      <h2 style="padding: 50px 0; background-color: #eeeeee; text-align: center">4</h2>
    </vh-col>
    <vh-col :span="20">
      <h2 style="padding: 50px 0; background-color: #eeeeee; text-align: center">20</h2>
    </vh-col>
  </vh-row>
  <vh-row>
    <vh-col v-for="n in cols">
      <h6 style="text-align: center; padding: 70px 0; background-color:  #eeeeee;">{{ n }}</h6>
    </vh-col>
  </vh-row>
</vh-container>

<script>
  import { VhContainer, VhRow, VhCol } from 'src/components/layout/index';

  export default {
    computed: {
      cols() {
        return [...Array(24).keys()].map((n) => 1+n);
      }
    },
    components: {
      VhContainer, VhRow, VhCol
    }
  }
</script>

```html
<vh-container>
  <vh-row>
    <vh-col :span="4">
      <h2 style="padding: 50px 0; background-color: #eeeeee; text-align: center">4</h2>
    </vh-col>
    <vh-col :span="20">
      <h2 style="padding: 50px 0; background-color: #eeeeee; text-align: center">20</h2>
    </vh-col>
  </vh-row>
  <vh-row>
    <vh-col v-for="n in cols">
      <h6 style="text-align: center; padding: 70px 0; background-color:  #eeeeee;">{{ n }}</h6>
    </vh-col>
  </vh-row>
</vh-container>

<script>
  import { VhContainer, VhRow, VhCol } from 'src/components/layout/index';

  export default {
    computed: {
      cols() {
        return [...Array(24).keys()].map((n) => 1+n);
      }
    },
    components: {
      VhContainer, VhRow, VhCol
    }
  }
</script>
```

### Links

[http://v4-alpha.getbootstrap.com/layout/grid/](http://v4-alpha.getbootstrap.com/layout/grid/)
