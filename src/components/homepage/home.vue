<template>
	<div id="home">
		<!--顶部导航-->
		<mt-header title="">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">分类</mt-button>
		  </router-link>
		  <router-link to="/" slot="right">
		    <mt-button icon="back">客服</mt-button>
		  </router-link>
		</mt-header>

		<!--轮播图-->
 		<div class="swipe">
	 		<mt-swipe :show-indicators="false" :auto="4000">
			  <mt-swipe-item v-for="(item,index) in swipeImg">		  	
			  		<img :src=" item.imgUrl ">
			  </mt-swipe-item>
			</mt-swipe>
	 	</div>
         
        <!--中间按钮部分-->
	 	<div class="middle-btn">
	 		<div class="btn-div" v-for="item in iconData">
	 			<router-link :to="item.router">
		 			<img :src="item.iconUrl">
		 			<p>{{ item.text }}</p>
	 			</router-link>
	 		</div> 
	 	</div>

		<!--新书预售-->
		<div class="newbooksale">
			<div class="sale_title">
				<span>
					<b>新书预售.</b>
					<b style="color:#FF0000">抢先啦!</b>
				</span>
				<router-link to="/">
				    <span class="more">更多></span>
				</router-link>
			</div>
			<div class=""></div>
			<div class="newbookswipe">
		 		<mt-swipe :show-indicators="false" :auto="10000">
				  <mt-swipe-item v-for="(item,index) in newbookswipe">		  	
				  		<img :src=" item.imgUrl ">
				  </mt-swipe-item>
				</mt-swipe>
	 		</div>
		</div>

		<!--特价书，即时抢购-->
		<div class="specialbooksale">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">特价书</mt-tab-item>
			  <mt-tab-item id="2">限时抢购</mt-tab-item>
			</mt-navbar>

			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">
			    sasas
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    sssssssssss
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>

	</div>
</template>
<script>
	export default{
		name:'home',
		data(){
			return{
				swipeImg:[
					{imgUrl:require("./../../assets/homepage/1.jpg")},
					{imgUrl:require("./../../assets/homepage/2.jpg")},
					{imgUrl:require("./../../assets/homepage/3.jpg")},
					{imgUrl:require("./../../assets/homepage/4.jpg")},
					{imgUrl:require("./../../assets/homepage/5.jpg")},
					{imgUrl:require("./../../assets/homepage/6.jpg")},
					{imgUrl:require("./../../assets/homepage/7.jpg")},
					{imgUrl:require("./../../assets/homepage/8.jpg")},
					{imgUrl:require("./../../assets/homepage/9.jpg")},
					{imgUrl:require("./../../assets/homepage/10.jpg")}
				],
				iconData:[
				    {router:"/Mint_UI",text:"我的订单",iconUrl:require("./../../assets/homepage/wddd.png")},
				    {router:"/Mint_UI",text:"我的收藏",iconUrl:require("./../../assets/homepage/wddd.png")},
				    {router:"/Mint_UI",text:"物流查询",iconUrl:require("./../../assets/homepage/wddd.png")},
				    {router:"/Mint_UI",text:"领红包",iconUrl:require("./../../assets/homepage/wddd.png")},
				    {router:"/Mint_UI",text:"特价书",iconUrl:require("./../../assets/homepage/wddd.png")},
				    {router:"/Mint_UI",text:"按需印刷",iconUrl:require("./../../assets/homepage/wddd.png")},
				    {router:"/Mint_UI",text:"待付款",iconUrl:require("./../../assets/homepage/wddd.png")},
				    {router:"/Mint_UI",text:"全部",iconUrl:require("./../../assets/homepage/wddd.png")}	
				],
				newbookswipe:[
					{imgUrl:require("./../../assets/homepage/11.jpg")},
					{imgUrl:require("./../../assets/homepage/12.jpg")},
					{imgUrl:require("./../../assets/homepage/13.jpg")},
					{imgUrl:require("./../../assets/homepage/14.jpg")},
					{imgUrl:require("./../../assets/homepage/15.jpg")}
				],
				selected:'1'

			}

		}
	}
</script>
<style scoped>
    #home{
    	background: #F6F7F7;
    }
    /*顶部*/
	#home .mint-header{
		background-color: #FF3300;
	}
	/*顶部轮播*/
	#home .swipe{
     height: 9.375rem;
	}
	#home .swipe img,
	#home .newbookswipe img{
		width: 100%;
		height: 100%;
	}

	/*轮播下的按钮*/
	#home .middle-btn{
		width: 100%;
		background-color: #FFFFFF;
		overflow: hidden;
	}
	#home .btn-div{
		float: left;
		width: 25%;
		padding:0.625rem 0;
		text-align: center;
	}
	#home .btn-div img{
		width:1.875rem;
 		height: 1.875rem; 
	}
	#home .btn-div p{
		margin-top: 0;
		font-size:0.75rem;
		color: #959595;
	}
	#home .router-link{
		text-decoration: none ;
	}
	#home a:-webkit-any-link {
    	text-decoration: none;
	}

	/*新书预售*/
	#home .newbooksale{
		background-color:#FFFFFF;
		margin: 7px 0;
		line-height: 22px;
	}
	#home .newbooksale .sale_title{
		padding: 5px 3px;
	}
	#home .newbooksale .more{
		float:right;
		color:#969696;
		font-size:13px;
		padding-right: 20px;
	}
	#home .newbookswipe{
		height: 100px;
		padding: 0 5px;
	}

	/*特价书，即时抢购*/
	#home .specialbooksale{
		background-color: yellow;
		padding: 0 5px;
	}
	#home .specialbooksale .mint-navbar{
		color: #000000;

	}
	#home .specialbooksale .mint-tab-item{
		border-width: 2px;
		border-style: solid;
		border-color: #FF3300;
		height: 5px;
	}
	#home .specialbooksale .mint-tab-item-label {
	    font-size: 18px;
	    line-height: 9px;
	}
	#home .specialbooksale .mint-navbar .mint-tab-item.is-selected{
		border-width: 2px;
		border-style: solid;
		border-color: #FF3300;
		background-color: #FF3300;
		color: #FFFFFF;
	}
</style>