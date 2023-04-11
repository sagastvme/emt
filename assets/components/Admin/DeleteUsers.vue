<template>
  <div>
  <form @submit.prevent="searchUser" class="my-4 md:w-1/2 md:mx-auto">
    <h2 class="text-xl font-bold mb-2">Introduzca el usuario que quiere buscar</h2>
    <input ref="searchedUser" placeholder="aqui" required type="email"
           class="w-full border border-gray-300 rounded-lg mb-4 px-3 py-2">
    <input type="submit" value="Buscar usuario" class="bg-red-400 text-white py-2 px-3 rounded-lg cursor-pointer">
  </form>

  <table v-if="searchedUser==null" class="w-full">
    <tr v-for="user in users" :key="user" :class="{ focused: user === searchedUser }">
      <td class="py-2">{{ user }}</td>
      <td class="py-2">
        <button @click="deleteUser(user)"
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full cursor-pointer">
          Borrar usuario
        </button>
      </td>
    </tr>
  </table>

  <table v-else class="w-full">
    <tr>
      <td class="py-2">
        <button @click="this.searchedUser=null"
                class="bg-red-300 text-white py-2 px-3 rounded-lg cursor-pointer">Ir atras
        </button>
      </td>
      <td class="py-2">{{ searchedUser }}</td>
      <td class="py-2">
        <button @click="deleteUser(searchedUser)"
                class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full cursor-pointer">
          Borrar usuario
        </button>
      </td>
    </tr>
  </table>

  <teleport v-if="deletedUser!==null" to="body">
    <confirm-message :message="'Estás seguro de que quieres borrar la cuenta ' +deletedUser"
                     @close-error="this.deletedUser=null">
      <button @click="deleteUserCommit"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-full cursor-pointer">SI
      </button>
      <button
              @click="this.deletedUser=null"
              class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-3 rounded-full cursor-pointer">NO
      </button>
    </confirm-message>
  </teleport>
  </div>
</template>

<script>
import axios from "axios";
import ConfirmMessage from "../Messages/ConfirmMessage.vue";

export default {
  components: {ConfirmMessage},
  mounted() {
    this.loadAllUsers();
  }, methods: {
    async loadAllUsers() {
      const response = await axios.get('/allUsers')

      console.log(response)
      this.users = response.data.users
    },
    searchUser() {
      console.log(this.$refs.searchedUser.value)
      const foundUser = this.users.find(u => u === this.$refs.searchedUser.value);
      console.log(foundUser)
      if (foundUser) {
        console.log(0);
        this.searchedUser = foundUser
      } else {
        alert('no existe')
        this.$refs.searchedUser.value = '';
        this.$refs.searchedUser.focus();
      }
    },
    deleteUser(user) {
      console.log(user)
      this.deletedUser=user;
      console.log(this.deletedUser)
    },
   async deleteUserCommit(){
      console.log('lo quiere borrar')

      this.users=this.users.filter(u=> u!==this.deletedUser);
      console.log(this.users)
      this.searchedUser=null

     const response= await axios.post('/adminDeletesUserAccount', {
       user:this.deletedUser
     })
     console.log(response)
    }
  },
  data() {
    return {
      users: null,
      searchedUser: null,
      deletedUser:null
    }
  }
}
</script>

<style scoped>
tr.focused {
  background-color: yellow;
}

</style>