import React from 'react'

const AboutUsText = () => {
  return (
    <div className="flex flex-col mb-8 container mx-auto px-2 intersect:motion-preset-fade intersect:motion-duration-700">
      <h1 className="text-4xl mb-2 max-w-200">Quiénes somos</h1>
      <p className="mb-2 max-w-200">
        Somos una inmobiliaria con más de 20 años de trayectoria en el mercado
        argentino, especializada en operaciones de compraventa, alquiler y
        desarrollos inmobiliarios en CABA y Zona Norte.
      </p>
      <p className='max-w-200'>
        Nuestro diferencial no es la cantidad de propiedades, sino la calidad
        del acompañamiento: entendemos que detrás de cada operación hay una
        decisión de vida o de inversión.
      </p>
    </div>
  );
}

export default AboutUsText