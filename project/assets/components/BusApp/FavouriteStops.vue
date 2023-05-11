<template>
  <div class="bg-gray-100 w-full mx-14 rounded-lg lg:mt-8">
    <h2 class="flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl lg:hidden">
      <svg-star-full class="w-52 h-52"/> </h2>
    <!-- <h2 class="flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl">
      <svg-trophy class="w-52 h-52"/>
      </h2>-->
    <div v-if="dataExists" class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="overflow-x-auto">
        <table class="table-auto border-collapse  w-full">
          <thead>
          <tr>
            <th class="px-3 py-2 text-center text-4xl lg:text-xl">Parada</th>
           <th class="px-3 py-2 text-center text-4xl lg:text-xl">Nombre</th>
            <th class="px-3 py-2 text-center text-4xl lg:text-xl">Autobuses</th>
           <th class="px-3 py-2 text-center"></th>
          </tr>
          </thead>
          <tbody class="">
          <tr v-for="stop in stopsArray" :key="stop.stopId">
            <teleport v-if="askConfirm" to="body">
              <confirm-message class="text-3xl" :message="'Estás seguro de que quieres borrar la parada ' +confirmStopId"
                               @close-error="this.askConfirm=false">
                <button @click="deleteStop(confirmStopId)"
                        class="lg:text-xl text-center text-4xl bg-red-500 text-white font-bold py-2 px-3 rounded hover:bg-red-600
                        transition-colors duration-300">SI</button>
                <button class="lg:text-xl bg-gray-300 text-gray-700 font-bold text-4xl text-center py-2
                 px-3 ml-4 rounded hover:bg-gray-400 transition-colors duration-300" @click="this.askConfirm=false">NO</button>
              </confirm-message>
            </teleport>
            <td class="border px-3 py-2 text-center text-3xl lg:text-xl">{{ stop.stopId }}</td>

            <td class="border px-3 py-2 text-center text-3xl lg:text-xl">{{ stop.customName }}</td>
            <td class="border px-3 py-2 ">
              <div class="flex flex-wrap gap-2">
                <span v-for="bus in stop.buses"
                      class="lg:text-xl text-3xl bg-blue-200 rounded-full h-14 pt-2 pb-10 px-3 lg:h-8">{{ bus }}</span>
              </div>
            </td>


            <td class="border px-3 py-2 text-center">
              <button @click="confirmDeleteStop(stop.stopId)" class="bg-gray-200 hover:bg-gray-300 rounded-full p-2">
                <svg-delete class="w-8 h-8 lg:w-4 lg:h-4" />
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else class="text-center text-5xl py-8 lg:text-xl ">
      <p>Aun no tienes paradas favoritas</p>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import SvgDelete from "../SvgIcons/SvgDelete.vue";
import ConfirmMessage from "../Messages/ConfirmMessage.vue";
import SvgStarFull from "../SvgIcons/SvgStarFull.vue";

export default {
  components: {SvgStarFull, ConfirmMessage, SvgDelete},
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