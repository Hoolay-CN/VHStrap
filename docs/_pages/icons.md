# Icons (图标)

定制一套`iconfonts`的图标，由于我们的设计师组织了`Material Desigin Icon`，所以图标基本来源于Google.

<ul class="icon_lists clear">

  <li>
    <i class="icon iconfont icon-warn"></i>
    <div class="name">error</div>
    <div class="fontclass">warn</div>
  </li>

  <li>
    <i class="icon iconfont icon-info"></i>
    <div class="name">info</div>
    <div class="fontclass">info</div>
  </li>

  <li>
    <i class="icon iconfont icon-right"></i>
    <div class="name">right</div>
    <div class="fontclass">right</div>
  </li>

  <li>
    <i class="icon iconfont icon-loading"></i>
    <div class="name">loading</div>
    <div class="fontclass">loading</div>
  </li>

  <li>
    <i class="icon iconfont icon-jigou"></i>
    <div class="name">机构</div>
    <div class="fontclass">jigou</div>
  </li>

  <li>
    <i class="icon iconfont icon-yishujia"></i>
    <div class="name">艺术家</div>
    <div class="fontclass">yishujia</div>
  </li>

  <li>
    <i class="icon iconfont icon-chatbubbleoutline"></i>
    <div class="name">chat_bubble_outline</div>
    <div class="fontclass">chatbubbleoutline</div>
  </li>

  <li>
    <i class="icon iconfont icon-collections"></i>
    <div class="name">collections</div>
    <div class="fontclass">collections</div>
  </li>

  <li>
    <i class="icon iconfont icon-drafts"></i>
    <div class="name">drafts</div>
    <div class="fontclass">drafts</div>
  </li>

  <li>
    <i class="icon iconfont icon-face"></i>
    <div class="name">face</div>
    <div class="fontclass">face</div>
  </li>

  <li>
    <i class="icon iconfont icon-favorite"></i>
    <div class="name">favorite</div>
    <div class="fontclass">favorite</div>
  </li>

  <li>
    <i class="icon iconfont icon-favoriteoutline"></i>
    <div class="name">favorite_outline</div>
    <div class="fontclass">favoriteoutline</div>
  </li>

  <li>
    <i class="icon iconfont icon-filternone"></i>
    <div class="name">filter_none</div>
    <div class="fontclass">filternone</div>
  </li>

  <li>
    <i class="icon iconfont icon-mail"></i>
    <div class="name">mail</div>
    <div class="fontclass">mail</div>
  </li>

  <li>
    <i class="icon iconfont icon-mail-outline"></i>
    <div class="name">mail_outline</div>
    <div class="fontclass">mail-outline</div>
  </li>

  <li>
    <i class="icon iconfont icon-personoutline"></i>
    <div class="name">person_outline</div>
    <div class="fontclass">personoutline</div>
  </li>

  <li>
    <i class="icon iconfont icon-send"></i>
    <div class="name">send</div>
    <div class="fontclass">send</div>
  </li>

  <li>
    <i class="icon iconfont icon-shopping-cart"></i>
    <div class="name">shopping_cart</div>
    <div class="fontclass">shopping-cart</div>
  </li>

  <li>
    <i class="icon iconfont icon-star"></i>
    <div class="name">star</div>
    <div class="fontclass">star</div>
  </li>

  <li>
    <i class="icon iconfont icon-store"></i>
    <div class="name">store</div>
    <div class="fontclass">store</div>
  </li>

  <li>
    <i class="icon iconfont icon-textsms"></i>
    <div class="name">textsms</div>
    <div class="fontclass">textsms</div>
  </li>

  <li>
    <i class="icon iconfont icon-turnedin"></i>
    <div class="name">turned_in</div>
    <div class="fontclass">turnedin</div>
  </li>

  <li>
    <i class="icon iconfont icon-settings"></i>
    <div class="name">settings</div>
    <div class="fontclass">settings</div>
  </li>

  <li>
    <i class="icon iconfont icon-packing"></i>
    <div class="name">ic_packing</div>
    <div class="fontclass">packing</div>
  </li>

  <li>
    <i class="icon iconfont icon-error"></i>
    <div class="name">error</div>
    <div class="fontclass">error</div>
  </li>

  <li>
    <i class="icon iconfont icon-iceditlocation"></i>
    <div class="name">ic_edit_location</div>
    <div class="fontclass">iceditlocation</div>
  </li>

</ul>


```html
<vh-icon type="loading"></vh-icon>
<vh-icon type="favorite"></vh-icon>

<script>
  import VhIcon from 'src/components/iconfonts/index.vue';
</script>
```

<script>
  import VhIcon from 'src/components/iconfonts/index.vue';
</script>

<style lang="sass">
.icon_lists {
  list-style: none;
  overflow: hidden;
  padding-top: 25px;
  margin-left: -45px;
  li {
    width: 100px;
    text-align: center;
    height: 100px;
    overflow: auto;
    padding: 0;
    float: left;
    .iconfont {
      font-size: 22px;
    }
    .name {
      font-size: 13px;
      display: none;
    }
    .code {
      display: none;
    }
    .fontclass {
      font-size: 13px;
      padding: 10px 0;
    }
  }
}
</style>

### Links

[http://www.iconfont.cn/](http://www.iconfont.cn/)
