import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
  },
//   {
//     path: "/admin",
//     name: "Admin",
//     component: () => import("../views/Admin.vue"),

//   },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.userAuth)) {
//     if (!store.getters.checkUser || !store.getters.checkLogin) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   }
//    else {
//     next()
//   }
// })

//   {
//     path: "/logout",
//     name: "Logout",
//     component: () => import("../views/Logout.vue"),
//     meta: {
//       logout: true,
//     }
//   },

export default router;
