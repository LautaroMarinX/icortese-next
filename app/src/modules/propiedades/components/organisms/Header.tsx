"use client"
import usePropiedad from '../../store/usePropiedad';
import HeaderResume from '../molecules/HeaderResume';
import { Badge } from '@/app/src/globals/components/UI/badge';

const Header = () => {

    const {getPropiedad} = usePropiedad();
    const propiedad = getPropiedad();

  return (
    <section className="container mt-16 mb-8 mx-auto">
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge className='capitalize'>{propiedad?.operacion}</Badge>
          <Badge>{propiedad?.precio.moneda} ${propiedad?.precio.valor}</Badge>
        </div>
        <h1 className="text-4xl mb-2">{propiedad?.titulo}</h1>
        <HeaderResume />
      </div>
    </section>
  );
}

export default Header