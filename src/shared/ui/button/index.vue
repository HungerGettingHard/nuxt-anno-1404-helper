<script lang="ts" setup>
import { type ButtonEmits } from './types/emits';
import { type ButtonProps } from './types/props';

const props = defineProps<ButtonProps>();
const emits = defineEmits<ButtonEmits>();
</script>

<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  background-color: darksalmon;
}
</style>