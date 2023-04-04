<template>
  <form @submit.prevent="changePicture">
    <label for="name">Introduzca el titulo del plano</label>
    <input id="name" ref="planName" required type="text">
    <label class=" mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
           for="picture">
      Anadir nuevo plano
    </label>
    <input id="picture" ref="newPicture" accept="image/jpeg,image/png,image/gif,image/webp" class="hidden" required
           type="file">
    <input type="submit" value="Anadir plano">
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
import ErrorMessage from "../ErrorMessage.vue";

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