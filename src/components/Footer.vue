<template>
<div>
    <ul id="filters">
        <li>
            <a href="#/" :class="{ selected: dataFilter === 'all' }" @click="changeDataFilter('all')">ALL</a>
        </li>
        <li>
            <a href="#/active" :class="{ selected: dataFilter === 'active' }" @click="changeDataFilter('active')">Active</a>
        </li>
        <li>
            <a href="#/completed" :class="{ selected: dataFilter === 'completed'}" @click="changeDataFilter('completed')">Complete</a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "Footer",
    props: {
        dataFilter: String
    },
    methods: {
        changeDataFilter(str) {
            this.$emit("change", str);
        }
    }
}
</script>
