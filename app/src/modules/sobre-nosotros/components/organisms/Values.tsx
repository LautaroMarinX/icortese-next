import React from 'react'
import ValuesCard from '../atoms/ValuesCard';

const Values = () => {
  return (
    <section className="mb-28 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
    </section>
  );
}

export default Values