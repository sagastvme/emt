<template>

  <div class="flex flex-col items-center w-4/5">
    <div class="w-full px-4 py-8">
      <h2 class="flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl">
      <svg-trophy class="w-52 h-52"/>
      </h2>


      <div class="overflow-x-auto w-full mt-20">
        <table class="w-full mt-4 table-auto ">
          <thead class="bg-gray-200 rounded">
          <tr>
            <th class="text-white px-3 py-2 border border-black text-5xl bg-[#616163] ">Parada</th>
            <th class="text-white px-3 py-2 border border-black text-5xl bg-[#616163]">Veces visitada</th>
          </tr>
          </thead>
          <tbody >
          <tr   v-for="stop in stopsArray" :key="stop.stopId" class="bg-gray-300 rounded ">
            <td class=" py-6 font-semibold border border-black  text-center text-5xl">{{ stop.stopId }}</td>
            <td class="py-6 font-semibold border border-black  text-center text-5xl">{{ stop.timesVisited }}</td>
          </tr>
          </tbody>
        </table>

    </div>
  </div>
  </div>


</template>

<script>
import axios from 'axios';
import SvgTrophy from "../SvgIcons/SvgTrophy.vue";

export default {
  components: {SvgTrophy},
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