import { createRouter, createWebHistory } from "vue-router"
import HomePage from "../pages/HomePage.vue";
import AuthTemplate from "../layouts/AuthTemplate.vue";
import LoginPage from "../pages/auth/LoginPage.vue";
import ForgotPassword from "../pages/auth/ForgotPassword.vue";
import DefaultTemplate from "../layouts/DefaultTemplate.vue";

const routes = [
  {
    path: "/",
    component: AuthTemplate,
    children: [
      {
        path: "",
        component: LoginPage,
        name: "auth.login"
      },
      {
        path: "forgot-password",
        component: ForgotPassword,
        name: "forgot.password"
      }
    ]
  },
  {
    path: "/admin",
    component: DefaultTemplate,
    children: [
      {
        path: "",
        component: HomePage,
        name: "admin.home"
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
