import ajax from "@/api/News.js"
import { getLoginOut } from '@/api/login'

const state = () => {
  return {
  statenews:[],
  isLogin:0,
  token:'',
  username:'',
  portrait:'',
  nickname:'',
  userid:'',
  groupid:'',
  synloginstr:''
  }
}

const mutations = {
  setnewsdata(store,passnews){
    store.statenews = passnews
  },
  //将token保存到sessionStorage里，token表示登录状态
  SET_TOKEN:(state,data)=>{
      state.token =data;
      window.sessionStorage.setItem('token',data);
      if(data!=''){
        window.sessionStorage.setItem('isLogin',1);
      }else{
        window.sessionStorage.setItem('isLogin',0);  
      }
  },
  //获取用户名
  SET_USER:(state,data) =>{
    state.username = data;
    window.sessionStorage.setItem('username',data);  
    if(data!=''){
      window.sessionStorage.setItem('isLogin',1);
    }else{
      window.sessionStorage.setItem('isLogin',0);  
    } 
  },
  //获取用户头像
  SET_Portrait:(state,data)=>{
    state.portrait = data;
    window.sessionStorage.setItem('portrait',data);     
  },
  //获取用户userid
  SET_Userid:(state,data)=>{
    state.userid = data;
    window.sessionStorage.setItem('userid',data);     
  },
  //获取用户nickname
  SET_Nickname:(state,data)=>{
    state.nickname = data;
    window.sessionStorage.setItem('nickname',data);     
  } ,
  SET_isLogin:(state,data) =>{
    state.isLogin = data;
    window.sessionStorage.setItem('isLogin',data);  
  },
  SET_groupid:(state,data) =>{
    state.groupid = data;
    window.sessionStorage.setItem('groupid',data);  
  },
  SET_synloginstr:(state,data) =>{
    state.synloginstr = data;
    window.sessionStorage.setItem('synloginstr',data);  
  },
  
  //退出 清空状态 
  RECEIVE_RESET:(states,type) =>{
    var session = window.sessionStorage;
    session.clear();
    Object.assign(states, state());
  }

}

const actions = {
  getNews({ commit },payload){
    ajax.ajaxNews(function(passnews){
      commit('setnewsdata',passnews)
    },payload)
  },
   //异步请求退出登录
   getLoginOut({commit,state},obj)
   {
     var type =obj.type;
     var that =obj.that;
      getLoginOut().then(res => {
      if(res.status==-1){
        commit('RECEIVE_RESET');
        setTimeout(function(){
          try{
            jstojava.logout();
          }catch(d){
            var url,index;
            if(type=='doula'){
              url = '/doula';
              index = '/doula/';
            }else{
              url = '/member';
              index = '/'
            }
            that.$router.push(url);
          }
        },300);
      }
  
    }) 
   },
}

const getters = {
  news(){
    return state.statenews
  },
  userStatus(){
    return state.isLogin
  }
}

export default {
  namespaced:true,// 声明为独立命名空间
  state,
  mutations,
  actions,
  getters
}
