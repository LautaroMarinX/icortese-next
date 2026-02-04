import React from 'react'
import BasicInfoWrapper from '../atoms/BasicInfoWrapper';
import ListItem from '../atoms/ListItem';
import { generateServiceInfo } from '../../utils/generateServicesInfo';

const Services = () => {

  if(!generateServiceInfo()) {
    return null;
  }

  return (
    <section className="container mx-auto">
      <div className="flex flex-col">
        <h3 className="text-xl mb-4">Superficies y Medidas</h3>
        <BasicInfoWrapper>
          {generateServiceInfo() != null && generateServiceInfo()?.map((value) => (
            <ListItem key={value.label} value={value} />
          ))}
        </BasicInfoWrapper>
      </div>
    </section>
  );
}

export default Services