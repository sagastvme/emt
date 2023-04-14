<template>
  <nav class="rounded-lg overflow-hidden shadow-lg">

    <div class="bg-[#1d70a2]  rounded">
      <div class="flex justify-center items-center px-3 py-3 lg:py-4 lg:hidden">
        <button class="block flex-shrink-0" @click="showMobileMenu = !showMobileMenu">
          <svg class="w-20 h-20 fill-current text-gray-800" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"  />
          </svg>
        </button>
        <div class="mx-auto pr-32 pl-8">
          <the-header />
        </div>
      </div>
    </div>


    <!--Burguer menu-->
    <div v-show="showMobileMenu" class="lg:hidden">
      <div class="px-10 py-10 shadow-lg ">
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('delete-users')">Borrar usuarios
        </button>
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('modify-metro-plans')">Manejar planos de metro
        </button>
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('delete-price')">Actualizar tarifas
        </button>

        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('delete-posts')">Borrar posts
        </button>
        <a   class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
             href="/logout">Cerrar
          sesión
          <svg-logout class="ml-2 mt-4 h-16 w-16"/>
        </a>

      </div>


    </div>





















  </nav>

</template>

<script>
import SvgLogout from "../SvgIcons/SvgLogout.vue";
import TheHeader from "../BusApp/TheHeader.vue";

export default {
  name: "AdminMenu",
  components: {TheHeader, SvgLogout},
  methods: {
    changeTab(tab) {
      this.showMobileMenu = !this.showMobileMenu
      this.$emit('change-tab', tab)
      this.activeTab = tab;
    },
    changeTabMobile(tab) {
      this.$emit('change-tab', tab)
      this.activeTab = tab;
    }
  },
  data(){
    return{
      showMobileMenu: false
    }
  }
}
</script>

<style scoped>

</style>