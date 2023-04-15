<template>
  <div class="bg-gray-300 w-full flex ">
    <button
        class="lg:text-6xl lg:mb-6 lg:py-2 mb-7 w-1/4 text-9xl text-black font-bold rounded-md px-3 py-1 transition duration-200 focus:outline-none focus:shadow-outline flex justify-center items-center" @click="changeTab('forum-new-post')">+</button>
    <button class=" lg:mb-2 lg:py-2 w-1/4 font-bold rounded-md px-3 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline flex justify-center items-center" @click="changeTab('forum-categories')"><svg-forum class="w-20 h-20 lg:h-10 lg:w-10" /></button>
    <button class=" lg:mb-2 lg:py-2 w-1/4 font-bold rounded-md px-3 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline flex justify-center items-center" @click="changeTab('forum-search')"><svg-search class="w-20 h-20 lg:h-10 lg:w-10"/></button>
    <button class="lg:mb-2 w-1/4 font-bold rounded-md px-3 py-2 lg:py-4 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline flex justify-center items-center" @click="changeTab('forum-saved-posts')"><svg-favourite class="w-20 h-20 lg:h-10 lg:w-10"/></button>
  </div>

</template>


<script>
import SvgForum from "../SvgIcons/SvgForum.vue";
import SvgSearch from "../SvgIcons/SvgSearch.vue";
import SvgFavourite from "../SvgIcons/SvgFavourite.vue";

export default {
  name: "ForumMenu",
  components: {SvgFavourite, SvgSearch, SvgForum},
  methods:{
    changeTab(tab) {
      this.$emit('change-tab', tab)
    }
  }
}
</script>

<style scoped>

</style>