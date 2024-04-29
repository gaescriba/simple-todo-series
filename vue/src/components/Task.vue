<script setup>

  import { useTasksStore } from '../stores/store.js'

  const state = useTasksStore();

  const props = defineProps([
    'title',
    'description',
    'isCompleted'
  ])

  const deleteTask = title => state.deleteTask(title);
</script>

<template>
  <div class="border border-solid border-black ">
    <div class="card__title">
      {{title}}
    </div>
    <div class="card__description">
      {{description}}
    </div>
    <div v-if="isCompleted">
      Completado
    </div>
    <div v-else>
      No completado
    </div>
    <button @click="deleteTask(title)">X</button>
   </div>
  </template
