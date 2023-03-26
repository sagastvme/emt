<template>
  <form action="/home" class="grid grid-cols-2 gap-3 mt-5" method="post">
    <label class=" flex-row  mr-3" for="_username">Email</label>
    <input id="_username" v-model="username" class="flex-row  border-2 border-black" name="_username" type="text">
    <label ref="password" class="flex-row  mr-3" htmlFor="_password">Password </label>
    <input id="_password" v-model="password" :type="showPassword ? 'text' : 'password'"
           class="flex-row  border-2 border-black"
           name="_password">
    <label class="flex-row  mr-3" for="remember">Remember Me</label>
    <input id="remember" v-model="rememberMe" class="flex-row  border-2 border-black" type="checkbox">
    <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer" type="submit"
           value="Iniciar sesión"
           @click="remember">
  </form>

</template>


<script>
import SvgEyeOpened from "./SvgIcons/SvgEyeOpened.vue";
import SvgEyeClosed from "./SvgIcons/SvgEyeClosed.vue";
import EyePassword from "./EyePassword.vue";

export default {
  components: {EyePassword, SvgEyeOpened, SvgEyeClosed},
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      showPassword: false,
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
