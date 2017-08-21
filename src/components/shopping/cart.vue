<template>
	<div id="cart">
		<!--顶部-->
		<mt-header title="购物车" fixed></mt-header>

		<!--购物车-->
		<div class="shop">
			<div class="total">
				<mt-checklist v-model="value" :options="['纸质书']"></mt-checklist>
			</div>
			<div class="booklist">
				<mt-cell-swipe :right="[ {content: 'Delete', style: { background: 'red', color: '#fff' }, handler: () => this.$messagebox('delete')} ]">
					dsds
				</mt-cell-swipe>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'cart',
		data(){
			return{
				value:''
			}
		}
	}
</script>
<style scoped>
	#cart{
		background: #F6F7F7;
		margin-bottom: 60px;
	}
	#cart  a:-webkit-any-link{
		text-decoration: none;
		color: inherit;
	}
	#cart .mint-header{
		background-color: #ffffff;
		color: #666;
		padding-top:10px;
		padding-bottom: 5px;
		height: 55px;
		font-size:18px;
		border-bottom: 1px solid #c2c2c2;
	}

	#cart .shop{
		margin-top:55px;
	}
	#cart .total{
		background-color: #F6F7F7;
	}
	#cart .mint-checkbox-input:checked + .mint-checkbox-core{
		background-color: #ff3300 ;
    	border-color:#ff3300;
	}
</style>