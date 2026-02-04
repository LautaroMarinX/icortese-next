

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface MinimalEmbla {
  canScrollPrev?: () => boolean;
  canScrollNext?: () => boolean;
  scrollPrev?: () => void;
  scrollNext?: () => void;
  on?: (eventName: string, cb: () => void) => void;
  off?: (eventName: string, cb: () => void) => void;
  scrollTo?: (index: number) => void;
}

import usePropiedad from "../../store/usePropiedad";
import Image from "next/image";
import { useLightRoom } from "../../store/useLightRoom";
import { Button } from "@/app/src/globals/components/UI/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


const EmblaButtons = ({ emblaApi }: { emblaApi?: unknown | null }) => {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    const api = emblaApi as unknown as MinimalEmbla;
    setCanPrev(!!api?.canScrollPrev?.());
    setCanNext(!!api?.canScrollNext?.());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setTimeout(() => updateButtons(), 0);
    const api = emblaApi as unknown as MinimalEmbla;
    api.on?.('select', updateButtons);
    api.on?.('reInit', updateButtons);
    return () => {
      api.off?.('select', updateButtons);
      api.off?.('reInit', updateButtons);
    };
  }, [emblaApi, updateButtons]);

  return (
    <div className="flex">
      <Button
        aria-label="Boton de retroceso en la galería"
        variant={"secondary"}
        disabled={!canPrev}
        className="rounded-e-none cursor-pointer"
        onClick={() => (emblaApi as unknown as MinimalEmbla)?.scrollPrev?.()}
      >
        <ChevronLeft />
      </Button>
      <Button
        aria-label="Boton de avance en la galería"
        variant={"secondary"}
        disabled={!canNext}
        className="rounded-s-none cursor-pointer"
        onClick={() => (emblaApi as unknown as MinimalEmbla)?.scrollNext?.()}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

const GalleryCarrousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  const { getPropiedad } = usePropiedad();
  const { indexSelect } = useLightRoom();

  const imagenes = getPropiedad()?.imagenes;

        useEffect(() => {
          if(emblaApi && indexSelect){
            (emblaApi as unknown as MinimalEmbla).scrollTo?.(indexSelect)
          }
        }, [emblaApi, indexSelect])

  return (
    <div className="h-fit mb-8 md:mb-12">
      <div
        className="flex flex-col gap-4 mx-auto h-fit container"
        ref={emblaRef}
      >
        <div className="w-full h-full px-2 flex gap-4 container">
          {imagenes?.map((imagen, index) => (
            <div
              key={`Imagen ${index}`}
              className="w-full h-80 sm:w-15/16 sm:h-90 md:w-13/16 md:h-150   xl:w-2/4 xl:h-150 shrink-0 relative"
            >
              <Image
                quality={100}
                src={imagen}
                alt={`Imagen ${index}`}
                fill
                className="object-cover rounded-xl!"
              />
            </div>
          ))}
        </div>
        <div>
          <div className="w-full h-full px-2 flex gap-2">
            <EmblaButtons emblaApi={emblaApi} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCarrousel;