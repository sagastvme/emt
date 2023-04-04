<template>

  <form @submit.prevent="searchPlan">
    <h2>Introduzca la tarifa que quiere buscar </h2>
    <input ref="searchedPlan" placeholder="aqui" required type="text">
    <input class="bg-red-400" type="submit" value="Buscar tarifa">
  </form>


  <form @submit.prevent="insertPlan" class="border border-black">
    <h2>Anadir plano </h2>
    <label for="newPlanTitle">Titulo de la nueva tarifa</label>
    <input ref="newPlanTitle" id="newPlanTitle" placeholder="aqui" required type="text">


    <label for="newPlanPrice">Precio de la nueva tarifa</label>
    <input ref="newPlanPrice" id="newPlanPrice" placeholder="aqui" required type="text">

    <input class="bg-red-400" type="submit" value="Anadir tarifa">

  </form>


  <table v-if="searchedPlan==null">
    <tr v-for="plan in plans" :key="plan.id" :class="{ focused: plan.title === searchedPlan }">
      <td>{{ plan.title }}</td>
      <td>{{ plan.price }}</td>
      <td>
        <button @click="deletePlan(plan)">Borrar tarifa</button>
      </td>
    </tr>
  </table>


  <table v-else>
    <button class="bg-red-300" @click="this.searchedPlan=null">Ir atras</button>
    <tr v-for="results in searchedPlan">

      <td>{{ results.title }}</td>
      <td>{{ results.price }}</td>
      <td>
        <button @click="deletePlan(results)">Borrar tarifa</button>
      </td>
    </tr>
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
</template>

<script>
import axios from "axios";
import ConfirmMessage from "../ConfirmMessage.vue";

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
