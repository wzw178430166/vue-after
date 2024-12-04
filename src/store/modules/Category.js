/**
 * Created by lonelydawn on 2018/9/7.
 */
import ajax from '@/api/Category'
import Axios from "axios"
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';
const state = {
  aaa: [],
  my_cat:[]
}

const getters = {
  ccc: state => state.aaa,
  wen: state => state.my_cat
}

const mutations = {
  setCategories (state, bbb) {
    state.aaa = bbb
  },
  setCategory (state, bbb) {
    state.my_cat = bbb.data[0];
  },

}

const actions = {
  getCategories ({ commit }) {
    // ajax.ajaxCategories(categories => { commit('setCategories', categories) })
    ajax.ajaxCategories(function (bbb) {
      commit('setCategories', bbb);
    })
  },
  wen_getCateg ({ commit }) {
    Axios.get("/?m=corp&c=data&a=getNewsCategoryTree&ajax=1")
    .then(res=>{
      commit('setCategory', res);
    	console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  }

}

export default {
  namespaced: true,// 声明为独立命名空间
  state,
  getters,
  mutations,
  actions
}
