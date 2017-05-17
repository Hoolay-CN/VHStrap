<template>
  <button
      :class="['btn','btn-' + type, 'btn-' + size, {
        'btn-block': block,
        'disabled' : disabled || loading
      }]"
      :disabled="disabled"
      type="button">
    <vh-icon type="loading" v-if="loading"></vh-icon>
    <vh-icon :type="icon" v-if="icon && !loading"></vh-icon>
    <slot></slot>
  </button>
</template>

<script>
  import VhIcon from '../iconfonts/index.vue';

  export default {
    name: 'VhButton',

    props: {
      loading: {
        type: Boolean
      },
      type: {
        type: String,
        'default': 'default',
      },
      size: {
        type: String, // `sm` , `lg`
        'default': 'md'
      },
      icon: {
        type: String,
        'default': ''
      },
      disabled: Boolean,
      block: Boolean
    },

    components: {
      VhIcon
    }
  }
</script>

<style lang="scss">
  .btn-lg, .btn-group-lg > .btn {
    .iconfont {
      font-size: 1.25rem;
    }
  }
</style>
