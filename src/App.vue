<template>
  <div id="todoApp">
    <header>
      <h1>Jquery To Do List</h1>
      <h3>Simple Todo List with adding and filter by diff status.</h3>
      <input type="text" v-model="newTodo"><button @click="addTodo">add</button>
    </header>
    <section class="main" v-show="showTodos">
      <ol class="todo-list">
        <li
          v-for="(todo, index) in filteredTodos"
          :key="index"
          :class="{completed: todo.completed}"
        >
          <div class="view">
            <input type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{todo.title}}</label>
          </div>
        </li>
      </ol>
    </section>
    <footer class="footer" v-show="showTodos">
      <section class="filters">
        <a href="#/" :class="{ selected: visibility === 'all' }" @click="visibility='all'">all</a><span></span>
        <a href="#/active" :class="{ selected: visibility === 'active' }" @click="visibility='active'">active</a><span></span>
        <a href="#/completed" :class="{ selected: visibility === 'completed'}" @click="visibility='completed'">completed</a>
      </section>
    </footer>
  </div>
</template> 


<script>
let filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.completed),
  completed: todos => todos.filter(todo => todo.completed)
}
let visibility =location.hash.substr(location.hash.indexOf('/') + 1);
visibility = visibility === '' ? 'all' : visibility;


let STORAGE_KEY = 'todos';
window.todoStorage = {
  fetch() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch(err) { 
      return [];
    }
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};
localStorage.removeItem(STORAGE_KEY);

export default {
  name: 'toDoApp',
  data: function() {
    return {
      newTodo: '',
      todos: window.todoStorage.fetch(),
      editedTodo: null,
      beforeEditCache: '',
      visibility
    };
  },
  computed: {
    showTodos() {
      return this.todos.length > 0;
    },
    activeCount() {
      return filters.active(this.todos).length;
    },
    completedCount() {
      return filters.completed(this.todos).length;
    },
    filteredTodos() {
      return filters[this.visibility](this.todos);
    }

  },
  watch: {
    todos: {
      deep: true,
      handler: window.todoStorage.save
    }
  },
  methods: {
    addTodo() {
      this.newTodo = this.newTodo.trim();
      if(!this.newTodo) {
        return;
      }
      this.todos.unshift({
        title: this.newTodo,
        computed: false
      });
      this.newTodo = '';
    },
    removeTodo(todo) {
      let index  = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
      this.editedTodo = todo;
      this.beforeEditCache = todo.title;
    },
    doneEdit(todo) {
      if(!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if(!todo.title) {
        this.removeTodo(todo);
      }
    }, 
    cancelEdit(todo) {
      if(this.editedTodo) {
        todo.title = this.beforeEditCache;
        this.editedTodo = null;
      }
    }
  }
}
</script>

<style>
body {
  background-color: gray;
}
#todoApp {
  background-color: white;
  display: inline-block;
  height: 500px;
  width: 600px;
  margin: 0px auto;

}
a {
  color: hotpink;
}
button {
  color: hotpink;
}
</style>



