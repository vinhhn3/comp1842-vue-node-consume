// src/router/index.js
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import { createRouter, createWebHistory } from "vue-router";
import Categories from "../pages/Categories.vue";
import CategoryDetailsPage from "../pages/CategoryDetailsPage.vue";
import CreateCategory from "../pages/CreateCategory.vue";

const routes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/categories", component: Categories },
  { path: "/categories/create", component: CreateCategory },
  { path: "/categories/:id", component: CategoryDetailsPage },
  { path: "/", redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
