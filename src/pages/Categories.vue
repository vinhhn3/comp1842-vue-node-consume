<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const categories = ref([]);

onMounted(async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("You need to login first");
    router.push("/login");
  }

  // Make the api request with axios with token in header
  const res = await axios.get("http://localhost:3000/categories", {
    headers: {
      "x-auth-token": `${token}`,
    },
  });

  console.log("Categories response:", res.data);
  categories.value = res.data;
});

const createCategory = () => {
  console.log("Create category");
};

const editCategory = (id) => {
  console.log("Edit category");
};

const deleteCategory = (id) => {
  console.log("Delete category");
};

const viewDetails = (id) => {
  console.log("View details");
};
</script>

<template>
  <div class="container mx-auto p-4">
    <!-- Create Category Button -->
    <div class="flex mb-4">
      <button class="btn-primary" @click="createCategory">
        Create Category
      </button>
    </div>

    <!-- Categories Table -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">ID</th>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category._id">
            <td class="py-2 px-4 border-b">{{ category._id }}</td>
            <td class="py-2 px-4 border-b">{{ category.name }}</td>
            <td class="py-2 px-4 border-b">
              <button class="btn-edit" @click="editCategory(category._id)">
                Edit
              </button>
              <button class="btn-delete" @click="deleteCategory(category._id)">
                Delete
              </button>
              <button class="btn-details" @click="viewDetails(category._id)">
                Details
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600;
}
.btn-edit {
  @apply bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mx-1;
}
.btn-delete {
  @apply bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mx-1;
}
.btn-details {
  @apply bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mx-1;
}
</style>
