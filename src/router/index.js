import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/signup",
      name: "register",
      component: () => import("../views/auths/SignUp.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/auths/Login.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/forgetpassword",
      name: "forgetpassword",
      component: () => import("../views/auths/ForgetPassword.vue"),
    },
    {
      path: "/passwordmail",
      name: "passwordmail",
      component: () => import("../views/auths/PasswordMail.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("authToken");

  if (to.name === "login" && token) {
    next({ name: "home" });
  } else if (to.meta.requiresAuth && !token) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
