import { useCallback } from "react";
import { toggleArrayValue } from "../utils/toggleArrayValue";
import { useBuscador } from "../components/stores/useBuscador";

/**
 * Hook para manejar filtros multiselección de manera reutilizable.
 * @param key Nombre del filtro (ej: 'operacion', 'tipo', etc)
 * @param selected Array de valores seleccionados
 */
export function useMultiSelectFilter<T extends string>(key: string, selected: T[] | null) {
  const { setFilterOptions } = useBuscador();

  const handleToggle = useCallback(
    (value: T) => {
      setFilterOptions({ [key]: toggleArrayValue(selected, value) });
    },
    [key, selected, setFilterOptions]
  );

  return handleToggle;
}
