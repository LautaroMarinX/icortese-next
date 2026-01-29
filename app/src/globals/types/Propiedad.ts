export interface Propiedad {
  id: string;
  titulo: string;
  operacion: "venta" | "alquiler";
  tipo: "Departamento" | "Casa" | "PH" | "Terreno" | "Local" | "Oficina";
  precio: {
    moneda: "USD" | "ARS";
    valor: number;
  };
  ubicacion: {
    calle: string;
    altura: number | null;
    barrio: string;
    ciudad: string;
    provincia: string;
    pais: string;
    referencias?: string;
  };
  estado: {
    condicion: string;
    antiguedad: string;
    situacion: string;
    disposicion: string;
    orientacion: string | null;
    credito: string;
  };
  caracteristicas: {
    ambientes: number;
    dormitorios: number;
    banos: number;
    toilettes: number;
    cocheras: number;
    plantas: number;
  };
  ambientes: string[];
  superficies: {
    cubierta: number;
    semicubierta: number;
    descubierta: number;
    total: number;
  };
  descripcion: string;
  servicios: string[];
  amenities: string[];
  imagenes: string[];
  observaciones_legales: string[];
}
