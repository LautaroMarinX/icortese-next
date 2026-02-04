import { Button } from '@/app/src/globals/components/UI/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const WhyChooseText = ({ hiddenButton = false }: { hiddenButton?: boolean }) => {
  return (
    <div className="flex flex-col-reverse justify-between md:flex-col col-span-1">
      <div className="flex flex-col my-8 md:my-0  md:mb-12">
        <h2 className="text-3xl mb-2">Por qué elegirnos</h2>
        <p className="mb-2">
          Más de una década acompañando a personas y empresas en la compra,
          venta e inversión de propiedades, con un enfoque profesional,
          transparente y orientado a resultados.
        </p>
        {!hiddenButton && (
          <Button className="w-fit" asChild>
            <Link href={"/sobre-nosotros"}>
              Conocer más <ArrowUpRight />
            </Link>
          </Button>
        )}
      </div>
      <Image
        src={"/images/building.webp"}
        width={400}
        height={400}
        alt="Imagen de construcción"
        className="rounded-2xl w-full h-60 md:h-2/4  object-cover"
      />
    </div>
  );
};

export default WhyChooseText