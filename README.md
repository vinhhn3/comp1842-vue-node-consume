# comp1842-vue-node-consume

For this project, we will develop Vue Application and use the Node API from the first classes to build Front End - Back End application.

The Front End Application will have at least following pages

**ADMIN ROLE**

- Login Page
- Register Page
- Category section
  - List all categories Page
  - Create new Category Page
  - Category Details Page
- Product section
  - See all products
  - Crate new Product Page
  - Product Details Page

**CUSTOMER ROLE**

- Product Section
  - See all products
  - Find Product by Category Name
- Cart Page

For this application, we will use Tailwind CSS for CSS Framework: https://v2.tailwindcss.com/docs/guides/vue-3-vite

Make sure to create following project structure

```bash
src
|-- components
|-- pages
|-- layout
|-- router
|-- api
```

# Create Basic Layout with Vue Router

1. Install Vue Router

Run the following command in the terminal:

```bash
npm install vue-router@4
```

```vue
<!-- src/layout/AppLayout.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md">
      <!-- Main Content -->
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional setup required
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
```

```js
// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";

const routes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/", redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

```vue
<!-- src/pages/Login.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button>
        <router-link
          to="/register"
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
          Register
        </router-link>
      </div>
    </form>
  </div>
</template>
```

```vue
<!-- src/pages/Register.vue -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Register</h1>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Register
        </button>
        <router-link
          to="/login"
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
          Login
        </router-link>
      </div>
    </form>
  </div>
</template>
```

```js
// src/main.js
import "./assets/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

createApp(App).use(router).mount("#app");
```

Project structure:

```bash
src
|-- api
|-- components
|-- layout
|   |-- AuthLayout.vue
|-- pages
|   |-- Login.vue
|   |-- Register.vue
|-- router
|   |-- index.js
|-- main.js
|-- index.css
```
