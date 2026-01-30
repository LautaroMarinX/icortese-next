"use client";
import ClearFiltersButton from "../atoms/ClearFiltersButton";
import { FilterByOperacion } from "../molecules/options/FilterByOperacion";
import FilterByPrice from "../molecules/options/FilterByPrice";
import FilterByTipos from "../molecules/options/FilterByTipos";
import FilterByUbicacion from "../molecules/options/FilterByUbicacion";


const Filters = () => {


  return (
    <div className="col-span-1 flex flex-col justify-between h-fit  ring ring-muted rounded-xl p-4 intersect:motion-preset-fade intersect:motion-duration-700">
      <div className="flex flex-col mb-2 pb-2">
        <h2>Filtros</h2>
      </div>
      <div className="flex flex-col rounded-xl gap-2 mb-2">
        <FilterByOperacion />
        <FilterByTipos />
        <FilterByUbicacion />
        <FilterByPrice />
      </div>

      <ClearFiltersButton />
    </div>
  );
}

export default Filters