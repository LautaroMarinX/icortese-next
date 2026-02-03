import { Field, FieldLabel } from '@/app/src/globals/components/UI/field';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/src/globals/components/UI/select';
import {generateUniqueLocation} from "@/app/src/globals/utils/generateUniqueLocation"
import useSearch from '../../../stores/useSearch';

const SelectLocation = () => {

    const localizaciones = generateUniqueLocation();
    const {setLocation} = useSearch()

  return (
    <Field className="w-full gap-2.5 h-fit flex-1">
      <FieldLabel className="mb-0 text-sm font-semibold">Ubicación</FieldLabel>
      <Select onValueChange={(value) => setLocation(value as string)}>
        <SelectTrigger className='w-full h-12 text-base'>
          <SelectValue placeholder="Ubicación" />
        </SelectTrigger>
        <SelectContent>
          {localizaciones.map((ubicacion) => (
            <SelectItem key={ubicacion} value={ubicacion}>
              {ubicacion}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}

export default SelectLocation