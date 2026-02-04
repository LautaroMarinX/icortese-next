"use client"
import { Button } from '@/app/src/globals/components/UI/button'
import { SearchIcon } from 'lucide-react'
import SelectPropertyType from './SelectPropertyType'
import SelectLocation from './SelectLocation'
import { SelectPriceRange } from './SelectPriceRange'
import useSearch from '../../../stores/useSearch'
import { useRouter } from 'next/navigation'

const SearchForm = () => {
  const { tipo, location, moneda, precio_desde, precio_hasta } = useSearch()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const params = new URLSearchParams()
    
    if (tipo) params.append('tipo', tipo)
    if (location) params.append('ubicacion', location)
    if (moneda) params.append('moneda', moneda)
    if (precio_desde !== null) params.append('valorMin', precio_desde.toString())
    if (precio_hasta !== null) params.append('valorMax', precio_hasta.toString())
    
    router.push(`/buscador?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col lg:flex-row gap-4 md:gap-4 items-center bg-white shadow-xl rounded-xl p-2.5  w-full! '>
        <SelectPropertyType />
        <SelectLocation />
        <SelectPriceRange />
        <Button type='submit' className='rounded-full w-full lg:size-6  lg:p-6 hover:opacity-75 cursor-pointer' size={"icon-lg"}><SearchIcon /></Button>
    </form>
  )
}

export default SearchForm;