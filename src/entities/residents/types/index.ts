export type ResidentsForm = {
  beggars: ResidentsFieldset;
  peasants: ResidentsFieldset;
  citizens: ResidentsFieldset;
  patricians: ResidentsFieldset;
  noblemen: ResidentsFieldset;
  nomads: ResidentsFieldset;
  envoys: ResidentsFieldset;
};

export type ResidentsFieldset = {
  inhabitantsAmout: number;
  housesAmout: number;
  selectedOption: 'inhabitants' | 'houses';
};

export type Resident = {
  name: string;
  imageSrc: string;
};

export type Residents = {
  beggars: Resident;
  peasants: Resident;
  citizens: Resident;
  patricians: Resident;
  noblemen: Resident;
  nomads: Resident;
  envoys: Resident;
};