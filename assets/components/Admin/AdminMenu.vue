<template>
  <menu class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
    <div class="flex w-full">
      <button
          class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline"
          @click="changeTab('delete-users')">Borrar usuarios
      </button>
      <button
          class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline"
          @click="changeTab('modify-metro-plans')">Manejar planos de metro
      </button>
      <button
          class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline"
          @click="changeTab('delete-price')">actualizar precios y tarifass
      </button>
      <a class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline block text-center"
         href="/logout">Cerrar
        sesión
        <svg-logout/>
      </a>
    </div>
  </menu>

</template>

<script>
import SvgLogout from "../SvgIcons/SvgLogout.vue";

export default {
  name: "AdminMenu",
  components: {SvgLogout},
  methods: {
    changeTab(tab) {
      this.$emit('change-tab', tab)

    }
  }
}
</script>

<style scoped>

</style>