

<script>
import TutorialDataService from "../../../services/TutorialDataService";
import TutorialList from "./TutorialsList.vue";

export default {
  name: "tutorials-list",
  mixins: [ TutorialList ],
  mounted() {
    this.unsubscribe = TutorialDataService.getAll().where("title","==","Junior Data Engineer").onSnapshot(this.onDataChange);
  },

};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
