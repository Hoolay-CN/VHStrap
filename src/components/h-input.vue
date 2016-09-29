<template>
	<input type="{{ inputType }}" class="form-control form-control-{{ inputStatus }}" placeholder="{{ placeholder }}">
</template>

<script>
	export default {
		props: {
			inputType: {
				type: String,
				default: 'text',
			},
			placeholder: {
				type: String,
			},
			inputStatus: {
				type: String,
			},
		},
		watch: {
//			inputStatus() {
//
//			},
		},
	}
</script>