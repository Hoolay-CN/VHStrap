<template lang="html">
<div
  v-bind:class="{
    'alert':		true,
    'alert-success':(type == 'success'),
    'alert-warning':(type == 'warning'),
    'alert-info':	(type == 'info'),
    'alert-danger':	(type == 'danger')
  }">
  <button type="button" name="button">

    <slot></slot>
  </button>
</div>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    },
  }
};
</script>

<style lang="css">
</style>
