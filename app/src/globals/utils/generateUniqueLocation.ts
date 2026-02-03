import { Propiedad } from "../types/Propiedad";
import { propiedades } from "./propiedades";

export const generateUniqueLocation = () => {
    
    const ubicaciones = propiedades.map((propiedad: Propiedad) => propiedad.ubicacion.barrio);
    const ubicacionesUnicas: string[] = []

    ubicaciones.forEach((ubicacion) => {
        if (!ubicacionesUnicas.includes(ubicacion)) {
            ubicacionesUnicas.push(ubicacion);
        }
    });


    return ubicacionesUnicas;
}