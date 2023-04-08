<template>
  <div>

    <h1>Tus paradas favoritas</h1>
    <div v-if="dataExists">
      <table>
        <thead>
        <tr>
          <th>Codigo de la parada</th>
          <th>Nombre de la parada</th>
          <th>Nombre personalizado</th>
          <th>Autobuses que paran ahi</th>
          <th>Numero de veces que has visitado la parada</th>
          <th></th>
        </tr>
        </thead>
        <tbody class="py-80">
        <tr v-for="stop in stopsArray" :key="stop" class="mb-8">
          <teleport v-if="askConfirm" to="body">
            <confirm-message :message="'Estás seguro de que quieres borrar la parada ' +confirmStopId"
                             @close-error="this.askConfirm=false">
              <button @click="deleteStop(confirmStopId)">SI</button>
              <button class="ml-8" @click="this.askConfirm=false">NO</button>
            </confirm-message>
          </teleport>
          <td>{{ stop.stopId }}</td>
          <td>{{ stop.stopName }}</td>
          <td>{{ stop.customName }}</td>
          <td>
      <span v-for="bus in stop.buses" class="bg-blue-200 rounded-full py-1 px-3">
        {{ bus }}
      </span>
          </td>
          <td>{{ stop.timesVisited }}</td>
          <td>
            <button @click="confirmDeleteStop(stop.stopId)">
              <svg-delete/>
            </button>
          </td>
        </tr>
        </tbody>


      </table>


    </div>

    <div v-else>
      <p>Aun no tienes paradas favoritas</p>
    </div>


  </div>
</template>

<script>
import axios from "axios";
import SvgDelete from "./SvgIcons/SvgDelete.vue";
import ConfirmMessage from "./ConfirmMessage.vue";

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