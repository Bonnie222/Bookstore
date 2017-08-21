<template>
	<div id="layout">
		<router-view></router-view>
		<myNavigation></myNavigation>
	</div>
</template>
<script>
	import Navigation from '@/components/navigation'
	export default{
		name:'layout',
		data(){
			return{

			}
		},
		components:{
			'myNavigation':Navigation
		}
	}
</script>
<style></style>