import { create } from "zustand";
import { Propiedad } from "../../../globals/types/Propiedad";

interface PropiedadState {
  propiedad: Propiedad | null;
  setPropiedad: (propiedad: Propiedad) => void;
  getPropiedad: () => Propiedad | null;
  resetPropiedad: () => void;
}

const usePropiedad = create<PropiedadState>((set, get) => ({
  propiedad: null,

  setPropiedad: (propiedad) => set({ propiedad }),

  getPropiedad: () => get().propiedad,

  resetPropiedad: () => set({ propiedad: null }),
}));

export default usePropiedad;
