import { createRouter, createWebHashHistory } from "vue-router";
import viewNotes from "@/views/viewNotes.vue";
import viewEditNote from "@/views/viewEditNote.vue";
import viewStats from "@/views/viewStats.vue";

const routes = [
  {
    path: "/",
    name: "notes",
    component: viewNotes,
  },
  {
    path: "/editNote/:id",
    name: "edit-note",
    component: viewEditNote,
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
