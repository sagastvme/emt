<template>

  <div class="grid-cols-3 lg:text-xl lg:w-3/4">
    <h2 class="flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl lg:hidden">
     <svg-bike class="w-52 h-52"/>
    </h2>
    <form  @submit.prevent="submitData" class="select-none max-w-xl mx-auto my-8 lg:mb-0">
      <div class="flex flex-col items-center ">
        <div class="flex  items-center justify-center w-full ml-8 ">
          <input id="bus" ref="busInput" v-model.number="bikeCode"
                 class="lg:text-xl lg:h-14  h-24 text-5xl  place w-full h-18 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 box-border "     placeholder="Codigo de la parada"  required type="number">
          <button v-if="!isBusCodeNegative"  class="flex items-center px-3 h-full bg-transparent rounded-r-md">
            <svg-search v-if="!loading" class="lg:w-8 lg:h-8 w-14 h-14 text-gray-400 "/>
          </button>
        </div>

        <div class="flex justify-center items-center">
          <error-message v-if="showErrorMessage" message="El numero debe ser mayor que 1"
                         @close-error="showErrorMessage=false"></error-message>


          <div class="parent mt-4 h-50 w-50">
            <div v-if="loading" >
              <svg class="animate-spin mt-20 -ml-1 mr-3 h-20 w-20 text-white lg:h-10 lg:w-10 lg:mt-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-75" cx="12" cy="12" r="10" stroke="black" stroke-width="3"></circle>
                <path class="opacity-25" fill="black" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div v-if="dataRecovered && !stopDoesntExist" class="mt-14 lg:mt-4 " >

      <div class="flex justify-center items-center lg:w-full ">
        <ul class="space-y-8 lg:space-y-3">
          <li class="text-4xl lg:text-xl mb-5 flex items-center lg:mb-0">
            <span class="font-bold mr-5">Direccion:</span>
            <span>{{ dataArray.address }}</span>
          </li>
          <li class="text-4xl lg:text-xl mb-5 flex items-center lg:mb-0">
            <span class="font-bold mr-5">Nombre:</span>
            <span>{{ dataArray.name }}</span>
          </li>
          <li class="text-4xl lg:text-xl mb-5 flex items-center lg:mb-0">
            <span class="font-bold mr-5">Numero de reservas:</span>
            <span>{{ dataArray.reservations_count }}</span>
          </li>
          <li class="text-4xl lg:text-xl mb-5 flex items-center lg:mb-0">
            <span class="font-bold mr-5">Ocupacion:</span>
            <span>{{ this.stopStatus }}</span>
          </li>
          <li class="text-4xl lg:text-xl mb-5 flex items-center lg:mb-0">
            <span class="font-bold mr-5">Bases:</span>
            <span>{{ dataArray.total_bases }}</span>
          </li>
          <li class="text-4xl lg:text-xl mb-5 flex items-center lg:mb-0">
            <span class="font-bold mr-5">Bicicletas disponibles:</span>
            <span>{{ dataArray.dock_bikes }}</span>
          </li>
          <li class="text-4xl lg:text-xl mb-5 flex items-center lg:mb-0">
            <span class="font-bold mr-5">Dockers libres:</span>
            <span>{{ dataArray.free_bases }}</span>
          </li>
          <li class="text-4xl lg:text-xl mb-5 flex items-center lg:mb-0">
            <span class="font-bold mr-5">Dockers reservados:</span>
            <span>{{ dataArray.reservations_count }}</span>
          </li>
        </ul>



      </div>





    </div>
    <div v-if="stopDoesntExist" class="flex justify-center items-center ">
      <h3 class="text-6xl font-bold text-center text-red-600 p-8 bg-white shadow-lg rounded-lg lg:text-xl">
        La parada que ha introducido no existe
      </h3>
    </div>

  </div>

</template>

<script>
import SvgSearch from "../SvgIcons/SvgSearch.vue";
import axios from 'axios';
import SvgEyeOpened from "../SvgIcons/SvgEyeOpened.vue";
import SvgEyeClosed from "../SvgIcons/SvgEyeClosed.vue";
import ErrorMessage from "../Messages/ErrorMessage.vue";
import SvgBike from "../SvgIcons/SvgBike.vue";


export default {
  data() {
    return {
      bikeCode: null,
      clientId: '88c015f8-8479-4c43-8644-d045bb2280a7',
      passKey: 'E00671FCDA30CF067F1EA7854CAF3432719754442E7FBFCFA8C235F46AFB4ED42A0CC75DBBA1D0C2AA824BC2FF16AADE870A1B4D2458082127AD50EBAA808DCD',
      accessToken: null,
      dataRecovered: false,
      dataArray: null,
      showStopDetailsVariable: false,
      loading: false,
      showErrorMessage: false,
      stopDoesntExist: false
    }
  },
  computed: {
    isBusCodeNegative() {
      if (this.bikeCode < 0) {
        this.bikeCode = null;
        this.showErrorMessage = true;
        this.$refs.busInput.blur();
        return true;
      }
      return false;
    },
    stopStatus() {
      console.log(this.dataArray.light)
      switch (this.dataArray.light) {

        case 0:

          return 'Baja';
          break;
        case 2:
          return 'Mediana';
          break;
        case 1:
          return 'Alta'
          break;
        case 3:
          return 'No disponible';
      }
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
    async submitData() {
      if (await this.login()) {

        if (this.bikeCode == 0) {
          this.bikeCode = 1
        }
        const stopId = this.bikeCode;

        const lineArrive = '';
        const url = `https://openapi.emtmadrid.es/v1/transport/bicimad/stations/${stopId}/`;
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
          const response = await axios.get(url, {headers: headers});
          this.loading = false
          this.dataRecovered = true
          this.dataArray = response['data']['data'][0]
          console.log(this.dataArray)
          if (this.dataArray) {
            this.stopDoesntExist = false
          } else {
            this.stopDoesntExist = true
            this.bikeCode = null
            this.$refs.busInput.focus()
          }

          console.log(this.dataArray)

          console.log(response['data']['data'][0])
          // handle the response data here
        } catch (error) {
          // handle any errors here
        }
      }
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
  components: {SvgBike, ErrorMessage, SvgEyeOpened, SvgSearch, SvgEyeClosed}
}
</script>
