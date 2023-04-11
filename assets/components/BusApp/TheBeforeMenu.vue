<template>
  <nav class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
    <div class="flex justify-between items-center px-3 py-3 lg:py-4 lg:hidden">

      <button class="block " @click="showMobileMenu = !showMobileMenu">
        <svg class="w-6 h-6 fill-current text-gray-800" viewBox="0 0 24 24">
          <path
              fill-rule="evenodd"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </svg>
      </button>
    </div>
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
            :class="{ 'bg-gray-500': isTabActive('the-login'), 'bg-gray-400': !isTabActive('the-login') }"
            @click="changeTabMobile('the-login')"
        >
          Iniciar sesion
          <svg-login class="absolute right-0 top-0 mt-1 mr-1" />
        </button>
        <button
            class="mr-2  hover:bg-gray-500 flex-1 text-white font-bold rounded-md px-3 py-2 transition duration-200 focus:outline-none focus:shadow-outline relative hover:text-white transition-colors"
            :class="{ 'bg-gray-500': isTabActive('the-register'), 'bg-gray-400': !isTabActive('the-register') }"
            @click="changeTabMobile('the-register')"
        >
          Registrate
          <svg-user class="absolute right-0 top-0 mt-1 mr-1" />
        </button>
      </div>
    </div>


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
            @click="changeTab('the-login')"
        >
          <span>Iniciar sesion</span>
          <svg-login class="ml-2 h-5 w-5" />
        </button>
        <button
            class="flex items-center w-full text-center py-2 px-3 rounded-md text-gray-800 font-bold hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            @click="changeTab('the-register')"
        >
          <span>Registrate</span>
          <svg-user class="ml-2 h-5 w-5" />
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


export default {
  props: ['status'],
  components: {SvgLogin, SvgUser, SvgForum, SvgStar, SvgBus},
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
