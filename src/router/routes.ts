import { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/User/Login.vue";
import SignUp from "../views/User/SignUp.vue";

const clientList = () => import("../views/Client/List.vue");

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: {
      name: "Login",
    },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: SignUp,
    meta: {
      guest: true,
    },
  },
  {
    path: "/client/list",
    name: "clientList",
    component: clientList,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../views/About.vue"),
  },
];
