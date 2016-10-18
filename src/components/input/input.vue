<template>
  <template v-if="type !== 'textarea'">
    <input class="form-control"
      :class="_classes"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :number="number"
      :maxlength="maxlength"
      :minlength="minlength"
      :autocomplete="autoComplete"
      @focus="onFocus(localValue, this)"
      @blur="handleBlur"
      v-model="localValue"
    />
  </template>
  <!-- textarea -->
  <textarea v-else :name="name" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @focus="onFocus(localValue, this)" @blur="handleBlur" class="form-control" :class="_classes" v-model="localValue"></textarea>
</template>

<script type="text/babel">
  import consts from '../common/constants';

  export default {
    name: 'VhInput',

    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: '' // `lg` ，`sm`
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      autoComplete: {
        type: String,
        default: 'off'
      },
      maxlength: Number,
      minlength: Number,
      onChange: Function,
      onBlur: Function,
      onFocus: {
        type: Function,
        default: () => {}
      }
    },

    data() {
      return {
        localValue: ''
      };
    },

    methods: {
      handleBlur(e) {

        typeof this.onBlur=== 'function' && this.onBlur(this.localValue, this);

        // Notify Form item for validating field
        this.$dispatch(consts.NS_EVENT_FORM_ITEM_XNATIVE_BLUR, this.localValue);
      },

      selectInput() {
        this.$el.querySelector('.form-control').select();
      }
    },

    computed: {
      _classes() {
        let _classes = {};

        this.size !== '' && (_classes['form-control-' + this.size] = true);

        return _classes;
      }
    },

    watch: {
      value: {
        immediate: true,
        handler(val) {
          this.localValue = val;
        }
      },
      'localValue'(val) {
        // @Todo Update Proxy value
        this.value = val;

        typeof this.onChange === 'function' && this.onChange(val, this);
        this.$dispatch(consts.NS_EVENT_FORM_ITEM_XNATIVE_CHANGE, val);
      }
    }
  };
</script>