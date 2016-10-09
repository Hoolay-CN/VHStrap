<template>
	<div class="form-group" :class="{ 'row': labelPosition === 'top' ? false : true }">
		<label
			for="{{ uniqueID }}"
			:class="{ 'col-sm-2': isLabelPosition, 'form-control-label': isLabelPosition }"
		>
			{{ label }}
		</label>
		<div :class="{ 'col-sm-10': isLabelPosition }">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				uniqueID: null,
				labelPosition: 'top',
				isLabelPosition: false,
			}
		},
		props: {
			label: {
				type: String,
				default: '',
			}
		},
		methods: {
			guid() {
				function S4() {
					return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
				}
				return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
			},
		},
		created() {
			// set global ID of <label>
			this.label.length && (this.uniqueID = this.guid());

			if(!!this.$parent.labelPosition && (this.$parent.labelPosition === 'left')) {
				this.isLabelPosition = true;
				this.labelPosition = 'left';
			}
		},
	}
</script>
