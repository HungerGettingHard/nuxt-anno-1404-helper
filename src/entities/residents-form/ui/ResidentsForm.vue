<script lang="ts" setup>
import type { ResidentsForm } from '../types';
import ResidentsFormItem from './ResidentsFormItem.vue';

const form = ref<ResidentsForm>({
  beggars: {
    housesAmout: 0,
    inhabitantsAmout: 0,
    selectedOption: 'houses'
  },
  citizens: {
    housesAmout: 0,
    inhabitantsAmout: 0,
    selectedOption: 'houses'
  },
  envoys: {
    housesAmout: 0,
    inhabitantsAmout: 0,
    selectedOption: 'houses'
  },
  noblemen: {
    housesAmout: 0,
    inhabitantsAmout: 0,
    selectedOption: 'houses'
  },
  nomads: {
    housesAmout: 0,
    inhabitantsAmout: 0,
    selectedOption: 'houses'
  },
  patricians: {
    housesAmout: 0,
    inhabitantsAmout: 0,
    selectedOption: 'houses'
  },
  peasants: {
    housesAmout: 0,
    inhabitantsAmout: 0,
    selectedOption: 'houses'
  }
});
</script>

<template>
  <form>
    <ResidentsFormItem
      resident-img-src="/img/residents/beggar.png"
      resident-name="Beggars"
      :resident="form.beggars"
    />
    <ResidentsFormItem
      resident-img-src="/img/residents/peasant.png"
      resident-name="Peasants"
      :resident="form.peasants"
    />
    <ResidentsFormItem
      resident-img-src="/img/residents/citizen.png"
      resident-name="Citizens"
      :resident="form.citizens"
    />
    <ResidentsFormItem
      resident-img-src="/img/residents/patrician.png"
      resident-name="Patricians"
      :resident="form.patricians"
    />
    <ResidentsFormItem
      resident-img-src="/img/residents/nobleman.png"
      resident-name="Noblemen"
      :resident="form.noblemen"
    />
    <ResidentsFormItem
      resident-img-src="/img/residents/nomad.png"
      resident-name="Nomads"
      :resident="form.nomads"
    />
    <ResidentsFormItem
      resident-img-src="/img/residents/envoy.png"
      resident-name="Envoys"
      :resident="form.envoys"
    />
  </form>
</template>

<style lang="scss" scoped>
form {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>