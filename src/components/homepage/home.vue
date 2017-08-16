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
	 		<mt-swipe :show-indicators="false" >
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

		<!--新书-->
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
				]

			}

		}
	}
</script>
<style scoped>
    #home{

    }
    /*顶部*/
	.mint-header{
		background-color: #FF3300;
	}
	/*顶部轮播*/
	.swipe{
     height: 9.375rem;
	}
	.swipe img{
		width: 100%;
		height: 100%;
	}

	/*轮播下的按钮*/
	.middle-btn{
		width: 100%;
		background-color: #FFFFFF;
		overflow: hidden;

	}
	.btn-div{
		float: left;
		width: 25%;
		padding:0.625rem 0;
		text-align: center;
	}
	.btn-div img{
		width:1.875rem;
 		height: 1.875rem; 
	}
	.btn-div p{
		margin-top: 0;
		font-size:0.75rem;
		color: #959595;
	}
	.router-link{
		text-decoration: none ;
	}
	a:-webkit-any-link {
    color: -webkit-link;
    cursor: auto;
    text-decoration: none;
    /*text-decoration-line: underline;
    text-decoration-style: initial;
    text-decoration-color: initial;*/
}
</style>