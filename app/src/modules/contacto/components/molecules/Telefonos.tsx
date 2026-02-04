import CardWithLogo from '@/app/src/globals/components/atoms/CardWithLogo';
import { Mail, Phone } from 'lucide-react';

const Telefonos = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-8">Medios de contacto</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <CardWithLogo icon={Phone} label="+11 3987-0880" />
        <CardWithLogo icon={Phone} label="+54 11 4149-8300" />
        <CardWithLogo icon={Mail} label="myriam@icortese.com" />
        <CardWithLogo icon={Mail} label="vanesa@icortese.com" />
      </div>
    </div>
  );
}

export default Telefonos