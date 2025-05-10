import type {
  ResidentsFieldset,
  ResidentsForm
} from "../types";

const useDefaultResidentFieldset = (): ResidentsFieldset => ({
  housesAmout: 0,
  inhabitantsAmout: 0,
  selectedOption: 'houses'
});

export const useDefaultResidentsForm = (): ResidentsForm => ({
  beggars: useDefaultResidentFieldset(),
  citizens: useDefaultResidentFieldset(),
  envoys: useDefaultResidentFieldset(),
  noblemen: useDefaultResidentFieldset(),
  nomads: useDefaultResidentFieldset(),
  patricians: useDefaultResidentFieldset(),
  peasants: useDefaultResidentFieldset()
});