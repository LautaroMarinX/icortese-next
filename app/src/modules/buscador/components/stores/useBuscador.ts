
import { Propiedad } from "@/app/src/globals/types/Propiedad"
import {create} from "zustand"
import { FilterOptions } from "../../types/filterOptions";
import { propiedades } from "@/app/src/globals/utils/propiedades";
import { generateResultadosByFilters } from "../../utils/generateResultadosByFilters";

// Función para filtrar propiedades según los filtros activos


interface useBuscadorProps {
    resultados: Propiedad[] | null;
    operacion: FilterOptions["operacion"][] | null;
    tipo: FilterOptions["tipo"][] | null;
    moneda: FilterOptions["precio"]["moneda"] | null;
    valor: [number, number] | null; //Minimo y maximo
    ubicacion: FilterOptions["ubicacion"]["barrio"][] | null;
    estado: FilterOptions["estado"] | null;
    caracteristicas: FilterOptions["caracteristicas"] | null;
    ambientes: FilterOptions["ambientes"] | null;

    setFilterOption: <K extends keyof FilterOptions>(key: K, value: FilterOptions[K] | null) => void;
    setResultados: (resultados: Propiedad[] | null) => void;
    clearFilters: () => void;
    setFilterOptions: (filters: Partial<useBuscadorProps>) => void;
}

export const useBuscador = create<useBuscadorProps>(() => ({
  resultados: propiedades,
  operacion: null,
  tipo: null,
  moneda: null,
  valor: null,
  ubicacion: null,
  estado: null,
  caracteristicas: null,
  ambientes: null,

  setFilterOption: (key, value) => 
    useBuscador.setState((state) => {
      const newFilters = { ...state, [key]: value };
      // Extraer solo los filtros
      const filters: Partial<FilterOptions> = {
        operacion: newFilters.operacion,
        tipo: newFilters.tipo,
        moneda: newFilters.moneda,
        valor: newFilters.valor,
        ubicacion: newFilters.ubicacion,
        estado: newFilters.estado,
        caracteristicas: newFilters.caracteristicas,
        ambientes: newFilters.ambientes,
      };
      const nuevosResultados = generateResultadosByFilters(propiedades, filters);
      return {
        ...newFilters,
        resultados: nuevosResultados,
      };
    }),

  setResultados: (resultados) => 
    useBuscador.setState((state) => ({
      ...state,
      resultados,
    })),

  setFilterOptions: (filters) =>
    useBuscador.setState((state) => {
      const newFilters = { ...state, ...filters };
      // Extraer solo los filtros relevantes para el filtrado
      const filterKeys = [
        "operacion", "tipo", "moneda", "valor", "ubicacion", "estado", "caracteristicas", "ambientes"
      ];
      const filtersForResults = Object.fromEntries(
        filterKeys.map((k) => [k, (newFilters as any)[k]])
      );
      const nuevosResultados = generateResultadosByFilters(propiedades, filtersForResults);
      return {
        ...newFilters,
        resultados: nuevosResultados,
      };
    }),

    clearFilters: () => 
      useBuscador.setState(() => ({
        resultados: propiedades,
        operacion: null,
        tipo: null,
        moneda: null,
        valor: null,
        ubicacion: null,
        estado: null,
        caracteristicas: null,
        ambientes: null,
      })),

}));