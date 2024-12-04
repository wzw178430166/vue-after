import request from '@/utils/requestProxy'
export function getstoreList(params) {
  return request({
    url: process.env.API_ROOT+'/?m=data&c=doulas&a=list_&page='+params.page,
    method: 'post',
    data:params,
  })
}