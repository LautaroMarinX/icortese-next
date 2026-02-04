import { tipos } from '@/app/src/globals/types/Propiedad';
import { useBuscador } from '../../stores/useBuscador';
import FilterWrapper from './FilterWrapper';
import { useMultiSelectFilter } from '../../../hooks/useMultiSelectFilter';
import FilterButton from '../../atoms/FilterButton';

const FilterByTipos = () => {


  const { tipo } = useBuscador()

  const selected = tipo ?? [];

  const handleToggle = useMultiSelectFilter("tipo", selected)

  return (
    <FilterWrapper titulo="Tipo de Propiedad">
      <div className="flex flex-row flex-wrap gap-2">
        {tipos.map((tipoSelect) => (
          <FilterButton
            included={tipo?.includes(tipoSelect) ?? false}
            onClick={() => handleToggle(tipoSelect)}
            key={tipoSelect}
          >
            {tipoSelect}
          </FilterButton>
        ))}
      </div>
    </FilterWrapper>
  );
}

export default FilterByTipos