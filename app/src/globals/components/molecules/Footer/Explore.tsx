import { links } from '../../../utils/links'
import Link from 'next/link'
import { Button } from '../../UI/button'

const Explore = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl mb-2">Explorar</h3>
      <ul className='flex flex-col gap-2'>
        {links.map((link) => (
          <li key={link.label}>
            <Button asChild variant={"link"} className='px-0! py-0! h-fit'>
              <Link scroll href={link.href}>{link.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Explore