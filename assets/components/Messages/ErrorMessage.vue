<template>
  <div @click="$emit('close-error')" class="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-75 z-10 flex justify-center items-center">
    <dialog open class="w-3/4 rounded-lg border-none shadow-md p-4 text-6xl mx-auto lg:text-xl">
      <h3 class="p-4 ">{{message}}</h3>
      <slot></slot>
      <button @click="$emit('close-error')" class="lg:h-14 w-full py-3 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ">Entendido</button>
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
