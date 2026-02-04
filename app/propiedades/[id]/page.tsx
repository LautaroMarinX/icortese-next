"use client"
import { propiedades } from '@/app/src/globals/utils/propiedades';
import PropiedadPage from '@/app/src/modules/propiedades/components/pages/Propiedad';
import usePropiedad from '@/app/src/modules/propiedades/store/usePropiedad';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const params = useParams();
  const id = params?.id;

    const propiedad = propiedades.find((propiedad) => propiedad.id === id)

    const {setPropiedad} = usePropiedad()

    useEffect(() => {
      if (propiedad) setPropiedad(propiedad)
    }, [id])  


    if(!propiedad){
      return null
    }


  return (
    <main className="container mx-auto my-28">
        <PropiedadPage />
    </main>
  );
}

export default Page