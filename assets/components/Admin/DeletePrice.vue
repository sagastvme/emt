<template>
  <div class="text-4xl lg:text-xl">
    <h1 class="text-6xl font-bold mb-8 flex justify-center lg:hidden">Actualizar tarifas</h1>

    <form @submit.prevent="searchPlan" class="mx-8">
    <h2 class=" font-bold mb-4">Buscar</h2>
    <div class="flex items-center py-2 ">
      <input ref="searchedPlan"  required type="text" class="w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded" type="submit">
        Buscar tarifa
      </button>
    </div>
  </form>



  <form @submit.prevent="insertPlan" class="mx-8">
    <h2 class="font-bold mb-4">Añadir plan</h2>
    <div class="mb-2">
      <input ref="newPlanTitle" id="newPlanTitle" placeholder="Título de la nueva tarifa" required type="text"
             class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
    </div>
    <div class="mb-4">
      <input ref="newPlanPrice" id="newPlanPrice" placeholder="Precio de la nueva tarifa" required type="text"
             class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
    </div>
    <button class="bg-red-400 py-2 px-3 text-white rounded-md shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            type="submit">Añadir tarifa</button>
  </form>

  <table v-if="searchedPlan==null" class="text-4xl  mt-4 lg:text-xl">
    <thead>
    <tr class="bg-gray-200">
      <th class="px-3 py-2">Título</th>
      <th class="px-3 py-2">Precio</th>
      <th class="px-3 py-2">Acción</th>
    </tr>
    </thead>
    <tbody class="bg-gray-300">
    <tr v-for="plan in plans" :key="plan.id" :class="{ focused: plan.title === searchedPlan }">
      <td class="border px-3 py-2">{{ plan.title }}</td>
      <td class="border px-3 py-2">{{ plan.price }}</td>
      <td class="border px-3 py-2">
        <button class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-3 rounded"
                @click="deletePlan(plan)">Borrar tarifa</button>
      </td>
    </tr>
    </tbody>
  </table>


<div v-else class="text-4xl lg:text-xl">
  <button class="bg-red-300 px-3 py-2 my-4 rounded-md" @click="this.searchedPlan=null">Ir atras</button>
  <table  class="table-auto w-full">
    <thead class="bg-gray-200">
    <tr>
      <th class="px-3 py-2">Titulo</th>
      <th class="px-3 py-2">Precio</th>
      <th class="px-3 py-2">Acciones</th>
    </tr>
    </thead>
    <tbody class="bg-gray-300">
    <tr v-for="results in searchedPlan" :key="results.id" :class="{ 'bg-gray-100': results.title === searchedPlan }">
      <td class="border px-3 py-2">{{ results.title }}</td>
      <td class="border px-3 py-2">{{ results.price }}</td>
      <td class="border px-3 py-2">
        <button class="bg-red-400 text-white px-3 py-2 rounded-md" @click="deletePlan(results)">Borrar tarifa</button>
      </td>
    </tr>
    </tbody>
  </table>
</div>


  <teleport v-if="deletedPlan!==null" to="body">
    <confirm-message :message="'Estás seguro de que quieres borrar la tarifa ' +deletedPlan"
                     @close-error="this.deletedPlan=null">
      <button class="lg:text-xl text-center text-4xl bg-red-500 text-white font-bold py-2 px-3 rounded hover:bg-red-600
                        transition-colors duration-300" @click="deleteUserCommit">SI</button>
      <button class="lg:text-xl bg-gray-300 text-gray-700 font-bold text-4xl text-center py-2
                 px-3 ml-4 rounded hover:bg-gray-400 transition-colors duration-300"

              @click="this.deletedPlan=null">NO</button>
    </confirm-message>





  </teleport>



  <teleport v-if="newPlanTitle!==null" to="body">
    <confirm-message :message="'Esta seguro de que quiere crear una nueva tarifa '+this.$refs.newPlanTitle.value"
                     @close-error="this.newPlanTitle=null">
      <button class="lg:text-xl text-center text-4xl bg-red-500 text-white font-bold py-2 px-3 rounded hover:bg-red-600
                        transition-colors duration-300" @click="addPriceCommit">SI</button>
      <button class="lg:text-xl bg-gray-300 text-gray-700 font-bold text-4xl text-center py-2
                 px-3 ml-4 rounded hover:bg-gray-400 transition-colors duration-300"

              @click="this.newPlanTitle=null">NO</button>
    </confirm-message>
  </teleport>
  </div>

</template>

<script>
import axios from "axios";
import ConfirmMessage from "../Messages/ConfirmMessage.vue";

export default {
  components: {ConfirmMessage},
  mounted() {
    this.loadAllPrices();
  }, methods: {
    async loadAllPrices() {
      const response = await axios.get('/allPrices')
      console.log(response.data) // log the response data
      this.plans = response.data.plans
    }
    ,

    searchPlan() {
      const foundPlan = this.plans.filter(u => u.title.toLowerCase().includes(this.$refs.searchedPlan.value.toLowerCase()));

      console.log(foundPlan)
      if (foundPlan) {
        console.log(0);
        this.searchedPlan = foundPlan
      } else {
        alert('no existe')
        this.$refs.searchedPlan.value = '';
        this.$refs.searchedPlan.focus();
      }
    },
    deletePlan(plan) {
      console.log(plan)
      this.deletedPlan=plan.title;
      this.deletedPlanId=plan.id
      console.log(this.deletedPlan)
    },
    async deleteUserCommit(){
      console.log('lo quiere borrar')

      this.plans=this.plans.filter(u=> u.id !== this.deletedPlanId);

      console.log(this.plans)
      this.searchedPlan=null

      const response= await axios.post('/adminDeletesPlan', {
        plan:this.deletedPlanId
      })


    },
    insertPlan(){
      this.newPlanTitle=this.$refs.newPlanTitle
    },
   async addPriceCommit(){
      const response= await axios.post('/addNewPlan', {
        title:this.$refs.newPlanTitle.value,
        price:this.$refs.newPlanPrice.value
      })
     const newPlan = {
       title: this.$refs.newPlanTitle.value,
       price: this.$refs.newPlanPrice.value,
       id: response.data.id
     };
     this.plans.push(newPlan)
     console.log(this.plans)
     this.$refs.newPlanTitle.value=''
     this.$refs.newPlanPrice.value=''
    }
  },
  data() {
    return {
      plans: [],
      searchedPlan: null,
      deletedPlan:null,
      deletedPlanId:null,
      newPlanTitle:null,
      newPlanPrice:null
    }
  }
}
</script>
