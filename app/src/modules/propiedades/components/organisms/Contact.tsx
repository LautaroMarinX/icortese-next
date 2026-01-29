import React from 'react'
import SaleInfoHead from '../molecules/SaleInfoHead'
import SaleInfoData from '../molecules/SaleInfoData'
import SaleInfoButtons from '../molecules/SaleInfoButtons'

const Contact = () => {
  return (
    <div className='ring ring-muted h-fit rounded-xl sticky top-20 p-4'>
        <SaleInfoHead />
        <SaleInfoData />
        <SaleInfoButtons />
    </div>
  )
}

export default Contact