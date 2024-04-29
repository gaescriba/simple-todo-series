<script setup>
      
  import { ref } from 'vue';

  import { useTasksStore }  from './stores/store.js';

  import Task from './components/Task.vue';

  const state = useTasksStore();
  const tasks = state["tasks"];
  console.log(state);

  let taskTitle = ref("");
  let taskDescription = ref("");

  let emptyFields = false

  //v1.0 no validation
  let addTask = () => {
    state.addTask(taskTitle.value, taskDescription.value);
    taskTitle.value = "";
    taskDescription.value = "";
  };

</script>

<template>
  <div class="main">
    <div class="input-task">
      <div class="input-task__title">
        <div class="input-task__title-text">
          Title 
        </div>
        <input type="text" class="border-solid border-2 border-black" v-model="taskTitle"/>
      </div>
      <div class="input-task__description">
        <div class="input-task__description-text">
          Description
        </div>
        <input type="text" class="border-solid border-2 border-black" v-model="taskDescription"/>
      </div>
      <button class="input-task__button border-solid border-2  border-sky-500" @click="addTask">
        Add
      </button>
      <div v-if="emptyFields">
        Wrong or empty fields, try again
      </div>
    </div>
    <div v-for="task in tasks">
      <Task :title="task.title" :description="task.description" :isCompleted="task.isCompleted"/>
    </div>
  </div>
</template>


