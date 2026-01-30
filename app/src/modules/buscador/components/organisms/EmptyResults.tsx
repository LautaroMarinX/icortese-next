import React from 'react'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/app/src/globals/components/UI/empty";
import { House } from 'lucide-react';
import ClearFiltersButton from '../atoms/ClearFiltersButton';

const EmptyResults = () => {
  return (
    <Empty className="col-span-3 h-fit">
      <EmptyHeader>
        <EmptyMedia variant={"icon"}>
          <House size={48} />
        </EmptyMedia>
        <EmptyContent className="gap-2">
          <EmptyTitle>No se encontraron propiedades</EmptyTitle>
          <EmptyDescription>
            Intenta ajustar tus filtros o realizar una nueva búsqueda.
          </EmptyDescription>
          <ClearFiltersButton />
        </EmptyContent>
      </EmptyHeader>
    </Empty>
  );
}

export default EmptyResults