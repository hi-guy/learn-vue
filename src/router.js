import List from "./components/List";
import Detail from "./components/Detail"
import Timeline from "./wx-timeline/Timeline"

import VueRouter from "vue-router";

const routes = [
  {
    path: "*",
    redirect: "/Timeline"
  },
  {
    path: "/Timeline",
    component: Timeline
  },
  {
    path: "/list",
    component: List
  },
  {
    path: "/detail",
    component: Detail,
    props: (route) => ({ detail: route.query})
  }
];

export default new VueRouter({
  routes
});
