<template>
  <select class="custom-select form-control"
          :name="name"
          :disabled="disabled"
          v-model="internalValue">
    <option v-if="label" value="" disabled>{{ label }}</option>
    <template v-for="item in options">
      <optgroup v-if="item.hasOwnProperty('label')" :label="item.label">
        <option
            :value="vo.value" v-for="vo in item.subs">
          {{ vo.name }}
        </option>
      </optgroup>
      <option v-else
              :value="item.value">
        {{ item.name }}
      </option>
    </template>
  </select>
</template>

<script>
  import consts from '../common/constants'
  import emitter from '../../mixins/emitter'

  export default {
    name: 'VhSelect',

    mixins: [ emitter ],

    data() {
      return {
        internalValue: this.value
      }
    },

    props: {
      value: [String, Number],
      name: String,
      label: String,
      disabled: {
        type: Boolean,
        'default': false
      },
      options: {
        type: Array,
//        default: () => {
//            return [
//              {name: 'one', value: '1'},
//              {name: 'two', value: '2'},
//              {
//                label: '地理位置',
//                subs: [
//                  {name: 'four', value: '4'},
//                  {name: 'five', value: '5'}
//                ]
//              },
//              {name: 'three', value: '3'}
//            ];
//          }
      },
      onChange: Function
    },

    watch: {
      'internalValue'(val) {

        typeof this.onChange === 'function' && this.onChange(val, this)

        // notify up
        this.$emit('input', val)

        // notify Form item to validate
        this.dispatch('VhFormItem', consts.NS_EVENT_FORM_ITEM_XNATIVE_CHANGE, val)
      }
    }
  }
</script>