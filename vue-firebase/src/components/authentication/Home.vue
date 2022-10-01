<template>
    <div class="vue-tempalte">
      <h3>Welcome {{currUser.displayName}}</h3>
        <ul class="nav navbar-nav">
          <h6>{{currUser.uid}}</h6>
          <li class="social-icons ul">
            <router-link class="btn btn-outline-primary" to="/book-home">Book-Home</router-link>
            <router-link class="btn btn-outline-primary" to="/update-user">Update-User</router-link>
          </li>
        </ul>
        <br>
        <button 
        type="submit" 
        class="btn btn-dark btn-lg btn-block"
        @click="logOut()">
            Log out
        </button>
    </div>
</template>

<script>
import LogOut from "./Logout.vue"
import CurrUser from "./CurrUser.vue"
export default {
  name: "home",
  mixins:[LogOut, CurrUser],
};
</script>
