import { FilterOptions } from "../types/filterOptions";
import { Moneda } from "@/app/src/globals/types/Propiedad";

/**
 * Convierte los filtros del store a query params para la URL
 */
export function filtersToQueryParams(filters: {
    operacion: FilterOptions["operacion"][] | null;
    tipo: FilterOptions["tipo"][] | null;
    moneda: Moneda | null;
    valor: [number | null, number | null] | null;
    ubicacion: FilterOptions["ubicacion"]["barrio"][] | null;
    estado: FilterOptions["estado"] | null;
    caracteristicas: FilterOptions["caracteristicas"] | null;
    ambientes: FilterOptions["ambientes"] | null;
}): URLSearchParams {
    const params = new URLSearchParams();

    if (filters.operacion && filters.operacion.length > 0) {
        params.set("operacion", filters.operacion.join(","));
    }

    if (filters.tipo && filters.tipo.length > 0) {
        params.set("tipo", filters.tipo.join(","));
    }

    if (filters.moneda) {
        params.set("moneda", filters.moneda);
    }

    if (filters.valor) {
        const [min, max] = filters.valor;
        if (min !== null) params.set("valorMin", min.toString());
        if (max !== null) params.set("valorMax", max.toString());
    }

    if (filters.ubicacion && filters.ubicacion.length > 0) {
        params.set("ubicacion", filters.ubicacion.join(","));
    }

    // Los filtros complejos (estado, caracteristicas, ambientes) los serializamos como JSON si existen
    if (filters.estado) {
        params.set("estado", JSON.stringify(filters.estado));
    }

    if (filters.caracteristicas) {
        params.set("caracteristicas", JSON.stringify(filters.caracteristicas));
    }

    if (filters.ambientes) {
        params.set("ambientes", JSON.stringify(filters.ambientes));
    }

    return params;
}

/**
 * Convierte query params de la URL a filtros del store
 */
export function queryParamsToFilters(searchParams: URLSearchParams): {
    operacion: FilterOptions["operacion"][] | null;
    tipo: FilterOptions["tipo"][] | null;
    moneda: Moneda | null;
    valor: [number | null, number | null] | null;
    ubicacion: FilterOptions["ubicacion"]["barrio"][] | null;
    estado: FilterOptions["estado"] | null;
    caracteristicas: FilterOptions["caracteristicas"] | null;
    ambientes: FilterOptions["ambientes"] | null;
} {
    const filters: {
        operacion: FilterOptions["operacion"][] | null;
        tipo: FilterOptions["tipo"][] | null;
        moneda: Moneda | null;
        valor: [number | null, number | null] | null;
        ubicacion: FilterOptions["ubicacion"]["barrio"][] | null;
        estado: FilterOptions["estado"] | null;
        caracteristicas: FilterOptions["caracteristicas"] | null;
        ambientes: FilterOptions["ambientes"] | null;
    } = {
        operacion: null,
        tipo: null,
        moneda: null,
        valor: null,
        ubicacion: null,
        estado: null,
        caracteristicas: null,
        ambientes: null,
    };

    // Operacion
    const operacionParam = searchParams.get("operacion");
    if (operacionParam) {
        filters.operacion = operacionParam.split(",") as FilterOptions["operacion"][];
    }

    // Tipo
    const tipoParam = searchParams.get("tipo");
    if (tipoParam) {
        filters.tipo = tipoParam.split(",") as FilterOptions["tipo"][];
    }

    // Moneda
    const monedaParam = searchParams.get("moneda");
    if (monedaParam && (monedaParam === "USD" || monedaParam === "ARS")) {
        filters.moneda = monedaParam;
    }

    // Valor (precio)
    const valorMinParam = searchParams.get("valorMin");
    const valorMaxParam = searchParams.get("valorMax");
    if (valorMinParam !== null || valorMaxParam !== null) {
        filters.valor = [
            valorMinParam ? Number(valorMinParam) : null,
            valorMaxParam ? Number(valorMaxParam) : null,
        ];
    }

    // Ubicacion
    const ubicacionParam = searchParams.get("ubicacion");
    if (ubicacionParam) {
        filters.ubicacion = ubicacionParam.split(",");
    }

    // Estado (JSON)
    const estadoParam = searchParams.get("estado");
    if (estadoParam) {
        try {
            filters.estado = JSON.parse(estadoParam);
        } catch (e) {
            console.error("Error parsing estado param:", e);
        }
    }

    // Caracteristicas (JSON)
    const caracteristicasParam = searchParams.get("caracteristicas");
    if (caracteristicasParam) {
        try {
            filters.caracteristicas = JSON.parse(caracteristicasParam);
        } catch (e) {
            console.error("Error parsing caracteristicas param:", e);
        }
    }

    // Ambientes (JSON)
    const ambientesParam = searchParams.get("ambientes");
    if (ambientesParam) {
        try {
            filters.ambientes = JSON.parse(ambientesParam);
        } catch (e) {
            console.error("Error parsing ambientes param:", e);
        }
    }

    return filters;
}
