<template>
  <div class="dropdown-menu"
       :class="{
        'dropdown-menu-right': right
       }"
  >
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'VhDropdownMenu',

    props: {
      right: Boolean
    }
  };
</script>