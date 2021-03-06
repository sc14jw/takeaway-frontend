import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import NewPoll from '@/components/poll/NewPoll'
import VotePage from '@/components/poll/VotePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/new',
      name: 'NewPoll',
      component: NewPoll
    },
    {
      path: '/poll/:id',
      name: 'VotePage',
      component: VotePage
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
