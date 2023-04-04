<template>
  <div  v-if="showCategories">
  <table class="table-fixed w-full">
    <tbody>
    <tr v-for="category in categories" :key="category.id" class="bg-white hover:bg-gray-200" @click="showPosts(category.id)">
      <td class="px-4 py-2 border border-gray-300" >
        <h1 class="text-lg font-bold text-gray-800">{{ category.name }}</h1>
        <p class="mt-2 text-sm text-gray-600">{{ category.description }}</p>
      </td>
    </tr>
    </tbody>
  </table>
  </div>
  <div v-else>

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
  },
  methods:{
    async showPosts(id){
      const response=await axios.post('/showPosts', {
        category:id
      })
    console.log(response)
      this.showCategories=false
    }
  }

}
</script>

<style scoped>

</style>