import { Field, FieldLabel } from '@/app/src/globals/components/UI/field';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/src/globals/components/UI/select'
import useSearch from '../../../stores/useSearch';
import { Tipos, tipos } from '@/app/src/globals/types/Propiedad';

const SelectPropertyType = () => {

  const {setTipo, tipo} = useSearch()

  return (
    <Field className='w-full flex-1'>
      <FieldLabel className='mb-0 text-sm font-semibold'>Tipo de Propiedad</FieldLabel>
      <Select value={tipo || undefined} onValueChange={(value) => setTipo(value as Tipos)}>
        <SelectTrigger className='w-full h-12 text-base'>
          <SelectValue placeholder="Tipo de Propiedad" />
        </SelectTrigger>
        <SelectContent>
          {tipos.map((tipo) => (
            <SelectItem key={tipo} value={tipo}>
              {tipo}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}

export default SelectPropertyType