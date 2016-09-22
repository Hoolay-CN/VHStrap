<template>
  <h1>
    hello
  </h1>
  <h-button channel="primary" text="Click"></h-button>
</template>

<script type="text/babel">
  import hButton from './h-button.vue';

  export default {
    components: {
      hButton
    }
  }
</script>

<style>
  h1 {
    color: red;
  }
</style>