<template>
    <div class="task-form">
        <input 
            v-model="taskText"
            placeholder="Enter Task Title"/>
        
        <button @click="addTask">Add Task</button>
    </div>
</template>

<script>
export default {
    name: 'TaskForm',
    data() {
        return {
            taskText: ""
        };
    },
    methods: {
        addTask() {
            if(this.taskText.trim()) {
                this.$emit('add-task', {text:this.taskText.trim()});
                this.taskText = '';
            }
        }
    }
}
</script>