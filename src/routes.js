import Vue from 'vue'
import VueRouter from 'vue-router'

import BodyHero from './components/body/BodyHero.vue'
import SelectedHero from './components/body/SelectedHero.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '',
      component: BodyHero
    },
    {
      path: '/selected',
      component: SelectedHero
    }
  ]
})
