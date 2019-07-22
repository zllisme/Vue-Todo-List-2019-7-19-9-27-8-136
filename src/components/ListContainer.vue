<template>
    <div id="ListContainer">
        <ol class="todo-list">
          <li
            v-for="(item, index) in list"
            :key="index"
            :class="{completed: item.completed}"
          >
            <input type="checkbox" v-model="item.completed">
            <label @dblclick="editTodo(item)">{{item.title}}</label>
          </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "ListContianer",
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    mounted(){
      console.log(this.list);

    }
}
</script>

