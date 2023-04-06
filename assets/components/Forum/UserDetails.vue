<template>
  <div class="max-w-2xl mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold mb-2">Usted esta viendo el perfil de {{ userDetails.username }}</h1>
    <p class="text-gray-600 mb-4">Fecha de creacion {{ userDetails.dateCreated }}</p>
    <div class="flex items-center mb-4">
      <img :src="userDetails.profilePic" class="w-10 h-10 rounded-full mr-4" alt="">
      <p class="text-gray-700">{{ userDetails.postsPublished }} Post publicados</p>
    </div>
    <ul class="list-disc pl-4">
      <li class="font-bold mb-2">Publicaciones activas</li>
      <li v-for="post in userDetails.postsTitles" :key="post.id" class="text-gray-700">
        <a :href="`/read/${post.category}/${userDetails.username}/${post.id}`" class="text-blue-500 hover:text-blue-700">{{post.title}}</a>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
props:['details'],
  mounted() {
  console.log(this.$props.details)
  },
  data(){
  return{
    userDetails:this.$props.details[0]
  }

  }

}
</script>

<style scoped>

</style>