import { links } from '../../../utils/links'
import { LinkItem } from '../../atoms/LinkItem'
import { Button } from '../../UI/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../../UI/sheet'
import { Menu } from 'lucide-react'

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="block lg:hidden">
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
            <SheetClose key={link.label}>
              <LinkItem
                variant="ghost"
                className="flex! w-full justify-start"
                link={link}
                key={link.label}
              />
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar