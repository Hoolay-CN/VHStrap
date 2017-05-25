<template>
    <!-- bootstrap -->
    <div class="btn-group"
         :class="{ 'open': internalVisible, 'dropup': up }"
         v-clickoutside="_closeImmediate"
    >

        <button type="button"
                :class="'btn btn-' + type + ' dropdown-toggle'"
                @click="toggle"
                @mouseenter="_mouseEnterHandler"
                @mouseleave="_mouseLeaveHandler"
        >
            {{ label }}
        </button>

        <vh-dropdown-menu
                @mouseenter="_mouseEnterHandler"
                @mouseleave="_mouseLeaveHandler"
        >
            <!-- items -->
            <slot></slot>
        </vh-dropdown-menu>
    </div>
</template>

<script type="text/babel">
  import clickoutside from '../../plugins/v-clickoutside2';
  import VhDropdownMenu from './dd-menu.vue';

  export default {
    name: 'VhDropdown',
    timer: null,

    directives: { clickoutside },

    props: {
      type: {
        type: String,
        'default': 'default'
      },
      label: {
        type: String,
        required: true
      },
      visible: {
        type: Boolean,
        'default': false
      },
      trigger: {
        type: String,
        'default': 'click'
      },
      up: { // Control menu up or down (default)
        type: Boolean,
        'default': false
      }
    },
    
    data: function () {
      return {
        internalVisible: this.visible
      }
    },

    computed: {},

    methods: {
      open() {
        clearTimeout(this.$options.timer)
        this.$options.timer = setTimeout(() => {
          this.internalVisible = true
        }, 16)
      },
      // But also immediate is async .
      close(immediate = false) {
        clearTimeout(this.$options.timer)
        this.$options.timer = setTimeout(() => {
          this.internalVisible = false
        }, immediate ? 0 : 256)
      },
      toggle() {
        clearTimeout(this.$options.timer);
        this.internalVisible = !this.internalVisible;
      },
      _closeImmediate() {
        this.close(true);
      },
      _mouseEnterHandler() {
        if (this.trigger === 'hover') {
          this.open();
        }
      },
      _mouseLeaveHandler() {
        if (this.trigger === 'hover') {
          this.close();
        }
      },
      _clickHandler() {
        if (this.trigger === 'click') {
          this.toggle();
        }
      }
    },

    components: {
      VhDropdownMenu
    }
  }
</script>