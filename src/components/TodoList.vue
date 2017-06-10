<template>
	<div class="ui container horizontal segments">
		<div class="ui segment" v-for="todo in todos"></div>		
	</div>
</template>

<script>

export default{
	data(){
		return{
			todos:{}
		}
	}
}

</script>

<style>
</style>