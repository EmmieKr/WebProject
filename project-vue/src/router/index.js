import { createRouter, createWebHistory } from 'vue-router'
import ToDoList from '../views/ToDoList.vue'

const routes = [
  {
    path: '/',
    name: 'todolist',
    component: ToDoList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
