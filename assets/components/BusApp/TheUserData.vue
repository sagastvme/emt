<template>
<div>
  <h2 class="flex items-center justify-center">
    <img :src="profilePic" alt="" class="w-36 h-36 object-contain rounded-full">
  </h2>



  <div v-if="myData && !change && !deleteAccount" class="flex flex-col items-center">

 <!--   <table class="border-collapse border border-gray-400 w-full">

      <thead class="bg-gray-100">
      <tr>
        <th class="border border-gray-400 px-3 py-2 font-bold text-center">Username:</th>
        <th class="border border-gray-400 px-3 py-2 text-center">{{ username }}</th>
      </tr>
      <tr>
        <th class="border border-gray-400 px-3 py-2 font-bold text-center">Foto de perfil:</th>
        <th class="border border-gray-400 px-3 py-2 text-center">
          <img :src="profilePic" alt="" class="w-5 h-5">
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="border border-gray-400 px-3 py-2 font-bold text-center">Posts publicados:</td>
        <td class="border border-gray-400 px-3 py-2 text-center">{{ postsPublished}}</td>
      </tr>
      <tr>
        <td class="border border-gray-400 px-3 py-2 font-bold text-center">Fecha de creacion de la cuenta:</td>
        <td class="border border-gray-400 px-3 py-2 text-center">{{ dateCreated }}</td>
      </tr>
      <tr>
        <td class="border border-gray-400 px-3 py-2 font-bold text-center">Rol:</td>
        <td class="border border-gray-400 px-3 py-2 text-center">
        <span v-if="this.role==='U'" class="bg-green-500 text-white font-bold py-1 px-2 rounded-full">
          Usuario
        </span>
          <span v-else class="bg-red-500 text-white font-bold py-1 px-2 rounded-full">
          Administrador
        </span>
        </td>
      </tr>
      <tr v-for="post in this.posts">
        <td class="border border-gray-400 px-3 py-2 text-center">{{ post.title }}</td>
        <td class="border border-gray-400 px-3 py-2 text-center">{{ post.category }}</td>
        <td class="border border-gray-400 px-3 py-2 text-center">{{ post.date }}</td>
        <td class="border border-gray-400 px-3 py-2 text-center">
          <button @click="deletePost(post)" class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-full">
            Borrar publicacion
          </button>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td class="border border-gray-400 px-3 py-2 text-center">
          <label class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full cursor-pointer"
                 for="picture">
            Cambiar foto de perfil
          </label>
        </td>
        <td class="border border-gray-400 px-3 py-2">
          <input id="picture" ref="newPicture" accept="image/jpeg,image/png,image/gif,image/webp" class="hidden"
                 type="file" @input="changePicture">
        </td>
      </tr>
      <tr>
        <td class="border border-gray-400 px-3 py-2">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full"
                  @click="changePassword">
            Cambiar contraseña
          </button>
        </td>
      </tr>
      <tr>
        <td class="border border-gray-400 px-3 py-2">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full"
                  @click="deleteAccountMethod">
            Borrar cuenta
          </button>
        </td>
      </tr>
      </tfoot>
    </table>-->
    <ul class=" w-full  text-5xl mt-8">

      <li class="mb-8 flex items-center justify-center">
        <span class="text-left  font-bold">Usuario: </span>
        <span >{{ username }}</span>
      </li>

      <li class="mb-8 flex items-center ">
        <span class="text-left  font-bold">Publicaciones totales: </span>
        <span >{{ postsPublished}}</span>
      </li>

      <li class="mb-8 flex items-center ">
        <span class="text-left  font-bold">Usuario desde: </span>
        <span >{{ dateCreated }}</span>
      </li>





      <li class="mb-12 mt-4 flex items-center justify-center">
  <span>
    <label class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full" for="picture">
      Cambiar foto de perfil
    </label>
  </span>
        <span>
    <input id="picture" ref="newPicture" accept="image/jpeg,image/png,image/gif,image/webp" class="hidden" type="file" @input="changePicture">
  </span>
      </li>

      <li class="mb-4 flex items-center justify-center">
  <span>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full" @click="changePassword">
      Cambiar contraseña
    </button>
  </span>
      </li>

      <li class="mt-12 flex items-center justify-center">
  <span>
    <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-full" @click="deleteAccountMethod">
      Borrar cuenta
    </button>
  </span>
      </li>

    </ul>

    <h3 class="text-6xl mt-14 font-bold">Mis publicaciones</h3>
    <div class="flex justify-center items-center">
    <ul class=" w-full text-5xl mt-8">
      <li v-for="post in this.posts" class="flex">
        <span class="px-3 py-2">{{ post.title }}</span>
        <span >
      <button @click="deletePost(post)" class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-full">
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

      <button class="mt-8 bg-red-500 text-white px-3 py-2 rounded-md text-4xl" @click="this.deleteAccount=false,this.secondStepDeleteAccount=false">Cancelar</button>

      <form v-if="!this.secondStepDeleteAccount" @submit.prevent="checkDeleteAccountPassword" >
        <div id="CancelButton" class="text-5xl flex flex-col items-center">
        <input id="" ref="deletePassword" name="" placeholder="Introduzca su contrasena" type="password"  class="mt-8 mb-8 border border-gray-300 rounded-md p-2 mr-2">
        <button class="bg-blue-500 text-white px-3 py-2 rounded-md">Siguiente paso</button>
        </div>

      </form>
      <button v-else @click="deleteAccountLasStep" class="ml-12 bg-blue-500 text-white px-3 py-2 rounded-md text-4xl">Borrar cuenta</button>

  </div>



  <div v-if="change">
    <button class="bg-red-500 text-white px-3 py-2 rounded-md text-4xl"
            @click="this.change=false;this.middleStep=false; this.lastStep=false">Cancel
    </button>


    <div v-if="final" class="text-5xl flex flex-col items-center">
      <h3 class="font-semibold mt-12 mb-8 text-5xl text-center">Cambio de contraseña</h3>


        <input id="currentPassword" ref="passInput" class="mb-8 border border-gray-300 rounded-md p-2 mr-2" type="password" placeholder="Introduzca su contraseña actual">
        <button class="bg-blue-500 text-white px-3 py-2 rounded-md" @click="secondStep">Siguiente paso</button>

    </div>



    <div v-if="lastStep" class="text-5xl flex flex-col items-center">
      <h3 class="font-semibold mt-12 mb-8 text-5xl text-center">Cambio de contraseña</h3>

    <input placeholder="Contrasena nueva" id="password" v-model="checkPassword" class="mt-4 mb-8 border border-gray-300 rounded-md p-2 mr-2" name="checkPassword" type="password">

    <input placeholder="Repita su contrasena" id="passwordRepeat" v-model="passwordRepeat" class="mb-8 border border-gray-300 rounded-md p-2 mr-2" name="passwordRepeat" type="password">
    <button v-if="samePassword" class="bg-blue-500 text-white px-3 py-2 rounded-md mt-4" @click="changeFinalPassword">Cambiar contraseña</button>
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
    <error-message message="Se le ha enviado un correo para que pueda borrar la cuenta" v-if="finalDeleteMessage"
                   @close-error="finalDeleteMessage=false, this.deleteAccount=false,this.secondStepDeleteAccount=false"/>



    <confirm-message v-if="deletedPost!==null" :message="'Estás seguro de que quieres borrar la publicacion ' +deletedPost"
                     @close-error="this.deletedPost=null">
      <button @click="deleteUserCommit">SI</button>
      <button class="ml-8" @click="this.deletedPost=null">NO</button>
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
      finalDeleteMessage:false,
      posts:null,
      deletedPost:null,
      deletedPostId:null,
      postsPublished:null,
      dateCreated:null,
      role:null

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
            this.postsPublished=response.data.postsPublished
            this.dateCreated=response.data.dateCreated
            this.role=response.data.role
            this.myData = true;
          })
          .catch(error => {
            console.error(error);
          });
    },
    async deleteUserCommit(){
      console.log('lo quiere borrar')

      this.posts = this.posts.filter(post => post.id !== this.deletedPostId);

      const response= await axios.post('/deletePost', {
        id:this.deletedPostId,

      })
      console.log(response)



    },
    deletePost(post) {
      console.log(post)
      this.deletedPost=post.title;
      this.deletedPostId=post.id
      console.log(this.deletedPlan)
    },
   async getPostsPublished(){
      const response =await  axios.post('/getPostsPublishedByUser')
      console.log(response)
     this.posts=response.data.posts
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
   async deleteAccountLasStep(){
     this.finalDeleteMessage=true;
     console.log('Falta por hacer el enviar correo desde el server y toda la logica restante')
     const response = await axios.post('/sendDeleteEmail')
    }
  }
}
</script>
