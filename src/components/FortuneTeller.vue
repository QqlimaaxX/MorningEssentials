<template>
<transition name="bottom-to-up" appear>

	<div class="ui container segment" :class="{'loading' : isLoading}">
		<div class="ui header"><i class="doctor icon"></i>Fortune Baba Says</div>
		<div class="content">{{msg}}</div>
	</div>
</transition>
</template>

<script>

export default{
	data(){
		return{
			msg:"",
			apiUrl:"https://helloacm.com/api/fortune/",
			isLoading:true
		}
	},
	created(){
		this.isLoading=true;
		this.$http.get(this.apiUrl).then(resp=>{
			this.msg=resp.body;
			this.isLoading=false;
		});
	}
}

</script>

<style>
	
</style>