import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => {
    tasksList: [
      {
        id: 0,
        title: 'walk some',
        description: 'walk some shi damn boi you lazy af'
        isCompleted: false
      },
      {
        id: 1,
        title: 'read some',
        description: 'read some shi damn boi you lazy af'
        isCompleted: true 
      }
    ]
  }
  return { tasks }
})
