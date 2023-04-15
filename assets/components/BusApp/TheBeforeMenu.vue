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




    <!--Desktop Menu-->
    <div v-show="!showMobileMenu" class="hidden lg:block text-lg">

      <div class="flex flex-col lg:flex-row items-center w-full">
        <button
            :class="{ 'bg-[#173753]': isTabActive('bus-time'), 'bg-[#1d70a2]': !isTabActive('bus-time') }"
            class=" ml-1 mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('bus-time')"
        >
          <span class="pr-3">Autobus</span>
          <svg-bus class="h-14 w-14 mx-auto"/>
        </button>
        <button
            :class="{ 'bg-[#173753]': isTabActive('the-login'), 'bg-[#1d70a2]': !isTabActive('the-login') }"
            class=" mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('the-login')"
        >
          <span class="pr-3">Iniciar sesion</span>
          <svg-login class="h-14 w-14 mx-auto"/>
        </button>
        <button
            :class="{ 'bg-[#173753]': isTabActive('the-register'), 'bg-[#1d70a2]': !isTabActive('the-register') }"
            class=" mr-2 hover:bg-[#173753] text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors flex-1 mb-2 sm:mb-0"
            @click="changeTabMobile('the-register')"
        >
          <span class="pr-3">Registrate</span>
          <svg-user class="h-14 w-14 mx-auto"/>
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
          <span>Autobus</span>
          <svg-bus class="ml-2 h-10 w-10"/>
        </button>
        <button
            class="mb-5 flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('the-login')"
        >
          <span>Iniciar sesión</span>
          <svg-login class="ml-2 h-10 w-10"/>
        </button>
        <button
            class="flex text-5xl items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('the-register')"
        >
          <span>Regístrate</span>
          <svg-user class="ml-2 h-10 w-10"/>
        </button>
      </div>


    </div>
  </nav>
</template>


<script>
import SvgBus from "../SvgIcons/SvgBus.vue";
import SvgStar from "../SvgIcons/SvgStarEmpty.vue";
import SvgForum from "../SvgIcons/SvgForum.vue";
import SvgUser from "../SvgIcons/SvgUser.vue";
import SvgLogin from "../SvgIcons/SvgLogin.vue";
import TheHeader from "./TheHeader.vue";


export default {
  props: ['status'],
  components: {TheHeader, SvgLogin, SvgUser, SvgForum, SvgStar, SvgBus},
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
