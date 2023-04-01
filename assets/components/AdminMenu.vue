<template>
  <menu class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
    <div class="flex w-full">
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('bus-time')">Borrar usuarios</button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('favourite-stops')">Manejar planos de metro<svg-star/></button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('the-menu')">Bloquear usuarios</button>
      <button class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline" @click="changeTab('the-user-data')">Hola</button>
      <a href="/logout" class="mr-2 flex-1 hover:bg-gray-400 text-white font-bold rounded-md px-4 py-2 transition duration-200 bg-gray-300 focus:outline-none focus:shadow-outline block text-center">Cerrar sesión<svg-logout/></a>
    </div>
  </menu>

</template>

<script>
export default {
  name: "AdminMenu"
}
</script>

<style scoped>

</style>