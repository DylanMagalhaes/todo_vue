<script setup lang="ts">
import type { Task } from "../@Types/Todos";
import { PropType, ref, defineEmits } from "vue";

const newTask = ref("");

const props = defineProps({
  todos: {
    type: Array as PropType<Task[]>,
    required: true,
  },
});

const emit = defineEmits(["update:todos"]); // Définition de l'émission d'événements

const addNewTask = () => {
  if (newTask.value.trim() === "") return;

  const taskToAdd: Task = {
    name: newTask.value,
    date: Date.now(),
    done: false,
  };

  emit("update:todos", [...props.todos, taskToAdd]); // Mise à jour des tâches
  newTask.value = "";
};
</script>

<template>
  <form @submit.prevent="addNewTask" class="task-form">
    <input
      type="text"
      placeholder="Ajouter une tâche"
      v-model="newTask"
      class="task-input"
      aria-label="Nouvelle tâche"
    />
    <button type="submit" class="submit-button">Ajouter</button>
  </form>
</template>

<style scoped>
.task-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.task-input {
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;
}

.task-input:focus {
  border-color: #4e9af1;
}

.submit-button {
  padding: 12px 16px;
  background-color: #4e9af1;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #357ab7;
}

.submit-button:focus {
  outline: none;
}

.task-form input,
.task-form button {
  transition: transform 0.2s ease;
}

.task-form input:focus,
.task-form button:hover {
  transform: scale(1.05);
}
</style>
