import { tipos } from '@/app/src/globals/types/Propiedad';
import { useBuscador } from '../../stores/useBuscador';
import FilterWrapper from './FilterWrapper';
import FilterBadge from '../../atoms/FilterBadge';
import { useMultiSelectFilter } from '../../../hooks/useMultiSelectFilter';

const FilterByTipos = () => {


  const { tipo } = useBuscador()

  const selected = tipo ?? [];

  const handleToggle = useMultiSelectFilter("tipo", selected)

  return (
    <FilterWrapper titulo='Tipo de Propiedad'>
    <div className="flex flex-row flex-wrap gap-2">
        {tipos.map((tipoSelect) => (
         <FilterBadge included={tipo?.includes(tipoSelect) ?? false} onClick={() => handleToggle(tipoSelect)} key={tipoSelect}>
          {tipoSelect}
         </FilterBadge>
        ))}
      </div>
    </FilterWrapper>
 
  );
}

export default FilterByTipos