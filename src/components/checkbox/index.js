import fn from './checkbox.vue';

fn.install = function(Vue) {
  Vue.component('vh-checkbox', fn);
};

module.exports = fn;
