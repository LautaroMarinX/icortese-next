import React from 'react'
import BasicInfoWrapper from '../atoms/BasicInfoWrapper';
import ListItem from '../atoms/ListItem';
import { generateSurfaceInfo } from '../../utils/generateSurfaceInfo';

const Surface = () => {

    const surfaceInfo = generateSurfaceInfo()

  return (
    <section className="container mx-auto mb-8">
      <div className="flex flex-col">
        <h3 className="text-xl mb-4">Superficies y Medidas</h3>
        <BasicInfoWrapper>
          {surfaceInfo.map((value) => (
            <ListItem key={value.label} value={value} />
          ))}
        </BasicInfoWrapper>
      </div>
    </section>
  );
}

export default Surface