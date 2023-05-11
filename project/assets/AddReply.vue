<template>

  <div class="max-w-2xl mx-auto  rounded-lg ">
    <h1 class="text-3xl font-bold text-center py-4  "> {{ this.post.title }}
      <div v-if="this.post.loggedIn">
        <div v-if="this.isFavourite===null">
          <button @click="addToFavourites">
            <svg-not-favourite class="h-7 w-7"/>
          </button>

        </div>
        <div v-else>

          <button @click="removeFromFavourites">
            <svg-favourite class="h-7 w-7"/>
          </button>
        </div>
      </div>
    </h1>
    <!--<div class="bg-white shadow-md rounded-lg p-4 mb-6">
      <div class="flex justify-between items-center mb-4">
      <div class="flex items-center">
        <img :src="this.post.profilePic" alt="" class="w-12 h-12 rounded-full mr-2">
      </div>

        <a :href="`/profile/${this.post.author}`"></a>
        <p class="text-gray-600 text-xs">Creacion de la publicacion:{{ (this.post.date) }}</p>
        <p v-if="this.post.role==='U'" class="text-gray-600 text-xs">Rol: Usuario</p>
        <p v-else class="text-gray-600 text-xs">Rol: administrador</p>
        <p class="text-gray-600 text-xs">{{ this.post.category }}</p>


      <p >{{ this.post.body }}</p>
    </div>

    <div v-for="image in images">
      <img :src="image.link" alt="" class="w-20 h-20">
    </div>-->
    <div class="flex flex-col gap-4 mb-5">
      <div class="bg-white shadow-md rounded-lg p-4">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <img @click="viewImage(this.post.profilePic)" :src="this.post.profilePic" alt="Profile Picture" class="w-12 h-12 object-contain rounded-full mr-2">
            <div>
              <a :href="`/profile/${ this.post.author}`">{{ this.post.author }}</a>
              <p v-if="this.post.role==='U'" class="text-gray-600 text-xs">Rol: Usuario</p>
              <p v-else class="text-gray-600 text-xs">Rol: administrador</p>
              <p class="text-gray-600 text-xs">{{ this.post.category }}</p>
              <p class="text-gray-600 text-xs">{{ (this.post.date) }}</p>
            </div>
          </div>
        </div>
        <p class="text-gray-800">{{ this.post.body }}</p>
        <div class="flex flex-wrap">
          <div v-for="image in images" class="w-20 h-20">
            <img @click="viewImage(image.link)" :src="image.link" alt="" class="w-full h-full">
          </div>
        </div>

      </div>
    </div>




    <div class="flex flex-col gap-4">
      <div v-for="reply in repliesLocal" class="bg-white shadow-md rounded-lg p-4">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <img @click="viewImage(reply.profilePic)" :src="reply.profilePic" alt="Profile Picture" class="w-12 h-12 object-contain rounded-full mr-4">
            <div>
              <a :href="`/profile/${ reply.user}`">{{ reply.user }}</a>
              <p v-if="reply.role==='U'" class="text-gray-600 text-xs">Rol: Usuario</p>
              <p v-else class="text-gray-600 text-xs">Rol: administrador</p>
              <p class="text-gray-600 text-xs">{{ reply.date }}</p>
            </div>
          </div>
        </div>
        <p class="text-gray-800">{{ reply.body }}</p>
        <div class="flex flex-wrap">
          <div v-for="img in reply.repliedImages" class="w-20 h-20">
            <img @click="viewImage(img.link)" :src="img.link" alt="" class="w-full h-full">
          </div>
        </div>

      </div>
    </div>


    <form v-if="this.post.loggedIn" class="px-6 py-4 bg-gray-100 rounded-md my-6" @submit.prevent="addReply">
      <label class="font-bold mb-2 block" for="body">Escribe una respuesta:</label>
      <textarea id="body" ref="body" class="border border-gray-400 rounded-md py-2 px-3 w-full mb-4" required
                rows="4"></textarea>
      <label class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-md mr-3 cursor-pointer"
             for="picture">
        Anadir imagenes a tu publicacion
      </label>
      <input id="picture" ref="newPicture" accept="image/jpeg,image/png,image/gif,image/webp" class="hidden"
             multiple="true" name="images[]" type="file" @change="print">
      <button class="bg-[#06d6a0] mt-4 text-white py-2 px-3 rounded-md hover:bg-green-600" type="submit">Responder
      </button>
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

      console.log(this.imagesFromReplies)
      this.$refs.body.value = ''
    },
    async addToFavourites() {
      const response = await axios.post('/addPostToFavourites', {
        id: this.$props.post.id
      })
      this.isFavourite = true

    },
    async removeFromFavourites() {
      const response = await axios.post('/removePostFromFavourites', {
        id: this.$props.post.id
      })
      this.isFavourite = null

    },
    viewImage(plan) {
      window.location.href = plan;
    }
  },
  mounted() {
    console.log(this.$props.post)
    this.isFavourite = this.$props.post.isFavourite
    console.log(this.$props.replies)
    console.log(this.isFavourite)
    this.images = this.$props.post.postImages
  },
  props: ['post', 'replies'],
  data() {
    return {
      repliesLocal: this.$props.replies,
      isFavourite: null,
      images: [],
      imagesFromReplies: [],
      imageFromNewReply: []
    }
  }
}
</script>