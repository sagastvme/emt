<template>
  <div  v-if="showCategories">
  <table class="table-fixed w-full">
    <tbody>
    <tr v-for="category in categories" :key="category.id" class="bg-white hover:bg-gray-200">
      <td class="px-4 py-2 border border-gray-300" >


        <a :href="'/show/' + category.name + '/' + category.id" class="text-lg font-bold text-gray-800">{{category.name}}</a>
        <p class="mt-2 text-sm text-gray-600">{{ category.description }}</p>
      </td>
    </tr>
    </tbody>
  </table>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "ForumCategories",
  props:['categories'],
  data(){
    return{
      showCategories:true
    }
  }

}
</script>

<style scoped>

</style>