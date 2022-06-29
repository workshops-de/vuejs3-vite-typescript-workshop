import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import NotFound from "@/views/NotFound.vue";
import AboutPage from "@/views/AboutPage.vue";
const BooksPage = () => import("@/views/BooksPage.vue");
const BookDetail = () => import("@/views/BookDetail.vue");
const BookList = () => import("@/views/BookList.vue");
const BookEdit = () => import("@/views/BookEdit.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/books",
  },
  {
    path: "/books",
    component: BooksPage,
    children: [
      {
        path: "",
        name: "Books",
        component: BookList,
      },
      {
        path: ":isbn",
        name: "BookDetail",
        component: BookDetail,
      },
      {
        path: ":isbn/edit",
        name: "BookEdit",
        component: BookEdit,
      },
    ],
  },
  {
    path: "/about",
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
