import Axios from 'axios'
import router from '../router'

import login from './modules/login'

if (window.sessionStorage.getItem('token')) {
  Axios.defaults.headers.common['Authorization'] = window.sessionStorage.getItem('token')
}

export let axiosInstance = Axios.create({
  baseURL: 'http://localhost: 7001'
})

// response 拦截器
axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.replace({
            path: 'login',
            // 将跳转的路由path作为参数，登录成功后跳转到该路由
            query: { redirect: router.currentRoute.fullPath }
          })
      }
    }
    return Promise.reject(error.response)
  }
)

export default {
  ...login
}