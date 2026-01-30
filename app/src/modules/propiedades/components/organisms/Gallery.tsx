import MainImage from '../atoms/MainImage'
import SecondaryImages from '../atoms/SecondaryImages';
import usePropiedad from '../../store/usePropiedad';
import LightRoom from './LightRoom';
import ViewAllImages from '../molecules/ViewAllImages';
import { useMediaQuery } from "react-responsive";
import GalleryCarrousel from '../molecules/GalleryCarrousel';

const Gallery = () => {

  const {  getPropiedad } = usePropiedad()
  const imagenes = getPropiedad()?.imagenes

  const isDesktop = useMediaQuery({ query: "(min-width: 768px" });


  if(imagenes?.length === 0){
    return null
  }

  if(!isDesktop && imagenes){
    return (
      <GalleryCarrousel />
    )
  
  }


  if(isDesktop && imagenes){
    return (
      <section className="mx-auto container  mb-8 intersect:motion-preset-fade intersect:motion-duration-700">
        <div className="grid grid-cols-2 gap-4 relative">
          <MainImage image={imagenes[0] || null} />
          <SecondaryImages images={imagenes?.slice(1, 5) || null} />
          <ViewAllImages />
        </div>
        <LightRoom />
      </section>
    );
  }

  
}

export default Gallery