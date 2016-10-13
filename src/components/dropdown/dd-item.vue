<template>
  <div v-if="!href"
      :class="_classes"
      @click="_onClick"
  >
    <slot></slot>
  </div>
  <a v-else :class="_classes" :href="href" :target="target" @click="_onClick">
      <slot></slot>
  </a>
</template>

<script type="text/babel">
  export default {
    name: 'VhDropdownItem',

    props: {
      tag: String, // flag for item
      type: {
        type: String,
        default: 'item' // `divider`, `header`
      },
      disabled: Boolean,
      href: String, // indicate item is link
      target: String
    },

    computed: {
      _classes() {
        let k = {};

        k[`dropdown-${this.type}`] = true;
        this.disabled && (k['disabled'] = true);

        return k;
      }
    },

    methods: {
      _onClick(e) {
        this.$emit('select', this);
      }
    }
  }
</script>