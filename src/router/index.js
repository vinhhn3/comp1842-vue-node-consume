// src/router/index.js
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import { createRouter, createWebHistory } from "vue-router";
import Categories from "../pages/Categories.vue";
import CategoryDetailsPage from "../pages/CategoryDetailsPage.vue";
import CategoryEditPage from "../pages/CategoryEditPage.vue";
import CreateCategory from "../pages/CreateCategory.vue";
import ProductCreatePage from "../pages/ProductCreatePage.vue";
import Products from "../pages/Products.vue";

const routes = [
  // Auth routes
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  // Categories routes
  { path: "/categories", component: Categories },
  { path: "/categories/create", component: CreateCategory },
  { path: "/categories/:id", component: CategoryDetailsPage },
  { path: "/categories/edit/:id", component: CategoryEditPage },
  // Products routes
  { path: "/products", component: Products },
  { path: "/products/create", component: ProductCreatePage },

  { path: "/", redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
