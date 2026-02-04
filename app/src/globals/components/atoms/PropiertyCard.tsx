import Link from 'next/link';
import { Propiedad } from '../../types/Propiedad'
import Image from 'next/image'
import { Badge } from '../UI/badge';
import { LayoutGrid, Map } from 'lucide-react';

interface PropiertyCardProps {
    propierty: Propiedad
}

const PropiertyCard = ({ propierty }: PropiertyCardProps) => {
  return (
    <Link
      href={`/propiedades/${propierty.id}`}
      className="flex flex-col group hover:cursor-pointer intersect:motion-preset-fade intersect:motion-duration-700"
    >
      {propierty.imagenes.length > 0 && (
    
        <Image
          className="rounded-xl object-cover aspect-4/3 w-full mb-2 group-hover:scale-102 group-hover:shadow-xl duration-300"
          width={500}
          height={500}
          loading='lazy'
          src={propierty.imagenes[0] || ""}
          alt={`Imagen de ${propierty.titulo || "propiedad"}`}
        />
      )}
      <div className="flex flex-col">
        <h3 className="text-base sm:text-xl md:text-2xl mb-1">{propierty.titulo}</h3>
        <div className="hidden sm:grid sm:grid-cols-2 w-fit gap-2 *:pe-2 divide-x mb-1">
          <p className="flex gap-2 items-center">
            <LayoutGrid className="size-4" />{" "}
            {propierty.caracteristicas.ambientes} Ambientes
          </p>
          <p className="flex gap-2 items-center">
            <Map className="size-4" /> {propierty.superficies.total} m2
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-between">
          <p className='text-sm sm:text-base'>
            {propierty.ubicacion.barrio}, {propierty.ubicacion.provincia}
          </p>
          <div className="gap-2 flex-wrap flex">
            <Badge className="capitalize" variant={"secondary"}>{propierty.operacion}</Badge>
            <Badge variant={"secondary"}>
              {propierty.precio.moneda}$ {propierty.precio.valor}
            </Badge>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropiertyCard