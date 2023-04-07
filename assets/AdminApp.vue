<template>
<the-header/>
  <admin-menu @change-tab="changeTab"/>
  <div class="flex justify-center  ">
    <component :is="selectedTab"/>
  </div>
</template>

<script>
import AdminMenu from "./components/Admin/AdminMenu.vue";
import TheHeader from "./components/TheHeader.vue";
import DeleteUsers from "./components/Admin/DeleteUsers.vue";
import ModifyMetroPlans from "./components/Admin/ModifyMetroPlans.vue";
import ErrorMessage from "./components/ErrorMessage.vue";
import DeletePrice from "./components/Admin/DeletePrice.vue";
import DeletePosts from "./components/Admin/AdminDeletePosts.vue";
export default {
  name: "AdminApp.vue",
  components: {TheHeader, AdminMenu,DeleteUsers,ModifyMetroPlans, ErrorMessage, DeletePrice,DeletePosts},
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