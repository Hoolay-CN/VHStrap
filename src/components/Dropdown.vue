<template lang="html">
  <div class="dropdown">
    <button class="btn dropdown-toggle btn-{{ btnStyle }}"
			type="button"
			:disabled="disabled"
			@click="showDrop"
		>
      {{ title }}
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" v-show="show" select="select">
			<li role="presentation" class="dropdown-item" v-for="sub in subTitle.title" @click="changeTitle($index)">
				<a href="javascrpt:;">{{ sub }}</a>
			</li>
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
		},
		changeTitleAble: {
			type: Boolean,
			default: false,
		},
		subTitle: {
			type: Object,
			default: null,
		},
  },
  methods: {
    showDrop() {
      this.show = !this.show;
    },
		changeTitle(index) {
			this.changeTitleAble && (this.title = this.subTitle.title[index]);
			this.show = false;
		},
  },
	ready() {
		document.addEventListener('click', (e) => {
			if (this.show && (!this.$el.getElementsByClassName('btn')[0].contains(e.target))) {
				this.show = false;
			}
		});
	}
}
</script>
<style>
  .dropdown .dropdown-menu {
    display: block;
  }
</style>
