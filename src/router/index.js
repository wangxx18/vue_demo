import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import Details from '@/components/Details'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home
    // }
  ]
})
