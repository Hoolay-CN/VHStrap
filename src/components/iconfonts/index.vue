<template>
  <i :class="'iconfont icon-' +  type"></i>
</template>

<script type="text/babel">
  export default {
    name: 'VhIcon',

    props: {
      type: String
    }
  }
</script>

<style lang="css">
  @import "./resources/iconfont.css";

  .iconfont {
    font-size: 1rem;
    display: inline-block;
    line-height: 1em;
    vertical-align: middle;
  }

  .icon-loading {
    animation: rotating 1s linear infinite;
  }

  @keyframes rotating {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
</style>