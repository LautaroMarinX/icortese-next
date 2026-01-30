import Image from 'next/image';


const Logo = () => {
  return (
    <Image
      src={"/images/brand/cortese.png"}
      width={100}
      height={100}
      alt="Logo de Cortese Propiedades"
      className="h-16! object-contain"
    />
  );
}

export default Logo