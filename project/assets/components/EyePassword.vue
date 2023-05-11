<template>
  <button @click.prevent="togglePasswordVisibility">
    <svg-eye-opened v-if="showPassword"/>
    <svg-eye-closed v-else />
  </button>

</template>

<script>
import SvgEyeOpened from "./SvgIcons/SvgEyeOpened.vue";
import SvgEyeClosed from "./SvgIcons/SvgEyeClosed.vue";
export default {
  components: {SvgEyeOpened, SvgEyeClosed},
  data(){
    return{
      showPassword:false
    }
  },
methods:{
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.$emit('change-password')
  }
}
}
</script>

<style scoped>

</style>