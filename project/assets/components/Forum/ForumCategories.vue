<template>
  <div v-if="showCategories">
    <div id="my-table" >
      <table class="table-fixed w-full h-full">
        <tbody>
        <tr v-for="category in categories" :key="category.id" class="bg-white hover:bg-gray-200 ">
          <td class="px-3 py-24 border border-gray-300 text-center lg:py-4">
            <a :href="'/show/' + category.name + '/' + category.id"
               class="font-bold text-gray-800 text-5xl lg:text-xl">{{ category.name }}</a>
            <p class="hidden mt-2 text-sm text-gray-600 lg:block lg:text-xl">{{ category.description }}</p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>

</template>

<script>

export default {
  name: "ForumCategories",
  props: ['categories'],
  data() {
    return {
      showCategories: true
    }
  }

}
</script>

<style scoped>

</style>