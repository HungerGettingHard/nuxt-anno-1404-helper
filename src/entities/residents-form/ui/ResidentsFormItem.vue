<script lang="ts" setup>
import type { RadioButtonOption } from '~/shared/ui/radio-input/types';
import type { ResidentsFormItem } from '../types';

interface Props {
  resident: ResidentsFormItem;
  residentName: string;
  residentImgSrc: string;
}
const props = defineProps<Props>();

const radioInputGroupName = computed(() => 
  props.residentName + '__input-group'
);
const inhabitantsRadioInputOption = computed<RadioButtonOption>(() => ({
  id: props.residentName + '__inh__input'
}));
const housesRadioInputOption = computed<RadioButtonOption>(() =>({
  id: props.residentName + '__hou__input'
}));

const selectedOption = ref<RadioButtonOption>(
  inhabitantsRadioInputOption.value
);

watch(
  selectedOption,
  (value) => {
    props.resident.selectedOption = 
      value.id === inhabitantsRadioInputOption.value.id
        ? 'inhabitants'
        : 'houses';
  },
  { immediate: true }
);
</script>

<template>
  <div class="residents-form-item-wrapper">
    <div class="residents-form-item__header">
      <img width="32px" height="32px" :src="props.residentImgSrc" />
      
      <p>{{ props.residentName }}</p>
    </div>

    <RadioInput
      :group-name="radioInputGroupName"
      :options="[ inhabitantsRadioInputOption, housesRadioInputOption ]"
      v-model:selected-option="selectedOption"
    >
      <template #[inhabitantsRadioInputOption.id]>
        <NumberInput
          class="redisents-form-item__input"
          @focus="selectedOption = inhabitantsRadioInputOption"
          :class="{ 'dimmed-input': selectedOption.id !== inhabitantsRadioInputOption.id }"
          v-model:value="props.resident.inhabitantsAmout"
        />
        <img width="20px" height="20px" src="/img/common/inhabitants.png" />
      </template>

      <template #[housesRadioInputOption.id]>
        <NumberInput
          class="redisents-form-item__input"
          @focus="selectedOption = housesRadioInputOption"
          :class="{ 'dimmed-input': selectedOption.id !== housesRadioInputOption.id }"
          v-model:value="props.resident.housesAmout"
        />
        <img width="20px" height="20px" src="/img/common/houses.png" />
      </template>
    </RadioInput>
  </div>
</template>

<style lang="scss" scoped>
.residents-form-item-wrapper {
  width: fit-content;
}

.residents-form-item__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

p {
  color: var(--text-0);
}

.redisents-form-item__input {
  width: 90px;
}

.dimmed-input {
  filter: brightness(0.8);
}
</style>