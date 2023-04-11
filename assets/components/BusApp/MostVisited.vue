<template>
  <div class="flex items-center justify-center">
    <div class="w-full p-4 mb-10">
    <h2 class="text-3xl font-bold text-center ">Top 10 paradas más visitadas</h2>
      <div class="overflow-x-auto">
      <table class="w-full table-auto mt-2">
      <thead class="bg-gray-200">
      <tr>
        <th class="border border-gray-400 py-2 px-3">Código de parada</th>
        <th class="border border-gray-400 py-2 px-3">Veces visitada</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="stop in stopsArray" :key="stop.stopId">
        <td class="border border-gray-400 py-2 px-3">{{ stop.stopId }}</td>
        <td class="border border-gray-400 py-2 px-3">{{ stop.timesVisited }}</td>
      </tr>
      </tbody>
    </table>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.getMostVisited();
  },
  data(){
    return {
      stopsArray:[]
    }
  },
  methods: {
   async getMostVisited() {
     console.log('lo llamo')
      const response=await axios.get('/getMostVisited');
      this.stopsArray=(response.data.stopsArray)
     console.log(response.data.stopsArray)
   }
  }
}
</script>

<style scoped>

</style>