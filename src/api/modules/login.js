import axios from 'axios'
import config from '../config'

export default {
  // 登录
  login (params) {
    return axios.post(`login`, params, config)
  },
  // 退出登录
  logout (params) {
    return axios.post(`logout`, params, config)
  }
}
