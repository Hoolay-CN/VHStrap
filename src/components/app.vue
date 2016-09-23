<template>
  <h1>
    hel
  </h1>
  <h-button channel='outline-hoolay'>点击提交</h-button>
  <h-button channel='hoolay'>点击提交</h-button>
</template>

<script type="text/babel">
  import hButton from './h-button.vue';
  import alert from './alert.vue';

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
