import axios from 'axios'
import { Toast , Dialog  } from 'vant';
import store from '@/store'
//import { getToken } from '@/utils/auth'
const service = axios.create({
  baseURL: '', 
  // withCredentials: true, 
  timeout: 5000, 
  // headers: {
  //   'Content-Type': 'application/json; charset=utf-8'
  // }
})
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      Toast({
        message:'网络错误!',
        position:'middle'
         });
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        Toast.confirm('您已注销，可以取消以停留在此页面，或重新登录', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast({
      message: '网络错误',
      type: 'error',
      duration: 5 * 1000
    })
    
    return Promise.reject(error)
  }
)
export default service
