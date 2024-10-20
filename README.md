# Modify the App Layout to Full Screen

```vue
<!-- src/layout/AppLayout.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Navbar />
    <div class="flex-grow flex items-center justify-center">
      <div class="w-full max-w-md">
        <!-- Main Content -->
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
```

Add `Navbar` component

```vue
<!-- src/components/Navbar.vue -->
<template>
  <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white font-bold text-xl">MyApp</div>
      <div>
        <router-link to="/" class="text-white mr-4">Home</router-link>
        <router-link to="/about" class="text-white">About</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No additional setup required
</script>

<style scoped>
/* Add your styles here */
</style>
```
