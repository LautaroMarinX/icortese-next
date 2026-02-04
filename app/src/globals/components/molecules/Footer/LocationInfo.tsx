import { MapPin } from 'lucide-react';

const LocationItem = ({location}: {location: string}) => {
  return (
    <li className="flex flex-row w-full">
      <p className='flex '>
        {location}
      </p>
    </li>
  );
}

const LocationWrapper = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl mb-2 flex items-center">
        Sucursales
      </h3>
      <ul className="flex flex-col gap-2">
        <LocationItem location="Charcas 4045, CABA." />
        <LocationItem location="Calle del Caminante 30, OF. 541, Nordelta, Tigre." />
      </ul>
    </div>
  );
}

const LocationInfo = () => {
  return (
    <div className="flex flex-col">
        <LocationWrapper />
    </div>
  );
}

export default LocationInfo;