export default {
  addTodo (state, newTodo) {
    state.todos.unshift({
      title: newTodo,
      computed: false,
      editable: false
    });
  },
  setVisibility (state, str) {
    state.visibility = str;
  }
}
