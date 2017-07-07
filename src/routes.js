import Vue from 'vue'
import VueRouter from 'vue-router'

import Hero from './components/Hero.vue'
import BodyHero from './components/body/BodyHero.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/',
      component: Hero,
      children: [
        {
          path: '',
          component: BodyHero
        }
      ]
    }
  ]
})
