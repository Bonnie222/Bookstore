<template>
	<div id="booklist">
		<!--顶部-->
		<mt-header title="列表" fixed>
		  <router-link to="/layout/sort" slot="left">
		     <mt-button icon="back">back</mt-button>
		  </router-link>
		</mt-header>

		<mt-search  v-model="value"  cancel-text="cancel"  placeholder="搜索"></mt-search>

		<div class="book">
			<div class="bookintro">
				<img src="./../../assets/homepage/sale1.jpg">
				<div class="bookdesc">
					<span class="bookname">深度学习与计算机视觉：算法原理、框架应用于代码实现</span>
					<span class="bookprice">￥55.30(7.0折)</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'',
		data(){
			return{

			}
		}
	}
</script>
<style>
	#booklist  a:-webkit-any-link{
		text-decoration: none;
		color: inherit;
	}
	#booklist .mint-header{
		background-color: #ffffff;
		color: #666;
		padding-top:10px;
		padding-bottom: 5px;
		height: 55px;
		font-size:18px;
		border-bottom: 1px solid #c2c2c2;
	}
	#booklist .mint-header .iconfont{
		font-size:22px;
		font-weight: bold;
	}
	#booklist .mint-search{
		height: 100%;
	}
	#booklist .mint-searchbar{
		margin-top: 55px;
	}
	#booklist .book{
		/*margin-top:107px;*/
		border-bottom: 1px solid #c2c2c2;
	}

	#booklist .bookintro{
		width: 100%;
		padding:10px 2.5%;
		overflow: hidden;
	}
	#booklist .bookintro img{
		width: 25%;
		float: left;
	}
	#booklist .bookintro .bookdesc{
		width: 65%;
		padding: 0 2.5%;
		float: left;
		font-size: 16px;
	}
	#booklist .bookintro .bookdesc .bookname{
		display: block;
		padding-bottom:60px;
	}
	#booklist .bookintro .bookdesc .bookprice{
		display: block;
		font-size: 14px;
		color: #ff3300;
	}
</style>