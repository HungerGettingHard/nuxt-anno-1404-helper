<script lang="ts" setup>
import { useSideMenuStore } from '../store/side-menu';

const menuStore = useSideMenuStore();

const handleClick = () =>
  menuStore.open();
</script>

<template>
  <div
    class="side-menu-button-wrapper"
    @click="handleClick"
  >
    <IconBurger class="side-menu-button__icon" />
  </div>
</template>

<style lang="scss" scoped>
.side-menu-button-wrapper {
  display: flex;
  padding: 4px;
  cursor: pointer;
}

.side-menu-button__icon {
  color: var(--text-0);
}
</style>