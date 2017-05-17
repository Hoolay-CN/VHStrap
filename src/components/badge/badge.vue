<template>
  <div class="vh-badge">
    <slot></slot>
    <sup
        v-text="content"
        class="vh-badge__content"
        :class="{ 'is-fixed': $slots.default, 'is-dot': isDot }">
    </sup>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'VhBadge',

    props: {
      value: {},
      max: Number,
      isDot: Boolean
    },

    computed: {
      content() {
        if (this.isDot) return;

        const value = this.value;
        const max = this.max;

        if (typeof value === 'number' && typeof max === 'number') {
          return max < value ? `${max}+` : value;
        }

        return value;
      }
    }
  };
</script>
