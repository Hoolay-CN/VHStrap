// just demo

import Vue from 'vue';

// noinspection JSUnresolvedVariable
import hButton from 'components/h-button.vue';

import 'styles/hoolay/entry.css';

const App = new Vue({
  el: '#app',
  version: '0.0.1',
  components: {
    hButton,
  },
});

App.$watch('version', () => {});
