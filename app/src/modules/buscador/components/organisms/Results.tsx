import PropiertyCard from '@/app/src/globals/components/atoms/PropiertyCard'
import { useBuscador } from '../stores/useBuscador'
import EmptyResults from './EmptyResults'

const Results = () => {

    const { resultados } = useBuscador()

    if(resultados?.length === 0){
      return (
        <EmptyResults />
      )
    }
 
  return (
    <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:col-span-2 xl:col-span-3  rounded-xl gap-4">
      {resultados?.map((propiedad) => (
        <PropiertyCard key={propiedad.titulo} propierty={propiedad} />
      ))}
    </div>
  );
}

export default Results