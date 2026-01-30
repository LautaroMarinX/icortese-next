import Image from 'next/image';
import { useLightRoom } from '../../store/useLightRoom';

interface SecondaryImagesProps{
    images: string[] | null
}

const SecondaryImages = ({images}: SecondaryImagesProps) => {

    if(!images){
        return null
    }

    const {setIndexSelect} = useLightRoom();



  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <Image
          onClick={() => setIndexSelect(index + 1)}
          width={600}
          height={600}
          key={image}
          src={image}
          className="object-cover w-full rounded-xl hover:shadow-xl  duration-300 hover:scale-102 cursor-pointer "
          alt={"Imagen numero " + index + 1}
        />
      ))}
    </div>
  );
}

export default SecondaryImages