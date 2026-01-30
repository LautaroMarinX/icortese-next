import { Button } from '@/app/src/globals/components/UI/button'
import { useBuscador } from '../stores/useBuscador';

const ClearFiltersButton = () => {

  const { clearFilters } = useBuscador();


  return (
    <Button className="mt-0 w-full" size={"sm"} onClick={clearFilters}>Limpiar Filtros</Button>
  )
}

export default ClearFiltersButton