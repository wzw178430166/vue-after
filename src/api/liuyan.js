import request from '@/utils/requestProxy'

export function getliuyanList(params) {
  return request({
    url: process.env.API_ROOT+'/index.php?m=member&c=data&a=get_datas',
    method: 'post',
    data:params,
    // headers: {
    //     'content-type': 'application/json; charset=utf-8'
    //   }
  })
}