<template>
  <div @click="$emit('close-error')" class="fixed top-0 left-0 h-screen w-full bg-gray-500 bg-opacity-50 z-10 flex justify-center items-center">
    <dialog open class="w-full rounded-lg border-none shadow-md p-5 bg-white">
      <h3 class="p-4 text-4xl lg:text-lg">{{message}}</h3>
      <slot></slot>
    </dialog>
  </div>


</template>


<script>
export default {
  emits: ['close-error'],
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>