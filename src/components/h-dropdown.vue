<template lang="html">
  <div class="dropdown">
    <button class="btn dropdown-toggle btn-{{ btnStyle }}" type="button" :disabled="disabled" @click="showDrop()">
      {{ title }}
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" v-show="show">
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
  },
	ready() {
		document.addEventListener('click', (e) => {
			(!this.$el.contains(e.target)) && (this.show = false);
		});
	}
}
</script>
<style>
  .dropdown .dropdown-menu {
    display: block;
  }
</style>
