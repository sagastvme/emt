<template>
 <!--<nav class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">

 hamburguer button
  <div class="flex justify-between items-center px-3 py-3 lg:py-4 lg:hidden">

      <button class="block " @click="showMobileMenu = !showMobileMenu">
        <svg class="w-6 h-6 fill-current text-gray-800" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </button>
    </div>


    Desktop menu
    <div v-show="!showMobileMenu" class="hidden lg:block">
      <div class="flex w-full">
        <button
            class="mr-2  hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors"
            :class="{ 'bg-gray-500': isTabActive('bus-time'), 'bg-gray-400': !isTabActive('bus-time') }"
            @click="changeTabMobile('bus-time')"
        >
          Consulta tu parada de autobus<svg-bus class="absolute right-0 top-0 mt-1 mr-1" />
        </button>
        <button
            class="mr-2  hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors"
            :class="{ 'bg-gray-500': isTabActive('favourite-stops'), 'bg-gray-400': !isTabActive('favourite-stops') }"
            @click="changeTabMobile('favourite-stops')"
        >
          Mis sitios<svg-star/>
        </button>
        <button
            class="mr-2  hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors"
            :class="{ 'bg-gray-500': isTabActive('forum-home-page'), 'bg-gray-400': !isTabActive('forum-home-page') }"
            @click="changeTabMobile('forum-home-page')"
        >Foro<svg-forum/>
        </button>



        <button
            class="mr-2  hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors"
            :class="{ 'bg-gray-500': isTabActive('the-user-data'), 'bg-gray-400': !isTabActive('the-user-data') }"
            @click="changeTabMobile('the-user-data')"
        >Mi perfil<svg-user/>
        </button>


        <button
            class="mr-2  hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors"
            :class="{ 'bg-gray-500': isTabActive('the-plans'), 'bg-gray-400': !isTabActive('the-plans') }"
            @click="changeTabMobile('the-plans')"
        >Planos de metro<svg-map/>
        </button>
          <button
              class="mr-2  hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors"
              :class="{ 'bg-gray-500': isTabActive('transport-prices'), 'bg-gray-400': !isTabActive('transport-prices') }"
              @click="changeTabMobile('transport-prices')"
          >Precios y tarifas<svg-price/>
          </button>
        <button
            class="mr-2  hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors"
            :class="{ 'bg-gray-500': isTabActive('bike-time'), 'bg-gray-400': !isTabActive('bike-time') }"
            @click="changeTabMobile('bike-time')"
        >Consulta tu parada de biciMAD<svg-bike/>
        </button>


        <button
            class="mr-2  hover:bg-gray-500 flex-1 text-white
            font-bold rounded-md px-3 py-2 transition duration-200
            focus:outline-none focus:shadow-outline relative hover:text-white transition-colors"
            :class="{ 'bg-gray-500': isTabActive('most-visited'), 'bg-gray-400': !isTabActive('most-visited') }"
            @click="changeTabMobile('most-visited')"
        >Paradas mas visitadas <svg-trophy/>
        </button>
        <a href="/logout" class="mr-2  hover:bg-gray-500 flex-1 text-white
            font-bold rounded-md px-3 py-2 transition duration-200
            focus:outline-none focus:shadow-outline relative hover:text-white transition-colors bg-gray-400">
          Cerrar sesión<svg-logout/></a>
      </div>
    </div>

  Burguer menu
    <div v-show="showMobileMenu" class="lg:hidden">

      <div class="px-2 pt-2 pb-3">
        <button
            class="flex items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('bus-time')"
        >
          <span>Consulta tu parada de autobus</span>
          <svg-bus class="ml-2 h-5 w-5" />
        </button>
        <button
            class="flex items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('favourite-stops')"
        >
          Mis sitios<svg-star/>
        </button>
        <button
            class="flex items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('forum-home-page')"
        >
          Foro<svg-forum/>
        </button>

        <button
            class="flex items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('the-user-data')"
        >
          Mi perfil<svg-user/>
        </button>

        <button
            class="flex items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('the-plans')"
        >
          Planos de metro<svg-map/>
        </button>



        <button
            class="flex items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('transport-prices')"
        >
          Precios y tarifas<svg-price/>
        </button>

        <button
            class="flex items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('most-visited')"
        >
          Paradas mas visitadas <svg-trophy/>
        </button>



        <a href="/logout"  class="flex items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
        >
          Cerrar sesión<svg-logout/></a>


      </div>


    </div>
  </nav>-->
  <nav class="rounded-lg overflow-hidden shadow-lg">

    <div class="bg-[#1d70a2]  rounded">
      <div class="flex justify-center items-center px-3 py-3">
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

    <!--Desktop Menu-->
    <div v-show="!showMobileMenu" class="hidden lg:block">

      <div class="flex w-full">

        <button
            class="mr-2  hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors"
            @click="changeTabMobile('bus-time')"
        >
          Consulta tu parada de autobus
          <svg-bus class="absolute right-0 top-0 mt-1 mr-1"/>
        </button>
        <button
            class="mr-2  hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors"
            @click="changeTabMobile('the-login')"
        >
          Iniciar sesion
          <svg-login class="absolute right-0 top-0 mt-1 mr-1"/>
        </button>
        <button
            :class="{ 'bg-gray-500': isTabActive('the-register'), 'bg-gray-400': !isTabActive('the-register') }"
            class="mr-2  hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors"
            @click="changeTabMobile('the-register')"
        >
          Registrate
          <svg-user class="absolute right-0 top-0 mt-1 mr-1"/>
        </button>
      </div>
    </div>

    <!--Burguer menu-->
    <div v-show="showMobileMenu" class="lg:hidden">

      <div class="px-10 py-10  ">
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('bus-time')"
        >
          <span>Tu parada de autobus</span>
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
        >Planos de metro<svg-map class="ml-2 h-16 w-16"/>
        </button>
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('transport-prices')"
        >Precios y tarifas<svg-price class="ml-2 h-16 w-16"/>
        </button>
        <button
            class="mb-5  flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('bike-time')"
        >Tu parada de biciMAD<svg-bike class="ml-2 h-24 w-24"/>
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
    }
  },
  data() {
    return {
      showMobileMenu: false,
      activeTab: null,
    }
  },
  computed: {
    isTabActive() {
      return (tab) => this.activeTab === tab;
    }
  }
}
</script>
