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
