<template>
  <div class="vh-form-check__group">
    <slot></slot>
  </div>
</template>

<script>
  import consts from '../common/constants';

  export default {
    name: 'VhCheckboxGroup',

    props: {
      value: {}
    },

    watch: {
      value(value) {
        this.$emit('change', value);
        this.$dispatch(consts.NS_EVENT_FORM_XNATIVE_CHANGE, value);
      }
    }
  };
</script>
