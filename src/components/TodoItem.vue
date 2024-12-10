<script setup lang="ts">
import type { Task } from "../@Types/Todos";
import { PropType } from "vue";

const props = defineProps({
  todo: {
    type: Object as PropType<Task>,
    required: true,
  },
});

const emit = defineEmits(["deleteTodo"]); // Déclaration de l'événement
</script>

<template>
  <div class="task">
    <div class="check_date">
      <input type="checkbox" v-model="todo.done" class="checkbox" />
      <p class="task-date">{{ new Date(todo.date).toLocaleString() }}</p>
    </div>

    <p :class="{ done: todo.done }" class="task-name">{{ todo.name }}</p>
    <button @click="emit('deleteTodo')" class="delete-button">Supprimer</button>
  </div>
</template>

<style scoped>
.task {
  display: flex;
  align-items: center;
  width: 600px;
  justify-content: space-between;
  padding: 15px 25px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.task p {
  text-align: center;
}

.check_date {
  display: flex;
  align-items: center;
}

.task:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.checkbox {
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
}

.task-name {
  flex: 1;
  font-size: 18px;
  color: #333;
  margin: 0;
  transition: color 0.3s ease;
}

.task-name.done {
  text-decoration: line-through;
  color: #aaa;
}

.task-date {
  font-size: 14px;
  color: #777;
  margin-left: 20px;
}

.delete-button {
  padding: 10px 15px;
  background-color: #ff5f5f;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.delete-button:hover {
  background-color: #e14e4e;
  transform: scale(1.05);
}

.delete-button:focus {
  outline: none;
}

.task p {
  margin: 0;
}
</style>
