<template>
	<label @click="onClick" class="my-label">
		<div class="false-checkbox"></div>
		<!--<input class="my-checkbox" type="checkbox">-->
		<div class="my-text"><slot></slot></div>
	</label>
</template>

<script>
	export default {
		methods: {
			onClick() {

			},
		}
	}
</script>

<style>

</style>