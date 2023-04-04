<template>
  <div>
    <form @submit.prevent="newPost">
      <table>
        <tr>
          <td><label for="title">Titulo</label></td>
          <td><input required id="title" ref="title" class="border border-black" type="text"></td>
        </tr>
        <tr>
          <td>Cuerpo del post</td>
          <td><textarea required id="body" class="border border-black" cols="30" name="body" rows="10" ref="body"/></td>
        </tr>
        <tr>
          <td>Categoria</td>
          <td>
            <select required id="category" name="category" ref="selectedCategory">
              <option disabled value="">Selecciona una categoría</option>
              <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <input class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" type="submit" value="Crear post">
          </td>
        </tr>
      </table>
    </form>
    <teleport to="body">
      <error-message v-if="success" message="El post se ha creado correctamente"
                     @close-error="success=false"/>

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