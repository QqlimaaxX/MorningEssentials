<template>
	<div>
		<transition-group tag="div" class="ui grid container segment" name="scale">
			<!-- title -->
		 	<div class="sixteen wide column" key="title">
				<div class="ui center aligned segment" @click="resetView">
					<div class="ui header">	
						Morning Essentials
					</div>
				</div>
			</div>
			<!-- App Selector -->
			<div v-if="!somethingSelected" class="eight wide column" key="newsSelector"> 
				<app-news-selector @newsSelected="newsSelectedProc"></app-news-selector>
			</div>

			<!-- App News Section -->
			<div v-if="newsSelected" class="sixteen wide column" key="newsSection">
				<app-news></app-news>
			</div>

			<!-- Flip a Coin -->
			<div v-if="!somethingSelected" class="eight wide column" key="coin">
				<app-flip-a-coin></app-flip-a-coin>
			</div>

			<!-- Fortune Teller -->
			<div v-if="!somethingSelected" class="eight wide column" key="baba">
				<app-fortune-teller></app-fortune-teller>
			</div>

		</transition-group>
	</div>
</template>

<script>
import News from './components/News.vue';
import FortuneTeller from './components/FortuneTeller.vue';
import FlipACoin from './components/FlipACoin.vue';
import NewsSelector from './components/NewsSelector.vue';

	export default{
		data:function(){
			return{
				somethingSelected : false,
				newsSelected : false
			}
		},
		components:{
			AppNews:News,
			AppFortuneTeller:FortuneTeller,
			AppFlipACoin:FlipACoin,
			AppNewsSelector:NewsSelector
		},
		methods:{
			newsSelectedProc(){
				console.log("News selected");
				this.somethingSelected = true;
				this.newsSelected = true;
			},
			resetView(){
				console.log("resetView called");
				this.somethingSelected = false;
				this.newsSelected = false;
			}
		}
	}
</script>

<style>
	body{
	background: linear-gradient(to right, #ece9e6, #ffffff);
	}

	.bottom-to-up-enter,.bottom-to-up-leave-to{
		opacity: 0;
		transform: translateY(50px);
	}

	.bottom-to-up-enter-active,.bottom-to-up-leave-active{
		transition: all 0.5s;
	}

	.scale-enter{
		opacity: 0;
		transform: scale(0.5);
	}

	.scale-leave-to{
		opacity: 0;
		transform: scale(0.5);
	}

	.scale-move {
	  transition: transform 0.5s;
	}

	.scale-enter-active,.scale-leave-active{
		transition: all 0.5s;
	}
	.scale-leave-active{
		position: absolute;
	}
	.scale-enter-active{
		transition-delay: 0.5s;
	}
</style>