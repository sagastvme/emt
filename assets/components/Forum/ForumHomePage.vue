  <template>
    <forum-menu @change-tab="changeTab"/>
      <component :is="selectedTab" :categories="categories"/>
  </template>


  <script>
import ForumMenu from "./ForumMenu.vue";
import ForumCategories from "./ForumCategories.vue";
import ForumNewPost from "./ForumNewPost.vue";
import axios from "axios";
import ErrorMessage from "../ErrorMessage.vue";
import ForumSearch from "./ForumSearch.vue";
import ForumSavedPosts from "./ForumSavedPosts.vue";
export default {
  name: "ForumHomePage",
  components: {ForumMenu,ForumCategories,ForumNewPost,ErrorMessage, ForumSearch,ForumSavedPosts},
  data(){
    return{
      selectedTab:'forum-categories',
      categories:null
    }
  },
  methods:{
    changeTab(tab) {
      this.selectedTab = tab;
      console.log(this.selectedTab)
    },
    async getCategories(){
      const response= await axios.get('/allCategories')
      console.log(response)
      this.categories=response.data.categories
    }
  },
  mounted() {
    this.getCategories();
  }
}
</script>