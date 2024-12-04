import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index/Index1.vue'
import search_all from '@/views/Index/search_all.vue'
import Mainpage from '@/components/Mainpage'
import Searchpage from '@/components/Searchpage'
import Resultpage from '@/components/Resultpage'
import Newspage from '@/components/Newspage'
import Text from '@/components/Text'
import Lunbo from '@/components/carousel'
import system_list from '@/views/project/marketing_system_list.vue'
import community_index from '@/views/community/Index.vue'
import course_details from '@/views/course/course_details.vue'
import courselist from '@/views/course/courselist.vue'
import member from '@/views/member/index.vue'
import login from '@/views/member/login_caption.vue'
import userinformation from '@/views/member/userinformation.vue'
import on_order from '@/views/order/on_order.vue'
import msgCenter2 from '@/views/member/msgCenter2.vue'
import transactions from '@/views/member/transactions.vue'
import testww from '@/views/member/test.vue'
import matmatron_list from '@/views/doula/matmatron_list.vue'
import store_list from '@/views/store/store_list.vue'
import on_order_purchased from '@/views/course/on_order_purchased.vue'
import liuyan from '@/views/liuyan/index.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/index/',
  routes: [
    {
      path: '/',
      name: 'text',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/member',
      name: 'member',
      component: member,
      children: [
        {
        path:'/test',   //二级路由  测试
        component:userinformation
        }
       ]
    },
    {
      path: '/search_all',
      name: 'search_all',
      component: search_all
    },
    {
      path: '/course_details',
      name: 'course_details',
      component: course_details
    },
    {
      path: '/course',
      name: 'courselist',
      component: courselist
    },
    {
      path: '/community',
      name: 'community',
      component: community_index
    },
    {
      path: '/mainpage',
      name: 'Mainpage',
      component: Mainpage
    },
    {
      path: '/searchpage',
      name: 'Searchpage',
      component: Searchpage
    },
    {
      path: '/resultpage',
      name: 'Resultpage',
      component: Resultpage
    },
    {
      path: '/newspage',
      name: 'Newspage',
      component: Newspage
    },
    {
      path: '/text',  //测试
      name: 'Text',
      component: Text
    },
    {
      path: '/lunbo',
      name: 'Lunbo',
      component: Lunbo
    },
    {
      path: '/system_list',
      name: 'system_list',
      component: system_list 
    },
    {
      path: '/userinformation',
      name: 'userinformation',
      component: userinformation,
    
    },
    {
      path: '/on_order',
      name: 'on_order',
      component: on_order,
      meta: {
        title: '课程订单',
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
       }
  
    }
    ,
    {
      path: '/msgCenter2',
      name: 'msgCenter2',
      component: msgCenter2,
    }
    ,
    {
      path: '/transactions',
      name: 'transactions',
      component: transactions,
      meta: {
        title: '消息详情',
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
       }
    }
    ,
    {
      path: '/matmatron_list',
      name: 'matmatron_list',
      component: matmatron_list,
      meta: {
        title: '母婴师列表',
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
       }
    }
    ,
    {
      path: '/store/list',
      name: 'store_list',
      component: store_list,
      meta: {
        title: '门店列表',
        requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的on_order_purchased
       }
    }
    ,
    {
      path: '/store/on_order_purchased',
      name: 'on_order_purchased',
      component: on_order_purchased,
      meta: {
        title: '我的课程',
        requireAuth: false,  // 添加该字段，表示进入这个路由是需要登录的
       }
    }
    ,
    {
      path: '/liuyan',
      name: 'liuyan',
      component: liuyan,
    }
  ]
})
