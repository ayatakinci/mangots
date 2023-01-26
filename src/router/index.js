import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Firebase from "@/views/Firebase.vue";
import kSatinAl from "@/views/kSatinAl.vue";
import Login from '../views/Login.vue'
import erkek from '../views/Erkek.vue'
import eSatinAl from '../views/eSatinAl.vue'
import eproduct from '../views/eproduct.vue'
import genc from '../views/genc.vue'
import cocuk from '../views/cocuk.vue'
import { auth } from '../firebase/index'
import UserList from '../views/UserList.vue'
import User from '../views/User.vue'
import express from "@/views/express.vue";
import cart from '../views/cart.vue'
import items from '../views/items.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/firebase",
    name: "Firebase",
    component: Firebase,
  },
  {
    path: "/items",
    name: "items",
    component: items,
  },
  {
    path: "/cart",
    name: "cart",
    component: cart,
  },
  {
    path: "/ksatinal",
    name: "kSatinAl",
    component: kSatinAl,
  },
  {
    path: "/erkek",
    name: "erkek",
    component: erkek,
  },
  {
    path: "/eSatinAl",
    name: "eSatinAl",
    component: eSatinAl,
  },
  {
    path: "/eproduct/:id",
    name: "eproduct",
    component: eproduct,
  },
  {
    path: "/express",
    name: "express",
    component: express,
  },
  {
    path: "/genc",
    name: "genc",
    component: genc,
  },
  {
    path: "/cocuk",
    name: "cocuk",
    component: cocuk,
  },
  {
    path: "/UserList",
    name: "UserList",
    component: UserList,
  },
  {
    path: "/user/:id",
    name: "user",
    component: User,
  },
 
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router
