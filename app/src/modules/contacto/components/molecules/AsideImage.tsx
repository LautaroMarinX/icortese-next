import Image from 'next/image';

const AsideImage = () => {
  return (
    <div className="h-full md:col-span-1">
      <Image
        src={"/images/edificio.webp"}
        alt="Edificio"
        width={800}
        height={800}
        className="w-full h-full max-h-50 md:max-h-none object-cover rounded-2xl"
      />
    </div>
  );
}

export default AsideImage