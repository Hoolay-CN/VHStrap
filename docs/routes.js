import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/home.vue';

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
	'/': {
		name: 'Home',
		title: 'Welcome',
		component: Home
	},
	'/alert': {
		title: 'Alert',
		component: resolve => require(['./pages/alert'], resolve)
	},
	'/modal': {
		title: 'Modal',
		component: resolve => require(['./pages/modal'], resolve)
	},
	'/buttons': {
		title: 'Modal',
		component: resolve => require(['./pages/buttons'], resolve)
	},
	'/checkbox': {
		title: 'Checkbox',
		component: resolve => require(['./pages/checkbox'], resolve)
	},
	'/form': {
		title: 'Form',
		component: resolve => require(['./pages/form'], resolve)
	},
	'/icons': {
		title: 'Icons',
		component: resolve => require(['./pages/icons'], resolve)
	},
	'/notifications': {
		title: 'Notifications',
		component: resolve => require(['./pages/notifications'], resolve)
	},
});

export default function(app, selector) {
	router.start(app, selector);
}
