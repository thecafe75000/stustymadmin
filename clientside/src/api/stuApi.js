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

/**
 * 根据学生id获取学生信息详情
 */
export function getStuByIdApi(id) {
  return request({
    url: `/students/${id}`,
    method: "GET"
  })
}

/**
 * 根据学生id删除学生信息
 */
export function deleteStuByIdApi(id) {
  return request({
    url: `/students/${id}`,
    method: 'DELETE'
  })
}

/**
 * 根据学生id编辑修改学生信息
 */
export function editStuByIdApi(id,data) {
  return request({
    url: `/students/${id}`,
    method: 'PATCH',
    data
  })
}