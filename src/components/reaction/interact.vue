<template>
	<div id="interact">
		<!--顶部-->
		<mt-header fixed>
		  <router-link to="/layout/sort" slot="right">
		     <mt-button>发帖</mt-button>
		  </router-link>
		</mt-header>
	</div>
</template>
<script></script>
<style scoped>
	#interact{
		
	}
	#interact  a:-webkit-any-link{
		text-decoration: none;
		color: inherit;
	}
	#interact .mint-header{
		background-color: #ffffff;
		color: #666;
		padding-top:10px;
		padding-bottom: 5px;
		height: 55px;
		font-size:18px;
		border-bottom: 1px solid #c2c2c2;
	}
	#interact .mint-header .mint-button{
		border: 1px solid #c2c2c2;
		padding:0 10px;
		font-size: 14px;
		height: 30px;
	}
</style>