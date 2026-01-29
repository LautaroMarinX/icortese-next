import React from 'react'

interface SecondaryImagesProps{
    images: string[] | null
}

const SecondaryImages = ({images}: SecondaryImagesProps) => {

    if(!images){
        return null
    }

  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
          <img
            key={image}
            src={image}
            className="object-cover w-full rounded-xl"
            alt={"Imagen numero " + index + 1}
          />
      ))}
    </div>
  );
}

export default SecondaryImages