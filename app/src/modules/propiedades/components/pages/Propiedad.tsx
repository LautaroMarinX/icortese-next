import type { Propiedad } from '@/globals/interfaces/propiedad'
import usePropiedad from '../../store/usePropiedad';
import Header from '../organisms/Header';
import AsideContent from '../organisms/AsideContent';
import Contact from '../organisms/Contact';
import Gallery from '../organisms/Gallery';

interface PropiedadPageProps {
    propiedad: Propiedad;
}

const PropiedadPage = ({propiedad}: PropiedadPageProps) => {

    const {setPropiedad} = usePropiedad()

    setPropiedad(propiedad)

  return (
    <>
      <Header />
      <Gallery />
      <div className='grid grid-cols-3 container gap-4 mx-auto'>
          <AsideContent />
          <Contact />
      </div>
    </>
  );
}

export default PropiedadPage;