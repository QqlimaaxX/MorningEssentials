<template>
	<div class="ui container segment">
		<div class="ui header">Your Today's Todo-List</div>
		<div class="ui content" v-if="todos.length == 0">You have no todos today. Enjoy your day</div>
		<br>
		<transition name="to-right" mode="out-in" appear>
		<div class="ui button orange" v-if="!isEditing" @click="isEditing=true" key="new">Add New Todo</div>
		<form class="ui form" v-else @submit.prevent.stop="addNewTodo" key="todoform">
			<div class="field">
				<label>New Todo</label>
				<input type="text" required placeholder="Your new Todo here" v-model="data">
			</div>
			<div class="field">
				<button class="ui button">Submit</button>
			</div>
		</form>
		</transition>
		<br>
		<br>
		<transition-group class="ui cards" name="to-right" tag="div" appear>
			<todo v-for="todo,index in todos" :key="todo.data+index" :index="index" :todo="todo" @deleteTodo="deleteTodo"></todo>
		</transition-group>
	</div>
</template>

<script>

import Todo from './Todo.vue';

export default{
	data(){
		return{
			isEditing:false,
			data:"",
			todos:[]
		}
	},
	components:{Todo},
	methods:{
		addNewTodo(){
			let newTodo = {
				data:this.data,
				isDone:false
				}
			this.data="";
			this.todos.push(newTodo);
			this.isEditing = false;
		},
		deleteTodo(index){
			this.todos.splice(index,1);
		}
	}
}

</script>
<style scoped>
	.to-right-enter,.to-right-leave-to{
		transform: translateX(100px);
		opacity: 0;
	}

	.to-right-enter-active,.to-right-leave-active{
		transition: all 0.25s;
	}

	.to-right{
		position: absolute;
	}

</style>