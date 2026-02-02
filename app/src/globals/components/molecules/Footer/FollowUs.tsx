import Image from "next/image";
import SocialMedia from "./SocialMedia";

const FollowUs = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl mb-2 flex items-center">Seguinos en</h3>
      <div className="flex row gap-2 mb-4">
        <SocialMedia />
      </div>
      <div className="flex flex-col">
        <h3 className="mb-2 text-xl">Asociados con</h3>
        <Image
          src="/images/cucicba.jpg"
          alt="Logo de Cucicba"
          className="rounded-md"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default FollowUs