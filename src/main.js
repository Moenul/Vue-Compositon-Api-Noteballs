import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import viewNotes from "@/views/viewNotes.vue";
import viewStats from "@/views/viewStats.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
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
  ],
});

createApp(App).use(router).mount("#app");
