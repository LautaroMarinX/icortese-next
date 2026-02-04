import { links } from '../../../utils/links'
import { LinkItem } from '../../atoms/LinkItem'
import { Button } from '../../UI/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../UI/sheet'
import { Menu } from 'lucide-react'

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className='block lg:hidden'>
        <Button variant={"secondary"} size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle hidden>Menu</SheetTitle>
          <SheetDescription hidden>
            Menu de ICortese Propiedades
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-2 px-2">
          {links.map((link) => (
            <LinkItem variant='ghost' className='flex! justify-start' key={link.label} link={link} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar