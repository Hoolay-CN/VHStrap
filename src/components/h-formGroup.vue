<!--viersion 9.29-->

<template>
	<form>
		<fieldset class="form-group" v-if="inputType === 'email' || inputType === 'password'">
			<label for="needToChange">{{ labelTag }}</label>
			<h-input :input-type="inputType" :placeholder="placeholder" id="needToChange" :input-status="inputStatus"></h-input>
			<small class="text-muted"><slot></slot></small>
		</fieldset>

		<fieldset class="form-group" v-if="inputType === 'select'">
			<label for="exampleSelect1">{{ labelTag }}</label>
			<select class="form-control" id="exampleSelect1" multiple="multiple">
				<option v-for="option in options" value="{{ option.value }}">{{ option.content }}</option>
			</select>
		</fieldset>

		<fieldset class="form-group" v-if="inputType === 'area'">
			<label for="exampleTextarea">Example textarea</label>
			<textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
		</fieldset>

		<fieldset class="form-group" v-if="inputType === 'file'">
			<label for="exampleInputFile">File input</label>
			<div class="hoolay-upload-wrap">
				<div class="hoolay-upload-file">
					<input type="file" class="form-control-file" id="exampleInputFile" v-model="value">
					Choose File
				</div>
				<small class="text-muted hoolay-upload-status">{{ fileStatus }}</small>
			</div>
			<small class="text-muted"><slot></slot></small>
		</fieldset>

	</form>
</template>

<script>
	import hInput	from './h-input.vue';

	export default {
		components: {
			hInput,
		},
		data() {
			return {
				value: null,
				fileStatus: 'No File Chosen',
			}
		},
		props: {
			labelTag: {
				type: String,
			},
			inputType: {
				type: String,
				default: null,
			},
			inputStatus: {
				type: String,
			},
			placeholder: {
				type: String,
			},
			options: {
				type: Array,
			},
			multiple: {
				type: String,
			},
		},
		watch: {
			value(newVal) {
				let val = newVal.lastIndexOf("/");
				console.log(val);
				this.fileStatus = newVal;
			},
		},
	}
</script>