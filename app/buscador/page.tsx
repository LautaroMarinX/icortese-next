"use client"
import { Suspense } from 'react'
import Buscador from '../src/modules/buscador/components/pages/Buscador'

const page = () => {
  return (
    <section className='mx-auto container mt-28'>
        <Suspense fallback={<div>Cargando buscador...</div>}>
          <Buscador />
        </Suspense>
    </section>
  )
}

export default page