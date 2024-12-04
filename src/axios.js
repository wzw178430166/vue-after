// 将引入axios库 单独保存一个文件中  减少main.js代码 量
//1.引入vue实例
import Vue from "vue"
//2.引入axios库
import axios from "axios"
//3.发送请求时保存session信息
axios.defaults.withCredentials=true
//4.设置请求基础路径
axios.defaults.baseURL=""
axios.defaults.headers.post['Content-Type'] = 'application/json';
//5.将axios注册vue实例
Vue.prototype.axios=axios
// 第二个代理基础路径配置
// export const axios2 = axios.create({
//     baseURL:'/api2'
// });
//axios2.defaults.withCredentials=true
//axios2.defaults.headers.post['Content-Type'] = 'application/json';
//Vue.prototype.axios2=axios2

//6.在main.js  引入axios.js



