<script lang="ts" setup>
import {
  ResidentsFieldSet,
  type Residents,
  type ResidentsForm
} from '~/entities/residents';

interface Props {
  residents: Residents;
  form: ResidentsForm; 
}
const props = defineProps<Props>();
</script>

<template>
  <form>
    <ResidentsFieldSet
      :resident-img-src="props.residents.beggars.imageSrc"
      :resident-name="props.residents.beggars.name"
      :resident="props.form.beggars"
    />
    <ResidentsFieldSet
      :resident-img-src="props.residents.peasants.imageSrc"
      :resident-name="props.residents.peasants.name"
      :resident="props.form.peasants"
    />
    <ResidentsFieldSet
      :resident-img-src="props.residents.citizens.imageSrc"
      :resident-name="props.residents.citizens.name"
      :resident="props.form.citizens"
    />
    <ResidentsFieldSet
      :resident-img-src="props.residents.patricians.imageSrc"
      :resident-name="props.residents.patricians.name"
      :resident="props.form.patricians"
    />
    <ResidentsFieldSet
      :resident-img-src="props.residents.noblemen.imageSrc"
      :resident-name="props.residents.noblemen.name"
      :resident="props.form.noblemen"
    />
    <ResidentsFieldSet
      :resident-img-src="props.residents.nomads.imageSrc"
      :resident-name="props.residents.nomads.name"
      :resident="props.form.nomads"
    />
    <ResidentsFieldSet
      :resident-img-src="props.residents.envoys.imageSrc"
      :resident-name="props.residents.envoys.name"
      :resident="props.form.envoys"
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