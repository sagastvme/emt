<template>
  <div class="grid-cols-3">
    <h2 class="flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl">
      <span class="text-center ml-4 mr-2">Introduzca el código de su parada para conocer el tiempo que le queda a su autobús</span>
    </h2>

    <form class="select-none max-w-xl mx-auto my-8" @submit.prevent="submitData">
      <div class="flex flex-col items-center ">
        <label for="bus" class="text-gray-700 font-medium mb-2">Codigo de la parada</label>
        <div class="flex  items-center justify-center ">
          <input id="bus" ref="busInput" v-model.number="busCode" class=" border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 box-border " required type="number">
          <button v-if="!isBusCodeNegative" class="flex items-center px-4 h-full bg-white rounded-r-md">
            <svg-search v-if="!loading" class="w-6 h-6 text-gray-400 mt-2" />
          </button>


        <teleport v-if="askConfirm" to="body">
            <confirm-message :message="'Estás seguro de que quieres borrar la parada ' +this.busCode"
                             @close-error="this.askConfirm=false" v-if="this.askConfirm">
              <button @click="removeFavourite" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200">SI</button>
              <button class="ml-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-200" @click="this.askConfirm=false">NO</button>
            </confirm-message>
            <error-message v-else v-if="showErrorMessage" message="El numero debe ser mayor que 1"
                           @close-error="showErrorMessage=false" class="absolute top-full left-0 w-full -mt-2 px-4 py-2 bg-red-100 border border-red-500 rounded-md text-red-500 text-sm" />
          </teleport>
        </div>
        <div class="parent mt-4">
          <div v-if="loading">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-25" fill="black" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
          </div>
        </div>

      </div>
    </form>

    <div v-if="dataRecovered && !stopDoesntExist" >
      <div class="flex items-center justify-center ">
        <button @click="showStopDetails" class="bg-gray-200 hover:bg-gray-300 rounded-md px-4 py-2 flex">
          <h2 class="flex items-center justify-center text-center">
            <span >Información de la parada</span>
            <svg-eye-closed v-if="showStopDetailsVariable" class="w-6 h-6" />
            <svg-eye-opened v-else class="w-6 h-6" />
          </h2>
        </button>
      </div>


      <div v-if="showStopDetailsVariable " id="busStopInfo" class="mt-4">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-500 w-full">
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


      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
          <div class="overflow-x-auto">
            <table class="table-auto border-collapse border border-gray-500 w-full">
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
        <div class="flex justify-center items-center">
        <h2 class="text-2xl font-bold mb-3">Buses en camino</h2>
        </div>
        <div v-if="loggedIn">
          <div v-if="wantsToAdd">
            <form @submit.prevent="addFavourite" class="flex items-center">
              <input required type="text" ref="customName" placeholder="Nombre que le quiera poner a la parada" class="w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 box-border">
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3">Anadir a favoritos</button>
            </form>
          </div>

          <div v-if="!wantsToAdd" class="flex items-center">
            <svg-star-empty v-if="!isFavourite" @click="this.wantsToAdd=true" class="w-6 h-6 cursor-pointer" />
            <svg-star-full v-else @click="this.askConfirm=true" class="w-6 h-6 cursor-pointer" />
            <span class="ml-2">{{ isFavourite ? 'Parada agregada a favoritos' : 'Agregar a favoritos' }}</span>
          </div>
        </div>



        <div class="flex justify-center items-center">
          <ul class="block sm:inline-block md:table">
            <li v-for="buses in dataArray['Arrive']" :key="buses" class="text-sm mb-3 flex items-center md:table-cell md:mx-6 md:my-2">
              <span class="bg-blue-200 rounded-full py-1 px-3 mr-5">{{ buses.line }}</span>
              <div>
                <div>{{ buses.destination }}</div>
                <div class="mr-5">Tiempo estimado: {{ displayArrivingTime(buses.estimateArrive) }}</div>
              </div>
            </li>
          </ul>
        </div>





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
import SvgSearch from "../SvgIcons/SvgSearch.vue";
import axios from 'axios';
import SvgEyeOpened from "../SvgIcons/SvgEyeOpened.vue";
import SvgEyeClosed from "../SvgIcons/SvgEyeClosed.vue";
import ErrorMessage from "../Messages/ErrorMessage.vue";
import SvgStar from "../SvgIcons/SvgStarEmpty.vue";
import SvgStarEmpty from "../SvgIcons/SvgStarEmpty.vue";
import SvgStarFull from "../SvgIcons/SvgStarFull.vue";
import ConfirmMessage from "../Messages/ConfirmMessage.vue";


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
      stopDoesntExist: false,
      isFavourite: null,
      loggedIn:null,
      wantsToAdd:false,
      askConfirm:false

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
        await this.checkIsFavourite();
        await axios.post('/addOneGlobalVisit', {
          'busCode': this.busCode
        })
      }
    },
    async checkIsFavourite() {

      const response = await axios.post('/checkFavourite', {
        'busCode': this.busCode
      })
      console.log(response)
      if(response.data.isFavourite=='notLoggedIn'){
        this.loggedIn=false
      }else{
        this.loggedIn=true
        this.isFavourite = response.data.isFavourite
        if(this.isFavourite){
          await axios.post('/addOneVisit', {
            'busCode': this.busCode
          })

        }
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
    },
    async addFavourite() {

      const response = await axios.post('/saveFavourite', {
        'busCode': this.busCode,
        'stopName':this.busStopInfo.stops[0].name,
        'buses':this.busStopInfo.stops[0].dataLine,
        'customName':this.$refs.customName.value
      })
      this.wantsToAdd=false
      console.log(response)
      this.isFavourite = true

      console.log(this.wantsToAdd)
    },
   async removeFavourite(){

      const response = await axios.post('/removeFavourite', {
        'busCode': this.busCode
      })
     this.isFavourite = false
      console.log(response)

    }

  },
  components: {ConfirmMessage, SvgStarFull, SvgStarEmpty, SvgStar, ErrorMessage, SvgEyeOpened, SvgSearch, SvgEyeClosed}
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