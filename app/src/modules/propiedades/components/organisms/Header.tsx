"use client"
import usePropiedad from '../../store/usePropiedad';
import HeaderResume from '../molecules/HeaderResume';
import { Badge } from '@/app/src/globals/components/UI/badge';
import Share from './Share';

const Header = () => {

    const {getPropiedad} = usePropiedad();
    const propiedad = getPropiedad();

  return (
    <section className="container mt-16 mb-8 mx-auto intersect:motion-preset-fade intersect:motion-duration-700">
      <div className='flex flex-col xl:flex-row flex-wrap gap-2 xl:items-center justify-between'>
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge className="capitalize">{propiedad?.operacion}</Badge>
            <Badge>
              {propiedad?.precio.moneda} ${propiedad?.precio.valor}
            </Badge>
          </div>
          <h1 className="text-4xl mb-2">{propiedad?.titulo}</h1>
          <HeaderResume />
        </div>
        <Share />
      </div>
    </section>
  );
}

export default Header