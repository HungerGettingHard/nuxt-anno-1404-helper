export type ResidentsForm = {
  beggars: ResidentsFormItem;
  peasants: ResidentsFormItem;
  citizens: ResidentsFormItem;
  patricians: ResidentsFormItem;
  noblemen: ResidentsFormItem;
  nomads: ResidentsFormItem;
  envoys: ResidentsFormItem;
};

export type ResidentsFormItem = {
  inhabitantsAmout: number;
  housesAmout: number;
  selectedOption: 'inhabitants' | 'houses';
};