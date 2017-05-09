<template>
  <div class="form-group" :class="{
    'has-danger': error !== '',
    'is-validating': validating,
    'is-required': isRequired || required
  }">
    <label class="" :style="labelStyle" v-if="label">
      {{label + form.labelSuffix}}
    </label>
    <div class="form-control-content" :style="contentStyle">
      <slot></slot>
    </div>
    <!-- error feedback -->
    <div class="form-control-feedback" v-if="error !== ''">{{ error }}</div>
    <!-- muted text -->
    <small class="form-text text-muted" v-if="mutedText !== ''">{{ mutedText }}</small>
  </div>
</template>
<!--suppress JSUnresolvedVariable -->
<script>
  import Vue from 'vue';
  import AsyncValidator from 'async-validator';
  import consts from '../common/constants';

  export default {
    name: 'VhFormItem',

    componentName: 'form-item',

    props: {
      label: String,
      labelWidth: String,
      mutedText: String,
      prop: String,
      required: Boolean,
      rules: [Object, Array] // rule's field `trigger` { String|Array }
    },
    computed: {
      // Calculate label styles Object
      labelStyle() {
        let ret = {};
        let labelWidth = this.labelWidth || this.form.labelWidth;
        if (labelWidth) {
          ret.width = labelWidth;
        }
        return ret;
      },
      // Calculate form-control view wrap styles
      contentStyle() {
        let ret = {};
        let labelWidth = this.labelWidth || this.form.labelWidth;

        if (labelWidth) {
          ret.marginLeft = labelWidth;
        }

        if (this.form.inline) {
          ret.display = 'inline-block';
          ret.width = 'auto';
          ret.verticalAlign = 'middle';
        }

        return ret;
      },
      // Get parent's vmInstance
      form() {
        let parent = this.$parent;
        while (parent.$options.componentName !== 'form') {
          parent = parent.$parent;
        }
        return parent;
      },
      // Get current input value from top From's modal with prop pattern (eg: `a:b:c` -> `modal->a->b->c`)
      fieldValue: {
        cache: false,
        get() {
          let model = this.form.model;
          if (!model || !this.prop) {
            return;
          }

          // Deep Modal Key/Value
          let temp = this.prop.split(':');

          return temp.length > 1
              ? model[temp[0]][temp[1]]
              : model[this.prop];
        }
      }
    },
    data() {
      return {
        valid: true,
        error: '',
        validateDisabled: false,
        validating: false,
        // validator: {}, /* internal */
        isRequired: false
      };
    },
    methods: {
      /**
       * validate current input item by Rules (self or parent definition)
       * @param trigger {String}
       * @param cb {Function}
       * @returns {boolean}
       */
      validate(trigger, cb = (errors) => {}) {

        Vue.config.debug && console.info(`[form-item - ${this.prop}] try to validating ...`);

        let rules = this.getFilteredRule(trigger);

        if (!rules || rules.length === 0) {
          Vue.config.debug && console.warn(`[form-item - ${this.prop}] but nothing to validate !`);

          cb && cb();
          return true;
        }

        this.validating = true;

        let descriptor = {};
        descriptor[this.prop] = rules;

        let validator = new AsyncValidator(descriptor);
        let model = {};

        model[this.prop] = this.fieldValue;

        Vue.config.debug && console.info(`[form-item - ${this.prop}] start validate :descriptor ${descriptor} :model ${model} !`);

        validator.validate(model, {firstFields: true}, (errors, fields) => {
          this.valid = !errors;
          this.error = errors ? errors[0].message : '';

          cb && cb(errors);
          this.validating = false;
        });
      },
      // @Todo Enhancement
      resetField() {
        this.valid = true;
        this.error = '';

        let model = this.form.model;
        let value = this.fieldValue;

        if (Array.isArray(value) && value.length > 0) {
          this.validateDisabled = true;
          model[this.prop] = [];
        } else if (typeof value === 'string' && value !== '') {
          this.validateDisabled = true;
          model[this.prop] = '';
        } else if (typeof value === 'number') {
          this.validateDisabled = true;
          model[this.prop] = 0;
        }
      },
      // Get rules by self or parent Form definition
      resolveItemRules() {
        if (!this.prop) {
          return [];
        }

        let rules = this.rules || ( (this.form.rules && this.form.rules[this.prop]) ? this.form.rules[this.prop] : [] );

        return Array.isArray(rules) ? rules : [rules];
      },
      /**
       * Get rules by trigger event type(eg: `blur', `change`...)
       * @param trigger
       * @returns {*}
       */
      getFilteredRule(trigger) {
        let rules = this.resolveItemRules();

        return rules.filter(rule => {
          // rule's trigger could be an Array
          return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
        });
      },
      // Default Blur Validate Hook
      onFieldBlur() {
        Vue.config.debug && console.info(`[form-item - ${this.prop}] received *blur* event from child inputer`);

        typeof this.form.rules !== 'undefined' && this.validate('blur');
      },
      // Default Change Validate Hook
      onFieldChange() {
        Vue.config.debug && console.info(`[form-item - ${this.prop}] received *change* event from child inputer`);

        if (this.validateDisabled) {
          this.validateDisabled = false;
          return;
        }

        typeof this.form.rules !== 'undefined' && this.validate('change');
      }
    },
    ready() {
      let rules = this.resolveItemRules();

      rules.every(rule => {
        if (rule.required) {
          this.isRequired = true;
          return false;
        }
      });

      if (this.prop) {
        this.$dispatch(consts.NS_EVENT_FORM_ADD_FIELD, this);
      }

      // Observe Actual Input Event
      this.$on(consts.NS_EVENT_FORM_ITEM_XNATIVE_BLUR, this.onFieldBlur);
      this.$on(consts.NS_EVENT_FORM_ITEM_XNATIVE_CHANGE, this.onFieldChange);
    },
    beforeDestroy() {
      this.$dispatch(consts.NS_EVENT_FORM_REMOVE_FIELD, this);
    }
  };
</script>
