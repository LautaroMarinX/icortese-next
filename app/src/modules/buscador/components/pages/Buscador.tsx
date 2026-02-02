"use client"
import Filters from '../organisms/Filters'
import Results from '../organisms/Results';

const Buscador = () => {
  return (
      <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <Filters />
        <Results />
      </div>
  );
}

export default Buscador