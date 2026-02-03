import { Button } from '@/app/src/globals/components/UI/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const BannerText = () => {
  return (
    <div className="h-full w-full flex flex-col gap-8 items-start justify-between">
      <div className="flex flex-col h-full justify-center max-w-200 ">
        <h1 className="text-5xl mb-2">Encuentra tu futuro inmueble </h1>
        <p className="mb-2 text-balance">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic magnam
          rem voluptate fugiat cupiditate in voluptas dolores eius ipsam
          laborum.
        </p>
        <div className="flex flex-row gap-2 flex-wrap">
          <Button asChild>
            <Link href={"/buscador"}>
              Explorar catálogo <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BannerText