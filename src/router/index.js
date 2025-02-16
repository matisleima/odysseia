import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // Example: Import your Home component

const routes = [
  {
    path: '/', // The URL path
    name: 'homeRoute', // Give the route a name (optional, but good practice)
    component: HomeView // The component to render for this route
  },
]

const router = createRouter({
  history: createWebHashHistory(), // Use HTML5 history mode (recommended)
  routes
})

export default router