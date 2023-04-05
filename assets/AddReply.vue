<template>
  <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold text-center py-4"> {{ this.post.title }} </h1>
    <div class="flex items-center justify-center mb-4">
      <img class="w-12 h-12 rounded-full mr-2" :src="this.post.profilePic" alt="">
      <div>
        <p class="font-bold"> {{ this.post.author }}</p>
        <p class="text-gray-600 text-xs">Creacion de la publicacion:{{ (this.post.date) }}</p>
      </div>
    </div>
    <p class="px-6 mb-6">{{ this.post.body }}</p>
    <div class="flex items-center px-6 mb-6">
      <svg class="w-5 h-5 text-gray-500 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M5 13l4 4L19 7"></path>
      </svg>
      <p class="text-gray-500">{{ this.post.category }}</p>
    </div>



    <form v-if="this.post.loggedIn" class="px-6 py-4 bg-gray-100 rounded-md mt-6" @submit.prevent="addReply">
      <label for="body" class="font-bold mb-2 block">Escribe una respuesta:</label>
      <textarea id="body" class="border border-gray-400 rounded-md py-2 px-4 w-full mb-4" ref="body" rows="4" required></textarea>
      <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Responder</button>
    </form>
  </div>
</template>


<script>
import axios from "axios";
export default {
  methods:{
   async addReply(){
      const response= await axios.post('/replyToPost',{
        body:this.$refs.body.value,
        id:this.$props.post.id
      })
     console.log(response)
     this.$refs.body.value=''
    }
  },
  mounted() {
    console.log(this.$props.post)
  },
  props:['post', 'author']
}
</script>