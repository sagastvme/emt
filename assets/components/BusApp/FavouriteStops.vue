<template>
  <div class="bg-gray-100">
    <h2 class="text-3xl font-bold text-center py-8">Tus paradas favoritas</h2>
    <div v-if="dataExists" class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="overflow-x-auto">
        <table class="table-auto border-collapse border border-gray-500 w-full">
          <thead>
          <tr>
            <th class="px-4 py-2 text-left">Codigo de la parada</th>
            <th class="px-4 py-2 text-left hidden lg:block">Nombre de la parada</th>
            <th class="px-4 py-2 text-left">Nombre personalizado</th>
            <th class="px-4 py-2 text-left">Autobuses que paran ahi</th>
            <th class="px-4 py-2 text-left hidden lg:block">Numero de veces que has visitado la parada</th>
            <th class="px-4 py-2 text-left"></th>
          </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
          <tr v-for="stop in stopsArray" :key="stop.stopId">
            <teleport v-if="askConfirm" to="body">
              <confirm-message :message="'Estás seguro de que quieres borrar la parada ' +confirmStopId"
                               @close-error="this.askConfirm=false">
                <button @click="deleteStop(confirmStopId)" class="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600 transition-colors duration-300">SI</button>
                <button class="bg-gray-300 text-gray-700 font-bold py-1 px-3 ml-4 rounded hover:bg-gray-400 transition-colors duration-300" @click="this.askConfirm=false">NO</button>
              </confirm-message>
            </teleport>
            <td class="border px-4 py-2">{{ stop.stopId }}</td>
            <td class="border px-4 py-2 hidden lg:block">{{ stop.stopName }}</td>
            <td class="border px-4 py-2">{{ stop.customName }}</td>
            <td class="border px-4 py-2">
              <div class="flex flex-wrap gap-2">
                <span v-for="bus in stop.buses" class="bg-blue-200 rounded-full py-1 px-3">{{ bus }}</span>
              </div>
            </td>
            <td class="border px-4 py-2 hidden lg:block">{{ stop.timesVisited }}</td>
            <td class="border px-4 py-2">
              <button @click="confirmDeleteStop(stop.stopId)" class="bg-gray-200 hover:bg-gray-300 rounded-full p-2">
                <svg-delete class="w-6 h-6" />
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else class="text-center py-8">
      <p>Aun no tienes paradas favoritas</p>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import SvgDelete from "../SvgIcons/SvgDelete.vue";
import ConfirmMessage from "../Messages/ConfirmMessage.vue";

export default {
  components: {ConfirmMessage, SvgDelete},
  data() {
    return {
      dataExists: null,
      stopsArray: [],
      askConfirm: false
    }
  },
  mounted() {
    this.getFavouriteStops()
  },
  methods: {
    async getFavouriteStops() {
      const response = await axios.get('/askForUserFavourites');
      console.log(response.data.stopsArray);
      if (response.data.stopsArray !== 'Empty') {
        this.stopsArray = response.data.stopsArray
        console.log(response.data.stopsArray)
        this.dataExists = true;
      }
    },
    confirmDeleteStop(stopId) {
      this.askConfirm = true;
      this.confirmStopId = stopId;
    },
    async deleteStop(stop) {
      delete this.stopsArray[stop];
      if (Object.keys(this.stopsArray).length == 0) {
        this.dataExists = false;
      }
      console.log(stop)
      const response = await axios.post('/removeFavourite', {
        'busCode': stop
      })
      this.askConfirm = false;


    }
  }
}
</script>

<style scoped>

</style>