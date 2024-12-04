import request from '@/utils/requestProxy'

export function login(params,wx_bind,reg_openid) {
    wx_bind = wx_bind?wx_bind:0;    //微信是否绑定  1 是  
    reg_openid = reg_openid?reg_openid:''; //openid
    return request({
      url: process.env.API_ROOT+'/index.php?m=member&c=index&a=login&ajax=1&wx_bind=' + wx_bind + '&reg_openid=' + reg_openid,
      method: 'post',
      data:params,
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    })
}

export function getLoginOut(params) {
  return request({
    url: process.env.API_ROOT+'/index.php?m=member&a=logout&app=1&forward=',
    method: 'get',
    params,
  })
}