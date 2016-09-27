<template lang="html">
	<div class="input-group">
		<span class="input-group-addon" v-if="showTitle">{{ inputTitle }}</span>
		<input type="text" class="form-control" placeholder="{{ placeholder }}">
	</div>
</template>

<script>
	export default {
		props: {
			showTitle: {
				type: Boolean,
				default: true,
			},
			placeholder: {
				type: String,
				default: '请输入'
			},
			inputTitle: {
				type: String,
				default: '输入框',
			},
		},
	}
</script>
