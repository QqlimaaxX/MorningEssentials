<template>
<transition name="bottom-to-up" appear>
	<div class="ui container segment" @click="selected">
		<div class="ui header">News</div>
		<div class="content">Get to know some news from more than 70 newspapers!!</div>
	</div>
</transition>
</template>

<script>

export default{
	methods:{
		selected(){
			this.$emit('newsSelected');
		}
	}
}

</script>

<style scoped>
	.ui.container.segment{
		cursor: pointer;
	}
</style>