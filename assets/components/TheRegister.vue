<template>
  <form class="grid grid-cols-2 gap-3 mt-5" @submit.prevent="register">

      <label  for="username" class=" flex-row justify-end mr-3">Correo electrónico</label>
      <input  id="username" v-model="username" class="flex-row  border-2 border-black" name="username" type="email">


      <label for="password" class="flex-row  justify-end mr-3">Contraseña</label>
      <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" class="flex-row  border-2 border-black" name="password">



      <label for="passwordRepeat" class="flex-row  justify-end mr-3">Repita su contraseña</label>
      <input id="passwordRepeat" ref="passwordRepeat" v-model="passwordRepeat" :type="showPasswordRepeat ? 'text' : 'password'" class="flex-row  border-2 border-black" name="passwordRepeat">


      <input v-if="samePassword" class="bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Darse de alta">

  </form>


</template>

<script>
import axios from "axios";
import EyePassword from "./EyePassword.vue";

export default {
  components: {EyePassword},
  data() {
    return {
      username: '',
      password: '',
      passwordRepeat: '',
      showPassword: false,
      showPasswordRepeat: false

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
      const response = await axios.post('/register', {
        username: this.username,
        password: this.password,
        confirmedStatus: 1
      })
      console.log(response.data.message, response.data.user)
    }
  }
}
</script>

<style scoped>

</style>