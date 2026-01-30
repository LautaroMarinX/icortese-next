import { Building, House, MapPin } from 'lucide-react'
import DetailCard from '../atoms/DetailCard';
import usePropiedad from '../../store/usePropiedad';

const Detail = () => {

       const { getPropiedad } = usePropiedad();
       const propiedad = getPropiedad();

  return (
    <section className="mb-8 container mx-auto intersect:motion-preset-fade intersect:motion-duration-700">
      <div className="flex flex-wrap gap-6 ">
        <DetailCard
          Icon={House}
          title="Tipo de Propiedad"
          description={propiedad?.tipo || ""}
        />
        <DetailCard
          Icon={MapPin}
          title="Ubicación"
          description={propiedad?.ubicacion?.barrio || ""}
        />
      </div>
    </section>
  );
}

export default Detail