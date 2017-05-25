<template>
  <div
      class="vh-tooltip"
      @mouseenter="handleShowPopper"
      @mouseleave="handleClosePopper">
    <div class="vh-tooltip__rel"
         ref="reference"
    >
      <slot></slot>
    </div>

    <transition
        :name="transition"
        @after-leave="doDestroy"
    >
      <div
          class="vh-tooltip__popper"
          :class="['is-' + theme]"
          v-show="!disabled && showPopper"
          ref="popper"
      >
        <slot name="content">
          <div v-text="content"></div>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import Popper from '../../mixins/popper'

  export default {
    name: 'VhTooltip',

    mixins: [ Popper ],

    props: {
      openDelay: {
        type: Number,
        'default': 0
      },
      disabled: Boolean,
      theme: {
        type: String,
        'default': 'dark'
      },
      content: String,
      visibleArrow: {
        'default': true
      },
      transition: {
        type: String,
        'default': 'fade'
      },
      options: {
        'default'() {
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
          this.showPopper = true
        }, this.openDelay)
      },

      handleClosePopper() {
        clearTimeout(this.timeout)
        this.showPopper = false
      }
    }
  };
</script>

<style type="text/css">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    opacity: 1;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
