import { Button } from '@/app/src/globals/components/UI/button';
import { ArrowUpRight, SparklesIcon } from 'lucide-react';
import Link from 'next/link';

const BannerText = () => {
  return (
    <div className="h-full w-full flex flex-col gap-8 items-start justify-between">
      <div className="flex flex-col h-full justify-center max-w-200 ">
        <h1 className="text-5xl mb-2">Encuentra tu futuro inmueble </h1>
        <p className="mb-2 text-balance">
          Combinamos experiencia inmobiliaria con tecnología para ayudarte a
          encontrar oportunidades reales y tomar mejores decisiones.
        </p>
        <div className="flex flex-row gap-2 flex-wrap">
          <Button variant={"secondary"} asChild>
            <Link href={"/buscador"}>
              Explorar catálogo <ArrowUpRight />
            </Link>
          </Button>
          <Button variant={"default"}>
            Busca con Cortese IA <SparklesIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BannerText