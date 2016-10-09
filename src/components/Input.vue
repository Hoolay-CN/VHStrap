<template>
	<div class="input-group">
		<!--prepend element-->
		<span class="input-group-addon" v-if="prependAddon">
			<slot name="prepend"></slot>
		</span>
		<input
			class="form-control"
			:style="{ text-align: textAlign }"
			:type="type"
			:placeholder="placeholder"
			:disabled="disabled"
			:id="id"
		>
		<!--append element-->
		<span class="input-group-addon" v-if="appendAddon">
			<slot name="append"></slot>
		</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: null,
			}
		},
		props: {
			type: {
				type: String,
				default: 'text',
			},
			textAlign: {
				type: String,
				default: 'left'
			},
			prependAddon: {
				type: Boolean,
				default: false,
			},
			appendAddon: {
				type: Boolean,
				default: false,
			},
			placeholder: {
				type: String,
				default: '',
			},
			disabled: {
				type: Boolean,
				default: false,
			},
		},
		created() {
			!!this.$parent.uniqueID && (this.id = this.$parent.uniqueID);
		},
	}
</script>