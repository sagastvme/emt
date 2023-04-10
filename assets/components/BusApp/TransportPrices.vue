<template>
  <div class="flex items-center justify-center">
    <div class="w-full p-4 mb-10">
      <h2 class="text-3xl font-bold text-center py-8 ">Precios y tarifas</h2>
      <div class="overflow-x-auto">
        <table class="w-full table-auto">
          <thead class="bg-gray-200">
          <tr>
            <th class="border border-gray-400 py-2 px-4">Abono</th>
            <th class="border border-gray-400 py-2 px-4">Precio</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="plan in plans" :key="plan.id">
            <td class="border border-gray-400 py-2 px-4">{{plan.title}}</td>
            <td class="border border-gray-400 py-2 px-4">{{plan.price}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "TransportPrices",
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