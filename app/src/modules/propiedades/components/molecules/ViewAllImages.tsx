import { Button } from '@/app/src/globals/components/UI/button'
import { Image } from 'lucide-react'
import { useLightRoom } from '../../store/useLightRoom';

const ViewAllImages = () => {

    const {handleOpen} = useLightRoom();

    

  return (
    <div className='w-fit h-fit bottom-0 right-0 bg-black absolute rounded-xl'>
        <Button onClick={handleOpen} variant={"outline"} className='cursor-pointer'>Ver todas las Imagenes <Image/></Button>
    </div>
  )
}

export default ViewAllImages