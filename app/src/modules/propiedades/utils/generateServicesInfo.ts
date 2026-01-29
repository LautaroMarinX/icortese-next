import usePropiedad from "../store/usePropiedad";


export const generateServiceInfo = () => {

            const { getPropiedad } = usePropiedad();
            const propiedad = getPropiedad();

            const serviceInfo = propiedad.servicios.map((servicio) => ({
                label: servicio,
                value: ""
            }))

            return serviceInfo
}