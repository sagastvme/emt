<template>
  <div class="flex flex-col justify-center items-center py-6 ">
    <form class="shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4  mx-auto px-3  w-full text-6xl"
          @submit.prevent="newPost">
      <div class="mb-4">
         <input id="title" ref="title"
         placeholder="Titulo"      class="bg-white bg-opacity-70 shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
               required
               type="text">
      </div>
      <div class="mb-4">
        <textarea id="body" ref="body"
         placeholder="Cuerpo"         class="bg-white bg-opacity-70 shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                  cols="30" name="body" required rows="10"></textarea>
        <div class="my-14 flex items-center justify-center">
        <label class="bg-blue-500 text-white px-3 py-2 rounded-md" for="picture">
          Anadir imagenes a tu publicacion
        </label>
        <input id="picture" ref="newPicture" accept="image/jpeg,image/png,image/gif,image/webp" class="hidden"
               multiple="true" name="images[]" type="file" @change="print">
      </div>
      </div>
      <div class="mb-4">
        <label class="text-5xl text-center block text-white font-bold mb-2" for="category">Categoría</label>
        <select id="category" ref="selectedCategory"
                class="text-4xl bg-white bg-opacity-70 shadow border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                name="category"
                required>

          <option class="text-sm mx-auto" v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="flex items-center justify-center">
        <input class="bg-blue-500 text-white px-3 py-2 rounded-md" type="submit"
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
import ErrorMessage from "../Messages/ErrorMessage.vue";

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
