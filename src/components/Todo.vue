<template>
	<div id="id-todo">
	  <input v-model="newTodo" v-on:keyup.enter="addTodo">
	  <ul>
	    <li v-for="todo in todos">
	      <span>{{ todo.text }}</span>
	      <button v-on:click="removeTodo($index)">X</button>
	    </li>
	  </ul>
	</div>
</template>
<script>
	import Vue from 'vue'

	var obj = new Vue({
				  el: '#id-todo',
				  data: {
				    newTodo: '',
				    todos: [
				      { text: 'Add some todos' }
				    ]
				  },
				  methods: {
				    addTodo: function () {
				      var text = this.newTodo.trim()
				      if (text) {
				        this.todos.push({ text: text })
				        this.newTodo = ''
				      }
				    },
				    removeTodo: function (index) {
				      this.todos.splice(index, 1)
				    }
				  }
				});

	export default {
		data: function() {
			return obj
		}
	}
</script>
