<template>
  <i class="iconfont icon-{{ type }}"></i>
</template>

<script type="text/babel">
  export default {
    props: {
      type: String
    }
  }
</script>

<style lang="css">
  @import "./resources/iconfont.css";
</style>