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
    path: "/admin/main/edit/:id",
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
    path: "/admin/sub/edit/:id",
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
    path: "/admin/hero/edit/:id",
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
    path: "/admin/blog/edit/:id",
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
    path: "/admin/image/edit/:id",
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
    path: "/admin/product/edit/:id",
    name: "ProductEdit",
    component: () => import("../views/admin/products/edit.vue"),
  },





  {
    path: "/home/",
    name: "Home",
    component: () => import("../views/local/Home.vue"),
  },
  {
      path: "/home/faqs",
      name: "Faq",
      component: () => import("../views/local/Faq.vue")
  },
  {
      path: "/home/track-order",
      name: "Track",
      component: () => import("../views/local/TrackOrder.vue")
  },
  {
      path: "/home/how-to-order",
      name: "HowToOrder",
      component: () => import("../views/local/HowToOrder.vue")
  },
  {
      path: "/home/contact-us",
      name: "ContactUs",
      component: () => import("../views/local/ContactUs.vue")
  },
  {
      path: "/home/store",
      name: "Store",
      component: () => import("../views/local/Store.vue")
  },
  {
      path: "/home/product",
      name: "Product",
      component: () => import("../views/local/Product.vue")
  },
  {
      path: "/home/product/:slug",
      name: "ProductView",
      component: () => import("../views/local/ProductView.vue")
  },
  {
      path: "/home/cart",
      name: "ProductCart",
      component: () => import("../views/local/Cart.vue")
  },
  {
      path: "/home/gift",
      name: "GiftCart",
      component: () => import("../views/local/GiftCard.vue")
  },
  {
      path: "/home/main/:id",
      name: "MainCategory",
      component: () => import("../views/local/ShowMain.vue")
  },
  {
      path: "/home/sub/:id",
      name: "SubCategory",
      component: () => import("../views/local/ShowSub.vue")
  },
  {
    path: "/home/search/:slug",
    name: "ProductSearch",
    component: () => import("../views/local/Search.vue")
  },
  {
    path: "/home/blog/:id",
    name: "Blog",
    component: () => import("../views/local/Blog.vue")
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
