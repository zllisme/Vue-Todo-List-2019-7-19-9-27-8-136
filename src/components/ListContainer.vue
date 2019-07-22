<template>
    <div id="ListContainer">
        <ol class="todo-list">
          <li
            v-for="(item, index) in list"
            :key="index"
            :class="{completed: item.completed}"
          >
            <input type="checkbox" v-model="item.completed" :class="{ done: item.completed }">
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

<style>
.completed {
    color: #999;
    text-decoration: line-through;
}

.done {
    color: #999;
    text-decoration: line-through;
}

 input[type=checkbox].done { 
	
    margin: 5px 5px 2px 0; 
}

ol {
    padding-left: 20px;
}

ol li {
    padding: 5px;color:#000;
}

ol li span{
    word-break:break-all; 
    width: 70%;
}

ol li:nth-child(even){
    background: #f4ecec;
}

li:hover{
  cursor: pointer;
 }

</style>


