<template>
  <table class="table-fixed w-full">
    <tbody>
    <tr v-for="category in categories" class="bg-white hover:bg-gray-200">
      <td class="px-4 py-2 border border-gray-300">
        <h1 class="text-lg font-bold text-gray-800">{{ category.name }}</h1>
        <p class="mt-2 text-sm text-gray-600">{{ category.description }}</p>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "ForumCategories",
  props:['categories']

}
</script>

<style scoped>

</style>