<template>
  <div class="grid-cols-3 lg:text-xl lg:w-3/4">
    <h2 class="flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl lg:hidden">
      <!--   <span class="text-center text-7xl">Consulta tu parada de autobus</span>-->
      <svg-bus class="w-52 h-52"/>
    </h2>

    <form class="select-none max-w-xl mx-auto my-8 lg:mb-0" @submit.prevent="submitData">
      <div class="flex flex-col items-center ">

        <div class="flex  items-center justify-center w-full ml-8 ">
          <input id="bus" ref="busInput" v-model.number="busCode"
                 class="lg:text-xl lg:h-14  h-24 text-5xl  place w-full h-18 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 box-border "
                 placeholder="Codigo de la parada"
                 required type="number">
          <button v-if="!isBusCodeNegative" class="flex items-center px-3 h-full bg-transparent rounded-r-md">
            <svg-search v-if="!loading" class="lg:w-8 lg:h-8 w-14 h-14 text-gray-400 "/>
          </button>


          <teleport v-if="askConfirm" to="body">
            <confirm-message v-if="this.askConfirm"
                             :message="'Estás seguro de que quieres borrar la parada ' +this.busCode"
                             @close-error="this.askConfirm=false">
              <button class="lg:text-xl text-center text-4xl bg-red-500 text-white font-bold py-2 px-3 ml-4  rounded hover:bg-red-600 transition-colors duration-300" @click="removeFavourite">
                SI
              </button>
              <button
                  class="lg:text-xl bg-gray-300 text-gray-700 font-bold text-4xl text-center py-2 px-3 ml-4 rounded hover:bg-gray-400 transition-colors duration-300"  @click="this.askConfirm=false">NO
              </button>
            </confirm-message>
            <error-message v-else v-if="showErrorMessage"
                           class="absolute top-full left-0 w-full -mt-2 px-3 py-2 bg-red-100 border border-red-500 rounded-md text-red-500 text-sm"
                           message="El numero debe ser mayor que 1"
                           @close-error="showErrorMessage=false"/>
          </teleport>
        </div>
        <div class="parent mt-4 h-50 w-50">
          <div v-if="loading">
            <svg class="animate-spin mt-20 -ml-1 mr-3 h-20 w-20 text-white lg:h-10 lg:w-10 lg:mt-12" fill="none"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle class="opacity-75" cx="12" cy="12" r="10" stroke="black" stroke-width="3"></circle>
              <path class="opacity-25" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="black"></path>
            </svg>
          </div>
        </div>

      </div>
    </form>

    <div v-if="dataRecovered && !stopDoesntExist">
      <div class="flex items-center justify-center">
        <button class="bg-white  rounded-md px-3 py-2 flex " @click="showStopDetails">
          <h2 class="flex items-center justify-center text-center text-3xl lg:text-sm">
            <span class="lg:text-sm lg:mt-0">Información de la parada</span>
            <svg-eye-closed v-if="showStopDetailsVariable" class="w-6 h-6 ml-2 mt-1 lg:w-4 lg:w-4"/>
            <svg-eye-opened v-else class="w-6 h-6 ml-2 mt-1 lg:w-4 lg:w-4"/>
          </h2>
        </button>
      </div>


      <div v-if="showStopDetailsVariable " id="busStopInfo" class="mt-4">
        <div class=" mx-auto py-6 px-6 lg:px-8">
          <div class="overflow-x-auto">

            <ul class="border border-gray-300 divide-y divide-gray-300 rounded">
              <li class="flex justify-center py-4 bg-gray-100">
                <span class="w-1/3 text-center text-3xl font-semibold text-gray-700 lg:text-sm">Nombre</span>
                <span class="w-1/3 text-center text-3xl font-semibold text-gray-700 lg:text-sm">Direccion</span>
                <span class="w-1/3 text-center text-3xl font-semibold text-gray-700 lg:text-sm">Numero de lineas</span>
              </li>
              <li class="flex justify-center py-4 border-t bg-gray-100 border-gray-300">
                <span class="w-1/3 text-center text-3xl text-gray-700 lg:text-sm">{{ this.busStopInfo.stops[0].name }}</span>
                <span class="w-1/3 text-center text-3xl text-gray-700 lg:text-sm">{{
                    this.busStopInfo.stops[0].postalAddress
                  }}</span>
                <span class="w-1/3 text-center text-3xl text-gray-700 lg:text-sm">{{
                    this.busStopInfo.stops[0].dataLine.length
                  }}</span>
              </li>
            </ul>


          </div>
        </div>


        <div class="w-full py-6">
          <div class="overflow-x-auto ">
            <ul class="border border-gray-300 divide-y divide-gray-300 w-full ">
              <li class="flex justify-center py-4 bg-gray-100">
                <span class="w-1/4 text-center text-3xl font-semibold text-gray-700 lg:text-sm">Lineas</span>
                <span class="w-1/4 text-center text-3xl font-semibold text-gray-700 lg:text-sm">Direccion</span>
                <span class="w-1/4 text-center text-3xl font-semibold text-gray-700 lg:text-sm">Pasa cada</span>
                <span class="w-1/4 text-center text-3xl font-semibold text-gray-700 lg:text-sm">Horario</span>
              </li>
              <template v-for="stop in this.busStopInfo.stops[0].dataLine">
                <li class="flex justify-center py-4 border-t bg-gray-100 border-gray-300">
                  <span class="w-1/4 text-center text-3xl text-gray-700 lg:text-sm">{{ stop.label }}</span>
                  <span class="w-1/4 text-center text-3xl text-gray-700 lg:text-sm">{{
                      stop.direction === 'A' ? stop.headerA : stop.headerB
                    }}</span>
                  <span class="w-1/4 text-center text-3xl text-gray-700 lg:text-sm">{{
                      (parseInt(stop.maxFreq) + parseInt(stop.minFreq)) / 2
                    }} min</span>
                  <span class="w-1/4 text-center text-3xl text-gray-700 lg:text-sm">{{ stop.startTime }} {{ stop.stopTime }}</span>
                </li>
              </template>
            </ul>
          </div>
        </div>

      </div>
      <div class="p-5">
        <div class="flex justify-center items-center">
          <h2 class="text-6xl text-gray-700 font-bold mb-3 lg:text-2xl">Buses en camino</h2>
        </div>
        <div v-if="loggedIn">
          <div v-if="wantsToAdd">
            <form class="flex flex-col items-center mb-25" @submit.prevent="addFavourite">
              <input ref="customName"
                     class="lg:text-xl text-5xl w-full border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 box-border mx-5 mb-3"
                     placeholder="Nombre personalizado" required
                     type="text">
              <button class="lg:text-xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-5xl "
                      type="submit">Anadir a
                favoritos
              </button>
            </form>
          </div>


          <div v-if="!wantsToAdd" class="flex items-center justify-center mb-5">
            <svg-star-empty v-if="!isFavourite" class="lg:w-8 lg:h-8 w-16 h-16 cursor-pointer" @click="this.wantsToAdd=true"/>
            <svg-star-full v-else class= "lg:w-8 lg:h-8 w-16 h-16 cursor-pointer" @click="this.askConfirm=true"/>
            <span class="ml-2 text-5xl lg:text-xl">{{ isFavourite ? 'Parada agregada a favoritos' : 'Agregar a favoritos' }}</span>
          </div>
        </div>


        <div class="flex justify-center items-center mt-5 overflow-x-auto">
          <ul class="flex flex-row flex-wrap justify-center lg:flex-row">
            <li v-for="buses in dataArray['Arrive']" :key="buses" class="text-3xl mb-3 flex items-center lg:text-xl ">
              <span class=" rounded-full pb-1.5  px-3 mr-5  bg-blue-500 text-white">{{ buses.line }}</span>
              <div>
                <div>{{ buses.destination }}</div>
                <div class="mr-5">Tiempo estimado: {{ displayArrivingTime(buses.estimateArrive) }}</div>
              </div>
            </li>
          </ul>
        </div>


      </div>

    </div>

  </div>
  <teleport to="body">
    <div v-if="stopDoesntExist && !loading" class="flex justify-center items-center ">
      <h3 class="text-6xl font-bold text-center text-red-600 p-8 bg-white shadow-lg rounded-lg lg:text-xl">
        La parada que ha introducido no existe
      </h3>
    </div>
  </teleport>
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
import SvgBus from "../SvgIcons/SvgBus.vue";


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
      loggedIn: null,
      wantsToAdd: false,
      askConfirm: false

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
        return false;
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
          console.log('entro en el if de si')
          const stopInfo = await axios.get(`https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/${stopId}/detail/`, {headers: headers});
          this.busStopInfo = stopInfo.data.data[0]
          console.log(stopInfo.data.data[0])
          console.log(stopInfo.data.data[0].stops.length)


          this.loading = false
          this.dataRecovered = true
          this.stopDoesntExist = false
          this.loading = false
          this.dataRecovered = true
          return true
        } else {
          console.log('entro en el if false')
          this.stopDoesntExist = true
          console.log(this.stopDoesntExist)
          this.busCode = null
          this.$refs.busInput.focus()
          return false
        }

        console.log(this.dataArray)

        console.log(response['data']['data'][0])
        // handle the response data here
      } catch (error) {
        // handle any errors here
      }
    },
    async submitData() {
      console.log(this.login())
      if (await this.login()) {
        await this.getBusesArrival();
        await this.checkIsFavourite();

        if (!this.stopDoesntExist) {
          await axios.post('/addOneGlobalVisit', {
            'busCode': this.busCode
          })
        }

      }
      this.loading = false

    },
    async checkIsFavourite() {

      const response = await axios.post('/checkFavourite', {
        'busCode': this.busCode
      })
      console.log(response)
      console.log(response.data.isFavourite)
      console.log(this.stopDoesntExist)
      if (response.data.isFavourite==='notLoggedIn') {
        this.loggedIn = false
      } else {
        this.loggedIn = true
        this.isFavourite = response.data.isFavourite
     console.log('estoy viendo si es fav '+this.isFavourite)
        if (this.isFavourite) {
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
        'stopName': this.busStopInfo.stops[0].name,
        'buses': this.busStopInfo.stops[0].dataLine,
        'customName': this.$refs.customName.value
      })
      this.wantsToAdd = false
      console.log(response)
      this.isFavourite = true

      console.log(this.wantsToAdd)
    },
    async removeFavourite() {

      const response = await axios.post('/removeFavourite', {
        'busCode': this.busCode
      })
      this.isFavourite = false
      console.log(response)

    }

  },
  components: {
    SvgBus,
    ConfirmMessage, SvgStarFull, SvgStarEmpty, SvgStar, ErrorMessage, SvgEyeOpened, SvgSearch, SvgEyeClosed
  }
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