// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from '@/utils/requestProxy'
import 'font-awesome/css/font-awesome.min.css'   
import '@/assets/common.css'
//import variables from "@/assets/js/commont.js";     
Vue.config.productionTip = false
Vue.prototype.host="http://wen.openadc.top"
Vue.prototype.host_shop="http://hui.openadc.top"
Vue.prototype.$store = store;
Vue.prototype.axios = axios;
router.beforeEach((to, from, next) => {
  sessionStorage.setItem('forward',from.path);
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
          if (window.sessionStorage.getItem('token')!=null) { // 判断缓存里面是否有 token  //在登录的时候设置它的值
              next();
          } else {
              next({
                  path: '/login',
                  query: {
                      redirect: to.fullPath
                  } // 将跳转的路由path作为参数，登录成功后跳转到该路由
              })
          }
      } else {
          next();
      }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
