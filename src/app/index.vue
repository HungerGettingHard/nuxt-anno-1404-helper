<script lang="ts" setup>
import { Header } from "~/widgets/header";
import { SideMenu } from "~/widgets/side-menu";
</script>

<template>
  <Header />

  <main class="page-wrapper">
    <NuxtPage />
  </main>

  <SideMenu />
</template>

<style lang="scss" scoped>
.page-wrapper {
  width: 100%;
}
</style>
  