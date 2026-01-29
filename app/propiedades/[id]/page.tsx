"use client"
import { propiedades } from '@/app/src/globals/utils/propiedades';
import AsideContent from '@/app/src/modules/propiedades/components/organisms/AsideContent';
import Gallery from '@/app/src/modules/propiedades/components/organisms/Gallery';
import Header from '@/app/src/modules/propiedades/components/organisms/Header';
import usePropiedad from '@/app/src/modules/propiedades/store/usePropiedad';
import { useParams } from 'next/navigation';

const Page = () => {
  const params = useParams();
  const id = params?.id;

    const propiedad = propiedades.find((propiedad) => propiedad.id === id)

    const {setPropiedad} = usePropiedad()

    if(!propiedad){
      return null
    }

    setPropiedad(propiedad)

  return (
    <section className="container mx-auto h-full">
        <Header />
        <Gallery />
        <div>
            <AsideContent />
        </div>
    </section>
  );
}

export default Page