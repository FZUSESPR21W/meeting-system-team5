import Vue from 'vue'
import VueRouter from 'vue-router'
import usermeeting from '../views/usermeeting'
import usermessage from '../views/usermessage'
import login from '../views/login'
import register from '../views/register'

Vue.use(VueRouter)

const routes = [
  {
    path:'/usermeeting',
    component:usermeeting
  },
  {
    path:'/usermessage',
    component:usermessage
  }
  {
    path:'/login',
    component:login
  },
  {
    path:'/register',
    component:register
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
