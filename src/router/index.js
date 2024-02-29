import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddExercise from '../views/AddExercise.vue'
import CreateProgram from '../views/CreateProgram.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/add-exercise',
    name: 'add-exercise',
    component: AddExercise
  },
  {
    path: '/create-program',
    name: 'create-program',
    component: CreateProgram
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
