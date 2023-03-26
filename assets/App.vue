<template>
  <the-header></the-header>
  <the-menu @change-tab="changeTab"></the-menu>
  <component :is="selectedTab"></component>

</template>

<script>

import TheHeader from "./components/TheHeader.vue";
import TheMenu from "./components/TheMenu.vue";
import BusTime from "./components/BusTime.vue";
import TheUserData from "./components/TheUserData.vue";

export default {
  components: {BusTime, TheMenu, TheHeader, TheUserData},

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
button {
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

</style>