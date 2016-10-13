<template>
  <div class="vh-row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'VhRow',

    props: {
      gutter: Number, // @Todo
      type: String // @Todo `flexbox`
    }
  };
</script>