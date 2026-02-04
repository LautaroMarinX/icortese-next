import Image from 'next/image';


const Logo = () => {
  return (
    <Image
      src={"/images/brand/cortese.png"}
      width={100}
      height={100}
      alt="Logo de Cortese Propiedades"
      className="h-16! col-span-2 md:col-span-1 object-contain group-hover:opacity-50 group-hover:cursor-pointer"
    />
  );
}

export default Logo