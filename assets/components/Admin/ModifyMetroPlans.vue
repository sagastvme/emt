<template>
  <add-metro-plan/>
  <table>
    <tr v-for="plan in plans" :key="plan">
      <td>{{plan.name}}</td>
      <td>   <img :src="plan.path" class="h-48 object-contain mb-4"> </td>
  <td>
    <button @click="deletePlan(plan.id, plan.name)" >Borrar plano</button>
  </td>
    </tr>
  </table>
  <teleport v-if="deletedPlan!==null" to="body">
    <confirm-message :message="'Estás seguro de que quieres borrar el plano ' +message"
                     @close-error="this.deletedPlan=null">
      <button @click="deleteUserCommit">SI</button>
      <button class="ml-8" @click="this.deletedPlan=null">NO</button>
    </confirm-message>
  </teleport>








</template>

<script>
import axios from "axios";
import ConfirmMessage from "../ConfirmMessage.vue";
import AddMetroPlan from "./AddMetroPlan.vue";
import ErrorMessage from "../ErrorMessage.vue";
export default {
  name: "ModifyMetroPlans",
  components: {AddMetroPlan, ConfirmMessage, ErrorMessage},
  methods: {
    async loadAllMetroPlans() {
      const response = await axios.get('/allMetroPlans')
    console.log(response)
      this.plans=response.data.plans
    },

    deletePlan(id, name) {
      console.log(id)
      this.deletedPlan=id;
      this.message=name
      console.log(this.deletedPlan)
    },
    async deleteUserCommit(){
      console.log('lo quiere borrar')
      delete this.plans[this.deletedPlan];
      console.log(this.plans)


     const response= await axios.post('/adminDeletesTransportPlan', {
        plan:this.deletedPlan
      })
      const success=response.data.success;

      this.deletedPlan=null
    }
  },
  mounted() {
    this.loadAllMetroPlans()
  },
  data(){
    return{
      plans:null,
      users: null,
      searchedUser: null,
      deletedPlan:null,
      message:null
    }
  }
}
</script>

<style scoped>

</style>