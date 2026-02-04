import React from 'react'
import Sucursales from '../molecules/Sucursales';
import Telefonos from '../molecules/Telefonos';

const ContactInfo = () => {
  return (
    <div className="md:col-span-2 h-full flex flex-col justify-center">
      <h1 className="text-4xl mb-8">Contactanos</h1>
      <Sucursales />
      <Telefonos />
    </div>
  );
}

export default ContactInfo