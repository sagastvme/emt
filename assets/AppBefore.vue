<template>
  <the-header></the-header>
 <the-before-menu @change-tab="changeTab"></the-before-menu>
  <div class="flex justify-center  ">

    <component :is="selectedTab"></component>
  </div>


</template>

<script>

import TheHeader from "./components/TheHeader.vue";
import bikeTime from "./components/BikeTime.vue";
import BusTime from "./components/BusTime.vue";
import TheBeforeMenu from "./components/TheBeforeMenu.vue";
import TheLogin from "./components/TheLogin.vue";
import TheRegister from "./components/TheRegister.vue";
export default {
  components: {TheBeforeMenu, BusTime,TheLogin,  TheHeader, TheRegister, bikeTime},

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
