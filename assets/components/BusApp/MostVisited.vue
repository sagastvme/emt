<template>
  <div class="bg-gray-100">
  <div class="flex flex-col items-center">
    <div class="w-full px-4 py-8">
      <h2 class="text-6xl font-bold text-center">Las 10 paradas más visitadas</h2>
      <div class="overflow-x-auto w-full mt-20">
        <table class="w-full mt-4 table-auto ">
          <thead class="bg-gray-200">
          <tr>
            <th class="px-3 py-2 border border-gray-400 text-4xl ">Parada</th>
            <th class="px-3 py-2 border border-gray-400 text-4xl">Veces visitada</th>
          </tr>
          </thead>
          <tbody >
          <tr   v-for="stop in stopsArray" :key="stop.stopId">
            <td class="py-6 font-semibold border border-gray-400  text-center text-4xl">{{ stop.stopId }}</td>
            <td class="py-6 font-semibold border border-gray-400  text-center text-4xl">{{ stop.timesVisited }}</td>
          </tr>
          </tbody>
        </table>
      </div>
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