/* 该文件是封装 axios */

import axios from 'axios'

const request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
})

// 设置请求拦截
request.interceptors.request.use((config) => {
  // config 就是你的请求，把它拦截下来做其他的事情...
  // 比如带上token,config.header= ...

  // return 出去，称之为请求放行
  return config

})

// 设置响应拦截
request.interceptors.response.use((response) => {
  // 拦截到响应，对响应进行相应的处理

  // 处理完响应后就放行
  return response
}, (error) => {
  // 处理错误
  return Promise.reject(error)
})

export default request