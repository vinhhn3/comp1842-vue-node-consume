<!-- src/pages/Register.vue -->
<script setup>
import axios from "axios";
import { ref } from "vue";

const username = ref("");
const password = ref("");
const role = ref("admin"); // Default role is admin

const register = async () => {
  try {
    const response = await axios.post("http://localhost:3000/auth/register", {
      username: username.value,
      password: password.value,
      role: role.value,
    });
    console.log("Registration successful:", response.data);
    alert("Registration successful!");
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Register</h1>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="username"
          id="email"
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
          v-model="password"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="role">
          Role
        </label>
        <select
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="role"
          id="role"
        >
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click.prevent="register"
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
