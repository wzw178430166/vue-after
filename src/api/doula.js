import request from '@/utils/requestProxy'
export function getDoulaList(params) {
  return request({
    url: process.env.API_ROOT+'/?m=data&c=tt&a=get_member_doula3&user_type=1&page='+params.page,
    method: 'post',
    data:params,
  })
}