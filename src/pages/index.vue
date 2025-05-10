<script setup lang="ts">
import { useResidentsStore } from '~/entities/residents';
import {
  ResidentsForm,
  useCalculationStore
} from '~/features/calculate-production';

const calculationStore = useCalculationStore();
const residentsStore = useResidentsStore();
</script>

<template>
  <section class="calculator-section">
    <div class="calculator-section__inputs-wrapper">
      <h2 class="calculator-section__title">Production calculator</h2>

      <ResidentsForm
        :form="calculationStore.form"
        :residents="residentsStore.residents"
        @clear="calculationStore.clearForm"
        @submit=""
      />
    </div>

    <div class="calculator-section__outputs-wrapper">

    </div>
  </section>
</template>

<style lang="scss" scoped>
.calculator-section {
  box-sizing: border-box;
  margin: auto;
  padding: 16px;
  
  gap: 16px;
  display: flex;
  flex-direction: column;
}

.calculator-section__title {
  text-align: center;
  color: var(--text-0);
}

.calculator-section__inputs-wrapper,
.calculator-section__outputs-wrapper {
  padding: 16px;
  border-radius: 4px;

  background-color: var(--background-10);
}

@media screen and (width < 1024px) {
  .calculator-section {
    width: 100%;
  }
}

@media screen and (width >= 1024px) {
  .calculator-section {
    width: 1024px;
  }
}
</style>