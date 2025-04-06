import ResidentsFieldSet from "./ui/ResidentFieldset.vue";
import { useResidentsStore } from "./stores/residents";
import { useDefaultResidentsForm } from "./helpers/defaults";
import type {
  Resident,
  Residents,
  ResidentsFieldset,
  ResidentsForm
} from './types';

export {
  ResidentsFieldSet,

  useDefaultResidentsForm,
  useResidentsStore,

  type Resident,
  type Residents,
  type ResidentsFieldset,
  type ResidentsForm
};