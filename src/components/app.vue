<template>
  <div class="app-wrap">
    <icon type="yishujia"></icon>
    <icon type="jigou"></icon>
    <icon type="drafts"></icon>
    <icon type="face"></icon>
    <icon type="favorite"></icon>
  </div>
</template>


<script type="text/babel">
  import Icon from './iconfonts';

  export default {
    components: {
      Icon
    }
  }
</script>

<style lang="sass">
  .app-wrap {
    padding: 50px;
    display: flex;
    max-width: 880px;
    margin: 0 auto;
  }
  .iconfont {
    flex: 1;
    font-size: 42px !important;
    &.icon-yishujia {
      color: firebrick;
    }
    &.icon-jigou {
      color: gold;
    }
    &.icon-drafts {
      color: #0b559c;
    }
    &.icon-face {
      color: green;
    }
    &.icon-favorite {
      color: purple;
    }
  }
</style>
