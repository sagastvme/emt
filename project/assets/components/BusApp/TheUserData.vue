<template>
  <div class="mt-8">
    <h2 class="flex items-center justify-center">
      <img :src="profilePic" alt="" class="w-36 h-36 object-contain rounded-full">
    </h2>


    <div v-if="myData && !change && !deleteAccount" class="flex flex-col items-center">
      <ul class=" w-full  text-5xl mt-8 lg:text-xl ">
        <div class="lg:flex-row lg:flex lg:mb-10">
          <li class="mb-8 flex items-center justify-center lg:mb-0 lg:mr-2">
            <span class="text-left  font-bold">Usuario: </span>
            <span>{{ username }}</span>
          </li>

          <li class="mb-8 flex items-center justify-center lg:mb-0 lg:mr-2">
            <span class="text-left  font-bold">Publicaciones totales: </span>
            <span>{{ postsPublished }}</span>
          </li>

          <li class="mb-20 flex items-center justify-center lg:mb-0 lg:mr-2">
            <span class="text-left  font-bold">Usuario desde: </span>
            <span>{{ dateCreated }}</span>
          </li>
        </div>


        <div class="lg:flex-row lg:flex lg:mb-10">
          <li class="mb-16 mt-4 flex items-center justify-center lg:mb-0 lg:mr-20 lg:mt-0">
  <span>
    <label class="bg-blue-500 text-white px-3 py-2 rounded-md" for="picture">
      Cambiar foto de perfil
    </label>
  </span>
            <span>
    <input id="picture" ref="newPicture" accept="image/jpeg,image/png,image/gif,image/webp" class="hidden" type="file"
           @input="changePicture">
  </span>
          </li>

          <li class="mb-4 flex items-center justify-center lg:mb-0 lg:mr-20 lg:mt-0">
  <span>
    <button class="bg-blue-500 text-white px-3 py-2 rounded-md" @click="changePassword">
      Cambiar contraseña
    </button>
  </span>
          </li>

          <li class="mt-12 flex items-center justify-center lg:mb-0 lg:mr-0 lg:mt-0">
  <span>
    <button class="bg-red-500 text-white px-3 py-2 rounded-md" @click="deleteAccountMethod">
      Borrar cuenta
    </button>
  </span>
          </li>
        </div>

      </ul>

      <h3 class="text-6xl mt-14 font-bold lg:text-xl lg:mt-2">Mis publicaciones</h3>
      <div class="flex justify-center items-center">
        <ul class=" w-full text-5xl mt-8 lg:text-xl">
          <li v-for="post in this.posts" class="flex mb-8">
            <span class="lg:hidden px-3 py-2">{{ post.title.slice(0, 20).toLowerCase() + '...' }}</span>
            <span class="hidden lg:block px-3 py-2">{{ post.title}}</span>
            <span>
      <button class="mr-5 bg-red-500 text-white px-3 py-2 rounded-md" @click="deletePost(post)">
        Borrar
      </button>
    </span>
          </li>
        </ul>
      </div>
    </div>


    <!--<div v-if="final" class="text-5xl flex flex-col items-center">
          <h3 class="font-semibold mt-12 mb-8 text-5xl text-center">Cambio de contraseña</h3>


            <input id="currentPassword" ref="passInput" class="mb-8 border border-gray-300 rounded-md p-2 mr-2" type="password" placeholder="Introduzca su contraseña actual">
            <button class="bg-blue-500 text-white px-3 py-2 rounded-md" @click="secondStep">Siguiente paso</button>

        </div>

           <button class="bg-red-500 text-white px-3 py-2 rounded-md text-4xl"
                @click="this.change=false;this.middleStep=false; this.lastStep=false">Cancel
        </button>-->
    <div v-if="deleteAccount" id="DeleteAccount" class="mt-4">

      <button class="mt-8 bg-red-500 text-white px-3 py-2 rounded-md text-4xl lg:text-xl"
              @click="this.deleteAccount=false,this.secondStepDeleteAccount=false">Cancelar
      </button>

      <form v-if="!this.secondStepDeleteAccount" @submit.prevent="checkDeleteAccountPassword">
        <div id="CancelButton" class="lg:text-xl text-5xl flex flex-col items-center lg:text-xl">
          <input id="" ref="deletePassword" class="lg:mt-4 mt-8 mb-8 border border-gray-300 rounded-md p-2 mr-2" name="" placeholder="Contrasena"
                 type="password">
          <button class="bg-blue-500 text-white px-3 py-2 rounded-md lg:text-xl">Siguiente paso</button>
        </div>

      </form>
      <button v-else class="ml-12 bg-blue-500 text-white px-3 py-2 rounded-md text-4xl lg:text-xl" @click="deleteAccountLasStep">
        Borrar cuenta
      </button>

    </div>


    <div v-if="change">
      <button class="bg-red-500 text-white px-3 py-2 rounded-md text-4xl lg:text-xl"
              @click="this.change=false;this.middleStep=false; this.lastStep=false">Cancel
      </button>


      <div v-if="final" class="text-5xl flex flex-col items-center lg:text-xl">
        <h3 class="font-semibold mt-12 mb-8 text-5xl text-center lg:text-xl lg:mt-4">Cambio de contraseña</h3>


        <input id="currentPassword" ref="passInput" class="mb-8 border border-gray-300 rounded-md p-2 mr-2"
               placeholder="Contraseña actual" type="password">
        <button class="lg:text-xl bg-blue-500 text-white px-3 py-2 rounded-md" @click="secondStep">Siguiente paso</button>

      </div>


      <div v-if="lastStep" class="text-5xl flex flex-col items-center lg:text-xl">
        <h3 class="font-semibold mt-12 mb-8 text-5xl text-center lg:text-xl lg:mt-4 lg:mb-0">Cambio de contraseña</h3>

        <input id="password" v-model="checkPassword" class="lg:text-xl mt-4 mb-8 border border-gray-300 rounded-md p-2 mr-2"
               name="checkPassword" placeholder="Contrasena nueva" type="password">

        <input id="passwordRepeat" v-model="passwordRepeat" class="mb-8 border border-gray-300 rounded-md p-2 mr-2"
               name="passwordRepeat" placeholder="Repita su contrasena" type="password">
        <button v-if="samePassword" class="bg-blue-500 text-white px-3 py-2 rounded-md mt-4 lg:mt-0"
                @click="changeFinalPassword">Cambiar contraseña
        </button>
      </div>

      <!--<div v-if="final" class="text-5xl flex flex-col items-center">
        <h3 class="font-semibold mt-12 mb-8 text-5xl text-center">Cambio de contraseña</h3>


          <input id="currentPassword" ref="passInput" class="mb-8 border border-gray-300 rounded-md p-2 mr-2" type="password" placeholder="Introduzca su contraseña actual">
          <button class="bg-blue-500 text-white px-3 py-2 rounded-md" @click="secondStep">Siguiente paso</button>

      </div>-->

    </div>
    <teleport to="body">
      <error-message v-if="showErrorMessage" message="La contrasena no coincide"
                     @close-error="showErrorMessage=false"/>
      <error-message v-if="wrongFilePic" message="El tipo de imagen no es valido por favor intente otro"
                     @close-error="wrongFilePic=false"/>

      <error-message v-if="success" message="La contrasena se ha cambiado correctamente"
                     @close-error="success=false"/>
      <error-message v-if="finalDeleteMessage" message="Se le ha enviado un correo para que pueda borrar la cuenta"
                     @close-error="finalDeleteMessage=false, this.deleteAccount=false,this.secondStepDeleteAccount=false"/>


      <confirm-message v-if="deletedPost!==null"
                       :message="'Estás seguro de que quieres borrar la publicacion ' +deletedPost"
                       @close-error="this.deletedPost=null">
        <button class=" text-center lg:text-xl text-4xl bg-red-500 text-white font-bold py-2 px-3 rounded hover:bg-red-600 transition-colors duration-300"
                @click="deleteUserCommit">
          SI
        </button>
        <button
            class="lg:text-xl bg-gray-300 text-gray-700 font-bold text-4xl text-center py-2 px-3 ml-4 rounded hover:bg-gray-400 transition-colors duration-300"
            @click="this.deletedPost=null">NO
        </button>
      </confirm-message>
    </teleport>
  </div>
