<template>
  <div class="flex justify-center  ">
  <div class="grid-cols-3">
    <h2 class="flex-row">Introduzca el codigo de su estacion biciMAD </h2>
    <form class="select-none" @submit.prevent="submitData">
      <div>
        <div>
          <label class="flex-row" for="bus">Codigo de la parada</label>
          <input id="bus" ref="busInput" v-model.number="bikeCode" class=" flex-row border-2 border-black rounded"
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

      <div class="mt-5">
        <table class="table-auto border">
          <tbody>
          <tr>
            <td class="py-2 px-4 border">Direccion de la parada</td>
            <td class="py-2 px-4 border">{{ dataArray.address }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border">Nombre de la parada</td>
            <td class="py-2 px-4 border">{{ dataArray.name }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border">Codigo de la parada</td>
            <td class="py-2 px-4 border">{{ dataArray.id }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border">Numero de reservas</td>
            <td class="py-2 px-4 border">{{ dataArray.reservations_count }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border">Nivel de ocupacion</td>
            <td class="py-2 px-4 border">{{ this.stopStatus }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border">Total de bases</td>
            <td class="py-2 px-4 border">{{ dataArray.total_bases }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border">Bicicletas disponibles</td>
            <td class="py-2 px-4 border">{{ dataArray.dock_bikes }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border">Dockers libres</td>
            <td class="py-2 px-4 border">{{ dataArray.free_bases }}</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border">Dockers reservados</td>
            <td class="py-2 px-4 border">{{ dataArray.reservations_count }}</td>
          </tr>
          </tbody>
        </table>
      </div>




    </div>
    <div v-if="stopDoesntExist" class="select-none">
      <h3>La parada que ha introducido no existe</h3>
    </div>
  </div>
  </div>
</template>

<script>
import SvgSearch from "../SvgIcons/SvgSearch.vue";
import axios from 'axios';
import SvgEyeOpened from "../SvgIcons/SvgEyeOpened.vue";
import SvgEyeClosed from "../SvgIcons/SvgEyeClosed.vue";
import ErrorMessage from "../Messages/ErrorMessage.vue";


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

          return 'Ocupacion baja';
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