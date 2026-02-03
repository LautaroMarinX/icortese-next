import { Button } from '@/app/src/globals/components/UI/button'
import Link from 'next/link'
import usePropiedad from '../../store/usePropiedad'

const WhatsAppContact = () => {

  const {getPropiedad} = usePropiedad()

  const propiedad = getPropiedad()

  const generateWhatsAppLink = () => {
    const message = encodeURIComponent(`Hola, estoy interesado en obtener más información sobre la propiedad ${propiedad?.titulo} ubicada en ${propiedad?.ubicacion.barrio}, ${propiedad?.ubicacion.ciudad}. ¿Podrías proporcionarme más detalles?`);
    const whatsAppNumber = import.meta.NEXT_PUBLIC_WHATSAPP_NUMBER=5491141498300
;

    const baseURL = `https://wa.me/${whatsAppNumber}?text=${message}`;
    return baseURL
  }


  return (
    <div className="flex flex-col">
      <Button size={"lg"} asChild>
        <Link target='_blank' href={generateWhatsAppLink()}>Contactar por WhatsApp</Link>
      </Button>
      <p className="mt-2 w-full text-center">
        Respuesta promedio en menos de 24hs
      </p>
    </div>
  );
}

export default WhatsAppContact;