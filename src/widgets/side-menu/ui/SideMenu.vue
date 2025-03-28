<script lang="ts" setup>
import { useSideMenuStore } from '~/features/open-side-menu';
import Navbar from './Navbar.vue';

const sideMenuStore = useSideMenuStore();

const handleBackgroundClick = () =>
  sideMenuStore.close();
</script>

<template>
  <Teleport to="body">
    <div
      :class="{ 'closed': !sideMenuStore.isOpened }"
      class="side-menu-wrapper"
      @click="handleBackgroundClick">
      <Transition name="appear">
        <div
          v-if="sideMenuStore.isOpened"
          class="side-menu__background"
        >
        </div>
      </Transition>

      <Transition name="slide">
        <div
          v-if="sideMenuStore.isOpened"
          class="side-menu__content-wrapper"
        >
          <Navbar class="side-menu__navbar" />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.side-menu-wrapper {
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  &.closed {
    display: none;
  }
}

.side-menu__background {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
}

.side-menu__content-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--background-10);

  height: 100%;
  width: 220px;
  box-sizing: border-box;

  padding: 16px;
}

.appear-enter-active,
.appear-leave-active {
  transition: opacity 0.1s ease;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
  display: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  right: -220px;
}
</style>