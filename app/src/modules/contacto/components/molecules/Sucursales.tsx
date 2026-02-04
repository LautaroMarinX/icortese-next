import CardWithLogo from '@/app/src/globals/components/atoms/CardWithLogo'
import { MapPin } from 'lucide-react'

const Sucursales = () => {
  return (
    <div className="flex flex-col mb-8">
      <h2 className="text-2xl mb-4">Sucursales</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <CardWithLogo icon={MapPin} label="Charcas 4045, CABA" />
        <CardWithLogo
          icon={MapPin}
          label="Calle del Caminante 30, OF. 541, Nordelta, Tigre"
        />
      </div>
    </div>
  );
}

export default Sucursales