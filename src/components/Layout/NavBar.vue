<template>
  <nav
    class="navbar is-success px-2 is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>
        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          :class="{ 'is-active': showMobileNav }"
          ref="navbarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navbarMenuRef"
      >
        <div class="navbar-start">
          <button
            v-if="storeAuth.user.id"
            @click.prevent="logout"
            class="button is-small is-info ml-3"
          >
            LogOut - {{ storeAuth.user.email }}
          </button>
        </div>

        <div class="navbar-end">
          <RouterLink
            to="/"
            @click="showMobileNav = false"
            class="navbar-item"
            active-class="is-active"
            >Notes</RouterLink
          >
          <RouterLink
            to="/stats"
            @click="showMobileNav = false"
            class="navbar-item"
            >Stats</RouterLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Import
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreAuth } from "@/stores/storeAuth";

// store
const storeAuth = useStoreAuth();

// Nav Bar
const showMobileNav = ref(false);
// Nav Bar

// logout button

const logout = () => {
  showMobileNav.value = false;
  storeAuth.logoutUser();
};

// click outside to close

const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);

onClickOutside(
  navbarMenuRef,
  (event) => {
    showMobileNav.value = false;
  },
  {
    ignore: [navbarBurgerRef],
  }
);
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    width: 160px;
    right: 0;
    box-shadow: -1px 1px 4px #919191 !important;
  }
}
</style>
