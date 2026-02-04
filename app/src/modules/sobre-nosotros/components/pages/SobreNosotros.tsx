import React from 'react'
import AboutUsText from '../molecules/AboutUsText';
import Values from '../organisms/Values';
import WhyChoose from '../../../home/components/organisms/WhyChoose';

const SobreNosotros = () => {
  return (
    <main className=" my-28">
      <AboutUsText />
      <Values />
      <WhyChoose hiddenButton />
    </main>
  );
}

export default SobreNosotros