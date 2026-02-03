import { Moneda, Tipos } from "@/app/src/globals/types/Propiedad";
import { create } from "zustand";

interface searchStateProps{
    tipo: Tipos | null;
    location: string;
    moneda: Moneda | null;
    precio_desde: number | null;
    precio_hasta: number | null;

    setTipo: (tipo: Tipos | null) => void;
    setLocation: (location: string) => void;
    setMoneda: (moneda: Moneda | null) => void;
    setPrecioDesde: (precio_desde: number | null) => void;
    setPrecioHasta: (precio_hasta: number | null) => void;
}

const useSearch = create<searchStateProps>((set) => ({
    tipo: null,
    location: '',
    moneda: 'USD',
    precio_desde: null,
    precio_hasta: null,

    setTipo: (tipo) => set({ tipo }),
    setLocation: (location) => set({ location }),
    setMoneda: (moneda) => set({ moneda }),
    setPrecioDesde: (precio_desde) => set({ precio_desde }),
    setPrecioHasta: (precio_hasta) => set({ precio_hasta }),
}));

export default useSearch;