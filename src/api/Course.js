import request from '@/utils/requestProxy'

export function getList_test(params) {
    return request({
      url: process.env.API_ROOT+'/?m=dataManage&c=courseManage&a=courseList&ajax=1',
      method: 'get',
      params
    })
}

  export function addCourse_(params) {
    return request({
      url: process.env.API_ROOT+'/?m=dataManage&c=courseManage&a=addCourse2&ajax=1',
      method: 'post',
      data:params,
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    })
  }