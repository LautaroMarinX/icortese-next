"use client"
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useBuscador } from '../components/stores/useBuscador'
import { queryParamsToFilters, filtersToQueryParams } from '../utils/urlFilters'

export function useSyncBuscadorFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const { 
    initializeFiltersFromURL,
    operacion,
    tipo,
    moneda,
    valor,
    ubicacion,
    estado,
    caracteristicas,
    ambientes,
  } = useBuscador()

  const [initialized, setInitialized] = useState(false)

  // Inicializar filtros desde URL
  useEffect(() => {
    const filtersFromURL = queryParamsToFilters(searchParams)
    initializeFiltersFromURL(filtersFromURL)
    // deferir para evitar setState síncrono en efecto
    setTimeout(() => setInitialized(true), 0)
  }, [initializeFiltersFromURL, searchParams])

  // Sincronizar filtros con la URL
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
    }

    const params = filtersToQueryParams(filters)
    const queryString = params.toString()

    if (!initialized) return

    const currentQuery = searchParams?.toString?.() || ''
    if (currentQuery === queryString) return

    if (queryString) {
      router.replace(`/buscador?${queryString}`, { scroll: false })
    } else {
      router.replace('/buscador', { scroll: false })
    }
  }, [operacion, tipo, moneda, valor, ubicacion, estado, caracteristicas, ambientes, router, searchParams, initialized])

  return { initialized }
}
