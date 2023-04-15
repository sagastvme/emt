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
            @click="changeTab('delete-users')">Borrar usuarios <svg-admin-delete class="ml-2 mt-4 h-16 w-16"/>
        </button>
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('modify-metro-plans')">Manejar planos <svg-admin-manage class="ml-2 mt-4 h-16 w-16"/>
        </button>
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('delete-price')">Actualizar tarifas  <svg-price class="ml-2 mt-4 h-16 w-16"/>
        </button>

        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('delete-posts')">Borrar posts <svg-menu-user class="ml-2 mt-4 h-16 w-16"/>
        </button>
        <a   class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
             href="/logout">Cerrar
          sesión
          <svg-logout class="ml-2 mt-4 h-16 w-16"/>
        </a>

      </div>


    </div>



<!--Desktop menu -->
    <div v-show="!showMobileMenu" class="hidden lg:block">

      <div class="flex flex-col lg:flex-row items-center w-full">
        <button
            :class="{ 'bg-[#173753]': isTabActive('delete-users'), 'bg-[#1d70a2]': !isTabActive('delete-users') }"
            class="text-4xl ml-1 mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('delete-users')"
        >
          <span class="pr-3">Borrar usuarios</span>
          <svg-admin-delete class=" h-10 w-10 mx-auto"/>
        </button>
        <button
            :class="{ 'bg-[#173753]': isTabActive('modify-metro-plans'), 'bg-[#1d70a2]': !isTabActive('modify-metro-plans') }"
            class="text-4xl mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('modify-metro-plans')"
        >
          <span class="pr-3">Manejar planos</span>
        <svg-admin-manage class= "h-10 w-10 mx-auto"/>
        </button>
        <button
            :class="{ 'bg-[#173753]': isTabActive('delete-price'), 'bg-[#1d70a2]': !isTabActive('delete-price') }"
            class="text-3xl mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-2  transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('delete-price')"
        >
          <span class="pr-3">Actualizar tarifas</span>
          <svg-price class=" h-10 w-10 mx-auto mt-1"/>
        </button>


        <button
            :class="{ 'bg-[#173753]': isTabActive('delete-posts'), 'bg-[#1d70a2]': !isTabActive('delete-posts') }"
            class="text-4xl mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('delete-posts')">
          <span class="pr-3">Borrar posts</span>
          <svg-menu-user class=" h-10 w-10 mx-auto"/>
        </button>


        <a href="/logout"


           class="bg-[#1d70a2] text-center text-4xl mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
        >
          <span class="pr-3 ">Cerrar sesion</span>
          <svg-logout class=" h-10 w-10 mx-auto " />
        </a>
      </div>

    </div>


  </nav>

</template>

<script>
import SvgLogout from "../SvgIcons/SvgLogout.vue";
import TheHeader from "../BusApp/TheHeader.vue";
import SvgAdminDelete from "../SvgIcons/SvgAdminDelete.vue";
import SvgAdminManage from "../SvgIcons/SvgAdminManage.vue";
import SvgPrice from "../SvgIcons/SvgPrice.vue";
import SvgMenuUser from "../SvgIcons/SvgMenuUser.vue";

export default {
  name: "AdminMenu",
  components: {SvgMenuUser, SvgPrice, SvgAdminManage, SvgAdminDelete, TheHeader, SvgLogout},
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
      showMobileMenu: false,
      activeTab:'delete-price'
    }
  },
  computed: {
    isTabActive() {
      return (tab) => this.activeTab === tab;
    }
  }
}
</script>

<style scoped>

</style>