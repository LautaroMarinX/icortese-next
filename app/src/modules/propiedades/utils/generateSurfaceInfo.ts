import { Map, Ruler, Square, SquareDashed } from "lucide-react";
import usePropiedad from "../store/usePropiedad";

export const generateSurfaceInfo = () => {
  const { getPropiedad } = usePropiedad();
  const propiedad = getPropiedad();

  const superficies = propiedad?.superficies

  if(!superficies){
    return null
  }

  const surfaceInfo = [
    {
      Icon: Map,
      label: "Terreno",
      value: `${superficies.total} m²`,
    },
    {
      Icon: Square,
      label: "Cubierta",
      value: `${superficies.cubierta} m²`,
    },
    {
      Icon: SquareDashed,
      label: "Semicubierta",
      value: `${superficies.semicubierta} m²`,
    },
    {
      Icon: Ruler,
      label: "Total Construido",
      value: `${superficies.total} m²`,
    },
  ];

  return surfaceInfo;
};
