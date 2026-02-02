import { MapPin } from 'lucide-react';
import React from 'react'

const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl mb-2 flex items-center">
        <MapPin className="size-4 me-2" /> Ubicación
      </h3>
      <ul className='flex flex-col gap-2 list-disc ps-5'>
        <li >
          <p>Charcas 4045, CABA. Arq. Myriam Cortese cucicba 221</p>
        </li>
        <li>
          <p>
            Calle del Caminante 30, of.531, Nordelta, Tigre. Vanesa Ilundain
            CMCPSI 6109
          </p>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo