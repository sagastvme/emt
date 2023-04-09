<template>
  <div class="flex flex-col items-center justify-center">
    <h2 class="flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl">Iniciar sesión</h2>
    <div v-if="!forgotPassword" class="mt-5 shadow-lg rounded-lg p-4 bg-white">
      <form action="/home" class="grid grid-cols-2 gap-3" method="post">
        <label class="flex items-center text-gray-700 font-bold" for="_username">Email</label>
        <input id="_username" v-model="username" class="border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500" name="_username" type="text">
        <label class="flex items-center text-gray-700 font-bold" ref="password" htmlFor="_password">Password</label>
        <input id="_password" v-model="password" :type="showPassword ? 'text' : 'password'"
               class="border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500"
               name="_password">
        <label class="flex items-center text-gray-700 font-bold" for="remember">Remember Me</label>
        <input id="remember" v-model="rememberMe" type="checkbox" class="form-checkbox border-gray-300 rounded focus:outline-none focus:border-blue-500">
        <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer col-span-2"
               type="submit" value="Iniciar sesión" @click="remember">
      </form>

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
              @click="forgotPassword=true">Olvidaste la contraseña?</button>
    </div>

    <div v-else class="mt-5 shadow-lg rounded-lg p-4 bg-white">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click="forgotPassword=false">Cancelar</button>
      <form @submit.prevent="sendForgotPassword" class="flex items-center mt-3">
        <input id="" ref="forgotEmail" name="" placeholder="Introduzca su email" type="email"
               class="border border-gray-300 py-2 px-3 rounded focus:outline-none focus:border-blue-500 w-full">
        <div>
          <button v-if="!emailSending" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3"
                  @click="sendEmail">Enviar email de confirmación</button>
          <transition name="fade">
            <button v-if="emailSending" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3"
                    disabled>
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-25" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>Enviando...</button>
          </transition>
        </div>
      </form>
    </div>

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

export default {
  components: {ErrorMessage, EyePassword, SvgEyeOpened, SvgEyeClosed},
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
