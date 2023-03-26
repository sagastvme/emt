<template>
  <menu>
    <table class="flex justify-center  " >
      <tr >
        <td class="border-2 border-black hover:border-red-400 mr-1.5">
          <button @click="changeTab('bus-time')">Consulta tu parada de autobus urbano
            <svg-bus />
          </button>
        </td>
        <td class="border-2 border-black hover:border-red-400 mr-1.5">
          <button @click="changeTab('bike-time')">Consulta tu parada de biciMAD
          <svg-bike/>
          </button>
        </td>
        <td class="border-2 border-black hover:border-red-400  mr-1.5">
          <button @click="changeTab('the-login')">Iniciar sesion
            <svg-login />
          </button>
        </td>
        <td class="border-2 border-black hover:border-red-400  mr-1.5">
          <button @click="changeTab('the-register')">Registrate
            <svg-user />
          </button>
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
import SvgLogin from "./SvgIcons/SvgLogin.vue";
import SvgBike from "./SvgIcons/SvgBike.vue";

export default {
  props:['status'],
  components: {SvgBike, SvgLogin, SvgUser, SvgForum, SvgStar, SvgBus},
  methods: {
    changeTab(tab) {
      this.$emit('change-tab', tab)
    }
  }
}
</script>
