import { Briefcase, House, HouseHeart, UserCheck } from "lucide-react";

export interface FeatureProps {
  title: string;
  description: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}


export const features: FeatureProps[] = [
  {
    icon: House,
    title: "+20",
    description: "Años de experiencia en el sector inmobiliario.",
  },
  {
    icon: UserCheck,
    title: "Atención personalizada",
    description: "Nos adaptamos a las necesidades de cada cliente.",
  },
  {
    icon: HouseHeart,
    title: "Propiedades exclusivas",
    description: "Acceso a inmuebles únicos en el mercado.",
  },
  {
    icon: Briefcase,
    title: "Asesoramiento integral",
    description: "Te acompañamos en todo el proceso de compra o venta.",
  }
]