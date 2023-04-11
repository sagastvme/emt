<template>
  <div class="flex flex-col items-center justify-center ">
    <h2 class="flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl">Registrate</h2>
    <form class="grid grid-cols-2 gap-3 mt-5 shadow-lg rounded-lg p-4 bg-white" @submit.prevent="register">

      <label  for="username" class="flex-row justify-end mr-3 text-gray-700 font-bold">Correo electrónico</label>
      <input  id="username" v-model="username" class="flex-row border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" name="username" type="email">


      <label for="password" class="flex-row justify-end mr-3 text-gray-700 font-bold">Contraseña</label>
      <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" class="flex-row border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" name="password">



      <label for="passwordRepeat" class="flex-row justify-end mr-3 text-gray-700 font-bold">Repita su contraseña</label>
      <input id="passwordRepeat" ref="passwordRepeat" v-model="passwordRepeat" :type="showPasswordRepeat ? 'text' : 'password'" class="flex-row border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" name="passwordRepeat">


      <button v-if="samePassword" class="bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-3 rounded col-span-2 relative h-10">
        <span v-if="!registering">Registrarse</span>
        <transition name="fade">
    <span v-if="registering" class="absolute inset-0 flex items-center justify-center">
      <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
    </span>
        </transition>
      </button>

    </form>
  </div>
  <teleport to="body">
    <error-message v-if="status" message="Se le ha enviado un correo para que verifique su cuenta"
                   @close-error="status=false"/>
    <error-message v-if="!exception" message="Esta email ya esta registrado"
                   @close-error="exception=true"/>

  </teleport>

</template>

<script>
import axios from "axios";
import EyePassword from "../EyePassword.vue";
import ErrorMessage from "../Messages/ErrorMessage.vue";
export default {
  components: {EyePassword,ErrorMessage},
  data() {
    return {
      username: '',
      password: '',
      passwordRepeat: '',
      showPassword: false,
      showPasswordRepeat: false,
      status:false,
      registering:null,
      exception:true

    }
  },
  computed: {
    samePassword() {
      console.log('estoy revisando')
      console.log(this.username)
      if (this.password == this.passwordRepeat
          && this.password != '' && this.passwordRepeat != ''

          && this.username != '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.username)) {
        return true;
      } else {

        return false;
      }
    }
  },

  methods: {
    async register() {
      console.log('enviando')
      this.registering=true
      const response = await axios.post('/register', {
        username: this.username,
        password: this.password,
        confirmedStatus: 1
      })
      this.registering=false
      if(response.data.message){

        this.status=response.data.message
      }else{
        this.exception=response.data.message
      }
      //this.error=response.data.message

    }
  }
}
</script>

<style scoped>

</style>