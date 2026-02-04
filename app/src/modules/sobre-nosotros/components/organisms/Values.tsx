import React from 'react'
import ValuesCard from '../atoms/ValuesCard';

const Values = () => {
  return (
    <section className="mb-28 mt-14 bg-[url(/images/about.jpg)] bg-cover flex items-end  mx-auto intersect:motion-preset-fade intersect:motion-duration-700">
      <div className='flex h-fit my-20 lg:my-0 px-2 lg:h-120 items-end container mx-auto'>
        <div className="grid grid-cols-1  h-fit my-4 lg:grid-cols-3 gap-4 ">
          <ValuesCard
            title="Misión"
            description="Brindar un servicio profesional y responsable de intermediación en la compra, venta y alquiler de inmuebles, buscando satisfacer al cliente atendiendo, comprendiendo y trabajando sobre sus necesidades inmobiliarias específicas, y aportando valor a los inversores en bienes raíces"
          />
          <ValuesCard
            title="Visión"
            description="Ser una empresa líder en servicios inmobiliarios, referente absoluto de profesionalismo y atención personalizada."
          />
          <ValuesCard
            title="Valores"
            description="Compromiso, integridad y Profesionalismo"
          />
        </div>
      </div>
    </section>
  );
}

export default Values