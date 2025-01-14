import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: HomeView,
      // meta: { requiresAuth: true },
      children: [
        {
          path: "about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "announcement",
          name: "announcement",
          component: () => import("../views/Announcement.vue"),
          // meta: { requiresAuth: true },
        },
        {
          path: "assignment",
          name: "assignment",
          component: () => import("../views/Assignment.vue"),
          // meta: { requiresAuth: true },
        },
        {
          path: "attendance",
          name: "attendance",
          component: () => import("../views/Attendance.vue"),
          // meta: { requiresAuth: true },
        },
        {
          path: "courses",
          name: "courses",
          component: () => import("../views/Courses.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "examinations",
          name: "examinations",
          component: () => import("../views/Examination.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "forums",
          name: "forums",
          component: () => import("../views/Forums.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "live-chat",
          name: "live-chat",
          component: () => import("../views/LiveChat.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "live-lectures",
          name: "live-lectures",
          component: () => import("../views/LiveLectures.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "notifications",
          name: "notifications",
          component: () => import("../views/Notifications.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "past-courses",
          name: "past-courses",
          component: () => import("../views/PastCourses.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "progress-tracker",
          name: "progress-tracker",
          component: () => import("../views/ProgressTracker.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "recorded-lectures",
          name: "recorded-lectures",
          component: () => import("../views/RecordedLectures.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "test",
          name: "test",
          component: () => import("../views/Test.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "timetable",
          name: "timetable",
          component: () => import("../views/TimeTable.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "library",
          name: "library",
          component: () => import("../views/Library.vue"),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: "/signup",
      name: "register",
      component: () => import("../views/auths/SignUp.vue"),
    },
    {
      path: "/count",
      name: "count",
      component: () => import("../views/countdown.vue"),
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
    next({ name: "dashboard" }); // Redirect authenticated users to dashboard
  } else if (to.meta.requiresAuth && !token) {
    next({ name: "login" }); // Redirect unauthenticated users to login
  } else {
    next(); // Proceed to the route
  }
});

export default router;
