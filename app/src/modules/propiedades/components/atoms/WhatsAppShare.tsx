import { Button } from '@/app/src/globals/components/UI/button';
import { FaWhatsapp } from 'react-icons/fa';
import { generatePropertyURL } from '../../utils/generatePropertyURL';
import Link from 'next/link';

const WhatsAppShare = () => {


    const generateWhatsAppLink = () => {
            const propertyURL = generatePropertyURL();
            return `https://api.whatsapp.com/send?text=${encodeURIComponent('Estuve navegando por el Sitio Web de ICortese y encontre esta propiedad: ' + propertyURL)}`;
    }

  return (
    <Button asChild size={"sm"}>
      <Link target='_blank' href={generateWhatsAppLink()}>
        WhatsApp <FaWhatsapp />
      </Link>
    </Button>
  );
}

export default WhatsAppShare