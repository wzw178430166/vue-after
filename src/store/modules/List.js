import ajax from '@/api/List.js'
import Vuex from 'vuex'
import Axios from "axios"
import { compileToFunctions } from 'vue-template-compiler';
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';
const state = {
  list : [],
  lists: []
}
const mutations = {
  setListdata (state,passlist){
    state.list = passlist
  },
  setNews (state,passlist){
    state.lists = passlist
  }
}

const actions = {
  getListByCategroy ({commit},payload){
    console.log({commit},payload,6666666);
    ajax.ajaxListByCategory(function(list){
      commit('setListdata',list)
    },payload)
  },
  //获取 新闻内容数据
  wen_getNews ({commit},potwords) {  
    Axios.get("/?m=corp&c=wen&a=news&ajax=1")
    .then(res=>{
      var data=res.data.rows;
      if(potwords.potwords){
        var result = [];
        result = data.filter( function(item){
         return item.category_id === potwords.potwords;
       })
        commit('setNews',result);
      }else{
        commit('setNews',data);
      }
    })
    .catch(err=>{
      console.log(err)
    })
  },

  getListBySearch ({commit},payload){
    ajax.ajaxListBySearchword(function(list){
      commit('setListdata',list)
    },payload)
  }
}

const getters = {
  // list (){
  //   return state.list
  // },
  lists (){
    return state.lists
  }
}

export default {
  namespaced:true,// 声明为独立命名空间
  state,
  mutations,
  actions,
  getters
}
