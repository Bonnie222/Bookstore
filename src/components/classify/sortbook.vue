<template>
	<div id="sortbook">
		<!--顶部导航-->
		<div class="header">
			<mt-button>搜索</mt-button>
		</div>
		
		<!--选项卡-->
 		<section class="container">
 			<mt-navbar v-model="selected" >
 				<mt-tab-item v-for="item in menu" :id="item.id">{{ item.text }}</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1">			    
			    <div class="book">
			    	<router-link to="/booklist">
				    	<img src="./../../assets/homepage/sale1.jpg">
				    	<div class="bookname">
				    		<span>计算机科学理论与基础知识</span>
				    	</div>
			    	</router-link>
			    </div>
			    <div class="book">
			    	<img src="./../../assets/homepage/sale1.jpg">
			    	<div class="bookname">
			    		<span>ssssss 知识</span>
			    	</div>
			    </div>
			    <div class="book">
			    	<img src="./../../assets/homepage/sale1.jpg">
			    	<div class="bookname">
			    		<span>ssssss 知识</span>
			    	</div>
			    </div>
			    <div class="book">
			    	<img src="./../../assets/homepage/sale1.jpg">
			    	<div class="bookname">
			    		<span>ss 知识</span>
			    	</div>
			    </div>
			    <div class="book">
			    	<img src="./../../assets/homepage/sale1.jpg">
			    	<div class="bookname">
			    		<span>ssssss sd sd s ds ds知识</span>
			    	</div>
			    </div>

			  </mt-tab-container-item>
			  <mt-tab-container-item id="2">
			    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
			  </mt-tab-container-item>
			  <mt-tab-container-item id="3">
			    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
			  </mt-tab-container-item>
			  <mt-tab-container-item id="4">
			    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
			  </mt-tab-container-item>
			  <mt-tab-container-item id="5">
			    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
			  </mt-tab-container-item>
			</mt-tab-container>
 		</section>

 	</div>
</template>
<script>
	export default{
		name:'sortbook',
		data(){
			return{
				selected:'1',
				menu:[
					{ id:'1',text:'计算机' },
					{ id:'2',text:'经济管理' },
					{ id:'3',text:'通信' },
					{ id:'4',text:'工业技术' },
					{ id:'5',text:'化学' },
					{ id:'6',text:'机械工...' },
					{ id:'7',text:'物理' },
					{ id:'8',text:'小说' },
					{ id:'9',text:'孕产/育儿' },
					{ id:'10',text:'哲学/宗教' },
					{ id:'11',text:'政治/军事' },
					{ id:'12',text:'自然科学' },
					{ id:'13',text:'动漫/绘本' },
					{ id:'14',text:'计算机' },
					{ id:'15',text:'经济管理' },
					{ id:'16',text:'通信' },
					{ id:'17',text:'工业技术' },
					{ id:'18',text:'化学' },
					{ id:'19',text:'机械工...' },
					{ id:'20',text:'物理' },
					{ id:'21',text:'小说' },
					{ id:'22',text:'孕产/育儿' },
					{ id:'23',text:'哲学/宗教' },
					{ id:'24',text:'政治/军事' },
					{ id:'25',text:'自然科学' },
					{ id:'26',text:'动漫/绘本' },

				]

			}
		}
	}
</script>
<style scoped>
	#sortbook{
		margin-bottom: 60px;
		background: #ffffff;
		overflow: hidden;
	}
    
    /*顶部*/
    #sortbook .header{
    	position: fixed;
    	top:0;
    	left: 0;
    	background:#ffffff;
    	width: 100%;
    	z-index: 99;
		/*-webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    box-sizing: border-box;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;*/
	    font-size: 14px;
    	padding-top:9px;
		padding-left: 10px;
		padding-right: 10px;
		height: 45px;
		line-height: 1;
		border-bottom:1px solid #cccccc;
	    text-align: center;
    }
    #sortbook .mint-button--default{
    	box-shadow: none;
    }

	#sortbook .container{
		margin-top:55px;
		width: 100%;
	}
	/*左边选项*/
	#sortbook .mint-navbar{
		width: 25%;
		float: left;
		display: block;
	}
	#sortbook .mint-navbar .mint-tab-item{
		background-color: #f3f3f3;
		border-bottom: 1px solid #ffffff;
		color: #121212;
		font-weight: 500;
		font-size: 14px;
	}
	#sortbook .mint-navbar .mint-tab-item:last-child{
		border-bottom:none;
	}
    #sortbook .mint-navbar .mint-tab-item.is-selected{
		background-color: #d9d9d9;
		margin-bottom: 0; 
    }
    /*右边内容*/

	#sortbook .mint-tab-container-item{
		width: 100%;
		overflow: hidden;
	}
	#sortbook .mint-tab-container-item .book{
		float: left;
		width: 23.3%;
		padding:10px 5%;
	}
	#sortbook .mint-tab-container-item .book a:-webkit-any-link {
    	color: inherit;
    	text-decoration: none;
    }
	#sortbook .mint-tab-container-item .book img{
		width: 100%;
	}
	#sortbook .mint-tab-container-item .book .bookname{
		width: 100%;
		height: 60px;
		display: table;
	}
	#sortbook .mint-tab-container-item .book span{
		display: table-cell;
		color: #b5b5b5;
		font-size: 14px;
		text-align: center;
		vertical-align:middle;
	}
	

	
</style>