<template>
  <div class="input-group" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'VhInputGroup',

    props: {
      styles: [Object, Array]
    }
  }
</script>