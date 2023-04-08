<template>
  <div @click="$emit('close-error')" class="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-75 z-10 flex justify-center items-center">
    <dialog open class="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-lg border-none shadow-md p-0">
      <h3 class="p-4">{{message}}</h3>
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