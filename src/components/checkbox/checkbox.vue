<template>
  <label class="vh-checkbox">
    <span class="vh-checkbox__input">
      <span class="vh-checkbox__inner"
            :class="{
          'is-disabled': disabled,
          'is-checked': checked,
          'is-indeterminate': indeterminate,
          'is-focus': focus
        }"
      ></span>
      <input
          v-if="trueLabel || falseLabel"
          class="vh-checkbox__original"
          :name="name"
          :true-value="trueLabel"
          :false-value="falseLabel"
          v-model="_value"
          type="checkbox"
          @focus="focus = true"
          @blur="focus = false"
          :disabled="disabled"
      />
      <input
          v-else
          class="vh-checkbox__original"
          :name="name"
          :value="label"
          v-model="_value"
          @focus="focus = true"
          @blur="focus = false"
          type="checkbox"
          :disabled="disabled"
      />
    </span>
    <span class="vh-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>
<script>
  import is from 'is_js';

  export default {
    props: {
      value: {},
      name: String,
      indeterminate: Boolean,
      disabled: Boolean,
      onChange: Function,
      trueLabel: [String, Number],
      falseLabel: [String, Number]
    },

    computed: {
      _value: { // Proxy Value
        get() {
          return this.value !== undefined ? this.value : this.$parent.value;
        },
        set(newValue) {
          if (this.value !== undefined) {
            // @Todo Handle multiple Value Types
            is.boolean(this.value) && (this.value = newValue);
            this.$emit('input', newValue);
          } else {
            this.$parent.$emit('input', newValue);
          }
        }
      },
      checked() {
        if (is.boolean(this._value)) {
          return this._value;
        } else if (is.array(this._value)) {
          // return !!~this._value.indexOf(this.label);
        } else if ( is.string(this._value) || is.number(this._value)) {
          return this._value === this.trueLabel;
        }
      }
    },

    data() {
      return {
        focus: false
      };
    },

    watch: {
      checked(sure) {
        is.function(this.onChange) && this.onChange(sure);
      }
    }
  };
</script>
