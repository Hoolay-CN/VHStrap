import Vue from 'vue';
import run from './routes';
import 'highlight.js/styles/github-gist.css'
import 'github-markdown-css'
import './docs.scss';
import 'src/styles/hoolay/entry.css';

import Docs from './docs';

Vue.config.debug = true;
Vue.config.devtools = true;

// set routes up
run(Docs, 'docs');
