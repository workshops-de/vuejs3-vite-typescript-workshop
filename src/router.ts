import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import BookList from "@/views/BookList.vue";
import NotFound from "@/views/NotFound.vue";
import AboutPage from "@/views/AboutPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/books",
  },
  {
    path: "/books",
    name: "Books",
    component: BookList,
  },
  {
    path: "/AboutPage",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
