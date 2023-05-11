<template>
  <div class="flex flex-col items-center justify-center lg:w-3/6 ">
    <h2 class="flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl lg:hidden"> <svg-user class="w-52 h-52"/> </h2>

    <form class="mt-8 shadow-lg rounded-lg p-4 bg-white h-full text-4xl w-full max-w-screen-lg mx-auto lg:text-xl lg:mt-14 lg:w-full" @submit.prevent="register">
      <ul >
        <li class="flex items-center mb-8">
          <input placeholder="Correo electrónico" id="username" v-model="username" class="lg:h-14 lg:w-full h-24 text-left flex-1 border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" name="username" type="email">
        </li>

        <li class="flex items-center mb-8">
          <input placeholder="Contraseña" type="password" id="password" v-model="password" class="lg:h-14 lg:w-full  h-24  text-left flex-1 border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" name="password">
        </li>

        <li class="flex items-center mb-8" >
          <input placeholder="Repita su contraseña" type="password" id="passwordRepeat" ref="passwordRepeat" v-model="passwordRepeat"  class="lg:h-14 lg:w-full h-24  flex-1 border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500" name="passwordRepeat">
        </li>

        <li class="flex items-center justify-center">
          <button v-if="samePassword && !registering" class="lg:h-14 h-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded hover:cursor-pointer">
            Registrarse
          </button>
          <transition name="fade">
            <div v-if="registering" >
              <svg class="animate-spin  h-14 w-14 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-75" cx="12" cy="12" r="10" stroke="black" stroke-width="3"></circle>
                <path class="opacity-25" fill="black" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            </div>
          </transition>
        </li>
      </ul>
    </form>




  </div>
  <teleport to="body">
    <error-message v-if="status" message="Se le ha enviado un correo para que verifique su cuenta"
                   @close-error="status=false"/>
    <error-message v-if="!exception" message="Este correo electrónico ya esta registrado"
                   @close-error="exception=true"/>

  </teleport>

</template>

<script>
import axios from "axios";
import EyePassword from "../EyePassword.vue";
import ErrorMessage from "../Messages/ErrorMessage.vue";
import SvgUser from "../SvgIcons/SvgUser.vue";
export default {
  components: {SvgUser, EyePassword,ErrorMessage},
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
      this.password='';
      this.username='';
      this.passwordRepeat='';
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