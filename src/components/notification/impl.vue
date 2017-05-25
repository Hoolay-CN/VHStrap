<template>
  <transition
      enter-active-class="animated bounceInRight"
      leave-active-class="animated fadeOut"
      @after-leave="afterLeave"
  >
    <div class="vh-notification" v-show="visible" :style="{ top: top ? top + 'px' : 'auto' }" @mouseenter="clearTimer()"
         @mouseleave="startTimer()">
      <vh-icon class="vh-notification__icon" :type="typeClass" v-if="type"></vh-icon>
      <div class="vh-notification__group" :style="{ 'margin-left': typeClass ? '55px' : '0' }">
        <span>{{ title }}</span>
        <p>{{ message }}</p>
        <div class="vh-notification__closeBtn close" @click="handleClose()">&times;</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import { VhIcon } from '../iconfonts'

  const typeMap = {
    success: 'right',
    info: 'info',
    warning: 'warn',
    error: 'error'
  };

  export default {
    name: 'VhNotification',

    data() {
      return {
        visible: false,
        title: '',
        message: '',
        duration: 4000,
        type: '',
        onClose: null,
        closed: false,
        top: null,
        timer: null
      };
    },

    computed: {
      typeClass() {
        return this.type && typeMap[this.type] ? typeMap[this.type] : ''
      }
    },

    watch: {
      closed: function (newVal) {
        if (true === newVal) {
          this.visible = false
          // Clear
//          this.$nextTick(() => {
//            // this.$el.parentNode.removeChild(this.$el);
//            this.$destroy()
//          })
        }
      }
    },

    methods: {
      afterLeave() {
        this.$destroy()
      },
      handleClose() {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose()
        }
      },

      clearTimer() {
        clearTimeout(this.timer)
      },

      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.handleClose()
            }
          }, this.duration)
        }
      }
    },

    created() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.handleClose()
          }
        }, this.duration)
      }
    },

    components: {
      VhIcon,
    }
  }
</script>