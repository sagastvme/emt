<template>
  <div @click="$emit('close-error')" class="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-75 z-10">
    <dialog open class="fixed top-20vh left-10% w-80% z-100 rounded-lg border-none shadow-md p-0">
      <h3 class="p-4">{{message}}</h3>
      <button @click="$emit('close-error')" class="w-full py-2 text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Entendido</button>
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
