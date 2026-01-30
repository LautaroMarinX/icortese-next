"use client"
import Image from 'next/image'
import { useLightRoom } from '../../store/useLightRoom';

const MainImage = ({image}: {image: string | null}) => {

    const { handleOpen } = useLightRoom();


    if(!image){
        return null
    }

  return (
    <Image height={600} width={600}
    onClick={handleOpen}
     src={image} alt='Imagen principal' className=' hover:shadow-xl hover:scale-102 cursor-pointer duration-300 w-full object-cover rounded-xl' />
  )
}

export default MainImage