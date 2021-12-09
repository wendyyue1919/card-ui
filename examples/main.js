import Vue from 'vue'
import App from './App.vue'

import 'test-card-ui-yj/dist/css/index.css';
import MUI from 'test-card-ui-yj';
Vue.use(MUI);

// import '../components/css/demo.scss';
// import '../components/css/card.scss';

// import Demo from '../components/lib/demo/index';
// import Card from '../components/lib/card/index';

// Vue.use(Demo);
// Vue.use(Card);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
