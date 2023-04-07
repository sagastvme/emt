<template>
<h1>Publicaciones del foro</h1>

  <table>
    <tr v-for="post in posts">
      <td>{{post.title}}</td>
  <td>{{post.author}}</td>

      <td>{{post.category}}</td>
      <td>{{post.dateCreated}}</td>
      <td>
        <button @click="deletePost(post)">borrar post</button>
      </td>
    </tr>
  </table>
  <teleport to="body">
    <confirm-message v-if="deletedPost!==null" :message="'Estás seguro de que quieres borrar la publicacion ' +deletedPost"
                     @close-error="this.deletedPost=null">
      <button @click="deleteUserCommit">SI</button>
      <button class="ml-8" @click="this.deletedPost=null">NO</button>
    </confirm-message>
  </teleport>

</template>

<script>
import axios from "axios";
import ConfirmMessage from "../ConfirmMessage.vue";

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
      console.log(this.deletedPlan)
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