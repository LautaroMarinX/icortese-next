"use client"
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Filters from '../organisms/Filters'
import Results from '../organisms/Results';
import { useBuscador } from '../stores/useBuscador';
import { queryParamsToFilters, filtersToQueryParams } from '../../utils/urlFilters';

const Buscador = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { 
    initializeFiltersFromURL, 
    operacion, 
    tipo, 
    moneda, 
    valor, 
    ubicacion, 
    estado, 
    caracteristicas, 
    ambientes 
  } = useBuscador();

  // Inicializar filtros desde URL al montar el componente
  useEffect(() => {
    const filtersFromURL = queryParamsToFilters(searchParams);
    initializeFiltersFromURL(filtersFromURL);
  }, [initializeFiltersFromURL, searchParams]); // Ejecuta al montar y cuando cambian los searchParams

  // Actualizar URL cuando cambien los filtros
  useEffect(() => {
    const filters = {
      operacion,
      tipo,
      moneda,
      valor,
      ubicacion,
      estado,
      caracteristicas,
      ambientes,
    };
    
    const params = filtersToQueryParams(filters);
    const queryString = params.toString();
    // Evitar reemplazar la URL si ya coincide (previene bucles de navegación)
    const currentQuery = searchParams?.toString?.() || '';
    if (currentQuery === queryString) return;

    // Actualizar la URL sin recargar la página
    if (queryString) {
      router.replace(`/buscador?${queryString}`, { scroll: false });
    } else {
      router.replace('/buscador', { scroll: false });
    }
  }, [operacion, tipo, moneda, valor, ubicacion, estado, caracteristicas, ambientes, router, searchParams]);

  return (
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Filters />
        <Results />
      </div>
  );
}

export default Buscador