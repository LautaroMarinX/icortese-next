

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import usePropiedad from "../../store/usePropiedad";
import Image from "next/image";
import { useLightRoom } from "../../store/useLightRoom";
import { Button } from "@/app/src/globals/components/UI/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


const EmblaButtons = ({ emblaApi }: { emblaApi: UseEmblaCarouselType }) => {
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    setCanPrev(!!emblaApi?.canScrollPrev());
    setCanNext(!!emblaApi?.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on('select', updateButtons);
    emblaApi.on('reInit', updateButtons);
    return () => {
      emblaApi.off('select', updateButtons);
      emblaApi.off('reInit', updateButtons);
    };
  }, [emblaApi, updateButtons]);

  return (
    <div className="flex">
      <Button
        variant={"secondary"}
        disabled={!canPrev}
        className="rounded-e-none cursor-pointer"
        onClick={() => emblaApi?.scrollPrev()}
      >
        <ChevronLeft />
      </Button>
      <Button
        variant={"secondary"}
        disabled={!canNext}
        className="rounded-s-none cursor-pointer"
        onClick={() => emblaApi?.scrollNext()}
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
              emblaApi.scrollTo(indexSelect)
          }
      }, [emblaApi, indexSelect])

  return (
    <div className="h-fit mb-8 md:mb-12">
      <div
        className="container flex flex-col gap-4 mx-auto h-fit"
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