<template>
  <div class="bg-gray-100 w-full mx-14 rounded-lg">
    <h2 class="text-7xl font-bold text-center py-8">Tus paradas favoritas</h2>
    <div v-if="dataExists" class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="overflow-x-auto">
        <table class="table-auto border-collapse  w-full">
          <thead>
          <tr>
            <th class="px-3 py-2 text-center text-4xl">Parada</th>
           <th class="px-3 py-2 text-center text-4xl">Nombre</th>
            <th class="px-3 py-2 text-center text-4xl">Autobuses</th>
           <th class="px-3 py-2 text-center"></th>
          </tr>
          </thead>
          <tbody class="">
          <tr v-for="stop in stopsArray" :key="stop.stopId">
            <teleport v-if="askConfirm" to="body">
              <confirm-message :message="'Estás seguro de que quieres borrar la parada ' +confirmStopId"
                               @close-error="this.askConfirm=false">
                <button @click="deleteStop(confirmStopId)" class="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600 transition-colors duration-300">SI</button>
                <button class="bg-gray-300 text-gray-700 font-bold py-1 px-3 ml-4 rounded hover:bg-gray-400 transition-colors duration-300" @click="this.askConfirm=false">NO</button>
              </confirm-message>
            </teleport>
            <td class="border px-3 py-2 text-center text-3xl">{{ stop.stopId }}</td>

            <td class="border px-3 py-2 text-center text-3xl">{{ stop.customName }}</td>
            <td class="border px-3 py-2 ">
              <div class="flex flex-wrap gap-2">
                <span v-for="bus in stop.buses" class="text-3xl bg-blue-200 rounded-full h-14 pt-2 pb-10 px-3">{{ bus }}</span>
              </div>
            </td>


            <td class="border px-3 py-2 text-center">
              <button @click="confirmDeleteStop(stop.stopId)" class="bg-gray-200 hover:bg-gray-300 rounded-full p-2">
                <svg-delete class="w-8 h-8" />
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