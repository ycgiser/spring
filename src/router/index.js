import Vue from 'vue'
import Router from 'vue-router'
import first from '@/modules/firstPage'
import second from '@/modules/secondPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/first',
      name: 'first',
      component: first
    },
    {
      path: '/second',
      name: 'second',
      component: second
    },
    {
      path: '/', 
      redirect: '/first'
    },
  ]
})
