import { createRouter, createWebHistory } from "vue-router";
import ClientsList from "./pages/client/ClientsList.vue";
import Dashboard from "./pages/master/dashboard.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Dashboard,
      name: "Dashboard",
      redirect: "/clients",
      children: [{ name: "clients", path: "/clients", component: ClientsList }],
    },
  ],
});

export default router;
