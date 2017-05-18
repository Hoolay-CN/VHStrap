<template lang="html">
  <transition
     enter-active-class="animated zoomIn"
     leave-active-class="animated zoomOut"
     @after-leave="afterLeave"
  >
    <div v-if="internalVisible"
         :class="'alert alert-' + type">
      <button type="button"
              class="close"
              @click="internalVisible = false">
        <span>&times;</span>
      </button>
      <slot></slot>
    </div>
  </transition>
</template>

<script type="text/babel">
  export default {
    name: 'VhAlert',

    data() {
      return {
        internalVisible: this.visible
      }
    },

    methods: {
      afterLeave() {
        this.$destroy()
      }
    },

    props: {
      visible: {
        type: Boolean,
        'default': true
      },
      type: {
        type: String,
        'default': 'info'
      }
    }
  }
</script>
