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
const emits = defineEmits([ 'clear', 'submit' ]);
</script>

<template>
  <form>
    <div class="residents-form__inputs-container">
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
    </div>

    <div class="residents-form__buttons-container">
      <Button
        gray
        @click="emits('clear')"
      >
        Clear
      </Button>
      <Button
        @click="emits('submit')"
      >
        Calculate
      </Button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.residents-form__inputs-container {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 12px;
}

.residents-form__buttons-container {
  margin-top: 24px;
  
  display: flex;
  justify-content: center;
  gap: 24px;
}
</style>