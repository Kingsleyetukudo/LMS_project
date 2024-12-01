import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/signup",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (Register.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/auths/SignUp.vue"),
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/auths/Login.vue"),
    },
    {
      path: "/forgetpassword",
      name: "forgetpassword",
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/auths/ForgetPassword.vue"),
    },
    {
      path: "/passwordmail",
      name: "passwordmail",
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/auths/PasswordMail.vue"),
    },
  ],
});

export default router;
