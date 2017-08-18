<template>
	<div id="myself">
		<!--顶部-->
		<mt-header title="我" fixed>
		  <router-link to="" slot="left">
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
		
		<!--我的订单-->
		<div class="myorder">
			<div class="order1">
				<span class="order1-1">
					<i class="iconfont icon-aiguifanfile2"></i>
					<span>我的订单</span>
				</span>
				<span class="order1-2">
					<router-link to="">查看全部订单〉</router-link>
				</span>
			</div>
			<div class="order2">
				<router-link to="">
					<i class="iconfont icon-daifukuan"></i><br/>
					<span>待付款</span>
				</router-link>
				<router-link to="">
					<i class="iconfont icon-daifahuo"></i><br/>
					<span>待发货</span>
				</router-link>
				<router-link to="">
					<i class="iconfont icon-daishouhuo"></i><br/>
					<span>待收货</span>
				</router-link>
				<router-link to="">
					<i class="iconfont icon-pingjia-"></i><br/>
					<span>待评价</span>
				</router-link>
			</div>
		</div>

		<!--我的钱包-->
		<div class="mymoney">
			<div class="money1">
				<span class="money1-1">
					<i class="iconfont icon-wodeqianbao"></i>
					<span>我的钱包</span>
				</span>
			</div>
			<div class="money2">
				<router-link to="">
					<b>0.00</b><br/>
					<span>待付款</span>
				</router-link>
				<router-link to="">
					<b>0</b><br/>
					<span>待发货</span>
				</router-link>
				<router-link to="">
					<b>0</b><br/>
					<span>待收货</span>
				</router-link>				
			</div>
		</div>

		<!--意见反馈-->
		<div class="myadvice">
			<div class="advice1">
				<span class="advice1-1">
					<i class="iconfont icon-yijianfankui"></i>
					<span>意见反馈</span>
				</span>
				<span class="advice1-2">
					<router-link to="">〉</router-link>
				</span>
			</div>
		</div>
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
		color: inherit;
	}
	#myself .mint-header{
		background-color: #ffffff;
		color: #666;
		padding-top:10px;
		padding-bottom: 5px;
		height: 55px;
		font-size:18px;
	}
	#myself .mint-header .iconfont{
		font-size:22px;
		font-weight: bold;
	}

	/*个人信息*/
	#myself .info{
		margin-top:55px;
		height:200px;
		background-color:#ff6640;
	}
	#myself .info1{
		height: 110px;
		padding-top: 35px;
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

	/*我的订单&我的钱包&意见反馈*/
	#myself .myorder,
	#myself .mymoney,
	#myself .myadvice{
		background:#ffffff;
		margin-top:15px;
	}
	#myself .myorder .order1,
	#myself .mymoney .money1,
	#myself .myadvice .advice1{
		padding:4px 5px;
		overflow: hidden;
		line-height: 45px;
		border-top:1px solid #F6F7F7;
		border-bottom:1px solid #F6F7F7;
	}
	#myself .myorder .order1-1,
	#myself .mymoney .money1-1,
	#myself .myadvice .advice1-1{
		float: left;
		font-size: 18px;
		color: #1d1d1d;
	}

	/*我的订单*/
	#myself .myorder .order1-1 .iconfont{
		font-size: 22px;
		color: #feb500;
	}
	#myself .myorder .order1-2{
		float: right;
		font-size: 14px;
		color: #b3b3b3;
	}
	#myself .myorder .order2{
		overflow:hidden;
	}
	#myself .myorder .order2 a:-webkit-any-link{
		text-align: center;
		width: 25%;
		float: left;
		padding: 15px 0;
		padding-bottom: 5px;
		font-size: 14px;
		color: #7b7b7b;
	}
	#myself .myorder .order2 .iconfont{
		font-size: 22px;
		color: #393939;
	}

	/*我的钱包*/
	#myself .mymoney .money1-1 .iconfont{
		font-size: 18px;
		color: #ff8888;
	}
	#myself .mymoney .money2{
		overflow:hidden;
	}
	#myself .mymoney .money2 a:-webkit-any-link{
		text-align: center;
		width: 33.33%;
		float: left;
		padding: 15px 0;
		padding-bottom: 5px;
		font-size: 14px;
		color: #000000;
		line-height: 24px;
	}
	#myself .mymoney .money2 a:-webkit-any-link span{
		color: #acacac;
		padding: 5px 0;
	}

	/*我的钱包*/
	#myself .myadvice .advice1-1 .iconfont{
		font-size: 18px;
		color: #38acff;
	}
	#myself .myadvice .advice1-2{
		float: right;
		font-size: 14px;
		color: #b3b3b3;
	}
</style>