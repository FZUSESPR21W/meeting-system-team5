import Vue from 'vue'
import VueRouter from 'vue-router'
import usermeeting from '../views/usermeeting'
import usermessage from '../views/usermessage'
import secretaryPage2 from '../views/secretaryPage2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/usermeeting',
    component: usermeeting
  },
  {
    path: '/usermessage',
    component: usermessage
  },
  {
    path: '/secretaryPage2',
    component: secretaryPage2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
