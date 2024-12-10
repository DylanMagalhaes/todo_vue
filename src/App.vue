<script setup lang="ts">
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import { Task } from "../@Types/Todos";
import { ref } from "vue";

const tasks = ref<Task[]>([]);
</script>

<template>
  <div class="app">
    <h1 id="title">Todo List</h1>
    <TodoInput v-model:todos="tasks" />
    <TodoList v-model:todos="tasks" />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
/* @media screen and (min-width: 640px) {
  .app {
    background-color: rgb(151, 7, 7);
  }
} */
</style>
