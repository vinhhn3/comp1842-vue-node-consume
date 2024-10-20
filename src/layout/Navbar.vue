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
