import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface SocialMediaProps {
  Icon?: IconComponent;
  href: string;
}

const socialMediaList: SocialMediaProps[] = [
  {
    Icon: FaFacebookF,
    href: "https://www.facebook.com/myriam.edithcortese/",
  },
//   {
//     Icon: FaXTwitter,
//     href: "https://twitter.com/icortesebienes",
//   },
  {
    Icon: FaInstagram,
    href: "https://www.instagram.com/cortese.propiedades/?hl=es-la",
  },
//   {
//     Icon: FaGooglePlusG,
//     href: "https://goo.gl/maps/xyz", // Example link
//   },
];


const SocialMedia = () => {

  return socialMediaList.map((media) => (
    <a
      key={media.href}
      className="p-2 bg-white hover:opacity-50 duration-300 rounded-md"
      href={media.href}
      target="_blank"
    >
      {media.Icon && <media.Icon />}
    </a>
  ));
}

export default SocialMedia