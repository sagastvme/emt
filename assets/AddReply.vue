<template>

  <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
    <h1 class="text-3xl font-bold text-center py-4"> {{ this.post.title }} </h1>
    <div class="flex items-center justify-center mb-4">
      <img :src="this.post.profilePic" alt="" class="w-12 h-12 rounded-full mr-2">
      <div>
        <a :href="`/profile/${this.post.author}`">{{ this.post.author }}</a>
        <p class="text-gray-600 text-xs">Creacion de la publicacion:{{ (this.post.date) }}</p>
        <p v-if="this.post.role==='U'" class="text-gray-600 text-xs">Rol: Usuario</p>
        <p v-else class="text-gray-600 text-xs">Rol: administrador</p>
        <p class="text-gray-600 text-xs">{{ this.post.category }}</p>
<div v-if="this.post.loggedIn">
        <div v-if="this.isFavourite===null">
          <button @click="addToFavourites"> <svg-not-favourite/> </button>

        </div>
        <div v-else>

          <button @click="removeFromFavourites"> <svg-favourite/> </button>
        </div>
</div>

      </div>
    </div>
    <p class="px-6 mb-6">{{ this.post.body }}</p>
    <div v-for="image in images">
      <img class="w-20 h-20" :src="image.link" alt="">
    </div>
    <div class="flex flex-col gap-4">
      <div v-for="reply in repliesLocal" class="bg-white shadow-md rounded-lg p-4">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <img :src="reply.profilePic" alt="Profile Picture" class="w-10 h-10 rounded-full mr-4">
            <div>
              <a :href="`/profile/${ reply.user}`">{{ reply.user }}</a>
              <p v-if="reply.role==='U'" class="text-gray-600 text-xs">Rol: Usuario</p>
              <p v-else class="text-gray-600 text-xs">Rol: administrador</p>
              <p class="text-gray-500">{{ reply.date }}</p>
            </div>
          </div>
        </div>
        <p class="text-gray-800">{{ reply.body }}</p>
        <div v-for="img in reply.repliedImages">
          <img class="w-20 h-20" :src="img.link" alt="">
        </div>
      </div>
    </div>


    <form v-if="this.post.loggedIn" class="px-6 py-4 bg-gray-100 rounded-md mt-6" @submit.prevent="addReply">
      <label class="font-bold mb-2 block" for="body">Escribe una respuesta:</label>
      <textarea id="body" ref="body" class="border border-gray-400 rounded-md py-2 px-3 w-full mb-4" required
                rows="4"></textarea>
      <label class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full cursor-pointer"
             for="picture">
        Anadir imagenes a tu publicacion
      </label>
      <input id="picture" ref="newPicture" accept="image/jpeg,image/png,image/gif,image/webp" class="hidden"
             multiple="true" name="images[]" type="file" @change="print">
      <button class="bg-green-500 text-white py-2 px-3 rounded-md hover:bg-green-600" type="submit">Responder</button>
    </form>
  </div>
</template>


<script>
import axios from "axios";
import SvgFavourite from "./components/SvgIcons/SvgFavourite.vue";
import SvgNotFavourite from "./components/SvgIcons/SvgNotFavourite.vue";

export default {
  components: {SvgNotFavourite, SvgFavourite},

  methods: {
    async addReply() {

      const formData = new FormData();
      formData.append('body', this.$refs.body.value)
      formData.append('id', this.$props.post.id)

      for (const file of this.$refs.newPicture.files) {
        formData.append('images[]', file)
      }

      const response = await axios.post('/replyToPost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(response)

      console.log(response.data)
      this.repliesLocal.push(response.data.replyProcessed[0])

      console.log( this.imagesFromReplies)
      this.$refs.body.value = ''
    },
    async addToFavourites() {
      const response = await axios.post('/addPostToFavourites', {
        id: this.$props.post.id
      })
      this.isFavourite=true

    },
    async removeFromFavourites(){
      const response = await axios.post('/removePostFromFavourites', {
        id: this.$props.post.id
      })
      this.isFavourite=null

    }
  },
  mounted() {
    console.log(this.$props.post)
    this.isFavourite = this.$props.post.isFavourite
    console.log(this.$props.replies)
    console.log(this.isFavourite)
    this.images=this.$props.post.postImages
  },
  props: ['post', 'replies'],
  data() {
    return {
      repliesLocal: this.$props.replies,
      isFavourite: null,
      images:[],
      imagesFromReplies:[],
      imageFromNewReply:[]
    }
  }
}
</script>