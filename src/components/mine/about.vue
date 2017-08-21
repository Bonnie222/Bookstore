<template>
	<div id="about">
		<!--顶部-->
		<mt-header title="关于" fixed>
		  <router-link to="/layout/myself" slot="left">
		     <mt-button icon="back">我</mt-button>
		  </router-link>
		</mt-header>
	</div>
</template>
<script></script>
<style>
	#about  a:-webkit-any-link{
		text-decoration: none;
		color: inherit;
	}
	#about .mint-header{
		background-color: #ffffff;
		color: #666;
		padding-top:10px;
		padding-bottom: 5px;
		height: 55px;
		font-size:18px;
		border-bottom: 1px solid #c2c2c2;
	}
	#about .mint-header .iconfont{
		font-size:22px;
		font-weight: bold;
	}
</style>