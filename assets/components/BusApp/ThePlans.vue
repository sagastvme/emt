<template>
  <div v-if="plans" class="w-full h-full">
    <h2 class="flex justify-center items-center mr-3 mb-12 text-gray-700 font-bold text-3xl">
      <svg-map class="w-52 h-52"/> </h2>
    <ul class="w-full">
      <li v-for="(plan, index) in plans" :key="index" class="m-4">
        <div class="  flex flex-col justify-center items-center ">
          <h3 class="text-4xl font-bold my-4 uppercase">{{index }}</h3>
          <img @click="viewImage(plan)" :src="plan" class="h-96 object-contain mb-4">

        </div>
      </li>
    </ul>
  </div>


</template>


<script>
import axios from 'axios';
import SvgMap from "../SvgIcons/SvgMap.vue";

export default {
  components: {SvgMap},

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

