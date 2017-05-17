<template lang="html">
  <div v-if="visible"
       :class="'alert alert-' + type">
    <button type="button"
            class="close"
            @click="visible = false">
      <span>&times;</span>
    </button>
    <slot></slot>
  </div>

</template>

<script>
  export default {
    name: 'VhAlert',

    props: {
      visible: {
        type: Boolean,
        'default': true
      },
      type: {
        type: String,
        'default': 'info'
      }
    }
  };
</script>
