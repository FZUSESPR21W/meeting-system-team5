import Vue from 'vue'
import VueRouter from 'vue-router'
import usermeeting from '../views/usermeeting'
import usermessage from '../views/usermessage'
import secretaryPage2 from '../views/secretaryPage2'
import secretaryUser from '../views/secretaryUser'
import login from '../views/login'
import register from '../views/register'
import president from '../views/president'
import submeeting from '../views/submeeting'

Vue.use(VueRouter)

const routes = [{
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
    },
    {
        path: '/secretaryUser',
        component: secretaryUser
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/president',
        component: president
    },
    {
        path: '/submeeting',
        component: submeeting
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router