<template>
  <div :class="{
    'vh-container': !isFluid,
    'vh-container-fluid': isFluid
  }">
    <slot></slot>
  </div>
</template>

<script typeof="text/babel">
  export default {
    name: 'VhContainer',

    props: {
      type: String // 'fluid' for full width container
    },

    computed: {
      isFluid() {
        return this.type === 'fluid';
      }
    }
  };
</script>