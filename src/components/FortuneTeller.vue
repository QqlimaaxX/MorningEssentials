<template>
	<div class="ui container">
		<h1>Fortune Baba Says</h1>
		<h2>{{msg}}</h2>
	</div>
</template>

<script>

export default{
	data(){
		return{
			msg:"",
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