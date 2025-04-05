<script lang="ts" setup>
import type { RadioButtonOption } from './types';

interface Props {
  options: RadioButtonOption[];
  groupName: string;
}
const props = defineProps<Props>();

const selectedOption = defineModel<RadioButtonOption>(
  'selectedOption'
);

defineSlots<{
  [K in string]: any
}>();
</script>

<template>
  <div class="radio-inputs-list-wrapper">
    <div v-for="option in props.options">
      <input
        class="radio-input__button"
        :id="option.id"
        :name="props.groupName"
        v-model="selectedOption"
        v-bind:value="option"
        type="radio"
      />
      <label
        :for="option.id"
        class="radio-input__label"
      >
        <slot :name="option.id" />
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.radio-inputs-list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.radio-input__button {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  z-index: -100;

  &:checked + .radio-input__label::before {
    background: var(--background-10);
    border: 4px solid var(--background-50);
  }
}

.radio-input__label {
  height: auto;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    background: var(--background-10);
    border: 2px solid var(--background-30);
    border-radius: 100%;
    box-sizing: border-box;
    
    width: 16px;
    height: 16px;
    
    cursor: pointer;
    transition: all 100ms ease;
  }
}
</style>