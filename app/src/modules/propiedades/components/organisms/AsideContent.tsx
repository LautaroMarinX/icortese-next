import Detail from '../molecules/Detail';
import Description from '../molecules/Description';
import InformationRender from '../molecules/InformationRender';
import ListItem from '../atoms/ListItem';
import ChipItem from "../atoms/ChipItem";
import { generateBasicInfo } from '../../utils/generateBasicInfo';
import { generateSurfaceInfo } from '../../utils/generateSurfaceInfo';
import { generateServiceInfo } from '../../utils/generateServicesInfo';
import { generateAmbientesInfo } from '../../utils/generateAmbientesInfo';
import { generateAditionalInfo } from '../../utils/generateAditionalInfo';
import CheckItem from '../atoms/CheckItem';

const AsideContent = () => {
  return (
    <div className="flex flex-col col-span-2">
      <Detail />
      <Description />
      <InformationRender
        Element={ListItem}
        info={generateBasicInfo()}
        title={"Información Básica"}
      />
      <InformationRender
        Element={ListItem}
        info={generateSurfaceInfo()}
        title={"Superficies y Medidas"}
      />
      <InformationRender
        Element={ListItem}
        info={generateServiceInfo()}
        title={"Servicios"}
      />
      <InformationRender
        Element={ChipItem}
        className="flex! gap-2! flex-wrap! flex-row"
        info={generateAmbientesInfo()}
        title="Ambientes"
      />
      <InformationRender
        Element={CheckItem}
        info={generateAditionalInfo()}
        title="Amenities"
      />
    </div>
  );
}

export default AsideContent