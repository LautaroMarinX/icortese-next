import React from 'react'
import { FeatureProps } from '../../utils/Features';



interface FeatureCardWrapperProps {
  feature: FeatureProps;
}

const FeatureCard = ({ feature }: FeatureCardWrapperProps) => {
  return (
    <div className="flex flex-col ring ring-muted rounded-2xl justify-between  p-4">
      {feature.icon && <feature.icon className="size-6 mb-12" />}
      <div className="flex flex-col">
        <h3 className='text-xl mb-2'>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard