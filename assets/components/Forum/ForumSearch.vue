<template>
  <div class="my-8 mx-auto w-full max-w-md">
    <form @submit.prevent="searchForPosts" class="flex">
      <label for="search" class="sr-only">Buscador</label>
      <input required id="search" type="text" class="border border-gray-400 rounded-l py-2 px-4 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Buscar..." ref="query">
      <button type="submit" class="flex-shrink-0 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white text-base font-semibold py-2 px-4 rounded-r">
        Buscar
      </button>
    </form>

    <div v-if="results !== null" class="mt-8">
      <table class="w-full border-collapse table-auto">
        <thead>
        <tr class="bg-gray-200 text-gray-700 uppercase text-sm font-semibold">
          <th class="py-2 px-3">Titulo</th>
          <th class="py-2 px-3">Fecha de creacion</th>
          <th class="py-2 px-3">Autor</th>
          <th class="py-2 px-3">Categoria</th>
        </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
        <tr v-for="result in results" :key="result.id" class="border-b border-gray-200 hover:bg-gray-100">
          <td class="py-2 px-3"><a :href="'/read/'+result.category+'/'+result.title+'/'+result.id">{{ result.title }}</a></td>
          <td class="py-2 px-3">{{ result.date_created }}</td>
          <td class="py-2 px-3">{{ result.author }}</td>
          <td class="py-2 px-3">{{ result.category }}</td>
        </tr>
        </tbody>
      </table>
    </div>
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