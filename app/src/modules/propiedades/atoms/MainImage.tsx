import React from 'react'

const MainImage = ({image}: {image: string | null}) => {

    if(!image){
        return null
    }

  return (
    <img src={image} alt='Imagen principal' className='w-full object-cover rounded-xl' />
  )
}

export default MainImage