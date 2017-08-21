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
			dfd
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
		background-color: yellow;
		/*margin-top:107px;*/
	}
</style>