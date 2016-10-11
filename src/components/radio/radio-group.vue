<template>
  <div class="vh-form-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  import consts from '../common/constants';

  export default {
    name: 'VhRadioGroup',

    componentName: 'radio-group',

    props: {
      value: [String, Number],
      size: String
    },
    created() {
      // do this @parent
//      this.$on('input', (newValue) => {
//        this.value = newValue;
//      });
    },
    watch: {
      value(value) {
        this.$emit('change', value);
        this.$dispatch(consts.NS_EVENT_FORM_XNATIVE_CHANGE, value);
      }
    }
  };
</script>
