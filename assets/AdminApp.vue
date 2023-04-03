<template>
<the-header/>
  <admin-menu @change-tab="changeTab"/>
  <div class="flex justify-center  ">

    <component :is="selectedTab"/>
  </div>
</template>

<script>
import AdminMenu from "./components/AdminMenu.vue";
import TheHeader from "./components/TheHeader.vue";
import DeleteUsers from "./DeleteUsers.vue";

export default {
  name: "AdminApp.vue",
  components: {TheHeader, AdminMenu,DeleteUsers},
  data(){
    return{
      selectedTab:null
    }
  },
  methods:{
    changeTab(tab) {
      this.selectedTab = tab;
      console.log(this.selectedTab)
    }
  }
}
</script>

<style scoped>

</style>