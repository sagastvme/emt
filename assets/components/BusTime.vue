<template>
  <div class="grid-cols-3">
    <h2 class="flex-row">Introduzca el codigo de su parada para conocer el tiempo que le queda a su autobus</h2>
    <form class="select-none" @submit.prevent="submitData">
      <div>
        <div>
          <label class="flex-row" for="bus">Codigo de la parada</label>
          <input id="bus" ref="busInput" v-model.number="busCode" class=" flex-row border-2 border-black rounded"
                 required type="number">
          <button v-if="!isBusCodeNegative" class="flex-row">
            <svg-search v-if="!loading"/>
          </button>
          <error-message v-else v-if="showErrorMessage" message="El numero debe ser mayor que 1"
                         @close-error="showErrorMessage=false"></error-message>


          <div class="parent">
            <div v-if="loading" class="spinner"></div>
          </div>
        </div>
      </div>
    </form>
    <div v-if="dataRecovered && !stopDoesntExist" class="select-none">

      <button @click="showStopDetails">
        <h2> Info de la parada
          <svg-eye-closed v-if="showStopDetailsVariable"/>
          <svg-eye-opened v-else/>
        </h2>

      </button>

      <div v-if="showStopDetailsVariable " id="busStopInfo" class="parent">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-500">
              <thead>
              <tr>
                <th class="px-4 py-2 text-left">Nombre de la parada</th>
                <th class="px-4 py-2 text-left">Direccion de la parada</th>
                <th class="px-4 py-2 text-left">Codigo de la parada</th>
                <th class="px-4 py-2 text-left">Numero de lineas</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="border px-4 py-2">{{ this.busStopInfo.stops[0].name }}</td>
                <td class="border px-4 py-2">{{ this.busStopInfo.stops[0].postalAddress }}</td>
                <td class="border px-4 py-2">{{ this.busStopInfo.stops[0].stop }}</td>
                <td class="border px-4 py-2">{{ this.busStopInfo.stops[0].dataLine.length }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-500">
              <thead>
              <tr>
                <th class="px-4 py-2 text-left">Lineas</th>
                <th class="px-4 py-2 text-left">Direccion</th>
                <th class="px-4 py-2 text-left">Tiempo medio de llegada</th>
                <th class="px-4 py-2 text-left">Hora de inicio</th>
                <th class="px-4 py-2 text-left">Hora de finalizacion</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="stop in this.busStopInfo.stops[0].dataLine" :key="stop">
                <td class="border px-4 py-2">{{ stop.label }}</td>
                <td class="border px-4 py-2">{{ stop.direction === 'A' ? stop.headerA : stop.headerB }}</td>
                <td class="border px-4 py-2">{{ (parseInt(stop.maxFreq) + parseInt(stop.minFreq)) / 2 }}</td>
                <td class="border px-4 py-2">{{ stop.startTime }}</td>
                <td class="border px-4 py-2">{{ stop.stopTime }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
        <div class="p-5">
        <h2 class="text-2xl font-bold mb-3">Buses en camino</h2>
        <ul >
          <li v-for="buses in dataArray['Arrive']" :key="buses" class="  text-sm mr-3 mb-3">
            <span class="bg-blue-200 rounded-full py-1 px-3"> {{ buses.line }}   </span> {{ buses.destination }}  Tiempo estimado: {{ displayArrivingTime(buses.estimateArrive) }}
          </li>
        </ul>
      </div>
      <div v-if="stopDoesntExist" class="select-none">
        <h3 class="text-lg font-bold">La parada que ha introducido no existe</h3>
      </div>

    </div>
    <div v-if="stopDoesntExist" class="select-none">
      <h3>La parada que ha introducido no existe</h3>
    </div>
  </div>
</template>

<script>
import SvgSearch from "./SvgIcons/SvgSearch.vue";
import axios from 'axios';
import SvgEyeOpened from "./SvgIcons/SvgEyeOpened.vue";
import SvgEyeClosed from "./SvgIcons/SvgEyeClosed.vue";
import ErrorMessage from "./ErrorMessage.vue";


export default {
  data() {
    return {
      busCode: null,
      clientId: '88c015f8-8479-4c43-8644-d045bb2280a7',
      passKey: 'E00671FCDA30CF067F1EA7854CAF3432719754442E7FBFCFA8C235F46AFB4ED42A0CC75DBBA1D0C2AA824BC2FF16AADE870A1B4D2458082127AD50EBAA808DCD',
      accessToken: null,
      dataRecovered: false,
      dataArray: null,
      busStopInfo: null,
      showStopDetailsVariable: false,
      loading: false,
      showErrorMessage: false,
      stopDoesntExist: false
    }
  },
  computed: {
    isBusCodeNegative() {
      if (this.busCode < 0) {
        this.busCode = null;
        this.showErrorMessage = true;
        this.$refs.busInput.blur();
        return true;
      }
      return false;
    }
  },
  methods: {

    async login() {
      this.stopDoesntExist = false
      this.dataRecovered = false
      this.loading = true
      const url = 'https://openapi.emtmadrid.es/v1/mobilitylabs/user/login/';
      const headers = {
        'Content-Type': 'application/json',
        'X-ClientId': this.clientId,
        'passKey': this.passKey,
      };

      try {
        const response = await axios.get(url, {headers: headers});
        console.log(response['data']['data'][0]['accessToken'])
        this.accessToken = response['data']['data'][0]['accessToken'];
        return true
        // handle the response data here
      } catch (error) {
        // handle any errors here
      }
    },
    async getBusesArrival() {
      if (this.busCode == 0) {
        this.busCode = 1
      }
      const stopId = this.busCode;

      const lineArrive = '';
      const url = `https://openapi.emtmadrid.es/v2/transport/busemtmad/stops/${stopId}/arrives/${lineArrive}`;
      const headers = {
        'Content-Type': 'application/json',
        'accessToken': this.accessToken,
      };
      const body = {
        "cultureInfo": "ES",
        "Text_StopRequired_YN": "Y",
        "Text_EstimationsRequired_YN": "Y",
        "Text_IncidencesRequired_YN": "N",
        "DateTime_Referenced_Incidencies_YYYYMMDD": "",
      };
      try {
        const response = await axios.post(url, body, {headers: headers});
        this.dataArray = response['data']['data'][0]


        if (this.dataArray.StopInfo.length > 0) {
          const stopInfo = await axios.get(`https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/${stopId}/detail/`, {headers: headers});
          this.busStopInfo = stopInfo.data.data[0]
          console.log(stopInfo.data.data[0])
          console.log(stopInfo.data.data[0].stops.length)

          this.stopDoesntExist = false
          this.loading = false
          this.dataRecovered = true
          this.stopDoesntExist = false
          this.loading = false
          this.dataRecovered = true
        } else {
          this.stopDoesntExist = true
          this.busCode = null
          this.$refs.busInput.focus()
        }

        console.log(this.dataArray)

        console.log(response['data']['data'][0])
        // handle the response data here
      } catch (error) {
        // handle any errors here
      }
    },
    async submitData() {
      if (await this.login()) {
        await this.getBusesArrival();


      }
    },
    showStopDetails() {
      this.showStopDetailsVariable = !this.showStopDetailsVariable
    },
    displayArrivingTime(time) {
      const translatedTime = Math.round(time / 60);
      if (translatedTime < 1) {
        return 'Llegando';
      } else {
        return translatedTime + ' minutos';
      }
    }

  },
  components: {ErrorMessage, SvgEyeOpened, SvgSearch, SvgEyeClosed}
}
</script>

<style scoped>
.parent {
  display: flex;
  align-items: center;
  justify-content: center;

}

.spinner {
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db;
  border-radius: 50%;
  width: 20px;
  margin-top: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  /* Alternatively, you can set line-height of parent to 20px and text-align to center */
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>