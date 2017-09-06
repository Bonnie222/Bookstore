<template>
	<div id="navigation">
		<mt-tabbar v-model="selected" fixed> 
		  <mt-tab-item id="home">
		  	<router-link to="/layout/home">	
		      <p><i slot="icon" class="iconfont icon-shouye"></i></p>
		      <p>首页</p>		     	
		    </router-link>	   
		  </mt-tab-item> 
		  <mt-tab-item id="sort1">
		  	<router-link to="/layout/sort">	
		      <p><i slot="icon" class="iconfont icon-fenlei"></i></p>
		      <p>分类</p>		     	
		    </router-link>			    
		  </mt-tab-item>
		  <mt-tab-item id="interact" style="background-color:#f24932;color:#ffffff;">
		    <router-link to="/layout/interact">	
		      <p><i slot="icon" class="iconfont icon-hudong"></i></p>
		      <p>互动</p>		     	
		    </router-link>	  
		  </mt-tab-item>
		  <mt-tab-item id="cart">
		  	<router-link to="/layout/cart">	
		      <p><i slot="icon" class="iconfont icon-gouwucheshoppingcart"></i></p>
		      <p>购物车</p>		     	
		    </router-link> 		    
		  </mt-tab-item>
		  <mt-tab-item id="myself">
		  	<router-link to="/layout/myself">	
		      <p><i slot="icon" class="iconfont icon-20150825tubiaolianxizhuanhuan03"></i></p>
		      <p>我的</p>		     	
		    </router-link>		    		    
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script>
	export default{
		name:'navigation',
		data(){
			return{
				selected:'home'
			}
		}

	}
</script>
<style scoped>
    /*底部导航*/
    #navigation p{
    	margin: 0;
    	padding: 0;
    }
    #navigation a:-webkit-any-link {
    	display: block;
    	color: inherit;
    	text-decoration: none;
    	line-height: 16px;
    }
	#navigation .mint-tabbar{
		background-color: #F6F6F6;
		color: #666666;
	}
	#navigation .mint-tabbar > .mint-tab-item.is-selected{
		background-color: #F6F6F6;
		color: #FF0000;
	}
	#navigation .iconfont{
		font-size:24px;
	}
</style>