import Vue from 'vue'
import Router from 'vue-router'

// 页面
import Login from '@/views/Login/index'
import Home from '@/views/Home/index'
import Example from '@/views/Example/example'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'example',
          name: 'Example',
          component: Example
        }
      ]
    },
    {
      path: '/Login',
      name: '登录页',
      component: Login
    }
  ]
})

export default router
