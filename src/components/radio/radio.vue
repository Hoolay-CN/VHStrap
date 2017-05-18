<template>
  <label class="vh-radio">
    <span class="vh-radio__input">
      <span class="vh-radio__inner"
            :class="{
        'is-disabled': disabled,
        'is-checked': _value === label,
        'is-focus': focus
      }"></span>
      <input
          class="vh-radio__original"
          :value="label"
          type="radio"
          v-model="_value"
          @focus="focus = true"
          @blur="focus = false"
          :name="name"
          :disabled="disabled">
    </span>
    <span class="vh-radio__label">
      {{label}}
    </span>
  </label>
</template>

<script type="text/babel">
  export default {
    name: 'VhRadio',

    props: {
      value: [String, Number],
      label: {
        type: [String, Number],
        required: true
      },
      disabled: Boolean,
      name: String
    },

    data() {
      return {
        focus: false
      };
    },

    computed: {
      _value: {
        get() {
          return this.value !== void 0 ? this.value : this.$parent.value
        },
        set(newValue) {
          if (this.value !== void 0) {
            // @Todo Single is Simple
            this.value = newValue
            this.$emit('input', newValue)
          } else {
            this.$parent.$emit('input', newValue)
          }
        }
      }
    }
  }
</script>
