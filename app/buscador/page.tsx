"use client"
import { Suspense } from 'react'
import Buscador from '../src/modules/buscador/components/pages/Buscador'
import BuscadorSuspense from '../src/modules/buscador/components/pages/BuscadorSuspense'

const page = () => {
  return (
    <section className='mx-auto container mt-28'>
        <Suspense fallback={<BuscadorSuspense/>}>
          <Buscador />
        </Suspense>
    </section>
  )
}

export default page