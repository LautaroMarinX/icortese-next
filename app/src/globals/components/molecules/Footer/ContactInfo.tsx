import Link from "next/link";
import { Button } from "../../UI/button";

const ContactLink = ({href, children}: {href: string, children: React.ReactNode}) => {
    return (
      <li>
        <Button asChild className="px-0 py-0! h-fit!" variant={"link"}>
          <Link href={href}>{children}</Link>
        </Button>
      </li>
    );
}


const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl mb-2">Contacto</h3>
      <ul className="flex flex-col gap-2!">
        <ContactLink href="tel:+541139870880">+54 11 3987-0800</ContactLink>
        <ContactLink href="tel:+541139870880">+54 11 4149-8300</ContactLink>
        <ContactLink href="mailto:myriam@icortese.com">myriam@icortese.com</ContactLink>
        <ContactLink href="mailto:vanesa@icortese.com">
          vanesa@icortese.com
        </ContactLink>
      </ul>
    </div>
  );
}

export default ContactInfo