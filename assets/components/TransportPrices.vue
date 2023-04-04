<template>
  <div class="flex">
  <div class="w-1/2 p-4 mb-10">

  <table  class="w-full border">
    <thead class="bg-gray-200">
    <tr>
      <th  class="border border-gray-400 py-2 px-4">Abono</th>
      <th  class="border border-gray-400 py-2 px-4">Precio</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="plan in plans" :key="plan.id">
      <td>
        {{plan.title}}
      </td>
      <td>
        {{plan.price}}
      </td>
    </tr>
    </tbody>

  </table>
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