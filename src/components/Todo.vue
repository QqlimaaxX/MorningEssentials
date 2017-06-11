<template>
	<div class="ui fluid center aligned segment" @click.stop="todo.isDone = !todo.isDone"  :class="{'gray-bg':todo.isDone}">
		<div class="content" :class="{'strike' : todo.isDone}">
				{{todo.data}}
		</div>
		<br>
		<transition name="to-right" tag="span" mode="out-in">
			<div class="ui icon buttons" v-if="!isEditing">
				<div class="ui blue button icon" @click.stop="editMe"><i class="edit icon"></i></div>
				<div class="or"></div>
				<div class="ui right red button" @click.stop="deleteMe"><i class="trash icon"></i></div>
			</div>
			<form class="ui form" v-else @submit.prevent="saveMe">
				<div class="ui field">
					<label>Edit Todo</label>
					<input type="text" @click.stop v-model="todo.data">
				</div>
				<div class="ui field">
					<div class="ui icon buttons">
						<button class="ui green button" @click.stop>Save</button>
						<div class="or"></div>
						<button class="ui red button" @click.stop="cancelMe">Cancel</button>
					</div>
				</div>
			</form>
		</transition>
	</div>
</template>

<script>

	export default{
		props:["todo"],
		data(){
			return{
				isEditing:false,
				prevData:""
			}
		},
		methods:{
			deleteMe(){
				this.$emit('deleteTodo');
			},
			editMe(){
				this.isEditing = true;
				this.prevData = this.todo.data;
			},
			saveMe(){
				this.isEditing = false;
			},
			cancelMe(){
				this.isEditing = false;
				this.todo.data = this.prevData;
			}
		}
	}

</script>

<style scoped>
.strike{
	text-decoration: line-through;
}

.gray-bg{
	background-color: #CCC;
}

.ui.segment:hover{
	cursor: pointer;
}

.ui.segment{
	transition: all 0.25s;
}

</style>