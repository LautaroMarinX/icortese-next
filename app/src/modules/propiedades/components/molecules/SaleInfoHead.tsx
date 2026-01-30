import usePropiedad from "../../store/usePropiedad";

const SaleInfoHead = () => {

  const {getPropiedad} = usePropiedad()

  const precio = getPropiedad()?.precio

  return (
    <div className="flex flex-col mb-3 pb-2 border-b">
      <div className='flex flex-col'>
        <p className="mb-2">Precio de venta</p>
        <h3 className="text-2xl">{precio?.moneda} ${precio?.valor}</h3>
      </div>
    </div>
  );
}

export default SaleInfoHead;