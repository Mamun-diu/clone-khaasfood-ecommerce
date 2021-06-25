import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/admin/Dashboard.vue";

const routes = [
  {
    path: "/admin",
    name: "Dashboard",
    component: Dashboard,
  },
//   Tags
  {
    path: "/admin/tags",
    name: "Tag",
    component: () => import("../views/admin/tags/index.vue"),
  },
  {
    path: "/admin/tags/create",
    name: "TagCreate",
    component: () => import("../views/admin/tags/create.vue"),
  },
  {
    path: "/admin/tags/edit/:id",
    name: "TagEdit",
    component: () => import("../views/admin/tags/edit.vue"),
  },
//  Main category
  {
    path: "/admin/main",
    name: "Main",
    component: () => import("../views/admin/main/index.vue"),
  },
  {
    path: "/admin/main/create",
    name: "MainCreate",
    component: () => import("../views/admin/main/create.vue"),
  },
  {
    path: "/admin/main/edit",
    name: "MainEdit",
    component: () => import("../views/admin/main/edit.vue"),
  },
//   Sub category
  {
    path: "/admin/sub",
    name: "Sub",
    component: () => import("../views/admin/sub/index.vue"),
  },
  {
    path: "/admin/sub/create",
    name: "SubCreate",
    component: () => import("../views/admin/sub/create.vue"),
  },
  {
    path: "/admin/sub/edit",
    name: "SubEdit",
    component: () => import("../views/admin/sub/edit.vue"),
  },
//   Hero section
  {
    path: "/admin/hero",
    name: "Hero",
    component: () => import("../views/admin/heroes/index.vue"),
  },
  {
    path: "/admin/hero/create",
    name: "HeroCreate",
    component: () => import("../views/admin/heroes/create.vue"),
  },
  {
    path: "/admin/hero/edit",
    name: "HeroEdit",
    component: () => import("../views/admin/heroes/edit.vue"),
  },
//   Blog
  {
    path: "/admin/blog",
    name: "Blog",
    component: () => import("../views/admin/blogs/index.vue"),
  },
  {
    path: "/admin/blog/create",
    name: "BlogCreate",
    component: () => import("../views/admin/blogs/create.vue"),
  },
  {
    path: "/admin/blog/edit",
    name: "BlogEdit",
    component: () => import("../views/admin/blogs/edit.vue"),
  },
//   Image
  {
    path: "/admin/image",
    name: "Image",
    component: () => import("../views/admin/images/index.vue"),
  },
  {
    path: "/admin/image/create",
    name: "ImageCreate",
    component: () => import("../views/admin/images/create.vue"),
  },
  {
    path: "/admin/image/edit",
    name: "ImageEdit",
    component: () => import("../views/admin/images/edit.vue"),
  },
//   Product
  {
    path: "/admin/product",
    name: "Product",
    component: () => import("../views/admin/products/index.vue"),
  },
  {
    path: "/admin/product/create",
    name: "ProductCreate",
    component: () => import("../views/admin/products/create.vue"),
  },
  {
    path: "/admin/product/edit",
    name: "ProductEdit",
    component: () => import("../views/admin/products/edit.vue"),
  },


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
