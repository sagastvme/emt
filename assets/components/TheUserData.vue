<template>

    <div v-if="myData">
      <table>
        <tr>
          <td>Username: </td>
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
            <button @click="changePassword" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Click me
            </button>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      myData: false,
      username: '',
      profilePic: '',
    }
  },
  mounted() {
    console.log('guardado')
    // Check if data is in localStorage
    const username = localStorage.getItem('username');

    const profilePic = localStorage.getItem('profilePicture');
    if (username &&  profilePic) {
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
    }
  }
}
</script>
