<!-- src/pages/Login.vue -->

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const router = useRouter(); // Vue router instance to redirect to /categories

const handleLogin = async () => {
  const data = {
    username: username.value,
    password: password.value,
  };

  try {
    const res = await axios.post("http://localhost:3000/auth/login", data);
    console.log("Login successful:", res.data.token);
    localStorage.setItem("token", res.data.token); // Save token to local storage for future requests
    localStorage.setItem("username", username.value); // Save username to local storage for future requests

    // Redirect to /Categories page with vue-router
    router.push("/categories");
  } catch (error) {
    console.error("Error during login:", error);
    alert("Login failed. Please try again.");
  }
};
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          v-model="username"
          placeholder="Username"
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
          v-model="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click.prevent="handleLogin"
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
