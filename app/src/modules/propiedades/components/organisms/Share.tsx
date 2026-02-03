
import WhatsAppShare from "../atoms/WhatsAppShare";
import QRShare from "../atoms/QRShare";

const Share = () => {
  return (
    <div className="flex flex-col gap-1">
      <p>Compartir por</p>

      <div className="flex flex-row flex-wrap gap-2">
        <WhatsAppShare />
        <QRShare />
      </div>
    </div>
  );
}

export default Share