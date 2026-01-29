import { ArrowUpRight, Bath, BedDouble, CalendarClock, CreditCard, Droplet, Home, Layers, LayoutGrid, MoveHorizontal, Sparkles } from "lucide-react";
import usePropiedad from "../store/usePropiedad";

export const generateBasicInfo = () => {

         const { getPropiedad } = usePropiedad();
         const propiedad = getPropiedad();

         const caracteristicas = propiedad?.caracteristicas
         const estado = propiedad?.estado

         const basicInfo = [
            {
                Icon: LayoutGrid,
                label: "Ambientes",
                value: caracteristicas?.ambientes
            },
            {
                Icon: BedDouble,
                label: "Dormitorios",
                value: caracteristicas?.dormitorios
            },
            {
                Icon: Bath,
                label: "Baños",
                value: caracteristicas?.banos || 0
            },
            {
                Icon: Droplet,
                label: "Toilettes",
                value: caracteristicas?.toilettes
            },
            {
                Icon: Layers,
                label: "Plantas",
                value: caracteristicas?.plantas
            },
            {
                Icon: Sparkles,
                label: "Condición",
                value: estado?.condicion || "No especificado"
            },
            {
                Icon: CalendarClock,
                label: "Antigüedad",
                value: estado?.antiguedad || "No especificado"
            },
            {
                Icon: Home,
                label: "Situación",
                value: estado?.situacion || "No especificado"
            },
            {
                Icon: MoveHorizontal,
                label: "Disposición",
                value: estado?.disposicion || "No especificado"
            },
            {
                Icon: CreditCard,
                label: "Crédito",
                value: estado?.credito || "No especificado"
            }
         ]

         return basicInfo


}