<template>
  <div v-if="plans" class="w-full h-full">
    <h2 class="lg:hidden mt-8 flex justify-center items-center mr-3 mb-12 text-gray-700 font-bold text-3xl">
      <svg-map class="w-52 h-52"/> </h2>
    <ul class="lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:flex-row w-full">
      <li v-for="(plan, index) in plans" :key="index" class="m-4">
        <div class="  flex flex-col justify-center items-center ">
          <h3 class="text-5xl font-bold my-6 uppercase lg:text-xl">{{index }}</h3>
          <img @click="viewImage(plan)" :src="plan" class="lg:h-96  h-full object-contain mb-4">

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

