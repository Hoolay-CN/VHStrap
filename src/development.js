// global styles
import Vue from 'vue'

import './styles/hoolay/entry.css'
import App from './_local/app.vue'

// configs
Vue.config.devtools = true
Vue.config.debug = true
window.Vue = Vue

const Main = new Vue({
  el: '#app',
  version: '0.0.1',
  template: '<div class="app-container"><app></app></div>',
  components: {
    App
  }
})
