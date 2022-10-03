/**
    * @description      : 
    * @author           : ספיר
    * @group            : 
    * @created          : 22/09/2022 - 09:41:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/09/2022
    * - Author          : ספיר
    * - Modification    : 
**/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.use(router)
import "firebase/firestore";

const firebaseConfig = {
  apiKey:  "********************************",
  authDomain:  "********************************",
  projectId:  "********************************",
  storageBucket:  "********************************",
  messagingSenderId:  "********************************",
  appId:  "********************************",
  measurementId:  "********************************",
};


firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


