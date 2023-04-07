<template>
  <div class="flex flex-col justify-center items-center py-6">
    <form class="bg-black bg-opacity-90 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-full lg:w-2/3 xl:w-1/2"
          @submit.prevent="newPost">
      <div class="mb-4">
        <label class="block text-white font-bold mb-2" for="title">Título</label>
        <input id="title" ref="title"
               class="bg-gray-700 bg-opacity-70 shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
               required
               type="text">
      </div>
      <div class="mb-4">
        <label class="block text-white font-bold mb-2" for="body">Cuerpo del post</label>
        <textarea id="body" ref="body"
                  class="bg-gray-700 bg-opacity-70 shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  cols="30" name="body" required rows="10"></textarea>
        <label class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
               for="picture">
          Anadir imagenes a tu publicacion
        </label>
        <input id="picture" ref="newPicture" accept="image/jpeg,image/png,image/gif,image/webp" class="hidden"
               multiple="true" name="images[]" type="file" @change="print">
      </div>
      <div class="mb-4">
        <label class="block text-white font-bold mb-2" for="category">Categoría</label>
        <select id="category" ref="selectedCategory"
                class="bg-gray-700 bg-opacity-70 shadow border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                name="category"
                required>
          <option disabled value="">Selecciona una categoría</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="flex items-center justify-center">
        <input class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full" type="submit"
               value="Crear post">
      </div>
    </form>
    <teleport to="body">
      <error-message v-if="success" message="El post se ha creado correctamente" @close-error="success=false"/>
    </teleport>
  </div>
  <img :src="this.img" alt="">
</template>

<script>
import axios from "axios";
import ErrorMessage from "../ErrorMessage.vue";

export default {
  components: {ErrorMessage},
  props: ['categories'],
  name: "ForumNewPost",

  data() {
    return {
      selectedCategory: null,
      success: false,
      img:null
    }
  },
  methods: {
    async newPost() {
      console.log()
      console.log(this.$refs.title.value)

      console.log()

      const formData = new FormData();
      formData.append('title', this.$refs.title.value)
      formData.append('body', this.$refs.body.value)
      formData.append('category', this.$refs.selectedCategory.value)

      for (const file of this.$refs.newPicture.files) {
        formData.append('images[]', file)
      }

      const response = await axios.post('/newPost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(response)
      this.success = response.data.success
      this.$refs.title.value = ''
      this.$refs.body.value = ''
    },
    print() {
      const files = this.$refs.newPicture.files;
      console.log(files);
    }

  },
}
</script>
