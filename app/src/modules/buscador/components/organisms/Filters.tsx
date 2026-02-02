"use client";
import { useMediaQuery } from "react-responsive";
import ClearFiltersButton from "../atoms/ClearFiltersButton";
import { FilterByOperacion } from "../molecules/options/FilterByOperacion";
import FilterByPrice from "../molecules/options/FilterByPrice";
import FilterByTipos from "../molecules/options/FilterByTipos";
import FilterByUbicacion from "../molecules/options/FilterByUbicacion";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/src/globals/components/UI/sheet";
import { Button } from "@/app/src/globals/components/UI/button";

const DesktopFilter = () => {
  return (
    <div className="flex flex-col justify-between h-fit  ring ring-muted rounded-xl p-4 intersect:motion-preset-fade intersect:motion-duration-700">
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
};

const MobileFilter = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"secondary"} className="w-fit">
          Filtrar busqueda
        </Button>
      </SheetTrigger>
      <SheetContent className="" side="left">
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
        </SheetHeader>
        <div className="p-4">
          <FilterByOperacion />
          <FilterByTipos />
          <FilterByUbicacion />
          <FilterByPrice />
        </div>
        <SheetFooter>
          <ClearFiltersButton />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const Filters = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  if (isDesktop) {
    return <DesktopFilter />;
  }

  if (!isDesktop) {
    return <MobileFilter />;
  }
};

export default Filters;