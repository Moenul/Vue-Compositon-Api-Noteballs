<template>
  <NavBar></NavBar>
  <div class="container is-max-desktop px-2 py-4">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
// imports

import NavBar from "@/components/Layout/NavBar.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { onMounted } from "vue";

// storres
const storeNotes = useStoreNotes();
// storres

// mounted
onMounted(() => {
  storeNotes.getNotes();
});
</script>

<style>
@import url(bulma/css/bulma.min.css);
</style>
