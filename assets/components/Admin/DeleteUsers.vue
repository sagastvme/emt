<template>

  <form @submit.prevent="searchUser">
    <h2>Introduzca el usuario que quiere buscar </h2>
    <input ref="searchedUser" placeholder="aqui" required type="email">
    <input class="bg-red-400" type="submit" value="Buscar usuario">
  </form>


  <table v-if="searchedUser==null">
    <tr v-for="user in users" :key="user" :class="{ focused: user === searchedUser }">
      <td>{{ user }}</td>
      <td>
        <button @click="deleteUser(user)">Borrar usuario</button>
      </td>
    </tr>
  </table>


  <table v-else>

    <tr>
      <td>
        <button class="bg-red-300" @click="this.searchedUser=null">Ir atras</button>
      </td>
      <td>{{ searchedUser }}</td>
      <td>
        <button @click="deleteUser(searchedUser)">Borrar usuario</button>
      </td>
    </tr>
  </table>
  <teleport v-if="deletedUser!==null" to="body">
    <confirm-message :message="'Estás seguro de que quieres borrar la cuenta ' +deletedUser"
                     @close-error="this.deletedUser=null">
      <button @click="deleteUserCommit">SI</button>
      <button class="ml-8" @click="this.deletedUser=null">NO</button>
    </confirm-message>
  </teleport>
</template>

<script>
import axios from "axios";
import ConfirmMessage from "../ConfirmMessage.vue";

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