<template>
  <NavBar></NavBar>
  <div class="container is-max-desktop px-2 py-4">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
// imports

import NavBar from "@/components/Layout/NavBar.vue";
import { useStoreAuth } from "@/stores/storeAuth";
import { onMounted } from "vue";

// storres
const storeAuth = useStoreAuth();
// storres

// mounted
onMounted(() => {
  storeAuth.init();
});
</script>

<style>
@import url(bulma/css/bulma.min.css);
</style>
