<template>
	<div class="ui container">
		<h1>Want to decide something? Flip a Coin</h1>
		<button class="ui blue button" :class='{"loading":isFlipping}' @click="flip">Flip?</button>
		<h2 v-if="msg">{{msg}}</h2>
	</div>
</template>

<script>
export default{
	data(){
		return{
			isFlipping:false,
			msg:""
		}
	},
	methods:{
		flip(){
			if(!this.isFlipping){
				console.log('flipping')
				this.isFlipping = true;
				let randnum = Math.random();
				let vm = this;
				setTimeout(function(){
				    if(randnum<0.5){
				    	vm.msg="Heads";
				    }else{
				    	vm.msg="Tails";
				    }
				    vm.isFlipping = false;
				},1000);
			}

		}
	}
}
</script>

<style>
</style>