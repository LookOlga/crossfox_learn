import Vue from 'vue';
import 'highlight.js/styles/sunburst.css';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';


hljs.registerLanguage('javascript', javascript);
Vue.use(hljsVuePlugin);