export const operaciones = ["venta", "alquiler"] as const;
export const tipos = ["Departamento", "Casa", "PH", "Terreno", "Local", "Oficina"] as const;
export const monedas = ["USD", "ARS"] as const;
export type Operacion = typeof operaciones[number];
export type Tipos = typeof tipos[number];
export type Moneda = typeof monedas[number];

export interface Propiedad {
  id: string;
  titulo: string;
  operacion: Operacion;
  tipo: Tipos;
  precio: {
    moneda: Moneda;
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
