import React from 'react'
import Values from '../src/modules/sobre-nosotros/components/organisms/Values'
import WhyChoose from '../src/modules/home/components/organisms/WhyChoose'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <section className="mt-28 container mx-auto intersect:motion-preset-fade intersect:motion-duration-700">
        <div className="flex flex-col mb-8 max-w-200">
          <h1 className="text-4xl mb-2">Quiénes somos</h1>
          <p className="mb-2">
            Somos una inmobiliaria con más de X años de trayectoria en el
            mercado argentino, especializada en operaciones de compraventa,
            alquiler y desarrollos inmobiliarios en CABA y Zona Norte.
          </p>
          <p>
            Nuestro diferencial no es la cantidad de propiedades, sino la
            calidad del acompañamiento: entendemos que detrás de cada operación
            hay una decisión de vida o de inversión.
          </p>
        </div>
        <Values />
        <WhyChoose hiddenButton />
      </section>
    </>
  );
}

export default page