<template>
  <form @submit.prevent="changePicture" class="w-full md:w-3/4 lg:w-1/2 mx-auto">
    <label for="name" class="block mb-2">Introduzca el titulo del plano</label>
    <input id="name" ref="planName" required type="text" class="w-full border-gray-300 border-2 rounded-lg mb-4 px-3 py-2 focus:outline-none focus:border-blue-500">
    <label class="mt-4 block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full cursor-pointer text-center w-full md:w-auto"
           for="picture">
      Anadir imagen
    </label>
    <input id="picture" ref="newPicture" accept="image/jpeg,image/png,image/gif,image/webp" class="hidden" required
           type="file">
    <input type="submit" value="Anadir plano" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full cursor-pointer mt-4 w-full md:w-auto">
  </form>
  <teleport to="body">
    <error-message v-if="wrongFilePic" message="El tipo de imagen no es valido por favor intente otro"
                   @close-error="wrongFilePic=false"/>
    <error-message v-if="success" :message="this.uploadMessage"
                   @close-error="this.success=false"/>
  </teleport>
</template>

<script>
import axios from "axios";
import ErrorMessage from "../Messages/ErrorMessage.vue";

export default {
  name: "AddMetroPlan",
  components: {ErrorMessage},
  methods: {
    async changePicture() {
      var fileName = (this.$refs.newPicture.files[0].type)
      var title = this.$refs.planName.value.trim();
      console.log(fileName)
      if (fileName == 'image/jpeg' || fileName == 'image/png' ||
          fileName == 'image/gif' || fileName == 'image/webp') {
        const formData = new FormData();
        formData.append('metroPic', this.$refs.newPicture.files[0]);
        formData.append('title', title)
        const response = await axios.post('addMetroPlan', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        this.success = response.data.success
        if (this.success) {
          this.uploadMessage = "La imagen se ha subido correctamente";
        } else {
          this.uploadMessage = "La imagen no ha podido subirse correctamente, compruebe que el nombre sea unico"
        }

      } else {
        this.wrongFilePic = true
      }
    }
  },
  data() {
    return {
      wrongFilePic: false,
      success: false,
      uploadMessage: null
    }
  }
}
</script>