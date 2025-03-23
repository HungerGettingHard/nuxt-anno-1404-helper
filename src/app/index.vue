<script lang="ts" setup>
import { Header } from "~/widgets/header";
</script>

<template>
  <Header />

  <main class="page-wrapper">
    <NuxtPage />
  </main>
</template>

<style lang="scss" scoped>
.page-wrapper {
  width: 100%;
}
</style>
  