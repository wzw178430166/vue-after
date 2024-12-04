

import Vue from 'vue'
import Vuex from 'vuex'
import Category from './modules/Category.js'
import List from './modules/List.js'
import News from './modules/News.js'
import Login from './modules/Login.js'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    Category,
    List,
    News,
    Login

  }
})
