import type { Propiedad } from "@/app/src/globals/types/Propiedad";

import type { Moneda } from "@/app/src/globals/types/Propiedad";

export type FilterOptions = {
	operacion: Propiedad["operacion"];
	tipo: Propiedad["tipo"];
	moneda: Moneda;
	valor: [number | null, number | null];
	ubicacion: Propiedad["ubicacion"];
	estado: Propiedad["estado"];
	caracteristicas: Propiedad["caracteristicas"];
	ambientes: Propiedad["ambientes"];
};