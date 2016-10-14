## Preview

No zuo No die . Just try it ..

<div class="container">
  <div class="app-wrapper">
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
    <div class="container" style="padding-top: 50px;">
      <button class="btn btn-outline-hoolay" @click="showNotification()">
        Show Notification
      </button>
      <button class="btn btn-outline-success" @click="modalVisible = true">
        Show Modal
      </button>
      <vh-dropdown :up="true" label="Checkout Repo">
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
      <vh-modal title="Hello Modal" :show.sync="modalVisible" :large="true" effect="fade">
        <div slot="modal-body">
          <h2>
            Hello Body
          </h2>
          <vh-form :inline="false" :model="$data">
            <vh-form-item label="Email:" muted-text="一个友情提示..." prop="email">
              <vh-input-group>
                <vh-input :value.sync="email" type="text" placeholder="Email" :on-change="onInputChange"></vh-input>
                <span class="input-group-addon">@icloud.com</span>
              </vh-input-group>
            </vh-form-item>
          </vh-form>
        </div>
      </vh-modal>
    </div>
    <div style="padding: 60px 0px;">
      <div class="container">
        <div class="row">
          <div class="col-xs-5">
            <vh-form :inline="false" :model="$data">
              <vh-form-item label="Email:" muted-text="一个友情提示..." prop="email">
                <vh-input-group>
                  <vh-input :value.sync="email" type="text" placeholder="Email" :on-change="onInputChange"></vh-input>
                  <span class="input-group-addon">@icloud.com</span>
                </vh-input-group>
              </vh-form-item>
              <vh-form-item label="Price:" prop="price">
                <vh-input-group>
                  <span class="input-group-addon">￥</span>
                  <vh-input value="100" type="number"></vh-input>
                </vh-input-group>
              </vh-form-item>
              <vh-form-item label="Select One:" prop="select">
                <vh-select name="select" :value.sync="select" label="--请选择一个xx--" :options="[ {name: 'one', value: '1'}, {name: 'two', value: '2'}, { label: '地理位置', subs: [ {name: 'four', value: '4'}, {name: 'five', value: '5'} ] }, {name: 'three', value: '3'} ]"></vh-select>
              </vh-form-item>
              <vh-form-item label="Content:" prop="content" muted-text="字数不要超过100个哟">
                <vh-input-group>
                  <vh-input type="textarea" placeholder="description here ..." :styles="{height: '120px'}"></vh-input>
                </vh-input-group>
              </vh-form-item>
              <vh-form-item label="How many People Do you Love ?" muted-text="multiple checkbox" prop="from">
                <vh-checkbox-group :value="froms">
                  <vh-checkbox label="中国人" :on-change="onCheckboxChange" name="from[zh-cn]"></vh-checkbox>
                  <vh-checkbox label="美国人" :on-change="onCheckboxChange" name="from[usa]"></vh-checkbox>
                  <vh-checkbox label="日本人" :on-change="onCheckboxChange" name="from[jp]"></vh-checkbox>
                </vh-checkbox-group>
              </vh-form-item>
              <vh-form-item label="Which fruit do you like to eat ?" muted-text="single radio" prop="fruits">
                <vh-radio-group :value="fruit" @input="onFruitsInput">
                  <vh-radio label="西瓜" name="fruits[]"></vh-radio>
                  <vh-radio label="苹果" name="fruits[]"></vh-radio>
                  <vh-radio label="菠萝" name="fruits[]"></vh-radio>
                </vh-radio-group>
              </vh-form-item>
            </vh-form>
          </div>
          <div class="col-xs-6">
            <vh-pagination :total="300" :current.sync="page" size="md"></vh-pagination>
            <p>
              <vh-tooltip content="Top Hi center" placement="top">
                <vh-badge value="9+">
                  <button class="btn btn-secondary">Dark Tooltip</button>
                </vh-badge>
              </vh-tooltip>
              <vh-tooltip content="您购物车有 8 件商品 ." placement="top" style="margin-left: 50px;">
                <vh-badge value="8">
                  <vh-button icon="shopping-cart" type="secondary">Cart</vh-button>
                </vh-badge>
              </vh-tooltip>
            </p>
            <p>
              <vh-icon type="loading"></vh-icon>
              <vh-icon type="favorite"></vh-icon>
            </p>
            <div>
              <vh-button type="secondary">Hi. I am a button</vh-button>
              <vh-button type="hoolay">Hi. I am a button</vh-button>
              <vh-button type="outline-hoolay">Hi. I am a button</vh-button>
              <p style="padding: 20px 0;">
                <vh-button type="outline-danger" :block="true">Hi. I am a button</vh-button>
                <vh-button type="secondary" :block="true" @click="onModalAlert">Modal.alert('hahaha')</vh-button>
                <vh-button type="secondary" :block="true" @click="onModalConfirm">Modal.confirm('确定删除')</vh-button>
              </p>
              <p>
                <vh-button type="outline-hoolay" :loading="true">加载中...</vh-button>
                <vh-button type="hoolay" size="sm" icon="send">发送邮件</vh-button>
                <vh-badge value="9+" is-dot>
                  <vh-button type="secondary" size="sm" icon="favorite"></vh-button>
                </vh-badge>
                <vh-button type="secondary" size="sm" icon="settings"></vh-button>
                <vh-button type="outline-success" size="sm" icon="face"></vh-button>
                <vh-tooltip content="Let's gift ..." placement="top">
                  <vh-button type="outline-warning" size="sm" icon="packing"></vh-button>
                </vh-tooltip>
              </p>
              <p>
                <vh-alert>
                  Hello this is info
                </vh-alert>
                <vh-alert type="warning">
                  Hello this is info
                </vh-alert>
                <vh-alert type="success">
                  Hello this is info
                </vh-alert>
                <vh-alert type="danger">
                  Hello this is info
                </vh-alert>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<script type="text/babel">
  import Notification from 'src/components/notification';
  import VhIcon from 'src/components/iconfonts/index.vue';
  import VhAlert from 'src/components/alert/alert.vue';
  import { VhContainer, VhRow, VhCol } from 'src/components/layout/index';
  import { VhCheckbox, VhCheckboxGroup } from 'src/components/checkbox/index';
  import { VhForm, VhFormItem } from 'src/components/form/index';
  import { VhRadio, VhRadioGroup } from 'src/components/radio/index';
  import { VhInputGroup, VhInput } from 'src/components/input/index';
  import { VhSelect } from 'src/components/select/index';
  import { VhDropdown, VhDropdownItem as DdItem } from 'src/components/dropdown/index';
  import { VhButton, VhButtonGroup } from 'src/components/button/index';
  import ModalFactory, { VhModal }from 'src/components/modal/index';
  import VhPagination from 'src/components/pagination/index.vue';
  import VhTooltip from 'src/components/tooltip/index.vue';
  import VhBadge from 'src/components/badge/index.vue';

  export default {
    data() {
      return {
        froms: ['中国人', '美国人'],
        fruit: '苹果',
        email: 'x86',
        select: '',
        modalVisible: false,
        page: 1
      };
    },
    computed: {
      cols() {
        return [...Array(24).keys()].map((n) => 1+n);
      }
    },
    methods: {
      onModalAlert() {
        ModalFactory.alert('What Can i do for you', () => {
          alert('您点击了确定');
        });
      },
      onModalConfirm() {
        ModalFactory.confirm('确定要删除吗?', (state) => {
          alert(state)
        });
      },
      onCheckboxChange(sure, vmCheckbox) {
        console.log(sure);
        console.log(vmCheckbox.name);
      },
      onInputChange(val, vmInput) {},
      onFromsInput(value) {
//        will be trigger twice
//        console.log(value);
      },
      onFruitsInput(value) {
        this.fruit = value;
      },
      onItemSelect(vmItem) {
        alert(`Click => ${vmItem.tag}`);
      },
      showNotification: function() {
        let vmNotify = Notification();

        vmNotify.title = '我是一个警告s';
        vmNotify.message = '邮箱必须完成!';

        vmNotify.type = ['success', 'warning', 'error', 'info'][Math.floor(Math.random()*4)];
        vmNotify.visible = true;

      },
      showModal() {
        alert('haha');
      }
    },
    ready() {},
    components: {
      VhContainer,
      VhRow,
      VhCol,
      VhCheckbox,
      VhCheckboxGroup,
      VhForm,
      VhFormItem,
      VhRadio,
      VhRadioGroup,
      VhInput,
      VhInputGroup,
      VhSelect,
      ModalFactory,
      VhModal,
      VhDropdown,
      DdItem,
      VhPagination,
      VhTooltip,
      VhIcon,
      VhButton,
      VhButtonGroup,
      VhAlert,
      VhBadge
    }
  }
</script>
