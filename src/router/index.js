import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import Details from '@/components/Details'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:':user',
          component: Home
        }
      ]
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: Home
    // }
  ]
})
