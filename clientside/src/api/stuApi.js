/* 封装请求函数 */

import request from './request'

/**
 * 获取学生列表
 * @returns 
 */
export function getStuListApi() {
  return request({
    url: "/students",
    method:"GET"
  })
}

/**
 * 给列表添加学生信息
 */
export function addStuApi(data) {
  return request({
    url: "/students",
    method: "POST",
    data
  })
}