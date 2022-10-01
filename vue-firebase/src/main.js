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
  apiKey: 'AIzaSyAFmg9n_0UFoDfW0AzuVJKIgGK23G8gSH0',
  authDomain: 'vuefirebase-413f4.firebaseapp.com',
  projectId: 'vuefirebase-413f4',
  storageBucket: 'vuefirebase-413f4.appspot.com',
  messagingSenderId: '652559925390',
  appId: '1:652559925390:web:71b93a9a499147768cc9df',
  measurementId: 'G-LJC5C26E01',
};


firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


