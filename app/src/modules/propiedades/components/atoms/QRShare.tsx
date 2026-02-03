import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/app/src/globals/components/UI/alert-dialog';
import { Button } from '@/app/src/globals/components/UI/button';
import { QrCode, X } from 'lucide-react';
import QRCode from "react-qr-code";
import { generatePropertyURL } from '../../utils/generatePropertyURL';

const QRShare = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"sm"}>
          QR <QrCode />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="p-3 rounded-2xl">
        <AlertDialogHeader className='gap-0!'>
          <AlertDialogTitle>
            Compartir mediante QR
          </AlertDialogTitle>
          <AlertDialogDescription>
            Comparte este QR a otra persona para que pueda ver esta propiedad
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex  w-fit my-4 mx-auto rounded-xl items-center justify-center">
          <QRCode value={generatePropertyURL()} size={200} />
        </div>
        <AlertDialogFooter className='flex justify-start!'>
          <AlertDialogCancel>
            Cerrar <X />
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default QRShare