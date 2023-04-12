<template>
  <div class="flex flex-col items-center justify-center ">
    <h2 class="flex justify-center items-center mt-5"> <svg-login class="w-52 h-52"/> </h2>


    <div v-if="!forgotPassword" class="mt-8 shadow-lg rounded-lg p-4 bg-white h-full text-4xl">
   <!--   <form action="/home" class="grid grid-cols-1 gap-14" method="post">
        <label class="flex items-center text-gray-700 font-bold hidden" for="_username">Email</label>
        <input id="_username" v-model="username" class="border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500" name="_username" type="text">
        <label class="hidden flex items-center text-gray-700 font-bold" ref="password" htmlFor="_password">Password</label>
        <input id="_password" v-model="password" :type="showPassword ? 'text' : 'password'"
               class="border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500"
               name="_password">
        <label class="flex hidden items-center text-gray-700 font-bold" for="remember">Remember Me</label>
        <input id="remember" v-model="rememberMe" type="checkbox" class="form-checkbox border-gray-300 rounded focus:outline-none focus:border-blue-500">
        <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded hover:cursor-pointer col-span-2"
               type="submit" value="Iniciar sesión" @click="remember">
      </form>-->

      <form action="/home" class="flex flex-col gap-8" method="post">
       <input placeholder="Correo electrónico" id="_username" v-model="username" class=" h-24 border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500 mb-4" name="_username" type="text">

      <input id="_password" v-model="password" type="password"
          placeholder="Contraseña"     class="h-24 border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500 mb-4"
               name="_password">

        <div class="flex items-center">
          <label class="ml-2 text-gray-700 font-bold" for="remember">Recuérdame</label>
          <input id="remember" v-model="rememberMe" type="checkbox" class="mt-1.5 w-7 h-24 text-2xl font form-checkbox border-gray-300 rounded focus:outline-none focus:border-blue-500 ml-2">

        </div>

        <input class="h-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded hover:cursor-pointer"
               type="submit" value="Iniciar sesión" @click="remember">
      </form>


      <button class="h-24 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mt-3"
              @click="forgotPassword=true">¿Olvidaste tu contraseña?</button>
    </div>

    <div v-else class="mt-8 shadow-lg rounded-lg p-4 bg-white h-full text-4xl">
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded mb-5"
              @click="forgotPassword=false">Cancelar</button>
      <form @submit.prevent="sendForgotPassword" class="mt-3">
       <input id="forgot-email" ref="forgotEmail" name="forgot-email" type="email"
              placeholder="Correo electrónico" class=" border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500 w-full mb-5  h-16">

       <div class="flex justify-center">
          <button v-if="!emailSending" class="h-24 mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mt-3"
                  @click="sendForgotPassword">
            Enviar correo de confirmación
          </button>
          <transition name="fade">
          <!--  <button v-if="emailSending" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mt-3"
                    disabled>
              <svg class="animate-spin mx-auto h-10 w-10 text-white inline-block align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-75" cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2"></circle>
                <path class="opacity-25" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            </button>-->
            <div v-if="emailSending" >
              <svg class="animate-spin  h-14 w-14 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-75" cx="12" cy="12" r="10" stroke="black" stroke-width="3"></circle>
                <path class="opacity-25" fill="black" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            </div>
          </transition>
        </div>
      </form>
    </div>

    <!--    <div v-else class="mt-5 shadow-lg rounded-lg p-4 bg-white">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
                  @click="forgotPassword=false">Cancelar</button>
          <form @submit.prevent="sendForgotPassword" class="flex items-center mt-3">
            <input id="" ref="forgotEmail" name="" placeholder="Introduzca su email" type="email"
                   class="border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500 w-full">
            <div>
              <button v-if="!emailSending" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded ml-3"
                      @click="sendForgotPassword">
                Enviar email de confirmación
              </button>
              <transition name="fade">
                <button v-if="emailSending" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded ml-3"
                        disabled>
                  <svg class="animate-spin mx-auto h-10 w-10 text-white inline-block align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-75" cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2"></circle>
                    <path class="opacity-25" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                </button>
              </transition>
            </div>
          </form>
        </div>-->

    <teleport to="body">
      <error-message v-if="showResult" :message="this.resultMessage"
                     @close-error="showResult=false,this.forgotPassword = false"/>
    </teleport>
  </div>
</template>


<script>
import SvgEyeOpened from "../SvgIcons/SvgEyeOpened.vue";
import SvgEyeClosed from "../SvgIcons/SvgEyeClosed.vue";
import EyePassword from "../EyePassword.vue";
import axios from "axios";
import ErrorMessage from "../Messages/ErrorMessage.vue";
import SvgLogin from "../SvgIcons/SvgLogin.vue";

export default {
  components: {SvgLogin, ErrorMessage, EyePassword, SvgEyeOpened, SvgEyeClosed},
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      showPassword: false,
      forgotPassword: false,
      showResult: false,
      resultMessage: null,
      emailSending:null
    }
  },
  mounted() {
    let username = localStorage.getItem('username')
    let password = localStorage.getItem('password')
    if (username && password) {
      this.username = username
      this.password = password
      this.rememberMe = true
    }
  },
  methods: {
    remember() {
      console.log('le has dado click al boton y estoy guardadndo tus datos')
      if (this.rememberMe) {
        console.log('los datos ya existen y los estoy sacando ')
        localStorage.setItem('username', this.username)
        localStorage.setItem('password', this.password)
      } else {
        console.log('no quiere que te recuerede asi que estoyu borrando los datos')
        localStorage.removeItem('username')
        localStorage.removeItem('password')
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async sendForgotPassword() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.$refs.forgotEmail.value.trim() != '' && emailRegex.test(this.$refs.forgotEmail.value)) {
        this.emailSending = true;
        const response = await axios.post('/forgotPassword', {
          'email': this.$refs.forgotEmail.value
        })
        this.emailSending = false;
        const success = (response.data.success)
        if (!success) {
          this.resultMessage = 'Este email no existe'
        } else {
          this.resultMessage = 'Se le he enviado un correo a ' + this.$refs.forgotEmail.value
        }


      }else{
        this.resultMessage = 'Por favor introduzca un email valido'

      }
      this.showResult = true


    }
  }
}
</script>
