<template>
  <div class="btn-group">
    <button :class="['btn','btn-' + type]" :disabled="disabled" type="button">
      {{ text }}
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        names: [],
        loading: false,
      };
    },
    props: {
      text: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'default',
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {},
    created: function() {
      console.log('created');
    },
    ready: function() {
      console.warn('other ready');
    }
  }
</script>
<style lang="css">
  body {
    font-size: 30px;
  }
</style>
