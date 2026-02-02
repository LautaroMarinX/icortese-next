import React from 'react'
import { features } from '../../../utils/Features'
import FeatureCard from '../../atoms/FeatureCard'

const FeaturesGrid = () => {
  return (
    <div className='md:col-span-2 grid sm:grid-cols-2 gap-4'>
        {
            features.map((feature) => {
                return (
                    <FeatureCard key={feature.title} feature={feature} />
                )
            })
        }
    </div>
  )
}

export default FeaturesGrid