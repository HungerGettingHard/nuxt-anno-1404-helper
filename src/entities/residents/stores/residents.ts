import type { Residents } from "../types";

export const useResidentsStore = defineStore('residents', () => {
  const residents = ref<Residents>({
    beggars: {
      name: "Beggars",
      imageSrc: "/img/residents/beggar.png"
    },
    citizens: {
      name: "Citizens",
      imageSrc: "/img/residents/citizen.png"
    },
    envoys: {
      name: "Envoys",
      imageSrc: "/img/residents/envoy.png"
    },
    noblemen: {
      name: "Noblemen",
      imageSrc: "/img/residents/nobleman.png"
    },
    nomads: {
      name: "Nomads",
      imageSrc: "/img/residents/nomad.png"
    },
    patricians: {
      name: "Patricians",
      imageSrc: "/img/residents/patrician.png"
    },
    peasants: {
      name: "Peasants",
      imageSrc: "/img/residents/peasant.png"
    }
  });

  return {
    residents: readonly(residents)
  };
});