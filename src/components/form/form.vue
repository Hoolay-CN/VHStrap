<!--suppress ALL -->
<template>
  <form class="form" :class="[
    { 'form-inline': inline }
  ]">
    <slot></slot>
  </form>
</template>
<script>
  import Vue from 'vue';
  import consts from '../common/constants';

  export default {
    name: 'VhForm',

    componentName: 'form',

    props: {
      model: Object,
      rules: Object,
      labelWidth: String,
      labelSuffix: {
        type: String,
        default: ''
      },
      inline: Boolean
    },
    data() {
      return {
        fields: {},
        fieldLength: 0
      };
    },
    created() {
      this.$on(consts.NS_EVENT_FORM_ADD_FIELD, (vmFormItem) => {

        Vue.config.debug && console.info(`[form - ${consts.NS_EVENT_FORM_ADD_FIELD}] event type received . ${vmFormItem.$options.name}`);

        this.fields[vmFormItem.prop] = vmFormItem;
        this.fieldLength++;
      });

      this.$on(consts.NS_EVENT_FORM_REMOVE_FIELD, (vmFormItem) => {

        Vue.config.debug && console.info(`[form - ${consts.NS_EVENT_FORM_REMOVE_FIELD}] event type received . ${vmFormItem.$options.name}`);

        delete this.fields[vmFormItem.prop];
        this.fieldLength--;
      });
    },
    methods: {
      resetFields() {
        for (let prop in this.fields) {
          let field = this.fields[prop];
          field.resetField();
        }
      },
      validate(callback) {
        var count = 0;
        var valid = true;

        for (let prop in this.fields) {
          let field = this.fields[prop];
          field.validate('', errors => {
            if (errors) {
              valid = false;
            }

            if (++count === this.fieldLength) {
              callback(valid);
            }
          });
        }
      },
      validateField(prop, cb) {
        var field = this.fields[prop];
        if (!field) { throw new Error('must call validateField with valid prop string!'); }

        field.validate('', cb);
      }
    }
  };
</script>
