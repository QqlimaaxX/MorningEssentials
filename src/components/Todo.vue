<template>
	<div class="ui fluid segment" @click.stop="todo.isDone = !todo.isDone"  :class="{'gray-bg':todo.isDone}">
		<div class="content" :class="{'strike' : todo.isDone}">
				{{todo.data}}
		</div>
		<div class="ui buttons fluid">
			<div class="ui left blue button">Edit</div>
			<div class="ui right red button" @click.stop="deleteMe">Delete</div>
		</div>
	</div>
</template>

<script>

	export default{
		props:["todo"],
		methods:{
			deleteMe(){
				this.$emit('deleteTodo');
			}
		}
	}

</script>

<style scoped>
.strike{
	text-decoration: line-through;
}

.gray-bg{
	background-color: #EEE;
}

.ui.card:hover{
	cursor: pointer;
	transform: scaleX(1.01);
}

.ui.card{
	transition: all 0.25s;
}

</style>