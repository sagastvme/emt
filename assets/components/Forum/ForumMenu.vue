<template>
  <div class="bg-gray-100 rounded-lg shadow-lg mt-3">
    <div class="flex w-full">
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-3 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('forum-new-post')">+</button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-3 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('forum-categories')">Foro</button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-3 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('forum-search')">Buscar</button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-3 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('forum-saved-posts')">Publicaciones guardadas</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "ForumMenu",
  methods:{
    changeTab(tab) {
      this.$emit('change-tab', tab)
    }
  }
}
</script>

<style scoped>

</style>