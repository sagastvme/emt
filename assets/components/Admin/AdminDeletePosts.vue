<template>
  <div>
  <h1 class="text-2xl font-bold mb-4 flex justify-center">Publicaciones del foro</h1>

  <table class="w-full">
    <thead>
    <tr>
      <th class="px-4 py-2">Título</th>
      <th class="px-4 py-2">Autor</th>
      <th class="px-4 py-2">Categoría</th>
      <th class="px-4 py-2">Fecha de creación</th>
      <th class="px-4 py-2">Acciones</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="post in posts" :key="post.id">
      <td class="border px-4 py-2">{{ post.title }}</td>
      <td class="border px-4 py-2">{{ post.author }}</td>
      <td class="border px-4 py-2">{{ post.category }}</td>
      <td class="border px-4 py-2">{{ post.dateCreated }}</td>
      <td class="border px-4 py-2">
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
      <button class="bg-red-500 text-white px-2 py-1 rounded-md mr-4" @click="deleteUserCommit">
        SI
      </button>
      <button class="bg-gray-300 px-2 py-1 rounded-md" @click="deletedPost = null">
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