<template>
  <div>
    <button @click="test()">Load data</button>
    <div v-if="myData">
      <table>
        <tr>
          <td>Username: {{ username }}</td>
        </tr>
        <tr>
          <td>Password: {{ password }}</td>
        </tr>
        <tr>
          Foto de perfil: <img :src="profilePic" alt="">
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      myData: false,
      username: '',
      password: '',
      profilePic: '',
    }
  },
  mounted() {
    console.log('guardado')
    // Check if data is in localStorage
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const profilePic = localStorage.getItem('profilePicture');
    if (username && password && profilePic) {
      // If data is in localStorage, use it
      this.username = username;
      this.password = password;
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
      axios.get('/test')
          .then(response => {
            // Save data to localStorage
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('password', response.data.password);
            localStorage.setItem('profilePicture', response.data.profilePicture);
            // Set data properties
            this.username = response.data.username;
            this.password = response.data.password;
            this.profilePic = response.data.profilePicture;
            this.myData = true;
          })
          .catch(error => {
            console.error(error);
          });
    },
    test() {
      // Call fetchData() to fetch data from server and save it to localStorage
      this.fetchData();
    }
  }
}
</script>
