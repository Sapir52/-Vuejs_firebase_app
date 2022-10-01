<template>
    <div class="vue-tempalte">
      <h3>Book Home</h3>
      <h3>Welcome {{currUser.displayName}}</h3>
      <ul class="nav navbar-nav">
        <li class="social-icons ul">
            <router-link class="btn btn-outline-primary" to="/add">Add</router-link>
            <router-link class="btn btn-outline-primary" to="/tutorialsList">Tutorials-List</router-link>
            <router-link class="btn btn-outline-primary" to="/filterData">Filter-Data</router-link>
        </li>
      </ul>
      <div class="container mt-3">
        <router-view />
      </div>
      <button 
        type="submit" 
        class="btn btn-dark btn-lg btn-block"
        @click="logOut()">
            Log out
      </button>
    </div>

</template>
<script>
import LogOut from "./../../authentication/Logout.vue"
import CurrUser from "./../../authentication/CurrUser.vue"
export default {
  name: "book-home",
  mixins:[LogOut, CurrUser],
};
</script>

<style scoped>
.container h2 {
  text-align: center;
  margin: 25px auto;
}
</style>