"use client"
import { Button } from '@/app/src/globals/components/UI/button';
import { FaWhatsapp } from 'react-icons/fa';
import { generatePropertyURL } from '../../utils/generatePropertyURL';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const WhatsAppShare = () => {
    const [link, setLink] = useState('#');

    useEffect(() => {
        const propertyURL = generatePropertyURL();
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent('Estuve navegando por el Sitio Web de ICortese y encontre esta propiedad: ' + propertyURL)}`;
        setLink(whatsappLink);
    }, []);

  return (
    <Button asChild size={"sm"}>
      <Link target="_blank" href={link}>
        WhatsApp <FaWhatsapp />
      </Link>
    </Button>
  );
}

export default WhatsAppShare