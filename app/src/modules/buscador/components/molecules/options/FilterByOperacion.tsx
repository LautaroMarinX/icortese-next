"use client";
import FilterBadge from "@/app/src/modules/buscador/components/atoms/FilterBadge";
import { operaciones } from "@/app/src/globals/types/Propiedad";
import { useBuscador } from "../../stores/useBuscador";
import FilterWrapper from "./FilterWrapper";
import { useMultiSelectFilter } from "@/app/src/modules/buscador/hooks/useMultiSelectFilter";



export const FilterByOperacion = () => {
    
  const { operacion } = useBuscador();
  const selected = operacion ?? [];
  const handleToggle = useMultiSelectFilter('operacion', selected);

  return (
    <FilterWrapper titulo="Operación">
      <div className="flex row gap-2">
        {operaciones.map((op) => (
          <FilterBadge
            included={selected.includes(op)}
            onClick={() => handleToggle(op)}
            key={op}
          >
            {op}
          </FilterBadge>
        ))}
      </div>
    </FilterWrapper>
  );
};

export default FilterByOperacion;
