<template>
  <menu class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
    <div class="flex w-full">

    <button
        class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline"
        @click="changeTab('bus-time')">Consulta tu parada de autobus urbano
      <svg-bus/>
    </button>

    <button
        class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline"
        @click="changeTab('the-login')">Iniciar sesion
      <svg-login/>
    </button>

    <button
        class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline"
        @click="changeTab('the-register')">Registrate
      <svg-user/>
    </button>
    </div>
  </menu>

</template>

<script>
import SvgBus from "./SvgIcons/SvgBus.vue";
import SvgStar from "./SvgIcons/SvgStarEmpty.vue";
import SvgForum from "./SvgIcons/SvgForum.vue";
import SvgUser from "./SvgIcons/SvgUser.vue";
import SvgLogin from "./SvgIcons/SvgLogin.vue";


export default {
  props: ['status'],
  components: {SvgLogin, SvgUser, SvgForum, SvgStar, SvgBus},
  methods: {
    changeTab(tab) {
      this.$emit('change-tab', tab)
    }
  }
}
</script>
