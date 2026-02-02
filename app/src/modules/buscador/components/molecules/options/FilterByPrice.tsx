import React from 'react'
import FilterWrapper from './FilterWrapper'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/src/globals/components/UI/select'
import { monedas } from '@/app/src/globals/types/Propiedad'
import { Input } from '@/app/src/globals/components/UI/input'
import { useBuscador } from '../../stores/useBuscador'

const SelectMoneda = () => {
    const { setFilterOption, moneda } = useBuscador();
    return (
        <Select value={moneda ?? undefined} onValueChange={(value) => setFilterOption("moneda", value as typeof moneda)}>
            <SelectTrigger className='w-full'>
                <SelectValue placeholder="Moneda" />
            </SelectTrigger>
            <SelectContent>
                {monedas.map((moneda) => (
                    <SelectItem key={moneda} value={moneda}>{moneda}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

const PriceRange = () => {
    const { setFilterOption, valor } = useBuscador();
    const [min, max] = valor ?? ["", ""];

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMin = e.target.value ? Number(e.target.value) : null;
        setFilterOption("valor", [newMin, max]);
    };
    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMax = e.target.value ? Number(e.target.value) : null;
        setFilterOption("valor", [min, newMax]);
    };

    return (
        <div className='flex gap-2 flex-row'>
            <Input placeholder='Desde' type='number' value={min ?? ""} onChange={handleMinChange} />
            <Input placeholder='Hasta' type='number' value={max ?? ""} onChange={handleMaxChange} />
        </div>
    );
}

const FilterByPrice = () => {
  return (
    <FilterWrapper titulo="Precio">
        <div className='flex flex-col gap-2'>
            <SelectMoneda  />
            <PriceRange />
        </div>
    </FilterWrapper>
  )
}

export default FilterByPrice