import React from 'react'

interface SaleInfoListItemProps {
    title: string;
    value: string | number;
}

const SaleInfoListItem = ({title, value}: SaleInfoListItemProps) => {
  return (
    <li className='flex justify-between items-center'>
        <p>{title}</p>
        <span className='capitalize'>{value}</span>
    </li>
  )
}

export default SaleInfoListItem