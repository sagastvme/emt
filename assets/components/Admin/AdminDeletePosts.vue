<template>
  <div class="text-4xl lg:text-xl">
  <h1 class="text-6xl font-bold mb-8 flex justify-center lg:hidden">Publicaciones del foro</h1>

  <table class="w-full">
    <thead >
    <tr class="bg-gray-200">
      <th class="px-3 py-2">Título</th>
      <th class="px-3 py-2">Autor</th>
      <th class="px-3 py-2 hidden lg:table-cell">Categoría</th>
      <th class="px-3 py-2 hidden lg:table-cell">Fecha de creación</th>
      <th class="px-3 py-2"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="post in posts" :key="post.id" class=" px-3 py-2  bg-gray-300 ">
      <td class="border px-3 py-2">{{ post.title }}</td>
      <td class="border px-3 py-2">{{ post.author }}</td>
      <td class="border px-3 py-2 hidden lg:table-cell">{{ post.category }}</td>
      <td class="border px-3 py-2 hidden lg:table-cell">{{ post.dateCreated }}</td>
      <td class="border px-3 py-2">
        <button class="bg-red-500 text-white px-2 py-1 rounded-md"
                @click="deletePost(post)">
          Borrar
        </button>
      </td>
    </tr>
    </tbody>
  </table>
  </div>

  <teleport to="body">
    <confirm-message v-if="deletedPost !== null"
                     :message="'Estás seguro de que quieres borrar la publicación ' + deletedPost"
                     @close-error="deletedPost = null">
      <button  class="lg:text-xl text-center text-4xl bg-red-500 text-white font-bold py-2 px-3 rounded hover:bg-red-600
                        transition-colors duration-300"
               @click="deleteUserCommit">
        SI
      </button>
      <button class="lg:text-xl bg-gray-300 text-gray-700 font-bold text-4xl text-center py-2
                 px-3 ml-4 rounded hover:bg-gray-400 transition-colors duration-300"

              @click="deletedPost = null">
        NO
      </button>
    </confirm-message>
  </teleport>
</template>


<script>
import axios from "axios";
import ConfirmMessage from "../Messages/ConfirmMessage.vue";

export default {
  name: "DeletePosts",
  components: {ConfirmMessage},
  mounted() {
    this.printPosts();
  },
  methods:{
    async printPosts(){
      console.log(8)
      const response=await axios.post('/getAllPostsForAdmin')
      console.log(response)
      console.log(9)
      this.posts=response.data.posts
    },
    deletePost(post){
      console.log(post)
      this.deletedPost=post.title;
      this.deletedPostId=post.id
      console.log(this.deletedPost)
    },
    async deleteUserCommit(){
      console.log('lo quiere borrar')

      this.posts = this.posts.filter(post => post.id !== this.deletedPostId);

      const response= await axios.post('/deletePost', {
        id:this.deletedPostId,

      })
      console.log(response)



    }
  },
  data(){
    return{
      posts: null,
      deletedPost:null,
      deletedPostId:null
    }
  }
}
</script>

<style scoped>

</style>