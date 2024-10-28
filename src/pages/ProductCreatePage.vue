<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const categories = ref([]);
const token = localStorage.getItem("token");

const productName = ref("");
const category = ref("");

onMounted(async () => {
  if (!token) {
    alert("You need to login first");
    router.push("/login");
  }

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:3000/categories", {
      headers: {
        "x-auth-token": `${token}`,
      },
    });
    console.log(res.data);

    console.log("Categories response:", res.data);
    categories.value = res.data;
  };

  await fetchCategories();
});

const handleCreate = async () => {
  console.log("Create product");
  const data = {
    name: productName.value,
    category: category.value,
  };

  const res = await axios.post("http://localhost:3000/products", data, {
    headers: {
      "x-auth-token": `${token}`,
    },
  });

  console.log(res);
};
</script>

<template>
  <h1>Create Product</h1>
  <label>Product Name</label>
  <input type="text" v-model="productName" placeholder="Product Name" />
  <label>Category Name</label>
  <select v-model="category">
    <option
      v-for="category in categories"
      :key="category._id"
      :value="category._id"
    >
      {{ category.name }}
    </option>
  </select>

  <button @click="handleCreate">Create Product</button>
</template>
