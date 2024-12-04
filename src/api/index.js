import request from '@/utils/requestProxy'

export function getadvert_index2(params) {  //轮播图
  return request({
    url: process.env.API_ROOT+'/?m=data&c=index&a=advert_index&advert_id=8',
    method: 'get',
    params
  })
}