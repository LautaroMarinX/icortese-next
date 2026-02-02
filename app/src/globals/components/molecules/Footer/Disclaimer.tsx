import React from 'react'

const Disclaimer = () => {
  return (
    <div className="flex flex-col px-4 container *:text-muted-foreground">
      <small className='mb-1'>
        Todas las medidas enunciadas son meramente orientativas, las medidas
        exactas serán las que se expresen en el respectivo título de propiedad
        de cada inmueble.
      </small>
      <small>
        Todas las fotos, imagenes y videos son meramente ilustrativos y no
        contractuales. Los precios enunciados son meramente orientativos y no
        contractuales.
      </small>
    </div>
  );
}

export default Disclaimer