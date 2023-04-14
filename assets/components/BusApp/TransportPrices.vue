<template>

  <div class="flex flex-col items-center">
    <div class="w-full px-4 py-8">
      <h2 class="flex justify-center items-center mr-3 text-gray-700 font-bold text-3xl">
        <svg-price class="w-52 h-52"/> </h2>
      <div class="overflow-x-auto w-full mt-20">
        <table class="w-full mt-4 table-auto ">
          <thead class="bg-[#616163] text-white ">
          <tr>
            <th class="border border-black px-3 py-2   text-4xl ">Abono</th>
            <th class="border border-black px-3 py-2   text-4xl  ">Precio</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="plan in plans" :key="plan.id" class="bg-gray-300">
            <td class="py-6 font-semibold border border-black  text-center text-4xl">{{plan.title}}</td>
            <td class="py-6 font-semibold border border-black  text-center text-4xl">{{plan.price}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>


<script>
import axios from "axios";
import SvgPrice from "../SvgIcons/SvgPrice.vue";

export default {
  name: "TransportPrices",
  components: {SvgPrice},
  mounted() {
    this.loadPlans();
  },
  methods:{
    async loadPlans(){
      const response= await axios.get('/loadAllPlans')
console.log(response)
      this.plans=response.data.plans
    }
  },
  data(){
    return{
      plans:null
    }
  }
}
</script>

<style scoped>

</style>