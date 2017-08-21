import Vue from 'vue'
import Router from 'vue-router'

/*引入组件*/
import Layout from '@/components/layout'
import Navigation from '@/components/navigation'
import Hello from '@/components/Hello'
import Mint_UI from '@/components/mint-ui'

import Home from '@/components/homepage/home'
import Sort from '@/components/classify/sortbook'
import Interact from '@/components/reaction/interact'
import Cart from '@/components/shopping/cart'
import Myself from '@/components/mine/myself'

import Booklist from '@/components/classify/booklist'
import About from '@/components/mine/about'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',redirect:'/layout/home' //重定向到首页
      // component:Navigation
    },
    {
      path: '/layout',
      component: Layout,
      children:[
        { path:'home',component:Home },
        { path:'sort',component:Sort },
        { path:'interact',component:Interact },
        { path:'cart',component:Cart },
        { path:'myself',component:Myself }
      ]
    },
    { path:'/booklist',component:Booklist },
    { path:'/about',component:About },
    {
      path: '/Mint_UI',
      component:Mint_UI
    }   
    //,
    // { path:'interact',component:Interact }
  ]
})
