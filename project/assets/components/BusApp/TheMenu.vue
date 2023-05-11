<template>

  <nav class="rounded-lg overflow-hidden shadow-lg lg:shadow-none">

    <div class="bg-[#1d70a2]  rounded">
      <div class="flex justify-center items-center px-3 py-3 lg:hidden">
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


    <div v-show="!showMobileMenu" class="hidden lg:block">

      <div class="flex flex-col lg:flex-row items-center w-full">
        <button
            :class="{ 'bg-[#173753]': isTabActive('bus-time'), 'bg-[#1d70a2]': !isTabActive('bus-time') }"
            class="text-xl ml-1 mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-7 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('bus-time')"
        >
          <span class="pr-3 text-2xl">Autobus</span>
          <svg-bus class="h-10 w-10 mx-auto mt-2"/>
        </button>
        <button
            :class="{ 'bg-[#173753]': isTabActive('favourite-stops'), 'bg-[#1d70a2]': !isTabActive('favourite-stops') }"
            class="text-xl ml-1 mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-8 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('favourite-stops')"
        >
          <span class="pr-3 lg:text-xl ">Mis sitios</span><svg-star-full class="h-10 w-10 mx-auto mt-1"/>
        </button>


        <button
            :class="{ 'bg-[#173753]': isTabActive('forum-home-page'), 'bg-[#1d70a2]': !isTabActive('forum-home-page') }"
            class="text-xl ml-1 mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-7 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('forum-home-page')"
        >
          <span class="pr-3 text-2xl">Foro</span>
          <svg-forum class="h-10 w-10 mx-auto mt-2"/>
        </button>

        <button
            :class="{ 'bg-[#173753]': isTabActive('the-user-data'), 'bg-[#1d70a2]': !isTabActive('the-user-data') }"
            class="text-xl ml-1 mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-7 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('the-user-data')"
        >
          <span class="pr-3 text-2xl">Cuenta</span>
          <svg-menu-user  class="h-10 w-10 mx-auto mt-2"/>
        </button>
        <button
            :class="{ 'bg-[#173753]': isTabActive('the-plans'), 'bg-[#1d70a2]': !isTabActive('the-plans') }"
            class="text-xl ml-1 mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-7 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('the-plans')"
        >
          <span class="pr-3 text-2xl">Planos</span>
         <svg-map  class="h-8 w-8 mx-auto mt-4"/>
        </button>
        <button
            :class="{ 'bg-[#173753]': isTabActive('transport-prices'), 'bg-[#1d70a2]': !isTabActive('transport-prices') }"
            class=" text-xl ml-1 mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-2 py-7 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0 flex flex-col justify-center items-center"
            @click="changeTabMobile('transport-prices')"
        >
          <span  class="ml-2 pr-2 text-2xl">Precios</span>
          <svg-price  class="h-8 w-8 mx-auto mt-4"/>
        </button>
        <button
            :class="{ 'bg-[#173753]': isTabActive('bike-time'), 'bg-[#1d70a2]': !isTabActive('bike-time') }"
            class="text-xl ml-1 mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-1 py-6 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0 flex flex-col justify-center items-center"
        @click="changeTabMobile('bike-time')"
        >

          <span class="ml-3 pr-3 py-2  text-2xl"> BiciMAD</span>
          <svg-bike  class="h-10 w-10 mx-auto"/>
        </button>


        <button
            :class="{ 'bg-[#173753]': isTabActive('most-visited'), 'bg-[#1d70a2]': !isTabActive('most-visited') }"
            class="text-lg ml-1 mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-2 py-1 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('most-visited')"
        >
          <span class="pr-3 text-2xl">Paradas populares</span>
           <svg-trophy  class="h-16 w-16 mx-auto"/>
        </button>
        <a href="/logout" class="bg-[#1d70a2] text-xl ml-1 mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-2 py-6 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0 flex flex-col justify-center items-center">
          <span class="mx-auto text-2xl">Salir</span>
          <svg-logout class="mt-4 h-10 w-10 mx-auto" />
        </a>

      </div>

    </div>

    <!--Burguer menu-->
    <div v-show="showMobileMenu" class="lg:hidden">

      <div class="px-10 py-10  ">
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('bus-time')"
        >
          <span>Autobus</span>
          <svg-bus class="ml-2 h-16 w-16"/>
        </button>



        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('most-visited')"
        >
          Paradas mas visitadas <svg-trophy class="ml-2 h-16 w-16"/>
        </button>
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"

            @click="changeTab('favourite-stops')"
        >
          Mis sitios<svg-star-full class="ml-2 h-16 w-16" />
        </button>
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('forum-home-page')"
        >Foro<svg-forum class="ml-2 h-16 w-16" />
        </button>



        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('the-user-data')"
        >Mi perfil<svg-menu-user class="ml-2 h-16 w-16"/>
        </button>


        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('the-plans')"
        >Planos<svg-map class="ml-2 h-16 w-16"/>
        </button>
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('transport-prices')"
        >Precios<svg-price class="ml-2 h-16 w-16"/>
        </button>
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('bike-time')"
        >BiciMAD<svg-bike class="ml-2 h-24 w-24"/>
        </button>

        <a href="/logout"       class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
        >
          Cerrar sesión<svg-logout class="ml-2 mt-4 h-16 w-16"/></a>





      </div>


    </div>
  </nav>
</template>

<script>
import SvgBus from "../SvgIcons/SvgBus.vue";
import SvgStar from "../SvgIcons/SvgStarEmpty.vue";
import SvgForum from "../SvgIcons/SvgForum.vue";
import SvgUser from "../SvgIcons/SvgUser.vue";
import SvgLogout from "../SvgIcons/SvgLogout.vue";
import SvgMap from "../SvgIcons/SvgMap.vue";
import SvgPrice from "../SvgIcons/SvgPrice.vue";
import SvgBike from "../SvgIcons/SvgBike.vue";
import SvgTrophy from "../SvgIcons/SvgTrophy.vue";
import TheHeader from "./TheHeader.vue";
import SvgLogin from "../SvgIcons/SvgLogin.vue";
import SvgStarFull from "../SvgIcons/SvgStarFull.vue";
import SvgMenuUser from "../SvgIcons/SvgMenuUser.vue";

export default {


  components: {
    SvgMenuUser,
    SvgStarFull,
    SvgLogin, TheHeader, SvgTrophy, SvgBike, SvgPrice, SvgMap, SvgLogout, SvgUser, SvgForum, SvgStar, SvgBus},
  methods: {
    changeTab(tab) {
      this.showMobileMenu = !this.showMobileMenu
      this.$emit('change-tab', tab)
      this.activeTab = tab;
    },
    changeTabMobile(tab) {
      this.$emit('change-tab', tab)
      this.activeTab = tab;
      console.log('el nombre de la pestana es '+tab)
    }
  },
  data() {
    return {
      showMobileMenu: false,
      activeTab: 'bus-time',
    }
  },
  computed: {
    isTabActive() {
      return (tab) => this.activeTab === tab;
    }
  }
}
</script>
