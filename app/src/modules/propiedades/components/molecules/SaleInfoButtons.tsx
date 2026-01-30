import { Button } from '@/app/src/globals/components/UI/button'
import React from 'react'

const SaleInfoButtons = () => {
  return (
    <div className='flex flex-col'>
        <Button size={"lg"}>Contactar por WhatsApp</Button>
        <p className='mt-2 w-full text-center'>Respuesta promedio en menos de 24hs</p>
    </div>
  )
}

export default SaleInfoButtons