import { createRouter, createWebHashHistory } from "vue-router";
import viewNotes from "@/views/viewNotes.vue";
import viewEditNote from "@/views/viewEditNote.vue";
import viewStats from "@/views/viewStats.vue";
import viewAuth from "@/views/viewAuth.vue";
import { useStoreAuth } from "@/stores/storeAuth";

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
  {
    path: "/auth",
    name: "auth",
    component: viewAuth,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async(to, from) => {
  const storeAuth = useStoreAuth();
  if(!storeAuth.user.id && to.name !== 'auth'){
    return {name: 'auth'}
  }
  if(storeAuth.user.id && to.name === 'auth'){
    return false
  }
})

export default router;
