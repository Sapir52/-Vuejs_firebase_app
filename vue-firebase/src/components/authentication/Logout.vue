<script>
    import firebase from "firebase";
    
    export default {
      data() {
        return {
          user: null
        };
      },
      created() {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            this.user = user;
          } else {
            this.user = null;
          }
        });
      },
      methods: {
        logOut() {
          firebase.auth().signOut().then(() => {
            firebase.auth().onAuthStateChanged(() => {
              this.$router.push('/login')
            })
          })
        }
      }
    };
    </script>