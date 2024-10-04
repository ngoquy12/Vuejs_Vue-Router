import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductDetail from "@/views/ProductDetail.vue";
import Profile from "@/views/Profile.vue";
import ProductView from "@/views/ProductView.vue";
import ProductReview from "@/views/ProductReview.vue";

// Định nghĩa các route
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/product-detail/:id",
    name: "productDetail",
    component: ProductDetail,
  },
  {
    path: "/profile/:name",
    name: "profile",
    component: Profile,
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
    children: [
      {
        path: "detail",
        name: "product-detail",
        component: ProductDetail,
      },
      {
        path: "review",
        name: "product-review",
        component: ProductReview,
      },
    ],
  },
];

// Tạo cơ chế định tuyến cho ứng dụng
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Đẩy ra bên ngoài cho ứng dụng sử dụng
export default router;
