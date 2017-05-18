<template>
  <div class="vh-form-radio-group">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import consts from '../common/constants'
  import emitter from '../../mixins/emitter'

  export default {
    name: 'VhRadioGroup',

    mixins: [ emitter ],

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
        this.$emit('change', value)

        this.dispatch('VhFormItem', consts.NS_EVENT_FORM_ITEM_XNATIVE_CHANGE, value)
      }
    }
  };
</script>
