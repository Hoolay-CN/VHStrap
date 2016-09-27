/**
 * Created by charlie on 9/27/16.
 */
import Vue from 'vue';
import MdEditor from '.';
import sourceHTML from 'html!./assets/main.html';
import welcomeBody from 'html!./assets/main.md';

Vue.config.debug = true;
Vue.config.devtools = true;

let app = new Vue({
	el: '#App',
	version: '0.0.1-snapshot',
	template: sourceHTML,
	data: () => {
		return {
			settings: {},
			body: welcomeBody
		}
	},
	methods: {
		showRawBody: function() {
			alert(this.$refs.editor.getRawBody());
		},
		showHtmlBody: function() {
			alert(this.$refs.editor.getHtmlBody());
		}
	},
	components: {
		MdEditor
	},
	ready: function() {
		setTimeout(() => {
			this.$refs.editor.callAction('togglePreview');
		}, 1000);
	}
});
