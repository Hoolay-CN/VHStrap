<template>
  <div :class="{
    'modal': true,
    'vh-modal': true,
    'fade':effect === 'fade',
    'zoom':effect === 'zoom'
    }"
  >
    <div :class="{ 'modal-dialog':true, 'modal-lg':large, 'modal-sm':small }"
         :style="{width: optionalWidth}">
      <div class="modal-content">
        <slot name="modal-header">
          <div class="modal-header">
            <button type="button" class="close" @click="close"><span>&times;</span></button>
            <h4 class="modal-title">
              <slot name="title">
                {{ title }}
              </slot>
            </h4>
          </div>
        </slot>
          <div class="modal-body">
            <slot name="modal-body"></slot>
          </div>
        <slot name="modal-footer">
          <div class="modal-footer">
            <button type="button" class="btn btn-default" @click="internalCancel">{{ cancelText }}</button>
            <button type="button" class="btn btn-hoolay" @click="internalOk">{{ okText }}</button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import classList from 'dom-classlist'
  import { getScrollBarWidth } from '../common/utils'

  export default {
    name: 'VhModal',

    props: {
      okText: {
        type: String,
        'default': '确定'
      },
      cancelText: {
        type: String,
        'default': '取消'
      },
      title: {
        type: String,
        'default': ''
      },
      show: {
        required: true,
        type: Boolean
      },
      width: {
        'default': null
      },
      onOk: {
        type: Function,
        'default' () {}
      },
      onCancel: {
        type: Function,
        'default' () {}
      },
      effect: {
        type: String,
        'default': 'fade'
      },
      backdrop: {
        type: Boolean,
        'default': true
      },
      large: {
        type: Boolean,
        'default': false
      },
      small: {
        type: Boolean,
        'default': false
      }
    },

    data() {
      return {
        internalShow: this.show
      }
    },

    computed: {
      optionalWidth () {
        if (this.width === null) {
          return null;
        } else if (Number.isInteger(this.width)) {
          return this.width + 'px';
        }
        return this.width;
      }
    },
    watch: {
      show(val) {
        // just flow down
        this.internalShow = val
      },

      internalShow (val) {

      	const vm = this
        const el = this.$el
        const body = document.body
        const scrollBarWidth = getScrollBarWidth()

        if (val) {
          el.querySelector('.modal-content').focus()

          el.style.display = 'block'

          if (scrollBarWidth !== 0) {
            body.style.paddingRight = scrollBarWidth + 'px'
          }

          classList(body).add('modal-open')

          setTimeout(() => {
          	classList(el).add('in')
          }, 0)

          // async
          el.addEventListener('transitionend', function endFn() {
            el.removeEventListener('transitionend', endFn)

	        vm.$emit('openTransitionEnd')
          }, false)

          // @Todo
          // if (this.backdrop) {}
          this.$emit('open')
        } else {
          body.style.paddingRight = null

          el.addEventListener('transitionend', function endFn() {
            el.removeEventListener('transitionend', endFn)

            classList(body).remove('modal-open')
            el.style.display = 'none'

            vm.$emit('closeTransitionEnd')
          }, false)

          classList(el).remove('in')

          this.$emit('close')
        }
      }
    },
    methods: {
      close () {
        this.internalShow = false
      },
      open () {
        this.internalShow = true
      },
      internalCancel(e) {
        typeof this.onCancel === 'function' && this.onCancel(e, this)

        this.close()

        return this.internalShow
      },
      internalOk(e) {
        let ok = null

        typeof this.onOk === 'function' && (ok = this.onOk(e, this))

        ok !== false && this.close()

        return this.internalShow
      }
    }
  }
</script>
