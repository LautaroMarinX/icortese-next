import React from 'react'
import BasicInfoWrapper from '../atoms/BasicInfoWrapper'
import { generateBasicInfo } from '../../utils/generateBasicInfo'
import ListItem from '../atoms/ListItem'

const BasicInfo = () => {

    const basicInfo = generateBasicInfo()

  return (
    <section className='container mx-auto mb-8'>
        <div className='flex flex-col'>
            <h3 className='text-xl mb-4'>Información Básica</h3>
            <BasicInfoWrapper >
                {
                    basicInfo.map((value) => (
                        <ListItem key={value.label} value={value} />
                    ))
                }
            </BasicInfoWrapper>
        </div>
    </section>
  )
}

export default BasicInfo