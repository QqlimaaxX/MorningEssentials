<template>
	<div>
		<h1>Morning Essentials</h1>
		<div class="ui grid">
				<app-news></app-news>
		</div>	
	</div>
</template>

<script>
import News from './components/News.vue';

	export default{
		data:function(){
			return{
			}
		},
		components:{
			AppNews:News
		}
	}
</script>

<style>
	
</style>