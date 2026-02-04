import Image from 'next/image';
import React from 'react'

const LogoWrapper = () => {
  return (
    <div className="flex flex-col">
      <Image
        src="/images/brand/cortese.webp"
        width={150}
        height={150}
        alt="Logo de Icortese"
        className="mb-8"
      />
      <div className="flex flex-col">
        <p className="mb-2">Asociados a</p>
        <Image
          src={"/images/cucicba.webp"}
          height={90}
          width={90}
          alt="Logo de Cucicba"
          className="rounded-md"
        />
      </div>
    </div>
  );
}

export default LogoWrapper