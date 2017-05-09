<template>
  <!-- now just support `xs` auto -->
  <div :class="_classes">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'VhCol',

    props: {
      span: {
        type: Number, // 24 span grid
        default: 1
      },
      offset: Number, // left offset span * n
      push: Number,
      pull: Number
    },

    computed: {
      _classes() {
        let k = {};

        k[`col-xs-${this.span}`] = true;

        this.offset && (k[`offset-xs-${this.offset}`] = true);
        this.push && (k[`push-xs-${this.push}`] = true);
        this.pull && (k[`pull-xs-${this.pull}`] = true);

        return k;
      }
    }
  };
</script>