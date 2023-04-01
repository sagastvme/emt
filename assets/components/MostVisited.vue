<template>
  <div class="flex justify-center">
  <h2 class="mb-3">Top 10 paradas mas visitadas</h2>
  <table>
    <tr v-for="stop in stopsArray">
      <td>Codigo de la parada: {{ stop.stopId }}</td>
      <td>Veces visitada: {{ stop.timesVisited }}</td>
    </tr>
  </table>
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