<template>
 <!-- <menu class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
    <div class="flex w-full">
      <button  @click="changeTab('bus-time')">Parada<svg-bus/></button>
      <button @click="changeTab('favourite-stops')">Mis sitios<svg-star/></button>
      <button  @click="changeTab('forum-home-page')">Foro<svg-forum/></button>
      <button   @click="changeTab('the-user-data')">Mi perfil<svg-user/></button>
      <button  @click="changeTab('the-plans')">Planos de metro<svg-map/></button>
      <button  @click="changeTab('transport-prices')">Precios y tarifas<svg-price/></button>
      <button @click="changeTab('bike-time')">Consulta tu parada de biciMAD<svg-bike/></button>



      <button  @click="changeTab('most-visited')">Paradas mas visitadas <svg-trophy/> </button>

      <a href="/logout" class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline block text-center">Cerrar sesión<svg-logout/></a>
    </div>
  </menu>-->
 <nav class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">

    <!--hamburguer button-->
  <div class="flex justify-between items-center px-3 py-3 md:py-4 md:hidden">

      <button class="block " @click="showMobileMenu = !showMobileMenu">
        <svg class="w-6 h-6 fill-current text-gray-800" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </button>
    </div>


<!--Categories for the hamburguer menu-->
    <div v-show="!showMobileMenu" class="hidden md:block">
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


    <div v-show="showMobileMenu" class="md:hidden">

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

export default {


  components: {SvgTrophy, SvgBike, SvgPrice, SvgMap, SvgLogout, SvgUser, SvgForum, SvgStar, SvgBus},
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
