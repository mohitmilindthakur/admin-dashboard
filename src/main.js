import Vue from 'vue';
import App from './App.vue';

import Chartkick from 'vue-chartkick';
import Chart from 'chart.js';

import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

Vue.use(Chartkick.use(Chart));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
