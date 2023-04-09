<template>
  <menu class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
    <div class="flex w-full">
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('bus-time')">Parada<svg-bus/></button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('favourite-stops')">Mis sitios<svg-star/></button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('forum-home-page')">Foro<svg-forum/></button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('the-user-data')">Mi perfil<svg-user/></button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('the-plans')">Planos de metro<svg-map/></button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('transport-prices')">Precios y tarifas<svg-price/></button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('bike-time')">Consulta tu parada de biciMAD<svg-bike/></button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('most-visited')">Paradas mas visitadas <svg-trophy/> </button>

      <a href="/logout" class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline block text-center">Cerrar sesión<svg-logout/></a>
    </div>
  </menu>

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
      this.$emit('change-tab', tab)
    }
  }
}
</script>
