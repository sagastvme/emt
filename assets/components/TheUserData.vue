<template>

  <div v-if="myData && !change">
    <table>
      <tr>
        <td>Username:</td>
        <td>{{ username }}</td>
      </tr>
      <tr>
        <td>
          Foto de perfil:
        </td>
        <td>
          <img :src="profilePic" alt="">
        </td>
      </tr>
      <tr>
        <td>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                  @click="changePassword">
            Click me
          </button>
        </td>
      </tr>
    </table>
  </div>


  <div v-if="change">
    <button class="bg-red-500 text-white px-4 py-2 rounded-md"
            @click="this.change=false;this.middleStep=false; this.lastStep=false">Cancel
    </button>

    <div v-if="final">
      <h3 class="text-lg font-semibold mt-4">Cambio de contrasena</h3>
      <label class="block mt-4" for="currentPassword">Introduzca su contrasena actual</label>
      <input type="password" id="currentPassword" ref="passInput" class="border border-gray-300 rounded-md p-2" >
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" @click="secondStep">Next step</button>
    </div>
  </div>

  <div v-if="lastStep">
    <label for="password" class="flex-row  justify-end mr-3">Contraseña</label>
    <input type="password" v-model="checkPassword" id="password" class="flex-row  border-2 border-black" name="checkPassword">
    <label for="passwordRepeat" class="flex-row  justify-end mr-3">Repita su contraseña</label>
    <input type="password"  id="passwordRepeat" v-model="passwordRepeat" class="flex-row  border-2 border-black" name="passwordRepeat">
    <button v-if="samePassword"  class="bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="changeFinalPassword">Cambiar contrasena</button>
  </div>

  <teleport to="body">
    <error-message v-if="showErrorMessage" message="La contrasena no coincide"
                   @close-error="showErrorMessage=false"></error-message>


    <error-message v-if="success" message="La contrasena se ha cambiado correctamente"
                   @close-error="success=false"></error-message>
  </teleport>

</template>

<script>
import axios from "axios";
import ErrorMessage from "./ErrorMessage.vue";

export default {
  components: {ErrorMessage},
  data() {
    return {
      myData: false,
      username: '',
      profilePic: '',
      passInput: '',
      middleStep: false,
      showErrorMessage: false,
      change: false,
      lastStep: false,
      final:true,
      checkPassword:'',
      passwordRepeat:'',
      success:false
    }
  },
  computed:{
    samePassword() {
console.log(this.checkPassword, this.passwordRepeat)
      if (this.checkPassword == this.passwordRepeat
          && this.checkPassword != '' && this.passwordRepeat != '') {
        return true;
      } else {

        return false;
      }
    }
  },
  mounted() {
    console.log('guardado')
    // Check if data is in localStorage
    const username = localStorage.getItem('username');
    const profilePic = localStorage.getItem('profilePicture');

    if (username && profilePic) {
      // If data is in localStorage, use it
      this.username = username;
      this.profilePic = profilePic;
      this.myData = true;

    } else {
      console.log('llamo al server')
      // If data is not in localStorage, fetch it and save it to localStorage
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
      axios.get('/userData')
          .then(response => {
            // Save data to localStorage
            localStorage.setItem('username', response.data.username);

            localStorage.setItem('profilePicture', response.data.profilePicture);
            // Set data properties
            this.username = response.data.username;

            this.profilePic = response.data.profilePicture;
            this.myData = true;
          })
          .catch(error => {
            console.error(error);
          });
    },
    changePassword() {
      this.change = true
      this.final=true
    },
    async secondStep() {
      this.passInput = this.$refs.passInput.value;
      console.log(this.passInput)
      const response = await axios.post('/checkPassword', {
        'password': this.passInput
      })
      let result = response.data.isPasswordCorrect
      if (result) {
        console.log('cbum')
        this.lastStep = true
        this.final = false
        console.log(this.middleStep)
      } else {
        this.showErrorMessage = true
        this.$refs.passInput.value = ''
      }
    },
   async changeFinalPassword(){
      const response=await axios.post('/changeP', {
        password: this.checkPassword
      })
     console.log(response.data)
     this.success=true
     this.change=false
     this.lastStep=false
    }
  }
}
</script>
