<template>
	<div id="navigation">
		<mt-tabbar v-model="selected" fixed>
		  <mt-tab-item id="home">
		    <i slot="icon" class="iconfont icon-shouye"></i>
		    首页
		  </mt-tab-item>
		  <mt-tab-item id="sort">
		    <i slot="icon" class="iconfont icon-fenlei"></i>
		    分类
		  </mt-tab-item>
		  <mt-tab-item id="interact">
		    <i slot="icon" class="iconfont icon-hudong"></i>
		    互动
		  </mt-tab-item>
		  <mt-tab-item id="cart">
		    <i slot="icon" class="iconfont icon-gouwucheshoppingcart"></i>
		    购物车
		  </mt-tab-item>
		  <mt-tab-item id="myself">
		    <i slot="icon" class="iconfont icon-20150825tubiaolianxizhuanhuan03"></i>
		    我的
		  </mt-tab-item>
		</mt-tabbar>

		<mt-tab-container v-model="selected" style="padding-bottom:55px">
		  <mt-tab-container-item id="home" >
		    <my-home></my-home>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="sort">
		    <my-sort></my-sort>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="interact">
			<my-interact></my-interact>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="cart">
		    <my-cart></my-cart>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="myself">
		    <my-self></my-self>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
	import Home from '@/components/homepage/home'
	import Sort from '@/components/classify/sort'
	import Interact from '@/components/reaction/interact'
	import Cart from '@/components/shopping/cart'
	import Myself from '@/components/mine/myself'
	export default{
		name:'navigation',
		components:{ 
			'my-home':Home,
			'my-sort':Sort,
			'my-interact':Interact,
			'my-cart':Cart,
			'my-self':Myself
		},
		data(){
			return{
				selected:'home'

			}
		}
	}
</script>
<style scoped>
    /*底部导航*/
	#navigation .mint-tabbar{
		background-color: #F6F6F6;
		color: #666666;
	}
	#navigation .mint-tabbar > .mint-tab-item.is-selected{
		background-color: #F6F6F6;
		color: #FF0000;
	}
	#navigation .iconfont{
		font-size:1.5rem;
	}

</style>