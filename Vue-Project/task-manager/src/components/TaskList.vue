<template>
    <div class="task-list">
        <h2>Task Manager</h2>
        <task-form @add-task="addTask" />
        <ul>
            <task-item
                v-for="task in tasks"
                :key="task.id"
                :task="task"
                @delete-task="deleteTask"
            />
        </ul>
    </div>
</template>

<script>
import TaskForm from "./TaskForm.vue";
import TaskItem from "./TaskItem.vue";

export default {
    name: 'TaskList',
    components: {
        TaskForm,
        TaskItem
    },
    data() {
        return {
            tasks: [],
        }
    },
    methods: {
        addTask(newTask) {
            this.tasks.push({
                ...newTask,
                id:Date.now(),
                completed: false,
            })
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id != id);
        }
    }
}
</script>