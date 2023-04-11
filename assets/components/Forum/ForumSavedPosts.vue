<template>
  <h2 class="text-3xl font-bold text-center py-8" v-if="posts===null || posts.length==0" >No hay nada</h2>
  <h2 class="text-3xl font-bold text-center py-8" v-else>Tus posts favoritos</h2>
  <table class="table-auto border-collapse border border-gray-500 w-full" v-else >
    <thead>
    <tr >
      <th class="px-3 py-2 text-center">Enlace</th>
      <th class="px-3 py-2 text-center">Titulo</th>
      <th class="px-3 py-2 text-center">Usuario</th>
      <th class="px-3 py-2 text-center">Categoria</th>
    </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
    <tr v-for="post in posts" :key="post.postId">
     <td>

       <a :href="'/read/'+post.category+'/'+post.title+'/'+post.postId" >Visitar el post</a>
     </td>

      <td class="border px-3 py-2">{{post.title}}</td>
      <td class="border px-3 py-2">{{post.username}}</td>
      <td class="border px-3 py-2 hidden lg:block">{{post.category}}</td>
      <td class="border px-3 py-2">
        <button @click="deletePost(post)" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Quitar de favs
        </button>
      </td>
    </tr>
    </tbody>
  </table>


  <confirm-message v-if="deletedPost!==null" :message="'Estás seguro de que quieres borrar la publicacion ' +deletedPost"
                   @close-error="this.deletedPost=null">
    <button @click="deleteUserCommit">SI</button>
    <button class="ml-8" @click="this.deletedPost=null">NO</button>
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
      posts: null,
      deletedPost:null,
      deletedPostId:null
    }
  }
}
</script>

<style scoped>

</style>