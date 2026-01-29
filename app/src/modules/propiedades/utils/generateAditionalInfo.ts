import usePropiedad from "../store/usePropiedad";

export const generateAditionalInfo = () => {
  const { getPropiedad } = usePropiedad();
  const propiedad = getPropiedad();

  const generateAditionalInfo = propiedad?.amenities.map((servicio) => ({
    label: servicio,
    value: true,
  }));

  return generateAditionalInfo;
};
