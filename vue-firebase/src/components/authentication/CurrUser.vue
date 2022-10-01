<script>
import firebase from "firebase";
export default {
    name: "currUser",
    setup(){
        const currUser =  firebase.auth().currentUser;
        return {currUser}

    },

};

</script>