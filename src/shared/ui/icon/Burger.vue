<script lang="ts" setup>
import { type IconProps } from './types/props';

// Note: source - tabler:menu-2 

const props = withDefaults(
  defineProps<IconProps>(), {
    strokeWidth: 2,
    height: 24,
    width: 24
  }
);
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="props.width" :height="props.height" viewBox="0 0 24 24">
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :stroke-width="props.strokeWidth" d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
</template>
