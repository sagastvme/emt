<template >
  <menu >
    <table class="flex justify-center mt-5 mb-5  ">

      <tr>
        <td>

          <button class="bg-red-400 text-center flex justify-center w-100%" @click="changeTab('bus-time')">Consulta tu
            parada
            <svg-bus/>
          </button>

        </td>
        <td>


          <button class="bg-red-400 text-center flex justify-center w-100%"  @click="changeTab('the-header')">Mis sitios
            <svg-star/>
          </button>
        </td>


        <td>


          <button class="bg-red-400 text-center flex justify-center w-100%"  @click="changeTab('the-menu')">Foro
            <svg-forum/>
          </button>
        </td>
        <td>
          <button class="bg-red-400 text-center flex justify-center w-100%"  @click="changeTab('the-user-data')">Mi perfil
            <svg-user/>
          </button>
        </td>
      </tr>
      <tr>

        <td>

          <a  class=" rounded bg-red-400 text-center flex justify-center w-100%"  href="/logout">Cerrar session
            <svg-logout/>
          </a>

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

export default {


  components: {SvgLogout, SvgUser, SvgForum, SvgStar, SvgBus},
  methods: {
    changeTab(tab) {
      this.$emit('change-tab', tab)
    }
  }
}
</script>
