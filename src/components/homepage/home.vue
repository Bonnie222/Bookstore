<template>
	<div id="home">
		<!--顶部导航-->
		<mt-header title="">
		  <router-link to="/" slot="left">
		     <i class="iconfont icon-shouye"></i>
		     <br/>
		     <span>分类</span>
		  </router-link>
		  <router-link to="/" slot="right">
		    <i class="iconfont icon-shouye"></i>
		     <br/>
		     <span>客服</span>
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
		 		<mt-swipe :show-indicators="false" :auto="10000" :speed="0">
				  <mt-swipe-item v-for="(item,index) in newbookswipe">		  	
				  		<img :src=" item.imgUrl ">
				  </mt-swipe-item>
				</mt-swipe>
	 		</div>
		</div>

		<!--特价书-->
		<div class="specialbooksale">
			<mt-navbar v-model="selected1">
			  <mt-tab-item id="1">特价促销</mt-tab-item>
			  <mt-tab-item id="2">重磅推荐</mt-tab-item>
			</mt-navbar>

			<mt-tab-container v-model="selected1">
			  <mt-tab-container-item id="1">
			    	<router-link to="" v-for="item in specialbooksale">
			    		<div class="spediv">
			    			<img :src="item.imgUrl">
			    			<p class="desc">{{ item.name }}</p>
			    			<p class="price"> 
			    				<span><b>{{ item.newprice }}</b></span>
			    				<span>{{ item.oldprice }}</span>
			    			</p>
			    		</div>
			    	</router-link>    	
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
				   <router-link to="" v-for="item in recommendbooksale">
			    		<div class="spediv">
			    			<img :src="item.imgUrl">
			    			<p class="desc">{{ item.name }}</p>
			    			<p class="price"> 
			    				<span><b>{{ item.newprice }}</b></span>
			    				<span>{{ item.oldprice }}</span>
			    			</p>
			    		</div>
				    </router-link> 
			  </mt-tab-container-item>
			</mt-tab-container>

			<!--轮播-->
			<div class="newbookswipe">
		 		<mt-swipe :show-indicators="false" :auto="10000" :speed="0">
				  <mt-swipe-item v-for="(item,index) in newbookswipe">		  	
				  		<img :src=" item.imgUrl ">
				  </mt-swipe-item>
				</mt-swipe>
	 		</div>
		</div>

		<!--图书分类-->
		<div class="booksort">
			<mt-navbar v-model="selected2">
			  <mt-tab-item id="1">计算机</mt-tab-item>
			  <mt-tab-item id="2">科学技术</mt-tab-item>
			  <mt-tab-item id="3">经管人文</mt-tab-item>
			  <mt-tab-item id="4">教材</mt-tab-item>
			</mt-navbar>

			<mt-tab-container v-model="selected2">
			  <mt-tab-container-item id="1">
			    	<router-link to="" v-for="item in computerbook">
			    		<div class="spediv">
			    			<img :src="item.imgUrl">
			    			<p class="desc">{{ item.name }}</p>
			    			<p class="price"> 
			    				<span><b>{{ item.newprice }}</b></span>
			    				<span>{{ item.oldprice }}</span>
			    			</p>
			    		</div>
			    	</router-link> 	
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
				   <router-link to="" v-for="item in computerbook">
			    		<div class="spediv">
			    			<img :src="item.imgUrl">
			    			<p class="desc">{{ item.name }}</p>
			    			<p class="price"> 
			    				<span><b>{{ item.newprice }}</b></span>
			    				<span>{{ item.oldprice }}</span>
			    			</p>
			    		</div>
			    	</router-link>  
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
				  <router-link to="" v-for="item in computerbook">
			    		<div class="spediv">
			    			<img :src="item.imgUrl">
			    			<p class="desc">{{ item.name }}</p>
			    			<p class="price"> 
			    				<span><b>{{ item.newprice }}</b></span>
			    				<span>{{ item.oldprice }}</span>
			    			</p>
			    		</div>
			    	</router-link> 
			  </mt-tab-container-item>
			  <mt-tab-container-item id="4">
				 <router-link to="" v-for="item in computerbook">
			    		<div class="spediv">
			    			<img :src="item.imgUrl">
			    			<p class="desc">{{ item.name }}</p>
			    			<p class="price"> 
			    				<span><b>{{ item.newprice }}</b></span>
			    				<span>{{ item.oldprice }}</span>
			    			</p>
			    		</div>
			    	</router-link> 
			  </mt-tab-container-item>
			</mt-tab-container>
			<!--轮播-->
			<div class="newbookswipe">
		 		<mt-swipe :show-indicators="false" :auto="10000" :speed="0">
				  <mt-swipe-item v-for="(item,index) in newbookswipe">		  	
				  		<img :src=" item.imgUrl ">
				  </mt-swipe-item>
				</mt-swipe>
	 		</div>
		</div>

		<!--出版专区-->
		<div class="publish">
			<div class="title">
				<span>
					<b>出版社专区</b>
				</span>
				<router-link to="/">
				    <span class="more">更多></span>
				</router-link>
			</div>		
			<div class="contain">
				<router-link to="">
					<div class="publish_contain">
						<img src="./../../assets/homepage/publish1.jpg">
						<div class="publish-div">
							<span>华章图文信息...</span>
							<span>查看详情></span>
						</div>
					</div>
				</router-link>
				<router-link to="">
					<div class="publish_contain">
						<img src="./../../assets/homepage/publish2.jpg">
						<div class="publish-div">
							<span>人民邮电出版社</span>
							<span>查看详情></span>
						</div>
					</div>
				</router-link>
				<router-link to="">
					<div class="publish_contain">
						<img src="./../../assets/homepage/publish3.jpg">
						<div class="publish-div">
							<span>电子工业出版社</span>
							<span>查看详情></span>
						</div>
					</div>
				</router-link>
				<router-link to="">
					<div class="publish_contain">
						<img src="./../../assets/homepage/publish4.jpg">
						<div class="publish-div">
							<span>清华大学出版社</span>
							<span>查看详情></span>
						</div>
					</div>
				</router-link>
			</div>	
		</div>

		<!--出版专区-->
		<div class="actor">
			<div class="title">
				<span>
					<b>作者专区</b>
				</span>
				<router-link to="/">
				    <span class="more">更多></span>
				</router-link>
			</div>	
			<div class="actor_contain">
				<router-link to="">
					<img src="./../../assets/homepage/actor.gif">
					<div class="actor-div">
						<span>杰克·特劳特Jack Trout特劳特伙伴总裁，定位之父，全球最顶尖的营销战略大师</span>
						<span>查看详情></span>
					</div>
				</router-link>
			</div>
		</div>

	</div>
