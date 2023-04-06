<template>

  <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold text-center py-4">    {{ this.post.title }} </h1>
    <div class="flex items-center justify-center mb-4">
      <img class="w-12 h-12 rounded-full mr-2" :src="this.post.profilePic" alt="">
      <div>
        <a :href="`/profile/${this.post.author}`">{{ this.post.author }}</a>
        <p class="text-gray-600 text-xs">Creacion de la publicacion:{{ (this.post.date) }}</p>
        <p class="text-gray-600 text-xs">{{ this.post.category }}</p>
      </div>
    </div>
    <p class="px-6 mb-6">{{ this.post.body }}</p>
    <div class="flex flex-col gap-4">
      <div v-for="reply in repliesLocal" class="bg-white shadow-md rounded-lg p-4">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" :src="reply.profilePic" alt="Profile Picture">
            <div>
              <a :href="`/profile/${ reply.user}`">{{ reply.user}}</a>

              <p class="text-gray-500">{{ reply.date }}</p>
            </div>
          </div>
        </div>
        <p class="text-gray-800">{{ reply.body }}</p>
      </div>
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
     console.log(response.data)
     this.repliesLocal.push(response.data.replyProcessed[0])
     this.$refs.body.value=''
    }
  },
  mounted() {
    console.log(this.$props.post)
    console.log(this.$props.replies)
  },
  props:['post', 'replies'],
  data(){
    return{
      repliesLocal:this.$props.replies
    }
  }
}
</script>