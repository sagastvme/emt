<template>

  <div class="flex flex-col items-center w-4/5">
    <div class="w-full px-4 py-8 lg:py-0">
      <h2 class="flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl lg:hidden  lg:text-xl">
      <svg-trophy class="w-52 h-52"/>
      </h2>


      <div class="overflow-x-auto w-full mt-20 lg:mt-8">
        <table class="w-full mt-4 table-auto lg:mt-0">
          <thead class="bg-gray-200 rounded">
          <tr>
            <th class=" px-3 py-2 lg:py-0 border   lg:text-xl ">Parada</th>
            <th class=" px-3 py-2  text-5xl  lg:text-xl">Veces visitada</th>
          </tr>
          </thead>
          <tbody >
          <tr   v-for="stop in stopsArray" :key="stop.stopId" class="bg-gray-300  ">
            <td class=" py-6 font-semibold   text-center text-5xl lg:py-1 lg:text-xl">{{ stop.stopId }}</td>
            <td class="py-6 lg:py-0 font-semibold  text-center text-5xl lg:py-1 lg:text-xl">{{ stop.timesVisited }}</td>
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