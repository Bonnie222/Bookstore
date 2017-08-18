<template>
	<div id="myself">
		<!--顶部-->
		<mt-header title="我">
		  <router-link to="/" slot="left">
		     <i class="iconfont icon-jinggao"></i>
		  </router-link>
		</mt-header>

		<!--个人信息-->
		<div class="info">
			<div class="info1">
				<div class="info1-1"><img src="../../assets/xwz.jpg"></div>
				<div class="info1-2">
					<p>小丸子</p>
					<p>普通会员</p>
				</div>
				<div class="info1-3"><span>账户管理、收货地址></span></div>
			</div>
			<div class="info2">
				<span>我的收藏</span>
			</div>
		</div>
		sdsdsdsds
	</div>
</template>
<script>
	export default{
		name:'myself',
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
	#myself{
		background: #F6F7F7;
	}
	#myself  a:-webkit-any-link{
		text-decoration: none;
	}
	#myself .mint-header{
		background-color: #ffffff;
		color: #666;
	}

	/*个人信息*/
	#myself .info{
		height:180px;
		background-color:#ff6640;
	}
	#myself .info1{
		height: 110px;
		padding-top: 20px;
		padding-left: 5%;
		overflow: hidden;
		background: skyblue;
	}
	#myself .info1-1{
		float: left;
		width: 25%;
		margin-top: 20px;
		margin-right:1%;
	}
	#myself .info1 img{
		width: 90px;
		height: 90px;
		border-radius: 90px;		
	}
	#myself .info1-2 {
		width: 30%;
		float: left;
		margin-top: 60px;
	}
	#myself .info1-3 {
		width: 43%;
		float: right;
		margin-top: 88px;
		font-size: 16px;
		color: #ffffff;
		margin-right: 1%;
	}
	#myself .info1-2 p:nth-child(1){
		font-size: 20px;
		color: #ffffff;
		margin: 0;
		padding:0;
	}
	#myself .info1-2 p:nth-child(2){
		font-size: 16px;
		color: #fff000;
		margin: 2px 0;
		padding:0;
	}
	#myself .info2{
		text-align: center;
		font-size: 18px;
		line-height: 50px;
		color: #ffffff;
	}
</style>