</template>
<script>
	export default{
		name:'home',
		data(){
			return{
				selected1:'1',
				selected2:'1',
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
				specialbooksale:[
					{imgUrl:require("./../../assets/homepage/sale1.jpg"),name:"(特价书)成功创业团队要客服的101个难题",newprice:"￥22.05",oldprice:"￥49"},
					{imgUrl:require("./../../assets/homepage/sale2.jpg"),name:"(特价书)JavaScript程序设计：基础·PHP·XML",newprice:"￥62.55",oldprice:"￥139"},
					{imgUrl:require("./../../assets/homepage/sale3.jpg"),name:"(特价书)时代的变换：互联网构建新世界",newprice:"￥22",oldprice:"￥49"},
					{imgUrl:require("./../../assets/homepage/sale4.jpg"),name:"(特价书)儿童心理学：0～8岁儿童的成长(原书第6版)",newprice:"￥31.05",oldprice:"￥69"},
					{imgUrl:require("./../../assets/homepage/sale5.jpg"),name:"(特价书)新规则：用社会化媒体做营销和公关(原书第4版)",newprice:"￥26.55",oldprice:"￥59"},
					{imgUrl:require("./../../assets/homepage/sale6.jpg"),name:"(特价书)成功创业团队要客服的101个难题",newprice:"￥22",oldprice:"￥49"}
				],
				recommendbooksale:[
					{imgUrl:require("./../../assets/homepage/sale7.jpg"),name:"深度学习：Java语言实现",newprice:"￥34.3",oldprice:"￥49"},
					{imgUrl:require("./../../assets/homepage/sale8.jpg"),name:"高性能服务系统构建与实战",newprice:"￥66.75",oldprice:"￥89"},
					{imgUrl:require("./../../assets/homepage/sale9.jpg"),name:"Kotlin实战",newprice:"￥66.75",oldprice:"￥89"},
					{imgUrl:require("./../../assets/homepage/sale10.jpg"),name:"Keras快速上手：基于Python的深度学习实战",newprice:"￥59.25",oldprice:"￥79"},
					{imgUrl:require("./../../assets/homepage/sale11.jpg"),name:"白话深度学习与TensorFlow",newprice:"￥48.3",oldprice:"￥69"},
					{imgUrl:require("./../../assets/homepage/sale12.jpg"),name:"机器学习之路——Caffe、Keras、scikit-learn实战",newprice:"￥59.25",oldprice:"￥79"}
				],		
				computerbook:[
					{imgUrl:require("./../../assets/homepage/commputer1.jpg"),name:"大数据之路：阿里巴巴大数据实践",newprice:"￥59.25",oldprice:"￥79"},
					{imgUrl:require("./../../assets/homepage/commputer2.jpg"),name:"分布式服务架构：原理、设计与实战",newprice:"￥66.75",oldprice:"￥89"},
					{imgUrl:require("./../../assets/homepage/commputer3.jpg"),name:"深入理解并行编程 ",newprice:"￥96.75",oldprice:"￥129"},
					{imgUrl:require("./../../assets/homepage/commputer4.jpg"),name:"架构探险：从零开始写分布式服务框架",newprice:"￥59.25",oldprice:"￥79"},
					{imgUrl:require("./../../assets/homepage/commputer5.jpg"),name:"架构解密：从分布式到微服务",newprice:"￥59.25",oldprice:"￥79"},
					{imgUrl:require("./../../assets/homepage/commputer6.jpg"),name:"macOS软件安全与逆向分析",newprice:"￥60.83",oldprice:"￥79"}
				]	
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
	#home .mint-header a:-webkit-any-link{
		text-align: center;
		width: 30%;
		line-height: 14px;	
	}
	#home .mint-header .iconfont{
		font-size:20px;
	}
	#home .mint-header span{
		font-size:8px;
		margin: 0;
		padding: 0;
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
     	background-color: #FFFFFF;
	}
	#home .specialbooksale .mint-navbar{
	     color: #000000;
	     padding: 0 0.3125rem;
	     margin-bottom:0.3125rem;
	}
	 #home .specialbooksale .mint-tab-item{
	     border-width: 0.0625rem;
	     border-style: solid;
	     border-color: #FF3300;
	     height: 0.3125rem ;
	     overflow:hidden;
	}
	/*#home .specialbooksale .mint-tab-item-label {
	     font-size: 1.125rem;
	     line-height: 0.5rem;
	}
	 */
	 #home .specialbooksale .mint-navbar .mint-tab-item.is-selected{
	     border-width: 0.0625rem;
	     border-style: solid;
	     border-color: #FF3300;
	     background-color: #FF3300;
	     color: #FFFFFF;
	}

	/*选项卡列表*/
	 #home .specialbooksale a:-webkit-any-link,
	 #home .booksort a:-webkit-any-link{
	     display:block;
	     width:32.7%;
	     background:#FFFFFF;
	     float:left;
	     border:1px solid #e0e0e0;
	}
	 #home .specialbooksale .spediv,
	 #home .booksort .spediv{
	     width:100%;
	     background-color:#FFFFFF;
	     text-align:center;
	}
	 #home .specialbooksale .spediv img,
	 #home .booksort .spediv img{
	     display:block;
	     width:70%;
	     height:8.4375rem;
	     margin-left:13.5%;
	     margin-top:0.625rem;
	     text-align:none;
	}
	 #home .specialbooksale .spediv .desc,
	 #home .booksort .spediv .desc{
	     margin-top:0.3125rem;
	     margin-bottom:0;
	     font-size:0.75rem;
	     color:#333333;
	     overflow:hidden;
	     height:2.0625rem;
	}
	 #home .specialbooksale .spediv .price,
	 #home .booksort .spediv .price{
	     font-size:0.875rem;
	     color:#333333;
	     margin-top:0.125rem;
	}
	 #home .specialbooksale .spediv .price span:nth-child(1),
	 #home .booksort .spediv .price span:nth-child(1){
	     color:#ff3300;
	}
	 #home .specialbooksale .spediv .price span:nth-child(2),
	 #home .booksort .spediv .price span:nth-child(2){
	     text-decoration:line-through;
	     color:#999;
	}

	/*图书分类*/
	#home .booksort{
		background:#FFFFFF;
	}
	#home .booksort .mint-navbar{
	     color: #000000;
	}
	#home .booksort .mint-tab-item{
	     height: 5px;
	     overflow:hidden;
	     padding:12px 0;
	}
	 #home .booksort .mint-navbar .mint-tab-item.is-selected{
	     color: #0085cd;
	     border:none;
	     text-decoration:underline;
	}

	/*出版社专区&作者专区*/
	#home .publish{
		background-color:#FFFFFF;
	}
	#home .publish .title,
	#home .actor .title{
		background-color:#FFFFFF;
		padding: 5px 3px;
	}
	#home .publish .more,
	#home .actor .more{
		float:right;
		color:#969696;
		font-size:13px;
		padding-right: 20px;
	}
	#home .publish .contain{
		overflow:hidden;
	}
	#home .publish .contain a:-webkit-any-link{
		width:45%;
		float:left;
	    border:1px solid #e0e0e0;
	    padding:10px 2.1%;
	    overflow:hidden;
	}
	#home .publish .publish_contain{
		width:100%;
		float:left;
		overflow:hidden;
	}
	#home .publish .publish_contain img{
		width:40%;
		float:left;
		margin-right:5px;
	}
	#home .publish .publish_contain .publish-div{
		width:55%;
		float:right;
		overflow:hidden;
	}
	#home .publish .publish_contain span:nth-child(1){
		font-weight:bold;	
		font-size:13px;
		color:#2c3e50;
		margin:5px 0;
		float:right;
	}
	#home .publish .publish_contain span:nth-child(2){
		color:#969696;
		font-size:12px;
		margin:0;
		float:right;	
	}
	#home .actor{
		margin-top:10px;
		margin-bottom:10px;
		background-color:#FFFFFF;
	}
	#home .actor .actor_contain{
		width:100% ; 
		overflow:hidden;
		border-top:1px solid #e0e0e0;
	}
	#home .actor .actor_contain a:-webkit-any-link{
		width:100%;
	}
	#home .actor .actor_contain img{
		width:30%;
		float:left;
	}
	#home .actor .actor_contain .actor-div{
		width:60%;
		float:right ;
		overflow:hidden;
		padding:0 5%;
		padding-top:20px;
	}
	#home .actor .actor_contain span:nth-child(1){
		font-size:13px;
		color:#2c3e50;
		margin:15px 0;
		float:right;
	}
	#home .actor .actor_contain span:nth-child(2){
		color:#969696;
		font-size:12px;
		margin:0;
		float:right;	
	}
 </style>