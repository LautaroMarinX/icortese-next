import React from 'react'
import SaleInfoHead from '../molecules/SaleInfoHead'
import SaleInfoData from '../molecules/SaleInfoData'
import SaleInfoButtons from '../molecules/SaleInfoButtons'

const Contact = () => {
  return (
    <div className="ring ring-muted h-fit rounded-xl xl:sticky top-24 p-4 intersect:motion-preset-fade intersect:motion-duration-700">
      <SaleInfoHead />
      <SaleInfoData />
      <SaleInfoButtons />
    </div>
  );
}

export default Contact