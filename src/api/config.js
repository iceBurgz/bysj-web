import Qs from 'qs'

export default {
  baseURL: 'http://localhost:7001',
  transformRequest: [
    function (data) {
      data = Qs.stringify(data)
      return data
    }
  ],
  transformResponse: [
    function (data) {
      return data
    }
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 10000,
  responseType: 'json'
}
