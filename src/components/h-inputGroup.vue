<!--version 9.29-->

<template lang="html">
	<div class="input-group">
		<span class="input-group-addon" v-if="showAddonLeft" @click="_onClick">
			{{ inputTitle }}
		</span>
		<input type="text"
			class="form-control"
			placeholder="{{ placeholder }}"
			v-model="value"
			@focus="showDelete"
		>
		<span class="input-group-addon" v-if="showAddonRight">
			{{ inputTitle }}
		</span>
		<button type="button" v-if="isDelete" class="close" @click="deleteContent">
			<span>&times;</span>
		</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: null,
				isDelete: false,
				showAddonLeft: false,
				showAddonRight: false,
			}
		},
		props: {
			addonPosition: {
				type: String,
				default: null,
			},
			placeholder: {
				type: String,
				default: '请输入'
			},
			inputTitle: {
				type: String,
				default: '输入框',
			},
			onClick: {
				type: Function,
			}
		},
		methods: {
			_onClick() {
				(typeof this.onClick === 'function') && this.onClick();
			},
			showDelete() {
				if(!!this.value) {
					this.isDelete = true;
				}
			},
			deleteContent() {
				this.value = null;
				this.isDelete = false;
			},
		},
		watch: {
			value(newVal) {
				!!newVal ? this.showDelete() : this.deleteContent();
			}
		},
		ready() {
			this.value = this.$el.getElementsByTagName('input')[0].value;
			if(this.addonPosition !== null) {
				this.addonPosition === 'left' ? this.showAddonLeft = true : this.showAddonRight = true;
			}
			document.addEventListener('click', (e) => {
				if (this.isDelete && (!this.$el.contains(e.target))) {
					this.isDelete = false;
				}
			});
		}
	}
</script>

<style scoped>
	.input-group > .close {
		position: absolute;
		top: 50%;
		right: 0.1rem;
		margin-top: -0.75rem;
		z-index: 3;
	}
	.input-group > button:focus {
		outline-color: #fff;
	}
</style>