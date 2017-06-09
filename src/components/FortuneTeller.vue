<template>
<transition name="bottom-to-up" appear>

	<div class="ui container segment">
		<div class="ui header">Fortune Baba Says</div>
		<div class="content">{{msg}}</div>
	</div>
</transition>
</template>

<script>

export default{
	data(){
		return{
			msg:"Loading...",
			apiUrl:"https://helloacm.com/api/fortune/"
		}
	},
	created(){
		this.$http.get(this.apiUrl).then(resp=>{
			this.msg=resp.body;
		})
	}
}

</script>

<style>
	
</style>