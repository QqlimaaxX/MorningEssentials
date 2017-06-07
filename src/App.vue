<template>
	<div>
		<h1>Morning Essentials</h1>
				<!-- <app-news></app-news> -->
				<!-- <app-fortune-teller></app-fortune-teller> -->
				<app-flip-a-coin></app-flip-a-coin>
	</div>
</template>

<script>
import News from './components/News.vue';
import FortuneTeller from './components/FortuneTeller.vue';
import FlipACoin from './components/FlipACoin.vue';

	export default{
		data:function(){
			return{
			}
		},
		components:{
			AppNews:News,
			AppFortuneTeller:FortuneTeller,
			AppFlipACoin:FlipACoin
		}
	}
</script>

<style>
	
</style>