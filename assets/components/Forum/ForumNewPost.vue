<template>
  <div class="flex flex-col justify-center items-center py-6">
    <form @submit.prevent="newPost" class="bg-black bg-opacity-90 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-full lg:w-2/3 xl:w-1/2">
      <div class="mb-4">
        <label for="title" class="block text-white font-bold mb-2">Título</label>
        <input required id="title" ref="title" class="bg-gray-700 bg-opacity-70 shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" type="text">
      </div>
      <div class="mb-4">
        <label for="body" class="block text-white font-bold mb-2">Cuerpo del post</label>
        <textarea required id="body" class="bg-gray-700 bg-opacity-70 shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" cols="30" name="body" rows="10" ref="body"></textarea>
      </div>
      <div class="mb-4">
        <label for="category" class="block text-white font-bold mb-2">Categoría</label>
        <select required id="category" name="category" ref="selectedCategory" class="bg-gray-700 bg-opacity-70 shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline">
          <option disabled value="">Selecciona una categoría</option>
          <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="flex items-center justify-center">
        <input class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" type="submit" value="Crear post">
      </div>
    </form>
    <teleport to="body">
      <error-message v-if="success" message="El post se ha creado correctamente" @close-error="success=false"/>
    </teleport>
  </div>

</template>

<script>
import axios from "axios";
import ErrorMessage from "../ErrorMessage.vue";

export default {
  components: {ErrorMessage},
  props:['categories'],
  name: "ForumNewPost",

  data() {
    return{
      selectedCategory:null,
      success:false
    }
  },
  methods:{
    async newPost(){
      console.log()
      console.log(this.$refs.title.value)

      console.log()

      const response= await axios.post('/newPost', {
        title:this.$refs.title.value,
        body:this.$refs.body.value,
        category:this.$refs.selectedCategory.value
      })
      this.success=response.data.success
      this.$refs.title.value=''
      this.$refs.body.value=''
    }
  }
}
</script>

<style scoped>

</style>