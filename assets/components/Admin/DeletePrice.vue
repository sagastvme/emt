<template>
  <div>
  <form @submit.prevent="searchPlan" class="w-full max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Introduzca la tarifa que quiere buscar</h2>
    <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
      <input ref="searchedPlan" placeholder="Escriba aquí el título de la tarifa" required type="text" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">
      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">
        Buscar tarifa
      </button>
    </div>
  </form>



  <form @submit.prevent="insertPlan" class="border border-black p-4">
    <h2 class="mb-4 text-lg font-medium">Añadir plan</h2>
    <div class="mb-2">
      <label for="newPlanTitle" class="block font-medium mb-1">Título de la nueva tarifa</label>
      <input ref="newPlanTitle" id="newPlanTitle" placeholder="Escriba aquí" required type="text"
             class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
    </div>
    <div class="mb-4">
      <label for="newPlanPrice" class="block font-medium mb-1">Precio de la nueva tarifa</label>
      <input ref="newPlanPrice" id="newPlanPrice" placeholder="Escriba aquí" required type="text"
             class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
    </div>
    <button class="bg-red-400 py-2 px-4 text-white rounded-md shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            type="submit">Añadir tarifa</button>
  </form>

  <table v-if="searchedPlan==null" class="table-auto w-full mt-4">
    <thead>
    <tr class="bg-gray-200">
      <th class="px-4 py-2">Título</th>
      <th class="px-4 py-2">Precio</th>
      <th class="px-4 py-2">Acción</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="plan in plans" :key="plan.id" :class="{ focused: plan.title === searchedPlan }">
      <td class="border px-4 py-2">{{ plan.title }}</td>
      <td class="border px-4 py-2">{{ plan.price }}</td>
      <td class="border px-4 py-2">
        <button class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
                @click="deletePlan(plan)">Borrar tarifa</button>
      </td>
    </tr>
    </tbody>
  </table>



  <table v-else class="table-auto w-full">
    <button class="bg-red-300 px-4 py-2 my-4 rounded-md" @click="this.searchedPlan=null">Ir atras</button>
    <thead>
    <tr>
      <th class="px-4 py-2">Titulo</th>
      <th class="px-4 py-2">Precio</th>
      <th class="px-4 py-2">Acciones</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="results in searchedPlan" :key="results.id" :class="{ 'bg-gray-100': results.title === searchedPlan }">
      <td class="border px-4 py-2">{{ results.title }}</td>
      <td class="border px-4 py-2">{{ results.price }}</td>
      <td class="border px-4 py-2">
        <button class="bg-red-500 text-white px-4 py-2 rounded-md" @click="deletePlan(results)">Borrar tarifa</button>
      </td>
    </tr>
    </tbody>
  </table>

  <teleport v-if="deletedPlan!==null" to="body">
    <confirm-message :message="'Estás seguro de que quieres borrar la tarifa ' +deletedPlan"
                     @close-error="this.deletedPlan=null">
      <button @click="deleteUserCommit">SI</button>
      <button class="ml-8" @click="this.deletedPlan=null">NO</button>
    </confirm-message>





  </teleport>



  <teleport v-if="newPlanTitle!==null" to="body">
    <confirm-message :message="'Esta seguro de que quiere crear una nueva tarifa '+this.$refs.newPlanTitle.value"
                     @close-error="this.newPlanTitle=null">
      <button @click="addPriceCommit">SI</button>
      <button class="ml-8" @click="this.newPlanTitle=null">NO</button>
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
