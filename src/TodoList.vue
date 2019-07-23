<template>
  <div id="app">
      <Header></Header>
      <Body :list="filteredTodos" @push="addTodo"></Body>
      <Footer :dataFilter="visibility" @change="changeVisibility"></Footer>
  </div>
</template> 

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Body from './components/Body.vue';

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

export default {
    name: 'app',
    components: {
        Header, Footer, Body
    },
    data() {
        return {
            todos: window.todoStorage.fetch(),
            visibility
        };
    },
    watch: {
        todos: {
            deep: true,
            handler: window.todoStorage.save
        }
    },
    computed: {
        filteredTodos() {
            return filters[this.visibility](this.todos);
        }
    },
    methods: {
        addTodo(newTodo) {
            this.todos.unshift({
                title: newTodo,
                computed: false,
                editable: false
            });
        },
        changeVisibility(value) {
            this.visibility = value;

        }
    }

}
  
</script>

<style>
body {
    font: normal normal 13px/16px "Open Sans", sans-serif;
    background: #ccc;
}
#app {
    padding: 20px;
    width: 400px;
    margin: 0 auto;
    margin-top: 40px;
    background: white;
    border-radius: 5px;
}
</style>

