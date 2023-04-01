<template>
  <div v-if="!forgotPassword">
    <form action="/home" class="grid grid-cols-2 gap-3 mt-5" method="post">
      <label class=" flex-row  mr-3" for="_username">Email</label>
      <input id="_username" v-model="username" class="flex-row  border-2 border-black" name="_username" type="text">
      <label ref="password" class="flex-row  mr-3" htmlFor="_password">Password </label>
      <input id="_password" v-model="password" :type="showPassword ? 'text' : 'password'"
             class="flex-row  border-2 border-black"
             name="_password">
      <label class="flex-row  mr-3" for="remember">Remember Me</label>
      <input id="remember" v-model="rememberMe" class="flex-row  border-2 border-black" type="checkbox">
      <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
             type="submit"
             value="Iniciar sesión"
             @click="remember">

    </form>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
            @click="forgotPassword=true">Olvidaste la contrasena?
    </button>
  </div>
  <div v-else>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
            @click="forgotPassword=false">Cancelar
    </button>
    <form @submit.prevent="sendForgotPassword">
      <input id="" ref="forgotEmail" name="" placeholder="Introduzca su email"  type="email">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer"
            >Enviar email de confirmacion
      </button>

    </form>
  </div>
  <teleport to="body">
    <error-message v-if="showResult" :message="this.resultMessage"
                   @close-error="showResult=false,this.forgotPassword = false"/>
  </teleport>

</template>


<script>
import SvgEyeOpened from "./SvgIcons/SvgEyeOpened.vue";
import SvgEyeClosed from "./SvgIcons/SvgEyeClosed.vue";
import EyePassword from "./EyePassword.vue";
import axios from "axios";
import ErrorMessage from "./ErrorMessage.vue";

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
      resultMessage: null
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
        const response = await axios.post('/forgotPassword', {
          'email': this.$refs.forgotEmail.value
        })
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
<style>
button {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
