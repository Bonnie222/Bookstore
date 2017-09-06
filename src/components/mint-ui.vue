<template>
	<div id="mint_ui">
		<!-- <h4>css component</h4>
		<p>Header(顶部导航栏，支持显示按钮、自定义文字和固定在顶部。)</p>
		<mt-header fixed title="固定在顶部"></mt-header>
		
		<mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<hr/>
		<mt-header title="多个按钮">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		    <mt-button @click="handleClose">关闭</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>

		<p>Tabbar(底部选项卡，点击 tab 会切换显示的页面。依赖 tab-item 组件。)</p>
		<p>搭配 tab-container 组件使用</p>
		<mt-tabbar v-model="selected" fixed>
		  <mt-tab-item id="外卖">
		    <img slot="icon" src="">
		    外卖
		  </mt-tab-item>
		  <mt-tab-item id="订单">
		    <img slot="icon" src="">
		    订单
		  </mt-tab-item>
		  <mt-tab-item id="发现">
		    <img slot="icon" src="">
		    发现
		  </mt-tab-item>
		  <mt-tab-item id="我的">
		    <img slot="icon" src="">
		    我的
		  </mt-tab-item>
		</mt-tabbar>

		<mt-tab-container v-model="selected" style="padding-bottom:55px">
		  <mt-tab-container-item id="外卖">
		    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="订单">
		    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="发现">
		    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="我的">
		    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
		  </mt-tab-container-item>
		</mt-tab-container>

		<mt-button type="default">default</mt-button>
		<mt-button type="primary">primary</mt-button>
		<mt-button type="danger" @click="toast()">danger</mt-button> -->

		
		<div class="a">
			<mt-swipe :auto="4000">
			  <mt-swipe-item ><img src="./../assets/homepage/1.jpg"></mt-swipe-item>
			  <mt-swipe-item ><img src="./../assets/homepage/3.jpg"></mt-swipe-item>
			  <mt-swipe-item><img src="./../assets/homepage/4.jpg"></mt-swipe-item>
			</mt-swipe>
		</div>
		
	</div>
</template>
<script scoped>
    import Vue from 'vue';

	export default{
		name:'mint_ui',
		data(){
			return{
				selected:''

			}
		},
		methods:{
			handleClose(){},
			//selected(){},
			toast(){
				//this.$toast('提示信息');
				this.$toast({
				  message: '提示',
				  position: 'bottom',
				  duration: 5000
				});
			}
		}
	}
</script>
<style>
	.a{
		height: 200px
	}
	.a img{
		width: 100%;
	}
</style>