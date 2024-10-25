import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    name: "home",
    component: HomePage,
    path: "/"
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
