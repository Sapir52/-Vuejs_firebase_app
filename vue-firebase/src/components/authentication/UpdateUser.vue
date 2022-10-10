<template>
    <div class="vue-tempalte">
        <form @submit.prevent="userUpdate">
            <h3>Update</h3>

            <div class="form-group">
                <label>Update</label>
                <input type="text" class="form-control form-control-lg" v-model="user.name" />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">
                Update
            </button>
        </form>
    </div>
</template>


<script>
import firebase from "firebase";

export default {
  setup(){
    const currUser =  firebase.auth().currentUser;
    return {currUser}
  },
  data() {
    return {
      user: {
        name: this.currUser.displayName,
        email: this.currUser.email
      }
    };
  },
  methods: {
    userUpdate() {
        this.currUser
          .updateProfile({
            displayName: this.user.name,
            email: this.user.email
          })
          .then(() => {
            this.$router.push('/home')
          });
    }
  }
};
</script>