import { Field, FieldGroup, FieldLabel } from '@/app/src/globals/components/UI/field'
import { Input } from '@/app/src/globals/components/UI/input'
import { Label } from '@/app/src/globals/components/UI/label'
import { Switch } from '@/app/src/globals/components/UI/switch'
import useSearch from '../../../stores/useSearch'

export const SelectPriceRange = () => {

  const {setMoneda, setPrecioDesde, setPrecioHasta, precio_hasta, precio_desde, moneda} = useSearch()

 
  return (
    <Field className="md:flex flex-col flex-1 gap-0!">
      <div className="flex items-center justify-between mb-2">
        <FieldLabel>Precio</FieldLabel>
        <div className="flex flex-row items-center *:text-sm! gap-2">
          <Label>USD</Label>
          <Switch 
            checked={moneda === 'ARS'} 
            onCheckedChange={(checked) => setMoneda(checked ? 'ARS' : 'USD')}
          />
          <Label>ARS</Label>
        </div>
      </div>

      <FieldGroup className="flex gap-2 flex-row">
        <Input 
          value={precio_desde || ''} 
          onChange={(e) => setPrecioDesde(e.target.value ? Number(e.target.value) : null)} 
          placeholder="Desde" 
          type="number" 
          min={0} 
          max={precio_hasta || undefined} 
        />
        <Input 
          value={precio_hasta || ''} 
          onChange={(e) => setPrecioHasta(e.target.value ? Number(e.target.value) : null)} 
          placeholder="Hasta" 
          type="number" 
          min={precio_desde || 0} 
        />
      </FieldGroup>
    </Field>
  );
}
