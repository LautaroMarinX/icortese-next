import React from 'react'
import usePropiedad from '../../store/usePropiedad';

const Description = () => {

       const { getPropiedad } = usePropiedad();
       const propiedad = getPropiedad();

       const description = propiedad.descripcion;

       if(!description){
        return null
       }

  return (
    <section className="mx-auto container mb-8">
      <div className='flex flex-col'>
        <h2 className="text-2xl mb-2">Descripción</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default Description