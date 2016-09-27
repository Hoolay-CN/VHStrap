<template lang="html">
  <div class="dropdown">
    <button
			class="btn dropdown-toggle btn-{{ btnStyle }}"
			type="button"
			:disabled="disabled"
			@click="showDrop"
			@blur="showDrop"
		>
      {{ title }}
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" v-show="show" select="select">
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
		select: {
    	type: Boolean,
			default: null,
		}
  },
  methods: {
    showDrop() {
      this.show = !this.show;
    },
  },
	ready() {
		document.addEventListener('click', (e) => {
			this.show && (!this.$el.contains(e.target)) && (this.show = false);
		});
	}
}
</script>
<style>
  .dropdown .dropdown-menu {
    display: block;
  }
</style>
