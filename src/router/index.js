import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/Home/detalles/:id",
    name:"Detalles",
    component: () =>
      import(/* webpackChunkName: "Detalles" */ "../views/Detalles.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
