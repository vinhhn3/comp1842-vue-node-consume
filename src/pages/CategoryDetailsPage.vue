<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const category = ref({});

const router = useRouter();
const route = useRoute();

onMounted(async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("You need to login first");
    router.push("/login");
  }

  const id = route.params.id;

  const res = await axios.get(`http://localhost:3000/categories/${id}`, {
    headers: {
      "x-auth-token": `${token}`,
    },
  });

  console.log("Category response:", res.data);
  category.value = res.data;
});
</script>

<template>
  <h1>Category Details</h1>
  <p>Category Id: {{ category._id }}</p>
  <p>Category Name: {{ category.name }}</p>
</template>
