import React from 'react'
import SaleInfoListItem from '../atoms/SaleInfoListItem'
import usePropiedad from '../../store/usePropiedad'

const SaleInfoData = () => {

    const {getPropiedad} = usePropiedad()
    const propiedad = getPropiedad()

  return (
    <ul className='flex flex-col gap-2 mb-4'>
      <SaleInfoListItem title='Tipo de operación' value={propiedad?.operacion || ""} />
      <SaleInfoListItem  title="Ubicación" value={propiedad?.ubicacion.barrio || ""} />
    </ul>
  )
}

export default SaleInfoData