<script setup lang="ts">
import { SideMenuButton } from '~/features/open-side-menu';
import Navbar from './Navbar.vue';
</script>

<template>
  <header class="header-wrapper">
    <div class="header__content-wrapper">
      <h1 class="header__title">Anno 1404 <span class="dimmed">handbook</span></h1>

      <Navbar class="header__navbar" />

      <SideMenuButton class="header__side-menu-button" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  justify-content: center;

  width: 100%;
  box-sizing: border-box;

  background-color: var(--background-10);
}

.header__content-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  height: 64px;
  padding: 16px;
}

.header__title {
  color: var(--text-0);

  .dimmed {
    color: var(--text-20);
  }
}

@media screen and (width >= 1024px) {
  .header__content-wrapper {
    width: 1024px;
  }

  .header__side-menu-button {
    display: none;
  }
}

@media screen and (width < 1024px) {
  .header__content-wrapper {
    width: 100%;
    box-sizing: border-box;
  }

  .header__navbar {
    display: none;
  }
}
</style>