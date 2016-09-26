<template lang="html">
  <div class="dropdown">
    <button class="btn dropdown-toggle btn-{{ btnStyle }}" type="button" :disabled="disabled" @click="showDrop()">
      {{ title }}
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" v-show="show">
      <!-- <li role="presentation" class="dropdown-item" v-for="i in subMenu"><a role="menuitem" href="#">{{ subMenu[i] }}</a></li> -->
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
    }
  },
  props: {
    btnStyle: {
      type: String,
      default: 'outline-hoolay',
    },
    title: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    showDrop() {
      this.show = !this.show;
    },
  }
}
</script>
<style>
  .dropdown .dropdown-menu {
    display: block;
  }
</style>
