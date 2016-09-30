/**
 * Created by charlie on 9/30/16.
 */

import Vue from 'vue';
let NotificationConstructor = Vue.extend(require('./impl.vue'));

let instance;
let instances = [];
let seed = 1;

var Notification = function(options) {
	options = options || {};
	let userOnClose = options.onClose;
	let id = 'notification_' + seed++;

	options.onClose = function() {
		Notification.close(id, userOnClose);
	};

	instance = new NotificationConstructor({
		data: options
	});
	instance.id = id;
	instance.vm = instance.$mount();
	document.body.appendChild(instance.vm.$el);
	instance.vm.visible = true;
	instance.dom = instance.vm.$el;

	let topDist = 0;
	for (let i = 0, len = instances.length; i < len; i++) {
		topDist += instances[i].$el.offsetHeight + 16;
	}
	topDist += 16;
	instance.top = topDist;
	instances.push(instance);

	return instance;
};

Notification.close = function(id, userOnClose) {
	let index;
	let removedHeight;
	for (var i = 0, len = instances.length; i < len; i++) {
		if (id === instances[i].id) {
			if (typeof userOnClose === 'function') {
				userOnClose(instances[i]);
			}
			index = i;
			removedHeight = instances[i].dom.offsetHeight;
			instances.splice(i, 1);
			break;
		}
	}

	if (len > 1) {
		for (i = index; i < len - 1 ; i++) {
			instances[i].dom.style.top = parseInt(instances[i].dom.style.top, 10) - removedHeight - 16 + 'px';
		}
	}
};

export default Notification;
