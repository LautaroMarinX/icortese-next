"use client"
import Filters from '../organisms/Filters'
import Results from '../organisms/Results';

const Buscador = () => {
  return (
    <>
      <div className='grid md:grid-cols-4 gap-4'>
        <Filters />
        <Results />
      </div>
    </>
  );
}

export default Buscador