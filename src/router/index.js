import { createRouter, createWebHashHistory } from "vue-router";
import viewNotes from "@/views/viewNotes.vue";
import viewStats from "@/views/viewStats.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: viewNotes,
  },
  {
    path: "/stats",
    name: "stats",
    component: viewStats,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
