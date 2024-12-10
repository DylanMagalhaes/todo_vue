<script setup lang="ts">
import TodoItem from "./TodoItem.vue";
import type { Task } from "../@Types/Todos";
import { PropType } from "vue";

const props = defineProps({
  todos: {
    type: Array as PropType<Task[]>,
    required: true,
  },
});

const emit = defineEmits(["update:todos"]);

const deleteTask = (index: number) => {
  const updatedTodos = [...props.todos];
  updatedTodos.splice(index, 1);
  emit("update:todos", updatedTodos);
};
</script>

<template>
  <div class="tasks">
    <ul v-if="todos.length > 0">
      <li v-for="(task, index) in todos" :key="index" class="task-item">
        <TodoItem :todo="task" @deleteTodo="deleteTask(index)" />
      </li>
    </ul>
    <div v-else class="no-tasks-message">Aucune tâche pour le moment</div>
  </div>
</template>

<style scoped>
.tasks {
  margin-top: 1rem;
  padding: 0 15px;
}

.task-item {
  list-style: none;
  margin-bottom: 12px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.task-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.no-tasks-message {
  font-size: 16px;
  color: #888;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
}

ul {
  padding: 0;
  margin: 0;
}
</style>
