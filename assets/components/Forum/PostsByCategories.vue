<template>
  <div class="bg-purple-900 text-white px-4 py-6 lg:px-8 lg:py-12">
    <h1 class="text-4xl font-bold mb-4">{{ categoryLocal.name }}</h1>
    <p class="text-lg mb-6">{{ categoryLocal.description }}</p>
    <ul class="text-lg" v-if="postLocal.length>0">
      <li v-for="post in postLocal" class="mb-4">
        <div class="flex justify-between border-b-2 border-purple-800 pb-4">
          <div class="flex flex-col">
            <a :href="`/read/${post.category}/${post.author}/${post.id}`" class="text-blue-400 hover:text-blue-300 font-bold">{{ post.title }}</a>
            <p class="text-gray-400">{{ post.author }} - {{ post.date }}</p>
          </div>
          <a :href="`/read/${post.category}/${post.author}/${post.id}`" class="bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded text-gray-900 font-bold">Leer</a>
        </div>
      </li>
    </ul>
    <div v-else>
      <p class="text-lg">Aun no hay publicaciones en esta categoria</p>
    </div>
  </div>

</template>

<script>
export default {
props:['post', 'categories'],
  data(){
  return{
    postLocal:this.$props.post,
    categoryLocal:this.$props.categories
  }
  },
  mounted() {
  console.log(this.$props.post)

  }
}
</script>

<style scoped>

</style>