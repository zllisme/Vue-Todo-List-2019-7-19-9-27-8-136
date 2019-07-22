<template>
    <div id="InputBar">
        <input 
        type="text" 
        class="input-text"
        v-model="newTodo"
        @keydown.enter="handleClickAdd"
        >
        <button @click="handleClickAdd">add</button>
    </div>
</template>

<script>
export default {
    name: "InputBar",
    data() {
        return {
            newTodo: ''
        };
    },
    methods: {
        handleClickAdd() {
            if(!this.newTodo) {
                return;
            }
            let todo = this.newTodo;
            this.$emit("push", todo);
            this.newTodo = '';
        }
    }
};
</script>

<style>
.inputText {
    width: 200px;
    margin-right: 10px;
}
button {
    background-color: pink;
    color: white;
}

</style>


