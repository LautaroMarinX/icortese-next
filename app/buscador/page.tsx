"use client"
import { Suspense } from 'react'
import Buscador from '../src/modules/buscador/components/pages/Buscador'
import BuscadorSuspense from '../src/modules/buscador/components/pages/BuscadorSuspense'

const page = () => {
  return (
    <main className="mx-auto container my-28">
      <Suspense fallback={<BuscadorSuspense />}>
        <Buscador />
      </Suspense>
    </main>
  );
}

export default page