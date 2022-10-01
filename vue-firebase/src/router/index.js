/**
    * @description      : 
    * @author           : ספיר
    * @group            : 
    * @created          : 22/09/2022 - 09:53:29
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/09/2022
    * - Author          : ספיר
    * - Modification    : 
**/
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () =>
        import('../components/authentication/Home'),
  },

  {
    path: '/',
    name: 'register',
    component: () => import('../components/authentication/Register')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/authentication/Login')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/authentication/ForgotPassword')
  },
  {
    path: "/update-user",
    name: "update-user",
    component: () => import("../components/authentication/UpdateUser")
  },
  {
    path: '/book-home',
    name: 'book-home',
    component: () =>
        import('../components/firestore/book/BookHome'),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/firestore/book/AddTutorial")
  },
  {
    path: "/tutorialsList",
    name: "tutorialsList",
    component: () => import("../components/firestore/book/TutorialsList")
  },
  {
    path: "/filterData",
    name: "filterData",
    component: () => import("../components/firestore/book/FilterData")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

