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
        // @Todo `event` change will be do twice (eg: `custom`, `native`)
        this.$emit('change', value);
        this.$dispatch(consts.NS_EVENT_FORM_ITEM_XNATIVE_CHANGE, value);
      }
    }
  };
</script>
