import type { ResidentsForm } from "~/entities/residents";
import { useDefaultResidentsForm } from "~/entities/residents";

export const useCalculationStore = defineStore('calculation', () => {
  const form = ref<ResidentsForm>(
    useDefaultResidentsForm()
  );

  const clearForm = (): void => {
    form.value = useDefaultResidentsForm();
  };

  return {
    form: shallowReadonly(form),
    clearForm
  };
});