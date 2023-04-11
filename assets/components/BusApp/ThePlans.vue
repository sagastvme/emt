<template>
  <div v-if="plans">
    <h2 class="text-3xl font-bold text-center py-8">Planos de transporte</h2>
    <ul class="flex flex-wrap justify-center md:flex-row">
      <li v-for="(plan, index) in plans" :key="index" class="m-4">
        <div class="rounded border-2 border-red-400 w-80 h-80 flex flex-col justify-center items-center sm:mx-auto">
          <h3 class="text-lg font-bold mb-4">{{index }}</h3>
          <img :src="plan" class="h-48 object-contain mb-4">
          <button @click="viewImage(plan)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full">
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
      window.location.href = plan;
    }

  },
  data() {
    return {
      plans: null
    }
  }
}
</script>

