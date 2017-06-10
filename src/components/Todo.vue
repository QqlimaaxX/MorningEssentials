<template>
	<div class="ui fluid card" @click.stop="todo.isDone = !todo.isDone">
		<div class="content" :class="{'strike' : todo.isDone}">
			<div class="description">
				{{todo.data}}
			</div>
		</div>
		<div class="ui two bottom attached buttons">
			<div class="ui right blue attached button">Edit</div>
			<div class="ui left red attached button" @click.stop="deleteMe">Delete</div>
		</div>
	</div>
</template>

<script>

	export default{
		props:["todo","index"],
		methods:{
			deleteMe(){
				this.$emit('deleteTodo',this.index);
			}
		}
	}

</script>

<style scoped>
.strike{
	text-decoration: line-through;
}

.ui.card:hover{
	cursor: pointer;
	transform: scaleX(1.01);
}

.ui.card{
	transition: all 0.25s;
}

</style>