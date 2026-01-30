"use client";
import { Badge } from "@/app/src/globals/components/UI/badge";
import { useBuscador } from "../../stores/useBuscador";
import { propiedades } from "@/app/src/globals/utils/propiedades";
import FilterWrapper from "./FilterWrapper";
import { useMultiSelectFilter } from "../../../hooks/useMultiSelectFilter";
import { X } from "lucide-react";
import FilterBadge from "../../atoms/FilterBadge";

const generateUbicacionFilter = () => {
    
    const ubicaciones = propiedades.map((propiedad) => propiedad.ubicacion.barrio);
    const ubicacionesUnicas = []

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
          <FilterBadge included={selected.includes(ubi)} onClick={() => handleToggle(ubi)} key={ubi }>
            {ubi}
          </FilterBadge>
        ))}
      </div>
    </FilterWrapper>
   
  );
};

export default FilterByUbicacion;
