import React from 'react'

interface ValuesCardProps {
    title: string;
    description: string;
}

const ValuesCard = ({title, description}: ValuesCardProps) => {
  return (
    <div className='ring ring-muted flex flex-col p-4 rounded-2xl justify-between'>
        <h2 className='mb-12 text-2xl'>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default ValuesCard