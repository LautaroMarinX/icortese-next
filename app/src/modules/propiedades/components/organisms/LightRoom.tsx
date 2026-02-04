import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/app/src/globals/components/UI/drawer";
import { useLightRoom } from "../../store/useLightRoom";
import GalleryCarrousel from "../molecules/GalleryCarrousel";

const LightRoom = () => {
  const { handleClose, isOpen } = useLightRoom();

  return (
    <Drawer open={isOpen}  onOpenChange={handleClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle hidden>Galeria de Imágenes</DrawerTitle>
          <DrawerDescription hidden>Galeria de imágenes de Cortese</DrawerDescription>
        </DrawerHeader>
        <GalleryCarrousel />
      </DrawerContent>
    </Drawer>
  );
};

export default LightRoom;