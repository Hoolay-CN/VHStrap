<template>
  <!-- bootstrap -->
  <div class="btn-group"
       :class="{ 'open': visible, 'dropup': up }"
       v-clickoutside="_closeImmediate"
  >

    <button type="button" class="btn btn-{{ type }} dropdown-toggle"
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
  import '../../plugins/v-clickoutsize';
  import VhDropdownMenu from './dd-menu.vue';

  export default {
    name: 'VhDropdown',
    timer: null,

    data() {
      return {}
    },

    props: {
      type: {
        type: String,
        default: 'default'
      },
      label: {
        type: String,
        required: true
      },
      visible: {
        type: Boolean,
        default: false
      },
      trigger: {
        type: String,
        default: 'click'
      },
      up: { // Control menu up or down (default)
        type: Boolean,
        default: false
      }
    },

    methods: {
      open() {
        clearTimeout(this.$options.timer);
        this.$options.timer = setTimeout(() => {
          this.visible = true;
        }, 16);
      },
      // But also immediate is async .
      close(immediate = false) {
        clearTimeout(this.$options.timer);
        this.$options.timer = setTimeout(() => {
          this.visible = false;
        }, immediate ? 0 : 256);
      },
      toggle() {
        clearTimeout(this.$options.timer);
        this.visible = !this.visible;
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
  };
</script>