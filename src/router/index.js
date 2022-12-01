import { createRouter, createWebHistory } from "vue-router";
import MyHome from "../views/MyHome";
import MyArchive from "../views/MyArchive";

const routes = [
  {
    path: "/",
    name: "MyHome",
    component: MyHome,
  },
  {
    path: "/archive",
    name: "MyArchive",
    component: MyArchive,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
