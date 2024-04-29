import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: []
  }),
  actions: {
    addTask(taskTitle, TaskDescription){
      this.tasks.push({
        title: taskTitle,
        description: TaskDescription,
        isCompleted: false
      })
    },
    deleteTask(taskTitle){
      let deleteIndex = null
      for (let i = 0; i < this.tasks.length; i++){
        if(this.tasks[i].title == taskTitle){
          deleteIndex = i;
          break;
        }
      }
      this.tasks.splice(deleteIndex, 1);
    },
  }
})
