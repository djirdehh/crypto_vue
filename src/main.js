// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import DoughnutChart from './components/body/sub/DoughnutChart'
import App from './App'
import router from './routes.js'

import {store} from './store.js'

Vue.use(VueAxios, axios)
Vue.component('icon', Icon)
Vue.component('doughnut-chart', DoughnutChart)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
  data: {
    sharedState: store.state
  },
  created () {
    store.getCryptoCurrencies()
    store.getTotalMarketCapUSD()
  }
})
