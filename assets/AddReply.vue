<template>
<h1>{{this.post[2].title}} </h1>
<p class="border border-black">Autor {{this.post[2].author}}</p>
  <p>Categoria {{this.post[2].category}}</p>
  <p>Cuerpo {{this.post[2].body}}</p>
   <p>Fecha de la creacion {{this.post[2].date}}</p>
  <form @submit.prevent="addReply">
    <label for="body">Su respuesta:</label>
    <input type="text" id="body" class="border border-black" ref="body" required>
    <input type="submit" value="Responder al post">
  </form>
</template>

<script>
import axios from "axios";
export default {
  methods:{
   async addReply(){
      const response= await axios.post('/replyToPost',{
        body:this.$refs.body.value,
        id:this.$props.postId
      })
     console.log(response)
     this.$refs.body.value=''
    }
  },
  mounted() {
    console.log(this.$props.post)
  },
  props:['post']
}
</script>