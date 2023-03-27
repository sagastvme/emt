<template>
  <menu class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
    <div></div>
    <table class="w-full">
      <tr>
        <td class="px-2 py-1">
          <button class="w-full hover:bg-yellow-400 text-white font-bold rounded-md px-4 py-2 transition duration-300 bg-yellow-300 focus:outline-none focus:shadow-outline" @click="changeTab('bus-time')">Consulta tu parada<svg-bus/></button>
        </td>
        <td class="px-2 py-1">
          <button class="w-full hover:bg-yellow-400 text-white font-bold rounded-md px-4 py-2 transition duration-300 bg-yellow-300 focus:outline-none focus:shadow-outline" @click="changeTab('the-header')">Mis sitios<svg-star/></button>
        </td>
        <td class="px-2 py-1">
          <button class="w-full hover:bg-yellow-400 text-white font-bold rounded-md px-4 py-2 transition duration-300 bg-yellow-300 focus:outline-none focus:shadow-outline" @click="changeTab('the-menu')">Foro<svg-forum/></button>
        </td>
        <td class="px-2 py-1">
          <button class="w-full hover:bg-yellow-400 text-white font-bold rounded-md px-4 py-2 transition duration-300 bg-yellow-300 focus:outline-none focus:shadow-outline" @click="changeTab('the-user-data')">Mi perfil<svg-user/></button>
        </td>
      </tr>
      <tr>
        <td class="px-2 py-1" colspan="4">
          <button class="w-full hover:bg-yellow-400 text-white font-bold rounded-md px-4 py-2 transition duration-300 bg-yellow-300 focus:outline-none focus:shadow-outline" @click="changeTab('the-plans')">Planos de metro
          <svg-map/>

          </button>
        </td>
      </tr>
      <tr>
        <td class="px-2 py-1" colspan="4">
          <button class="w-full hover:bg-yellow-400 text-white font-bold rounded-md px-4 py-2 transition duration-300 bg-yellow-300 focus:outline-none focus:shadow-outline" @click="changeTab('transport-prices')">Precios y tarifas
          <svg-price/>
          </button>
        </td>
      </tr>
      <tr>
        <td class="w-full hover:bg-yellow-400 text-white font-bold rounded-md px-4 py-2 transition duration-300 bg-yellow-300 focus:outline-none focus:shadow-outline" >
          <button @click="changeTab('bike-time')">Consulta tu parada de biciMAD
            <svg-bike/>
          </button>
        </td>
      </tr>
      <tr>
        <td class="px-2 py-1" colspan="4">
          <a href="/logout" class="w-full hover:bg-yellow-400 text-white font-bold rounded-md px-4 py-2 transition duration-300 bg-yellow-300 focus:outline-none focus:shadow-outline block text-center">Cerrar sesión<svg-logout/></a>
        </td>
      </tr>

    </table>
  </menu>


</template>

<script>
import SvgBus from "./SvgIcons/SvgBus.vue";
import SvgStar from "./SvgIcons/SvgStar.vue";
import SvgForum from "./SvgIcons/SvgForum.vue";
import SvgUser from "./SvgIcons/SvgUser.vue";
import SvgLogout from "./SvgIcons/SvgLogout.vue";
import SvgMap from "./SvgIcons/SvgMap.vue";
import SvgPrice from "./SvgIcons/SvgPrice.vue";
import SvgBike from "./SvgIcons/SvgBike.vue";

export default {


  components: {SvgBike, SvgPrice, SvgMap, SvgLogout, SvgUser, SvgForum, SvgStar, SvgBus},
  methods: {
    changeTab(tab) {
      this.$emit('change-tab', tab)
    }
  }
}
</script>
