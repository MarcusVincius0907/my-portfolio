import { createRouter, createWebHistory } from "vue-router";

import Main from "../components/Main.vue";
import Project from "../components/Project.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/project", component: Project },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
