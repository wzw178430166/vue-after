import request from '@/utils/requestProxy'


export function getOrderList(params) {
  return request({
    url: process.env.API_ROOT+'/?m=data&c=on_course&a=getOrderList&page='+params.page,
    method: 'post',
    data:params,
  })
}