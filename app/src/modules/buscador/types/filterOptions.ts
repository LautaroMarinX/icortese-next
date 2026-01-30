import type { Propiedad } from "@/app/src/globals/types/Propiedad";

export type FilterOptions = Pick<
Propiedad,
"operacion" | "tipo" | "precio" | "ubicacion" | "estado" | "caracteristicas" | "ambientes">