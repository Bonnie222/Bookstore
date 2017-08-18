import Vue from 'vue'
import Router from 'vue-router'

/*引入组件*/
import Navigation from '@/components/navigation'
import Hello from '@/components/Hello'
import Mint_UI from '@/components/mint-ui'

import Home from '@/components/homepage/home'
import Sort from '@/components/classify/sortbook'
import Interact from '@/components/reaction/interact'
import Cart from '@/components/shopping/cart'
import Myself from '@/components/mine/myself'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',redirect:'/navigation' //重定向到首页
      // component:Navigation
    },
    {
      path: '/navigation',
      component:Navigation,
      children:[
        { path:'interact',component:Interact },
        { path:'cart',component:Cart }
      ]
    },
    {
      path: '/Mint_UI',
      component:Mint_UI
    }   
    //,
    // { path:'interact',component:Interact }
  ]
})
