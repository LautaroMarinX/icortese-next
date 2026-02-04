"use client";
import { operaciones } from "@/app/src/globals/types/Propiedad";
import { useBuscador } from "../../stores/useBuscador";
import FilterWrapper from "./FilterWrapper";
import { useMultiSelectFilter } from "@/app/src/modules/buscador/hooks/useMultiSelectFilter";
import FilterButton from "@/app/src/modules/buscador/components/atoms/FilterButton";



export const FilterByOperacion = () => {
    
  const { operacion } = useBuscador();
  const selected = operacion ?? [];
  const handleToggle = useMultiSelectFilter('operacion', selected);

  return (
    <FilterWrapper titulo="Operación">
      <div className="flex flex-row flex-wrap gap-2">
        {operaciones.map((op) => (
          <FilterButton
            included={selected.includes(op)}
            onClick={() => handleToggle(op)}
            key={op}
          >
            {op}
          </FilterButton>
        ))}
      </div>
    </FilterWrapper>
  );
};

export default FilterByOperacion;
