<script lang="ts" setup>
interface Props {
  gray?: boolean;
}
const props = withDefaults(
  defineProps<Props>(), {
    gray: false
  }
);
</script>

<template>
  <button
    :class="{ 'gray': props.gray }"
    type="button"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  background-color: var(--primary-0);
  cursor: pointer;
  
  color: var(--text-0);
  font-family: "Roboto", sans-serif;
  font-size: 16px;

  border: 2px solid transparent;
  border-radius: 4px;
  
  padding: 8px;
  box-sizing: border-box;
  min-width: 90px;

  &:hover {
    background-color: var(--primary-10);
  }

  &:active {
    background-color: var(--primary-20);
  }
}

button.gray {
  background-color: var(--background-30);

  &:hover {
    background-color: var(--background-40);
  }

  &:active {
    background-color: var(--background-50);
  }
}
</style>