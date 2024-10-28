<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const text = ref("");
const route = useRoute();
const router = useRouter();

const handleEdit = async () => {
  console.log("Edit category");
  const res = await axios.put(
    `http://localhost:3000/categories/${route.params.id}`,
    {
      name: text.value,
    },
    {
      headers: {
        "x-auth-token": `${localStorage.getItem("token")}`,
      },
    }
  );
};
</script>

<template>
  <button @click="router.push('/categories')">Go back</button>
  <h1>Create Category</h1>
  <label>Category Name</label>
  <input v-model="text" type="text" placeholder="Category Name" />
  <button @click="handleEdit">Edit</button>
</template>
