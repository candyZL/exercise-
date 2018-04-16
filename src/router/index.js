/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Classify from '../pages/Classify/Classify.vue'
import Home from '../pages/Home/Home.vue'
import Mypet from '../pages/Mypet/Mypet.vue'
import Shopping from '../pages/Shopping/Shopping.vue'


Vue.use(VueRouter);

// 向外默认暴露一个路由器对象
export default new VueRouter({ // 配置对象
  routes: [
    {
      path: '/classify',
      component: Classify,
    },

    {
      path: '/home',
      component: Home,
    },

    {
      path: '/mypet',
      component: Mypet,
    },

    {
      path: '/shopping',
      component: Shopping,
    },

    {
      path:'/',
      redirect:'/home'
    }
  ]
})

