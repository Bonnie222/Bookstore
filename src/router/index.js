import Vue from 'vue'
import Router from 'vue-router'

/*引入组件*/
import Navigation from '@/components/navigation'
import Hello from '@/components/Hello'
import Mint_UI from '@/components/mint-ui'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',redirect:'/Navigation' //重定向到首页
      // component:Navigation
    }
    ,
    {
      path: '/Navigation',
      component:Navigation,
     //component:Mint_UI
    },
    {
      path: '/Mint_UI',
     component:Mint_UI
    }
    
  ]
})
