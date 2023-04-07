<template>
  <h1 v-if="posts===null || posts.length==0" >No hay nada</h1>
  <table class="min-w-full divide-y divide-gray-200" v-else >
    <thead>
    <tr class="bg-gray-50">
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuario</th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
    </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
    <tr v-for="post in posts" :key="post.postId">
      <a :href="'/read/'+post.category+'/'+post.title+'/'+post.postId" >Visitar el post</a>

      <td class="px-6 py-4 whitespace-nowrap">{{post.title}}</td>
      <td class="px-6 py-4 whitespace-nowrap">{{post.username}}</td>
      <td class="px-6 py-4 whitespace-nowrap">{{post.category}}</td>
      <td class="px-6 py-4 whitespace-nowrap">
        <button @click="deletePost(post)" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
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
import ConfirmMessage from "../ConfirmMessage.vue";

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