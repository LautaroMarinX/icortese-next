import usePropiedad from '../../store/usePropiedad';
import { HeaderResumeItem } from "../atoms/HeaderResumeItem";


const HeaderResume = () => {

    const { getPropiedad } = usePropiedad();
    const propiedad = getPropiedad();


  return (
    <ul className="flex *:px-2 *:first:ps-0 *:last:border-0 *:border-r">
      <HeaderResumeItem
        caracteristica="Baños"
        cantidad={propiedad?.caracteristicas.banios || 0}
      />
      <HeaderResumeItem
        caracteristica="Ambientes"
        cantidad={propiedad?.caracteristicas.ambientes}
      />
      <HeaderResumeItem caracteristica={"Dormitorios"} cantidad={propiedad?.caracteristicas.dormitorios} />
        <HeaderResumeItem caracteristica={"Cocheras"} cantidad={propiedad?.caracteristicas.cocheras || 0} />
    </ul>
  );
}

export default HeaderResume