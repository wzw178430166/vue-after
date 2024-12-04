/**
 * 数据
 */
import Vue from 'vue'
import axios from "axios"
//3.发送请求时保存session信息
axios.defaults.withCredentials=true
//4.设置请求基础路径
axios.defaults.baseURL="http://hui.openadc.top/"
axios.defaults.headers.post['Content-Type'] = 'application/json';
//5.将axios注册vue实例
Vue.prototype.axios=axios;

const _products = [
  {"id": 1, "title": "电商系统和数据后台开发 含分销系统", "price": 530.01, "inventory": "30%","thumb":"https://ypmm.yjxun.cn/tv/tv_app/project/images/img_5.jpg"},
  {"id": 2, "title": "数据后台开发", "price": 104.32, "inventory": 10,"thumb":"https://ypmm.yjxun.cn/tv/tv_app/project/images/img_5.jpg"},
  {"id": 3, "title": "分销系统", "price": 139.99, "inventory": 5,"thumb":"https://ypmm.yjxun.cn/tv/tv_app/project/images/img_5.jpg"},
  {"id": 4, "title": "分销系统1", "price": 139.99, "inventory": 5,"thumb":"https://ypmm.yjxun.cn/tv/tv_app/project/images/img_5.jpg"}
]

export default {
  // 获取所有商品，异步模拟 ajax
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  // 结账，异步模拟 ajax
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      // 模拟可能失败的情况
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  },

  wen_getCateg () {
 this.axios.get("/?m=corp&c=content&a=news&ajax=1&page=1")
.then(res=>{
  console.log(res)
})
.catch(err=>{
  console.log(err)
})
}



}
