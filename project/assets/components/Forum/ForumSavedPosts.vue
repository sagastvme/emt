<template>
  <h3 v-if="posts.length==0 && dataRecovered"  class=" lg:text-xl text-6xl font-bold text-center p-8 bg-white shadow-lg rounded-lg">
    No se hay publicaciones guardadas
  </h3>
  <div v-else-if="dataRecovered">
  <h2 class="bg-[#616163] text-white text-3xl font-bold text-center py-8 text-6xl lg:text-xl lg:hidden" >Tus posts favoritos</h2>
  <table class="table-auto border-collapse  w-full text-4xl lg:text-xl" >
    <thead class="bg-gray-200 ">
    <tr >
      <th class="px-3 py-2 text-center hidden lg:table-cell">Enlace</th>

      <th class="px-3 py-2 text-center hidden lg:table-cell">Usuario</th>
      <th class="px-3 py-2 text-center hidden lg:table-cell">Categoria</th>
      <th></th>
    </tr>
    </thead>
    <tbody class="divide-y divide-gray-300">
    <tr v-for="post in posts" :key="post.postId">

      <td class=" px-3 py-2 bg-gray-300  ">

        <a  :href="'/read/'+post.category+'/'+post.title+'/'+post.postId" >{{post.title}}</a>
      </td>
      <td class=" px-3 py-2 hidden lg:table-cell bg-gray-300">{{post.username}}</td>
      <td class=" px-3 py-2 hidden lg:table-cell bg-gray-300">{{post.category}}</td>
      <td class=" px-3 py-2 bg-gray-300  ">
        <button @click="deletePost(post)" class="inline-flex items-center px-3 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 ">
          Quitar
        </button>
      </td>
    </tr>
    </tbody>
  </table>
  </div>

  <confirm-message v-if="deletedPost!==null" :message="'Estás seguro de que quieres borrar la publicacion ' +deletedPost"
                   @close-error="this.deletedPost=null">
    <button   class="lg:text-xl text-center text-4xl bg-red-500 text-white font-bold py-2 px-3 rounded hover:bg-red-600
                        transition-colors duration-300" @click="deleteUserCommit">SI</button>
    <button class="lg:text-xl bg-gray-300 text-gray-700 font-bold text-4xl text-center py-2
                 px-3 ml-4 rounded hover:bg-gray-400 transition-colors duration-300" @click="this.deletedPost=null">NO</button>
  </confirm-message>
</template>

<script>
import axios from "axios";
import ConfirmMessage from "../Messages/ConfirmMessage.vue";

export default {
  name: "ForumSavedPosts",
  components: {ConfirmMessage},
  methods: {
    async getSavedPosts() {
      const response = await axios.post('/getSavedPosts')
      this.posts = response.data.posts
      console.log(response.data.posts)
      this.dataRecovered=true
    },
    async deleteUserCommit(){
      console.log('lo quiere borrar')

      this.posts = this.posts.filter(post => post.id !== this.deletedPostId);

      const response= await axios.post('/deleteSavedPost', {
        id:this.deletedPostId,

      })
      console.log(response)



    },
    deletePost(post) {
      console.log(post)
      this.deletedPost=post.title;
      this.deletedPostId=post.id
      console.log(this.deletedPlan)
    }
  },
  mounted() {
    this.getSavedPosts()
    console.log(this.posts)
  },
  data() {
    return {
      posts: [],
      deletedPost:null,
      deletedPostId:null,
      dataRecovered:false
    }
  }
}
</script>

<style scoped>

</style>