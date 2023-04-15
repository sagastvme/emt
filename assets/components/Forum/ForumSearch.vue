<template>
  <div class="my-8 mx-auto w-full  ">
    <form class="flex flex-col text-5xl lg:text-xl" @submit.prevent="searchForPosts">
      <input id="search" ref="query" class="w-full border border-gray-400 rounded-l py-2 px-3 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
             placeholder="Hoy voy a tener suerte"
             required type="text">
      <button class="mx-auto  bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white  font-semibold py-2 px-3 rounded-md mt-2"
              type="submit">
        <span>Buscar</span>
      </button>
    </form>

    <div v-if="results.length>0 && dataReceived" class="mt-8">
      <table class="w-full border-collapse table-auto text-4xl lg:text-xl">
        <thead>
        <tr class="text-white px-3 py-2 border border-black text-5xl lg:text-xl bg-[#616163]">
          <th class="py-2 px-3">Titulo</th>
          <th class="py-2 px-3 hidden lg:table-cell">Fecha de creacion</th>
          <th class="py-2 px-3 hidden lg:table-cell">Autor</th>
          <th class="py-2 px-3 hidden lg:table-cell">Categoria</th>
        </tr>
        </thead>
        <tbody class="bg-gray-300 font-light">
        <tr v-for="result in results" :key="result.id" class="font-semibold border border-black">
          <td class="py-2 px-3"><a :href="'/read/'+result.category+'/'+result.title+'/'+result.id">{{ result.title }}</a></td>
          <td class="py-2 px-3 hidden lg:table-cell">{{ result.date_created }}</td>
          <td class="py-2 px-3 hidden lg:table-cell">{{ result.author }}</td>
          <td class="py-2 px-3 hidden lg:table-cell">{{ result.category }}</td>
        </tr>
        </tbody>

      </table>
    </div>
    <div v-else-if="dataReceived && results.length==0" class="flex justify-center items-center mt-14">
      <h3 class="text-6xl font-bold text-center text-red-600 p-8 bg-white shadow-lg rounded-lg lg:text-xl">
        No se encontraron resultados
      </h3>
    </div>
  </div>

</template>


<script>
import axios from "axios";

export default {
  name: "ForumSearch",
  methods: {
    async searchForPosts() {
      const response = await axios.post('/searchPosts', {
        query: this.$refs.query.value
      })
      console.log(response)
      this.results = response.data
      this.dataReceived = true
    }
  },
  data() {
    return {
      query: null,
      results: [],
      dataReceived: false

    }
  }
}
</script>

<style scoped>

</style>