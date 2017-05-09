<template><section><h1>Colors (配色)</h1>
<p>定制了HOOLAY主色 <span style="background-color: #0096ff; display: inline-block; padding: 0 3px; color: #fff; font-size: 14px;">#0096FF</span></p>
<div class="ex-color-picker">
  <div class="item hoolay" v-for="($index, el) in colors" :style="{ backgroundColor: '#' + el }">
    <h5>{{ types[$index] }}</h5>
    <span>
      #{{el | upper}}
    </span>
  </div>
</div>

</section></template>
<style lang="sass">
  .ex-color-picker {
    .item {
      position: relative;
      margin-top: 60px;
      font-size: 20px;
      letter-spacing: 2px;
      color: white;
      margin-bottom: 20px;
      width: 50%;
      height: 80px;
      text-align: center;
      line-height: 80px;
      h5 {
        font-size: 13px;
        position: absolute;
        top:-22px;
        left: 2px;
        color: #666;
        line-height: 1em;
        padding: 0;
        margin: 0;
        font-weight: 300;
      }
    }
  }
</style>
<script>
  import Vue from 'vue';

  Vue.filter('upper', (val) => {
    return val.toUpperCase();
  });

  export default {
    data() {
      return {
        colors: ['0096ff', '0f74d5', '5db860', '5dbfbc', 'efae57', 'd85653'],
        types: ['hoolay', 'primary', 'success', 'info', 'warning', 'danger']
      }
    }
  }
</script>