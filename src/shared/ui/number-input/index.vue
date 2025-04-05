<script lang="ts" setup>
const value = defineModel<number>('value', {
  required: true,
  set: (v) =>
    v.toString() === ''
      ? 0
      : v
});

const handleInput = (event: InputEvent) => {
  // https://w3c.github.io/input-events/#interface-InputEvent-Attributes
  if (event.inputType.startsWith('delete') || event.inputType.startsWith('history'))
    return;

  if (event.inputType === 'insertText' && event.data?.match(/\d/))
    return;

  event.preventDefault();
};
</script>

<template>
  <input
    @beforeinput="(event) => handleInput(event as InputEvent)"
    v-model.number="value"
    inputmode="numeric"
    type="number"
  />
</template>

<style lang="scss" scoped>
input {
  border: 2px solid var(--background-30);
  outline: none;
  border-radius: 4px;

  padding: 8px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Roboto", sans-serif;

  background-color: var(--background-20);
  color: var(--text-0);
}

input:focus {
  border: 2px solid var(--background-50);
  background-color: var(--background-30);
}

input[type="number"] {
  appearance: none;
  -moz-appearance: textfield;
}

input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>