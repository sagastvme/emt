<template>
  <div class="text-5xl lg:text-xl lg:w-3/4">
    <h1 class="text-6xl font-bold mb-8 flex justify-center lg:hidden">Borrar usuarios</h1>
    <form @submit.prevent="searchUser" class="">
    <h2 class=" font-bold mb-2">Introduzca el usuario que quiere buscar</h2>
    <input ref="searchedUser" placeholder="Usuario deseado" required type="email"
           class="w-full border border-gray-300 rounded-lg mb-4 px-3 py-2">
    <input type="submit" value="Buscar usuario" class="bg-[#2892d7] text-white py-2 px-3 rounded-lg cursor-pointer">
  </form>

  <table v-if="searchedUser==null" class="w-full">
    <tr class="text-4xl lg:text-xl " v-for="user in users" :key="user" :class="{ focused: user === searchedUser }">
      <td class="py-2 font-bold">{{ user }}</td>
      <td class="py-2">
        <button @click="deleteUser(user)"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-lg cursor-pointer">
          Borrar usuario
        </button>
      </td>
    </tr>
  </table>

  <table v-else class="w-full">
    <tr>
      <td class="py-2">
        <button @click="this.searchedUser=null"
                class="bg-[#048a81] text-white py-2 px-3 rounded-lg cursor-pointer">Ir atras
        </button>
      </td>
      <td class="py-2 font-bold">{{ searchedUser }}</td>
      <td class="py-2">
        <button @click="deleteUser(searchedUser)"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-lg cursor-pointer">
          Borrar usuario
        </button>
      </td>
    </tr>
  </table>

  <teleport v-if="deletedUser!==null" to="body">
    <confirm-message :message="'Estás seguro de que quieres borrar la cuenta ' +deletedUser"
                     @close-error="this.deletedUser=null">
      <button @click="deleteUserCommit"
              class="lg:text-xl text-center text-4xl bg-red-500 text-white font-bold py-2 px-3 rounded hover:bg-red-600
                        transition-colors duration-300">SI
      </button>
      <button
              @click="this.deletedUser=null"
              class="lg:text-xl bg-gray-300 text-gray-700 font-bold text-4xl text-center py-2
                 px-3 ml-4 rounded hover:bg-gray-400 transition-colors duration-300">NO
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