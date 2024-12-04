import ajax from "@/api/News.js"


const state = {
  statenews:[]
}

const mutations = {
  setnewsdata(store,passnews){
    store.statenews = passnews
  }
}

const actions = {
  getNews({ commit },payload){
    ajax.ajaxNews(function(passnews){
      commit('setnewsdata',passnews)
    },payload)
  }
}

const getters = {
  news(){
    return state.statenews
  }
}

export default {
  namespaced:true,// 声明为独立命名空间
  state,
  mutations,
  actions,
  getters
}
