<template>
  <div class="hidden lg:block">
    <the-header></the-header>
  </div>
  <the-menu class="lg:mt-2" @change-tab="changeTab"></the-menu>
  <div class="flex justify-center">
    <component :is="selectedTab" ></component>

  </div>

</template>

<script>

import TheHeader from "./components/BusApp/TheHeader.vue";
import TheMenu from "./components/BusApp/TheMenu.vue";
import BusTime from "./components/BusApp/BusTime.vue";
import TheUserData from "./components/BusApp/TheUserData.vue";
import ThePlans from "./components/BusApp/ThePlans.vue";
import TransportPrices from "./components/BusApp/TransportPrices.vue";
import BikeTime from "./components/BusApp/BikeTime.vue";
import FavouriteStops from "./components/BusApp/FavouriteStops.vue";
import MostVisited from "./components/BusApp/MostVisited.vue";
import ForumHomePage from "./components/Forum/ForumHomePage.vue";
export default {
  components: {BusTime, TheMenu, TheHeader, TheUserData, ThePlans, TransportPrices, BikeTime, FavouriteStops, MostVisited,ForumHomePage},

  data() {
    return {
      selectedTab: 'bus-time'
    }
  },
  methods:{
    changeTab(tab) {
      this.selectedTab = tab;
      console.log(this.selectedTab);
    }
  }
}
</script>

