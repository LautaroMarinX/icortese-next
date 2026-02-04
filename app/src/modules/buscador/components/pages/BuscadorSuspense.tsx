import React from 'react'

const BuscadorSuspense = () => {
  return (
    <section  className='mx-auto container  mt-28 gap-4  grid grid-cols-1 lg:grid-cols-4'>
        <div className='bg-muted h-30 lg:h-90 col-span-1  rounded-2xl animate-pulse'></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-3 gap-4'>
            {
                Array.from({length:6}).map((_, index) => (
                    <div key={index} className='bg-muted h-90 sm:h-40 lg:h-80 rounded-2xl animate-pulse col-span-1'></div>
                ))
            }
        </div>


    </section>
  )
}

export default BuscadorSuspense