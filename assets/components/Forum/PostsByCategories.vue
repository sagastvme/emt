<template>
  <div class=" text-white px-3 py-6 ">
    <h1 class="text-4xl font-bold mb-4">{{ categoryLocal.name }}</h1>
    <p class="text-lg mb-6">{{ categoryLocal.description }}</p>
    <ul class="text-lg" v-if="postLocal.length>0">
      <li v-for="post in postLocal" class="mb-4">
        <div class="flex justify-between border-b-2 border-gray-800 pb-4">
          <div class="flex flex-col">
            <a :href="`/read/${post.category}/${post.author}/${post.id}`" class="text-black hover:text-blue-300 font-bold">{{ post.title }}</a>
            <p class="text-gray-800">{{ post.author }} - {{ post.date }}</p>
          </div>
      </div>
      </li>
    </ul>
    <div v-else>
      <p class="text-3xl">Aun no hay publicaciones en esta categoria</p>
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