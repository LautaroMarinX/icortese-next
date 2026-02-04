"use client";
import { useBuscador } from "../../stores/useBuscador";
import { propiedades } from "@/app/src/globals/utils/propiedades";
import FilterWrapper from "./FilterWrapper";
import { useMultiSelectFilter } from "../../../hooks/useMultiSelectFilter";
import { X } from "lucide-react";
import FilterButton from "../../atoms/FilterButton";

export const generateUbicacionFilter = () => {
    
    const ubicaciones = propiedades.map((propiedad) => propiedad.ubicacion.barrio);
    const ubicacionesUnicas: string[] = []

    ubicaciones.forEach((ubicacion) => {
        console.log(ubicacion);
        if (!ubicacionesUnicas.includes(ubicacion)) {
            ubicacionesUnicas.push(ubicacion);
        }
    });


    return ubicacionesUnicas;
}

export const FilterByUbicacion = () => {
  const { ubicacion} = useBuscador();

  const ubicacionesMap = generateUbicacionFilter()

    const selected = ubicacion ?? [];

    const handleToggle = useMultiSelectFilter("ubicacion", selected);


  return (
    <FilterWrapper titulo="Ubicación">
      <div className="flex row gap-2">
        {ubicacionesMap.map((ubi) => (
          <FilterButton
            included={selected.includes(ubi)}
            onClick={() => handleToggle(ubi)}
            key={ubi}
          >
            {ubi}
          </FilterButton>
        ))}
      </div>
    </FilterWrapper>
  );
};

export default FilterByUbicacion;
