// global styles
import './styles/hoolay/entry.css';
import Vue from 'vue';
import App from './components/app.vue';

// configs
Vue.config.devtools = true;
Vue.config.debug = true;
window.Vue = Vue;

let Main = new Vue({
  el: '#app',
  version: '0.0.1',
  template: '<div class="app-container"><app></app></div>',
  components: {
    App
  }
});