</template>

<script>
import axios from "axios";
import ErrorMessage from "../Messages/ErrorMessage.vue";
import ConfirmMessage from "../Messages/ConfirmMessage.vue";

export default {
  components: {ConfirmMessage, ErrorMessage},
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
      final: true,
      checkPassword: '',
      passwordRepeat: '',
      success: false,
      newPicture: '',
      wrongFilePic: false,
      deleteAccount: false,
      secondStepDeleteAccount: false,
      finalDeleteMessage: false,
      posts: null,
      deletedPost: null,
      deletedPostId: null,
      postsPublished: null,
      dateCreated: null,
      role: null

    }
  },
  computed: {
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
    this.fetchData();
    this.getPostsPublished();
  },
  methods: {
    fetchData() {
      axios.get('/userData')
          .then(response => {

            console.log(response.data)

            // Set data properties
            this.username = response.data.username;

            this.profilePic = response.data.profilePicture;
            this.postsPublished = response.data.postsPublished
            this.dateCreated = response.data.dateCreated
            this.role = response.data.role
            this.myData = true;
          })
          .catch(error => {
            console.error(error);
          });
    },
    async deleteUserCommit() {
      console.log('lo quiere borrar')

      this.posts = this.posts.filter(post => post.id !== this.deletedPostId);

      const response = await axios.post('/deletePost', {
        id: this.deletedPostId,

      })
      console.log(response)


    },
    deletePost(post) {
      console.log(post)
      this.deletedPost = post.title;
      this.deletedPostId = post.id
      console.log(this.deletedPlan)
    },
    async getPostsPublished() {
      const response = await axios.post('/getPostsPublishedByUser')
      console.log(response)
      this.posts = response.data.posts
      console.log(response.data.posts)
    },
    changePassword() {
      this.change = true
      this.final = true
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
    async changeFinalPassword() {
      const response = await axios.post('/changeP', {
        password: this.checkPassword
      })
      console.log(response.data)
      this.success = true
      this.change = false
      this.lastStep = false
    },
    async changePicture() {
      var fileName = (this.$refs.newPicture.files[0].type)
      console.log(fileName)
      if (fileName == 'image/jpeg' || fileName == 'image/png' ||
          fileName == 'image/gif' || fileName == 'image/webp') {
        const formData = new FormData();
        formData.append('profilePic', this.$refs.newPicture.files[0]);
        const response = await axios.post('/profile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        var success = response.data.success
        console.log(response)
        if (success) {
          console.log(response.data)
          this.profilePic = response.data.newPicture + '?t=' + new Date().getTime();
        }

      } else {
        this.wrongFilePic = true
      }
    },
    deleteAccountMethod() {
      console.log(0)
      this.deleteAccount = true
    },
    async checkDeleteAccountPassword() {
      this.passInput = this.$refs.deletePassword.value;
      console.log(this.passInput)
      const response = await axios.post('/checkPassword', {
        'password': this.passInput
      })
      let result = response.data.isPasswordCorrect
      if (result) {
        console.log(0)
        this.secondStepDeleteAccount = true

      } else {
        this.showErrorMessage = true
        this.$refs.deletePassword.value = ''
      }
    },
    async deleteAccountLasStep() {
      this.finalDeleteMessage = true;
      console.log('Falta por hacer el enviar correo desde el server y toda la logica restante')
      const response = await axios.post('/sendDeleteEmail')
    }
  }
}
</script>
