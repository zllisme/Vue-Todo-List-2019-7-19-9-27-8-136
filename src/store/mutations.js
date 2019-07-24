//import axios from 'axios'
//let apiUrl = "http://5d38333af898950014c527cc.mockapi.io/api";

export default {
  addTodo (state, newTodo) {
    state.todos.unshift({
      title: newTodo,
      completed: false,
      editable: false
    });
  },
  setVisibility (state, str) {
    state.visibility = str;
  }
}
