<template>
  <div class="flex flex-col items-center">
    <div class="w-full max-w-md">
      <add-metro-plan />
    </div>
    <div class="w-full overflow-x-auto">
      <table class="w-full">
        <tbody>
        <tr v-for="plan in plans" :key="plan">
          <td class="py-4">{{plan.name}}</td>
          <td class="py-4">
            <img :src="plan.path" class="h-48 object-contain mb-4">
          </td>
          <td class="py-4">
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" @click="deletePlan(plan.id, plan.name)">Borrar plano</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <teleport v-if="deletedPlan!==null" to="body">
      <confirm-message :message="'Estás seguro de que quieres borrar el plano ' +message"
                       @close-error="this.deletedPlan=null">
        <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" @click="deleteUserCommit">SI</button>
        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4" @click="this.deletedPlan=null">NO</button>
      </confirm-message>
    </teleport>
  </div>


</template>

<script>
import axios from "axios";
import ConfirmMessage from "../Messages/ConfirmMessage.vue";
import AddMetroPlan from "./AddMetroPlan.vue";
import ErrorMessage from "../Messages/ErrorMessage.vue";
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