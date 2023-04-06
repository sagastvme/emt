<template>
  <div>
  <form @submit.prevent="searchForPosts">
    <label for="search">Buscador</label>
    <input required id="search" type="text" class="border-black border" ref="query">
    <input class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline"  type="submit" value="search">
  </form>
  </div>




  <div v-if="results !== null">
    <table class="w-full border-collapse table-auto">
      <thead>
      <tr class="bg-gray-200 text-gray-700 uppercase text-sm font-semibold">
        <th class="py-2 px-3">Titulo</th>
        <th class="py-2 px-3">Fecha de creacion</th>
        <th class="py-2 px-3">Autor</th>
      </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
      <tr v-for="result in results" :key="result.id" class="border-b border-gray-200 hover:bg-gray-100">
        <a :href="'/read/'+result.category+'/'+result.title+'/'+result.id">

        <td class="py-2 px-3">{{ result.title }}</td>
        <td class="py-2 px-3">{{ result.date_created }}</td>
        <td class="py-2 px-3">{{ result.author }}</td>
          <td class="py-2 px-3">{{ result.category }}</td>
        </a>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ForumSearch",
  methods:{
    async searchForPosts(){
      const response= await axios.post('/searchPosts', {
        query:this.$refs.query.value
      })
      console.log(response)
      this.results=response.data

    }
  },
  data(){
    return{
      query:null,
      results:null

    }
  }
}
</script>

<style scoped>

</style>