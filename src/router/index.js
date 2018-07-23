import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import NewPoll from '@/components/NewPoll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/new',
      name: 'NewPoll',
      component: NewPoll
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
