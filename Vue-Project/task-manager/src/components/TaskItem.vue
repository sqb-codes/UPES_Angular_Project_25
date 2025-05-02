<template>
    <li>
        <span>{{ task.text }}</span>
        <button @click="deleteTask">Delete Task</button>
    </li>
</template>

<script>
export default {
    name: 'TaskItem',
    props: {
        task: Object
    },
    methods: {
        deleteTask() {
            this.$emit('delete-task', this.task.id);
        }
    }
}
</script>