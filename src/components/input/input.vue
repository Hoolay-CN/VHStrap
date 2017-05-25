<template>
    <input class="form-control"
       v-if="type !== 'textarea'"
      :class="_classes"
      type="text"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxLength"
      :minlength="minLength"
      :autocomplete="autoComplete"
      @focus="onFocus(localValue, this)"
      @blur="handleBlur"
      v-model="localValue"
    />

    <!-- textarea -->
    <textarea
        v-else
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @focus="onFocus(localValue, this)"
        @blur="handleBlur"
        class="form-control"
        :class="_classes"
        v-model="localValue"></textarea>
</template>

<script type="text/babel">
  import consts from '../common/constants'
  import emitter from '../../mixins/emitter'

  export default {
    name: 'VhInput',

    mixins: [ emitter ],

    props: {
      value: [String, Number],
      type: {
        type: String,
        'default': 'text'
      },
      placeholder: {
        type: String,
        'default': ''
      },
      size: {
        type: String,
        'default': '' // `lg` ，`sm`
      },
      readonly: {
        type: Boolean,
        'default': false
      },
      disabled: {
        type: Boolean,
        'default': false
      },
      name: {
        type: String,
        'default': ''
      },
      autoComplete: {
        type: String,
        'default': 'off'
      },
      maxLength: Number,
      minLength: Number,
      onChange: Function,
      onBlur: Function,
      onFocus: {
        type: Function,
        'default': () => {}
      }
    },

    data() {
      return {
        localValue: this.value
      }
    },

    methods: {
      handleBlur(e) {

        typeof this.onBlur=== 'function' && this.onBlur(this.localValue, this)

        // Notify Form item for validating field
        this.dispatch('VhFormItem', consts.NS_EVENT_FORM_ITEM_XNATIVE_BLUR, this.localValue)
      },

      selectInput() {
        this.$el.querySelector('.form-control').select();
      }
    },

    computed: {
      _classes() {
        let _classes = {}

        this.size !== '' && (_classes['form-control-' + this.size] = true)

        return _classes;
      }
    },

    watch: {
      'localValue'(val) {
        this.$emit('input', val)

        typeof this.onChange === 'function' && this.onChange(val, this)
        this.dispatch('VhFormItem', consts.NS_EVENT_FORM_ITEM_XNATIVE_CHANGE, val)
      }
    }
  }
</script>