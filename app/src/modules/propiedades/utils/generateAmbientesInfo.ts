import usePropiedad from "../store/usePropiedad";

export const generateAmbientesInfo = () => {
  const { getPropiedad } = usePropiedad();
  const propiedad = getPropiedad();

  const ambientesInfo = propiedad?.ambientes.map((ambiente) => ({
    label: ambiente,
  }));

  return ambientesInfo;
};
