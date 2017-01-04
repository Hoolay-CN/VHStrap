<template xmlns:v-ref="http://www.w3.org/1999/xhtml" xmlns:v-el="http://www.w3.org/1999/xhtml">
  <div
      class="vh-tooltip"
      @mouseenter="handleShowPopper"
      @mouseleave="handleClosePopper">
    <div class="vh-tooltip__rel"
         v-el:reference
    >
      <slot></slot>
    </div>

    <div
        class="vh-tooltip__popper"
        :class="['is-' + effect]"
        :transition="transition"
        @after-leave="doDestroy"
        v-show="!disabled && showPopper"
        v-el:popper
    >
      <slot name="content"><div v-text="content"></div></slot>
    </div>
  </div>
</template>

<script>
  import Popper from 'vh-src/mixins/popper';

  export default {
    name: 'VhTooltip',

    mixins: [Popper],

    props: {
      openDelay: {
        type: Number,
        default: 0
      },
      disabled: Boolean,
      effect: {
        type: String,
        default: 'dark'
      },
      content: String,
      visibleArrow: {
        default: true
      },
      transition: {
        type: String,
        default: 'fade'
      },
      options: {
        default() {
          return {
            boundariesPadding: 10,
            gpuAcceleration: false
          };
        }
      }
    },

    methods: {
      handleShowPopper() {
        this.timeout = setTimeout(() => {
          this.showPopper = true;
        }, this.openDelay);
      },

      handleClosePopper() {
        clearTimeout(this.timeout);
        this.showPopper = false;
      }
    }
  };
</script>

<style>
  .fade-transition {
    transition: opacity .5s;
    opacity: 1;
  }
  .fade-enter {
    opacity: 1;
  }
  .fade-leave {
    opacity: 0;
  }
</style>
