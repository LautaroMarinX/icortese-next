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
    <div className="h-full w-full  rounded-xl grid grid-cols-2 md:grid-cols-3 gap-4 col-span-3">
      {resultados?.map((propiedad) => (
        <PropiertyCard key={propiedad.titulo} propierty={propiedad} />
      ))}
    </div>
  );
}

export default Results