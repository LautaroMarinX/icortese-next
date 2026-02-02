import PropiertyCard from '@/app/src/globals/components/atoms/PropiertyCard'
import { propiedades } from '@/app/src/globals/utils/propiedades'

const PropertysGrid = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
        {
            propiedades.map((propiedad) => (
                <PropiertyCard key={propiedad.titulo} propierty={propiedad} />
            ))
        }
    </div>
  )
}

export default PropertysGrid