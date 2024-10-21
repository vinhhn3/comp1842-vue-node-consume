<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const text = ref("");

const token = localStorage.getItem("token");

onMounted(() => {
  if (!token) {
    alert("You need to login first");
    router.push("/login");
  }
});

const handleCreate = async () => {
  console.log("Create category");
  const res = await axios.post(
    "http://localhost:3000/categories",
    {
      name: text.value,
    },
    {
      headers: {
        "x-auth-token": `${token}`,
      },
    }
  );

  console.log(res.data);
};
</script>

<template>
  <button @click="router.push('/categories')">Go back</button>
  <h1>Create Category</h1>
  <label>Category Name</label>
  <input v-model="text" type="text" placeholder="Category Name" />
  <button @click.prevent="handleCreate">Create</button>
</template>
