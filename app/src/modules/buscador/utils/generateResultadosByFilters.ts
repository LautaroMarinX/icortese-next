import { Propiedad } from "@/app/src/globals/types/Propiedad";
import { FilterOptions } from "../types/filterOptions";

type FiltersForGeneration = {
  operacion?: FilterOptions["operacion"][] | null;
  tipo?: FilterOptions["tipo"][] | null;
  moneda?: FilterOptions["moneda"] | null;
  valor?: [number | null, number | null] | null;
  ubicacion?: string[] | null;
  estado?: FilterOptions["estado"] | null;
  caracteristicas?: FilterOptions["caracteristicas"] | null;
  ambientes?: FilterOptions["ambientes"] | null;
};

export  function generateResultadosByFilters(
  allProps: Propiedad[],
  filters: FiltersForGeneration
): Propiedad[] {
  return allProps.filter((prop) => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === null || value === undefined) return true;
      // Comparación múltiple para barrio (ubicacion)
      if (key === "ubicacion" && Array.isArray(value)) {
        return value.length === 0 || (value as string[]).includes(prop.ubicacion.barrio);
      }
      // Comparación múltiple para operacion
      if (key === "operacion" && Array.isArray(value)) {
        return value.length === 0 || (value as FilterOptions["operacion"][]).includes(prop.operacion);
      }
      // Comparación múltiple para tipo
      if (key === "tipo" && Array.isArray(value)) {
        return value.length === 0 || (value as FilterOptions["tipo"][]).includes(prop.tipo);
      }
      // Comparación especial para moneda
      if (key === "moneda") return prop.precio.moneda === value;
      // Comparación especial para valor (rango de precio)
      if (key === "valor" && Array.isArray(value)) {
        const [min, max] = value as [number | null, number | null];
        if (min !== null && min !== undefined && prop.precio.valor < min) return false;
        if (max !== null && max !== undefined && prop.precio.valor > max) return false;
        return true;
      }
      // Comparación directa para el resto
      return prop[key as keyof Propiedad] === value;
    });
  });
}