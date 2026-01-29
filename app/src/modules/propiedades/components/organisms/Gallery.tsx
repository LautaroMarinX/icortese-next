import MainImage from '../atoms/MainImage'
import SecondaryImages from '../atoms/SecondaryImages';
import usePropiedad from '../../store/usePropiedad';
// import LightRoom from './LightRoom';

const Gallery = () => {

  const {  getPropiedad } = usePropiedad()
  const propiedad = getPropiedad()


  return (
    <section className="mx-auto container mb-8">
      <div className='grid grid-cols-2 gap-4'>
        <MainImage image={propiedad?.imagenes[0] || null} />
        <SecondaryImages images={propiedad?.imagenes.slice(1, 4) || null} />
      </div>
      {/* <LightRoom /> */}
    </section>
  );
}

export default Gallery