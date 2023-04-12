<template>

  <the-header class="hidden"></the-header>
  <the-before-menu @change-tab="changeTab"></the-before-menu>
  <div class="flex justify-center mt-8 md:mt-16 ">
    <component :is="selectedTab"></component>
  </div>

</template>

<script>

import TheHeader from "./components/BusApp/TheHeader.vue";
import bikeTime from "./components/BusApp/BikeTime.vue";
import BusTime from "./components/BusApp/BusTime.vue";
import TheBeforeMenu from "./components/BusApp/TheBeforeMenu.vue";
import TheLogin from "./components/BusApp/TheLogin.vue";
import TheRegister from "./components/BusApp/TheRegister.vue";
import ErrorMessage from "./components/Messages/ErrorMessage.vue";
export default {
  components: {TheBeforeMenu, BusTime,TheLogin,  TheHeader, TheRegister, bikeTime,ErrorMessage},

  data() {
    return {
      show: false,
      selectedTab: 'bus-time'
    }
  },
  methods: {
    showSearch() {
      this.show = !this.show;

    },
    changeTab(tab) {
      this.selectedTab = tab;
      console.log(this.selectedTab);
    }
  }
}
</script>
