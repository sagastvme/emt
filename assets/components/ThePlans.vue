<template>
  <div v-if="plans" class="flex flex-wrap justify-center">
    <ul class="inline-flex flex-wrap">
      <li v-for="(plan, index) in plans" :key="index" class="m-4">
        <div class="rounded border-2 border-red-400 w-80 h-80 flex flex-col justify-center items-center">
          <h3 class="text-lg font-bold mb-4">{{index }}</h3>
          <img :src="plan" class="h-48 object-contain mb-4">
          <button @click="viewImage(plan)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            View full size
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  mounted() {
    this.askForImages()
  }, methods: {
    async askForImages() {
      axios.get('/plans')
          .then(response => {
            console.log(response)
            this.plans = (response.data)
            console.log(this.plans)
          })
          .catch(error => {
            console.error(error);
          });
    },
    viewImage(plan) {
      window.open(plan, '_blank');
    }
  },
  data() {
    return {
      plans: null
    }
  }
}
</script>

